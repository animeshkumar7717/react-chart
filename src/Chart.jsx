import React, { useState } from 'react'
import BarChart from './Barchart.js';
import { UserData } from './Data';
import PieChart from './Piechart.js';
import LineChart from './Linechart.js';


const Chart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.Gain),
        backgroundColor: [
          "#fff",
          "skyblue",
          "limegreen",
          "aqua",
          "pink",
        ],
        borderColor: "purple",
        borderWidth: 2,
        color: "white",
        links: UserData.map((data) => data.link)

      },
    ],
  });

  const [userData2, setUserData2] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.Lost),
        backgroundColor: [
          "#fff",
          "skyblue",
          "limegreen",
          "aqua",
          "pink",
        ],
        borderColor: "purple",
        borderWidth: 2,
        color: "white",

      },
    ],
  });


  return (
    <div className='title'>
      <h1>Charts</h1>

      <div className='row'>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }} >
          <BarChart chartData={userData} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }} >
          <BarChart chartData={userData2} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <PieChart chartData={userData} />
        </div>

        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <LineChart chartData={userData} />
        </div>
        <div className="column" style={{ width: 300, padding: 5, backgroundColor: "azure", margin: 5 }}>
          <LineChart chartData={userData2} />
        </div>
      </div>
    </div>
  );
}

export default Chart
