var React = require('react'),
    TransferDOMProperties = require('./TransferDOMProperties');


require('./css')('\
.panel {\
  position: absolute;\
  top: 0;\
  right: 0;\
  bottom: 0;\
  left: 0;\
  overflow-y: auto;\
  overflow-x: hidden;\
\
  display: flex,\
  -webkit-flex-direction: column;\
  flex-direction: column;\
}\
\
.content-panel {\
  position: relative;\
\
  display: flex;\
  -webkit-flex-direction: column;\
  flex-direction: column;\
  flex: 1 1 0;\
  -webkit-flex: 1 1 0;\
}\
\
.content-container {\
  position: relative;\
\
  overflow-y: auto;\
  overflow-x: hidden;\
}\
\
.content-panel > .panel-shadow {\
  position: absolute;\
  top: 0;\
  left: 0;\
  right: 0;\
  height: 6px;\
  box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);\
}\
');

var HeaderPanel = React.createClass({displayName: 'HeaderPanel',
  mixins: [TransferDOMProperties],
  render: function() {
    var header = this.props.children[0];
    var contents = this.props.children.slice(1);
    return (
      React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("panel"), 
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
