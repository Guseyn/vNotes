const window = require('svgdom')
const SVG = require('svg.js')(window)
const document = window.document
const fs = require('fs')

const TrebleClef = require('./units/TrebleClef')

const draw = SVG(document.documentElement).size(1025, 1025)
// var rect = draw.rect(100, 100).attr({ fill: '#f06' })

fs.writeFileSync('./result.svg', new TrebleClef(draw, 2).svg())
