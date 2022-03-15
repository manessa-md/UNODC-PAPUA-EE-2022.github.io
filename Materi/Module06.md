## Tampilan User Interface 

### Widget

Ada berbagai widget yang dapat Anda gunakan untuk membangun UI. Widget ini termasuk tombol, kotak centang, bilah geser, kotak teks, dan menu pilihan. Widget hanya dapat dicetak atau ditambahkan ke panel satu kali. Bagian berikut mengilustrasikan fungsionalitas dasar, tampilan, dan nuansa widget. Lihat bagian Gaya untuk informasi selengkapnya tentang menata widget Anda. Contoh berikut cukup print() widget ke konsol. Untuk detail tentang menambahkan widget ke panel, lihat halaman Panel dan Tata Letak.

- ui.Label

Label hanyalah area di mana teks ditampilkan. Misalnya, kode berikut mencetak label:

```
var label = ui.Label('Cool label!');
print(label);
```

Yang terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158390326-22d35743-e94c-46e5-8314-310b1b9d71f5.png)

Pisahkan label panjang dengan memasukkan karakter baris baru (\n) dan atur argumen properti gaya whiteSpace ke 'pra':

```
print(ui.Label('Here is a:\nnew line', {whiteSpace: 'pre'}));
```

- ui.Button

Button adalah widget UI interaktif yang dapat diklik. Anda dapat menentukan fungsi yang akan dipanggil (fungsi "panggilan balik") saat pengguna mengklik tombol. (Untuk informasi lebih lanjut tentang penanganan acara dengan fungsi panggilan balik, lihat halaman Acara). Contoh berikut mencetak pusat peta saat ini ketika tombol diklik:
```
var button = ui.Button({
  label: 'Get Map Center',
  onClick: function() {
    print(Map.getCenter());
  }
});
print(button);
```

Yang terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158391384-a271afcf-a737-46b0-a8fc-2c02f035d5d6.png)

- ui.CheckBox

Checkbox adalah widget yang memungkinkan pengguna mencentang (atau menghapus centang) sebuah kotak. Saat status kotak centang berubah, panggilan balik yang terdaftar ke widget akan diberikan nilai boolean yang menunjukkan apakah kotak centang sekarang dicentang. Sebagai contoh:

```
var checkbox = ui.Checkbox('Show SRTM layer', true);

checkbox.onChange(function(checked) {
  // Shows or hides the first map layer based on the checkbox's value.
  Map.layers().get(0).setShown(checked);
});

Map.addLayer(ee.Image('CGIAR/SRTM90_V4'));
print(checkbox);
```

Kotak centang yang dicetak akan terlihat seperti:

![image](https://user-images.githubusercontent.com/69818715/158392707-52395a86-1b96-4937-9f1a-a38917359b3f.png)

Perhatikan bahwa mencentang kotak akan mengaktifkan lapisan yang ditampilkan di peta. Seperti komponen UI lainnya, Peta Editor Kode dapat dimanipulasi secara terprogram. Pelajari lebih lanjut tentang objek Peta di halaman Panel dan Tata Letak.

- ui.Slider

slider adalah widget yang memungkinkan pengguna menyesuaikan slider untuk mendapatkan nomor dalam rentang slider. Konfigurasikan rentang menggunakan konstruktor atau dengan mengatur properti penggeser. Contoh berikut menggunakan penggeser untuk mengatur opasitas lapisan pertama pada Peta:

```
var slider = ui.Slider();

slider.setValue(0.9);  // Set a default value.
slider.onChange(function(value) {
  Map.layers().get(0).setOpacity(value);
});

Map.addLayer(ee.Image(255), {palette: 'blue'});
print(slider);
```



```

```








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

