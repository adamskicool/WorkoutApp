import gql from 'graphql-tag'

export const GET_WORKOUT_BY_ID = gql`
    fragment WorkoutFields on Workout {
        id
        name
        userId
        presetId
        timestamp
        sets{
            ...SetFields
        }
    }
    fragment SetFields on Set{
        id
        workoutId
        exerciseId
        exerciseTitle
        weight
        reps
        timestamp
    }
    query getWorkoutByID($workoutID:Int!){
        workoutById(id:$workoutID){
            ...WorkoutFields
        }
    }
`