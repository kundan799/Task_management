import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    width: "70%",

    marginLeft: "10px",
    // border:"1px solid red"
  },
  heading: {
    textAlign: "center",
  },
  chartContainer: {
    marginTop: theme.spacing(2),
    marginLeft: "4px",
    boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
    width: "600px",
    height: "300px",
  },
}));

const ChartData = () => {
  const classes = useStyles();

  var data = {
    labels: ["STR", "FIN", "QLT", "MAN", "STO", "HR"],
    datasets: [
      {
        label: "Dataset 1",
        data: [60, 59, 80, 81, 56, 55],
        backgroundColor: "#1c53b3 ",
        borderColor: "#1c53b3 ",
        borderWidth: 1,
        barPercentage: 0.4, // Decrease the bar width for Dataset 1
        categoryPercentage: 0.5,
      },
      {
        label: "Dataset 2",
        data: [45, 80, 65, 90, 70, 60],
        backgroundColor: "#4fad55",
        borderColor: "#4fad55",
        borderWidth: 1,
        barPercentage: 0.4, // Decrease the bar width for Dataset 1
        categoryPercentage: 0.5,
      },
    ],
  };
  return (
    <Container className={classes.container}>
      <Grid container>
        {/* <Grid item xs={12}>
        <Typography variant="h4" className={classes.heading}>
          Sample Page
        </Typography>
      </Grid> */}
      </Grid>
      <Grid container className={classes.chartContainer}>
        <Grid item sm={8}>
          <Bar data={data} height={200} width={300} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChartData;
