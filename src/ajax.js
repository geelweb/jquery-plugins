(function($) {
    $.fn.extend({

        ajaxUpdate: function(options) {
            var settings = $.extend({
                'event': 'change',
                'callback': function(target, row) { $(target).append(new Option(row['fields']['label'], row['pk'])); }
            }, options);

            return this.each(function() {
                var target = this,
                    triggerSelector = $(this).data("trigger") || settings.trigger,
                    url = $(this).data("url") || settings.url,
                    evt = $(this).data("event") || settings.event,
                    callback = $(this).data("callback") || settings.callback;

                $(triggerSelector).on(evt, function() {
                    if (!$(this).val()) {
                        $(target).clear();
                        return;
                    }

                    $.get(url.replace(':value', $(this).val()), function(data) {
                        $(target).clear();
                        for (loop=0; loop < data.length; ++loop) {
                            callback(target, data[loop]);
                        }
                        $(target).trigger('change');
                    });
                });
            });
        },
    });

}(jQuery));


