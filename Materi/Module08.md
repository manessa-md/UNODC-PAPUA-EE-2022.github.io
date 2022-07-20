# VISUALISASI DATA SPASIAL MENGGUNAKAN QGIS

Data yang telah diolah selanjutnya akan dilakukan tahapan visualisasi pada data 
hingga menghasilkan peta. Tahapan visualisasi bertujuan untuk mempermudah dalam 
menginterpretasi data, sehingga informasi yang disampaikan dapat dimengerti oleh pembaca

## MENAMPILKAN DATA VEKTOR DAN RASTER

### 1. Menampilkan Data Raster
Data Raster merupakan data spasial yang tersusun dalam struktur grid atau pixel 
yang memiliki nilai. Data Raster dihasilkan dari sistem penginderaan jauh. 
Pada modul ini digunakan data raster berupa data citra dengan fungsi ndvi.

Tahapan ini bertujuan untuk menampilkan data raster yang akan divisualisasi.

Tahapannya ialah sebagai berikut: 
* Pada menu bar Layer terdapat tools Add Layer, pilih Add Raster Layer

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-01.jpg)

* Pada Raster Dataset, pilih data raster yang akan digunakan pada folder PC anda

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-02.jpg)

### 2. Tampilan Data Raster
Data raster yang telah terpilih akan tampil pada layer sebagai berikut:
![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-03.jpg)

### 3. Menampilkan Data Vektor
Data vektor merupakan data yang menampilkan informasi spasial dalam bentuk titik, garis dan area. Pada modul ini data vektor digunakan untuk menyajikan batas administrasi dan dibutuhkan dalam proses pemotongan data raster.

Cara menampilkan data vektor hampir sama dengan cara menampilkan data raster yaitu sebagai berikut :

* Pada menu bar terdapat tools Add Layer, pilih Add Vektor Layer

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-04.jpg)

* Pada vector dataset, pilih data vektor yang akan digunakan pada folder PC anda

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-05.jpg)

### 4. Tampilan Data Vektor
Data vektor yang telah terpilih akan tampil pada layer sebagai berikut:
![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-06.jpg)

## MENAMPILKAN DATA VEKTOR DAN RASTER
Pemotongan pada data raster biasa disebut dengan Raster Clip. Raster clip bertujuan untuk menghasilkan data raster sesuai dengan batas wilayah yang diinginkan. Pada prosesnya, raster clip membutuhkan data lain yang dijadikan sebagai batas.
Pada modul ini, ingin melihat kerapatan vegetasi menggunakan NDVI di Kota Jayapura. Sehingga, dibutuhkan data vektor batas wilayah Kota Jayapura untuk membatasi data raster hanya pada Kota Jayapura.

### 1. Menggunakan Tools Clip Raster by Mask Layer
Pemotongan data raster di aplikasi QGIS dapat dilakukan sebagai berikut:

* Pada menu bar Raster, terdapat tools extraction
* Pilih Clip Raster by Mask Layer

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-07.jpg)

### 2. Melakukan pengaturan pada tools Clip Raster by Mask Layer
Terdapat beberapa pengaturan yang harus dilakukan. Berikut merupakan penjelasan singkat mengenai pengaturan yang harus dilakukan:

* Pada option Input Layer, pilih data raster yang akan digunakan
* Pada option Mask Layer, pilih data vektor yang akan digunakan
* Pada option Source CRS, sesuaikan sistem proyeksi awal pada data raster
* Pada option Target CRS, sesuaikan sistem proyeksi akhir yang diinginkan (disarankan sesuai dengan data vektor yang digunakan)
* Pada option Clipped (mask), lakukan penempatan penyimpanan file pada folder yang diinginkan
* Klik Run

Pengaturan pada tools Clip Raster by Mask Layer dapat mengikuti gambar sebagai berikut:
![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-08.jpg)

### 3. Hasil Pemotongan Raster
Data raster berhasil terpotong sesuai dengan batas yang diinginkan.
Berikut merupakan hasil pemotongan raster:
![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-09.jpg)

## SYMBOLOGY PETA
Symbology atau simbologi pada peta adalah proses penggunaan teknik grafis berupa simbol dengan warna, ukuran dan bentuk yang dapat mewakili informasi geografis pada peta. Proses symbologi peta dapat disesuaikan dengan informasi yang akan disampaikan.

### 1. Proses Symbology pada Data Raster
Pada modul ini, digunakan data raster yang berisi informasi mengenai kerapatan vegetasi. Sehingga dalam memudahkan dalam menginterpretasi data, dapat digunakan proses symbologi dengan pemberian warna.

Tahapan awal pemberian warna pada peta ialah sebagai berikut:
* Pada Layer data yang telah terclip, klik kanan dan pilih Properties

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-10.jpg)

### 2. Melakukan Pengaturan pada Symbology
Tahapan ini bertujuan untuk memberikan warna pada data raster. Pemberian warna pada data raster dapat disesuaikan dengan informasi yang akan disampaikan. Pada modul ini, ingin menampilkan kerapatan vegetasi sehingga menggunakan warna gradasi hijau.

Terdapat beberapa pengaturan pada symbology yaitu sebagai berikut:
* Pada Render Type terdapat beberapa jenis pewarnaan, pilih Singleband pseudocolor.
* Pada Min dan Max merupakan nilai raster terkecil dan terbesar yang ingin ditampilkan.  
Pada modul ini, ditentukan nilai terkecil adalah 0 dan nilai terbesar adalah 1.

* Pada Color Ramp terdiri dari berbagai macam warna, pilih warna yang ingin ditampilkan.
* Klik OK

Pengaturan dapat dilakukan seperti sebagai berikut:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/852be8baed420f991bf5de497c8ca601c7f1b763/Image/Mod08/Mod08-Visualisasi-11.jpg)

### 3. Hasil Symbology Data
Warna berhasil diberikan pada data raster.

Pada modul ini, terlihat data raster memiliki range nilai dari 0 sampai 1. Nilai 0 dengan warna putih menunjukan tutupan lahan berupa non vegetasi. Sedangkan, nilai 1 dengan warna kehijauan menunjukan tutupan lahan berupa vegetasi. Pada data raster terlihat terdapat warna bayangan putih, hal tersebut menunjukan adanya tutupan awan pada data raster

Berikut merupakan hasil symbology pada data raster:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-12.jpg)

## PROSES PEMBUATAN LAYOUT PETA
Tahapan pembuatan Layout Peta bertujuan untuk menampilkan informasi data dengan rapi dan indah secara visual. Pembuatan Layout Peta merupakan salah satu langkah yang penting, dimana layout berperan sebagai atribut pelengkap yang mampu menjelaskan isi peta yang tediri dari berbagai informasi.

### 1. Membuat Layout Print Baru
Dalam membuat layer layout, dapat dilakukan tahapan sebagai berikut:

* Pada menu bar terdapat New Print Layout, lalu Klik

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-13.jpg)

* Create Print Layout akan muncul, berikan nama file layout sesuai keinginan anda, Klik OK

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-14.jpg)

### 2. Tampilan Layer untuk Layout Peta
Layer Layout Peta akan muncul seperti gambar dibawah ini. 

Pada proses pembuatan layout peta dapat dilakukan beberapa pengaturan pada bagian Item Properties.

Berikut merupakan beberapa penjelasan mengenai tools pada Item Properties:

* Pada Page Size dapat merubah ukuran halaman sesuai yang diinginkan
* Pada Orientation dapat merubah posisi halaman
* Pada Background dapat memilih warna dasar halaman yang diinginkan

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-15.jpg)

### 3. Menambahkan Peta pada Layout
Tahapan ini bertujuan untuk menambahkan peta pada layout. Sehingga, data raster yang telah dilakukan proses symbology dapat terlihat.

Berikut merupakan tahapan dalam menambahkan peta pada layout:

* Pada menu bar Add Item, pilih Add Map
* Lalu, buat kotak pada layer dasar layout

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-16.jpg) 

* Peta berhasil ditambahkan pada layout

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-17.jpg)

### 4. Mengatur Skala Peta
Tahapan ini bertujuan untuk mengatur skala peta yang akan digunakan. Sehingga, tampilan peta akan sesuai dengan layer dasar layout.

Pengaturan skala peta berada pada bagian Item Properties. Berikut merupakan penjelasan mengenai tahapan pengaturan skala peta:

* Pada Scale, tentukan skala peta dengan menyesuaikan batasan informasi yang ingin disampaikan
* Pada Layers, centang bagian Lock Layers, bertujuan untuk mengunci layer peta sehingga tidak berubah-ubah

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-18.jpg)

* Pada Background, dapat diberikan warna pada dasar peta.  
Warna akan muncul pada peta yang tidak terdapat data raster maupun vektor. Pemilihan warna juga dapat disesuaikan dengan informasi spasial sebenarnya. Pada modul ini background peta berada pada wilayah perairan laut sehingga digunakan warna biru.

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-19.jpg)

Hasil pengaturan Skala Peta ialah sebagai berikut:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-20.jpg)

### 5. Memberi Label pada Layout
Tahapan ini bertujuan untuk menambahkan label atau tulisan. Label dapat digunakan untuk memberikan informasi mengenai tulisan. Label pada layout biasa digunakan untuk memberikan judul peta, keterangan, serta sumber.

Berikut merupakan tahapan dalam memberi label pada layout:

* Pada menu bar Add Item, pilih Add Label

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-21.jpg)

* Melakukan pengaturan pada bagian Item Properties  
Pada Main Properties, tuliskan informasi yang ingin disampaikan.  
Pada Appearance, dilakukan pengaturan mengenai font, ukuran, serta posisi tulisan.

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-22.jpg)

Hasil pemberian Label Judul pada Layout ialah sebagai berikut :

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-23.jpg)

### 6. Memberi Arah Mata Angin
Tahapan ini bertujuan untuk menampilkan arah mata angin. Sehingga, memudahkan dalam melihat arah peta.

Berikut merupakan tahapan dalam memberi arah mata angin pada layout:

* Pada menu bar Add Item, pilih Add North Arrow

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-24.jpg)

* Melakukan pengaturan pada bagian Item Properties
Pada SVG Browsers, klik Arrows dan tentukan simbol arah mata angin yang diinginkan
Pada SVG Parameters, dapat diberikan warna pada simbol sehingga lebih menarik

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-25.jpg)

Hasil pemberian arah mata angin ialah sebagai berikut:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-26.jpg)

### 7. Menambahkan Legenda
Legenda merupakan daftar informasi data yang akan disampaikan dalam bentuk simbol yang digunakan pada peta. Penambahan legenda pada layout peta bertujuan untuk mempermudah dalam menginterpretasi dan menerima informasi peta.

Berikut merupakan tahapan dalam memberi legenda pada layout:

* Pada menu bar Add Item, pilih Add Legend

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-27.jpg)

Lakukan beberapa pengaturan legenda pada bagian Item Properties

* Pada Legend Items, uncheck kolom Auto Update  
Anda dapat menambahkan (+), mengurangi (-), dan menyesuaikan urutan legenda  
Pada modul ini, klik (-) untuk mengurangi legenda yang tidak diperlukan yaitu batas administasi dan adm jayapura

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-28.jpg)

* Klik dua kali pada legenda berupa teks  
Dapat melakukan perubahan tulisan sesuai yang diinginkan

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-29.jpg)

* Klik dua kali pada legenda berupa simbol  
Dapat merubah simbol legenda  
Pada Patch, atur width dan height sesuai yang diinginkan  
Pada layout orientation, atur posisi simbol legenda (horizontal atau vertikal)

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-30.jpg)

* Lakukan pengaturan pada bagian fonts and text formatting  
Pengaturan font dan format text disesuain dengan keinginan anda

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-31.jpg)

* Klik Uncheck pada kolom background  
Sehingga, legenda tidak memiliki warna background

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-32.jpg)

Hasil penambahan legenda pada Layout Peta ialah sebagai berikut:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-33.jpg)

### 8. Menambahkan Keterangan dan Sumber
Tahapan ini bertujuan untuk menambahkan keterangan dan sumber.
Cara menambahkan keterangan dan sumber ialah dengan menambahkan label.
Cara menambahkan label sama seperti tahapan 5 (Memberikan Label pada Layout Peta)

Agar lebih menarik, dapat diberikan warna background pada label yaitu sebagai berikut:

* Pada bagian Item Properties, Centang kolom background
* Berikan warna yang diinginkan

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/5cbef124b886c0722a3418591d6627110507e7e0/Image/Mod08/Mod08-Visualisasi-34.jpg)

Hasil pemberian keterangan dan sumber pada layout peta ialah sebagai berikut:

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/852be8baed420f991bf5de497c8ca601c7f1b763/Image/Mod08/Mod08-Visualisasi-35.jpg)

## HASIL LAYOUT PETA
Berikut merupakan beberapa hasil layout peta yang dapat dihasilkan melalui aplikasi QGIS :

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/852be8baed420f991bf5de497c8ca601c7f1b763/Image/Mod08/Mod08-Visualisasi-35.jpg)

![image](https://github.com/manessa-md/UNODC-PAPUA-EE-2022.github.io/blob/64656b1be8aa13116958c586916f5af1b5929f4e/Image/Mod08/Mod08-Visualisasi-36.jpeg)











