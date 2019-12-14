import React, { Component } from 'react';
import './charts_bar.css';
class BarChart extends Component {
    componentDidMount() {
        // 挂载完成
        let that = this;

        setTimeout(()=>{
            that.initLineChart()
        },200)
    }
    componentWillUnmount(){
        // 组件被移除时
    }
    initLineChart() {
        // 初始化
        let barChart = echarts.init(document.getElementById('bar_main'));
        //绘制图表
        barChart.setOption({
            legend: {
                show: true,
                bottom: 10
            },
            grid:{
                top:'5%'
            },
            xAxis: {
                boundaryGap: true,
                alignWithLabl:true,
                data: ['12-8', '12-9', '12-10', '12-11', '12-12', '12-13']
            },
            yAxis: {
                type: 'value',
                nameGap: 20,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                data: [0, 20, 40, 60]
            },
            tooltip: {
                show: true,
                trigger:'axis',
                axisPointer:{
                    type:'shadow'
                },
                formatter:'{b0}<br/>{a0}: {c0}'+'元<br/>'+'{a1}: {c1}'+'元'
            },
            series: [
                {
                    type: 'bar',
                    name: '计划',
                    itemStyle: {
                        color: 'rgb(0, 227, 150)',
                        barBorderRadius: [7, 7, 0, 0]
                    },
                    smooth:true,
                    barMaxWidth:'20%',
                    data: [50, 50, 50, 50, 50, 50]
                },
                {
                    type: 'bar',
                    name: '支出',
                    itemStyle: {
                        color: 'rgb(0, 143, 251)',
                        barBorderRadius: [7, 7, 0, 0]
                    },
                    barMaxWidth:'20%',
                    data: [33, 55, 44, 22, 23, 45]
                }
            ]
        })
        window.addEventListener("resize",function(){
            barChart.resize();
        });
    }
    render() {
        return (
            <div className="bar_charts">
                <div id="bar_main" style={{ width: '100%', height: 300 }}></div>
            </div>
        )
    }
}
export default BarChart;