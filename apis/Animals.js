import { executeQuery } from '../modules/SQLite.js'

(function () {
    executeQuery({
        "text": `
CREATE TABLE IF NOT EXISTS animals (id INTEGER PRIMARY KEY AUTOINCREMENT, animal VARCHAR(255) UNIQUE, sound VARCHAR(255), icon VARCHAR(255) UNIQUE);
INSERT OR REPLACE INTO animals(id, animal, sound, icon) VALUES 
(1, 'Alligator','Snap!','🐊'),
(2, 'Lion','Roaar!','🦁'),
(3, 'Cat','Meaow!','🐱');`
    });
})()

export function insertAnimal({ animal, sound, icon }) {
    return executeQuery({
        text: "INSERT INTO animals(animal, sound, icon) VALUES ($1,$2,$3) RETURNING id;",
        values: [animal, sound, icon],
    });
}
export function deleteAnimal(id) {
    return executeQuery({
        text: "DELETE FROM animals WHERE id=$1;",
        values: [id],
    });
}
export function getAnimals(id) {
    if (id)
        return executeQuery({
            text: "SELECT * FROM animals WHERE id=$1;",
            values: [id]
        });
    else
        return executeQuery({
            text: "SELECT * FROM animals;",
        });
}


