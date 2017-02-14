document.querySelector('body').onclick = function() {
    alert('Welcome to HKS');
}


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','http://www.harvard.edu/sites/default/files/default_images/harvard-social1200.jpg');
    } else {
      myImage.setAttribute ('src','https://www.summer.harvard.edu/sites/summer.harvard.edu/files/field/image/JohnHarvardStatue_3Lies.jpg');
    }
}