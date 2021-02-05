import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class MailServerChart extends React.Component {
  state = {
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Status",
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(0, 115, 247, .3)",
          borderColor: "rgb(0, 115, 247)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 0,
          data: [1, 0, 1, 1, 0, 0, 0],
        },
      ],
    },
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Status</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default MailServerChart;
