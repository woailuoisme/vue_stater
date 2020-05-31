<template>
  <div class="small">
    <bar-chart :chart-data="dataCollection" :options="options"></bar-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
    import BarChart from "./BarChart.js";

    export default {
  components: {
      BarChart
  },
  data() {
    return {
      dataCollection: null,
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Chart.js Line Chart"
        },
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 35,
                minRotation: 20
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.dataCollection = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            fill: false
          },
          {
            label: "Data two",
            backgroundColor: "#020022",
            borderColor: "#020022",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ],
            fill: false
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>
