
/* Background Images
-------------------------------------------------------------------*/
var  pageTopImage = jQuery('#page-top').data('background-image');
var  aboutImage = jQuery('#about').data('background-image');
var  registerImage = jQuery('#register').data('background-image');
var  contactImage = jQuery('#contact').data('background-image');

// Device Detection
var isMobile = false; //initiate as false
 if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true

if (pageTopImage && !isMobile) {  jQuery('#page-top').css({ 'background-image':'url(' + pageTopImage + ')' }); };
if (aboutImage && !isMobile) {  jQuery('#about').css({ 'background-image':'url(' + aboutImage + ')' }); };
if (registerImage && !isMobile) {  jQuery('#register').css({ 'background-image':'url(' + registerImage + ')' }); };
if (contactImage && !isMobile) {  jQuery('#contact').css({ 'background-image':'url(' + contactImage + ')' }); };

/* Background Images End
-------------------------------------------------------------------*/



/* Document Ready function
-------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	"use strict";


    /* Window Height Resize
    -------------------------------------------------------------------*/
    var windowheight = jQuery(window).height();
    if(windowheight > 650)
    {
         $('.pattern').removeClass('height-resize');
    }
    /* Window Height Resize End
    -------------------------------------------------------------------*/



	/* Main Menu   
	-------------------------------------------------------------------*/
	$('#main-menu #headernavigation').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		scrollOffset: 0,
		filter: '',
		easing: 'swing'
	});  

	/* Main Menu End  
	-------------------------------------------------------------------*/



	/* Time Countdown 
	-------------------------------------------------------------------*/
	$('#time_countdown').countDown({
        
         targetDate: {
             'day': 13,
             'month': 1,
             'year': 2017,
             'hour': 20,
             'min': 0,
             'sec': 0
         },
        // omitWeeks: true

         targetOffset: {
            'day':      0,
            'month':    0,
            'year':     1,
            'hour':     0,
            'min':      0,
            'sec':      3
		},
         omitWeeks: true

	});

    /* Time Countdown End
	-------------------------------------------------------------------*/




    /* Next Section   
	-------------------------------------------------------------------*/
	$('.next-section .go-to-about').click(function () {$('html,body').animate({ scrollTop: $('#about').offset().top }, 1000);});
	$('.next-section .go-to-register').click(function () {$('html,body').animate({ scrollTop: $('#register').offset().top }, 1000);});
	$('.next-section .go-to-contact').click(function () {$('html,body').animate({ scrollTop: $('#contact').offset().top }, 1000);});
	$('.next-section .go-to-page-top').click(function () {$('html,body').animate({ scrollTop: $('#page-top').offset().top }, 1000);});

    /* Next Section End
	-------------------------------------------------------------------*/




    /* Register
    -------------------------------------------------------------------*/
    //insert google forms magic here
    /* Register End
	-------------------------------------------------------------------*/




	/* Contact
	-------------------------------------------------------------------*/
    $('#contact-submit').click(function () {
        $('.first-name-error, .last-name-error, .contact-email-error, .contact-subject-error, .contact-message-error').hide();
        var first_nameVal = $('input[name=first_name]').val();
        var last_nameVal = $('input[name=last_name]').val();
        var emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        var emailVal = $('#contact_email').val();
        var contact_subjectVal = $('input[name=contact_subject]').val();
        var messageVal = $('textarea[name=message]').val();

        //validate

        if (first_nameVal === '' || first_nameVal === 'First Name *') {
            $('.first-name-error').html('<i class="fa fa-exclamation"></i> First name is required.').fadeIn();
            return false;
        }
        if (last_nameVal === '' || last_nameVal === 'Last Name *') {
            $('.last-name-error').html('<i class="fa fa-exclamation"></i> Last name is required.').fadeIn();
            return false;
        }
        if (emailVal === "" || emailVal === "Email Address *") {

            $('.contact-email-error').html('<i class="fa fa-exclamation"></i> Your email address is required.').fadeIn();
            return false;

        } else if (!emailReg.test(emailVal)) {

            $('.contact-email-error').html('<i class="fa fa-exclamation"></i> Invalid email address.').fadeIn();
            return false;
        }
         if (contact_subjectVal === '' || contact_subjectVal === 'Subject *') {
            $('.contact-subject-error').html('<i class="fa fa-exclamation"></i> Subject is required.').fadeIn();
            return false;
        }
        if (messageVal === '' || messageVal === 'Message *') {
            $('.contact-message-error').html('<i class="fa fa-exclamation"></i> Please provide a message.').fadeIn();
            return false;
        }

        var data_string = $('.contact-form').serialize();

        $('#contact-submit').hide();
        $('#contact-loading').fadeIn();
        $('.contact-error-field').fadeOut();

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: data_string,

            //success
            success: function (data) {

                $('.contact-box-hide').slideUp();
                $('.contact-message').html('<i class="fa fa-check contact-success"></i><div>Your message has been sent.</div>').fadeIn();
            },
            error: function (data) {

                $('.btn-contact-container').hide();
                $('.contact-message').html('<i class="fa fa-exclamation contact-error"></i><div>Something went wrong, please try again later.</div>').fadeIn();
            }

        }) //end ajax call
        return false;
    });

	/* Contact End
	-------------------------------------------------------------------*/



});

/* Document Ready function End
-------------------------------------------------------------------*/


/* Preloder 
-------------------------------------------------------------------*/
$(window).load(function () {    
    "use strict";
    $("#loader").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
});
 /* Preloder End
-------------------------------------------------------------------*/
