import React, { Component } from 'react';
class PieCharts extends Component {
    componentDidMount() {
        // 挂载完成
        let that = this;
        setTimeout(() => {
            that.initPieChart()
        }, 200)
    }
    initPieChart() {
        // 初始化
        let pieCharts = echarts.init(document.getElementById("pie_main"));
        pieCharts.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
               show:false
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '80%'],
                    label: {
                        show:true,
                    },
                    labelLine: {
                        show:true,
                    },
                    data: [
                        { value: 335, name: '私家车' },
                        { value: 310, name: '转账他人' },
                        { value: 234, name: '红包支出' },
                        { value: 135, name: '超市便利' },
                        { value: 1548, name: '公共交通' }
                    ]
                }
            ]
        })
        window.addEventListener("resize",function(){
            pieCharts.resize();
        });
    }
    render() {
        return (
            <div className="pie_charts">
                <div id="pie_main" style={{ width: '100%', height: 160 }}></div>
            </div>
        )
    }
}
export default PieCharts;