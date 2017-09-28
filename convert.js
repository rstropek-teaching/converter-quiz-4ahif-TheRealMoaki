var convert = require('convert-units');
        
try {    
    var unit = convert(parseInt(process.argv[2])).from(process.argv[3]).to(process.argv[5]);
    unit ? console.log(unit) : handleArgumentError();     
} catch (ex) {
    handleArgumentError();
}

function handleArgumentError() {
    console.error('Invalid parameters');
}