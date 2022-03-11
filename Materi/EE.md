# **Materi Google Earth Engine Lanjutan**


## 1.1. Penerapan proses _Thresholding_ dan _Export_ data Raster pada Google Earth Engine

_Thresholding_ merupakan salah satu metode segmentasi citra di mana prosesnya didasarkan pada perbedaan derajat keabuan citra. Proses ini menjadi salah satu aspek penting dalam pengolahan data citra satelit penginderaan jauh. Hal tersebut dapat menjadikan citra tersegmentasi dan memungkinkan terbagi atas beberapa kelas atau bahkan menghilangkan beberapa nilai piksel pada citra yang tidak di inginkan. 
Selain melakukan _threshold_, Platform Google Earth Engine juga memungkinkan adalah proses _export_ data baik raster, vektor maupun video. Proses _export_ ini memungkinkan untuk memilih tempat penyimpanan, seperti: Google Drive, Asset Google Earth Engine, atau Fasilitas Cloud Lainnya. Karena hal tersebut harapannya dapat terjadi kemudahan dalam transfer data.
Pada Google Earth Engine (GEE) proses _threshold_ dan _Export_ data Raster dapat dilakukan dengan beberapa langkah berikut ini:

### 1.1.1. Proses _Thresholding_

Langkah pertama dalam proses threholding yakni menentukan wilayah yang akan di amati dengan membuat _geometry polygon_ di wilayah tersebut. 

```
var AOILP = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[140.6741602588889, -2.9164249722345037],
          [140.6741602588889, -3.0048840044101346],
          [140.79260660898652, -3.0048840044101346],
          [140.79260660898652, -2.9164249722345037]]], null, false),
    Hutan = /* color: #98ff00 */ee.Feature(
        ee.Geometry.MultiPoint(
            [[140.7302630567184, -2.9605905574002214],
             [140.7209019250616, -2.9604607152076103],
             [140.69801915878944, -2.942412502667295],
             [140.73767395261336, -2.9359202683256966],
             [140.7435246598989, -2.9798070337586546],
             [140.70660019614147, -2.9244938443004678],
             [140.75327583870808, -2.986818367387429],
             [140.6822872569773, -2.934102435945508],
             [140.71258091914444, -2.9333233640203797],
             [140.72662261662967, -2.9618889784894202]]),
        {
          "lc": 1,
          "system:index": "0"
        }),
    Non = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.MultiPoint(
            [[140.770957976282, -2.950592664091174],
             [140.76965781910744, -2.932024909605685],
             [140.79059034961782, -2.983442545666383],
             [140.76289700179976, -2.9344919717044466],
             [140.72441234943292, -2.9204685989946544],
             [140.69922859503077, -2.9581331084543994],
             [140.70826227499293, -2.950011457415313],
             [140.71500979435834, -2.94182803038493],
             [140.7107182599345, -2.9455138801028893],
             [140.77104001302934, -2.96859441992013]]),
        {
          "lc": 0,
          "system:index": "0"
        });
```

Langkah kedua sangat terkait dengan proses threshold yakni memilih produk citra satelit, _filterring_ waktu perekaman, penentuan tingkat persentase tutupan awan, _masking_ awan, hingga pemotongan citra sesuai dengan wilayah kajian. 

```
/**
 * Function to mask clouds based on the pixel_qa band of Landsat 8 SR data.
 * @param {ee.Image} image input Landsat 8 SR image
 * @return {ee.Image} cloudmasked Landsat 8 image
 */
function maskL8sr(image) {
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
  var cloudShadowBitMask = (1 << 3);
  var cloudsBitMask = (1 << 5);
  // Get the pixel QA band.
  var qa = image.select('pixel_qa');
  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                 .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  return image.updateMask(mask);
}

var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')//.filterBounds(AOILP.geometry())
                  .filterDate('2020-01-01', '2021-05-20').filterMetadata('CLOUD_COVER','less_than', 10)
                  .map(maskL8sr)
                  .median();

var dataset1 = dataset.clip(AOILP);

Map.addLayer(dataset1);
```

Langkah ketiga adalah komposit citra agar citra yang ditampilkan sesuai dengan keadaan visual di lapangan.

```
var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};
Map.centerObject(AOILP,13.4);
Map.addLayer(dataset1, visParams, 'Lokasi 1, Areal Perambahan');
```
Langkah keempat adalah proses klasifikasi dengan penentuan sampel untuk membuat referemsi ambang nilai _pixel_. Hasil klasifikasi kemudian di visualisasikan dengan warna tertentu agar terlihat perbedaan antar kelasnya.

```
var sampel = ee.FeatureCollection([Non,
  Hutan]);

var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B10', 'B11'];

var label = 'lc';

var training = dataset1.select(bands).sampleRegions({
  collection: sampel,
  properties: [label],
  scale: 30
});

var trained = ee.Classifier.smileRandomForest(100, 2).train(training, label, bands);

var classified = dataset1.select(bands).classify(trained);

Map.addLayer(classified,{min: 0, max: 1, palette: ['black', 'green']},
             'classification');
```

### 1.1.2. Proses _Export_ data Raster

Proses _Export_ dilakukan setelah dilakukan langkah penentuan citra serta pengolahan. Hasil _export_ umumnya akan di simpan pada Google Drive pemilik akun.
```
Export.image.toDrive({
  image: smooth,
  description: 'Klasifikasi di Lokasi Pembalakan',
  scale: 30,
  region: AOILP,
  maxPixels: 1e12
});
```

## 1.2. Penerapan Algoritma Indeks Vegetasi untuk Data Citra Satelit Sentinel-2 dan Landsat-8 pada Google Earth Engine

Pada platform Google Earth Engine terdapat dukungan penerapan algoritma sebagai bagian dari pengolahan dan analisis data citra satelit untuk menunjukan model yang sesuai dengan kebutuhan. Sampai saat ini telah terdapat banyak algoritma yang telah dikembangkan oleh peneliti. Algoritma yang paling baik dapat diukur dari tingkat akurasi yang di hasilkan. Berikut beberapa algoritma indeks vegetasi yang banyak digunakan untuk beberapa kebutuhan analisis. 

![Capture](https://user-images.githubusercontent.com/69818715/157801340-a763455d-9c81-43bf-8b09-f81e4316013d.JPG)

Keterangan : R = Panjang Gelombang

### 1.2.1. Indeks Vegetasi Pada Citra Sentinel-2
Contoh pertama adalah proses penerapan algoritma indeks vegetasi (EVI) pada citra sentinel-2. 
- Langkah pertama adalah penentuan 
```
var table = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[140.6741602588889, -2.9164249722345037],
          [140.6741602588889, -3.0048840044101346],
          [140.79260660898652, -3.0048840044101346],
          [140.79260660898652, -2.9164249722345037]]], null, false);
          
//Daerah Kajian
Map.centerObject(table, 13,5);
 ``` 
    
    
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

  return image.updateMask(mask).divide(10000);}

var dataset = ee.ImageCollection('COPERNICUS/S2_SR')
                  .filterDate('2020-01-11', '2020-07-20')
                  .filterBounds(table)
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(maskS2clouds).median();
print(dataset);
```

```
//menghitung EVI
var dataset1 = dataset.clip(table);
var evi =dataset1.expression(
    '2.5 * ((NIR-RED) / (NIR +6 * RED -7.5* BLUE))', {
      'NIR':dataset1.select('B8'),
      'RED':dataset1.select('B4'),
      'BLUE':dataset1.select('B2')
    });

evi = evi.multiply(0.3);
var meanEVI2020 = evi.rename('EVI');

var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};

Map.addLayer(meanEVI2020, colorizedVis, 'EVI');
```

### 1.2.2. Indeks Vegetasi Pada Citra Landsat-8 
Contoh selanjutnya adalah proses penerapan algoritma indeks vegetasi (NDVI) pada citra Landsat-8. Dimana penerapan algoritma NDVI sangat familiar digunakan pada citra satelit Landsat-8 karena relatif lebih mudah dalam penerapannya.

```
var table = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[140.6741602588889, -2.9164249722345037],
          [140.6741602588889, -3.0048840044101346],
          [140.79260660898652, -3.0048840044101346],
          [140.79260660898652, -2.9164249722345037]]], null, false);
//Daerah Kajian
Map.centerObject(table, 13,5);
```

```
//cloud masking
/**
 * Function to mask clouds based on the pixel_qa band of Landsat 8 SR data.
 * @param {ee.Image} image input Landsat 8 SR image
 * @return {ee.Image} cloudmasked Landsat 8 image
 */
 // Fungsi scaling factor
var multiply = function(image){
  // multply image
  var img = image.multiply(0.0001);
  return img.set('system:time_start',image.get('system:time_start')) ;
};
function maskL8sr(image) {
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
  var cloudShadowBitMask = (1 << 3);
  var cloudsBitMask = (1 << 5);
  // Get the pixel QA band.
  var qa = image.select('pixel_qa');
  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                 .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  return image.updateMask(mask);
}
var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
                  .filterDate('2019-01-01', '2020-12-31')
                  .filterMetadata('CLOUD_COVER','less_than', 10)
                  .map(maskL8sr).median();
print(dataset);
```

```
var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};

//menghitung NDVI
var ndvi = dataset.expression( "(NIR - Red) / (NIR + Red)", 
          { NIR: dataset.select("B5"), 
          Red: dataset.select("B4") });
var ndvi = dataset.normalizedDifference(['B5','B4']);

var meanNDVI2020 = ndvi.rename('NDVI');

var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};

Map.addLayer(meanNDVI2020.clip(table), colorizedVis, 'NDVI');
```

## 1.3. Penerapan data Radar (Sentinel-1) untuk Mengamati Penggundulan Hutan pada Google Earth Engine

```
// Menampilkan Citra Sentinel-1 dengan VV Polarisation
var s1 = ee.ImageCollection('COPERNICUS/S1_GRD')
.filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
.filter(ee.Filter.eq('instrumentMode', 'IW'))
.filterBounds(roi)
.select(['VV']);

// Waktu Sebelum dan Sesudah Kejadian
var Sebelum = s1.filterDate('2018-06-01', '2018-08-03').mosaic().clip(roi);
var Sesudah = s1.filterDate('2019-06-01', '2019-08-03').mosaic().clip(roi);
```

```
// Menentukan ambang batas penghalusan area banjir
var Radius_Penghalusan = 10; 
var Ambang_atas = -3;
var Beda_Kehalusan = Sebelum.focal_median(Radius_Penghalusan)
                            .subtract(Sesudah.focal_median(Radius_Penghalusan));
var Ambang_Perbedaan = Beda_Kehalusan.lt(Ambang_atas);
```

```
// Menampilkan Hasil
Map.centerObject(roi, 13);
Map.addLayer(Sebelum, {min:-30,max:0}, 'Sebelum');
Map.addLayer(Sesudah, {min:-30,max:0}, 'Sesudah');
Map.addLayer(Ambang_Perbedaan.updateMask(Ambang_Perbedaan), Deforestasi,'Deforestasi');
```
Terima Kasih
