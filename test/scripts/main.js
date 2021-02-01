let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/test.png'){
		myImage.setAttribute('src', 'images/test2.png');
	} else{
		myImage.setAttribute('src', 'images/test.png');
	}
}