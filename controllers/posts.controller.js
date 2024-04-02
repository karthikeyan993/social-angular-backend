const Post = require("../models/posts.model");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to create a new post
exports.createPost = async (req, res) => {
  try {
    // Extract post data from request body
    const {
      timestamp,
      first_name,
      last_name,
      email,
      userImage,
      postType,
      posts,
    } = req.body;

    // Create a new post instance
    const newPost = new Post({
      timestamp,
      first_name,
      last_name,
      email,
      userImage,
      postType,
      posts,
    });

    // Save the new post to the database
    await newPost.save();

    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
