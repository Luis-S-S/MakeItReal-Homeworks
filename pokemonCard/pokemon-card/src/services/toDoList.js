const URL = 'http://localhost:3000/api';

export async function getToDoList() {
    try {
        const response = await fetch(`${URL}/tasks`);
        const list = await response.json();
        return list;
    } catch (error) {
        console.log(error);
    }
}