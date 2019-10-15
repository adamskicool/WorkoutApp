

const {
    getAllExercises,
    getExerciseById,
    getExercisesByMuscleAreaId,
    getExerciseByTitle
} = require('../models/exercises.js');

const {
    getWorkoutPresetById
} = require('../models/presets.js');

//Root resolver
var root = {
    allExercises: getAllExercises,
    exerciseById: getExerciseById,
    exercisesByMuscleAreaId: getExercisesByMuscleAreaId,
    exerciseByTitle: getExerciseByTitle,
    workoutPresetById: getWorkoutPresetById
}

module.exports = { root };