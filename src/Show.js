//展示组件，把传进来的数据用图标的方式展示出来
import React,{Component} from 'react';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
class Show extends Component{
    static defaultProps={
        id:'echart',
        data:{
            data:[0],
            type:''
        },
        index:""
    }
    componentDidUpdate(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(this.props.id));
        // 绘制图表
        if(this.props.data.type=='bar'){
            myChart.clear()
            myChart.setOption({
            title: { text: this.props.index },
            tooltip: {},
            xAxis: {
                data:[]
            },
            yAxis: {},
            series: [this.props.data]
        });
    }
        if(this.props.data.type=='pie'){
            myChart.clear()
            myChart.setOption({
                title: { text: this.props.index },
                series : [this.props.data]
            })
        }
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById(this.props.id));
        // 绘制图表
        if(this.props.data.type=='bar'){
            myChart.setOption({
            title: { text: this.props.index },
            tooltip: {},
            xAxis: {
                data:[]
            },
            yAxis: {},
            series: [this.props.data]
        });
    }
        if(this.props.data.type=='pie'){
            
            myChart.setOption({
                title: { text: this.props.index },
                series : [this.props.data]
            })
        }
    } 
    render() {
        return (
            <div id={this.props.id} style={{ width: 400, height: 400 }}>
            </div>
        );
    }
}
export default Show