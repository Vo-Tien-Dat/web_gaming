import React, {Component} from 'react';
import Picture from './Picture';


class ChangePicture extends Component{
    constructor(){
        super();
        console.log("Change picture");
        this.state = {
            index: 0
        }
        this.information=[
            'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-1_044126531.jpg',
            'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg',
            'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-4_044127014.jpg',
            'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-5_044127233.jpg',
        ]
        setInterval(()=>{
            
            if(this.state.index == 3){
                this.setState({
                    index: 0
                })
            }
            else{
                this.setState({
                    index: this.state.index + 1,
                })
            }
        },1000);
    }
    render(){
        const {index} = this.state;
        console.log(this.information[index]);
        return(
            <Picture address = {this.information[index]}/>
        )
    }
}

export default ChangePicture;