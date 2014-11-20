/** @jsx React.DOM */

var React = require('react/addons');
var Shadow = require('./Shadow');

require('./css')('\
.dialog {\
  z-index: 100;\
  background: white;\
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\
  position: absolute;\
  top: 0;\
  margin: 10px;\
  padding: 10px;\
  opacity: 0;\
  -webkit-transform: scale(0.9) translateY(200%);\
  transform: scale(0.9) translateY(200%);\
}\
\
.dialog.open {\
  opacity: 1;\
  -webkit-transform: none;\
  transform: none;\
}\
\
.dialog-content {\
  display: -webkit-flex;\
  display: flex;\
  -webkit-flex-direction: column;\
  flex-direction: column;\
  -webkit-align-items: center;\
  align-items: center;\
}\
');

var Dialog = React.createClass({displayName: 'Dialog',
  render: function() {
    var open = this.props.open || false;

    var dialogClass = React.addons.classSet({
      dialog: true,
      open: open
    });

    return (
      React.createElement("div", {className: dialogClass}, 
        React.createElement(Shadow, null), 
        React.createElement("div", {className: "dialog-content"}, 
          this.props.children
        )
      )
    );
  },
});

module.exports = Dialog;
