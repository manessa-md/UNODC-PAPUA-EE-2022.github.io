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

var visualization = {
  min: 0.0, 
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S2, visualization, 'RGB');

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


//Setting Visualisasi
var visualizationNDVI = {
  min: 0.0, 
  max: 1,
  bands: ['NDVI'],
};

Map.addLayer(S2ndvi, visualizationNDVI, 'NDVI')




