import WineData from './Wine-Data.json';
import ReactEcharts from 'echarts-for-react';

function BarChart() {
  // To Find out the unique values of Alcohol categories
  const xValue = [...new Set(WineData.map((category) => category.Alcohol))];

  //To find out the array of average of “Malic Acid” values for each class category
  const yvalue = xValue.map((category) => {
    // Malic Acid Values array
    const malic = WineData.filter((item) => {
      if (category === item.Alcohol) {
        return item;
      }
    }).map((item) => item['Malic Acid']);

    // Sum of “Malic Acid” values
    const sum = malic.reduce((prevValue, curVal) => {
      return prevValue + curVal;
    }, 0);

    // Average
    const avg = sum / malic.length;

    return avg;
  });

  const option = {
    xAxis: {
      type: 'category',
      data: xValue,
      name: 'Alcohol Category',
    },
    yAxis: {
      type: 'value',
      name: 'Malic Acid',
    },
    series: [
      {
        data: yvalue,
        type: 'bar',
      },
    ],
  };
  return (
    <div className="App">
      <h2>Bar Chart</h2>
      <ReactEcharts option={option} />
    </div>
  );
}

export default BarChart;
