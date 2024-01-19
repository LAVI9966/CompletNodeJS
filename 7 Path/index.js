const path = require('path');
//provide utilities for working file and directory path

console.log(path.dirname('D:/VS_CODES/Thapa_Technical_Node/7 Path/index.js'))

console.log(path.extname('D:/VS_CODES/Thapa_Technical_Node/7 Path/index.js'))

console.log(path.basename('D:/VS_CODES/Thapa_Technical_Node/7 Path/index.js'))

// console.log(path.parse('D:/VS_CODES/Thapa_Technical_Node/7 Path/index.js'))

//parse is a object 
var pa = path.parse('D:/VS_CODES/Thapa_Technical_Node/7 Path/index.js');
console.log(pa.name);