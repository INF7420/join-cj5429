var picPaths = ['images/01.jpg','images/02.jpg','images/03.jpg','images/04.jpg','images/05.jpg'];
    var curPic = -1;
    //preload the images for smooth animation
    var imgO = new Array();
    for(i=0; i < picPaths.length; i++) {
        imgO[i] = new Image();
        imgO[i].src = picPaths[i];
    }

    function swapImage() {
        curPic = (++curPic > picPaths.length-1)? 0 : curPic;
        imgCont.src = imgO[curPic].src;
        setTimeout(swapImage,2000);
    }

    window.onload=function() {
        imgCont = document.getElementById('imgBanner');
        swapImage();
    }