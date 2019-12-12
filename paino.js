function keyboard(x) {
  var audio = new Audio();
  var i = x;

  if (x == 1) {
    audio.src = "ONE.wav";
    audio.play();
  } else if (x == 2) {
    audio.src = "TWO.wav";
    audio.play();
  } else if (x == 3) {
    audio.src = "THREE.wav";
    audio.play();
  } else if (x == 4) {
    audio.src = "FOUR.wav";
    audio.play();
  } else if (x == 5) {
    audio.src = "FIVE.wav";
    audio.play();
  } else if (x == 6) {
    audio.src = "SIX.wav";
    audio.play();
  } else if (x == 7) {
    audio.src = "SEVEN.wav";
    audio.play();
  } else if (x == 8) {
    audio.src = "EIGHT.wav";
    audio.play();
  } else if (x == 9) {
    audio.src = "NINE.wav";
    audio.play();
  } else if (x == 10) {
    audio.src = "TEN.wav";
    audio.play();
  } else if (x == 11) {
    audio.src = "ELEVEN.wav";
    audio.play();
  } else {
    console.log("Somthing went wrong");
  }
}
