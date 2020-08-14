$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $( ".card" ).hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('shadow-lg');
        }
    );

    $( ".btn" ).hover(
        function() {
            $(this).addClass('btn-primary').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('btn-primary');
        }
    );

// document ready
});