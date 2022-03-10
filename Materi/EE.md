# **Materi Google Earth Engine Lanjutan**


## 1.1. Penerapan proses _Thresholding_ dan _Export_ data Raster pada Google Earth Engine



### 1.1.1. Proses _Thresholding_

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

var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')//.filterBounds(table.geometry())
                  .filterDate('2020-01-01', '2021-05-20')
                  .map(maskL8sr)
                  .median();

var dataset1 = dataset.clip(table);

var visParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 3000,
  gamma: 1.4,
};
Map.centerObject(table, 13.4);
Map.addLayer(dataset.clip(table), visParams, 'Lokasi 1, Areal Perambahan');


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

for(var i = 0; i < 1; i++) {var classified = dataset1.select(bands).classify(trained);}

// Define a boxcar or low-pass kernel.
var boxcar = ee.Kernel.square({
  radius: 0.5, units: 'pixels', magnitude: 1
});

// Smooth the image by convolving with the boxcar kernel.
var smooth = classified.convolve(boxcar);

Map.addLayer(smooth,{min: 0, max: 1, palette: ['black', 'green']},
             'classification');
```

### 1.1.2. Proses _Export_ data Raster

- Export to Drive
```
Export.image.toDrive({
  image: smooth,
  description: 'Klasifikasi di Lokasi Pembalakan',
  scale: 30,
  region: table,
  maxPixels: 1e12
});
```

## 1.2. Penerapan Algoritma Indeks Vegetasi untuk Data Citra Satelit Landsat dan Sentinel-2 pada Google Earth Engine

### 1.2.1. Indeks Vegetasi Pada Citra Landsat-8

```
var 
print 
def
// comment 
sensitifitas dalam membuat nama variable
aturan main dalam membuat nama variable
```

### 1.2.2. Indeks Vegetasi Pada Citra Sentinel-2


```
var 
print 
def
// comment 
sensitifitas dalam membuat nama variable
aturan main dalam membuat nama variable
```


```
var link = '86836482971a35a5e735a17e93c23272';
Export.table.toDrive({
  collection: ee.FeatureCollection([ee.Feature(null, stats)]),
  description: 'exported_stats_demo_' + link,
  fileFormat: 'CSV'
})
```

## 1.3. Penerapan data Radar (Sentinel-1) untuk Mengamati Penggundulan Hutan pada Google Earth Engine

```
Object
Date
Array
String
Number
Boolean
```

## 1.4. Visualisasi Diagram _Time Series_ pada Google Earth Engine

```
Object
Date
Array
String
Number
Boolean
```
