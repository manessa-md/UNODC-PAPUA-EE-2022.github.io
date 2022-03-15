## Tampilan User Interface 

### Widget

Ada berbagai widget yang dapat Anda gunakan untuk membangun UI. Widget ini termasuk tombol, kotak centang, bilah geser, kotak teks, dan menu pilihan. Widget hanya dapat dicetak atau ditambahkan ke panel satu kali. Bagian berikut mengilustrasikan fungsionalitas dasar, tampilan, dan nuansa widget. Lihat bagian Gaya untuk informasi selengkapnya tentang menata widget Anda. Contoh berikut cukup print() widget ke konsol. Untuk detail tentang menambahkan widget ke panel, lihat halaman Panel dan Tata Letak.

- ui.Label
Label hanyalah area di mana teks ditampilkan. Misalnya, kode berikut mencetak label:


var label = ui.Label('Cool label!');
print(label);


## Earth Engine Apps 
 
 ### Pendahuluan

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

