/** @jsx React.DOM */
var React = require('react/addons');
var Progress = require('./Progress');

require('./css')('\
.slider-container {\
  position: relative;\
  height: 32px;\
  width: 100%;\
}\
\
.bar-container {\
  position: absolute;\
  top: 0;\
  left: 16px;\
  height: 100%;\
  width: 100%;\
  overflow: hidden;\
  -webkit-user-select: none;\
  user-select: none;\
 }\
.bar-container > .progress {\
  position: absolute;\
  top: 15px;\
  left: 0;\
  height: 2px;\
  width: 100%;\
  padding: 8px 0;\
  margin: -8px 0;\
}\
.slider-knob {\
  display: -webkit-flex;\
  display: flex;\
  -webkit-align-items: center;\
  align-items: center;\
  -webkit-flex-direction: row;\
  flex-direction: row;\
  -webkit-justify-content: center;\
  justify-content: center;\
  -ms-touch-action: pan-y;\
  touch-action: pan-y;\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 32px;\
  height: 32px;\
}\
\
.transiting > .slider-knob {\
  transition: left 0.08s ease;\
}\
\
.slider-knob-inner {\
  moz-box-sizing: border-box;\
  border-radius: 50%;\
  background-color: #3f51b5;\
  box-sizing: border-box;\
  width: 12px;\
  height: 12px;\
  transition: height 0.18s ease, width 0.18s ease;\
}\
.slider-knob-inner:before {\
  content: "";\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 26px;\
  height: 26px;\
  margin-left: 3px;\
  border-radius: 50% 50% 50% 0;\
  -webkit-transform: rotate(-45deg) scale(0) translate(0);\
  transform: rotate(-45deg) scale(0) translate(0);\
  background-color: #3f51b5;\
}\
\
.slider-knob-inner:before, .slider-knob-inner:after {\
  transition: -webkit-transform .2s ease, background-color .18s ease;\
  transition: transform .2s ease, background-color .18s ease;\
}\
\
.slider-knob-inner:after {\
  content: attr(data-value);\
  position: absolute;\
  top: 0;\
  left: 0;\
  width: 32px;\
  height: 26px;\
  text-align: center;\
  color: #fff;\
  font-size: 10px;\
  -webkit-transform: scale(0) translate(0);\
  transform: scale(0) translate(0);\
}\
\
.slider-container.expand > .slider-knob > .slider-knob-inner:before {\
  -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\
  transform: rotate(-45deg) scale(1) translate(17px, -17px);\
}\
\
.slider-container.expand > .slider-knob > .slider-knob-inner:after {\
  -webkit-transform: scale(1) translate(0, -17px);\
  transform: scale(1) translate(0, -17px);\
}\
');

var Slider = React.createClass({
  getInitialState: function() {
    return {
      expand: false,
      transiting: false
    };
  },

  render: function() {
    var min = this.props.min || 0;
    var max = this.props.max || 100;
    var value = Math.min(Math.max(min, this.props.value), max);
    var progress = 100 * value / (max - min);

    var containerClass = React.addons.classSet({
      'slider-container': true,
      transiting: this.state.transiting,
      expand: this.state.expand
    });

    return (
      <div className={containerClass}>
        <div ref="barContainer" onClick={this.handleBarClick} className="bar-container">
          <Progress min={min} max={max} value={value} />
        </div>
        <div onMouseDown={this.expandKnob} style={{left: progress + '%'}} className="slider-knob">
          <div data-value={Math.round(value)} className="slider-knob-inner">
          </div>
        </div>
      </div>
    );
  },

  expandKnob: function() {
    this.setState({expand: true});

    // Using bind won't let me remove the event listener
    var reactScope = this;

    var moveHandler = this.handleMoveKnob;
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', function upHandler() {
      if (reactScope.props.onDone)
        reactScope.props.onDone(reactScope.props.value);
      reactScope.setState({expand: false});
      document.removeEventListener('mouseup', upHandler);
      document.removeEventListener('mousemove', moveHandler);
    });
  },

  moveKnob: function(evt) {
    var onChange = this.props.onChange || function noop() {};
    var max = this.props.max || 100;
    var min = this.props.min || 0;
    var rect = this.refs.barContainer.getDOMNode().getBoundingClientRect();
    var progress = (max - min) * (evt.clientX - rect.left) / rect.width;

    onChange(Math.round(progress));
  },

  handleMoveKnob: function(evt) {
    this.setState({
      transiting: false
    });

    this.moveKnob(evt);
  },

  handleBarClick: function(evt) {
    this.setState({
      transiting: true
    });

    this.moveKnob(evt);
    if (this.props.onDone)
      this.props.onDone(this.props.value);
  }
});

module.exports = Slider;
