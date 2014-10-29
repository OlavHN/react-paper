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

var Progress = React.createClass({displayName: 'Progress',
  render: function() {
    var primary = this.props.value;
    var secondary = this.props.secondValue;
    var max = this.props.max;
    return (
      React.DOM.div( {className:"progress"}, 
        React.DOM.div( {className:"progress-container"}, 
          React.DOM.div( {style:{width: (100 * primary / max) + '%'}, className:"progress-bar primary"}),
          React.DOM.div( {style:{width: (100 * secondary / max) + '%'}, className:"progress-bar secondary"})
        )
      )
    );
  }
});

module.exports = Progress;
