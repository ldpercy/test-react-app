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
				<div className={logo}>
					<img className={style.header} src={logo} alt="logo"/>
				</div>
				<div>
					<h1>Test React App</h1>
				</div>
				<div>
					<p>Very Very Important Information</p>
				</div>
			</header>
		);
	}

}

export default Header;