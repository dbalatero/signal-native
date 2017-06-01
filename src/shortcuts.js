const Mousetrap = require('mousetrap');

const defaultStopCallback = Mousetrap.prototype.stopCallback;

Mousetrap.prototype.stopCallback = function(event, element, combo) {
  if (combo.indexOf("meta") >= 0) {
    // Allow meta key combos to run even when focused in a text field
    return false;
  }

  return defaultStopCallback(...arguments);
};

function find(selector) {
  return document.querySelector(selector);
}

function focusSearchField() {
  find(".tool-bar input.search").focus();
  return false;
}

function firstConversation() {
  return find(".conversation-list-item:first-of-type");
}

function lastConversation() {
  return find(".conversation-list-item:last-of-type");
}

function currentConversation() {
  return find(".conversation-list-item.selected");
}

function previousConversation() {
  const current = currentConversation();

  if (!current) {
    firstConversation().click();
    return false;
  }

  const startOfList = current === firstConversation();

  if (startOfList) { return false; }

  current.previousSibling.click();

  return false;
}

function nextConversation() {
  const current = currentConversation();

  if (!current) {
    firstConversation().click();
    return false;
  }

  const endOfList = current === lastConversation();

  if (endOfList) { return false; }

  current.nextSibling.click();

  return false;
}

function registerShortcuts() {
  Mousetrap.bind("/", focusSearchField);
  Mousetrap.bind("meta+/", focusSearchField);
  Mousetrap.bind("meta+f", focusSearchField);
  Mousetrap.bind("meta+shift+[", previousConversation);
  Mousetrap.bind("meta+shift+]", nextConversation);
}

module.exports = registerShortcuts;
