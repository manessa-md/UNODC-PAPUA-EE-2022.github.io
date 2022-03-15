// Aplikasi untuk timeseries 
Map.setOptions('HYBRID');
Map.centerObject(geometry, 8);

var cloud_masks = require('users/fitoprincipe/geetools:cloud_masks');
var sentinel2function = cloud_masks.sentinel2();


var profilesOn = false; // status of analysis profiles

// The layout is vertical flow by default.
var panel = ui.Panel({style: {width: '600px',position: 'bottom-right'}})
    .add(ui.Label('Choose a site to explore'));

// 1. plot titik observasi

var places = { 
  '01. Lokasi1 areal perambahan' : [140.714500, -2.920361],
  '02. Lokasi2 areal penebangan' : [135.213056, -3.530556],
  '03. Lokasi3 pembangunan jalan' : [135.214444, -3.528889],
};

var select = ui.Select({
  items: Object.keys(places),
  onChange: function(key) {
    var pois = ee.Geometry.Point(places[key]);
    var poi = pois.buffer(100);
    var area = pois.buffer(1000);
    Map.setCenter(places[key][0], places[key][1],15);
    Map.layers().set(2, ui.Map.Layer(poi, {color: 'FF0000'}));
    
var S2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  //.filterDate('2020-01-01', '2022-03-10')
                  .filter(ee.Filter.bounds(area))
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(sentinel2function);
    //print(S2)
    
  // 2. NDVI formula
  // membuat fungsi formula dimana band NIR adalah B8 dan band Merah adalah B4
  var addNDVI = function(image) {

      var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
    //var ndvi  = ndvis;
    return ndvi.copyProperties(image, ["system:time_start"]);
  };
  
  var maskNDVI = function(image){
    var NDVI = image.select("NDVI");
    var t1 = image.updateMask(NDVI.lt(1));
    var t2 = t1.updateMask(NDVI.gt(0.3));
    return(t2);
};
  
  //aplikasin fungsi kepada citra S2 yang sudah didefinisikan terlebih dahulu
  var S2ndvis = S2.map(addNDVI);
  var S2ndvi  = S2ndvis.map(maskNDVI);

var chartNDVI = ui.Chart.image.series(S2ndvi, poi, ee.Reducer.mean(), 10)
      .setOptions({
        title: 'NDVI',
        vAxis: {title: 'Vegetation Index'},
        lineWidth: 1,
        pointSize: 3,
        trendlines: {0: {
        color: 'CC0000',
        type: 'linear',
              showR2: true,
              visibleInLegend: true
      }},
      });
      
      panel.widgets().set(2, chartNDVI);
      
      
    chartNDVI.onClick(function (xValue, yValue, seriesName) {
        if (!xValue) return;  // Selection was cleared.
        //print(ee.String(seriesName));

        // Show the image for the clicked year.
        var rgb = ee.Image(S2.filter(ee.Filter.equals('system:time_start', xValue)).median()).clip(area);
        
        var image = ee.Image(S2ndvi.filter(ee.Filter.equals('system:time_start', xValue)).median()).clip(area);
        var layer = ui.Map.Layer(image, {
                min: 0.2,
                max: 1.0,
                palette: [
                          'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
                          '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
                          '012E01', '011D01', '011301'
                        ],
            
        });
        profilesOn ? Map.layers().reset([layer, profiles]) : Map.layers().reset([layer]);
        Map.layers().set(2, ui.Map.Layer(poi, {color: 'FF0000'}));
    });
    
  }
});

// Set a place holder.
select.setPlaceholder('Choose a Site...');
panel.widgets().set(2, select);

Map.add(panel);
