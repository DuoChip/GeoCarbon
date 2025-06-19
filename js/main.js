// Load header and footer
$(function () {
    $("#header-placeholder").load("../../components/header.html");
    $("#footer-placeholder").load("../../components/footer.html");
});

// Form submission handler
$("#contactForm").submit(function (e) {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    this.reset();
});




/* ****** TEAM ****** */

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
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('shadow-sm');
    } else {
        $('.navbar').removeClass('shadow-sm');
    }
});