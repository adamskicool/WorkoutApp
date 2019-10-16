let { buildSchema } = require('graphql');
//GraphQL Schema
let schema = buildSchema(`
    type Query {
        allExercises : [Exercise],
        exerciseById (id: Int!): Exercise,        
        exercisesByMuscleAreaId (id: Int!): [Exercise],
        exerciseByTitle (title: String!): [Exercise],
        workoutPresetById (id: Int!): WorkoutPreset,
        workoutById (id: Int!): Workout,
        userWorkouts (id: Int!): [Workout],
        workoutsByPresetId (id: Int!): [Workout]
    }
    type Mutation {
        addExercise (title: String, description: String, muscleAreaId: Int!): Exercise,
        addWorkoutPreset (name: String!, exercises: [Int]!): WorkoutPreset,
        addWorkout(userId: Int!, presetId: Int!, name: String!): Workout,
        addSet(workoutId: Int!, exerciseId: Int!, weight: Int!, reps: Int!): Workout
    }
    type Exercise {
        id: Int,
        title: String,
        description: String,
        muscleAreaId: Int
    }
    type WorkoutPreset {
        id: Int,
        name: String,
        exercises: [Exercise]
    }
    type Workout {
        id: Int,
        name: String,
        userId: Int,
        presetId: Int,
        timestamp: String,
        sets: [Set]
    }
    type Set {
        id: Int,
        workoutId: Int,
        exerciseId: Int,
        exerciseTitle: String,
        weight: Int,
        reps: Int,
        timestamp: String
    }
`);

module.exports = { schema };