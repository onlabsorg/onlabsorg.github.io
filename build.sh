#!/usr/bin/env bash
#
# Builds www.onlabs.org into target/site:
#
#   target/site/index.html   the landing page (site/)
#   target/site/assets/      styles, scripts and icon (assets/)
#   target/site/manual/      the manual (mdBook, manual/)
#   target/site/texl/, stilo/  redirects from the former docs sites
#
# .github/workflows/pages.yml runs it and publishes target/site on GitHub
# Pages. Requires mdBook 0.4 (https://rust-lang.github.io/mdBook/); set
# MDBOOK to the path of the mdbook binary if it is not on the PATH.
#
# To preview the site:  python3 -m http.server -d target/site

set -euo pipefail

cd "$(dirname "$0")"
site=target/site
mdbook=${MDBOOK:-mdbook}

rm -rf "$site"
mkdir -p "$site"

# Landing page and assets
cp site/index.html CNAME .nojekyll "$site/"
cp -r assets "$site/assets"

# Manual
"$mdbook" build manual
cp -r target/manual "$site/manual"

# The Texl and Stilo docs used to be published at /texl/ and /stilo/.
redirect() {
    mkdir -p "$site/$1"
    cat > "$site/$1/index.html" <<HTML
<!doctype html>
<meta charset="utf-8">
<title>Moved to the OnLabs.org manual</title>
<meta http-equiv="refresh" content="0; url=/manual/$2">
<link rel="canonical" href="/manual/$2">
<p>This page has moved to the <a href="/manual/$2">OnLabs.org manual</a>.</p>
HTML
}
redirect texl templates/index.html
redirect stilo index.html

echo "Site built in $site"
