var React = require('react');

function dumpInfo(obj){
	return <pre>{JSON.stringify(obj,null,' ')}</pre>
}

function ConfirmBattle (props){
	return (
		props.isLoading===true? <p> LOADING </p> : <div>CONFIRM BATTLE: {dumpInfo(props)}</div>
	);
}

module.exports = ConfirmBattle;