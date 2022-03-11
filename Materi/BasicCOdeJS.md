# 1. Dasar JavaScript

## 1.1. Apa itu JavaScript
Javascript adalah sebuah bahasa pemrograman atau perintah pada komputer yang pada awalnya digunakan untuk pengembangan website. Bahasa javascript diciptakan oleh Brendan Eich yang merupakan karyawan Netscape. Versi awal bahasa javascript hanya dipakai di kalangan Netscapedengan fungsi yang masih terbatas. Pada tahun 1996 JavaScript secara resmi dinamakan sebagai ECMAScript. Bahasa ECMAScript terus dikembangkan sampai akhirnya menjadi JavaScript hingga saat ini. Penggunaan bahasa javascript ini sangat global dan banyak digunakan oleh pengembang software dan website. Pada tahun 2016, 92% website diketahui telah menggunakan JavaScript. JavaScript tergolong bahasa tingkat tinggi. Artinya ia punya aturan penulisan yang menyerupai bahasa manusia. Dengan begitu, belajar JavaScript jadi lebih mudah. Bahkan untuk pemula sekalipun. Bahasa JavaScript sendiri harus dijalankan oleh interpreter. Code harus diterjemahkan ke dalam bahasa yang dimengerti komputer agar bisa dijalankan. Nah, proses penerjemahan ini dilakukan secara otomatis oleh web browser. Dalam perkembangannya bahasa javascript juga dapat untuk memberi perintah kepada komputer untuk melakukan sebuah perintah seperti mengolah data spasial, melakukan perhitungan algoritma, hingga memvisualiasikan hasil. 

## 1.2. Dasar _Coding_ di JavaScript
Sama seperti bahasa dalam bahasa Javascript juga terdapat beberapa kata yang digunakan untuk melakukan sesuatu. Berikut merupakan beberapa _coding_ atau kata dasar yang sering digunakan untuk mengiring perintah lanjutan.

1. var
Merupakan _coding_ yang digunakan untuk mendefinisikan sebuah variabel. Variabel juga merupakan wadah untuk menyimpan data (menyimpan nilai data), sebagai berikut. 
```
var papua = "Kota Jayapura"

//atau dapat juga menggunakan let untuk mendefinisikan banyak variabel dalam satu rumus

let kabupatenjayapura = "Sentani",
kabupatenjayawijaya = "Wamena",
kabupatenintanjaya = "Sugapa";
```

2. print
Merupakan _coding_ yang digunakan untuk mencetak hasil dari variabel, sebagai berikut.
```
var papua = "Kota Jayapura"
print(papua);
```

3. def
Merupakan 

4. if
Merupakan _coding_ yang digunakan untuk menandai atau menarik sebuah pernyataan dengan sebuah kondisi tertentu, sebagai berikut.

if (condition) {
  //  block of code to be executed if the condition is true
}

```
if (waktu > 18) {
  ucapan = "Selamat Malam";
}
```

5. function
_Coding_ ini merupakan perintah untuk menjalankan suatu fungsi tertentu, sebagai berikut.
```
var x = cobaFunction(5, 10);   //Contoh variabel x menggunakan function

function cobaFunction(a, b) {
  return a * b;                
}

print (x)

= 50
```

6. return
Merupakan _coding_ yang digunakan untuk menutup / exit function. Contoh dapat dilihat pada bagian function.

## 1.2. Penulisan variabel
Penamaan variabel dalam javascript tidak dapat dilakukan sembarangan seperti menulis dalam word, terdapat beberapa ketentuan yang harus diikuti, sebagai berikut.
1. Variabel tidak boleh dituliskan dengan menggunakan angka di depannya.
```
// salah
var 123jayapura = "Papua";
  
// benar
var jayapura123 = "Papua";
```

2. Variabel dapat dituliskan mengguankan awalan underscore. 
```
var _jayapura = "Papua";
```

3. Variabel disarankan menggunakan camelCase apabila terdiri dari dua suku kata
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

### 1.3.2. Date


### 1.3.3. Array
Jenis data array merupakan jenis data yang 

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




# Panduan penulisan

## Google Earth Engine untuk Monitoring Hutan

You can use the [editor on GitHub](https://github.com/manessa-md/UNODC-EE-2022.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/manessa-md/UNODC-EE-2022.github.io/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
