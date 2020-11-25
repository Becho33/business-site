(function ($) {
    $('.playButton').each(function () {
        var playButton = this;

        $(playButton).click(function () {
            var buttonState = $(playButton).children('span');

            if ($(buttonState).hasClass('glyphicon-play')) {
                $(playButton).parent('.carousel').carousel('pause');
            } else {
                $(playButton).parent('.carousel').carousel('cycle');
            }

            $(buttonState).toggleClass('glyphicon-pause');
            $(buttonState).toggleClass('glyphicon-play');
        });
    });
}(jQuery));