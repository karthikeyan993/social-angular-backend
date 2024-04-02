const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  userImage: { type: String, required: true },
  postType: { type: String, required: true },
  posts: {
    textpost: {
      content: { type: String },
    },
    imagepost: {
      imageUrl: { type: String },
      description: { type: String },
    },
    poll: {
      question: { type: String },
      options: [{ type: String }],
    },
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
