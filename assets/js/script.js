// INDEX-PERTANYAAN
// answer-1
function showhide_1() {
  var x = document.getElementById("answer-1");
  var btn1 = document.getElementById("btn-question1");
  var btn2 = document.getElementById("show-question1");
  var btn3 = document.getElementById("close-question1");
  if (x.style.display === "block") {
    x.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
  } else {
    x.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
  }
}

// answer-2
function showhide_2() {
  var x = document.getElementById("answer-2");
  var btn1 = document.getElementById("btn-question2");
  var btn2 = document.getElementById("show-question2");
  var btn3 = document.getElementById("close-question2");
  if (x.style.display === "block") {
    x.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
  } else {
    x.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
  }
}

// answer-3
function showhide_3() {
  var x = document.getElementById("answer-3");
  var btn1 = document.getElementById("btn-question3");
  var btn2 = document.getElementById("show-question3");
  var btn3 = document.getElementById("close-question3");
  if (x.style.display === "block") {
    x.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
  } else {
    x.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
  }
}

// answer-4
function showhide_4() {
  var x = document.getElementById("answer-4");
  var btn1 = document.getElementById("btn-question4");
  var btn2 = document.getElementById("show-question4");
  var btn3 = document.getElementById("close-question4");
  if (x.style.display === "block") {
    x.style.display = "none";
    btn1.style.display = "none";
    btn2.style.display = "block";
    btn3.style.display = "none";
  } else {
    x.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "none";
    btn3.style.display = "block";
  }
}

// Registrasi & Top up
function registrasi() {
  var registrasi = document.getElementById("slider-reg");
  var topup = document.getElementById("slider-topup");
  var titlereg = document.getElementById("title-reg");
  var titletopup = document.getElementById("title-topup");
  if (registrasi.style.display === "none") {
    registrasi.style.display = "block";
    titlereg.style.display = "block";
    topup.style.display = "none";
    titletopup.style.display = "none";
  } else {
    registrasi.style.display = "block";
    titlereg.style.display = "block";
    topup.style.display = "none";
    titletopup.style.display = "none";
  }
}

function topup() {
  var topup = document.getElementById("slider-topup");
  var registrasi = document.getElementById("slider-reg");
  var titlereg = document.getElementById("title-reg");
  var titletopup = document.getElementById("title-topup");
  if (topup.style.display === "none") {
    topup.style.display = "block";
    titletopup.style.display = "block";
    registrasi.style.display = "none";
    titlereg.style.display = "none";
  } else {
    topup.style.display = "block";
    titletopup.style.display = "block";
    registrasi.style.display = "none";
    titlereg.style.display = "none";
  }
}

// FAQ
// faq-akun
function akun() {
  var akun = document.getElementById("faq-akun");
  var keunggulan = document.getElementById("faq-keunggulan");
  var merchant = document.getElementById("faq-merchant");
  var keamanan = document.getElementById("faq-keamanan");
  if (akun.style.display === "none") {
    akun.style.display = "block";
    keunggulan.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "none";
  } else {
    akun.style.display = "block";
    keunggulan.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "none";
  }
}

function keunggulan() {
  var keunggulan = document.getElementById("faq-keunggulan");
  var akun = document.getElementById("faq-akun");
  var merchant = document.getElementById("faq-merchant");
  var keamanan = document.getElementById("faq-keamanan");
  if (keunggulan.style.display === "none") {
    keunggulan.style.display = "block";
    akun.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "none";
  } else {
    keunggulan.style.display = "block";
    akun.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "none";
  }
}

function merchant() {
  var merchant = document.getElementById("faq-merchant");
  var keunggulan = document.getElementById("faq-keunggulan");
  var akun = document.getElementById("faq-akun");
  var keamanan = document.getElementById("faq-keamanan");
  if (merchant.style.display === "none") {
    merchant.style.display = "block";
    keunggulan.style.display = "none";
    akun.style.display = "none";
    keamanan.style.display = "none";
  } else {
    merchant.style.display = "block";
    keunggulan.style.display = "none";
    akun.style.display = "none";
    keamanan.style.display = "none";
  }
}

function keamanan() {
  var keunggulan = document.getElementById("faq-keunggulan");
  var akun = document.getElementById("faq-akun");
  var merchant = document.getElementById("faq-merchant");
  var keamanan = document.getElementById("faq-keamanan");
  if (keamanan.style.display === "none") {
    keunggulan.style.display = "none";
    akun.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "block";
  } else {
    keunggulan.style.display = "none";
    akun.style.display = "none";
    merchant.style.display = "none";
    keamanan.style.display = "block";
  }
}

//
