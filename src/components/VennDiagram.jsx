import  React, { useEffect, useRef } from 'react';
import { VennDiagramChart, extractSets } from "chartjs-chart-venn";
import { Chart } from "chart.js";

const ChartVenn = ({ setsABC }) => {
    // console.log(setsABC)

    const canvasRef = useRef(null);
    const chartIns = useRef(null); 

    const data = extractSets(
        [
          { label: "Conjunto A", values: setsABC[0] },
          { label: "Conjunto B", values: setsABC[1] },
          { label: "Conjunto C", values: setsABC[2] }
        ],
    )

    const config = {
        type: 'venn',
        data,
        options: {
            borderWidth: 1,
            backgroundColor: [
                "rgba(255, 26, 104, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
                "rgba(255, 26, 104, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
            ]
        }
    };
    

    useEffect(() => {
        if (chartIns.current) {
            chartIns.current.destroy();
        }
        chartIns.current = new VennDiagramChart(canvasRef.current, config);
    }, [setsABC]);

    return (
        <>
        <div className="App">
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
        </>
    );
};

export default ChartVenn;

// Citations
// https://upset.js.org/chartjs-chart-venn/getting-started.html
// https://codesandbox.io/p/sandbox/chartjs-in-react-forked-14xspq?file=%2Fsrc%2Fcomponents%2FChartVenn.jsx%3A6%2C3-6%2C34
// https://github.com/upsetjs/chartjs-chart-venn
