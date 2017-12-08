(function() {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
	"use strict";
	
	
	var carInfo = document.querySelectorAll('.data-ref');
	var thumbInfo = document.querySelector('.thumbInfo');
	var carBlue = document.querySelector('#F55');
	var carYellow = document.querySelector('#F56');
	var carRed = document.querySelector('R58');
	var modelName = document.querySelector('.modelName');
	var priceInfo = document.querySelector('.priceInfo');
	var modelDetails = document.querySelector('.modelDetails');
	var appliedClass;
	
	//link images to descriptions
	function changeCars(){
		//console.log("working cars");
		let objectIndex = carData[this.id];
		
		// the opacity component
		thumbInfo.classList.remove('nonActive');
		thumbInfo.classList.add('nonActive');
		
		//define variables by thier value from index
		modelName.firstChild.nodeValue = objectIndex.model;
		priceInfo.firstChild.nodeValue = objectIndex.price;
		modelDetails.firstChild.nodeValue = objectIndex.text;
		appliedClass = this.id;
		
	}
	
	carInfo.forEach(function(element, index){
		element.addEventListener('click', changeCars, false);
	});
	
	changeCars.call(document.querySelector('#F55'));
	
	

})();