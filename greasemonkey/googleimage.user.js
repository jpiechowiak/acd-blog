// ==UserScript==
// @name          Obrazy Google
// @namespace     http://www.altcontroldelete.pl/userscripts/
// @description	  Pozwala na ustawienie wymiarów obrazu za pomocą okienka prompt
// @include       http://google.tld/*
// @include       http://www.google.tld/*
// ==/UserScript==

var oImgSearchButton = document.getElementById('iszex_btn');
if(null != oImgSearchButton){
	var sSize = prompt("Wprowadź szerokość oraz wysokość obrazka rozdzielone " + 
		"średnikiem, bądź wprowadź jedną wartość jeśli obrazek ma być kwadratem."
	);
	if((null != sSize) && ('' != sSize)){
		anSizes = sSize.split(';');
		if(anSizes.length > 1){
			document.getElementById('iszw').value = anSizes[0];
			document.getElementById('iszh').value = anSizes[1];
		} else {
			document.getElementById('iszw').value = anSizes[0];
			document.getElementById('iszh').value = anSizes[0];		
		}
		oImgSearchButton.click();
	}
}