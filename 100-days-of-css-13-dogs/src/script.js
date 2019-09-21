var showLink = document.querySelectorAll('.overlay');

for (var i = 0; i < showLink.length; i++) {
    showLink[i].addEventListener('click', function(event) {
					console.log("delete");
			
					// top
					var top = document.getElementById("infoTop");
					top.className += " active";
			
				// bottom
					var bottom = document.getElementById("infoBottom");
					bottom.className += " active";
			
					event.preventDefault();
    });
}

// Close
var close = document.querySelector('.close');

close.addEventListener('click', function(event) {
	 console.log("close");

	 // top
	 var top = document.getElementById("infoTop");
	 top.classList.remove("active");

	 // bottom
	 var bottom = document.getElementById("infoBottom");
	 bottom.classList.remove("active");
	
	 event.preventDefault();
 });