var React = require('react/addons'),
    Shadow = require('./Shadow'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;


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
  mixins: [TransferDOMProperties],
  getDefaultProps: function() {
    return {
      open: false
    };
  },
  getDialogClass: function() {
    return cx({
      dialog: true,
      open: this.props.open
    });
  },
  render: function() {

    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames(this.getDialogClass()), 
          style: this.mergeStyle()
      }), 
        React.createElement(Shadow, null), 
        React.createElement("div", {className: "dialog-content"}, 
          this.props.children
        )
      )
    );
  },
});

module.exports = Dialog;
