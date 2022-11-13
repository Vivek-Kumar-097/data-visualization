import WineData from './Wine-Data.json';
import ReactEcharts from 'echarts-for-react';

function ScatterPlot() {
  // Array of “Color Intensity” and “Hue”.
  const values = WineData.map((data) => [data['Color intensity'], data.Hue]);

  const option = {
    xAxis: {
      name: 'Color Intensity'
    },
    yAxis: {
      name: 'Hue'
    },
    series: [
      {
        type: 'scatter',
        data: values,
      },
    ],
  };
  return (
    <div className="App">
      <h2>Scatter Plot</h2>
      <ReactEcharts option={option} />
    </div>
  );
}

export default ScatterPlot;
