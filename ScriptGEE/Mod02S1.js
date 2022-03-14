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
                  .filterDate('2021-01-01', '2022-03-10')
                  .filter(ee.Filter.bounds(geometry))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',10))
                  .map(maskS2clouds);
                  
print(S2)

var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S2.first(), visualization, 'RGB');

// 2. Melilih data dari image collection
var listOfImages = S2.toList(S2.size());
var img1 = ee.Image(listOfImages.get(0));
var img2 = ee.Image(listOfImages.get(1));

print(img2)

Map.addLayer(img2, visualization, 'img2');

// Download data 
Export.image.toDrive({
  image: img2,
  description: 'Sentinel-2-papua',
  region: geometry
});
