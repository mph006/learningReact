var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function(){
		return {
			isLoading: true,
			playerInfo:[]
		}
	},
	//Lifecycle event when the component loaded, good for event listeners and ajax calls
	componentDidMount: function(){
		var query = this.props.location.query;
		//Fetch info then update state at a later date
	},
	render: function(){
		return(<ConfirmBattle 
			isLoading={this.state.isLoading}
			playersInfo = {this.state.playersInfo} />);
	}

});

module.exports = ConfirmBattleContainer;