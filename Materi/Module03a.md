# 1. Pengenalan data vektor 
## Deskripsi

Data vektor merupakan tipe data yang umum ditemukan dalam SIG. Sebuah vektor pada intinya merupakan sesuatu yang berbentuk sebuah titik, atau garis yang menghubungkan titik-titik tersebut.

<img width="960" alt="RasterVector" src="https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/main/Image/Mod03A/1_eQT7CXrsf0lm3HVxnww_WQ.png"> 

## Database administrasi provinsi
Untuk data administrasi dari distrik atau kabupaten kota di Indonesia dapat diakses pada website:
https://tanahair.indonesia.go.id/portal-web 


## Data yang sudah tersedia
Berikut ada beberapa data vektor spasial 

```
var AdminMimika = ee.FeatureCollection ("https://code.earthengine.google.com/?asset=projects/ee-masitamanessa-unodc/assets/MIMIKA_ADMINISTRASIKECAMATAN_AR_50K");
var HutanMimika = ee.FeatureCollection("https://code.earthengine.google.com/?asset=projects/ee-masitamanessa-unodc/assets/MIMIKA_NONAGRIHUTANBASAH_AR_50K")

```
