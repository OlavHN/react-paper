/** @jsx React.DOM */

var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties');

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

var Button = React.createClass({
  mixins: [TransferDOMProperties],
  componentDidMount: function() {
    // We don't have a ref for the Ripple at initial render
    this.forceUpdate()
  },
  getButtonClasses: function() {
    var buttonClass = React.addons.classSet({
      button: true,
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
  }

  render: function() {
    //Ripple should never access a ref. Probably should just get itself then get parent element
    return (
      <div 
          {...this.props}
          ref="button" 
          className={this.mergeClassNames(this.getButtonClasses())} 
          style={this.mergeStyle(this.getButtonStyle())}
      >
        <Ripple elem={this.refs.button} />
        {this.props.raised ? <Shadow /> : null}
        {this.props.children}
      </div>
    );
  },
});

module.exports = Button;
