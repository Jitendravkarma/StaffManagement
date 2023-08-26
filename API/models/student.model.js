//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const StudentSchema = mongoose.Schema({
  _id: Number,
  roll: {
    type: Number,
    required: [true,"Roll number is required"],
    trim: true,
  },
  name: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: [true,"Mobile is required"],
    maxlength: 10,
    minlength:10,
    trim: true
  },
  gender: {
    type: String,
    required: [true,"Gender is required"],
  },
  class: {
    type: String,
    required: [true,"Class is required"],
    trim: true
  },
  branch: {
    type: String,
    trim: true
  },
  hindi: {
    type: String,
    required: [true,"Hindi marks is required"],
    maxlength: 100,
    minlength:0,
    trim: true
  },
  english: {
    type: String,
    required: [true,"English marks is required"],
    maxlength: 100,
    minlength:0,
    trim: true
  },
  maths: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  social: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  science: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  sanskrit: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  biology: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  physics: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  chemistry: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  account: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  business: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  economics: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  history: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  political: {
    type: String,
    maxlength: 100,
    minlength:0,
    trim: true
  },
  address: {
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to StudentSchema.
StudentSchema.plugin(uniqueValidator);

// compile schema to model
const StudentSchemaModel = mongoose.model('student_collection',StudentSchema);

export default StudentSchemaModel