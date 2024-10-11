import { mongoose } from "mongoose";
const Schema = mongoose.Schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    genre:{
        type: [String],
        required:true
    },
    rating:{
        type: Number,
        default: 5,
    },
},
 {
 timestamps: true 
})
movieSchema.index({ title: "text" })
const Movie = mongoose.model("movie", movieSchema)

export default Movie;