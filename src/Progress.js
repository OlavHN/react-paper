/** @jsx React.DOM */
'use strict';

var React = require('react')

require('./css')('\
.progress-container {\
  height: 4px;\
  position: relative;\
  background-color: #D9D6D1;\
}\
\
.progress-bar {\
  position: absolute;\
  top: 0;\
  left: 0;\
  bottom: 0;\
}\
\
.progress-bar.primary {\
  background-color: #7D8F29;\
}\
\
.progress-bar.secondary {\
  background-color: #424A52;\
}\
');

var Progress = React.createClass({
  render: function() {
    var primary = this.props.value;
    var secondary = this.props.secondValue;
    var max = this.props.max;
    return (
      <div className="progress">
        <div className="progress-container">
          <div style={{width: (100 * primary / max) + '%'}} className="progress-bar primary"></div>
          <div style={{width: (100 * secondary / max) + '%'}} className="progress-bar secondary"></div>
        </div>
      </div>
    );
  }
});

module.exports = Progress;
