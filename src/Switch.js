var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;

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
          className={this.mergeClassNames("papertoggle-container")} 
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
