/**
 * Get and add exercise data from database.
 */
const conn = require('../database/connect.js');

/**
 * 
 * @param {*} args 
 */
let getAllExercises = async (args) => {
    let query = "SELECT * FROM Exercises;";
    let res = await conn.promise().query(query);
    return res[0];
}

/**
 * 
 * @param {*} args 
 */
let getExerciseById = async (args) => {
    let id = args.id;
    let query = "SELECT * FROM Exercises WHERE id = " + id + ";";
    let res = await conn.promise().query(query);
    console.log(res[0][0]); //only return one exercise.
    return res[0][0];
}

/**
 * 
 * @param {*} args 
 */
let getExercisesByMuscleAreaId = async (args) => {
    let id = args.id;
    let query = "SELECT * FROM Exercises WHERE muscleAreaId = '" + id + "';";
    let res = await conn.promise().query(query);
    return res[0];
}

/**
 * 
 * @param {*} args 
 */
let getExerciseByTitle = async (args) => {
    let title = args.title;
    let query = "SELECT * FROM Exercises WHERE title = '" + title + "';";
    let res = await conn.promise().query(query);
    return res[0];
}

/**
 * 
 * @param {*} param0 
 */
let addExercise = async ({ title, description, muscleAreaId }) => {
    let query = "INSERT INTO Exercises (title, description, muscleAreaId) VALUES ('"
        + title + "', '"
        + description + "', "
        + muscleAreaId + ");";
    let res = await conn.promise().query(query);
    return getExerciseById({ id: res[0].insertId })
}

/**
 * 
 * @param {*} param0 
 */
let removeExercise = async ({ id }) => {

}

module.exports = {
    getAllExercises,
    getExerciseById,
    getExercisesByMuscleAreaId,
    getExerciseByTitle,
    addExercise
};