#!/bin/sh
# Renders resume/resume.html to public/Jonel-Chico-Resume.pdf with headless Chrome.
# Override the browser with CHROME=/path/to/chrome if it isn't in the default macOS location.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$PWD/public/Jonel-Chico-Resume.pdf" \
  "file://$PWD/resume/resume.html" 2>/dev/null
echo "Wrote public/Jonel-Chico-Resume.pdf"
