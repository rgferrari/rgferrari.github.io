
//change navbar background
$(function() {
    var element = document.getElementById("navbar");
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        element.classList.add("bg-dark");
      } else {
        element.classList.remove("bg-dark");
      }
    });
});

//move skillbars
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});
});

//move loading bars
$(document).ready(function() {
    var b1 = document.querySelector(".ldBar");
    var b = new ldBar(b1);
    console.log(b);
    setInterval(function() {
        b.set(40);
    }, 1000);   
});

//smooth-scroll
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
            }, 600, 'swing', function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
            });
        } // End if
    });
});

//Highlight nav-bar
$(document).ready(function () {
    $(document).on("scroll", onScroll);  
});

function onScroll(event){
    
    var scrollPos = $(document).scrollTop();
    $('#mainNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#mainNav li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
