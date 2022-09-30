import WineData from '../../wineData/Wine-Data.json';
import ReactEcharts from 'echarts-for-react';

function BarChart() {
  // To Find out the unique values of Alcohol categories
  const xValue = [...new Set(WineData.map((category) => category.Alcohol))];

  //To find out the array of average of “Malic Acid” values for each class category
  const yvalue = xValue.map((category) => {
    let n = 0;

    // Sum of “Malic Acid” values
    const sum = WineData.reduce((prevValue, curVal) => {
      if (category === curVal.Alcohol) {
        prevValue += curVal['Malic Acid'];
        n++;
      }
      return prevValue;
    }, 0);

    //Return Average
    return sum / n;
  });

  const option = {
    xAxis: {
      type: 'category',
      data: xValue,
      name: `Alcohol Category`,
    },
    yAxis: {
      type: 'value',
      name: 'Average of Malic Acid',
    },
    series: [
      {
        data: yvalue,
        type: 'bar',
      },
    ],
  };
  return (
    <div className="chart">
      <h2>Bar Chart</h2>
      <ReactEcharts
        option={option}
        style={{
          width: '95%',
        }}
      />
    </div>
  );
}

export default BarChart;
