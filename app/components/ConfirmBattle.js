var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index.js');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading')

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	onInitateBattle: PropTypes.func.isRequired
}

function dumpInfo(obj){
	return <pre>{JSON.stringify(obj,null,' ')}</pre>
}

function ConfirmBattle (props){
	return (
		props.isLoading===true? <Loading speed={500} text='Hang On'/>: 
			<MainContainer>
				<h1>Confirm Players</h1>
				<div className='col-sm-8 col-sm-offset-2'>
					<UserDetailsWrapper header='Player One'>
						<UserDetails info={props.playersInfo[0]} />
						{/*dumpInfo(props.playersInfo[0])*/}
					</UserDetailsWrapper>
					
					<UserDetailsWrapper header='Player Two'>
						<UserDetails info={props.playersInfo[1]} />
					</UserDetailsWrapper>
				</div>
			<div className="col-sm-8 col-sm-offset-2">
				<div className="col-sm-12" style={styles.space}>
					{/*
						So this is how you comment in JSX (// wont work)
						Using a button with on click handler here to re-route the app 
					*/}
					<button type="button" className="btn btn-lg btn-success" onClick={props.onInitateBattle}>
						Initiate Battle!
					</button>
				</div>
				<div className="col-sm-12" style={styles.space}>
					{/*
						Can also use React's Link tag to reroute the app, as shown here
						This is good for static or existingrouting, where you dont have to pass the routing function in as a prop
					*/}
					<Link to='/playerOne'>
						<button type="button" className='btn btn-lg btn-danger'>Reselect Players</button>
					</Link>
				</div>
			</div>
		</MainContainer>

	);
}

module.exports = ConfirmBattle;