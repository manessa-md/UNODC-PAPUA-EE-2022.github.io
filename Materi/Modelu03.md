# PANDUAN DASAR GOOGLE EARTH ENGINE
Module 3 Index Vegetasi Penginderaan Jauh
--------------

## 3a Mengekstrak Indeks Vegetasi Menggunakan Citra Sentinel 2A
Konten Panduan
- Memasukkan Citra
- Melakukan Cloud Mask (Sentinel 2A)
- Membuat Algoritma Index Vegetasi
- Menggabungkan Index Vegetasi kedalam Citra
- Visualisasi Hasil Index vegetasi

### Indeks Vegetasi 
Indeks vegetasi merupakan pengukuran optis tingkat kehijauan (greenness) kanopi vegetasi, sifat komposit dari klorofil daun, luas daun, struktur dan tutupan kanopi vegetasi. Indeks vegetasi telah banyak digunakan sebagai suatu transformasi citra berbasis data spektral yang memiliki banyak manfaat bagi berbagai sektor . Horning dalam Indeks vegetasi dapat secara efektif digunakan untuk pemetaan kekeringan, penggurunan (desertifikasi) dan penggundulan hutan. Secara khusus pemanfaatan indeks vegetasi dalam bidang kehutanan digunakan dalam monitoring luas hutan dan perubahan atau konversi lahan hutan menjadi penggunaan lahan lain. Monitoring yang dilakukan dinilai berdasarkan perubahan nilai indeks vegetasi pada objek. Beragaman algoritma indeks vegetasi dikembangkan seperti NDVI, RVI, EVI, dan berbagai indeks lain dengan fungsi yang berbeda beda. RVI (_Ratio Vegetation Index_) merupakan salah satu rumus indeks vegetasi yang pertama dikembangkan. RVI menggunakan perbandingan (rasio) antara saluran merah (R) dengan saluran _near infrared_. RVI banyak digunakan untuk estimasi dan pemantauan biomassa hijau, khususnya pada tutupan vegetasi dengan kerapatan tinggi, karena indeks ini sangat sensitif terhadap vegetasi dan memiliki korelasi yang baik dengan biomassa tanaman. Namun, ketika tutupan vegetasi jarang (kurang dari 50% tutupan), RVI sensitif terhadap efek atmosfer, dan representasi biomassanya lemahNDVI (Normalize Difference Vegetation Index) merupakan sebuah algoritma untuk mengetahui indeks tingkat kehijauan tanaman, aktivitas fotosintesis vegetasi dan tingkat kerapatan tanaman. NDVI juga memiliki respons sensitif terhadap vegetasi hijau bahkan untuk vegetasi rendah pada daerah tertutup. 

<img width="500" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/RVI.png">

**Rumus Ratio Vegetation Index**

<img width="500" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/NDVI.png">

**Rumus Normalize Difference Vegetation Index**

## Mengekstrak NDVI Menggunakan Citra Sentinel 2A
### Memasukkan Citra Sentinel 2A
Langlah pertama yang dilakukan adalah memasukkan citra sentinel 2A. Namun untuk mendapatkan citra sentinel 2A yang baik dan bersih dari awan perlu dilakukan sebuah proses cloud masking yaitu proses untuk menghilangkan awan atau bayangan awan. Langkah selanjutnya adalah memfilter wilayah dan tanggal seperti yang sudah dilakukan pada modul 2.
```
// 1. Memanggil Data Sentinel-2 

/**
 * Function to mask clouds using the Sentinel-2 QA band
 * @param {ee.Image} image Sentinel-2 image
 * @return {ee.Image} cloud masked Sentinel-2 image
 */
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).clip(geometry).divide(10000);
}

var S2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2021-08-01', '2021-08-30')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds)
                  .mean();
                  
print(S2)
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/Mod3-NDVI-01.png">

**Band pada citra Sentinel 2A** 

```
var visualization = {
  min: 0.0, 
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S2, visualization, 'RGB');

```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/Mod3-NDVI-02.png">

**Hasil cloud masking citra sentinel 2A**

### Menghitung Indeks Vegetasi NDVI dan Menggabungkan band NDVI kedalam citra
NDVI dihitung menggunakan 2 band dalam sentinel 2A yaitu band merah (_red_) dan _near infrared_ (NIR). Hasil perhitungan NDVI kemudian digabungkan dengan citra sentinel 2A. Hasil dari penggabungan tersebut kemudian dilakukan visualiasi.

```
// 2. NDVI formula

// membuat fungsi formula dimana band NIR adalah B8 dan band Merah adalah B4
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return ndvi;
};

//aplikasin fungsi kepada citra S2 yang sudah didefinisikan terlebih dahulu
var S2ndvi = addNDVI(S2);

// check data dengan print
print(S2ndvi);

```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/Mod3-NDVI-03.png">

**Perhitungan NDVI menggunakan citra sentinel 2A**

```
//Setting Visualisasi
var visualizationNDVI = {
  min: 0.0, 
  max: 1,
  bands: ['NDVI'],
};

Map.addLayer(S2ndvi, visualizationNDVI, 'NDVI')
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/eaeebbe76d3d4713265f35d0384ff87f1f8cb1bc/Image/Mod03S2/Mod3-NDVI-04.png">

**Visualiasi NDVI citra sentinel 2A**

Hasil visualisasi NDVI menunjukkan warna hitam dan putih dengan range nilai antara 0 - 1. Dimana semakin tinggi nilai NDVI (berwarna putih) menujukkan kehijauan vegetasi yang tinggi, sedangkan yang berwarna hitam menunjukkan indeks vegetasi yang rendah. 
--------------

## 3b Mengekstrak RVI Menggunakan Citra Sentinel 1
### Memasukkan Citra Sentinel 1
Citra sentinel 1 merupakan citra SAR (_synthetic apeture radar_) dengan 2 jenis saluran yaitu saluran VV (vertical - vertical) dan VH (vertical - horizontal). Sebagai citraSyntetic Aperture Radar (SAR), Sentinel-1 memuat informasi yang lebih fleksibel dalam perolehan data karena tidak terhalang oleh gangguan awan dan cuaca sehingga dapat digunakan untuk memperoleh informasi kondisi lahan. 
```
// 1. Memanggil Data Sentinel-1

var s1VV = ee.ImageCollection("COPERNICUS/S1_GRD")
              .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
              .filter(ee.Filter.eq('instrumentMode', 'IW'))
              .filter(ee.Filter.date('2022-03-01', '2022-03-10'))
              .select('VV')
              .filter(ee.Filter.bounds(geometry))
              .map(function(image) {
                var edge = image.lt(-30.0);
                var maskedImage = image.mask().and(edge.not());
                return image.updateMask(maskedImage);
              })
              .mean()
              .clip(geometry);

var s1VH = ee.ImageCollection("COPERNICUS/S1_GRD")
              .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
              .filter(ee.Filter.eq('instrumentMode', 'IW'))
              .filter(ee.Filter.date('2022-03-01', '2022-03-10'))
              .select('VH')
              .filter(ee.Filter.bounds(geometry))
              .map(function(image) {
                var edge = image.lt(-30.0);
                var maskedImage = image.mask().and(edge.not());
                return image.updateMask(maskedImage);
              })
              .mean()
              .clip(geometry);

var S1 = s1VV.addBands(s1VH)

Map.addLayer(s1VV,imageVisParam3,'Polarisasi VV');
Map.addLayer(s1VH,imageVisParam2,'Polarisasi VH');
Map.addLayer(S1,imageVisParam,'Sentinel-1');
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/1cd266f1414f07c0ba8fbff64c6ef22c375c3c2b/Image/Mod03S1/Mod3-RVI-01.png">

**Citra Sentinel 1 VV dan VH tanpa visualiasi**

### Visualisasi Citra Sentinel 1
```
var geometry = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[140.0460830646493, -2.4074170298256954],
          [140.0460830646493, -3.032929004315599],
          [140.9579482990243, -3.032929004315599],
          [140.9579482990243, -2.4074170298256954]]], null, false),
    imageVisParam = {"opacity":1,"bands":["VV","VH","VV"],"min":-25.6366917765374,"max":-3.7824595224765467,"gamma":1},
    imageVisParam2 = {"opacity":1,"bands":["VH"],"min":-26.346643591794457,"max":-10.389870876889972,"gamma":1},
    imageVisParam3 = {"opacity":1,"bands":["VV"],"min":-19.7839558785873,"max":-3.470742509249604,"gamma":1};
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/1cd266f1414f07c0ba8fbff64c6ef22c375c3c2b/Image/Mod03S1/Mod3-RVI-02.png">

**Hasil Visualisasi citra sentinel 1 VV dan VH**

### Menghitung RVI dan Visualisasi RVI 
Perhitungan nilai RVI menggunakan citra sentinel 1 dilakukan dengan rumus RH = (4 * VH)/(VV + VH). Hasil perhitungan nilai RVI kemudian digabungkan dengan citra Sentinel 1 sama seperti proses penggabungan NDVI dengan citra sentinel 2.  
```
// 2. Membuat fungsi RVI 

// membuat fungsi formula dimana band NIR adalah B8 dan band Merah adalah B4
var addRVI = function(image) {
  var rviT = image.expression(
    '(4 * VH) / (VV + VH)', {
      'VV': image.select('VV'),
      'VH': image.select('VH')
});
  var rvi = rviT.rename('RVI');
  return rvi;
};

//aplikasi kan fungsi kepada citra S1 yang sudah didefinisikan terlebih dahulu
var S1rvi = addRVI(S1);

// check data dengan print
print(S1rvi);

// setting visualisasi data
var visualizationRVI = {
  min: 0.0, 
  max: 5,
  bands: ['RVI'],
};

Map.addLayer(S1rvi, visualizationRVI, 'rvi')
```
<img width="960" alt="Mod3-S2-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/1cd266f1414f07c0ba8fbff64c6ef22c375c3c2b/Image/Mod03S1/Mod3-RVI-03.png">

**Hasil Visualisasi RVI Citra Sentinel 1**

Hasil RVI citra sentinel 1 menunjukkan nilai 0 hingga 5. Berbeda dengan pada perhitungan NDVI dengan nilai 0 - 1, hal ini terjadi karena algoritma NDVI di bentuk dengan normalisasi sehingga menghasilkan nilai 0 - 1.
