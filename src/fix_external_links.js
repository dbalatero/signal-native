function isExternalUrl(url) {
  return url.match(/^https?/)
}

function fixExternalLinks() {
  var win = nw.Window.get();

  win.on('new-win-policy', function(frame, url, policy) {
    if (isExternalUrl(url)) {
      policy.ignore();
      nw.Shell.openExternal(url);
    } else {
      policy.forceCurrent();
    }
  });

  win.on('navigation', function(frame, url, policy) {
    if (isExternalUrl(url)) {
      policy.ignore();
      nw.Shell.openExternal(url);
    }
  });
}

module.exports = fixExternalLinks;
