var React = require('react/addons'),
    TransferDOMProperties = require('./TransferDOMProperties');


require('./css')('\
.header {\
  display: block;\
  position: relative;\
  box-sizing: border-box;\
  height: 64px;\
  font-size: 1.3em;\
  background-color: rgb(79, 125, 201);\
\
  display: -webkit-flex;\
  display: flex;\
  -webkit-justify-content: space-between;\
  justify-content: space-between;\
  -webkit-align-items: center;\
  align-items: center;\
}\
');

var Header = React.createClass({displayName: 'Header',
  mixins: [TransferDOMProperties],
  render: function() {
    return (
        React.createElement("div", React.__spread({},  
          this.props, 
          {className: this.mergeClassNames("header"), 
          style: this.mergeStyle()
        }), 
          this.props.children
        )
    )
  },
});

module.exports = Header;
