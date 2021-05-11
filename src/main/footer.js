import React from 'react';
import style from './main.module.css';

class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = { };
	}


	render() {
		return (
			<footer className={style.footer}>
				<h3>Footer</h3>
			</footer>
		);
	}

}

export default Footer;