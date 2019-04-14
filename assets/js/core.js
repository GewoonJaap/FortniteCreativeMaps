console.log('!!!! core.js loaded !!!');
var myAudio = document.getElementById("BackgroundSound");
var isPlaying = false;
function ToggleMusic()
{
    if (isPlaying) {
        myAudio.pause()
      } else {
        myAudio.play();
      }
}

myAudio.onplaying = function() {
    isPlaying = true;
  };
  myAudio.onpause = function() {
    isPlaying = false;
  };