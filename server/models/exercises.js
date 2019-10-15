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


module.exports = {
    getAllExercises,
    getExerciseById,
    getExercisesByMuscleAreaId,
    getExerciseByTitle
};