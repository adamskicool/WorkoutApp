let { buildSchema } = require('graphql');
//GraphQL Schema
let schema = buildSchema(`
    type Query {
        allExercises : [Exercise],
        exerciseById (id: Int!): Exercise,        
        exercisesByMuscleAreaId (id: Int!): [Exercise],
        exerciseByTitle (title: String!): [Exercise],
        workoutPresetById (id: Int!): WorkoutPreset
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
`);

module.exports = { schema };