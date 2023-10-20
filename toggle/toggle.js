let puppyPic = document.getElementById('puppyImage');
//console.log(puppyPic);
let puppyLikeicon = document.getElementById('likeIcon');
//console.log(puppyLikeicon);
let puppyLikebutton = document.getElementById('likeButton');
//
console.log(puppyLikebutton);
let puppypicAfterclick = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
let imageLikes = false;

function onClickLikeButton() {
    if (imageLikes === false) {
        puppyPic.src = puppypicAfterclick;
        puppyLikeicon.style.color = "#0967d2";
        puppyLikebutton.style.backgroundColor = "#0967d2";
        puppyLikebutton.style.color = "#ffffff";
        imageLikes = true;
    }
    else {
        puppyPic.src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        puppyLikeicon.style.color = "#cbd2d9";
        puppyLikebutton.style.backgroundColor ="#cbd2d9";
        puppyLikebutton.style.color = "#9aa5b1";
        imageLikes = false;
    }
}

