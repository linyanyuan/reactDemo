import React, { Component } from 'react';
import PropTypes from 'prop-types';
class PieCharts extends Component {
    constructor(props,context) {
        super(props,context);
    }
    static propTypes = {
        idPrefix:PropTypes.string.isRequired,
        chartsData:PropTypes.array.isRequired,//图形数据
    }
    componentDidMount() {
        // 挂载完成
        let that = this;
        setTimeout(() => {
            that.initPieChart()
        }, 200)
    }
    initPieChart() {
        // 初始化
        const { idPrefix } = this.props;
        let pieCharts = echarts.init(document.getElementById(`${idPrefix}_pie`));
        pieCharts.setOption({
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
