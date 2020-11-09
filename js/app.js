window.onload = function(evt) {


    /* 
    Slideshow animated, JQuery + JS
    Author: Random Reddit Post
    */
   
    window.setInterval(function() {
        let url = getCurrentIndex();
        $(".autoslides").delay(4000).fadeTo(3000, 0.01, function() {
            $(this).css('background-image', 'url(' + url + ')');
        }).fadeTo(4000 , 1);
    }, 30000);

    let imagesArray = [
        "https://images.unsplash.com/photo-1511268011861-691ed210aae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1512389098783-66b81f86e199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1088&q=80",
        "https://images.unsplash.com/photo-1545048702-79362596cdc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1544277879-42659615e478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80",
        "https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
        "https://images.unsplash.com/photo-1522448746354-da4936934201?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1479722842840-c0a823bd0cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
        "https://images.unsplash.com/photo-1484772905198-b77efdb9856a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1482097623218-813ddc8d7046?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        "https://images.unsplash.com/photo-1512867616096-c91ed9daf1eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1071&q=80",
        "https://images.unsplash.com/photo-1480618757544-81c31930008e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1013&q=80",
        "https://images.unsplash.com/photo-1510189511704-57f96164f531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        "https://images.unsplash.com/photo-1461010083959-8a5727311252?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1011&q=80",
        "https://images.unsplash.com/photo-1447690709975-318628b14c57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1512620053409-d1cb57676f2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=916&q=80",
        "https://images.unsplash.com/photo-1512167227316-b639761c7136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    ];

    //Simple array RANDOM loop
    function getCurrentIndex() {
        let returnValue = Math.floor(Math.random()*imagesArray.length);
        return imagesArray[returnValue];
    }

    /* 
    Working with HTML5 Audio to make a nice player 
    */
    (function() {
        //selecting elements
        let audioElement = document.querySelector("audio");
        let playButton = document.querySelector(".btn-play");
        let iInsidePlayButton = document.querySelector("#iplay");
        let muteButton = document.querySelector(".btn-mute");
        let iInsideMuteButton = document.querySelector("#imute");
        let audioVolume = document.querySelector("#slider");

        audioElement.play();
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


        // avoid ear-damage in case of Phones
        // Default volume 10%
        audioElement.volume = 0.10;

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


    /* Share Widgets */

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