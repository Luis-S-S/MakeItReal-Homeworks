const fs = require('fs');
const { faker } = require('@faker-js/faker');

function printThousandNames() {
    let names = [];

    try {

        for(let i = 0; i < 1000; i++) {
            names.push(faker.name.findName())
        }
    
        fs.writeFileSync('names.txt', names.join('\n'));
        console.log('Revisar archivo names.txt');

    } catch (error) {
        console.log('Revisar error, no se pudo generar archivo');
        console.log(error);
    }
    
}

printThousandNames();
