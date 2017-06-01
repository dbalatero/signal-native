const fixExternalLinks = require('./fix_external_links');
const registerShortcuts = require('./shortcuts');

console.log("==> Injecting native extensions");

fixExternalLinks();
registerShortcuts();

console.log("==> Finished injecting native extensions");
