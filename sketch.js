let barCharts = [];
let data;
let cleanData = [];
let numRows;
let totalColour = "#f7fa9d";
let stColour = "#c8dbfa";
let ttColour = "#f2d3a0";
let plusColour = "#dfb1fc";

function preload() {
  data = loadTable("data/DrivingTestFails.csv", "csv", "header");
}

function setup() {
  background(50);
  createCanvas(1700, 1100);
  angleMode(DEGREES);

  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data.rows[i].obj);
  }
  // cleanData = data.rows.map(d => d.obj);
  console.log(cleanData);

  // Regular Bar Chart
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

  // Horizontal Bar Chart
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

  // Stacked Bar Chart
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

  // Grouped Bar Chart
  let barChart04 = {
    data: cleanData,
    chartWidth: 710,
    chartHeight: 300,
    xPos: 120,
    yPos: 950,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: ["16 - 21 years", "22 - 25 years", "26 years +"],
    xValue: "Year",
    chartTitle: "16 - 21 years & 26 years +",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
  };

  barCharts.push(new BarChart(barChart01));
  barCharts.push(new HorizontalBarChart(barChart02));
  barCharts.push(new StackedBarChart(barChart03));
  barCharts.push(new GroupedBarChart(barChart04));
}

function draw() {
  background(50);

  // Legend "Total"
  fill(totalColour);
  rect(1500,50,20,20);
  fill("#fff");
  textSize(15);
  text('Total', 1525, 67)

  // Legend "16 - 21 Years"
  fill(stColour);
  rect(1500,80,20,20);
  fill("#fff");
  textSize(15);
  text('16 - 21 Years', 1525, 97)

  // Legend "22 - 25 Years"
  fill(ttColour);
  rect(1500,110,20,20);
  fill("#fff");
  textSize(15);
  text('22 - 25 Years', 1525, 127)

  // Legend "26 Years +"
  fill(plusColour);
  rect(1500,140,20,20);
  fill("#fff");
  textSize(15);
  text('26 Years +', 1525, 157)

  fill("#fff");
  textSize(40);
  text("Driving Test Fails", 180, 80);
  barCharts.forEach((bar) => bar.render());
}
