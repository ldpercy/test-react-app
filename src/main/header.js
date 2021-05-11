import React from 'react';
import logo from '../image/logo.svg';
import './main.module.css';
import style from './header.module.css';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = { };
	}


	render() {
		return (
			<header className={style.header}>
				<img className={style.header} src={logo} alt="logo"/>
				<h1>Test React App</h1>
				<div>Status</div>
			</header>
		);
	}

}

export default Header;