/*
Mision opcional:
Crear una funcion que reciba la fecha de un cumplea;os y me informe cuantos dias faltan para llegar a esa fecha,
si la  fecha es en el pasado,
decirle al usuario que esa esa fecha ya paso, y que le quedamos debiendo el regalito.
*/

function diasParaCumpleanos(year,month,day) {
    const today = new Date();
    const cumpleanos = new Date(today.getFullYear(), month-1, day);

    const timeDifference = cumpleanos.getTime() - today.getTime();

    if(timeDifference < 0) {
        console.log('Esa fecha ya paso... le quedamos debiendo el regalito');
    }
    else {
        const daysLeft = Math.round(timeDifference / 86400000);
        console.log(`Faltan ${daysLeft} días pa su cumpleaños mijo!`);
    }
}

diasParaCumpleanos(1997,9,3);
diasParaCumpleanos(1994,12,20);
diasParaCumpleanos(1965,2,21);
diasParaCumpleanos(1994,1,8);