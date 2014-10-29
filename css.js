'use strict';

module.exports = function(css) {
  var style = document.createElement('style');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  if(style.styleSheet)
    style.styleSheet.cssText = css
  else
    style.appendChild(document.createTextNode(css))

  document.head.appendChild(style);
}
