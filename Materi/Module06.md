#**Export Data dari GEE**

Data citra Sentinel dengan fungsi NDVI dan RVI yang telah diolah pada platform GEE, selanjutnya akan dilakukan visualisasi data dengan output yang dihasilkan adalah Peta. Dihasilkannya Peta bertujuan untuk memudahkan dalam menginterpretasi data, sehingga dapat dengan mudah dimengerti oleh setiap pembaca. Visualisasi peta dapat dilakukan pada software QGIS. Sebelum melakukan visualisasi pada peta, terlebih dahulu dilakukan proses pengunduhan data dalam format (.tiff) dari platform GEE ke PC anda.

Berikut merupakan langkah-langkah pengunduhan data pada GEE:

##Proses Export Data (.Tiff)
###1. Masukan Script Export Data, Kemudian Klik Run untuk menjalankan Script
Script export data bertujuan untuk mengekstrak data dalam format (.tiff) ke dalam folder Google Drive anda.

'''
//Export Data Citra Sentinel dengan fungsi NDVI dalam Format Tiff

Export.image.toDrive({
  image: S2ndvi,
  description: 'S2ndvi',
  folder: 'WORK',
  region: geometry,
  scale: 10,
  crs: 'EPSG:32753',
  maxPixels: 1e13
});

'''
![image] (https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5ba348e3a185d3e9513bd51d793f1669faeec6ea/Image/Mod06/Mod06-Export-01.png)
