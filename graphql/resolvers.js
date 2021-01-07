import { getMoives } from "./api.db";
import { getMovies, getById, addMovie, deleteMoive } from "./db"

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMoives(limit, rating),
    }
};

export default resolvers