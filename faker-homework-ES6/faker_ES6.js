// const fs = require('fs');
// const { faker } = require('@faker-js/faker');

import fs from 'fs';
import { faker } from '@faker-js/faker';

function printThousandNames() {
    let names = [];

    for(let i = 0; i < 1000; i++) {
        names.push(faker.name.findName())
    }

    fs.writeFileSync('namesES6.txt', names.join('\n'));

    console.log('Revisar archivo namesES6.txt');
}

printThousandNames();