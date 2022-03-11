## Google Earth Engine Interface

Google earth engine memiliki tampilan yang sangat sederhana dengan fungsi yang sangat beragam. Pengolahan data secara spasial maupun statistik dapat dilakukan pada aplikasi ini. 
[Gambar 1. Interface Google Earth Engine]![EEInterfacebaru](https://user-images.githubusercontent.com/101231694/157897507-8a9028e2-3deb-4e11-9bf0-822a8b0b7255.png)

## 1. Search box
Merupakan kotak pencarian seperti pada laman google.com, namun pada aplikasi google earth engine search box digunakan hanya untuk mencari citra satelit. Kata kunci pencarian dapat menggunakan nama citra yang dicari atau fungsi dari citra tersebut.

## 2. Script, doc dan asset
Bagian ini terdiri dari 3 bagian yang terpisah. Pada bagian script terdapat script _coding_ yang sudah pernah dibuat dan di save, serta terdapat beberapa contoh script aplikasi citra satelit yang dibuat oleh tim google. Pada bagian doc terdapat instruksi atau contoh dari function. Bagian ini sangat berguna karena terkadang kita tidak dapat menghafal semua script dan fungsinya. Bagian terakhir yaitu asset, yaitu bagian yang memiliki fungsi sebagai tempat untuk mengunggah dan menyimpan file spasial (json, kml, shp dan sebagainya) dari komputer menuju earth engine. 

## 3. Code Editor
Merupakan bagian google earth engine untuk pengguna menuliskan _coding_ atau perintah pengolahan data spasial terhadap komputer google (cloud computing). Pada bagian ini perintah dituliskan dalam bahasa pemrograman javascript. Pada bagian ini juga terdapat tools save untuk menyimpan hasil _coding_, run untuk menjalankan _coding_ dan reset untuk menghapus semua _coding_ yang dibuat.

## 4. Inspector, console dan task
Bagian ini terdiri dari 3 bagian yang terpisah. Inspector merupakan bagian dalam earth engine dimana computer google mendeteksi kesalahan perintah yang diberikan. Biasanya terdapat warna merah pada baris perintah yang salah. Console merupakan bagian earth engine untuk menampilkan hasil data non spasial seperti data citra dan hasil pengolahan statistik. Sedangkan task merupakan bagian untuk melakukan dan melihat upload data hasil pengolahan di google earth engine.

## 5. Geometry tools
Geometry tools merupakan alat dalam google earth engine yang memiliki fungsi untuk membuat bentuk bentuk geometri dengan nilai koordinat di muka peta. Bentuk geometri yang dapat dibuat berupa titik, garis dan polygon.

## 6. Muka Peta
Merupakan bagian utama dimana hasil dari perintah _coding_ dapat ditampilkan melalui proses visualiasi. Pada bagian muka peta juga terdapat layer dan jenis peta dasar. Layer merupakan lapisan peta yang ditampilkan selain peta dasar sedangkan peta dasar yang disediakan google terdapat 2 jenis yaitu peta satelit dan garis.




The objective of this lab is to give you an introduction to the Google Earth Engine processing environment. By the end of this exercise you will be able to search, find and visualise a broad range of remotely sensed datasets. We will start with single-band imagery - elevation data from the SRTM mission.

## 1. The Earth Engine code editor

![Figure 1. The Google Earth Engine environment](gee_editor.png)


1. Editor Panel
	- The Editor Panel is where you write and edit your Javascript code
2. Right Panel
	- Console tab for printing output.
	- Inspector tab for querying map results.
	- Tasks tab for managing long­ running tasks.
3. Left Panel
	- Scripts tab for managing your programming scripts.
	- Docs tab for accessing documentation of Earth Engine objects and methods, as well as a few specific to the Code Editor application
	- Assets tab for managing assets that you upload.
4. Interactive Map
	- For visualizing map layer output
5. Search Bar
	- For finding datasets and places of interest
6. Help Menu
	- User guide ­ reference documentation
	- Help forum ­ Google group for discussing Earth Engine
	- Shortcuts ­ Keyboard shortcuts for the Code Editor
	- Feature Tour ­ overview of the Code Editor
	- Feedback ­ for sending feedback on the Code Editor
	- Suggest a dataset. Our intention is to continue to collect datasets in our public archive
and make them more accessible, so we appreciate suggestions on which new datasets we should ingest into the Earth Engine public archive.

---------

## 2. Getting started with images

1. Navigate to Darwin and zoom in using the mouse wheel.

![Figure 2. Zoom to Darwin](navdarwin.png)


2. Clear the script workspace by selecting "Clear script" from the Reset button dropdown menu.

![Figure 3. Clear script](clearscript.png)

3. Search for “elevation” and click on the SRTM Digital Elevation Data 30m result to show the dataset description.

![Figure 4. Search for elevation data](elevsearch.png)

4. View the information on the dataset, and then click on Import, which moves the variable to the Imports section at the top of your script.

![Figure 4. View elevation datasource and import](importsrtm.png)

5. Rename the default variable name "image" to be "srtm".

![Figure 5. Rename image](renamesrtm.png)

6. Add the image object to the console by coping the script below into the code editor, and click "run" :

```JavaScript
print(srtm);
```
![Figure 6. Print SRTM](printsrtm.png)


7. Browse through the information that was printed to the console. Open the “bands” section to show the one band named “elevation”. Note that all this same information is automatically available for all variables in the Imports section.

![Figure 7. SRTM in console](bandssrtm.png)


8. Use the Map.addLayer() method to add the image to the interactive map. We will start simple, without using any of the optional parameters.

```JavaScript
Map.addLayer(srtm);
```

The displayed map will look pretty flat grey, because the default visualization parameters map the full 16­bit range of the data onto the black–white range, but the elevation range is much smaller than that in any particular location. We’ll fix it in a moment.

![Figure 8. Map SRTM](mapsrtm.png)

7. Select the Inspector tab. Then click on a few points on the map to get a feel for the elevation range in this area.

![Figure 8. Inspect SRTM](inspecsrtm.png)

8. Now you can set some more appropriate visualization parameters by adjusting the code as follows (units are in meters above sea level):

```JavaScript
Map.addLayer(srtm, {min: 0, max: 300});
```
![Figure 9. Visualise SRTM](vissrtm.png)

9. You will now be able to see variation in elevation range with low values in black and highest points in white. Layers added to the map will have default names like "Layer 1", "Layer 2", etc. To improve the readability, we can give each layer a human­-readable name, by adding a title with the syntax in the following code. Don't forget to click run.

```JavaScript
Map.addLayer(srtm, {min: 0, max: 300}, 'Elevation above sea level');
```
![Figure 10. Rename title](title2srtm.png)

10. Now the last step for today is to save your code, however before doing that it is good practice to add a some comment lines to your code reminding you of what you did and why. We add these with two forward slashes // :

```Javascript
// Print data details to console
print(srtm);

// Add the SRTM data to the interactive map
Map.addLayer(srtm)

// Add the data again, but with rescrited value ranges for better visualisation
Map.addLayer(srtm, {min: 0, max: 300})

// Add the data again, with value ranges, and a useful title for teh Layer tab
Map.addLayer(srtm, {min: 0, max: 300}, 'Elevation above sea level');
```
![Figure 11. Comment script](commentsrtm.png)

11. The next step is then to save you script by clicking "Save". It will be saved in your private repository, and will be accessible the next time you log in to Earth Engine.

![Figure 12. Comment script](savesrtm.png)

12. If you would like to experiment with different colour combinations, you can play with colour palettes as per the example below:

```Javascript
Map.addLayer(srtm, {min: 0, max: 300, palette: ['blue', 'yellow', 'red']}, 'Elevation above sea level');
```

![Figure 13. Colour scale elevation](coloursrtm.png)

13. For better visualisation we can create a hillshade view of the elevation data. Remember you can use the Layer transparency options to create draped images for colourised hillshades.

```JavaScript
var hillshade = ee.Terrain.hillshade(srtm);
Map.addLayer(hillshade, {min: 150, max:255}, 'Hillshade');
```

![Figure 14. Hillshade view](hillsrtm.png)


14. Slope works in a similar way:

```javascript
var slope = ee.Terrain.slope(srtm);
Map.addLayer(slope, {min: 0, max: 20}, 'Slope')
```

![Figure 15. Slope map](slopesrtm.png)
-------
### Thank you
