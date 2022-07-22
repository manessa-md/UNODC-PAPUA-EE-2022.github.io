# PANDUAN DASAR GOOGLE EARTH ENGINE
Module 2 Dasar Koding
--------------
## 2a. Mengenal Data dan Visualisasi Citra Sentinel-1 menggunakan Google Earth Engine 
### Memilih Citra

Pemilihan citra bisa dilakukan dengan mencari pada tabel pencarian dengan memasukan _keyword_ nama citra satelit "Sentinel-2".

<img width="960" alt="Mod2-S2-01" src="https://user-images.githubusercontent.com/69818715/158024527-fa08e8f8-bf59-4cff-b4ff-4381af3abc15.png">
Gambar 1. Tampilan Search Dataset Citra

### Memahami Informasi Citra Sentinel-2

Agar data citra satelit yang kita pilih sesuai dengan yang kita inginkan, maka perlu untuk _cross check_ data tersebut dengan memahami informasi terkait data citranya. Cara untuk mengetahui informasi dengan _klik_ citra yang hendak kita pilih, pada latihan kali ini menggunakan data citra Sentinel-2 level 2A, setelah itu akan tampil informasi citra seperti pada gambar berikut:

<img width="960" alt="Mod2-S2-02" src="https://user-images.githubusercontent.com/69818715/158025267-f658b97c-4fe1-4b70-ae64-da0efdad71ab.png">
Gambar 2. Informasi Citra Satelit

### Memanggil data Citra Sentinel-2

Tahap pertama pada visualisasi citra adalah proses _load_ dan _filtering_ citra satelit dimana citra satelit yang hendak dipilih di _setting_ sesuai dengan keperluan. Filter yang penting utnuk dilakukan meliputi filtering waktu/date ```.filterDate('2021-01-01', '2022-03-10')```, filtering wilayah tutupan citra ```.filter(ee.Filter.bounds(geometry))```, filtering persentase citra dan masking citra ```.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))```. 
```
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
                  .filterDate('2021-01-01', '2022-03-10')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds);
                  
print(S2)
```

<img width="960" alt="Mod2-S2-04" src="https://user-images.githubusercontent.com/69818715/158045788-dbe83ba5-d384-4390-af9a-07c0882fa96e.png">
Gambar 3. Tampilan Coding Load dan Filtering Citra Satelit

### Visualisasi Citra Sentinel-2

Data citra yang ditampilkan masih berupa ImageCollection (Koleksi Citra) Sentinel-2. Data ImageCollection yang telah di pilih diatas dapat disesuaikan tampilannya agar sesuai dengan informasi yang akan ditampilkan. Visualisasi terdiri dari komposit band ```bands: ['B4', 'B3', 'B2']``` atau pallete (pemilihan warna). Selain itu, dapat mengatur hasil minimal dan maksimal data nilai piksel/panjang gelombang.

```
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S2.first(), visualization, 'RGB');
```

<img width="960" alt="Mod2-S2-05" src="https://user-images.githubusercontent.com/69818715/158046321-e8326070-d054-46bc-9505-95de5cf49336.png">
Gambar 4. Tampilan Visualisasi Citra Sentinel-2


## 2b. Mengenal Data dan Visualisasi Citra Forest Loss menggunakan Google Earth Engine 
### Memilih Citra
Pemilihan citra bisa dilakukan dengan mencari pada tabel pencarian dengan memasukan _keyword_ nama citra satelit "Forest Loss".

<img width="960" alt="Mod2-A-01" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/349bd1eeb0c0dfc636db26d8e95dd3c7f562bfbf/Image/Mod03A/02A01.jpg">
Gambar 5. Tampilan Search Dataset Citra

### Memahami Informasi Data Forest loss
Informasi meta data dari data citra penginderaan jauh harus di pahami dengan baik sebelum menggunakannya:

<img width="960" alt="Mod2-A-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/349bd1eeb0c0dfc636db26d8e95dd3c7f562bfbf/Image/Mod03A/02A02.jpg">
Gambar 6. Tampilan Meta data citra

### Menggunakan data forest loss
Berikut adalah script dasar untuk menampilkan data forest loss yang terdiri dari tiga bagian: 

```

// 1. Memanggil data
// 1. Memanggil data
var dataset = ee.Image('UMD/hansen/global_forest_change_2021_v1_9')
                .clip(adminMimika);

// 2. Setting visualisasi
var treeLossVisParam = {
  bands: ['lossyear'],
  min: 0,
  max: 21,
  palette: ['yellow', 'red']
};


// 3. Menampilkan data ke peta
Map.addLayer(dataset, treeLossVisParam, 'tree loss year');
```


### Memilih data di area yang diinginkan 
#### Menggunakan poligon 



#### Menggunakan batas administrasi
Area analisis bisa dispesifikkan pada batas administrasi tertentu dengan memanggil file vektor dari batas administrasi 
```
var adminMimika = ee.FeatureCollection("projects/ee-masitamanessa-unodc/assets/MIMIKA_ADMINISTRASIKECAMATAN_AR_50K")
```

atau bila ingin memilih kecamatan tertentu
```
var adminMimika = ee.FeatureCollection("projects/ee-masitamanessa-unodc/assets/MIMIKA_ADMINISTRASIKECAMATAN_AR_50K")
print(adminMimika)

var kecamatan = "Jita";
var adminMimika = ee.FeatureCollection("projects/ee-masitamanessa-unodc/assets/MIMIKA_ADMINISTRASIKECAMATAN_AR_50K")
                          .filter(ee.Filter.eq('NAMOBJ', kecamatan));
                          
 ```

menampilkan data
```
Map.addLayer(adminMimika)
Map.centerObject(adminMimika)
```


dan memodifikasi script dengan menambahkan perintah ```.clip()``` dituliskan secara lengkap sebagai berikut
```
// 1. Memanggil data
var dataset = ee.Image('UMD/hansen/global_forest_change_2021_v1_9')
                .clip(adminMimika);
```
setelah mengklik tombol **Run** maka tampilan di Code Editor GEE akan seperti ini

<img width="960" alt="Mod2-A-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/349bd1eeb0c0dfc636db26d8e95dd3c7f562bfbf/Image/Mod03A/02A03.jpg">
Gambar 6. Tampilan Meta data citra

#### Menghitung luasan area hutan terkonversi
anda dapat menghitung luasan area hutan yang terkonversi menjadi non hutan pada kabupaten timika menggunanan code berikut

```
// 4. Mengetahui luasan area terkonversi

var luas = dataset.multiply(ee.Image.pixelArea()).reduceRegion({reducer: ee.Reducer.sum(),  geometry: adminMimika,  scale: 100,  maxPixels: 1e9});
var luasE = ee.Number(luas.get('lossyear')).divide(1000000).round();
print("Luas hutan terkonversi pada rentang tahun 2000 - 2020 di Area analisis sebesar " + ': ' + luasE.getInfo() + " kmsqr")
print("Luas hutan terkonversi pada rentang tahun 2000 - 2020 di" + kecamatan + "sebesar " + ': ' + luasE.getInfo() + " kmsqr")
```

maka akan muncul


<img width="960" alt="Mod2-A-02" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/349bd1eeb0c0dfc636db26d8e95dd3c7f562bfbf/Image/Mod03A/02A04.jpg">
Gambar 6. Tampilan Meta data citra



#### Menampilkan text hitungan di Peta

```
// 5. Menampikan di peta
var profilesOn = false; // status of analysis profiles
// The layout is vertical flow by default.
var panel = ui.Panel({style: {width: '600px',position: 'bottom-right'}})
    .add(ui.Label("Luas hutan terkonversi pada rentang tahun 2000 - 2021 di " + kecamatan +  " sebesar " + ': ' + luasE.getInfo() + " kmsqr"));
    Map.add(panel);
    
 ```



