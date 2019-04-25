console.log('!!!! core.js loaded !!!');
if(document.getElementById("BackgroundSound")){
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

}


function randombg(){
  var random= Math.floor(Math.random() * 26) + 0;
  var bigSize = ["url('./assets/images/backgrounds/wp3538785.jpg')",
                 "url('./assets/images/backgrounds/2018-fortnite-video-game-4k-kl.jpg')",
                 "url('./assets/images/backgrounds/fortnite-minimal-clock-tower-nk-1920x1080.jpg')",
                 "url('./assets/images/backgrounds/bullseye-in-fortnite-season-6-4k-9w-1920x1080.jpg')",
                 "url('./assets/images/backgrounds/fortnite-mythic-cloaked-star-ninja-5z-1920x1080.jpg')",
                 "url('./assets/images/backgrounds/Endgame_Loadingscreen.png')",
                 "url('./assets/images/backgrounds/S4_Trex.png')",
                 "url('./assets/images/backgrounds/S4_Week1.png')",
                 "url('./assets/images/backgrounds/S4_Week3.png')",
                 "url('./assets/images/backgrounds/S4_Week6.png')",
                 "url('./assets/images/backgrounds/S4_Wildwest.png')",
                 "url('./assets/images/backgrounds/S5_STW.png')",
                 "url('./assets/images/backgrounds/S5_Week4.png')",
                 "url('./assets/images/backgrounds/S5_Week5.png')",
                 "url('./assets/images/backgrounds/S5_Week8.png')",
                 "url('./assets/images/backgrounds/S6_bunnies.png')",
                 "url('./assets/images/backgrounds/S6_scuba.png')",
                 "url('./assets/images/backgrounds/S6_Week8.png')",
                 "url('./assets/images/backgrounds/S6_Week9.png')",
                 "url('./assets/images/backgrounds/S7_crackshot.png')",
                 "url('./assets/images/backgrounds/S7_skulltrooper.png')",
                 "url('./assets/images/backgrounds/S7_tenderdefender.png')",
                 "url('./assets/images/backgrounds/S7_Week6.png')",
                 "url('./assets/images/backgrounds/S8_Main.png')",
                 "url('./assets/images/backgrounds/S8_Week9.png')",
                 "url('./assets/images/backgrounds/S8_Week10.png')",
                 "url('./assets/images/backgrounds/STW-Yarr.png')",
                 "url('./assets/images/backgrounds/galaxy-man-fortnite-season-6-4k-2y-1920x1080.jpg')"];
  document.getElementById('body').style.backgroundImage=bigSize[random];
}
