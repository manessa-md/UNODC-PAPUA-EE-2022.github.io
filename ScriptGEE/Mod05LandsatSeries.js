var geet = require('users/elacerda/geet:geet'); 

var ls_collection = geet.landsat_timeseries_by_roi('SR', roi);

var ls_col_filter = ls_collection.filter(ee.Filter.lt('CLOUD_COVER', 20))
                      .select('NDVI')

print(ls_col_filter)

var chart =
    ui.Chart.image
        .series({
          imageCollection: ls_col_filter,
          region: roi,
          reducer: ee.Reducer.mean(),
          scale: 30,
          xProperty: 'system:time_start'
        })
        
print(chart)
