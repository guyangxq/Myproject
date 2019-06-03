import React,{Component} from 'react';
import Show from './Show'
class ShowList extends Component{
    static defaultProps={
        data:[]
    }
    render(){
        return(
            <div>
                {this.props.data.map((data, i) =>
          <Show
            data={data}
            key={i}
            index={this.props.data.length-i}
            id={this.props.data.length-i}
         />
        )}
            </div>
        )
    }
}
export default ShowList