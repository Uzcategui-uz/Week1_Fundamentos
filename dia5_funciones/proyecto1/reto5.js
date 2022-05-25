let ropa=       ["tutu","vestido", "panatalon","falda", "corselt" ]
let pies=   ["zapatos", "zapatillas", "tacones", "sandalias", "botines"]
let bailes=   ["bachata", "danza", "salsa", "balect", "tango"]
let matrizString = [ropa, pies,bailes]
console.log(matrizString[1])
console.log(matrizString[2][4][2])
// console.log(matrizString[2,4])
matrizString[1]= [99, 77]


console.log(matrizString)
pies.splice(1,3, false)
console.log(pies)
ropa.splice(4, 1, 'batamanta')
ropa.splice(0,1)
bailes.splice(4, 1)
bailes.splice (0,2,)
console.log(bailes)
bailes.push("bachata")
console.log(bailes)
bailes.splice(1, 0, 'danza', 'salsa', 'tango')
console.log(bailes)






