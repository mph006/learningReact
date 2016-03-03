var USER_DATA = {
	name : "Matt Herman",
	username: "mph006",
	image: 'https://avatars2.githubusercontent.com/u/3487290?v=3&u=776a16c28dce7037eb66fd2881635f78fe4e99bd&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function (){
		return (<img src={this.props.imageUrl} style={{height:100, width:100}} />)
	}
});

var ProfileLink = React.createClass({
	render: function(){
		return (
			<div>
				<a href={'https://www.github.com/'+this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
});

var UserName = React.createClass({
	render: function(){
		return (<div>{this.props.name}</div>)
	}
});

var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileLink username={this.props.user.username} />
				<UserName name={this.props.user.name} />
			</div>
		)
	}
});

ReactDOM.render(<Avatar user={USER_DATA}/>,document.getElementById("app"));