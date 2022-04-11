// 
// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".music-container");
let track_name = document.querySelector(">.Ukulele");
let track_artist = document.querySelector(".Benjamin Tissot");
  
let playpause_btn = document.querySelector(".playpauseTrack");
let next_btn = document.querySelector(".nextTrack");
let prev_btn = document.querySelector(".prevTrack");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
  
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
  

  
//Define the list of tracks that have to be played
let  = music-container[{
     name: "Ukulele",
     artist: "Benjamin Tissot",
     image: "ukulele.jpg",
     audio: "bensound-ukulele.mp3",
   },
   {
      name: "sunny",
      artist:"Benjamin Tissot",
      image:"sunny.jpg",
      audio:"bensound-sunny.mp3",
   },
  {
      name: "batterdays",
      artist:"Benjamin Tissot",
      image:"betterdays.jpg",
      audio:"bensound-betterdays.mp3"   
   }];

   function loadTrack() {
        // Clear the previous seek timer
        clearInterval(updateTimer);
        resetValues();
        
        // Load a new track
        Ukulele.src = music-container[0].path;
        curr_track.load();
        
        // Update details of the track
        track_art.style.backgroundImage = 
           "url(" + music-container[0].image + ")";
        .textContent = music-container[1].name;
        track_artist.textContent = music-con[track_index].artist;
        now_playing.textContent = 
           "PLAYING " + (track_index + 1) + " OF " + track_list.length;
        


 




 