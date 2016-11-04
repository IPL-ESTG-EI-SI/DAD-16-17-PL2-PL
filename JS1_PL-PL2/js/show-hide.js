'use strict';
(function(){

	var secret = document.getElementById('secret');
	var actionBar = document.getElementById('actionBar');
	var buttons = actionBar.getElementsByClassName('btn');
	var toggleButton = buttons[0];
	var showButton = buttons[1];
	var hideButton = buttons[2];

	function toggleSecret(){
		secret.classList.toggle('invisible');
	}

	function showSecret(){
		secret.classList.remove('invisible');
	}

	function hideSecret(){
		secret.classList.add('invisible');
	}


	toggleButton.addEventListener('click',toggleSecret);
	showButton.addEventListener('mouseenter',showSecret);
	hideButton.addEventListener('mouseenter',hideSecret);



}())


