jQuery(document).ready(function(){
	menu();
	mobileMenu();
	blog();
	courseContentCollapsibleItems();

	function menu(){
		var elem = jQuery(".navbar-list-theme2");
		if (!elem.length) {
			return false;
		}
	
		if (jQuery(window).width() > 767) {
			jQuery('.navbar-list-theme2 li.has-children').hover(function () {
				clearTimeout(jq.data(this,'timer'));
				jQuery('> ul',this).stop(true,true).slideDown(200);
			 }, function () {
				jq.data(this,'timer', setTimeout(jq.proxy(function() {
					jQuery('> ul',this).stop(true,true).slideUp(200);
			   }, this), 100));
			});
		}	
	}
	
	function mobileMenu(){
		var elem = jQuery(".nav-mobile-trigger");
		if (!elem.length) {
			return false;
		}
	
		var menu = jQuery(".navbar-list-theme2-outer");
	
		elem.click(function(e){
			e.preventDefault();
	
			if (jQuery(this).hasClass('is-active')) {
				// Close
				menu.stop(true).slideUp(250);
				jQuery(this).removeClass("is-active");
			} else {
				// Open
				menu.stop(true).slideDown(250);
				jQuery(this).addClass("is-active");
			}
		});
	
		if (jQuery(".navbar-link-submenu-trigger").length) {
			jQuery(document).on("click", ".navbar-link-submenu-trigger", function(e){
				e.preventDefault();
				
				var menu = jQuery(this).parent().parent().find("> ul");
				if (jQuery(this).hasClass("active")) {
					// Open
					menu.stop(true).slideUp(250);
					jQuery(this).removeClass("active");
				} else {
					// Hide
					menu.stop(true).slideDown(250);
					jQuery(this).addClass("active");
				}
			});	
		}
	}
	
	function blog() {
		var elem = jQuery(".js-blog-slider");
		if (!elem.length) {
			return false;
		}
	
		elem.slick({
			arrows: false,
			dots: false,
			variableWidth: true,
			autoplay: true,
			autoplaySpeed: 2000
		});
	}
	
	function courseContentCollapsibleItems() {
		var elem = jQuery(".js-course-content-trigger");
		if (!elem.length) {
			return false;
		}
	
		 elem.click(function(e){
			e.preventDefault();
			var panel = jQuery(this).next();
	
			if (jQuery(this).hasClass("active")) {
				// collapse
				panel.stop(true).slideUp();
				jQuery(this).removeClass("active");
			} else {
				// expand
				panel.stop(true).slideDown();
				jQuery(this).addClass("active");
			}
		});
	}
});

