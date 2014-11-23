/** @jsx React.DOM */
var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;


require('./css')('\
.toggle-container {\
  position: relative;\
  width: 64px;\
  height: 16px;\
}\
\
.toggle-bar {\
  position: absolute;\
  top: 8px;\
  left: 16px;\
  height: 1px;\
  width: 32px;\
  background-color: #424A52;\
  pointer-events: none;\
}\
\
.toggle-bar.checked {\
  background-color: #7D8F29;\
}\
\
.toggle-radio {\
  position: absolute;\
  left: 0;\
  padding: 8px 48px 8px 0;\
  margin: -8px 48px -8px 0;\
  transition: transform linear 0.08s;\
}\
\
.toggle-radio.checked {\
  transform: translate(48px, 0);\
  padding: 8px 0 8px 48px;\
  margin: -8px 0 -8px -48px;\
}\
\
.radio-container {\
  position: relative;\
  width: 16px;\
  height: 16px;\
  cursor: pointer;\
}\
\
.off-radio {\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 12px;\
  height: 12px;\
  border-radius: 50%;\
  border: solid 2px;\
  border-color: #424A52;\
}\
\
.on-radio {\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 16px;\
  height: 16px;\
  border-radius: 50%;\
  background-color: #7D8F29;\
  transform: scale(0);\
  transition: transform ease 0.28s;\
}\
\
.on-radio.fill {\
  transform: scale(1.1);\
}\
');

var Switch = React.createClass({
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
      <div 
          {...this.props}
          className={this.mergeClassNames("toggle-container")} 
          style={this.mergeStyle()}
          onClick={this.handleClick}
      >
        <div className={this.getToggleBarStyle()}></div>
        <div className={this.getToggleRadioStyle()}>
          <div className="radio-container">
            <div className="off-radio"></div>
            <div className={this.getRadioStyle()}></div>
          </div>
        </div>
      </div>
    );
  },

  handleClick: function(e) {
    this.props.onClick && this.props.onClick(e);
    this.setState({checked: !this.state.checked});
  }
});

module.exports = Switch;
