var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties');

var Header = React.createClass({displayName: 'Header',
  mixins: [TransferDOMProperties],
  render: function() {
    return (
        React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("paper-header"), 
          style: this.mergeStyle()
        }), 
          this.props.children
        )
    )
  },
});

module.exports = Header;
