const { AuthenticationError } = require('apollo-server-express');
const { Book, Index, User } = require('../models');


const resolvers = {
    Query:{
    me: async (parent, args, context) => {
        console.log("useringormation",constext.user);
        return await User.findById(context.user._id);
    },
  
    },
    
    
    Mutation: {
      /*createBook: async (parent, { user }) => {
        return await book.create({ user });
      },*/
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


      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
            throw new AuthenticationError('Incorrect Username or Password.');
        }

        const passwordRight = await user.isCorrectPassword(password);

        if (!passwordRight) {
            throw new AuthenticationError('Incorrect Username or Password.');
        }
        const token = sighnToken(user);
        return { token, user };
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

