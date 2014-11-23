var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    Shadow = require('./Shadow');
    Ripple = require('./Ripple');
    cx = React.addons.classSet;

var Button = React.createClass({displayName: 'Button',
  mixins: [TransferDOMProperties],
  componentDidMount: function() {
    // We don't have a ref for the Ripple at initial render
    this.forceUpdate()
  },
  getButtonClasses: function() {
    var buttonClass = cx({
      'paper-button': true,
      hover: this.props.hover
    });
    return buttonClass;
  },
  getButtonStyle: function() {
    var buttonStyle = {};
    
    if (this.props.background) {
      buttonStyle.backgroundColor = this.props.background;
    }

    if (this.props.color){
      buttonStyle.color = this.props.color;
    }
    return buttonStyle;
  },
  getShadow: function() {
    return this.props.raised ? React.createElement(Shadow, null) : null;
  },

  render: function() {
    //Ripple should never access a ref. Probably should just get itself then get parent element
    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {ref: "button", 
          className: this.mergeClassNames(this.getButtonClasses()), 
          style: this.mergeStyle(this.getButtonStyle())
      }), 
        React.createElement(Ripple, {elem: this.refs.button}), 
        this.getShadow(), 
        this.props.children
      )
    );
  },
});

module.exports = Button;
