var convert = require('convert-units');
        
try {    
    var unit = convert(parseInt(process.argv[2])).from(process.argv[3]).to(process.argv[5]);
    // The following console.log statement does not fulfill the exact requirements. Therefore, tests are not green yet.
    // However, the conversion itself is done correctly.
    unit ? console.log(unit) : handleArgumentError();     
} catch (ex) {
    handleArgumentError();
}

function handleArgumentError() {
    console.error('Invalid parameters');
}
