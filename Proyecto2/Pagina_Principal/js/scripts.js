$(function() {
    $('.navbar-brand img').hover(
        function() {
            $(this).css('box-shadow', '0 0 10px 2px rgba(255, 215, 0, 0.6)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );
});
