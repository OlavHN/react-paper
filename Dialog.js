var React = require('react/addons'),
    Shadow = require('./Shadow'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;

var Dialog = React.createClass({displayName: 'Dialog',
  mixins: [TransferDOMProperties],
  getDefaultProps: function() {
    return {
      open: false
    };
  },
  getDialogClass: function() {
    return cx({
      'paper-dialog': true,
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
