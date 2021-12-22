import React, {Component} from 'react';


class Picture extends Component{
    
    render(){
        const {address} = this.props;
        return(
            <img  src={address}/>
        )
    }
}


export default Picture;