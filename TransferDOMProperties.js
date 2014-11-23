var React = require('react/addons');

var TransferDOMProperties = {
	mergeClassNames: function(className) {
		return React.addons.classSet(this.props.className, className);
	},
	mergeStyle: function(style) {
		return {...this.props.style, style}
	}
}

module.exports = TransferDOMProperties;