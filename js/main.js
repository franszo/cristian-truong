;(function($) {

	var main = {
		w: $(window),
		d: $(document),
		init: function(){
			
			this.global.init();
			this.header.init();
			this.wayPoints.init();
			this.loaded();

            if ($('#home').length > 0) {
                main.fancybox.init();    
            }			

			$('#map').on('click', function(event) {
				event.preventDefault();
				$('#map iframe').css( 'pointer-events', 'auto' );
			});
		},


		loaded: function(){  
			
		},

		global: {
			init: function(){

                var slideout = new Slideout({
                    'panel': document.getElementById('tortilla'),
                    'menu': document.getElementById('navbar-main'),
                    'padding': 256,
                    'tolerance': 70,
                    'side': 'right'
                });

				slideout.on('open', function() {
				  $('#hamburger-icon').addClass('active');
				  console.log('open');
				});  

				slideout.on('close', function() {
				  $('#hamburger-icon').removeClass('active');
				  console.log('close');
				}); 				              

                // Toggle button
                document.querySelector('#hamburger-icon').addEventListener('click', function() {
                    slideout.toggle();
                });				
			}
		},

		body:{
			element: $('body')
		},

		header: {
			element: $('#header'),
			init: function(){

               var hamburger = $('#hamburger-icon');
                hamburger.click(function() {
                    hamburger.toggleClass('active');
                    return false;
                });

			}
		},

        wayPoints: {
            init: function() {
                main.wayPoints.onScrollInit($('.os-animation'));
                main.wayPoints.onScrollInit($('.staggered-animation'), $('.staggered-animation-container'));
            },

            onScrollInit: function(items, trigger) {
                items.each(function() {
                    var osElement = $(this),
                        osAnimationClass = osElement.attr('data-os-animation'),
                        osAnimationDelay = osElement.attr('data-os-animation-delay');

                    osElement.css({
                        '-webkit-animation-delay': osAnimationDelay,
                        '-moz-animation-delay': osAnimationDelay,
                        'animation-delay': osAnimationDelay
                    });
                    var osTrigger = (trigger) ? trigger : osElement;

                    // osTrigger.waypoint(function() {
                    //     osElement.addClass('animated').addClass(osAnimationClass);
                    // }, {
                    //     triggerOnce: true,
                    //     offset: '90%'
                    // });

                    osTrigger.on('inview', function(event, isInView) {
                      if (isInView) {
                        osElement.addClass('animated').addClass(osAnimationClass);
                      } else {
                        osElement.removeClass('animated').removeClass(osAnimationClass);
                      }
                    });
                });
            }
        },		

		fancybox: {
			init: function() {
                if ($( window ).width() > 840) {
                	console.log('test');
                    $(".fancybox").fancybox({
                        fitToView : false,
                        width     : '90%',
                        height    : '95%',
                        autoSize  : false,
		                openMethod: 'verticalflipIn',
		                closeMethod: 'verticalflipOut',                        
		                padding   : 0,
		                height   : "80%",
		                helpers: {
		                    overlay: {
		                      locked: false
		                    }
		                },
		                beforeShow: function(){
		                    $("body").css({'overflow-y':'hidden'});
		                },
		                afterClose: function(){
		                    $("body").css({'overflow-y':'visible'});
		                }              
                    }); 
                } else {
                    $(".fancybox").fancybox({
		                fitToView : true,
		                openMethod: 'verticalflipIn',
		                closeMethod: 'verticalflipOut',                        
		                padding   : 0,
		                helpers: {
		                    overlay: {
		                      locked: false
		                    }
		                },
		                beforeShow: function(){
		                    $("body").css({'overflow-y':'hidden'});
		                },
		                afterClose: function(){
		                    $("body").css({'overflow-y':'visible'});
		                }             
                    }); 
                }  				                
			}
		}
	};

	

	window.main = main;

	$(function(){
		window.main.init();
	});


	$(window).resize(function(){
	  	//main.equaliser.init();
	});	

})(jQuery);

