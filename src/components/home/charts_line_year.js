import React,{Component} from 'react';
class LineCharts extends Component{
    componentDidMount() {
        // 挂载完成
        let that = this;

        setTimeout(()=>{
            that.initLineChart()
        },200)
    }
    initLineChart(){
        // 初始化
        let lineCharts = echarts.init(document.getElementById("line_main"));
        lineCharts.setOption({
            xAxis: {
                boundaryGap: true,
                alignWithLabl:true,
                axisLabel:{
                    interval:0
                },
                data: ['1月', '2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',]
            },
            grid:{
                top:'5%',
                bottom:'20%'
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                min:0,
                max:function(value){
                    return value.max + 1000
                },
                splitNumber:4,
                axisTick: {
                    show: false
                },
                splitLine:{
                    show:false
                }
            },
            tooltip: {
                show: true,
                trigger:'axis'
            },
            series: [
                {
                    type: 'line',
                    name: '支出',
                    itemStyle: {
                        color: 'rgb(0, 227, 150)'
                    },
                    smooth:true,
                    data: [8000, 9500, 6268, 9457, 5209, 7191,12334,5872,19589,15655,10265,5420]
                }
            ]
        })
        window.addEventListener("resize",function(){
            lineCharts.resize();
        });
    }
    render(){
        return(
            <div className="line_charts">
                <div id="line_main" style={{ width: '100%', height: 160 }}></div>
            </div>
        )
    }
}
export default LineCharts;