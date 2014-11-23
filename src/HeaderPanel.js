var React = require('react'),
    TransferDOMProperties = require('./TransferDOMProperties');


var HeaderPanel = React.createClass({
  mixins: [TransferDOMProperties],
  render: function() {
    var header = this.props.children[0];
    var contents = this.props.children.slice(1);
    return (
      <div 
          {...this.props}
          className={this.mergeClassNames("paper-panel")}
          style={this.mergeStyle()}
      >
        {header}
        <div className="content-panel">
          <div className="content-container">
            {contents}
          </div>
          <div className="panel-shadow"></div>
        </div>
      </div>
    );
  },
});

module.exports = HeaderPanel;
