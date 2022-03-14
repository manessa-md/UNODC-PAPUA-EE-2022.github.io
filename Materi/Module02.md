# PANDUAN DASAR GOOGLE EARTH ENGINE
Module 2 Dasar Koding
--------------

## 2a. Mengenal Data dan Visualisasi Citra Sentinel-1 menggunakan Google Earth Engine 
Konten Panduan
- Mendaftar Akun Google Untuk Google Earth Engine
- Memilih Citra
- Memahami Informasi Citra Sentinel-1
- Menentukan Wilayah Pengamatan
- Load dan Filtering Citra Sentinel-1
- Menentukan Polarisasi Citra Sentinel-1
- Visualisasi Citra Sentinel-1 Gabungan

### Prasyarat mendaftar Akun Google untuk Google Earth Engine
Untuk menjalankan prasyarat ini memerlukan langkah untuk mendaftarkan akun Google yang akan di gunakan untuk menjalankan GEE. Pendaftaran akun bisa dilakukan melalui browser manapun (Disarankan memakai Google Chrome). Setelah akun telah di daftarkan maka alun tersebut dapat digunakan dengan mengakses tautan GEE : https://code.earthengine.google.com . Setelah berhasil masuk dengan akun yang telah didaftarkan, maka Google Earth Engine sudah bisa digunakan. 

![1](https://user-images.githubusercontent.com/69818715/158024264-56dbb7c7-8f17-4796-92c2-72fbd5346ea3.JPG)
Gambar 1. Halaman Utama Google Earth Engine Setelah Log In

### Memilih Citra

Setelah peluncuran produk Google Earth Engine, platform ini telah menyediakan dataset secara lengkap. Kita dapat memilih berbagai jenis data yang kita butuhkan. Untuk mengetahui ketersediaan data citra dan menampilkannya kita perlu menuliskan _keyword_ data citra yang kita butuhkan. Kita coba dengan mencari data Sentinel-1 dengan contoh sebagai berikut: 

<img width="960" alt="Mod2-S1-01" src="https://user-images.githubusercontent.com/69818715/158053126-7bcc8cc9-6f4e-4d19-bd00-fc880bf9e6e7.png">

Gambar 2. Tampilan Search Dataset Citra


#  (Script)[https://code.earthengine.google.com/a18be3676d9bb2c0af4c8a4f964aff9c]

### Memahami Informasi Citra Sentinel-1

Pemilihan citra dapat dilakukan dengan mempelajari lebih lanjut terkait dataset yang akan di gunakan. Hal tersebut dangat berguna untuk mengetahui rentang waktu ketersediaan citra tersebut. Untuk mengetahui lebih lengkap detail terkait informasi citra dapat di klik tanda panah di pojok kanan atas.

<img width="960" alt="Mod2-S1-02" src="https://user-images.githubusercontent.com/69818715/158052847-ca96ac9b-b099-47f7-b58a-d906645d3d08.png">

<img width="960" alt="Mod2-S1-03" src="https://user-images.githubusercontent.com/69818715/158052897-af956cce-2da0-48e5-9045-a8bc9e8c28a1.png">

Gambar 3. Informasi Citra Satelit Sentinel-1

### Menentukan Wilayah Pengamatan

Menentukan wilayah pengamatan dapat dilakukan dengan klik Geometry Tools. Selain itu, dengan Geometry Tools tersedia pilihan titik, garis, dan polygon. Setelah geometry telah di buat, maka informasi geometry dapat kita masukan informasi.

<img width="960" alt="Mod2-S1-04" src="https://user-images.githubusercontent.com/69818715/158053048-afee29f3-4802-46b9-b7d4-73147a13ce2a.png">

Gambar 4. Menentukan Geometri Wilayah Pengamatan

- Penarikan manual geometry wilayah pengamatan

<img width="960" alt="Mod2-S1-05" src="https://user-images.githubusercontent.com/69818715/158053055-01989553-f0dc-4ac8-8e4e-9bf324f74dc8.png">

Gambar 5. Menentukan Geometri Wilayah Pengamatan

### Load dan Filtering Citra Sentinel-1

Proses load dan filtering pada citra radar sentinel-1 sedikit berbeda dengan citra optis. Perbedaannya citra radar sentinel-1 menggunakan polarisasi dan tidak adanya masking awan. Berikut merupakan contoh coding dari load dan filtering citra sentinel-1.

```
//Polarisasi VV
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
         
//Polarisasi VH              
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
```

<img width="960" alt="Mod2-S1-06" src="https://user-images.githubusercontent.com/69818715/158053261-06e3fab5-60ac-4139-bc25-2511e6cd02c6.png">

Gambar 6. Tampilan Tahapan Pemilihan dan Filtering Citra

- Tampilan awal citra radar akan berwarna hitam, untuk pengolahan lebih lanjut maka perlu ada kombinasi warna dengan mengklik bar layer pada muka display.

<img width="960" alt="Mod2-S1-07" src="https://user-images.githubusercontent.com/69818715/158053267-40d01e99-9970-40fd-bbde-1329a414b69e.png">

Gambar 7. Setting warna citra radar

- Lalu atur warna hingga terlihat degradasi warna

<img width="960" alt="Mod2-S1-08" src="https://user-images.githubusercontent.com/69818715/158053316-ccad22a6-a0a6-46b6-91bb-c5f73fa4a691.png">

Gambar 8. Tampilan akhir 

### Visualisasi Polarisasi Citra Sentinel-1

- Tampilan polarisasi VV setelah diatur tingkat polarisasinya. Berikut contoh coding untuk visualisasi polarisasi VV:

```
Map.addLayer(s1VV,imageVisParam,'Polarisasi VV');
```

<img width="960" alt="Mod2-S1-09" src="https://user-images.githubusercontent.com/69818715/158053413-8aa47e62-0dc3-411a-b14c-b1dc54c1eae6.png">

Gambar 9. Tampilan Tahapan Polarisasi VV

- Tampilan polarisasi VH setelah diatur tingkat polarisasinya. Berikut contoh coding untuk visualisasi polarisasi VH:
```
Map.addLayer(s1VH,imageVisParam2,'Polarisasi VH');
```

<img width="960" alt="Mod2-S1-10" src="https://user-images.githubusercontent.com/69818715/158053420-a9c91f67-35ec-45c0-bb21-a5f397f0ddec.png">

Gambar 10. Tampilan Tahapan Polarisasi VH

### Visualisasi Citra Sentinel-1 Gabungan

Data citra yang ditampilkan masih berupa ImageCollection (Koleksi Citra) Sentinel-2. Data ImageCollection yang telah di pilih diatas dapat disesuaikan tampilannya agar sesuai dengan informasi yang akan ditampilkan. Visualisasi terdiri dari komposit band atau pallete (pemilihan warna). Selain itu, dapat mengatur hasil minimal dan maksimal data nilai piksel/panjang gelombang.

```
var S1 = s1VV.addBands(s1VH)

Map.addLayer(S1,imageVisParam3,'Sentinel-1');
```

<img width="960" alt="Mod2-S1-12" src="https://user-images.githubusercontent.com/69818715/158053562-383db484-10e9-49d5-93b0-737b572d290d.png">

Gambar 11. Tampilan Visualisasi Sentinel-1

- Setting visualisasi polarisasi gabungan

<img width="960" alt="Mod2-S1-13" src="https://user-images.githubusercontent.com/69818715/158053568-d66006a2-4a15-4d62-bb42-5bb965252a48.png">

Gambar 12. Tampilan Visualisasi Sentinel-1

- Tampilan akhir visuaslisasi sentinel-1

<img width="960" alt="Mod2-S1-14" src="https://user-images.githubusercontent.com/69818715/158053573-08004c98-a811-40fa-a17a-cea7efd8b4ea.png">

Gambar 13. Tampilan Visualisasi Sentinel-1

--------------

## 2b Mengenal Kombinasi Band dan Visualisasi Citra Sentinel-2 menggunakan Google Earth Engine 
Konten Panduan
- Memilih Citra
- Memahami Informasi Citra Sentinel-2
- Load dan Filtering Citra Sentinel-2
- Visualisasi Citra Sentinel-2
- Memilih data dari ImageCollection

### Memilih Citra

Pemilihan citra bisa dilakukan dengan mencari pada tabel pencarian dengan memasukan _keyword_ nama citra satelit "Sentinel-2".

<img width="960" alt="Mod2-S2-01" src="https://user-images.githubusercontent.com/69818715/158024527-fa08e8f8-bf59-4cff-b4ff-4381af3abc15.png">
Gambar 14. Tampilan Search Dataset Citra

### Memahami Informasi Citra Sentinel-2

Agar data citra satelit yang kita pilih sesuai dengan yang kita inginkan, maka perlu untuk _cross check_ data tersebut dengan memahami informasi terkait data citranya. Cara untuk mengetahui informasi dengan _klik_ citra yang hendak kita pilih, pada latihan kali ini menggunakan data citra Sentinel-2 level 2A, setelah itu akan tampil informasi citra seperti pada gambar berikut:

<img width="960" alt="Mod2-S2-02" src="https://user-images.githubusercontent.com/69818715/158025267-f658b97c-4fe1-4b70-ae64-da0efdad71ab.png">
Gambar 15. Informasi Citra Satelit

### Memanggil data Citra Sentinel-2

Tahap pertama pada visualisasi citra adalah proses _load_ dan _filtering_ citra satelit dimana citra satelit yang hendak dipilih di _setting_ sesuai dengan keperluan. Filter yang penting utnuk dilakukan meliputi filtering waktu/date, filtering wilayah tutupan citra, filtering persentase citra dan masking citra. 
```
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
```

<img width="960" alt="Mod2-S2-04" src="https://user-images.githubusercontent.com/69818715/158045788-dbe83ba5-d384-4390-af9a-07c0882fa96e.png">
Gambar 16. Tampilan Coding Load dan Filtering Citra Satelit

### Visualisasi Citra Sentinel-2

Data citra yang ditampilkan masih berupa ImageCollection (Koleksi Citra) Sentinel-2. Data ImageCollection yang telah di pilih diatas dapat disesuaikan tampilannya agar sesuai dengan informasi yang akan ditampilkan. Visualisasi terdiri dari komposit band atau pallete (pemilihan warna). Selain itu, dapat mengatur hasil minimal dan maksimal data nilai piksel/panjang gelombang.

```
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

Map.addLayer(S2.first(), visualization, 'RGB');
```

<img width="960" alt="Mod2-S2-05" src="https://user-images.githubusercontent.com/69818715/158046321-e8326070-d054-46bc-9505-95de5cf49336.png">
Gambar 17. Tampilan Visualisasi Citra Sentinel-2

### Memilih Visualisasi Data Image dari ImageCollection

Pada tahap visualisasi juga dapat memungkinkan untuk menampilkan beberapa image dari Image Collection sentinel-2. Hal tersebut dilakukan untuk memilih image yang sesuai untuk divisualisasikan atau untuk tujuan perbandingan antar image. Pemilihan tampilan image diawali dengan perintah .toList() dan dilanjutkan dengan .get().

```
var listOfImages = S2.toList(S2.size());
var img1 = ee.Image(listOfImages.get(0));
var img2 = ee.Image(listOfImages.get(1));

print(img2)

Map.addLayer(img2, visualization, 'img2');
```

![2](https://user-images.githubusercontent.com/69818715/158046578-27a6a614-0a32-403f-9dc0-40bf978145d3.JPG)
Gambar 18. Tampilan Hasil Pemilihan Data Image



