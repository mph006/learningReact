var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	//Setting the component initial state
	getInitialState: function(){
		console.log("In Battle: get initial state")
		return {
			isLoading: true,
			playerInfo:[]
		}
	},
	//Preparing the component for mounting
	componentWillMount: function(){
		console.log("In Battle: component will mount");
	},
	//Lifecycle event when the component loaded, good for event listeners and ajax calls
	componentDidMount: function(){
		console.log("In Battle: component did mount");
		var query = this.props.location.query;
		//Scoping issues for "this"
		// var that = this;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function(players){
				this.setState({
					isLoading:false,
					playersInfo:[players[0],players[1]]
				})
				//This will fix the scoping issues, but variable assignment will work too
			}.bind(this));
	},
	//Fired when the component recieves new props
	componentWillReceiveProps: function(){
		console.log("In Battle: component will recieve props");

	},
	//Fired when you navigate away or remove the component
	componentWillUnmount: function(){
		console.log("In Battle: component will unmount");
	},
	//Renders the component
	render: function(){
		console.log("In Battle: rendering");
		return(<ConfirmBattle 
			isLoading={this.state.isLoading}
			playersInfo = {this.state.playersInfo} />);
	}

});

module.exports = ConfirmBattleContainer;