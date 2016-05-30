import run from 'ember-runloop';

export function clickTrigger(scope, options = {}) {
  let selector = '.ember-basic-dropdown-trigger';
  if (scope) {
    selector = scope + ' ' + selector;
  }
  let event = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
  Object.keys(options).forEach(key => event[key] = options[key]);
  run(() => document.querySelector(selector).dispatchEvent(event));
}

export function tapTrigger(scope, options = {}) {
  let selector = '.ember-basic-dropdown-trigger';
  if (scope) {
    selector = scope + ' ' + selector;
  }
  let touchStartEvent = new window.Event('touchstart', { bubbles: true, cancelable: true, view: window });
  Object.keys(options).forEach(key => touchStartEvent[key] = options[key]);
  run(() => document.querySelector(selector).dispatchEvent(touchStartEvent));
  let touchEndEvent = new window.Event('touchend', { bubbles: true, cancelable: true, view: window });
  Object.keys(options).forEach(key => touchEndEvent[key] = options[key]);
  run(() => document.querySelector(selector).dispatchEvent(touchEndEvent));
}

export function fireKeydown(selector, k) {
  let oEvent = document.createEvent('Events');
  oEvent.initEvent('keydown', true, true);
  $.extend(oEvent, {
    view: window,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    keyCode: k,
    charCode: k
  });
  run(() => document.querySelector(selector).dispatchEvent(oEvent));
}