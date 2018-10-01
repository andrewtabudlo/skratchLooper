stopAll = () => {
    loop01.stop();
    loop02.stop();
    loop03.stop();
    loop04.stop();
    loop05.stop();
    loop06.stop();
    loop07.stop();
    loop08.stop();
    loop09.stop();
    loop10.stop();
}

// load loops

var loop01 = new Howl({
    src: ['./RitchieRuftone/01.mp3'],
    autoplay: false,
    loop: true
});

var loop02 = new Howl({
    src: ['./RitchieRuftone/02.mp3'],
    autoplay: false,
    loop: true
});

var loop03 = new Howl({
    src: ['./RitchieRuftone/03.mp3'],
    autoplay: false,
    loop: true
});

var loop04 = new Howl({
    src: ['./RitchieRuftone/04.mp3'],
    autoplay: false,
    loop: true
});

var loop05 = new Howl({
    src: ['./RitchieRuftone/05.mp3'],
    autoplay: false,
    loop: true
});

var loop06 = new Howl({
    src: ['./RitchieRuftone/06.mp3'],
    autoplay: false,
    loop: true
});

var loop07 = new Howl({
    src: ['./RitchieRuftone/07.mp3'],
    autoplay: false,
    loop: true
});

var loop08 = new Howl({
    src: ['./RitchieRuftone/08.mp3'],
    autoplay: false,
    loop: true
});

var loop09 = new Howl({
    src: ['./RitchieRuftone/09.mp3'],
    autoplay: false,
    loop: true
});

var loop10 = new Howl({
    src: ['./RitchieRuftone/10.mp3'],
    autoplay: false,
    loop: true
});

document.getElementById("stop").onclick = function () {
    stopAll();
}

document.getElementById("loop01").onclick = function () {
        stopAll();
        loop01.play();
};

document.getElementById("loop02").onclick = function () {
        stopAll();
        loop02.play();
};

document.getElementById("loop03").onclick = function () {
    stopAll();
    loop03.play();
};

document.getElementById("loop04").onclick = function () {
    stopAll();
    loop04.play();
};

document.getElementById("loop05").onclick = function () {
    stopAll();
    loop05.play();
};

document.getElementById("loop06").onclick = function () {
    stopAll();
    loop06.play();
};

document.getElementById("loop07").onclick = function () {
    stopAll();
    loop07.play();
};

document.getElementById("loop08").onclick = function () {
    stopAll();
    loop08.play();
};

document.getElementById("loop09").onclick = function () {
    stopAll();
    loop09.play();
};

document.getElementById("loop10").onclick = function () {
    stopAll();
    loop10.play();
};