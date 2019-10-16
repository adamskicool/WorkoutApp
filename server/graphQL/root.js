

const {
    getAllExercises,
    getExerciseById,
    getExercisesByMuscleAreaId,
    getExerciseByTitle,
    addExercise
} = require('../models/exercises.js');

const {
    getWorkoutPresetById,
    addWorkoutPreset
} = require('../models/presets.js');

const {
    getWorkoutById,
    getUserWorkouts,
    getWorkoutsByPresetId,
    addWorkout,
    addSetToWorkout
} = require('../models/workouts.js');



//Root resolver
var root = {
    allExercises: getAllExercises,
    exerciseById: getExerciseById,
    exercisesByMuscleAreaId: getExercisesByMuscleAreaId,
    exerciseByTitle: getExerciseByTitle,
    workoutPresetById: getWorkoutPresetById,
    workoutById: getWorkoutById,
    userWorkouts: getUserWorkouts,
    workoutsByPresetId: getWorkoutsByPresetId,
    addExercise: addExercise,
    addWorkoutPreset: addWorkoutPreset,
    addWorkout: addWorkout,
    addSet: addSetToWorkout
}

module.exports = { root };