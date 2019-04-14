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
    document.getElementById('icon').innerHTML = '<i class="material-icons">volume_off</i>';
  };
  myAudio.onpause = function() {
    isPlaying = false;
    document.getElementById('icon').innerHTML = '<i class="material-icons">music_note</i>';
  };