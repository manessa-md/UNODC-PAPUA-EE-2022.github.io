# EXPORT DATA DARI GOOGLE EARTH ENGINE

Data citra Sentinel dengan fungsi NDVI dan RVI yang telah diolah pada platform GEE, selanjutnya akan dilakukan visualisasi data dengan output yang dihasilkan adalah Peta. Dihasilkannya Peta bertujuan untuk memudahkan dalam menginterpretasi data, sehingga dapat dengan mudah dimengerti oleh setiap pembaca. Visualisasi peta dapat dilakukan pada software QGIS. Sebelum melakukan visualisasi pada peta, terlebih dahulu dilakukan proses pengunduhan data dalam format (.tiff) dari platform GEE ke PC anda.

Berikut merupakan langkah-langkah pengunduhan data pada GEE:

## Proses Export Data (.Tiff)
### 1. Masukan Script Export Data, Kemudian Klik "Run" Untuk Menjalankan Script
Script export data bertujuan untuk mengekstrak data dalam format (.tiff) ke dalam folder Google Drive anda.

```
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

```
![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5ba348e3a185d3e9513bd51d793f1669faeec6ea/Image/Mod06/Mod06-Export-01.png)

### 2. Klik Tombol Task Yang Berada Disebelah Tombol Console
Pada Tombol Task akan terlihat nama file yang akan diunduh, kemudian klik "RUN"

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/66084a4d1544c7b7007af183809c551c5316f022/Image/Mod06/Mod06-Export-02.png)

### 3. Informasi Mengenai Data Yang Akan Diunduh

Pada gambar dapat terlihat beberapa informasi seperti nama file, sistem koordinat, skala data, tempat penyimpanan folder google drive, dan format file.

Berikut merupakan penjelasan singkat mengenai beberapa informasi tersebut :

1. Nama File dapat disesuaikan dengan tujuan pengolahan data.
2. Sistem Koordinat pada platform GEE menggunakaan sistem koordinat EPSG.
Pada modul ini, wilayah penelitian berada pada wilayah Jayapura memiliki sistem koordinat EPSG : 32753. Sehingga, penggunaan sistem koordinat dapat disesuaikan dengan wilayah penelitian.
3. Skala Data disesuaikan dengan data citra yang digunakan
Pada modul ini, menggunakan citra Sentinel yang memiliki resolusi spasial sebesar 10 m.
4. Tempat penyimpanan folder pada Google Drive
File yang akan diunduh akan tersimpan pada folder Google Drive. Lokasi penyimpanan data pada Google Drive akan disesuaikan dengan email yang digunakan pada akun GEE. Penyimpanan folder pada Google Drive dapat disesuaikan dengan keinginan anda
5. Format File
Pada modul ini, data yang digunakan adalah data raster. Sehingga, format file yang digunakan untuk mengekstrak data raster adalah format (.tiff) atau (GEO_TIFF) pada GEE.
Setelah mengatur beberapa informasi tersebut, Klik "Run"

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/66084a4d1544c7b7007af183809c551c5316f022/Image/Mod06/Mod06-Export-03.png)

### 4. Proses Pengunduhan Data
Setelah mengklik "Run" akan muncul tampilan sebagai berikut. Kemudian, tunggu hingga data selesai terunduh

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/66084a4d1544c7b7007af183809c551c5316f022/Image/Mod06/Mod06-Export-04.png)

### 5. Data Berhasil Terunduh Pada Folder Google Drive
Pada gambar dapat terlihat data yang berhasil terunduh akan langsung tersimpan pada folder Google Drive yang telah ditentukan sebelumnya.
Kemudian, data pada Google Drive diunduh kembali agar data dapat tersimpan pada folder PC anda.

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/66084a4d1544c7b7007af183809c551c5316f022/Image/Mod06/Mod06-Export-05.png)

### 6. Data Berhasil Terunduh Pada Folder PC
Data yang telah berhasil terunduh dapat dilihat pada folder download di PC anda.
Kemudian, data siap untuk lanjut ke tahapan visualisasi yang dilakukan pada sofware QGIS

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/66084a4d1544c7b7007af183809c551c5316f022/Image/Mod06/Mod06-Export-06.png)


