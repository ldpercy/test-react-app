import React from 'react';
import logo from '../image/logo.svg';
import style from './bar.module.css';

class Bar extends React.Component {

    constructor(props) {
        super(props);

        /*
        let listItems = props.list.map(
            (item) =>
            {
                return {

                }
            }
        );
        */

        this.state =
        {
            list: props.list
        };

        //this.getRand = this.getRand.bind(this);
    }


    handler = (e) =>
    {
        console.log(e.target.attributes.thisitem.value);
    }


    render() {

        return (
            <div>
                <h2>Bar</h2>

                <ul>
                    {this.state.list.map(
                        (item) =>
                        <li key={item} thisitem={item} onClick={this.handler} className={style.noBullet}>
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
<p>{this.state.list}</p>
*/


/*

        {this.state.list.map(
            (item) =>
                <li>{item}</li>
        )}

*/