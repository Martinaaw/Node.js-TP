import Movie from "../models/mongoDB/movie.js"

export const movieController = {
    async getAll(req, res) {
        const movies = await Movie.find()
        movies.length ?
        res.status(200).json({succes: true, message:"movies", data: movies })
        :
        res.status(404).json({succes: false, message: "no hay movies"})
    },


    async createOne(req, res){
        const {title, year, director, genre , rating}= req.body
        try {
            const newMovie = new Movie({
                title, year, director, genre , rating
            })
            const savedMovie = await newMovie.save()
            res.status(200).json({succes: true, message:"new movie", data: savedMovie })

        } catch(error) {
            res.status(500).json({ succes: false, message: "error"})
        }
    },
    async updateOne(req, res) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            
            if (!updatedMovie) {
                return res.status(404).json({ success: false, message: "Movie not found" });
            }
    
            res.status(200).json({ success: true, message: "Movie updated", data: updatedMovie });
        } catch (error) {
            res.status(500).json({ success: false, message: "Error updating movie"});
        }
    },
    

async deleteOne(req, res){
try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
    if (!deletedMovie) {
        return res.status(404).json({ succes: false, message: "Movie Deleted"})
    }
    res.status(204).send(); 
} catch (error) {
    res.status(500).json({ succes: false, message: "error"})
}
},

    }
    
