import * as d3 from 'd3'
import {
	selection,
	select
} from 'd3-selection'
import 'd3-selection-multi'
var datas = [];
const barWidth = 30,
	barPaddings = 3;
for (var i = 0; i < 40; i++) {
	datas.push(Math.floor(Math.random() * 250 + 20));
}
let maxValue = d3.max(datas);
const xloc = (d, i) => {
	return i * (barWidth + barPaddings);
}
const yloc = (d) => {
	return maxValue - d;
}
const translator = (d, i) => {
	return "translate(" + xloc(d, i) + "," + yloc(d) + ")";
}

var graphGroup = d3.select('body')
	.append('svg')
	.attrs({
		width: 2000,
		height: 500
	})
	.styles({
		'margin-left': 100,
		'margin-top': 100
	})
	.append('g');
var barGroups = graphGroup.selectAll('g')
	.data(datas)
	.enter()
	.append('g')
	.attr('transform', translator);
barGroups.append('rect')
	.attrs({
		fill: 'steelblue',
		width: barWidth,
		height: function(d) {
			return d;
		}
	});
var textTranslator = "translate(" + barWidth / 2 + ",0)";
barGroups.append('circle')
	.attrs({
		r: 3,
		fill: 'red',
		transform: textTranslator
	});

barGroups.append('text')
	.text(d => {
		return d;
	})
	.attrs({
		fill: 'white',
		'alignment-baseline': 'before-edge',
		'text-anchor': 'middle',
		transform: textTranslator
	})
	.style('font', '10px sans-serif');
/*var scale = d3.scale()
		.linear()
		.domain([0,maxValue])
		.range([0,width]);
	var axis = d3.svg.axis().scale(scale);
	svg.call(axis);*/