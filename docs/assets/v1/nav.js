/*
 * The OnLabs.org sites, in one place.
 *
 * Fills every element with a `data-ol-sites` attribute with links to the
 * three sites; the attribute's value names the current one ("onlabs",
 * "texl" or "stilo"), which gets `aria-current="page"`. Add a site here and
 * every site's navigation shows it.
 *
 *     <span class="tx-links" data-ol-sites="stilo"></span>
 *
 * `window.OnLabsSites` holds the list, for scripts that build their own
 * navigation (e.g. book.js in mdBook).
 */
(function () {
    "use strict";

    var SITES = [
        { id: "onlabs", name: "OnLabs.org", url: "https://www.onlabs.org/" },
        { id: "texl", name: "Texl", url: "https://www.onlabs.org/texl/" },
        { id: "stilo", name: "Stilo", url: "https://www.onlabs.org/stilo/" }
    ];

    window.OnLabsSites = SITES;

    function fill(el) {
        var current = el.getAttribute("data-ol-sites");
        el.innerHTML = SITES.map(function (site) {
            return '<a href="' + site.url + '"' +
                (site.id === current ? ' aria-current="page"' : "") +
                ">" + site.name + "</a>";
        }).join("");
    }

    function run() {
        Array.prototype.forEach.call(document.querySelectorAll("[data-ol-sites]"), fill);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", run);
    } else {
        run();
    }
})();
