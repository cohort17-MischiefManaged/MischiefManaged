import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Gryffindor from './gryffindor.js'
import Ravenclaw from './ravenclaw.js'
import Slytherin from './slytherin.js'
import Hufflepuff from './hufflepuff.js'

class HeaderTabs extends React.Component {
    constructor(props) {
    super(props); 
        this.state={
            gryffindor: '',
            hufflepuff: '',
            ravenclaw: '',
            slytheirn: ''
        }
    }

    componentWillReceiveProps(props){
        console.log(props);
        this.setState({
            gryffindor: props.gryffindor,
            hufflepuff: props.hufflepuff,
            ravenclaw: props.ravenclaw,
            slytheirn: props.slytherin
        })
    }
    render() {
        return (
            <div>
                <header>
                    <div className="houseTabs">
                        <div className={this.state.gryffindor}><Link to="/gryffindor">Gryffindor</Link></div>
                        <div className={this.state.hufflepuff}> <Link to="/hufflepuff">Hufflepuff</Link></div>
                        <div className={this.state.ravenclaw}><Link to="/ravenclaw">Ravenclaw</Link></div>
                        <div className={this.state.slytheirn}> <Link to="/slytherin">Slytherin</Link></div>
                    </div>
                </header>
            </div>
        )
    }
}

export default HeaderTabs