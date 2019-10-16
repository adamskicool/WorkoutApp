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

let addWorkoutPreset = async ({ name, exercises }) => {
    console.log(exercises);
    let query = "INSERT INTO WorkoutPresets (name) VALUES ('" + name + "');";
    let res = await conn.promise().query(query);
    for (var i = 0; i < exercises.length; i++) {
        await addPresetExercise({ workoutPresetId: res[0].insertId, exerciseId: exercises[i] });
    }
    return getWorkoutPresetById({ id: res[0].insertId })
}

let addPresetExercise = async ({ workoutPresetId, exerciseId }) => {
    let query = "INSERT INTO PresetExercises (presetId, exerciseId) VALUES (" + workoutPresetId + ", " + exerciseId + ");";
    await conn.promise().query(query);
}

module.exports = {
    getWorkoutPresetById,
    addWorkoutPreset
}