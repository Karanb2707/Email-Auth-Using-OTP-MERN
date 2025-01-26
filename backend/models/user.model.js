import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      requried: true,
      unique: true,
    },
    password: {
      type: String,
      requried: true,
    },
    name: {
      type: String,
      requried: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpireAt: Date,
    verificationToken: String,
    verificationTokenExpireAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
