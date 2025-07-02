const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 6 
    } }
  , {timestamps: true});

userSchema.pre('save',async(next)=>{
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next() ;
})

userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(enterPwd,this.password);

};

module.exports = mongoose.model('User', userSchema);

