const mongoose = require('mongoose');

const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    require: [false, 'Please tell your First name'],
  },
  last_name: {
    type: String,
    require: [false, 'Please tell your Last name'],
  },
  email: {
    type: String,
    require: [true, 'email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  role: { type: String, required: false, default: 'customer' },
  password: {
    type: String,
    require: [true, 'password is required'],
    minlength: 8,
    // select: false, //use for hide from sending to postman
  },
  gender: { type: String },
  // passwordConfirm: {
  //   type: String,
  //   require: [true, 'Please confirm your password'],
  //   //This only works on CREATE and SAVE (not for update)
  //   validate: {
  //     validator: function (el) {
  //       return el === this.password;
  //     },
  //     message: 'Password are not same',
  //   },
  // },
  createdAt: { type: String, default: new Date().toISOString().split('T')[0] },
});

// //decrypt password
// userSchema.pre('save', async function (next) {
//   //only run if password is not modified
//   if (!this.isModified('password')) return next();

//   this.password = await bcrypt.hash(this.password, 12);

//   this.passwordConfirm = undefined;

//   next();
// });

// userSchema.methods.correctPassword = async (incomingPassword, userPassword) =>
//   await bcrypt.compare(incomingPassword, userPassword);

module.exports = mongoose.model('Users', userSchema);
