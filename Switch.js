var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;

var Switch = React.createClass({displayName: 'Switch',
  mixins: [TransferDOMProperties],
  getInitialState: function() {
    return {
      checked: false
    };
  },

  getToggleBarStyle: function() {
    return cx({
      'toggle-bar': true,
      checked: this.state.checked
    });
  },
  getToggleRadioStyle: function() {
    return cx({
      'toggle-radio': true,
      checked: this.state.checked
    });
  },
  getRadioStyle: function() {
    return cx({
      'on-radio': true,
      fill: this.state.checked
    });
  },
  render: function() {
    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("papertoggle-container"), 
          style: this.mergeStyle(), 
          onClick: this.handleClick
      }), 
        React.createElement("div", {className: this.getToggleBarStyle()}), 
        React.createElement("div", {className: this.getToggleRadioStyle()}, 
          React.createElement("div", {className: "radio-container"}, 
            React.createElement("div", {className: "off-radio"}), 
            React.createElement("div", {className: this.getRadioStyle()})
          )
        )
      )
    );
  },

  handleClick: function(e) {
    this.props.onClick && this.props.onClick(e);
    this.setState({checked: !this.state.checked});
  }
});

module.exports = Switch;
