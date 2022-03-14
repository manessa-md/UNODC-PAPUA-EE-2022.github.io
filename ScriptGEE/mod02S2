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


Map.addLayer(s1VV,{},'Polarisasi VV');
Map.addLayer(s1VH,{},'Polarisasi VH');
Map.addLayer(S1,{},'Sentinel-1');

// Download data 
Export.image.toDrive({
  image: S1,
  description: 'Sentinel-1-papua',
  region: geometry
});
```
