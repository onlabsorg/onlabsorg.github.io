/*
 * Adds the site navigation to mdBook's menu bar: the OnLabs.org wordmark,
 * linking to the landing page, and links to the parts of the manual.
 * mdBook's own GitHub button stays at the far right.
 * `path_to_root` is defined by mdBook on every page.
 */
(function () {
    "use strict";

    /* global path_to_root */
    var book = typeof path_to_root === "string" ? path_to_root : "";
    var site = book + "../";

    var title = document.querySelector("#menu-bar .menu-title");
    if (title) {
        title.innerHTML =
            '<a class="tx-wordmark" href="' + site + 'index.html" title="OnLabs.org home">' +
            'onlabs<span class="tx-delim">.org</span></a>';
    }

    var right = document.querySelector("#menu-bar .right-buttons");
    if (right) {
        var links = document.createElement("nav");
        links.className = "tx-book-links";
        links.setAttribute("aria-label", "Site");
        links.innerHTML =
            '<a href="' + book + 'editor/index.html">Stilo</a>' +
            '<a class="tx-optional" href="' + book + 'templates/index.html">Texl</a>' +
            '<a class="tx-optional" href="' + book + 'swan/index.html">Swan</a>' +
            '<a class="tx-optional" href="' + book + 'swan/builtins/index.html">Reference</a>';
        right.insertBefore(links, right.firstChild);
    }
})();
