/** @jsx React.DOM */

var React = require('react');

require('./css')('\
.shadow {\
  position: absolute;\
  top: 0;\
  bottom: 0;\
  left: 0;\
  right: 0;\
  border-radius: inherit;\
  pointer-events: none;\
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16)\
}\
\
.shadow-bottom {\
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\
}\
');

/*
 * Polymer paper-shadow can inject two elements from one components. We wrap em in one div.
 * TODO: Shadow z-levels
 */
var Shadow = React.createClass({displayName: 'Shadow',
  render: function() {
    return (
      React.DOM.div( {className:"shadow"}, 
        React.DOM.div( {className:"shadow shadow-bottom"})
      )
    );
  },
});

module.exports = Shadow;
