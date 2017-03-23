//
// Trig
//

(function () {

  var
    X1      = 'x1',
    X2      = 'x2',
    Y1      = 'y1',
    Y2      = 'y2';

  var
    data    = [],
    width   = 200,
    height  = 200,
    xmin    = -2,
    xmax    = +2,
    ymin    = -height * (xmax - xmin) / width / 2,
    ymax    = -ymin,
    xScale  = d3.scaleLinear(),   //constructs a linear scale with the default domain [0,1] and range [0,1], which produces a mapping of 1:1.
    yScale  = d3.scaleLinear(),
    vis     = d3.select('#spin-d3').append('svg:svg'),
    decor   = vis.append('svg:g'),
    graph   = vis.append('svg:g'),
    c       = graph.append('svg:line'),       // rotating vector
    circle  = graph.append('svg:circle'),
    dot     = graph.append('svg:circle'),
    time    = 0,
    i;

    d3.select("#spin-d3").attr("align","center");

  xScale
    .domain([xmin, xmax])
    .range([0, width]);

  yScale
    .domain([ymin, ymax])
    .range([0, height]);

  vis
    .attr('class', 'spin')
    .attr('width', width)
    .attr('height', height);

  decor.append("rect")                        // background
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "black");

  decor.append('svg:line')                     // x-Axis
    .attr('class', 'axis')
    .attr(X1, xScale(xmin))
    .attr(Y1, yScale(0))
    .attr(X2, xScale(xmax))
    .attr(Y2, yScale(0));

  decor.append('svg:line')                    // y-axis
    .attr('class', 'axis')
    .attr(X1, xScale(0))
    .attr(Y1, yScale(ymin))
    .attr(X2, xScale(0))
    .attr(Y2, yScale(ymax));

  decor.append("svg:text")                    // e label
    .text("e")
    .attr("x", 140)
    .attr("y", 44)
    .attr("text-anchor", "middle");
 
  decor.append("svg:text")                    // +jwt label
    .text("+j" + String.fromCharCode(969) + "t")   //lowercase omega
    .attr("x", 160)
    .attr("y", 30)
    .attr("text-anchor", "middle");

  circle
    .attr('cx', xScale(0))
    .attr('cy', yScale(0))
    .attr('r', xScale(1) - xScale(0))
    .style("stroke", "silver")
    .style("fill", "none");

  // Dot
  dot                                         // spinning number
    .attr('class', 'dot')
    .attr('r', 4)

  c                                           // spinning vector origin
    .attr(X1, xScale(0))
    .attr(Y1, yScale(0));

  function draw() {
    var
      x = xScale(Math.cos(time)),
      y = yScale(-Math.sin(time));

    c                                         // spinning vector touching unit circle
      .attr(X2, x)
      .attr(Y2, y)

    dot
      .attr('cx', x)
      .attr('cy', y);

    time += .03;

    setTimeout(draw, 35);
  }
  draw();

})();