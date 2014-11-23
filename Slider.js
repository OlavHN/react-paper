var React = require('react/addons');
var Progress = require('./Progress'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;

var Slider = React.createClass({displayName: 'Slider',
  mixins: [TransferDOMProperties],
  getInitialState: function() {
    return {
      expand: false,
      transiting: false
    };
  },
  getContainerClass: function() {
    return cx({
      'paper-slider-container': true,
      transiting: this.state.transiting,
      expand: this.state.expand
    });
  },

  render: function() {
    var min = this.props.min || 0;
    var max = this.props.max || 100;
    var value = Math.min(Math.max(min, this.props.value), max);
    var progress = 100 * value / (max - min);

    return (
      React.createElement("div", React.__spread({},  
        this.props, 
        {className: this.mergeClassNames(this.getContainerClass()), 
        style: this.mergeStyle()
      }), 
        React.createElement("div", {ref: "barContainer", onClick: this.handleBarClick, className: "bar-container"}, 
          React.createElement(Progress, {min: min, max: max, value: value})
        ), 
        React.createElement("div", {onMouseDown: this.expandKnob, style: {left: progress + '%'}, className: "slider-knob"}, 
          React.createElement("div", {'data-value': Math.round(value), className: "slider-knob-inner"}
          )
        )
      )
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
    if (this.props.onDone) {
      this.props.onDone(this.props.value);
    }
  }
});

module.exports = Slider;
