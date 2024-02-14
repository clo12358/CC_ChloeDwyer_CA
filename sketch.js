let barCharts = [];
let data;
let cleanData = [];
let numRows;

function preload() {
  data = loadTable("data/combined.csv", "csv", "header");
}

function setup() {
  background(50);
  createCanvas(550, 600);

  numRows = data.rows.length;
  for (let i = 0; i < numRows; i++) {
    cleanData.push(data.rows[i].obj);
  }
  // cleanData = data.rows.map(d => d.obj);
  console.log(cleanData);

  let barChart01 = {
    data: cleanData,
    chartWidth: 400,
    chartHeight: 300,
    xPos: 50,
    yPos: 450,
    axisLineColour: "#FFF",
    labelTextSize: 15,
    labelPadding: 10,
    labelColour: "#FFF",
    labelRotation: 45,
    barWidth: 15,
    yValue: "Total",
    xValue: "Age_Group",
  };

  //barCharts.push(new BarChart(cleanData,80,80,50,350,"#ff0000"));
  barCharts.push(new BarChart(barChart01));
  // barCharts.push(new BarChart(cleanData,200,200,250,450,"#d9d9d9"));
  //barCharts.push(new BarChart(cleanData,400,400,50,450,"#d9d9d9"))
}

function draw() {
  background(50);
  barCharts.forEach((bar) => bar.render());
}
