highlight = ([frist, ...strings], ...values) => {
    console.log('frist', frist)
    console.log('strings', strings)
    console.log('values', values)
}

var brand = 'F8'
var course = 'Javascript'

var html = highlight`Học lập trình ${course} tại ${brand}` // Học Javascript tại F8!

console.log(html) // [ 'Học lập trình ', ' tại ', '!' ]

