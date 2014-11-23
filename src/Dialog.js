var React = require('react/addons'),
    Shadow = require('./Shadow'),
    TransferDOMProperties = require('./TransferDOMProperties'),
    cx = React.addons.classSet;

var Dialog = React.createClass({
  mixins: [TransferDOMProperties],
  getDefaultProps: function() {
    return {
      open: false
    };
  },
  getDialogClass: function() {
    return cx({
      'paper-dialog': true,
      open: this.props.open
    });
  },
  render: function() {

    return (
      <div 
          {...this.props}
          className={this.mergeClassNames(this.getDialogClass())}
          style={this.mergeStyle()}
      >
        <Shadow />
        <div className='dialog-content'>
          {this.props.children}
        </div>
      </div>
    );
  },
});

module.exports = Dialog;
