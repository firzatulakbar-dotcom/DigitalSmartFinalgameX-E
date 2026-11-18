// =====================================================
// DIGITAL SMART - CYBER MISSION
// 5 LEVEL x 5 SOAL = 25 SOAL (TOTAL 100 POIN)
// =====================================================

const levels = [
    {
        title: "Penjaga Data Pribadi",
        questions: [
            {
                q: "Sebuah aplikasi kuis gratis meminta tanggal lahir lengkap, lokasi real-time, daftar kontak, dan akses mikrofon, padahal fiturnya hanya mencocokkan warna kepribadian. Apa keputusan yang paling tepat?",
                options: [
                    "Mengizinkan semuanya karena aplikasi tersedia di toko aplikasi resmi",
                    "Mengizinkan akses kontak dan lokasi, tetapi menolak mikrofon",
                    "Menolak izin yang tidak relevan, membatasi data yang diberikan, atau tidak menggunakan aplikasi jika tetap mewajibkannya",
                    "Mengisi semua data dengan informasi asli agar hasil kuis lebih akurat"
                ],
                answer: 2,
                explanation: "Terapkan prinsip minimisasi data: aplikasi hanya semestinya menerima data yang diperlukan untuk menjalankan fungsi utamanya. Toko aplikasi resmi bukan jaminan bahwa semua permintaan izin relevan atau aman."
            },
            {
                q: "Kamu mengunggah foto tiket perjalanan untuk menunjukkan bahwa akan pergi berlibur. Foto itu menampilkan kode pemesanan dan barcode. Risiko utama yang perlu kamu antisipasi adalah ...",
                options: [
                    "Orang lain dapat menggunakan detail tiket untuk mengakses atau mengubah informasi perjalanan, bergantung pada sistem penyedia",
                    "Kualitas foto akan menurun setelah diunggah ke media sosial",
                    "Akun media sosial otomatis berpindah ke mode publik",
                    "Penyedia tiket akan menghapus perjalanan karena foto telah dibagikan"
                ],
                answer: 0,
                explanation: "Kode pemesanan, barcode, dan detail perjalanan dapat menjadi informasi sensitif. Hindari mengunggahnya; samarkan seluruh kode dan data identitas bila foto benar-benar perlu dibagikan."
            },
            {
                q: "Kamu menerima pemberitahuan bahwa kata sandi akun sekolah mungkin bocor. Kamu memakai kata sandi yang sama untuk email pribadi. Urutan tindakan yang paling aman adalah ...",
                options: [
                    "Mengganti nama profil agar akun tidak mudah ditemukan",
                    "Menunggu sampai ada aktivitas mencurigakan sebelum bertindak",
                    "Mengganti kata sandi akun sekolah saja karena kebocoran hanya disebut terjadi di sana",
                    "Dari perangkat tepercaya, mengganti kata sandi unik pada akun terdampak dan akun lain yang memakai kata sandi sama, lalu mengaktifkan 2FA serta memeriksa sesi masuk"
                ],
                answer: 3,
                explanation: "Kebocoran satu kata sandi dapat membahayakan akun lain melalui credential stuffing. Ganti kata sandi yang digunakan ulang, aktifkan autentikasi dua faktor, dan keluarkan sesi yang tidak dikenal."
            },
            {
                q: "Kamu perlu mengirim salinan kartu identitas untuk keperluan administrasi yang sah. Cara yang paling baik untuk mengurangi risiko penyalahgunaan adalah ...",
                options: [
                    "Mengirim foto resolusi penuh melalui komentar media sosial agar mudah ditemukan petugas",
                    "Memastikan penerima dan kanalnya resmi, menanyakan data yang benar-benar diperlukan, lalu memberi watermark tujuan dan tanggal jika diperbolehkan",
                    "Mengirimkan kartu identitas beserta kata sandi email untuk membuktikan kepemilikan",
                    "Mengirimkannya ke beberapa alamat sekaligus agar salah satunya pasti sampai"
                ],
                answer: 1,
                explanation: "Verifikasi penerima dan kanal resmi, batasi data sesuai kebutuhan, serta gunakan watermark yang menyebut tujuan dan tanggal bila kebijakan penerima mengizinkan. Jangan pernah menyertakan kata sandi."
            },
            {
                q: "Ponselmu hilang dan di dalamnya terdapat email yang masih login serta aplikasi perbankan. Langkah awal paling tepat untuk membatasi dampak adalah ...",
                options: [
                    "Mengumumkan semua kata sandi di grup keluarga agar mereka dapat membantu",
                    "Menunggu ponsel ditemukan sebelum mengubah pengaturan akun",
                    "Menggunakan fitur resmi untuk mengunci atau menghapus perangkat dari jarak jauh, mengamankan akun utama, dan menghubungi bank bila akses keuangan berisiko",
                    "Menghapus akun media sosial dari perangkat teman"
                ],
                answer: 2,
                explanation: "Amankan perangkat dan akun secepatnya melalui layanan resmi. Email sering menjadi jalur pemulihan akun lain, sedangkan bank perlu diberi tahu bila aplikasi atau kredensial keuangan mungkin dapat diakses."
            }
        ]
    },
    {
        title: "Pemburu Hoaks",
        questions: [
            {
                q: "Sebuah unggahan menyatakan, “90% warga kota mendukung kebijakan X,” tetapi hanya menyertakan tangkapan layar grafik tanpa tautan survei. Apa pemeriksaan paling penting sebelum menerima klaim itu?",
                options: [
                    "Memeriksa jumlah komentar yang setuju dengan unggahan",
                    "Memeriksa penyelenggara, tanggal, ukuran dan cara pemilihan sampel, pertanyaan survei, serta sumber data aslinya",
                    "Memastikan grafik menggunakan warna yang konsisten",
                    "Membandingkan jumlah pengikut akun pengunggah dengan akun lain"
                ],
                answer: 1,
                explanation: "Angka persentase tidak bermakna tanpa metodologi. Sampel yang bias, pertanyaan menggiring, atau tanggal yang tidak relevan dapat membuat klaim tampak meyakinkan padahal menyesatkan."
            },
            {
                q: "Foto banjir beredar dengan keterangan bahwa kejadian itu berlangsung hari ini di kotamu. Pencarian gambar terbalik menemukan foto identik pada berita tiga tahun lalu di negara lain. Kesimpulan paling akurat adalah ...",
                options: [
                    "Foto itu pasti hasil rekayasa karena ditemukan di berita lama",
                    "Banjir hari ini pasti terjadi karena foto tersebut tampak nyata",
                    "Foto lama tidak boleh digunakan dalam berita apa pun",
                    "Foto tersebut tidak membuktikan kejadian hari ini; klaim lokasi dan waktunya perlu diverifikasi dengan sumber terkini"
                ],
                answer: 3,
                explanation: "Foto yang autentik tetap bisa menyesatkan bila dipasangkan dengan waktu atau lokasi yang salah. Periksa konteks asli dan cari bukti terkini dari sumber lokal tepercaya."
            },
            {
                q: "Sebuah artikel menyebut jumlah pengguna aplikasi meningkat setelah kampanye iklan diluncurkan, lalu menyimpulkan bahwa iklan adalah satu-satunya penyebab kenaikan. Kelemahan penalaran yang paling jelas adalah ...",
                options: [
                    "Menganggap hubungan waktu atau korelasi sebagai bukti sebab-akibat tanpa menguji faktor lain",
                    "Menggunakan data angka dalam sebuah artikel",
                    "Membandingkan dua periode waktu yang berbeda",
                    "Menyebutkan adanya kampanye iklan"
                ],
                answer: 0,
                explanation: "Dua peristiwa yang terjadi berdekatan belum tentu memiliki hubungan sebab-akibat. Perlu dipertimbangkan faktor lain, kelompok pembanding, dan metode analisis yang memadai."
            },
            {
                q: "Kamu menemukan kutipan tokoh terkenal dalam gambar. Tidak ada tautan sumber, dan beberapa situs menuliskan versi kalimat yang berbeda. Cara verifikasi terkuat adalah ...",
                options: [
                    "Memilih versi yang paling sering muncul di media sosial",
                    "Menganggap kutipan benar jika foto tokoh disertakan",
                    "Menelusuri rekaman, transkrip, atau publikasi primer dan memeriksa konteks lengkap pernyataannya",
                    "Mengutip ulang dengan menambahkan kata “katanya”"
                ],
                answer: 2,
                explanation: "Sumber primer seperti rekaman, transkrip resmi, atau tulisan asli lebih kuat daripada kutipan yang berulang di situs lain. Konteks diperlukan agar makna tidak terpotong."
            },
            {
                q: "Sebuah pesan berantai menyebut sekolah akan diliburkan besok dan meminta penerima segera menyebarkannya. Belum ada pengumuman dari sekolah. Tindakan paling bertanggung jawab adalah ...",
                options: [
                    "Meneruskan pesan dengan catatan bahwa informasinya belum pasti",
                    "Menahan penyebaran dan mengonfirmasi melalui kanal resmi sekolah atau pihak berwenang",
                    "Menyebarkan hanya kepada teman dekat karena risikonya lebih kecil",
                    "Membuat poster sendiri agar informasi cepat dipahami"
                ],
                answer: 1,
                explanation: "Label “belum pasti” tidak menghilangkan dampak penyebaran rumor. Konfirmasi langsung melalui kanal resmi sebelum membagikan informasi yang memengaruhi banyak orang."
            }
        ]
    },
    {
        title: "Bijak Bermedia Sosial",
        questions: [
            {
                q: "Sebuah unggahan teman membuatmu marah. Kamu ingin membalas saat itu juga. Pilihan yang paling menunjukkan pengendalian diri dan literasi digital adalah ...",
                options: [
                    "Membalas dengan sindiran agar pengikut lain menilai siapa yang benar",
                    "Mengunggah tangkapan layar profilnya agar orang lain ikut menegur",
                    "Membalas secepat mungkin sebelum unggahan itu dihapus",
                    "Berhenti sejenak, memeriksa konteks, lalu menyampaikan kritik pada gagasan tanpa menyerang identitas orangnya"
                ],
                answer: 3,
                explanation: "Jeda membantu mengurangi respons impulsif. Kritik yang sehat berfokus pada isi atau tindakan, bukan menghina identitas, menyebarkan data, atau mengajak orang menyerang."
            },
            {
                q: "Akunmu diatur privat, tetapi seorang pengikut mengambil tangkapan layar unggahanmu dan menyebarkannya ke luar platform. Pelajaran paling tepat dari situasi ini adalah ...",
                options: [
                    "Pengaturan privat membatasi akses awal, tetapi tidak menjamin konten tidak disalin atau disebarkan ulang",
                    "Akun privat membuat semua tangkapan layar otomatis terhapus",
                    "Penyebaran ulang hanya mungkin dilakukan oleh orang yang memiliki kata sandi akun",
                    "Konten yang diunggah pada akun privat tidak meninggalkan jejak digital"
                ],
                answer: 0,
                explanation: "Pengaturan privat bukan kendali penuh atas tindakan penerima. Pertimbangkan risiko salinan, rekaman layar, dan penyebaran ulang sebelum mengunggah sesuatu."
            },
            {
                q: "Seseorang mengunggah video teman sekelas yang sedang dipermalukan. Banyak pengguna meminta agar video itu dibagikan untuk “mengecam pelaku”. Apa respons paling aman bagi korban?",
                options: [
                    "Membagikan ulang agar lebih banyak orang tahu identitas korban",
                    "Mengunduh dan mengunggah video ke akun lain sebagai bukti",
                    "Tidak memperluas penyebaran, menyimpan bukti secara aman, melaporkan konten, dan mendampingi korban mencari bantuan tepercaya",
                    "Membalas dengan membuat video yang mempermalukan pengunggah"
                ],
                answer: 2,
                explanation: "Menyebarkan ulang dapat memperbesar kerugian korban meskipun niatnya mengecam. Simpan bukti tanpa memviralkannya, laporkan melalui fitur resmi, dan bantu korban memperoleh dukungan."
            },
            {
                q: "Sebuah merek menawarkan hadiah jika kamu mengunggah foto teman-temanmu dan menandai akun mereka. Beberapa teman belum memberi izin. Apa keputusan yang tepat?",
                options: [
                    "Mengunggah saja karena foto diambil di tempat umum",
                    "Meminta persetujuan orang yang dapat dikenali sebelum mengunggah dan menjelaskan konteks promosi tersebut",
                    "Menandai teman tanpa menyebut bahwa unggahan itu promosi",
                    "Mengunggah foto dengan akun anonim agar tidak terkait denganmu"
                ],
                answer: 1,
                explanation: "Orang yang dapat dikenali berhak mempertimbangkan bagaimana foto dan identitasnya digunakan. Konteks komersial atau promosi juga perlu dijelaskan secara jujur."
            },
            {
                q: "Kamu melihat sebuah akun mengunggah komentar provokatif berulang kali agar orang berdebat. Mengapa membalas panjang atau terus berinteraksi dapat memperburuk situasi?",
                options: [
                    "Semua komentar otomatis membuat akun terkena virus",
                    "Perdebatan selalu menghapus komentar awal",
                    "Balasan panjang membuat identitas asli semua pengguna terlihat",
                    "Interaksi dapat meningkatkan jangkauan konten dan memberi insentif pada provokasi, tergantung sistem rekomendasi platform"
                ],
                answer: 3,
                explanation: "Sebagian platform menggunakan sinyal interaksi untuk menentukan distribusi konten. Tidak memberi perhatian, menyembunyikan, memblokir, atau melaporkan dapat lebih efektif daripada memperpanjang konflik."
            }
        ]
    },
    {
        title: "Detektif Keamanan Digital",
        questions: [
            {
                q: "Kamu menerima email dari alamat “admin@sekolah-verifikasi.example” yang meminta login melalui tautan “sekolah-login.example”. Tampilan situsnya mirip portal sekolah dan memakai HTTPS. Pemeriksaan paling tepat adalah ...",
                options: [
                    "Memeriksa domain melalui kanal resmi sekolah dan membuka alamat portal yang sudah diketahui secara manual, bukan melalui tautan email",
                    "Memasukkan kata sandi karena ikon gembok menandakan situs resmi",
                    "Membalas email dengan mengirimkan kode OTP untuk memastikan pengirim",
                    "Mengunduh lampiran email agar bisa melihat identitas pengirim"
                ],
                answer: 0,
                explanation: "HTTPS mengenkripsi koneksi, bukan membuktikan identitas atau kejujuran pemilik situs. Periksa ejaan domain dan konfirmasi melalui kanal resmi yang terpisah."
            },
            {
                q: "Kata sandi sebuah layanan bocor. Dalam beberapa menit, ada percobaan login ke akunmu di layanan lain. Kamu menggunakan kata sandi yang sama. Serangan ini paling sesuai disebut ...",
                options: [
                    "DDoS, karena banyak perangkat mengakses satu server",
                    "Phishing, karena semua serangan akun berasal dari tautan palsu",
                    "Credential stuffing, yaitu mencoba kombinasi username dan kata sandi bocor pada layanan lain",
                    "Defacement, yaitu mengganti tampilan halaman web"
                ],
                answer: 2,
                explanation: "Credential stuffing memanfaatkan kebiasaan menggunakan ulang kata sandi. Gunakan kata sandi unik untuk setiap layanan dan aktifkan 2FA."
            },
            {
                q: "Sebuah dokumen yang dikirim orang tak dikenal meminta kamu mengaktifkan macro agar isi file terlihat. Apa alasan teknis untuk tidak langsung mengaktifkannya?",
                options: [
                    "Macro hanya berfungsi untuk mengubah ukuran teks sehingga tidak berguna",
                    "Macro dapat menjalankan instruksi otomatis yang berpotensi mengunduh atau mengeksekusi malware",
                    "Macro selalu menghapus sistem operasi saat dibuka",
                    "Macro membuat semua dokumen otomatis menjadi publik"
                ],
                answer: 1,
                explanation: "Macro dapat mengotomatisasi tindakan di dalam dokumen. File tak terduga yang meminta macro diaktifkan patut dicurigai; verifikasi pengirim dan gunakan pemindai keamanan."
            },
            {
                q: "Saat memakai Wi-Fi publik, kamu membuka situs bank yang menggunakan HTTPS. Pernyataan yang paling akurat adalah ...",
                options: [
                    "HTTPS membuat seluruh aktivitas perangkat tidak mungkin dipantau oleh siapa pun",
                    "Wi-Fi publik selalu aman selama nama jaringannya sesuai nama kafe",
                    "Kata sandi bank aman dibagikan melalui pesan karena koneksinya terenkripsi",
                    "HTTPS melindungi isi komunikasi dengan situs, tetapi kamu tetap perlu memastikan jaringan dan alamat situs benar serta menghindari jaringan mencurigakan"
                ],
                answer: 3,
                explanation: "HTTPS memberi perlindungan pada komunikasi dengan situs yang benar, tetapi tidak mengamankan perangkat dari semua ancaman atau membuktikan bahwa jaringan Wi-Fi itu tepercaya."
            },
            {
                q: "Kamu menemukan sesi login aktif di akun email dari perangkat dan lokasi yang tidak dikenal. Langkah yang paling tepat adalah ...",
                options: [
                    "Mengganti kata sandi dari perangkat tepercaya, mengakhiri sesi asing, mengaktifkan 2FA, dan memeriksa metode pemulihan serta aktivitas akun",
                    "Menghapus notifikasi login agar akun kembali normal",
                    "Mengirim kode verifikasi kepada perangkat asing untuk mengetahui siapa penggunanya",
                    "Menonaktifkan semua pemberitahuan keamanan"
                ],
                answer: 0,
                explanation: "Anggap sesi asing sebagai kemungkinan kompromi akun. Amankan kata sandi dan metode pemulihan, keluarkan sesi yang tidak dikenal, aktifkan 2FA, lalu tinjau aktivitas dan aturan penerusan email."
            }
        ]
    },
    {
        title: "Kreator Digital Cerdas",
        questions: [
            {
                q: "Kamu menemukan foto berlisensi Creative Commons yang mengizinkan penggunaan nonkomersial dengan syarat atribusi dan tanpa karya turunan. Kamu ingin memotong, memberi filter, lalu memasukkannya ke video promosi berbayar. Apa keputusan paling tepat?",
                options: [
                    "Boleh digunakan karena nama fotografer dicantumkan di akhir video",
                    "Boleh digunakan selama video promosi tidak menjual foto tersebut secara langsung",
                    "Jangan gunakan dengan cara itu tanpa izin tambahan; penggunaan komersial dan perubahan karya bertentangan dengan syarat lisensi tersebut",
                    "Boleh digunakan karena semua konten Creative Commons bebas untuk segala tujuan"
                ],
                answer: 2,
                explanation: "Lisensi memiliki ketentuan khusus. Atribusi saja tidak menghapus batasan nonkomersial dan tanpa karya turunan. Cari aset dengan lisensi yang sesuai atau minta izin pemegang hak."
            },
            {
                q: "Kamu memakai musik dari pustaka “bebas royalti” untuk video yang akan dimonetisasi. Apa yang tetap harus dilakukan sebelum publikasi?",
                options: [
                    "Menganggap musik itu bebas dipakai di semua platform tanpa batas",
                    "Membaca lisensi untuk memastikan cakupan platform, monetisasi, atribusi, batas wilayah, dan masa penggunaan",
                    "Menghapus nama pencipta agar sistem tidak mengenali musiknya",
                    "Mengubah tempo musik supaya ketentuan lisensi tidak berlaku"
                ],
                answer: 1,
                explanation: "Istilah bebas royalti tidak selalu berarti bebas tanpa syarat. Periksa lisensi, batas penggunaan, kewajiban atribusi, dan apakah monetisasi diizinkan."
            },
            {
                q: "AI menghasilkan ringkasan tentang suatu isu dan menyertakan tiga judul artikel yang tampak meyakinkan. Namun, dua tautannya tidak ditemukan dan satu artikel tidak mendukung klaim utama. Prosedur kreator yang paling bertanggung jawab adalah ...",
                options: [
                    "Memublikasikan ringkasan karena AI telah menyertakan referensi",
                    "Menghapus semua bagian yang tidak disukai tanpa memeriksa fakta lain",
                    "Mengganti tautan dengan hasil pencarian pertama yang muncul",
                    "Menelusuri sumber primer dan sumber tepercaya secara mandiri, memverifikasi setiap klaim, lalu memperbaiki atau menghapus klaim yang tidak terbukti"
                ],
                answer: 3,
                explanation: "Referensi yang dibuat AI dapat keliru atau tidak mendukung klaim. Kreator tetap bertanggung jawab memeriksa keberadaan, relevansi, dan isi sumber sebelum menerbitkan informasi."
            },
            {
                q: "Kamu membuat video edukasi menggunakan suara sintetis yang meniru suara seorang tokoh nyata untuk membacakan kalimat yang tidak pernah ia ucapkan. Agar tidak menyesatkan penonton, tindakan paling penting adalah ...",
                options: [
                    "Memberi label yang jelas bahwa suara dibuat dengan AI dan tidak mengesankan bahwa tokoh tersebut benar-benar mengucapkannya; dapatkan izin bila diperlukan",
                    "Menambahkan logo kanal agar penonton tahu siapa pembuat video",
                    "Menaruh nama tokoh di judul tanpa penjelasan karena hanya untuk edukasi",
                    "Mengubah sedikit nada suara sehingga tidak perlu memberi keterangan"
                ],
                answer: 0,
                explanation: "Konten sintetis yang menyerupai orang nyata perlu diberi konteks secara jelas agar tidak disalahartikan sebagai rekaman asli. Perhatikan juga persetujuan, hak, dan kebijakan platform yang berlaku."
            },
            {
                q: "Video tutorialmu memiliki narasi yang jelas, tetapi sebagian penonton menonton tanpa suara dan sebagian lainnya menggunakan pembaca layar. Perbaikan yang paling inklusif adalah ...",
                options: [
                    "Menambahkan musik lebih keras agar semua penonton memperhatikan",
                    "Mengganti semua narasi dengan teks dekoratif yang tidak dapat dipilih",
                    "Menyediakan subtitle tersinkron, kontras dan ukuran teks yang terbaca, serta deskripsi teks untuk informasi visual penting",
                    "Mengandalkan warna saja untuk membedakan setiap langkah"
                ],
                answer: 2,
                explanation: "Aksesibilitas perlu mempertimbangkan beragam cara orang mengakses konten. Subtitle, kontras yang memadai, teks terbaca, dan deskripsi informasi visual membantu lebih banyak penonton memahami materi."
            }
        ]
    }
];

// STATE PERMAINAN
// =====================================================
let playerName = "";
let currentLevel = 0;
let currentQuestions = [];
let currentQuestion = 0;
let totalCorrect = 0;
let levelCorrect = 0;
let answered = false;

const $ = (id) => document.getElementById(id);
const questionEl = $("question");
const answersEl = $("answers");
const feedbackEl = $("feedback");
const nextBtn = $("nextBtn");

function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function startGame() {
    const nameInput = $("playerName");
    const name = nameInput.value.trim();

    if (!name) {
        $("nameError").textContent = "Silakan masukkan nama terlebih dahulu!";
        nameInput.focus();
        return;
    }

    playerName = name;
    $("nameError").textContent = "";
    currentLevel = 0;
    totalCorrect = 0;
    startLevel();
}

function startLevel() {
    const level = levels[currentLevel];
    currentQuestions = shuffle(level.questions);
    currentQuestion = 0;
    levelCorrect = 0;
    answered = false;

    $("welcome").classList.add("hidden");
    $("result").classList.add("hidden");
    $("quiz").classList.remove("hidden");
    $("displayName").textContent = playerName;
    $("levelTag").textContent = `LEVEL ${String(currentLevel + 1).padStart(2, "0")}`;
    $("levelName").textContent = level.title;
    showQuestion();
}

function showQuestion() {
    if (!currentQuestions.length || currentQuestion >= currentQuestions.length) {
        console.error("Pertanyaan level tidak tersedia.");
        return;
    }

    answered = false;
    const item = currentQuestions[currentQuestion];
    $("counter").textContent = `${String(currentQuestion + 1).padStart(2, "0")} / 05`;
    $("score").textContent = totalCorrect * 4;
    $("question-number").textContent = `MISSION ${String(currentQuestion + 1).padStart(2, "0")}`;
    $("progress-bar").style.width = `${(currentQuestion / currentQuestions.length) * 100}%`;
    questionEl.textContent = item.q;
    answersEl.replaceChildren();
    feedbackEl.className = "feedback";
    feedbackEl.textContent = "";
    nextBtn.classList.add("hidden");

    item.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";
        button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        button.addEventListener("click", () => chooseAnswer(index));
        answersEl.appendChild(button);
    });
}

function chooseAnswer(choice) {
    if (answered) return;
    answered = true;

    const item = currentQuestions[currentQuestion];
    const buttons = [...answersEl.querySelectorAll(".answer")];
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === item.answer) button.classList.add("correct");
        if (index === choice && choice !== item.answer) button.classList.add("wrong");
    });

    const isCorrect = choice === item.answer;
    if (isCorrect) {
        levelCorrect++;
        totalCorrect++;
    }
    $("score").textContent = totalCorrect * 4;

    feedbackEl.className = `feedback show ${isCorrect ? "good" : "bad"}`;
    const title = document.createElement("strong");
    title.textContent = isCorrect ? "✓ JAWABAN BENAR!" : "✕ JAWABAN SALAH!";
    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    feedbackEl.replaceChildren(title, explanation);

    nextBtn.textContent = currentQuestion === currentQuestions.length - 1
        ? "SELESAIKAN LEVEL 🏆"
        : "PERTANYAAN SELANJUTNYA →";
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    if (!answered) return;
    if (currentQuestion < currentQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showLevelResult();
    }
}

function showLevelResult() {
    $("progress-bar").style.width = "100%";
    const level = levels[currentLevel];
    const levelPoints = levelCorrect * 4;
    const isFinalLevel = currentLevel === levels.length - 1;

    $("quiz").classList.add("hidden");
    $("result").classList.remove("hidden");
    $("resultName").textContent = playerName;
    $("resultTheme").textContent = `LEVEL ${currentLevel + 1}: ${level.title}`;
    $("finalScore").textContent = `${levelPoints}/20`;
    $("totalScore").textContent = `Total keseluruhan: ${totalCorrect * 4}/100`;
    $("correctCount").textContent = levelCorrect;
    $("wrongCount").textContent = 5 - levelCorrect;

    if (isFinalLevel) {
        $("resultEyebrow").textContent = "ALL MISSIONS COMPLETED";
        $("resultTitle").textContent = "MASTER DIGITAL! 🚀";
        $("resultText").textContent = `Hebat, ${playerName}! Kamu telah menyelesaikan seluruh 5 level Cyber Mission. Terus terapkan kebiasaan digital yang aman, bijak, dan bertanggung jawab.`;
        $("nextLevelBtn").classList.add("hidden");
        $("restartBtn").classList.remove("hidden");
    } else {
        $("resultEyebrow").textContent = "LEVEL COMPLETED";
        $("resultTitle").textContent = levelCorrect >= 4 ? "MISI BERHASIL! ✨" : "LEVEL SELESAI!";
        $("resultText").textContent = levelCorrect >= 4
            ? "Kerja bagus! Kamu menguasai misi ini. Siap menghadapi tantangan berikutnya?"
            : "Level ini sudah selesai. Baca penjelasan setiap jawaban dan lanjutkan untuk mempelajari tema berikutnya.";
        $("nextLevelBtn").textContent = `LANJUT KE LEVEL ${String(currentLevel + 2).padStart(2, "0")} →`;
        $("nextLevelBtn").classList.remove("hidden");
        $("restartBtn").classList.add("hidden");
    }
}

function nextLevel() {
    if (currentLevel >= levels.length - 1) return;
    currentLevel++;
    startLevel();
}

function restartGame() {
    currentLevel = 0;
    totalCorrect = 0;
    levelCorrect = 0;
    startLevel();
}

function goHome() {
    $("result").classList.add("hidden");
    $("quiz").classList.add("hidden");
    $("welcome").classList.remove("hidden");
    $("playerName").value = playerName;
    $("nameError").textContent = "";
}

// =====================================================
// EVENT LISTENERS
// =====================================================
$("startBtn").addEventListener("click", startGame);
$("playerName").addEventListener("keydown", (event) => {
    if (event.key === "Enter") startGame();
});
nextBtn.addEventListener("click", nextQuestion);
$("nextLevelBtn").addEventListener("click", nextLevel);
$("restartBtn").addEventListener("click", restartGame);
$("homeBtn").addEventListener("click", goHome);

// Validasi struktur bank soal saat game dimuat.
if (levels.length !== 5 || levels.some(level => level.questions.length !== 5)) {
    console.error("Bank soal harus terdiri dari 5 level dengan masing-masing 5 soal.");
} else {
    console.log("Digital Smart siap! 5 level dan 25 soal tersedia.");
}
