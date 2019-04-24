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
    colorLog('[DJ Yonder] Playing music..', 'success');
    document.getElementById('icon').innerHTML = '<i class="material-icons">volume_off</i>';
  };
  myAudio.onpause = function() {
    isPlaying = false;
    colorLog('[DJ Yonder] Pausing music..', 'success');
    document.getElementById('icon').innerHTML = '<i class="material-icons">music_note</i>';
  };


