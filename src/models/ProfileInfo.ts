import { model, models, Schema } from "mongoose";

type ProfilInfo = {
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
};

const profileInfoSchema = new Schema<ProfilInfo>(
  {
    username: { type: String, unique: true, required: true },
    displayName: { type: String },
    bio: { type: String },
    avatarUrl: { type: String },
    coverUrl: { type: String },
  },
  { timestamps: true }
);

const ProfileInfoModel =
  models?.ProfileInfo || model("ProfileInfo", profileInfoSchema);
