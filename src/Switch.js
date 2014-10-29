/** @jsx React.DOM */
var React = require('react/addons');

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
  getInitialState: function() {
    return {
      checked: false
    };
  },

  render: function() {
    var checked = this.state.checked;

    var cx = React.addons.classSet;
    var toggleBar = cx({
      'toggle-bar': true,
      checked: checked
    });

    var toggleRadio = cx({
      'toggle-radio': true,
      checked: checked
    });

    var onRadio = cx({
      'on-radio': true,
      fill: checked
    });

    return (
      <div className="toggle-container" onClick={this.handleClick}>
        <div className={toggleBar}></div>
        <div className={toggleRadio}>
          <div className="radio-container">
            <div className="off-radio"></div>
            <div className={onRadio}></div>
          </div>
        </div>
      </div>
    );
  },

  handleClick: function() {
    this.setState({checked: !this.state.checked});
  }
});

module.exports = Switch;
