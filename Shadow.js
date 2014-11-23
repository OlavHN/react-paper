var React = require('react');

/*
 * Polymer paper-shadow can inject two elements from one components. We wrap em in one div.
 * TODO: Shadow z-levels
 */
var Shadow = React.createClass({displayName: 'Shadow',
  render: function() {
    return (
      React.createElement("div", {className: "paper-shadow"}, 
        React.createElement("div", {className: "paper-shadow shadow-bottom"})
      )
    );
  },
});

module.exports = Shadow;
