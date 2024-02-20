let barCharts = [];
let data;
let cleanData = [];
let numRows;

function preload() {
  data = loadTable("data/DrivingTestFails.csv", "csv", "header");
}

function setup() {
  background(50);
  createCanvas(1700, 700);
  angleMode(DEGREES);

  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data.rows[i].obj);
  }
  // cleanData = data.rows.map(d => d.obj);
  console.log(cleanData);

  let barChart01 = {
    data: cleanData,
    chartWidth: 350,
    chartHeight: 300,
    xPos: 120,
    yPos: 450,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: "Total",
    xValue: "Year",
    chartTitle: "Total",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    barColour: "#f7fa9d",
  };

  let barChart02 = {
    data: cleanData,
    chartWidth: 350,
    chartHeight: 292,
    xPos: 620,
    yPos: 450,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: "16 - 21 years",
    xValue: "Year",
    chartTitle: "16 - 21 Years",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    barColour: "#c8dbfa",
  };

  let barChart03 = {
    data: cleanData,
    chartWidth: 350,
    chartHeight: 300,
    xPos: 1120,
    yPos: 450,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: ["16 - 21 years", "22 - 25 years"],
    xValue: "Year",
    chartTitle: "16 - 21 years & 22 - 25 years",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    barColour: "#cbfac8",
  };

  barCharts.push(new BarChart(barChart01));
  barCharts.push(new HorizontalBarChart(barChart02));
  barCharts.push(new StackedBarChart(barChart03));
}

function draw() {
  background(50);
  fill("#fff");
  textSize(40);
  text("Driving Test Fails", 180, 80);
  barCharts.forEach((bar) => bar.render());
}
