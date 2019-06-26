import mongoose, { mongo } from "mongoose";

export const Cat = mongoose.model("Cat", {
  name: String
});
