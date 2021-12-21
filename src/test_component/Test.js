import React,{Component} from 'react';
import classNames from 'classnames';
import "./Test.css";

class Test extends Component{
    constructor(){
        super();
        
    }
    render(){
        let {title,onClick} = this.props;
        
        return(
            <div onClick={onClick} className = {classNames('information',{'information-complete':title.isComplete})}>
                <h1>{title.title}</h1>
            </div>

        )
    }
}



export default Test;