var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    document.getElementById("playButton").className = "fa fa-pause";
  } else {
    myVideo.pause();
    document.getElementById("playButton").className = "fa fa-play";
  }
}

function openPanel(name) {
  window.location = "dashboard.html#" + name;
  if (document.URL.indexOf("dashboard") >= 0) {
    var x = document.getElementsByClassName("nav-tab");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    var x = document.getElementsByClassName("nav-tab-button");
    for (i = 0; i < x.length; i++) {
      x[i].className = "nav-tab-button";
    }

    document.getElementById(name).style.display = "block";

    document.getElementById(name + "-button").className =
      "nav-tab-button active";
  } else {
    window.location = "dashboard.html#" + name;
  }
}

function uploadedFile(id) {
  $(".uploaded").css("display", "flex");
  $(".after-upload").css("display", "flex");
  var filename = $(id).val().split("\\").pop();
  $("#name-of-file").text(filename);
}

function sign() {
  $("#defaultSignature").css("display", "block");
}

function bechedi() {
  alert("Bechedi function");
}
function text() {
  alert("ტექსტი");
}
function nextAfterSign() {
  $(".hidden").css("display", "flex");
  $(".next").css("display", "none");
  $("#defaultSignature").signature("disable");
}

function downloadSignature() {
  var image = new Image();
  image.src = $("#defaultSignature").signature("toDataURL");

  download(image.src, "rame.png");
}
function download(dataUrl, filename) {
  var download = document.createElement("a");
  download.href = dataUrl;
  download.target = "_blank";
  download.download = filename;
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(
    "click",
    true,
    true,
    window,
    1,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  download.dispatchEvent(evt);
}

function openModal() {
  document.getElementById("addMember").style.display = "block";
}

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
