// // Load header and footer
// $(function () {
//     $("#header-placeholder").load("../../components/header.html");
//     $("#footer-placeholder").load("../../components/footer.html");
// });

// // Form submission handler
// $("#contactForm").submit(function (e) {
//     e.preventDefault();
//     alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
//     this.reset();
// });




// /* ****** TEAM ****** */

//  // Smooth scrolling
// $('a[href^="#"]').on('click', function(e) {
//     e.preventDefault();
//     const target = $(this.getAttribute('href'));
//     if (target.length) {
//         $('html, body').animate({
//             scrollTop: target.offset().top - 80
//         }, 800);
//     }
// });
        
// // Add shadow to navbar on scroll
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 50) {
//         $('.navbar').addClass('shadow-sm');
//     } else {
//         $('.navbar').removeClass('shadow-sm');
//     }
// });








// $(document).ready(function() {
//    $('.timeline-item').each(function(i) {
//         setTimeout(function() {
//             $('.timeline-item').eq(i).addClass('animate__animated animate__fadeInUp');
//         }, 300 * i);
//     });
// });    



// // $(window).scroll(function() {
// //     $('.card-custom, .stat-card').each(function() {
// //         var position = $(this).offset().top;
// //         var scrollPosition = $(window).scrollTop() + $(window).height() * 0.8;

// //         if (position < scrollPosition) {
// //             $(this).addClass('animate__animated animate__fadeInUp');
// //         }
// //     });
// // });



//         // Animation for scroll
//         $(document).ready(function() {
//             // Function to check if element is in viewport
//             function isElementInViewport(el) {
//                 var rect = el.getBoundingClientRect();
//                 return (
//                     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//                     rect.bottom >= 0
//                 );
//             }
            
//             // Function to handle scroll animation
//             function handleScrollAnimation() {
//                 $('.animate-on-scroll').each(function() {
//                     if (isElementInViewport(this) && !$(this).hasClass('animated')) {
//                         $(this).addClass('animated');
//                     }
//                 });
//             }
            
//             // Initial check
//             handleScrollAnimation();
            
//             // Listen for scroll events
//             $(window).on('scroll', function() {
//                 handleScrollAnimation();
//             });
//         });



//             // Thêm hiệu ứng khi cuộn trang
//     $(document).ready(function() {
//       // Hiệu ứng cho các card
//       $('.intro-card').each(function(i) {
//         $(this).css({
//           'opacity': '0',
//           'transform': 'translateY(30px)'
//         });
        
//         setTimeout(() => {
//           $(this).animate({
//             opacity: 1,
//             transform: 'translateY(0)'
//           }, 600);
//         }, 300 * i);
//       });
      
//       // Xử lý sự kiện khi nhấn nút
//       $('.btn-primary').click(function(e) {
//         e.preventDefault();
//         $(this).addClass('clicked');
//         setTimeout(() => {
//           alert('Bạn sẽ được chuyển hướng sang trang mới');
//           // Ở đây bạn có thể thêm window.location.href = "link-của-bạn";
//         }, 500);
//       });
//     });

// ============== MAIN FUNCTIONS ==============
$(document).ready(function() {
    // Load common components
    loadCommonComponents();
    
    // Setup form handling
    setupFormHandling();
    
    // Setup navigation
    setupNavigation();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup card animations
    setupCardAnimations();
});

// ============== COMPONENT LOADING ==============
function loadCommonComponents() {
    $("#header-placeholder").load("../../components/header.html", function() {
        // Navigation setup needs to be called after header is loaded
        setupNavigation();
    });
    $("#footer-placeholder").load("../../components/footer.html");
}

// ============== FORM HANDLING ==============
function setupFormHandling() {
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
        this.reset();
    });
}

// ============== NAVIGATION ==============
function setupNavigation() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Add shadow to navbar on scroll
    $(window).scroll(function() {
        $('.navbar').toggleClass('shadow-sm', $(this).scrollTop() > 50);
    });
}

// ============== ANIMATIONS ==============
function setupScrollAnimations() {
    // Timeline animation
    $('.timeline-item').each(function(i) {
        setTimeout(() => {
            $(this).addClass('animate__animated animate__fadeInUp');
        }, 300 * i);
    });
    
    // Scroll animation for elements
    $(window).on('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
}

function handleScrollAnimation() {
    $('.animate-on-scroll').each(function() {
        const rect = this.getBoundingClientRect();
        const inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        
        if (inViewport && !$(this).hasClass('animated')) {
            $(this).addClass('animated');
        }
    });
}

// ============== CARD ANIMATIONS ==============
function setupCardAnimations() {
    // Intro card animations
    $('.intro-card').each(function(i) {
        $(this).css({ opacity: 0, transform: 'translateY(30px)' });
        
        setTimeout(() => {
            $(this).animate({ opacity: 1, transform: 'translateY(0)' }, 600);
        }, 300 * i);
    });
    
    // Button click handling
    $('.btn-primary').click(function(e) {
        e.preventDefault();
        const $btn = $(this);
        
        $btn.addClass('clicked');
        setTimeout(() => {
            alert('Bạn sẽ được chuyển hướng sang trang mới');
            // Uncomment to enable actual redirection
            // window.location.href = $btn.attr('href');
        }, 500);
    });
    
    // Card hover animations
    $('.card-custom, .stat-card').hover(
        function() { $(this).addClass('animate__animated animate__pulse'); },
        function() { $(this).removeClass('animate__animated animate__pulse'); }
    );
}