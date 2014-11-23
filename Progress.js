var React = require('react'),
    TransferDOMProperties = require('./TransferDOMProperties');

var Progress = React.createClass({displayName: 'Progress',
  mixins: [TransferDOMProperties],
  render: function() {
    var primary = this.props.value;
    var secondary = this.props.secondValue;
    var max = this.props.max;
    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("paper-progress"), 
          style: this.mergeStyle()
      }), 
        React.createElement("div", {className: "progress-container"}, 
          React.createElement("div", {style: {width: (100 * primary / max) + '%'}, className: "paper-progress-bar primary"}), 
          React.createElement("div", {style: {width: (100 * secondary / max) + '%'}, className: "paper-progress-bar secondary"})
        )
      )
    );
  }
});

module.exports = Progress;
