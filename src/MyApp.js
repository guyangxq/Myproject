import React,{Component} from 'react';
import InPut from './InPut'
import ShowList from './ShowList'
class MyApp extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    hanldeSumbmitData(comment){
        if (!comment) return
        const data = this.state.data
        data.unshift(comment)
        this.setState({data})   
    }
    render(){
        return(
            <div>
            <InPut onSubmit={this.hanldeSumbmitData.bind(this)}/>
            <ShowList data={this.state.data}/>
            </div>     
        )
    }
}
export default MyApp