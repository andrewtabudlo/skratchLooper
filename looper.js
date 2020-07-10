stopAll = () => {
    loop1.stop();
    loop2.stop();
    loop3.stop();
    loop4.stop();
    loop5.stop();
    loop6.stop();
    loop7.stop();
    loop8.stop();
    loop9.stop();
    loop10.stop();
}

// load loops

var loop1 = new Howl({
    src: ['./RitchieRuftone/1.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 11330, true]
    }
});

var loop2 = new Howl({
    src: ['./RitchieRuftone/2.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 24201, true]
    }
});

var loop3 = new Howl({
    src: ['./RitchieRuftone/3.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 10224, true]
    }
});

var loop4 = new Howl({
    src: ['./RitchieRuftone/4.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 22490, true]
    }
});

var loop5 = new Howl({
    src: ['./RitchieRuftone/5.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 23034, true]
    }
});

var loop6 = new Howl({
    src: ['./RitchieRuftone/6.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 54759, true]
    }
});

var loop7 = new Howl({
    src: ['./RitchieRuftone/7.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 26568, true]
    }
});

var loop8 = new Howl({
    src: ['./RitchieRuftone/8.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 13616, true]
    }
});

var loop9 = new Howl({
    src: ['./RitchieRuftone/9.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 29440, true]
    }
});

var loop10 = new Howl({
    src: ['./RitchieRuftone/10.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 60854, true]
    }
});

playLoop = (loop) => {
  switch(loop) {
    case "loop1":
      loop1.play('loop');
      break;
    case "loop2":
      loop2.play('loop');
      break;
    case "loop3":
      loop3.play('loop');
      break;
    case "loop4":
      loop4.play('loop');
      break;
    case "loop5":
      loop5.play('loop');
      break;
    case "loop6":
      loop6.play('loop');
      break;
    case "loop7":
      loop7.play('loop');
      break;
    case "loop8":
      loop8.play('loop');
      break;
    case "loop9":
      loop9.play('loop');
      break;
    case "loop10":
      loop10.play('loop');
      break;
  }
}

$("#stop").click(function() {
    stopAll();
});

//any loop number clicked on
$(".loop").click(function(e){
  //stop any playing loop
  stopAll();
  //play loop with id that was clicked on
  playLoop(e.currentTarget.id);
});
