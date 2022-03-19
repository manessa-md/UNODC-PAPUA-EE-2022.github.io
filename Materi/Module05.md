# Earth Engine Apps 

## Pendahuluan

Aplikasi Earth Engine adalah platform antarmuka pengguna yang dinamis dan dapat dibagikan untuk analisis. Dengan aplikasi tersebut, para ahli dapat menggunakan elemen _User Interface_ sederhana untuk memanfaatkan data katalog data Earth Engine serta daya analitik untuk digunakan oleh para ahli dan non-ahli. Aplikasi yang diterbitkan dari Earth Engine dapat diakses melalui link khusus aplikasi yang dibuat pada saat _launching_. Aplikasi yang dipilih sebagai unggulan oleh pembuatnya juga tersedia di Galeri Aplikasi khusus pengguna (mis., USERNAME.users.earthengine.app).

### Membangun Aplikasi

Aplikasi Earth Engine dapat memanfaatkan sebagian besar fungsi yang sama yang digunakan pada _Code Editor_, dengan beberapa perbedaan. Selain itu, pihak google merancang API _User Interface_ dengan mempertimbangkan keinginan pengembang Aplikasi. Jika kita baru menggunakan API _User Interface_, lihat Panduan API UI.
https://developers.google.com/earth-engine/guides/ui

Jika projek sudah di bangun pada _Code Editor_, maka projek tersebut bisa kita publikasikan.

### Mempublikasikan Aplikasi

Untuk mempublikasikan Aplikasi dari _Code Editor_, pertama-tama buat skrip yang ingin kita buat menjadi Aplikasi, lalu buka panel Manajemen Aplikasi, yang dapat kita akses dengan mengklik tombol Aplikasi di atas bagian skrip di Editor Kode.

![image](https://user-images.githubusercontent.com/69818715/158382193-9a52a53e-9fae-4833-beed-ed1791091d9c.png)

Kemudian, klik tombol _New Apps_ pada bagian _Manage Apps_. 

![image](https://user-images.githubusercontent.com/69818715/158382625-43e535bd-ffce-425d-8115-050c76f0fd20.png)

Pada tampilan tersebut, pilih nama Aplikasi, pilih Proyek Google Cloud, dan tentukan lokasi _Source Code Apps_. Batasi akses ke Aplikasi ini ke Grup Google tertentu atau buat agar dapat diakses publik menggunakan opsi di bawah tab Pembatasan. Untuk aplikasi yang dapat diakses publik, kita juga dapat memberikan gambar pratinjau khusus untuk Aplikasi serta deskripsi di tab Galeri. Klik "Feature this app in your Apps Gallery" jika ita ingin Aplikasi ini muncul di galeri publik aplikasi yang tersedia di _USERNAME.users.earthengine.app_. Secara opsional, sertakan logo khusus di sudut kiri atas Aplikasi dengan mengunggah gambar pilihan dari tab Logo.

![image](https://user-images.githubusercontent.com/69818715/158384425-c1fba51b-bd20-4c7b-a1b2-fd8facf4dc15.png)

- Publish Aplikasi dengan mengisi nama dan App ID.

![image](https://user-images.githubusercontent.com/69818715/158385024-ee1494b8-4b20-4e8c-a0a2-bd4eb52fd099.png)

- Selanjutnya, memilih _App Source Code_ terdiri dari pilihan pada (a) Konten editor saat ini, atau (b) script repository.

![image](https://user-images.githubusercontent.com/69818715/158385797-b00e19ab-90a5-49bd-a31f-bf4b3bfc14e8.png)

### Mengatur Aplikasi

Untuk mengelola Aplikasi dari _Code Editor_, selanjutnya buka panel Manajemen Aplikasi dengan mengklik tombol Aplikasi di atas bagian skrip di Editor Kode. Dari sini Anda dapat memperbarui konfigurasi Aplikasi atau menghapus aplikasi.

![image](https://user-images.githubusercontent.com/69818715/158387897-dfdd1329-fdd8-48d5-af62-6dd3c7ce71af.png)

### Contoh Aplikasi Google Earth Engine 

![image](https://user-images.githubusercontent.com/69818715/158388569-03cf1c60-aeaf-4f91-aea7-3c3232d059f2.png)



## Membuat Tampilan User Interface Google Earth Engine

### Widget

Ada berbagai widget yang dapat Anda gunakan untuk membangun UI. Widget ini termasuk tombol, kotak centang, bilah geser, kotak teks, dan menu pilihan. Widget hanya dapat dicetak atau ditambahkan ke panel satu kali. Bagian berikut mengilustrasikan fungsionalitas dasar, tampilan, dan nuansa widget. Lihat bagian Gaya untuk informasi selengkapnya tentang menata widget Anda. Contoh berikut cukup print() widget ke konsol. Untuk detail tentang menambahkan widget ke panel, lihat halaman Panel dan Tata Letak.

### ui.Label

Label hanyalah area di mana teks ditampilkan. Misalnya, kode berikut mencetak label:

```
var label = ui.Label('Cool label!');
print(label);
```

Yang terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158390326-22d35743-e94c-46e5-8314-310b1b9d71f5.png)

Pisahkan label panjang dengan memasukkan karakter baris baru (\n) dan atur argumen properti gaya whiteSpace ke 'pra':

```
print(ui.Label('Here is a:\nnew line', {whiteSpace: 'pre'}));
```

### ui.Button

Button adalah widget UI interaktif yang dapat diklik. Anda dapat menentukan fungsi yang akan dipanggil (fungsi "panggilan balik") saat pengguna mengklik tombol. (Untuk informasi lebih lanjut tentang penanganan acara dengan fungsi panggilan balik, lihat halaman Acara). Contoh berikut mencetak pusat peta saat ini ketika tombol diklik:
```
var button = ui.Button({
  label: 'Get Map Center',
  onClick: function() {
    print(Map.getCenter());
  }
});
print(button);
```

Yang terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158391384-a271afcf-a737-46b0-a8fc-2c02f035d5d6.png)

### ui.CheckBox

Checkbox adalah widget yang memungkinkan pengguna mencentang (atau menghapus centang) sebuah kotak. Saat status kotak centang berubah, panggilan balik yang terdaftar ke widget akan diberikan nilai boolean yang menunjukkan apakah kotak centang sekarang dicentang. Sebagai contoh:

```
var checkbox = ui.Checkbox('Show SRTM layer', true);

checkbox.onChange(function(checked) {
  // Shows or hides the first map layer based on the checkbox's value.
  Map.layers().get(0).setShown(checked);
});

Map.addLayer(ee.Image('CGIAR/SRTM90_V4'));
print(checkbox);
```

Kotak centang yang dicetak akan terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158392707-52395a86-1b96-4937-9f1a-a38917359b3f.png)


Perhatikan bahwa mencentang kotak akan mengaktifkan lapisan yang ditampilkan di peta. Seperti komponen UI lainnya, Peta Editor Kode dapat dimanipulasi secara terprogram. Pelajari lebih lanjut tentang objek Peta di halaman Panel dan Tata Letak.

### ui.Slider

slider adalah widget yang memungkinkan pengguna menyesuaikan slider untuk mendapatkan nomor dalam rentang slider. Konfigurasikan rentang menggunakan konstruktor atau dengan mengatur properti penggeser. Contoh berikut menggunakan penggeser untuk mengatur opasitas lapisan pertama pada Peta. Berikut merupakan contoh bentuk slider.

![image](https://developers.google.com/earth-engine/images/ui_slider.png)

```
var slider = ui.Slider();

slider.setValue(0.9);  // Set a default value.
slider.onChange(function(value) {
  Map.layers().get(0).setOpacity(value);
});

Map.addLayer(ee.Image(255), {palette: 'blue'});
print(slider);
```

### ui.DateSlider

Date Slider merupakan tools yang membuat pengguna (user) dapat mengatur tanggal citra atau data yang diinginkan. Beirkut merupakan contoh bentuk dateslider.

![image](https://developers.google.com/earth-engine/images/DateSlider.png)

```
// Use a DateSlider to create annual composites of this collection.
var collection = ee.ImageCollection('LANDSAT/LC08/C01/T1');
// Use the start of the collection and now to bound the slider.
var start = ee.Image(collection.first()).date().get('year').format();
var now = Date.now();
var end = ee.Date(now).format();

// Run this function on a change of the dateSlider.
var showMosaic = function(range) {
  var mosaic = ee.Algorithms.Landsat.simpleComposite({
    collection: collection.filterDate(range.start(), range.end())
  });
  // Asynchronously compute the name of the composite.  Display it.
  range.start().get('year').evaluate(function(name) {
    var visParams = {bands: ['B4', 'B3', 'B2'], max: 100};
    var layer = ui.Map.Layer(mosaic, visParams, name + ' composite');
    Map.layers().set(0, layer);
  });
};

// Asynchronously compute the date range and show the slider.
var dateRange = ee.DateRange(start, end).evaluate(function(range) {
  var dateSlider = ui.DateSlider({
    start: range['dates'][0],
    end: range['dates'][1],
    value: null,
    period: 365,
    onChange: showMosaic
  });
  Map.add(dateSlider.setValue(now));
});
```

### ui.Textbox
Merupakan tempat untuk pengguna menuliskan teks dengan contoh sebagai berikut.

![image](https://developers.google.com/earth-engine/images/ui_textbox.png)

```
var textbox = ui.Textbox({
  placeholder: 'Enter text here...',
  onChange: function(text) {
    print('So what you are saying is ' + text + '?');
  }
});
print(textbox);
```

### ui.Select
Select merupakan alat untuk pengguna memilih sesuatu, seperti memilih lokasi citra atau gambar sebagai berikut.

![image](https://developers.google.com/earth-engine/images/ui_select.png)

```
var places = {
  MTV: [-122.0849, 37.3887],
  PEK: [116.4056, 39.9097],
  ZRH: [8.536, 47.376]
};

var select = ui.Select({
  items: Object.keys(places),
  onChange: function(key) {
    Map.setCenter(places[key][0], places[key][1]);
  }
});

// Set a place holder.
select.setPlaceholder('Choose a location...');

print(select);
```

### ui.Chart
Chart merupakan tools untuk menampilkan diagram pada aplikasi google earth engine. Diagaram yang ditampilkan beraneka ragam dan biasanya digunakan pada bagian informasi. Diagram ini memiliki banyak jenis dan dapat dicustomisasi sesuai keinginan dan kebutuhan. Untuk lebih lanjut dapat diakses melalui [Diagram Google Earth Engine](https://developers.google.com/earth-engine/guides/charts_overview#chart_types)

### ui.Thumbnail
Thumbnail merupakan alat untuk melihat contoh image dan image collection objek sebagai berikut.

![image](https://developers.google.com/earth-engine/images/ui_thumbnail.png)

```
// Create a box around an area in the Brazilian Amazon.
var box = ee.Geometry.Polygon([[
  [-62.9564, 2.5596], [-62.9550, 2.4313], [-62.8294, 2.4327], [-62.8294, 2.5596]
]]);

// Visualize the image in RGB.
var image = ee.Image('LANDSAT/LE07/C02/T1_L2/LE07_233058_20011113')
                .select(['SR_B[1-3]'])  // blue, green, red reflectance
                .multiply(0.0000275).add(-0.2)  // apply scaling factors
                .visualize({
                  bands: ['SR_B3', 'SR_B2', 'SR_B1'],
                  min: 0,
                  max: 0.12,
                  gamma: 1.3
                });

// Print a thumbnail to the console.
print(ui.Thumbnail({
  image: image,
  params: {dimensions: '256x256', region: box, format: 'png'},
  style: {height: '300px', width: '300px'}
}));
```

### ui.Map
Fungsi Map ini akan menampilkan peta kecil atau inset wilayah penelitian. Melalui peta ini pengguna (user) juga dapat menggeser, memperbesar dan mengecilkan wilayah penelitian sebagai berikut.

![image](https://developers.google.com/earth-engine/images/ui_map.png)

```
// Make a little map.
var map = ui.Map();

// Make the little map display an inset of the big map.
var createInset = function() {
  var bounds = ee.Geometry.Rectangle(Map.getBounds());
  map.centerObject(bounds);
  map.clear();
  map.addLayer(bounds);
};

// Run it once to initialize.
createInset();

// Get a new inset map whenever you click on the big map.
Map.onClick(createInset);

// Display the inset map in the console.
print(map);
```

### ui.Map.Layer
Fungsi ini membuat pengguna dapat mengupdate dan memasukkan peta dasar menggunakan sentinel, landsat dan sebagainya.

```
var consoleMap = ui.Map({
  lon: -2.0174,
  lat: 48.6474,
  zoom: 13
});

// Create a Layer from this Sentinel-2 image
var image = ee.Image('COPERNICUS/S2/20150821T111616_20160314T094808_T30UWU');
var visParams = {bands: ['B4', 'B3', 'B2'], max: 2048, gamma: 1};
var layer = ui.Map.Layer(image, visParams);

// Update the map by updating the layers list.
var layers = consoleMap.layers();
layers.add(layer);

// Make a textbox to accept a gamma value.
// Update the layer when the gamma value is entered.
var gammaBox = ui.Textbox({
  value: 1,
  onChange: function(value) {
    // visParams is NOT an ActiveDictionary, so set it again.
    visParams.gamma = value;
    layer.setVisParams(visParams);
  }
});

print(ui.Label('Enter a gamma value:'));
print(gammaBox);
print(consoleMap);
```

### ui.Map.CloudStorageLayer
Fungsi ini merupakan fungsi untuk menampilkan peta dasar namun menggunakan citra yang disimpan pada google cloud. Mengapa demikian? Apabila menggunakan peta dasar melalui pengolahan script GEE akan memakan waktu yang lama, belum lagi GEE harus mengolah data yang diteliti.
```
Map.add(ui.Map.CloudStorageLayer({
  bucket: 'earthenginepartners-hansen',
  path: 'tiles/gfc_v1.4/loss_year',
  maxZoom: 12,
  suffix: '.png'
}));
```

### ui.Map.DrawingTools
Fungsi ini berfungsi unutk menambahkan atau memasukkan geometry tools kedalam aplikasi secara _default_.
```
Map.drawingTools().setShown(false);

var map = ui.Map();
// Prints true since drawingTools() adds drawing tools to the map.
print(map.drawingTools().getShown());
// Replace the default Map with the newly created map.
ui.root.widgets().reset([map]);

Map.drawingTools().layers().forEach(function(layer) {
  layer.setShown(false);
});

var geometries = [ee.Geometry.Point([0,0]), ee.Geometry.Rectangle([[0,0], [1,1]])];
Map.drawingTools().addLayer(geometries, 'my_geometry1', 'red');

var layer = ui.Map.GeometryLayer(geometries, 'my_geometry2', 'blue');
Map.drawingTools().layers().add(layer);
```

### ui.Map.GeometryLayer
Merupakan widget untuk memasukkan geometry script kedalam google earth engine app.

```
// Load elevation data.
var srtm = ee.Image('USGS/SRTMGL1_003');
Map.addLayer(srtm, {min: 0, max: 5000}, 'SRTM');

// Make a label to display mean elevation at drawn points.
var label = new ui.Label('Draw points to calculate mean elevation');
var inspector = new ui.Panel([label]);
Map.add(inspector);
// Don't make imports that correspond to the drawn points.
Map.drawingTools().setLinked(false);
// Limit the draw modes to points.
Map.drawingTools().setDrawModes(['point']);
// Add an empty layer to hold the drawn points.
Map.drawingTools().addLayer([]);
// Set the geometry type to be point.
Map.drawingTools().setShape('point');
// Enter drawing mode.
Map.drawingTools().draw();

// This function gets called when the geometry layer changes.
// Use debounce to call the function at most every 100 milliseconds.
var getAverageElevation = ui.util.debounce(function() {
  var points = Map.drawingTools().layers().get(0).toGeometry();
  var elevation = srtm.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: points,
    scale: 30
  }).get('elevation');
  // Asynchronously evaluate the mean elevation.
  elevation.evaluate(showElevation);
}, 100);

// Set the callback function on changes of the geometry layer.
Map.drawingTools().onEdit(getAverageElevation);
Map.drawingTools().onDraw(getAverageElevation);
Map.drawingTools().onErase(getAverageElevation);

// Set the label to the result of the mean reduction.
function showElevation(elevation) {
  inspector.clear();
  var elevationLabel = ui.Label('Mean elevation: ' + elevation);
  inspector.add(elevationLabel);
}
```

### ui.Map.Linker
Fungsi ini berfungsi untuk menyinkronkan pergerakan beberapa ui.Map.

```
// Add two maps to the screen.
var left = ui.Map();
var right = ui.Map();
ui.root.clear();
ui.root.add(left);
ui.root.add(right);

// Link the "change-bounds" event for the maps.
// When the user drags one map, the other will be moved in sync.
ui.Map.Linker([left, right], 'change-bounds');
```

### ui.SplitPanel
Merupakan fungsi untuk menampilkan 2 muka peta pada GEE. Tujuan dari hal tersebut adalah untuk membandingkan antara 2 jenis data yang ditampilkan pada wilayah yang sama.

```
// Load an image of the Santa Rosa, California 2017 fires.
var image = ee.Image('LANDSAT/LC08/C01/T1_RT_TOA/LC08_045033_20171011');

// Add a color-SWIR composite to the default Map.
Map.addLayer(image, {bands: ['B7', 'B5', 'B3'], max: 0.3}, 'color-SWIR');

// Make another map and add a color-NIR composite to it.
var linkedMap = ui.Map();
linkedMap.addLayer(image, {bands: ['B5', 'B4', 'B3'], max: 0.3}, 'color-NIR');
// Add a thermal image to the map.
linkedMap.addLayer(image, {
  bands: ['B11'],
  min: 290,
  max: 310,
  palette: ['gray', 'white', 'yellow', 'red']
}, 'Thermal');

// Link the default Map to the other map.
var linker = ui.Map.Linker([ui.root.widgets().get(0), linkedMap]);

// Make an inset map and add it to the linked map.
var inset = ui.Map({style: {position: "bottom-right"}});
linkedMap.add(inset);

// Register a function to the linked map to update the inset map.
linkedMap.onChangeBounds(function() {
  var bounds = ee.Geometry.Rectangle(Map.getBounds());
  inset.centerObject(bounds);
  inset.layers().set(0, bounds);
});

// Create a SplitPanel which holds the linked maps side-by-side.
var splitPanel = ui.SplitPanel({
  firstPanel: linker.get(0),
  secondPanel: linker.get(1),
  orientation: 'horizontal',
  wipe: true,
  style: {stretch: 'both'}
});

// Set the SplitPanel as the only thing in root.
ui.root.widgets().reset([splitPanel]);
linkedMap.setCenter(-122.5048, 38.3998, 12);
```

## Styling Widget
Widget atau fungsi fungsi dalam google earth engine app yang sudah dijelaskan diatas dapat dicustomisasi baik ukuran, jenis font hingga warna dari setiap fungsi tersebut. 

```
var redLabel = ui.Label('Big, Red Label');

redLabel.style().set('color', 'red');
redLabel.style().set('fontWeight', 'bold');
redLabel.style().set({
  fontSize: '32px',
  padding: '10px'
});

print(redLabel);
```
