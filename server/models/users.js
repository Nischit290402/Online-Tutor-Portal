const mongoose = require("mongoose");
const uuidv4=require("uuid").v4;
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
    },
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    // firstName: String,
    // lastName: String,
    // type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

// export const USER_TYPES = {
//   CONSUMER: "consumer",
//   SUPPORT: "support",
// };


/**
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object} new user object created
 */
UserSchema.statics.createUser = async function (firstName, lastName, type) {
  try {
    const x="12345@gmail.com";
    const y="tutor";
    const z="mmrr razee";
    const user = await this.create({ email:x,role:y,name:z });
    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {String} id, user id
 * @return {Object} User profile object
 */
UserSchema.statics.getUserById = async function (id) {
  try {
    const user = await this.findOne({ _id: id });
    if (!user) throw ({ error: 'No user with this id found' });
    return user;
  } catch (error) {
    throw error;
  }
}

/**
 * @return {Array} List of all users
 */
UserSchema.statics.getUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {Array} ids, string of user ids
 * @return {Array of Objects} users list
 */
UserSchema.statics.getUserByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } });
    return users;
  } catch (error) {
    throw error;
  }
}

/**
 * @param {String} id - id of user
 * @return {Object} - details of action performed
 */
UserSchema.statics.deleteByUserById = async function (id) {
  try {
    const result = await this.remove({ _id: id });
    return result;
  } catch (error) {
    throw error;
  }
}

module.exports = mongoose.model("User", UserSchema);
