(function($) {
    $.fn.extend({
        clear: function(options) {
            var settings = $.extend({
                'label': '--------',
                'value': '',
            }, options);

            return this.each(function() {
                $(this).children('option').remove()
                $(this).append(new Option(settings.label, settings.value));
            });
        },
    });
}(jQuery));


