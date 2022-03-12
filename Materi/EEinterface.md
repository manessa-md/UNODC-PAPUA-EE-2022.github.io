# Pelatihan Google Earth Engine untuk Pengembangan Aplikasi Monitoring Hutan
Module 1a Google Earth Engine Interface
--------------

Google earth engine memiliki tampilan yang sangat sederhana dengan fungsi yang sangat beragam. Pengolahan data secara spasial maupun statistik dapat dilakukan pada aplikasi ini. 
[Gambar 1. Interface Google Earth Engine]![EEInterfacebaru](https://user-images.githubusercontent.com/101231694/157897507-8a9028e2-3deb-4e11-9bf0-822a8b0b7255.png)

## 1. Search box
Merupakan kotak pencarian seperti pada laman google.com, namun pada aplikasi google earth engine search box digunakan hanya untuk mencari citra satelit. Kata kunci pencarian dapat menggunakan nama citra yang dicari atau fungsi dari citra tersebut.

## 2. Script, doc dan asset
### Script
Pada bagian script terdapat script _coding_ yang sudah pernah dibuat dan di save, serta terdapat beberapa contoh script aplikasi citra satelit yang dibuat oleh tim google. 
**Tambahkan Penjelasan tentang reprositiry, folder, file**

### Doc
Pada bagian doc terdapat instruksi atau contoh dari function. Bagian ini sangat berguna karena terkadang kita tidak dapat menghafal semua script dan fungsinya. 

### Asset
Bagian terakhir yaitu asset, yaitu bagian yang memiliki fungsi sebagai tempat untuk mengunggah dan menyimpan file spasial (json, kml, shp dan sebagainya) dari komputer menuju earth engine. 
**Tambahkan penjelasan tentang menambah asset vektor dan raster**


## 3. Code Editor
Merupakan bagian google earth engine untuk pengguna menuliskan _coding_ atau perintah pengolahan data spasial terhadap komputer google (cloud computing). Pada bagian ini perintah dituliskan dalam bahasa pemrograman javascript. Pada bagian ini juga terdapat tools save untuk menyimpan hasil _coding_, run untuk menjalankan _coding_ dan reset untuk menghapus semua _coding_ yang dibuat.

## 4. Inspector, console dan task
### Inspector
Inspector merupakan bagian dalam earth engine dimana computer google mendeteksi kesalahan perintah yang diberikan. Biasanya terdapat warna merah pada baris perintah yang salah. 
### Console
Console merupakan bagian earth engine untuk menampilkan hasil data non spasial seperti data citra dan hasil pengolahan statistik. 
### Task
Sedangkan task merupakan bagian untuk melakukan dan melihat upload data hasil pengolahan di google earth engine.

## 5. Geometry tools
Geometry tools merupakan alat dalam google earth engine yang memiliki fungsi untuk membuat bentuk bentuk geometri dengan nilai koordinat di muka peta. Bentuk geometri yang dapat dibuat berupa titik, garis dan polygon.
**Berikan Screen Shoot dari pembuatan poligon, point, dan line**

## 6. Muka Peta
Merupakan bagian utama dimana hasil dari perintah _coding_ dapat ditampilkan melalui proses visualiasi. Pada bagian muka peta juga terdapat layer dan jenis peta dasar. Layer merupakan lapisan peta yang ditampilkan selain peta dasar sedangkan peta dasar yang disediakan google terdapat 2 jenis yaitu peta satelit dan garis.
**Tambahkan Screen Shoot perbedaan peta dan satelit**




# Module 1b Dasar JavaScript
---------

## 1.1. Apa itu JavaScript
[Javascript](https://www.javascript.com/) adalah sebuah bahasa pemrograman atau perintah pada komputer yang pada awalnya digunakan untuk pengembangan website. Bahasa javascript diciptakan oleh Brendan Eich yang merupakan karyawan Netscape. Versi awal bahasa javascript hanya dipakai di kalangan Netscapedengan fungsi yang masih terbatas. Pada tahun 1996 JavaScript secara resmi dinamakan sebagai ECMAScript. Bahasa ECMAScript terus dikembangkan sampai akhirnya menjadi JavaScript hingga saat ini. Penggunaan bahasa javascript ini sangat global dan banyak digunakan oleh pengembang software dan website. Pada tahun 2016, 92% website diketahui telah menggunakan JavaScript. JavaScript tergolong bahasa tingkat tinggi. Artinya ia punya aturan penulisan yang menyerupai bahasa manusia. Dengan begitu, belajar JavaScript jadi lebih mudah. Bahkan untuk pemula sekalipun. Bahasa JavaScript sendiri harus dijalankan oleh interpreter. Code harus diterjemahkan ke dalam bahasa yang dimengerti komputer agar bisa dijalankan. Nah, proses penerjemahan ini dilakukan secara otomatis oleh web browser. Dalam perkembangannya bahasa javascript juga dapat untuk memberi perintah kepada komputer untuk melakukan sebuah perintah seperti mengolah data spasial, melakukan perhitungan algoritma, hingga memvisualiasikan hasil. 

## 1.2. Dasar _Coding_ di JavaScript
Sama seperti bahasa dalam bahasa Javascript juga terdapat beberapa kata yang digunakan untuk melakukan sesuatu. Berikut merupakan beberapa _coding_ atau kata dasar yang sering digunakan untuk mengiring perintah lanjutan.

### 1. var
Merupakan _coding_ yang digunakan untuk mendefinisikan sebuah variabel. Pendefinisian variabel dalam javascript dapat dilakukan menggunakan var, let, dan const. let dan const digunakan dalam mendefinisikan variabel yang lebih detail. Apabila variabel general maka gunakan **const** sedangkan apabila variabel dapat berubah maka dapat menggunakan **let**. Variabel juga merupakan wadah untuk menyimpan data (menyimpan nilai data), sebagai berikut. 
```
var papua = "Kota Jayapura"
```

### 2. print
Merupakan _coding_ yang digunakan untuk mencetak hasil dari variabel, sebagai berikut.
```
var papua = "Kota Jayapura"
print(papua); //Hasil akan menunjukkan Kota Jayapura
```

### 3. if
Merupakan _coding_ yang digunakan untuk menandai atau menarik sebuah pernyataan dengan sebuah kondisi tertentu, sebagai berikut.
```
if (condition) {
  //  block of code to be executed if the condition is true
}
```

```
if (waktu > 18) {
  ucapan = "Selamat Malam";
}
```

### 4. function
_Coding_ ini merupakan perintah untuk menjalankan suatu fungsi tertentu, sebagai berikut.
```
var x = cobaFunction(5, 10);   //Contoh variabel x menggunakan function

function cobaFunction(a, b) {
  return a * b;                
}

print (x)

= 50
```

### 5. return
Merupakan _coding_ yang digunakan untuk menutup / exit function. Contoh dapat dilihat pada bagian function.

## 1.2. Penulisan variabel
Penamaan variabel dalam javascript tidak dapat dilakukan sembarangan seperti menulis dalam word, terdapat beberapa ketentuan yang harus diikuti, sebagai berikut.

### 1. Variabel tidak boleh dituliskan dengan menggunakan angka di depannya.
```
// salah
var 123jayapura = "Papua";
  
// benar
var jayapura123 = "Papua";
```

### 2. Variabel dapat dituliskan mengguankan awalan underscore. 
```
var _jayapura = "Papua";
```

### 3. Variabel disarankan menggunakan camelCase apabila terdiri dari dua suku kata
```
var wonderfulIndonesia = "Wonderfull Papua";
```

```
var link = '86836482971a35a5e735a17e93c23272';
Export.table.toDrive({
  collection: ee.FeatureCollection([ee.Feature(null, stats)]),
  description: 'exported_stats_demo_' + link,
  fileFormat: 'CSV'
})
```

## 1.3. Jenis jenis data dalam Javascript 
Dalam mengenali jenis data javascript dapat langsung mengenali jenis data yang dituliskan (_dynamic typing_), tidak seperti pada bahasa C, C++, Java, dsb yang harus menuliskan tipe data pada saat pembuatan variabel (_static typing_). Berikut merupakan beberapa jenis data yang digunakan dalam bahasa javascript

1. Object
2. Date
3. Array
4. String (teks)
5. Integer atau Number (bilangan bulat)
6. Boolean
7. Float (bilangan Pecahan)
8. Function

### 1.3.1. Object
Jenis data object merupakan tipe data yang memiliki lebih dari satu nilai. Perbedaan dengan array terletak pada indeks, dimana object tidak punya indeks tapi nama. Selain itu, pada object dapat memasukan Function dan Array sehingga lebih praktis.
```
const jayapura = {provinsi:"Papua", administrasi:"Kota", luas:940, jumlahpenduduk:315.872};

//contoh lain menggunakan enter sehingga lebih mudah dilihat

const person = {
  provinsi: "Papua",
  administrasi: "Kota",
  luas: 940,
  jumlahpenduduk: 315.872
};
```

### 1.3.2. Date
Penulisan tanggal pada javascript dapat dilakukan dengan menggunakan struktur **new date()**. Berikut merupakan beberapa bentuk penulisan tanggal yang dapat dilakukan pada bahasa javascript.
```
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

///contoh
const d = new Date(2018, 11, 24, 10, 33, 30);
const d = new Date(2018, 11);
const d = new Date("October 13, 2014 11:13:00");
```

### 1.3.3. Array
Jenis data array merupakan jenis data yang memiliki banyak isi. Seperti variabel dengan banyak isi. Array diciptakan untuk mempersingkat variabel tertentu.
```
var kota1 = "Jayapura";
var kota2 = "Sentani";
var kota3 = "Biak";

//Jika menggunakan kota1, kota2, dan kota3 maka akan terlalu repot dan banyak
const kota = ["Jayapura", "Sentani", "Biak"];

//atau dapat ditulis secara horizontal
const kota = [
"Jayapura", 
"Sentani", 
"Biak"]
;
```

### 1.3.4. String 
String merupakan jenis data berupa teks atau tulisan, sebagai berikut.

```
//Contoh
var indonesia = "papua";
```

### 1.5.5. Number 
Merupakan jenis data berupa bilangan, sebagai berikut
```
var indonesia = 1945
```

### 1.4.6. Boolean
Merupakan jenis data berupa dengan dua hasil seperti YES / NO, ON / OFF, TRUE / FALSE, BENAR / SALAH.
```
Boolean(10 > 9)   //true
```

### 1.4.7 Float
Hampir sama dengan jenis data bilangan, namun data float memiliki desimal, sebagai berikut.
```
var y = 192e5;      // 19200000
var z = 192e-5;     // 0.00192
```

### 1.4.8 Function
Function merupakan sebuah fungsi khusus yang dibuat untuk melakukan tugas tertentu seperti menghitung.
Berikut merupakan rumus dasar function pada javascript.
```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

//contoh
var x = cobaFunction(5, 10);   //Contoh variabel x menggunakan function

function cobaFunction(a, b) {
  return a * b;                
}

print (x)

= 50
```

[JavaScript background](https://developers.google.com/earth-engine/tutorial\_js\_01)



