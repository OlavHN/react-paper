var React = require('react'),
    TransferDOMProperties = require('./TransferDOMProperties');


var HeaderPanel = React.createClass({displayName: 'HeaderPanel',
  mixins: [TransferDOMProperties],
  render: function() {
    var header = this.props.children[0];
    var contents = this.props.children.slice(1);
    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("paper-panel"), 
          style: this.mergeStyle()
      }), 
        header, 
        React.createElement("div", {className: "content-panel"}, 
          React.createElement("div", {className: "content-container"}, 
            contents
          ), 
          React.createElement("div", {className: "panel-shadow"})
        )
      )
    );
  },
});

module.exports = HeaderPanel;
