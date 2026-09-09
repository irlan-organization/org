const joinForm = document.querySelector(".join-form");

const formAlert = document.getElementById("formAlert");
const formAlertTitle = document.getElementById("formAlertTitle");
const formAlertMessage = document.getElementById("formAlertMessage");
const formAlertClose = document.getElementById("formAlertClose");


/* ==============================
   ALERT
============================== */

function showFormAlert(title, message) {
    formAlertTitle.textContent = title;
    formAlertMessage.textContent = message;

    formAlert.classList.add("show");
}

function closeFormAlert() {
    formAlert.classList.remove("show");
}

formAlertClose.addEventListener("click", closeFormAlert);

formAlert.addEventListener("click", function (e) {
    if (e.target === formAlert) {
        closeFormAlert();
    }
});


/* ==============================
   FORM SUBMIT
============================== */

joinForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const panggilan = document.getElementById("panggilan").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const tempat = document.getElementById("tempat").value.trim();
    const alamat = document.getElementById("alamat").value.trim();
    const motivasi = document.getElementById("motivasi").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const instagram = document.getElementById("instagram").value.trim();
    const tiktok = document.getElementById("tiktok").value.trim();


    /* ==============================
       CEK DATA KOSONG
    ============================== */

    if (
        nama === "" ||
        panggilan === "" ||
        tanggal === "" ||
        tempat === "" ||
        alamat === "" ||
        motivasi === "" ||
        whatsapp === "" ||
        instagram === "" ||
        tiktok === ""
    ) {

        showFormAlert(
            "DATA BELUM LENGKAP",
            "Semua data wajib diisi sebelum pendaftaran dapat dikirim."
        );

        return;
    }


    /* ==============================
       FORMAT TANGGAL
    ============================== */

    const tanggalLahir = new Date(tanggal).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });


    /* ==============================
       PESAN WHATSAPP
    ============================== */

    const pesan =
        `*PENDAFTARAN ANGGOTA BARU IRLAN*

Halo Pengurus IRLAN,

Saya ingin mendaftarkan diri sebagai anggota baru IRLAN.

*DATA DIRI*

Nama Lengkap:
${nama}

Nama Panggilan:
${panggilan}

Tanggal Lahir:
${tanggalLahir}

Tempat Lahir:
${tempat}

Alamat:
${alamat}

WhatsApp:
${whatsapp}

Instagram:
${instagram}

TikTok:
${tiktok}

*Motivasi Join ke IRLAN:*
${motivasi}

Terima kasih.`;


    const pesanEncoded = encodeURIComponent(pesan);


    /* ==============================
       NOMOR PENGURUS
    ============================== */

    const whatsappKetua = "6281389037872";


    /* ==============================
       BUKA WHATSAPP
    ============================== */

    const link =
        `https://wa.me/${whatsappKetua}?text=${pesanEncoded}`;

    window.open(link, "_blank");

});