const { Book, Index, User } = require('../models');

const resolvers = {
    Query:{
    allbooks: async () => {
        return await book.find();
      },
  
      getbook: async (parent, { bookId }) => {
        return await book.findOne({ _id: bookId });
      },
  
      getAllUser: async () => {
        return await User.find();
      },
  
    },
    
    
    Mutation: {
      createBook: async (parent, { user }) => {
        return await book.create({ user });
      },
      saveBook: async (parent, { bookId, user }) => {
        if (user_id) {
            const updatedUser = await User.findByIdAndUpdate(
                {_id: user_id },
                { $push: { savedBooks: { bookId } } },
                { new: true }
            );
            
        return updatedUser;
            }
        },
      removeBook: async (parent, { bookId, user }) => {
          if (user_id) {
              const updatedUser = await User.findOneAndUpdate(
                  {_id: user_id },
                  { $pull: { savedBooks: { bookId } } },
                  { new: true }
              );
              
          return updatedUser;

          }
      },
      createUser: async (parent, { bookId, userSchema }) => {
        return await book.findOneAndUpdate(
          { _id: bookId },
          {
           $inc: { [`user${userSchema}`]: 1 }, 
          },
          {
            new: true,
            runValidators: true,
          }
        );
      },
  
    },

};

module.exports = resolvers;

