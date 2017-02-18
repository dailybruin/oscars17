var dimensions =800, radius = dimensions/2;
var color = d3.scale.linear().domain([0, 100]).range(["#b7b7b7", "#3a3a3a"]);

var pie = d3.layout.pie()
  .value(function(d) {return d.lalaland;})
  .sort(null);

var arc = d3.svg.arc()
  .innerRadius(radius - 100)
  .outerRadius(radius - 20);

var svg = d3.select("#graph").append("svg")
  .attr("width", dimensions)
  .attr("height", dimensions)
  .append("g")
  .attr("transform", "translate(" + dimensions / 2 + "," + dimensions / 2 + ")");
