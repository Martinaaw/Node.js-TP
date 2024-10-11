import { mongoose }from 'mongoose';
const UserSchema = new mongoose.Schema({
 name: {type: String, required: [true,'Name is required']},
 email: {type: String, required: true, unique: true},
password: {type: String, required: true}
},
{timestamps: true} 
)

UserSchema.set("toJSON", {
    transform(_doc, ret){
        delete ret.password
    }
})

const User = mongoose.model("User", UserSchema)
export default User