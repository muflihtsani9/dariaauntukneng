/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "1111";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Risa";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Mesra-Mesraannya Kecil-Kecilan Dulu",             // ← GANTI JUDUL LAGU
    artist: "Sal Priadi",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "One smile from you can fix my whole day." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "You're the reason my heart feels so full." },
  { file: "img3.jpeg", caption: "Every second with you is my favorite." },
  { file: "img4.jpeg", caption: "Some people search for happiness, I found mine in you." },
  { file: "img5.jpeg", caption: "You turned my ordinary life into something beautiful." },
  { file: "img6.jpeg", caption: "My heart feels safest when it's with you." },
  { file: "img7.jpeg", caption: "If I could relive a moment, I'd choose us every time." },
  { file: "img8.jpeg", caption: "Still my favorite person, always. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "Aa cuma ingin kamu tahu kalau sejauh apa pun perjalanan yang sudah kita lewati, aa selalu bersyukur karena ada kamu di dalamnya.",
  "Kita udah lalui begitu banyak hal bersama. Dari obrolan-obrolan sederhana yang berakhir dengan tawa, candaan-candaan receh yang cuma kita yang mengerti, sampai momen-momen kecil yang tanpa sadar menjadi kenangan paling berharga.",
  "Dan jujur, salah satu hal terbaik yang pernah terjadi dalam hidup aa itu bisa kenal sama kamu Sa.",
  "Aa tahu hidup tidak selalu mudah. Akan ada hari ketika semuanya terasa berat, ketika lelah datang tanpa alasan yang jelas, ketika dunia terasa terlalu ramai dan membuat kamu ingin menyerah. Tapi saat hari itu datang, aa ingin kamu mengingat satu hal:",
  "Kamu ga harus menghadapi semuanya sendirian.",
  "Saat kamu lelah, aa akan nemanin kamu istirahat.",
  "Saat kamu sedih, aa akan berusaha membuatmu tersenyum.",
  "Saat kamu ragu pada diri kamu sendiri, aa akan mengingatkan betapa hebatnya kamu",
  "Karena buat aa, hubungan ini bukan tentang siapa yang paling kuat. Ini tentang bagaimana kita saling menggenggam ketika salah satu dari kita mulai kehilangan tenaga.",
  "Aa emang ga menjanjikan hidup yang selalu mudah. Aa ga bisa janji kalau setiap hari akan dipenuhi kebahagiaan. Tapi aa ingin berusaha menjadi seseorang yang tetap ada di sisimu, baik ketika semuanya berjalan baik maupun ketika keadaan sedang tidak baik-baik saja.",
  "Jadi jangan takut menghadapi hari esok ya cintaku",
  "Kita mungkin ga bisa mengendalikan apa yang akan terjadi, tapi kita bisa memilih untuk tetap melangkah bersama. Pelan-pelan, satu langkah demi satu langkah, sampai semua mimpi yang kita ceritakan satu sama lain bisa kita lihat menjadi kenyataan.",
  "Teruslah menjadi Risa yang hangat, baik, dan kuat seperti sekarang. Dan jika suatu saat kamu merasa dunia terlalu berat untuk dipikul, ingatlah bahwa ada seseorang di sini yang akan selalu percaya padamu, mendukungmu, dan mendoakan yang terbaik untuk kamu Sa.",
  "Terima kasih sudah menjadi bagian dari hidup aa. Ayo kita terus membuat lebih banyak cerita, lebih banyak tawa, dan lebih banyak kenangan indah bersama. Apa pun yang datang nanti, kita hadapi bersama-sama ya cintaku❤️",
  "Semoga hari-hari kamu selalu dipenuhi kebahagiaan, kesehatan, dan ketenangan. Aa akan terus berusaha menjadi seseorang yang bisa membuat kamu merasa aman, nyaman, dan dicintai. Karena selama ada kamu, aa selalu punya alasan untuk tersenyum dan terus melangkah maju."
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "Where It All Started",
    text:  "That moment when everything just clicked and suddenly made sense.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "The Quiet Days",
    text:  "Just you, me, and those simple moments that ended up meaning everything.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "Through the Storms",
    text:  "We've had our rough days, but honestly, we always found our way back.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "Finding the Light",
    text:  "You're literally the brightest part of my journey, even in the deepest waters.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. HARAPAN & UCAPAN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "May your days bring you the calmness of the ocean and the depth of your kindness." },
  { icon: "shell",   text: "Hope your path is as bright as the sun on the water, and your nights as peaceful as the receding tide." },
  { icon: "star",    text: "May every little wish of yours arrive right when you need it the most." },
  { icon: "compass", text: "Wherever life takes you, I hope you always find your way back to my arms." },
  { icon: "anchor",  text: "Stay grounded, stay grateful, and honestly, just stay as beautiful as you are right now." },
  { icon: "heart",   text: "Thank you for everything — cheers to many more beautiful memories together." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
