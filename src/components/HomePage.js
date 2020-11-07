import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

export default class HomePage extends React.Component {
	render() {
		return (
			<div>
				<Link to="/beers">All beers</Link>
				<Link to="/random-beer">Random beers</Link>
				<Link to="/new-beer">New beers</Link>
			</div>
		);
	}
}