/**
 * Get and add exercise data from database.
 */
const conn = require('../database/connect.js');

let getPresetExercises = async (args) => {
    let presetID = args.id;
    let query = "SELECT Exercises.id, Exercises.title, Exercises.description, Exercises.muscleAreaId FROM PresetExercises LEFT JOIN Exercises ON PresetExercises.exerciseId = Exercises.id WHERE presetId = '" + presetID + "';";
    let res = await conn.promise().query(query);
    return res[0];
}

let getWorkoutPresetById = async (args) => {
    let id = args.id;
    let query = "SELECT * FROM WorkoutPresets WHERE id = '" + id + "';";
    let res = await conn.promise().query(query);
    let exercises = await getPresetExercises(args);
    //construct result.
    let finalres = res[0][0];
    finalres.exercises = exercises;
    return finalres;
}

module.exports = {
    getWorkoutPresetById
}