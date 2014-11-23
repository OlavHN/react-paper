var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties');

var Header = React.createClass({
  mixins: [TransferDOMProperties],
  render: function() {
    return (
        <div 
          {...this.props}
          className={this.mergeClassNames("paper-header")}
          style={this.mergeStyle()}
        >
          {this.props.children}
        </div>
    )
  },
});

module.exports = Header;
