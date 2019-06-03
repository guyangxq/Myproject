import React,{Component} from 'react';
class InPut extends Component{
    constructor(){
        super();
        this.state={
            context:"",
            data:{
                data:[],
                type:"bar"
            }
        }
    }
    handleChangeData(event){
        this.setState({
                context:event.target.value
        })
    }
    handleCommitData(){
        if(this.state.data.data.length==0){
            alert('数据不能为空')
            return
        }
        this.props.onSubmit(this.state.data);
    }
    handleCommitType(event){
        this.setState({
            data:{
                data:this.state.data.data,
                type:event.target.value
            }
        })
    }
    handleUpdateData(){
        var n_data=this.state.context.split(/\D+/).map(Number)
        this.setState({
            data:{
                data:n_data,
                type:this.state.data.type
            }
        })
    }
    render(){
        return(
            <div>
                <select id='type'>
                    <option value=""></option>
                    <option value="bar" onClick={this.handleCommitType.bind(this)}>bar</option>
                    <option value="pie" onClick={this.handleCommitType.bind(this)}>pie</option>
                </select>
                数据:<input onBlur={this.handleUpdateData.bind(this)} value={this.state.context} onChange={this.handleChangeData.bind(this)}></input>
                X轴:<input></input>
                Y轴:<input></input>
                <br/><button onClick={this.handleCommitData.bind(this)}>确定</button>
            </div>
        )
    }
}
export default InPut