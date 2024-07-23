import { Schema, model, models } from "mongoose";

const CareerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const Career = models.Career || model("Career", CareerSchema);

export default Career;
export type CareerType = {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
};
