import React, { Component } from 'react';
import PropTypes from 'prop-types';
class LineCharts extends Component {
    constructor(props,context) {
        super(props,context);
    }
    UNSAFE_componentWillReceiveProps(nextPorps) {
        this.initLineChart(nextPorps)
    }
    static propTypes = {
        lineData:PropTypes.object.isRequired
    }
    static defaultProps = {
        lineData:{}
    }
    initLineChart(nextPorps) {
        // 初始化
        const {lineData,newDate} = nextPorps.lineData;
        let lineCharts = echarts.init(document.getElementById("line_main"));
        lineCharts.setOption({
            xAxis: {
                boundaryGap: true,
                alignWithLabl: true,
                axisLabel: {
                    interval: 0
                },
                data: newDate
            },
            grid: {
                top: '5%',
                bottom: '20%'
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                min: 0,
                max: function (value) {
                    return value.max + 1000
                },
                splitNumber: 4,
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            },
            tooltip: {
                show: true,
                enterable:true,//鼠标是否可进入提示框浮层中
                confine:true,//是否将 tooltip 框限制在图表的区域内。
                position: function (point, params, dom, rect, size) {
                    // 固定在顶部
                    return [point[0], '0%'];
                },
                formatter:'{b0}<br />{a}: {c}',
                backgroundColor:'#60acfc',
                trigger: 'axis'
            },
            series: [
                {
                    type: 'line',
                    name: '支出',
                    areaStyle: {
                        opacity: 0.1
                    },
                    itemStyle: {
                        color: '#60acfc'
                    },
                    lineStyle: {
                        width: 3
                    },
                    smooth: true,
                    data: lineData
                }
            ]
        })
        window.addEventListener("resize", function () {
            lineCharts.resize();
        });
    }
    render() {
        return (
            <div className="line_charts">
                <div id="line_main" style={{ width: '100%', height: 300 }}></div>
            </div>
        )
    }
}
export default LineCharts;