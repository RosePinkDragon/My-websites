import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {type:String, required: true},
  email: {unique:true, type:String, required: true},
  password: {type:String, required:true},
  isAdmin: {type: Boolean, default:false, required:true}
}, {
  timestamp: true,
})

const User = mongoose.model('User', userSchema);
export default User;
