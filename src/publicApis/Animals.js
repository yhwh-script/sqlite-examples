import { createDB, executeQuery } from '../modules/sqlite'
import { log } from '../modules/logger'

const { message } = await createDB("animals");

log(message);

await executeQuery({
    sql: `
CREATE TABLE IF NOT EXISTS animals (id INTEGER PRIMARY KEY AUTOINCREMENT, animal VARCHAR(255) UNIQUE, sound VARCHAR(255), icon VARCHAR(255) UNIQUE);
INSERT OR REPLACE INTO animals(id, animal, sound, icon) VALUES 
(1, 'Alligator','Snap!','🐊'),
(2, 'Lion','Roaar!','🦁'),
(3, 'Cat','Meaow!','🐱');`
}, 'animals');

export function insertAnimal({ animal, sound, icon }) {
    return executeQuery({
        sql: "INSERT INTO animals(animal, sound, icon) VALUES ($1,$2,$3) RETURNING id;",
        values: [animal, sound, icon],
    }, 'animals');
}
export function deleteAnimal(id) {
    return executeQuery({
        sql: "DELETE FROM animals WHERE id=$1;",
        values: [id],
    }, 'animals');
}
export function getAnimals(id) {
    if (id)
        return executeQuery({
            sql: "SELECT * FROM animals WHERE id=$1;",
            values: [id]
        }, 'animals');
    else
        return executeQuery({
            sql: "SELECT * FROM animals;",
        }, 'animals');
}


