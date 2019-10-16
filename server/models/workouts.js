/**
 * Get and add exercise data from database.
 */
const conn = require('../database/connect.js');


let getWorkoutSets = async (workoutID) => {
    let query = `
    SELECT 
        Sets.id,
        Sets.workoutId,
        Exercises.id AS exerciseId,
        Exercises.title AS exerciseTitle,
        Sets.weight,
        Sets.reps,
        Sets.timestamp
    FROM Sets LEFT JOIN Exercises ON Sets.exerciseId = Exercises.id WHERE workoutId = ` + workoutID + ";";
    let res = await conn.promise().query(query);
    return res[0];
}

/**
 * Get workout by a certain ID.
 * @param {*} args 
 */
let getWorkoutById = async (args) => {
    //Get the workout.
    console.log(args);
    let workoutID = args.id;
    let query = "SELECT * FROM Workouts WHERE id = " + workoutID + ";";
    let res = await conn.promise().query(query);
    let sets = await getWorkoutSets(res[0][0].id);
    let finalres = res[0][0];
    finalres.sets = sets;
    return finalres;
}

/**
 * Get workouts that has been performed by a specific user.
 * @param {*} args 
 */
let getUserWorkouts = async ({ id }) => {
    let userID = args.id;
    let query = "SELECT * FROM Workouts WHERE userId = " + userID + ";";
    let res = await conn.promise().query(query);
    let finalres = res[0];
    finalres.forEach(workout => {
        let sets = getWorkoutSets(workout.id);
        workout.sets = sets;
    });
    return finalres;
}

/**
 * Get workouts that correspond to a certain workout preset.
 * @param {*} args 
 */
let getWorkoutsByPresetId = async (args) => {
    let presetID = args.id;
    let query = "SELECT * FROM Workouts WHERE presetId = " + presetID + ";";
    let res = await conn.promise().query(query);
    let finalres = res[0];
    finalres.forEach(workout => {
        let sets = getWorkoutSets(workout.id);
        workout.sets = sets;
    });
    return finalres;
}


/**
 * Add a new workout.
 * @param {*} args 
 */
let addWorkout = async ({ userId, presetId, name }) => {
    let query = "INSERT INTO Workouts (userId, presetId, name) VALUES ("
        + userId + ", "
        + presetId + ", '"
        + name + "');";
    let res = await conn.promise().query(query);
    return getWorkoutById({ id: res[0].insertId });
}

/**
 * Add a set of some exercise to an existing workout.
 * @param {*} args 
 */
let addSetToWorkout = async ({ workoutId, exerciseId, weight, reps }) => {
    let query = "INSERT INTO Sets (workoutId, exerciseId, weight, reps) VALUES ("
        + workoutId + ", "
        + exerciseId + ", "
        + weight + ", "
        + reps + ");"
    await conn.promise().query(query);
    return getWorkoutById({ id: workoutId });
}

/**
 * Remove a set of some exercise to an existing workout.
 * @param {*} args 
 */
let removeSetFromWorkout = (args) => {

}


module.exports = {
    getWorkoutById,
    getUserWorkouts,
    getWorkoutsByPresetId,
    addWorkout,
    addSetToWorkout
}