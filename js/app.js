window.onload = (e) =>{
    console.log('loaded');

//twitter share
var getWindowOptions = function () {
    return [
        'resizable,scrollbars,status',
        'height=350',
        'width=500',
        'left=400' ,
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
twitterShare.href = shareUrl;     // 1

//event listener on press
twitterShare.addEventListener('click', function (e) {
    e.preventDefault();

    //custom variable for window.open also, merging our options from above
    let win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
    win.opener = null;  // 2
});

};