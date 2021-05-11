import React from 'react';


import Foo from '../module/foo';
import Bar from '../module/bar';


class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }


    render() {
        return (
            <div>

                <p>Test ReactsJs app</p>
                <hr/>

                <Foo number="123"/>
                <Foo number="456"/>

                <hr/>

                <Bar list={['one','two','three','four','five']}/>


                <hr/>

            </div>
        );
    }

}

export default Body;

/*

*/