const User = require("../../models/user");

module.exports = {
  users: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw err;
    }
  },
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const user = new User({
        email: args.userInput.email,
        name: args.userInput.name,
      });

      const result = await user.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
};
