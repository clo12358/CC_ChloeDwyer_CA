class StackedBarChart {
  constructor(obj) {
    this.data = obj.data;
    this.chartWidth = obj.chartWidth;
    this.chartHeight = obj.chartHeight;
    this.xPos = obj.xPos;
    this.yPos = obj.yPos;
    this.axisLineColour = obj.axisLineColour;
    this.barWidth = obj.barWidth;
    this.labelTextSize = obj.labelTextSize;
    this.labelPadding = obj.labelPadding;
    this.labelColour = obj.labelColour;
    this.labelRotation = obj.labelRotation;
    this.barWidth = obj.barWidth;
    this.yValue = obj.yValue;
    this.xValue = obj.xValue;
    this.chartTitle = obj.chartTitle;
    this.xLabel = obj.xLabel;
    this.yLabel = obj.yLabel;
    this.xyLabelRotation = obj.xyLabelRotation;
    this.colourPallete = ["#ff6978", "#0b7a75", "#6ab547"];
  }

  render() {
    push();
    translate(this.xPos, this.yPos);
    stroke(this.axisLineColour);
    line(0, 0, 0, -this.chartHeight);
    line(0, 0, this.chartWidth, 0);

    let gap =
      (this.chartWidth - this.data.length * this.barWidth) /
      (this.data.length + 1);

    let dataMax = 0;
    let dataMaxs = [];

    for (let i = 0; i < this.yValue.length; i++) {
      dataMaxs.push(max(this.data.map((row) => +row[this.yValue[i]])));
    }

    dataMax = dataMaxs.reduce((t, s) => t + s, 0);

    let labels = this.data.map((d) => d[this.xValue]);
    let scale = this.chartHeight / dataMax;

    //This loop draws the horizontal elements, bars and labels
    push();
    translate(gap, 0);

    // Year Label
    noStroke();
    textSize(18);
    text(this.chartTitle, -30, -320);
    text(this.xLabel, 130, 65);
    for (let i = 0; i < this.data.length; i++) {
      //Draws rectangle bars
      stroke(255);
      push();
      for (let j = 0; j < this.yValue.length; j++) {
        fill(this.colourPallete[j]);
        rect(0, 0, this.barWidth, -this.data[i][this.yValue[j]] * scale);
        translate(0, -this.data[i][this.yValue[j]] * scale);
      }
      pop();

      //Draws labels
      textSize(this.labelTextSize);
      noStroke();
      fill(this.labelColour);
      textAlign(LEFT, CENTER);

      push();
      translate(this.barWidth / 2, this.labelPadding);
      rotate(this.labelRotation);
      text(labels[i], 0, 0);
      pop();

      translate(gap + this.barWidth, 0);
      // translate(gap + this.barWidth * this.yValue.length, 0);
    }
    pop();

    //This draws the vertical elements
    let tickGap = this.chartHeight / 5;
    let tickValue = dataMax / 5;

    for (let i = 0; i <= 5; i++) {
      stroke(255);
      line(0, -i * tickGap, -20, -i * tickGap);
      textSize(this.labelTextSize);
      noStroke();
      fill(this.labelColour);
      textAlign(RIGHT, CENTER);
      text(round(tickValue * i), -20, -i * tickGap);
    }

    // Amount of fails label
    rotate(this.xyLabelRotation);
    textSize(18);
    text(this.yLabel, -90, 85);
    pop();
  }
}
