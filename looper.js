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
    loop11.stop();
    loop12.stop();
    loop13.stop();
    loop14.stop();
    loop15.stop();
    loop16.stop();
    loop17.stop();
    loop18.stop();
    loop19.stop();
    loop20.stop();
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

var loop11 = new Howl({
    src: ['./RitchieRuftone/11.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 11330, true]
    }
});

var loop12 = new Howl({
    src: ['./RitchieRuftone/12.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 24201, true]
    }
});

var loop13 = new Howl({
    src: ['./RitchieRuftone/13.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 10224, true]
    }
});

var loop14 = new Howl({
    src: ['./RitchieRuftone/14.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 22490, true]
    }
});

var loop15 = new Howl({
    src: ['./RitchieRuftone/15.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 23034, true]
    }
});

var loop16 = new Howl({
    src: ['./RitchieRuftone/16.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 54759, true]
    }
});

var loop17 = new Howl({
    src: ['./RitchieRuftone/17.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 26568, true]
    }
});

var loop18 = new Howl({
    src: ['./RitchieRuftone/18.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 13616, true]
    }
});

var loop19 = new Howl({
    src: ['./RitchieRuftone/19.mp3'],
    autoplay: false,
    sprite: {
      loop: [0, 29440, true]
    }
});

var loop20 = new Howl({
    src: ['./RitchieRuftone/20.mp3'],
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
    case "loop11":
      loop1.play('loop');
      break;
    case "loop12":
      loop2.play('loop');
      break;
    case "loop13":
      loop3.play('loop');
      break;
    case "loop14":
      loop4.play('loop');
      break;
    case "loop15":
      loop5.play('loop');
      break;
    case "loop16":
      loop6.play('loop');
      break;
    case "loop17":
      loop7.play('loop');
      break;
    case "loop18":
      loop8.play('loop');
      break;
    case "loop19":
      loop9.play('loop');
      break;
    case "loop20":
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
