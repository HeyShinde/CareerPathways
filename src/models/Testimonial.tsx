import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
