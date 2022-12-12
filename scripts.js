$(document).ready(function() {
    $('#myImg1').on('click', function() {
        $('#myModal').css('display', 'block');
        $('#img01').attr('src', 'images/Reviews_homepage_color.png');
        $('#caption').text($('#myImg1').attr('title'));
    });
    $('#myImg2').on('click', function() {
        $('#myModal').css('display', 'block');
        $('#img01').attr('src', 'images/Reviews_reviewpage_color.png');
        $('#caption').text($('#myImg2').attr('title'));
    });
    $('#myImg3').on('click', function() {
        $('#myModal').css('display', 'block');
        $('#img01').attr('src', 'images/thosbaker_homepage_color.png');
        $('#caption').text($('#myImg3').attr('title'));
        $('#modal-link').attr('href', 'https://thosbaker.com');
    });
    $('#myImg4').on('click', function() {
        $('#myModal').css('display', 'block');
        $('#img01').attr('src', 'images/CTG_homepage_color.png');
        $('#caption').text($('#myImg4').attr('title'));
        $('#modal-link').attr('href', 'https://cabinetstogo.com');
    });
    $('#myImg5').on('click', function() {
        $('#myModal').css('display', 'block');
        $('#img01').attr('src', 'images/GraciousHome_homepage_color.png');
        $('#caption').text($('#myImg5').attr('title'));
        $('#modal-link').attr('href', 'https://gracioushome.com');
    });
    $('.close').on('click', function() {
        $('#myModal').css('display', 'none');
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for(i=0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if(content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});