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