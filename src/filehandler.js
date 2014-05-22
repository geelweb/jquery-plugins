( function($) {
    $.fn.handleImageFile = function(options) {
        var settings = $.extend({
            'image_type': /image.*/,
            'image_width': 120,
            'error': $('#error'),
        }, options);

        return this.each(function() {
            $(this).change(function() {
                var preview = '#' + $(this).data("preview"),
                    files = $(this).prop('files'),
                    file;

                if (!files.length) {
                    return;
                }

                file = files[0];

                if (!file.type.match(settings.image_type)) {
                    return;
                }

                var img = document.createElement('img');
                $(preview).append(img);

                img.width = settings.image_width;

                try {
                    var URL = window.url || window.webkitURL;
                    var imgURL = URL.createObjectURL(file);
                    img.src = imgURL;
                    URL.revokeObjectURL(imgURL);
                } catch (e) {
                    try {
                        var fileReader = new FileReader();
                        fileReader.onload = function(event) {
                            img.src = event.target.result;
                        };
                        fileReader.readAsDataURL(file);
                    } catch (e) {
                        if (settings.error) settings.error.html("Can not create the preview");
                    }
                }

            });
        });
    }
}(jQuery));
