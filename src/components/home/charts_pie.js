import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PieCharts extends Component {
    constructor(props,context) {
        super(props,context);
    }
    static propTypes = {
        idPrefix:PropTypes.string.isRequired,
        chartsData:PropTypes.array.isRequired,//图形数据
        chartColor: PropTypes.array, // 扇形区域颜色
        maxShow: PropTypes.number, // 需 >= 0 最多展示几个扇形，不传则默认不处理，建议不要大于7
    }
    static defaultProps = {
        chartColor: ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7', '#eb2f96', '#faad14']
    }
    componentDidMount() {
        // 挂载完成
    }
    UNSAFE_componentWillReceiveProps(nextPorps){
        this.initPieChart(nextPorps)
    }
    initPieChart(nextPorps) {
        // 初始化
        const { idPrefix, chartColor,maxShow,chartsData} = nextPorps;
        // 有maxShow时
        let newChartsData = [];
        if(maxShow && maxShow >= 0 && chartsData.length > maxShow){
            let total = 0;
            chartsData.sort((a,b)=>{
                return b.value - a.value
            })
            newChartsData = chartsData.slice(0,maxShow);
            chartsData.map((item,index) =>{
                if(index > maxShow){
                    total += item.value
                }
            })
            newChartsData = [...newChartsData,{value:total,name:'其他'}]
        }else{
            newChartsData = [...chartsData];
        }
        let pieCharts = echarts.init(document.getElementById(`${idPrefix}_pie`));
        pieCharts.setOption({
            color:chartColor,
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                show: false
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '80%'],
                    label: {
                        show: true,
                        formatter: '{b0}(' + '{d0}%)'
                    },
                    labelLine: {
                        show: true,
                        length:5
                    },
                    data: newChartsData.length?newChartsData:[{value:0,name:'暂无数据'}]
                }
            ]
        })
        window.addEventListener("resize", function () {
            pieCharts.resize();
        });
    }
    render() {
        const { idPrefix } = this.props;
        return (
            <div className="pie_charts">
                <div id={`${idPrefix}_pie`} style={{width: '100%', height: 160}}/>
            </div>
        )
    }
}
/* PieCharts.propTypes = {
    idPrefix: PropTypes.string.isRequired
}; */
export default PieCharts;
