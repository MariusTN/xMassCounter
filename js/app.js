window.onload = function(evt) {


    /* Working with HTML5 Audio to make a nice player */

    (function() {
        //selecting elements
        let audioElement = document.querySelector("audio");
        let playButton = document.querySelector(".btn-play");
        let iInsidePlayButton = document.querySelector("#iplay");
        let muteButton = document.querySelector(".btn-mute");
        let iInsideMuteButton = document.querySelector("#imute");
        let audioVolume = document.querySelector("#slider");

        // adding function to Playbutton
        playButton.addEventListener('click', () => {
            if (audioElement.paused) {
                audioElement.play();
                // i tag inside our btn-play
                iInsidePlayButton.classList.remove('fa-play');
                iInsidePlayButton.classList.add('fa-stop');
            } else {
                audioElement.pause();
                iInsidePlayButton.classList.remove('fa-stop');
                iInsidePlayButton.classList.add('fa-play');
            }
        })

        /* 
        Mute button selection -> 
        Event listener and simple class add/remove on icons
        */

        muteButton.addEventListener('click', () => {
            //checking if audio is muted
            if (audioElement.muted == false) {
                audioElement.muted = true;
                // i tag inside our btn-mute
                iInsideMuteButton.classList.remove('fa-volume-up');
                iInsideMuteButton.classList.add('fa-volume-mute');
            } else {
                audioElement.muted = false;
                iInsideMuteButton.classList.remove('fa-volume-mute');
                iInsideMuteButton.classList.add('fa-volume-up');
            }
        })

        //Event listener to set our Audio - Slider
        audioVolume.addEventListener("change", () => {
            audioElement.volume = audioVolume.value;
        })

    }());





/* Countdown Function - COOOOOOOKIES SOOOOOON */

function countdown() {

    //new date
    let now = new Date();
    //setting our date
    let xmass2020 = new Date(2020, 11, 25);

    //variables for time
    let present = now.getTime();
    let future = xmass2020.getTime();

    // simple math to get the all the remain time until xmass in MS
    let remainTime = future - present;

    //Total amount of seconds
    let seconds = Math.floor(remainTime / 1000);

    //Total amount of minutes
    let minutes = Math.floor(seconds / 60);

    //Total amount of hours
    let hours = Math.floor(minutes / 60);

    //Total amount of days
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    //checking when we have under 10 hours / minutes or seconds
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;


}

setInterval(countdown, 1000);

//twitter share
var getWindowOptions = function() {
    return [
        'resizable,scrollbars,status',
        'height=350',
        'width=500',
        'left=400',
        'top=200',
    ].join();
};

//selecting from DOM
let twitterShare = document.querySelector('.twitter-share');

//custom text variable for "post"
let text = encodeURIComponent('Join us too see how many days there are left until Christmas!');

//merging custom text with Twitter Sharable link
let shareUrl = `https://twitter.com/intent/tweet?url=${location.href}&text=${text}`;

//adding the link to our element href
twitterShare.href = shareUrl; // 1

//event listener on press
twitterShare.addEventListener('click', function(e) {
    e.preventDefault();

    //custom variable for window.open also, merging our options from above
    let popWindow = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
    popWindow.opener = null; // 2
});

};