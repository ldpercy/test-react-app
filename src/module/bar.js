import React from 'react';
import logo from '../image/logo.svg';
import style from './bar.module.css';

class Bar extends React.Component {

    constructor(props) {
        super(props);

        this.state = 
        {
            list: props.list
        };

        //this.getRand = this.getRand.bind(this);
    }


    handler = (e) =>
    {
        console.log(e);
    }


    render() {

        return (
            <div>
                <h2>Bar</h2>
                <p>{this.state.list}</p>
                <ul>
                    {this.state.list.map(
                        (item) =>
                        <li onClick={this.handler} className={style.noBullet}>
                            <img src={logo} className={style.bullet} alt="bullet"/>
                            {item}
                        </li>
                    )}
                </ul>
            </div>
        );

    }

}

export default Bar;





/*

        {this.state.list.map(
            (item) =>
                <li>{item}</li>
        )}

*/