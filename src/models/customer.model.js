import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false, // To exclude password from query results by default
  }
}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;