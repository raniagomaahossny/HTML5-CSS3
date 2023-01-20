audioPlayer = document.getElementById("audioPlayer");
audlink1 = document.getElementById("audlink1");
audlink2 = document.getElementById("audlink2");
audlink3 = document.getElementById("audlink3");
audlink4 = document.getElementById("audlink4");

audlink1.addEventListener("click", () => {
  audioPlayer.src =
    "https://cdn.pixabay.com/download/audio/2022/11/30/audio_567ef6dbed.mp3?filename=good-vibes-127577.mp3";

  audioPlayer.play();
});
audlink2.addEventListener("click", () => {
  audioPlayer.src =
    "https://cdn.pixabay.com/download/audio/2023/01/13/audio_e1efc6ce50.mp3?filename=spring-upbeat-133219.mp3";

  audioPlayer.play();
});
audlink3.addEventListener("click", () => {
  audioPlayer.src =
    "https://cdn.pixabay.com/download/audio/2022/06/28/audio_ffe4e508f3.mp3?filename=bounce-114024.mp3";

  audioPlayer.play();
});
audlink4.addEventListener("click", () => {
  audioPlayer.src =
    "https://cdn.pixabay.com/download/audio/2023/01/10/audio_5f83ba4572.mp3?filename=motivational-electronic-distant-132919.mp3";

  audioPlayer.play();
});
//buttons

//shuffleeeeeeeeeeeeeeee
shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", () => {
  let music = ["r1", "r2", "r3", "r4"];
  let rr = music[Math.floor(Math.random() * music.length)];
  if (rr == "r1") {
    audioPlayer.src =
      "https://cdn.pixabay.com/download/audio/2022/11/30/audio_567ef6dbed.mp3?filename=good-vibes-127577.mp3";
    audioPlayer.play();
  } else if (rr == "r2") {
    ("https://cdn.pixabay.com/download/audio/2023/01/13/audio_e1efc6ce50.mp3?filename=spring-upbeat-133219.mp3");
    audioPlayer.play();
  } else if (rr == "r3") {
    audioPlayer.src =
      "https://cdn.pixabay.com/download/audio/2022/06/28/audio_ffe4e508f3.mp3?filename=bounce-114024.mp3";
    audioPlayer.play();
  } else if (rr == "r4") {
    audioPlayer.src =
      "https://cdn.pixabay.com/download/audio/2023/01/10/audio_5f83ba4572.mp3?filename=motivational-electronic-distant-132919.mp3";
    audioPlayer.play();
  }
});

//repeaaaaaaaaaaaaaaaaaaaaaaaaaaaat
repeat = document.getElementById("repeat");
repeat.addEventListener("click", () => {
  audioPlayer.currentTime = "0";
  audioPlayer.play();
});
//playyyyyyyyyyyyyyyyyyyyyyyyyyy
play = document.getElementById("play");
counter = 0;
play.addEventListener("click", () => {
  if (counter == 0) {
    audioPlayer.src =
      "https://cdn.pixabay.com/download/audio/2023/01/18/audio_43b48c0a90.mp3?filename=something-about-you-marilyn-ford-135781.mp3&g-recaptcha-response=03AD1IbLDdxMgrGhHVs_wFctIDJJuJiElNNeJVqczJdEhkRJRiW-cFeNQZEEtTLL6avtUNSDi7D6kCphTi6Ii1wXavAbN9M4u45CmKejuruxwkRee6ossrNsvFAyU_qjKJF5o_-s2i6jXooQiUKW6EDFEaYQaW-OCXlN749JeZVFeqHjs0OXy9cO9vhOtqu7-4YpPC25bZD1MFGqOpT0JGnmdMGkg-Sj7u1WkHVO6PiU-VRcm8jvdz5nt4oMufeWs_k2c3B9ALzcC4llGAGw6CoSOFi5BUfaoMF5WoJaR0HwnugiRI2md00baUKkzy2pUaoKrb2PfauLjDYaJDdeVZ29v2uFBcBqjSg2laJhRCgteWuZw3Dg9pkHBd6OC3f-chQ_BuHdWz5oz4JGUo4uVy-jndVEEjsOl-wJ7fhgRVzwWYwAQbLHb3zOcPDptNLQJSlPWn1QiykEuM6h9VSJRAZW0AScDxE--24aZ2ljieyEejAU03oOzN71o&remote_template=1";
    audioPlayer.play();
    counter++;
  } else if (counter == 1) {
    audioPlayer.pause();
    counter = 0;
  }
});
