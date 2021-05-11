import React from 'react';


//function Foo(props) {
class Foo extends React.Component {

	constructor(props) {
		super(props);
		this.state =
		{
			number: props.number
		};

		//this.getRand = this.getRand.bind(this);
	}


	getRand = () => {
		console.log(this.state.number);
		this.setState({number: Math.random()});
	};



	render() {
		return (
			<div>
				<h2>Foo</h2>
				<button type="button" onClick={this.getRand}>Click</button>
				<p>{this.state.number}</p>
			</div>
		);
	}

}

export default Foo;

//<Output />