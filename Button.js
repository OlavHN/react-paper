/** @jsx React.DOM */

var React = require('react/addons');

var Shadow = require('./Shadow');
var Ripple = require('./Ripple');

require('./css')('\
.button {\
  color: black;\
  margin: 0 0.29em;\
  padding: 0.7em 0.57em;\
  min-width: 5.14em;\
  box-sizing: border-box;\
  display: inline-block;\
  position: relative;\
  border: 0;\
  background: transparent;\
  text-align: center;\
  font: inherit;\
  text-transform: uppercase;\
  outline: none;\
  border-radius: 3px;\
  -webkit-user-select: none;\
  user-select: none;\
  cursor: pointer;\
}\
\
.button.hover:hover {\
  opacity: 0.75;\
}\
');

var Button = React.createClass({displayName: 'Button',
  componentDidMount: function() {
    // We don't have a ref for the Ripple at initial render
    this.forceUpdate()
  },

  render: function() {
    var raised = this.props.raised;
    var buttonStyle = {};
    if (this.props.background)
      buttonStyle.backgroundColor = this.props.background;
    if (this.props.color)
      buttonStyle.color = this.props.color;

    var buttonClass = React.addons.classSet({
      button: true,
      hover: this.props.hover
    });

    return this.transferPropsTo(
      React.createElement("div", {ref: "button", className: buttonClass, style: buttonStyle}, 
        React.createElement(Ripple, {elem: this.refs.button}), 
        raised ? React.createElement(Shadow, null) : null, 
        this.props.children
      )
    );
  },
});

module.exports = Button;
