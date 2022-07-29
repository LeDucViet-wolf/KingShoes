(function ($) {
    "use strict";

    // Change Tab
    $("a[datatoggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
})(jQuery);