//Map.centerObject(papua);
//Map.addLayer(papua);

var kotajayapura = papua.filter(ee.Filter.eq("KECAMATAN", "JAYAPURA SELATAN"));
print(kotajayapura)

Map.centerObject(kotajayapura);
Map.addLayer(kotajayapura);

var area = kotajayapura;
Map.centerObject(area);

var geet = require('users/elacerda/geet:geet'); 

var ls_collection = geet.landsat_timeseries_by_roi('SR', area);

var ls_col_filter = ls_collection.filter(ee.Filter.lt('CLOUD_COVER', 10))
                      .select('NDVI')

print(ls_col_filter)

var chart =
    ui.Chart.image
        .series({
          imageCollection: ls_col_filter,
          region: area,
          reducer: ee.Reducer.mean(),
          scale: 30,
          xProperty: 'system:time_start'
        })
        
print(chart)
