import { Schema, models, model } from 'mongoose';

export interface UserType extends Document {
    clerkId: String,
    email: String,
    username: String,
    photo: String,
    firstName?: String,
    lastName?: String,
    planId?: String,
    creditBalance?: Number,
    createdAt?: Date,
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
    createdAt: { type: Date }
})

const User = models?.User || model('User', UserSchema);

export default User;