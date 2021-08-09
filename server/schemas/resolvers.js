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
    }
    
    Mutation: {
      createBook: async (parent, { user }) => {
        return await book.create({ user });
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

