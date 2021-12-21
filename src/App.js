import './App.css';
import Test from './test_component/Test.js';
import React,{Component} from 'react';



class App extends Component{
    constructor(){
        super();
        this.state ={
          information: [
          {title: 'vo tien dat', school : ' hoc vien buu chinh vien thong', isComplete: true},
          {title: 'vo thi huyen trinh' , school : ' truong dai hoc kinh te luat', isComplete: true}
        ]
      }
        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick(title){
      console.log(title);
      return (event)=>{
        const isComplete = title.isComplete;
        const {information} = this.state;
        const index = information.indexOf(title);
        this.setState({
          information: [
            ...information.slice(0,index),{
              ...title,
              isComplete: !isComplete
            },
            ...information.slice(index+1)
          ]
        })
      }
    }
   
    render(){
      const {information} = this.state;
      
      return(
        <div className="App">
        {
          information.map((title) =>
            <Test 
              title = {title} 
              onClick = {this.onItemClick(title)} 
            />
          )
        }
      </div>
      )
    }
}
export default App;
