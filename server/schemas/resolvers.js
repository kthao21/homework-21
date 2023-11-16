const { Book, User } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return await Book.find({}).populate('').populate({
                path: '',
                populate: ''
            });
        },
        users: async () => {
            return await User.find({}).populate('').populate({
                path: '',
                populate: ''
            });
        }
    }
};

module.exports = resolvers;