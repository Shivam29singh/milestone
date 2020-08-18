import React, { Component } from "react";

import "../dashboard/dashboard.css";
import Chart from "react-google-charts";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container">
            <Chart
              width={"600px"}
              height={"400px"}
              chartType="Line"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  "week",
                  "shirt",
                  "microwave",
                  "laptop",
                  "sofa",
                  "painting",
                  "shoes rack",
                ],
                [1, 10, 20, 5, 6, 3, 17],
                [2, 1, 8, 31, 11, 6, 3],
                [3, 5, 9, 7, 15, 11, 2],
                [4, 6, 10, 11, 6, 15, 3],
                [5, 22, 21, 21, 20, 18, 15],
                [6, 11, 4, 17, 25, 16, 7],
              ]}
              options={{
                chart: {},
              }}
              rootProps={{ "data-testid": "3" }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
