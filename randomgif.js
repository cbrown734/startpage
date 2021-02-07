window.onload = choosePic;

var myPix = new Array("lofi2.gif","lofi3.gif","lofi5.gif","lofi6.gif","lofi7.gif","lofi8.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
	 document.getElementById("myPicture").src = myPix[randomNum];
}
