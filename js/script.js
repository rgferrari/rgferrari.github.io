$(document).ready(function(){

    //change navbar background
    $(function(){
        var element = document.getElementById("navbar");
        var image = document.getElementById("icon");
        $(window).on("scroll", function() {
          if($(window).scrollTop() > 50) {
            image.src = "img/letter-r-key-on-keyboard-white.svg";
            element.classList.remove("navbar-light");
            element.classList.add("bg-dark",  "navbar-dark");
          } else {
            image.src = "img/letter-r-key-on-keyboard-black.svg";
            element.classList.remove("bg-dark", "navbar-dark");
            element.classList.add("navbar-light");
          }
        });
    });

    //move skillbars
    $('.skillbar').each(function(){
        $(this).prop('visible', false);
    });   

    $(window).scroll(function(){
        $('.skillbar').each(function(){
            if(isScrolledIntoView($(this)) && !($(this).prop('visible'))){
                $(this).find('.skillbar-bar, .skillbar-bar .negative').animate({
                    width:$(this).attr('data-percent')
                },3000);
                $(this).prop("visible", true);
            }
        });
    });

    function isScrolledIntoView(elem){
        var $elem = $(elem);
        var $window = $(window);
    
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
    
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); 
    }
/*
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
            scrollTop: $(hash).offset().top - 56
            }, 600, 'swing', function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
            });
        } // End if
    });

    //FIXME fix highlight navbar
    //Highlight nav-bar
    $(document).on("scroll", function(event){  
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
    });  
*/  

    var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight()+1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
            if (item.length) { return item; }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    (menuItems).click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 850);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(){
    // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=#"+id+"]").parent().addClass("active");
        }                   
    });
});
