// write your code below
var multiply = '\n';
for (var i = 1; i < 11; i++) {
    for ( var n = 1; n < 11; n++) {
       multiply += (i*n) + ' '; 
    }
    multiply += '\n'
}

var table = 9;
    var count = 10;
    
    for (var i = 0; i < count; i++) {
        i++;
        console.log(table, '*', i, '=', table * i);
        --i;
    }