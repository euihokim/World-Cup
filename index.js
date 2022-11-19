// Carousel Groups
const center = document.querySelector(".list-item");
const items = document.querySelectorAll(".list-item li");
const prev2 = document.querySelector(".btn2-prev");
const next2 = document.querySelector(".btn2-next");
const angle = 360 / items.length;
let currAngle = 0;

next2.addEventListener("click", function (e) {
    if (true) {
        currAngle -= angle;
    }
    center.style.transform = `translate(0,0) rotateY(${currAngle}deg)`;
});

prev2.addEventListener("click", function (e) {
    if (true) {
        currAngle += angle;
    }
    center.style.transform = `translate(0,0) rotateY(${currAngle}deg)`;
});

// Photo Card Group H
const prev = document.querySelector(".btn-prev");
const next = document.querySelector(".btn-next");
const item = document.querySelector(".list-group-item");
let currPosition = 0;

next.addEventListener("click", function (e) {
    if (currPosition > -960) {
        currPosition -= 320;
    }
    item.style.transform = `translate(${currPosition}px)`;
});
prev.addEventListener("click", function (e) {
    if (currPosition < 0) {
        currPosition += 320;
    }
    item.style.transform = `translate(${currPosition}px)`;
});

$(function () {
    $("#confirm").click(function () {
        modalClose();
    });
    $("#modal-open").click(function () {
        $("#popup").css("display", "flex").hide().fadeIn();
    });
    $("#close").click(function () {
        modalClose();
    });
    function modalClose() {
        $("#popup").fadeOut();
    }
});

// BGM
$(".btn-music-play").click(function () {
    $(".youtube-video")[0].contentWindow.postMessage(
        '{"event":"command","func":"' + "playVideo" + '","args":""}',
        "*"
    );
});

$(".btn-music-pause").click(function () {
    $(".youtube-video")[0].contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
    );
});

// $("a.stop-video").click(function () {
//     $(".youtube-video")[0].contentWindow.postMessage(
//         '{"event":"command","func":"' +
//             "stopVideo" +
//             '","args":""}',
//         "*"
//     );
// });
