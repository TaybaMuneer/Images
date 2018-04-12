var myPix = new Array("images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg")
var thisPic = 0

function doPrevious() {
if (document.images && thisPic > 0) {
	thisPic--
	document.myPicture.src=myPix[thisPic]
}
}


function doNext() {
if (document.images && thisPic < 5) {
	thisPic++
	document.myPicture.src=myPix[thisPic]
}
}



