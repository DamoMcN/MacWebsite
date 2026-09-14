$(document).ready(function() {
    
    $('.AlbumContainer').hover(
        function() {
            $(this).addClass('is-hovered');
        },
        function() {
            $(this).removeClass('is-hovered');
        }
    );

    $('#tracklistBtn').click(function() {
        $(this).toggleClass('active');
        $('#ShowTracklist').slideToggle(400);
    });

    $('#hamburgerBtn').on('click', function() {
        $('#navMenu').toggleClass('active');
    });
});