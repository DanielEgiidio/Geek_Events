import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  LastName: { type: String, required: true },
  photo: { type: String, required: true },
});

const User = models.User || model("Usuário", UserSchema);

export default User;
