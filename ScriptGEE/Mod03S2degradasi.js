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

var S22021 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2021-01-01', '2021-12-30')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds)
                  .mean();
var S22019 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2019-01-01', '2019-12-30')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',40))
                  .map(maskS2clouds)
                  .mean();
                  
print('S22021 : ', S22021)                  
print('S22019 : ', S22019)

var visualization = {
  min: 0.0, 
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S22021, visualization, 'RGB');
Map.addLayer(S22019, visualization, 'RGB');

// 2. NDVI formula

// membuat fungsi formula dimana band NIR adalah B8 dan band Merah adalah B4
var addNDVI = function(image) {
  var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
  return ndvi;
};

//aplikasin fungsi kepada citra S2 yang sudah didefinisikan terlebih dahulu
var S2ndvi2019 = addNDVI(S22019);
var S2ndvi2021 = addNDVI(S22021);

// check data dengan print
print(S2ndvi2019);
print(S2ndvi2021);


//Setting Visualisasi
var visualizationNDVI = {
  min: 0.0, 
  max: 1,
  bands: ['NDVI'],
};

Map.addLayer(S2ndvi2021, visualizationNDVI, 'NDVI 2021')
Map.addLayer(S2ndvi2019, visualizationNDVI, 'NDVI 2019')


// Identifikasi area yang berubah
var degradasi = S2ndvi2019.select('NDVI').subtract(S2ndvi2021.select('NDVI')).rename('NDVI')

print(degradasi)

var visualizationDeg = {
  min: -0.5, 
  max: 0.5,
  bands: ['Degradasi'],
  palette: ["3d9537","ffffff","950b05"],
};

Map.addLayer(degradasi, visualizationDeg, "Degradasi");
