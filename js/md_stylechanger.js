//Fast Font Javascript//
/**
* Fast Font Javascript
* @package Joomla 1.5
* @copyright Copyright (C) 2010 Pixel Point Creative LLC. All rights reserved.
* @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
* This program is free software; you can redistribute it and/or
* modify it under the terms of the GNU General Public License
* as published by the Free Software Foundation; either version 2
* of the License, or (at your option) any later version.
* 
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*/

var prefsLoaded = false;
var defaultFontSize = 100;
var currentFontSize = defaultFontSize;

function reverterStyles(){

	currentFontSize = defaultFontSize;
	mudarTamFonte(0);

}



function mudarTamFonte(sizeDifference){
	currentFontSize = parseInt(currentFontSize) + parseInt(sizeDifference * 10);

	if(currentFontSize > 150){
		currentFontSize = 150;
	}else if(currentFontSize < 70){
		currentFontSize = 70;
	}

	definirTamFonte(currentFontSize);
};

function definirTamFonte(fontSize){
	var stObj = (document.getElementById) ? document.getElementById('content_area') : document.all('content_area');
	document.body.style.fontSize = fontSize + '%';

	//alert (document.body.style.fontSize);
};


function criarCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
};

function lerCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};

window.onload = definirUserOptions;

function definirUserOptions(){
	if(!prefsLoaded){

		cookie = lerCookie("fontSize");
		currentFontSize = cookie ? cookie : defaultFontSize;
		definirTamFonte(currentFontSize);

		prefsLoaded = true;
	}

}

window.onunload = salvarSettings;

function salvarSettings()
{
  criarCookie("fontSize", currentFontSize, 365);
}