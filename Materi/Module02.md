# PANDUAN DASAR GOOGLE EARTH ENGINE

## Mengenal Kombinasi Band dan Visualisasi Citra Sentinel-2 menggunakan Google Earth Engine 
Konten Panduan
- Mendaftar Akun Google Untuk Google Earth Engine
- Memilih Citra
- Memahami Informasi Citra Sentinel-2
- Load dan Filtering Citra Sentinel-2
- Visualisasi Citra Sentinel-2
- Menampilkan Citra Sentinel-2

### Prasyarat mendaftar Akun Google untuk Google Earth Engine
Untuk menjalankan prasyarat ini memerlukan langkah untuk mendaftarkan akun Google yang akan di gunakan untuk menjalankan GEE. Pendaftaran akun bisa dilakukan melalui browser manapun (Disarankan memakai Google Chrome). Setelah akun telah di daftarkan maka alun tersebut dapat digunakan dengan mengakses tautan GEE : https://code.earthengine.google.com . Setelah berhasil masuk dengan akun yang telah didaftarkan, maka Google Earth Engine sudah bisa digunakan. 

![1](https://user-images.githubusercontent.com/69818715/158024264-56dbb7c7-8f17-4796-92c2-72fbd5346ea3.JPG)
Gambar 1. Halaman Utama Google Earth Engine Setelah Log In

### Memilih Citra

Setelah peluncuran produk Google Earth Engine, platform ini telah menyediakan dataset secara lengkap. Kita dapat memilih berbagai jenis data yang kita butuhkan. Untuk mengetahui ketersediaan data citra dan menampilkannya kita perlu menuliskan _keyword_ data citra yang kita butuhkan. Kita coba dengan mencari data Sentinel-2 Level 2A dengan contoh sebagai berikut: 

<img width="960" alt="Mod2-S2-01" src="https://user-images.githubusercontent.com/69818715/158024527-fa08e8f8-bf59-4cff-b4ff-4381af3abc15.png">
Gambar 2. Tampilan Search Dataset Citra

### Memahami Informasi Citra Sentinel-2

Agar data citra satelit yang kita pilih sesuai dengan yang kita inginkan, maka perlu untuk _cross check_ data tersebut dengan memahami informasi terkait data citranya. Cara untuk mengetahui informasi dengan _klik_ citra yang hendak kita pilih, pada latihan kali ini menggunakan data citra Sentinel-2 level 2A, setelah itu akan tampil informasi citra seperti pada gambar berikut:

<img width="960" alt="Mod2-S2-02" src="https://user-images.githubusercontent.com/69818715/158025267-f658b97c-4fe1-4b70-ae64-da0efdad71ab.png">
Gambar 3. Informasi Citra Satelit

### Memanggil data Citra Sentinel-2

Tahap pertama pada visualisasi citra adalah proses _load_ dan _filtering_ citra satelit dimana citra satelit yang hendak dipilih di _setting_ sesuai dengan keperluan. Filter yang penting utnuk dilakukan meliputi filtering waktu/date, filtering wilayah tutupan citra, filtering persentase citra dan masking citra.

```
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
```

<img width="960" alt="Mod2-S2-04" src="https://user-images.githubusercontent.com/69818715/158045788-dbe83ba5-d384-4390-af9a-07c0882fa96e.png">
Gambar 4. Tampilan Coding Load dan Filtering Citra Satelit

### 
```

```

```

```


