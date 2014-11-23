var React = require('react');

/*
 * Polymer paper-shadow can inject two elements from one components. We wrap em in one div.
 * TODO: Shadow z-levels
 */
var Shadow = React.createClass({
  render: function() {
    return (
      <div className="paper-shadow">
        <div className="paper-shadow shadow-bottom"></div>
      </div>
    );
  },
});

module.exports = Shadow;
