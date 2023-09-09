document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;
});

// input event oninput
document.getElementById("inputNama").addEventListener("input", function () {
  const jumlahKarakterDiKetik =
    document.getElementById("inputNama").value.length;
  const jumlahKarakterMaksimal = document.getElementById("inputNama").maxLength;

  console.log("jumlahKarakterDiKetik:", jumlahKarakterDiKetik);
  console.log("jumlahKarakterMaksimal:", jumlahKarakterMaksimal);
  const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiKetik;
  document.getElementById("sisaKarakter").innerText =
    sisaKarakterUpdate.toString();

  if (sisaKarakterUpdate === 0) {
    document.getElementById("sisaKarakter").innerText =
      "karakter sudah tercapai";
  } else if (sisaKarakterUpdate <= 5) {
    document.getElementById("notifikasiSisaKarakter").style.color = "red";
  } else {
    document.getElementById("notifikasiSisaKarakter").style.color = "black";
  }
});

//even input onFocus
document.getElementById("inputNama").addEventListener("focus", function () {
  console.log("inputnama focus");
  document.getElementById("notifikasiSisaKarakter").style.visibility =
    "visible";
});
// even input onBlur
document.getElementById("inputNama").addEventListener("blur", function () {
  console.log("inputnama blur");
  document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
});

// event onChange
document.getElementById("inputCaptcha").addEventListener("change", function () {
  const inputCaptcha = document.getElementById("inputCaptcha").value;
  const submitButtonStatus = document.getElementById("submitButton");

  if (inputCaptcha === "PRNU") {
    submitButtonStatus.removeAttribute("disabled");
  } else {
    submitButtonStatus.setAttribute("disabled", "");
  }
});

// validasi Submit
document
  .getElementById("formDataDiri")
  .addEventListener("submit", function (e) {
    const inputCaptcha = document.getElementById("inputCaptcha").value;

    if (inputCaptcha === "PRNU") {
      alert("selamat Capctha anda berhasil");
    } else {
      alert("maaf capthca anda belum berhasil");
      document.getElementById("submitButton").setAttribute("disabled", "");
    }
    e.preventDefault();
  });

//  event onCopy

document.getElementById("inputCopy").addEventListener("copy", function () {
  alert("anda sudah mencopy sesuatu");
});

// event onPaste

document.getElementById("inputPaste").addEventListener("paste", function () {
  alert("anda sudah ngepaste sesuatu");
});
