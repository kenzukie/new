
         var myApp = new Framework7();

         // If your using custom DOM library, then save it to $$ variable
         var $$ = Dom7;

         // Add the view
         var mainView = myApp.addView('.view-main', {
            // enable the dynamic navbar for this view:
            dynamicNavbar: true
         });

         const keys = document.querySelectorAll('.key');
//const key = document.querySelector('.key');
keys.forEach(key => key.addEventListener('click', playSound));

function playSound() {
  const audio = document.querySelector('audio[data-sound="'+ this.dataset.sound +'"]');
  //var sounds = document.getElementsByTagName('audio');
  audio.currentTime = 0;
  audio.play();
};