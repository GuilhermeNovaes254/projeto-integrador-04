AOS.init();

function initModal(){
  var btEntrar = document.querySelector('.js-modal-login');

  if(btEntrar){
    btEntrar.addEventListener('click', openModal);
  }
}

function openModal(){
  var modalElement = document.querySelector('.o-modal-container');
  var btClose = document.querySelector('.js-modal-close');

  if(modalElement){
    modalElement.classList.add('js-active-modal');

    btClose.addEventListener('click', function(){
      modalElement.classList.remove('js-active-modal');
    });
  }
}

window.onload = initModal;


/* cadastro ejs */
(function(){
	var d = document,
	accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
	setAria,
	setAccordionAria,
	switchAccordion,
  touchSupported = ('ontouchstart' in window),
  pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

		setAriaAttr = function(el, ariaType, newProperty){
		el.setAttribute(ariaType, newProperty);
	};
	setAccordionAria = function(el1, el2, expanded){
		switch(expanded) {
      case "true":
      	setAriaAttr(el1, 'aria-expanded', 'true');
      	setAriaAttr(el2, 'aria-hidden', 'false');
      	break;
      case "false":
      	setAriaAttr(el1, 'aria-expanded', 'false');
      	setAriaAttr(el2, 'aria-hidden', 'true');
      	break;
      default:
				break;
		}
	};


//function
switchAccordion = function(e) {
  console.log("triggered");
	e.preventDefault();
	var thisAnswer = e.target.parentNode.nextElementSibling;
	var thisQuestion = e.target;
	if(thisAnswer.classList.contains('is-collapsed')) {
		setAccordionAria(thisQuestion, thisAnswer, 'true');
	} else {
		setAccordionAria(thisQuestion, thisAnswer, 'false');
	}
  	thisQuestion.classList.toggle('is-collapsed');
  	thisQuestion.classList.toggle('is-expanded');
		thisAnswer.classList.toggle('is-collapsed');
		thisAnswer.classList.toggle('is-expanded');
 	
  	thisAnswer.classList.toggle('animateIn');
	};
	for (var i=0,len=accordionToggles.length; i<len; i++) {
		if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

window.addEventListener('load', function(){
	
// Variables
var clickedTab = $(".tabs > .active");
var tabWrapper = $(".tab__content");
var activeTab = tabWrapper.find(".active");
var activeTabHeight = activeTab.outerHeight();

// Show tab on page load
activeTab.show();

// Set height of wrapper on page load
tabWrapper.height(activeTabHeight);

$(".tabs > li").on("click", function() {
	
	// Remove class from active tab
	$(".tabs > li").removeClass("active");
	
	// Add class active to clicked tab
	$(this).addClass("active");
	
	// Update clickedTab variable
	clickedTab = $(".tabs .active");
	
	// fade out active tab
	activeTab.fadeOut(250, function() {
		
		// Remove active class all tabs
		$(".tab__content > li").removeClass("active");
		
		// Get index of clicked tab
		var clickedTabIndex = clickedTab.index();

		// Add class active to corresponding tab
		$(".tab__content > li").eq(clickedTabIndex).addClass("active");
		
		// update new active tab
		activeTab = $(".tab__content > .active");
		
		// Update variable
		activeTabHeight = activeTab.outerHeight();
		
		// Animate height of wrapper to new tab height
		tabWrapper.stop().delay(50).animate({
			height: activeTabHeight
		}, 500, function() {
			
			// Fade in active tab
			activeTab.delay(50).fadeIn(250);
			
		});
	});
});

// Variables
var colorButton = $(".colors li");

colorButton.on("click", function(){
	
	// Remove class from currently active button
	$(".colors > li").removeClass("active-color");
	
	// Add class active to clicked button
	$(this).addClass("active-color");
	
	// Get background color of clicked
	var newColor = $(this).attr("data-color");
	
	// Change background of everything with class .bg-color
	$(".bg-color").css("background-color", newColor);
	
	// Change color of everything with class .text-color
	$(".text-color").css("color", newColor);
});

	
});

