let barCharts = [];
let data;
let cleanData = [];
let numRows;
let totalColour = "#9b7ede";
let stColour = "#ff6978";
let ttColour = "#0b7a75";
let plusColour = "#6ab547";

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
    chartTitle: "Total amount of driving test fails",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    barColour: "#9b7ede",
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
    chartTitle: "Amount of fails between the ages of 16 and 21",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    barColour: "#ff6978",
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
    yValue: ["16 - 21 years", "22 - 25 years", "26 years +"],
    xValue: "Year",
    chartTitle: "Amount of fails between all the age groups",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
  };

  // Grouped Bar Chart
  let barChart04 = {
    data: cleanData,
    chartWidth: 450,
    chartHeight: 300,
    xPos: 120,
    yPos: 950,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 15,
    yValue: ["16 - 21 years", "22 - 25 years", "26 years +"],
    xValue: "Year",
    chartTitle: "Amount of fails between all the age groups",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
  };

  // Line Chart
  let barChart05 = {
    data: cleanData,
    chartWidth: 350,
    chartHeight: 300,
    xPos: 720,
    yPos: 950,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: "Total",
    xValue: "Year",
    chartTitle: "Total amount of driving test fails",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
    lineColour: "#9b7ede",
    lineThickness: 2,
  };

  let barChart06 = {
    data: cleanData,
    chartWidth: 350,
    chartHeight: 300,
    xPos: 1220,
    yPos: 950,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 30,
    yValue: ["16 - 21 years", "22 - 25 years"],
    xValue: "Year",
    chartTitle: "Amount of fails between the ages of 16-22 and 22-25",
    xLabel: "Year",
    yLabel: "Amount of fails",
    xyLabelRotation: 90,
  };

  barCharts.push(new BarChart(barChart01));
  barCharts.push(new HorizontalBarChart(barChart02));
  barCharts.push(new StackedBarChart(barChart03));
  barCharts.push(new GroupedBarChart(barChart04));
  barCharts.push(new LineChart(barChart05));
  barCharts.push(new FullStackedBarChart(barChart06));
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
  text("Driving Test Fails between the years of 2017 and 2022", 300, 80);
  barCharts.forEach((bar) => bar.render());
}
