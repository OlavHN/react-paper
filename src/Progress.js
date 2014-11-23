var React = require('react'),
    TransferDOMProperties = require('./TransferDOMProperties');

var Progress = React.createClass({
  mixins: [TransferDOMProperties],
  render: function() {
    var primary = this.props.value;
    var secondary = this.props.secondValue;
    var max = this.props.max;
    return (
      <div 
          {...this.props}
          className={this.mergeClassNames("paper-progress")}
          style={this.mergeStyle()}
      >
        <div className="progress-container">
          <div style={{width: (100 * primary / max) + '%'}} className="paper-progress-bar primary"></div>
          <div style={{width: (100 * secondary / max) + '%'}} className="paper-progress-bar secondary"></div>
        </div>
      </div>
    );
  }
});

module.exports = Progress;
