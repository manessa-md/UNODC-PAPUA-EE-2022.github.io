# PANDUAN DASAR GOOGLE EARTH ENGINE

## Membuat Grafik Perubahan Indeks Vegetasi Hutan Menggunakan Citra Sentinel
Konten Panduan
- Menentukan titik lokasi penelitian
- Melakukan Cloud Mask dan Memasukkan Citra Sentinel 
- Membuat Algoritma Index Vegetasi
- Menggabungkan Index Vegetasi kedalam Citra
- Membuat Grafik Indeks Vegetasi

### Indeks Vegetasi 
Indeks vegetasi merupakan pengukuran optis tingkat kehijauan (greenness) kanopi vegetasi, sifat komposit dari klorofil daun, luas daun, struktur dan tutupan kanopi vegetasi. Indeks vegetasi telah banyak digunakan sebagai suatu transformasi citra berbasis data spektral yang memiliki banyak manfaat bagi berbagai sektor . Horning dalam Indeks vegetasi dapat secara efektif digunakan untuk pemetaan kekeringan, penggurunan (desertifikasi) dan penggundulan hutan. Secara khusus pemanfaatan indeks vegetasi dalam bidang kehutanan digunakan dalam monitoring luas hutan dan perubahan atau konversi lahan hutan menjadi penggunaan lahan lain. Monitoring yang dilakukan dinilai berdasarkan perubahan nilai indeks vegetasi pada objek. Beragaman algoritma indeks vegetasi dikembangkan seperti NDVI, RVI, EVI, dan berbagai indeks lain dengan fungsi yang berbeda beda. RVI (_Ratio Vegetation Index_) merupakan salah satu rumus indeks vegetasi yang pertama dikembangkan. RVI menggunakan perbandingan (rasio) antara saluran merah (R) dengan saluran _near infrared_. RVI banyak digunakan untuk estimasi dan pemantauan biomassa hijau, khususnya pada tutupan vegetasi dengan kerapatan tinggi, karena indeks ini sangat sensitif terhadap vegetasi dan memiliki korelasi yang baik dengan biomassa tanaman. Namun, ketika tutupan vegetasi jarang (kurang dari 50% tutupan), RVI sensitif terhadap efek atmosfer, dan representasi biomassanya lemahNDVI (Normalize Difference Vegetation Index) merupakan sebuah algoritma untuk mengetahui indeks tingkat kehijauan tanaman, aktivitas fotosintesis vegetasi dan tingkat kerapatan tanaman. NDVI juga memiliki respons sensitif terhadap vegetasi hijau bahkan untuk vegetasi rendah pada daerah tertutup. 

<img width="500" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/RVI.png">

**Rumus Ratio Vegetation Index**

<img width="500" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/NDVI.png">

**Rumus Normalize Difference Vegetation Index**

## Grafik Perubahan Nilai NDVI Menggunakan Citra Sentinel 2A
### Menentukan Titik Lokasi Penelitian
Lokasi penelitian yang digunakan dapat berupa titik maupun polygon (area). Pembuatan lokasi sampel dapat melalui pembuatan manual menggunakan geometry tools pada Google Earth Engine maupun menggunakan asset.   

```
// 1. plot titik observasi
var loc1p = ee.Geometry.Point([140.714500, -2.920361]);
var loc2p = ee.Geometry.Point([135.213056, -3.530556]);
var loc3p = ee.Geometry.Point([135.214444, -3.528889]);


var loc1 = ee.Geometry(loc1p).buffer(100);
var loc2 = ee.Geometry(loc2p).buffer(100);
var loc3 = ee.Geometry(loc3p).buffer(100);

Map.addLayer(loc1,{}, "lokasi 1")
Map.addLayer(loc2,{}, "lokasi 2")
Map.addLayer(loc3,{}, "lokasi 3")

var geometry = loc3
```

<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/f828baa85854973c1510c521bda9fbd40c4a9f17/Image/Mod05S2/Mod05-S2-01.png">

**Pembuatan Titik Lokasi Penelitian**

<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/f828baa85854973c1510c521bda9fbd40c4a9f17/Image/eeInterface/Point.png">

**Pembuatan Titik Lokasi Penelitian Menggunakan Point Geometry Tools**

### Memasukkan Citra Sentinel 2A
Langlah pertama yang dilakukan adalah memasukkan citra sentinel 2A. Namun untuk mendapatkan citra sentinel 2A yang baik dan bersih dari awan perlu dilakukan sebuah proses cloud masking yaitu proses untuk menghilangkan awan atau bayangan awan. Langkah selanjutnya adalah memfilter wilayah dan tanggal seperti yang sudah dilakukan pada modul 2.

```
// 2. Memanggil Data Sentinel-2
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).clip(geometry).divide(10000).copyProperties(image, ["system:time_start"]);
}

var S2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2020-01-01', '2022-03-10')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(maskS2clouds);
                  
print(S2)
```

<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/f828baa85854973c1510c521bda9fbd40c4a9f17/Image/Mod05S2/Mod05-S2-02.png">

**Cloud Masking Serta Memasukkan Citra Sentinel 2A**

### Menghitung Indeks Vegetasi NDVI dan Menggabungkan band NDVI kedalam citra
NDVI dihitung menggunakan 2 band dalam sentinel 2A yaitu band merah (_red_) dan _near infrared_ (NIR). Hasil perhitungan NDVI kemudian digabungkan dengan citra sentinel 2A. 

```
// 3. NDVI formula
// membuat fungsi formula dimana band NIR adalah B8 dan band Merah adalah B4
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI').copyProperties(image, ["system:time_start"]);
  //var ndvi  = ndvis;
  return ndvi;
};

//aplikasin fungsi kepada citra S2 yang sudah didefinisikan terlebih dahulu
var S2ndvi = S2.map(addNDVI);

// check data dengan print
print(S2ndvi);
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/f828baa85854973c1510c521bda9fbd40c4a9f17/Image/Mod05S2/Mod05-S2-03.png">

**Membuat band NDVI serta Menggabungkan dengan Citra Sentinel 2A**

Pada kesempatan ini penulis memilih untuk tidak memvisualisasikan nilai NDVI pada peta, namun fokus pada perubahan nilai NDVI pada titik sampel menggunakan grafik.

### Membuat Grafik Perubahan NDVI
Grafik merupakan hasil pengolahan data yang disajikan dengan gambar, bentuk, garis dan sebagainya sehingga mudah untuk dimengerti oleh masyarakat umum. Pembuatan grafik ini untuk membuktikan serta menguatkan perubahan nilai NDVI pada titik sampel. Apakah nilai NDVI semakin baik (tinggi) atau semakin rendah. Melalui grafik juga dapat terlihat bagaimana tren perubahan dari nilai NDVI pada lokasi penelitian sehingga lebih memudahkan peneliti maupun pengambil kebijakan dalam menentukan suatu keputusan. Pada kesempatan kali ini akan dibuat grafik perubahan nilai NDVI dari beberapa titik sampel. 

```
// 4. Membuat grafik
var chart1 = ui.Chart.image.series(S2ndvi, geometry, ee.Reducer.mean(), 10)
      .setOptions({
        title: 'Vegetation Index',
        vAxis: {title: 'NDVI'},
        lineWidth: 1,
        pointSize: 3,
        trendlines: {0: {
        color: 'CC0000',
        type: 'linear',
              showR2: true,
              visibleInLegend: true
      }},
      });

print(chart1)

```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/f828baa85854973c1510c521bda9fbd40c4a9f17/Image/Mod05S2/Mod05-S2-04.png">

**Pembuatan Grafik Perubahan Nilai NDVI Menggunakan Citra Sentinel 2A**

<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/122008cfd4d701119073ddc079097a62b37dbd62/Image/Mod05S2/tes.png">

**Hasil Grafik Perubahan Nilai NDVI Menggunakan Citra Sentinel 2A pada Titik Penelitian**
