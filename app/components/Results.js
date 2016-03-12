var React = require('react');
var PropTypes = React.PropTypes;

React.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

function dumpData (obj){
	return <pre>{JSON.stringify(obj,2,' ')}</pre>
}

function Results(props){
	return (
		<div>Results {dumpData(props)}</div>
	)
}

module.exports = Results;