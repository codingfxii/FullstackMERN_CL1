import mongoose from 'mongoose';

// Define the schema for a post message
const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Ensuring the title is always provided
      trim: true, // Automatically trims whitespace from the title
      maxlength: 150, // Limiting the length of the title for consistency
    },
    message: {
      type: String,
      required: true, // Message is a required field
      minlength: 10, // Ensuring the message is at least 10 characters long
      maxlength: 2000, // Limiting the length of the message to avoid too long entries
    },
    creator: {
      type: String,
      required: true, // Creator is a required field
      trim: true, // Trims any leading or trailing spaces from the creator’s name
    },
    tags: {
      type: [String],
      default: [], // Default to an empty array if no tags are provided
      validate: {
        validator: function (value) {
          return value.every((tag) => typeof tag === 'string'); // Ensuring all tags are strings
        },
        message: 'Each tag must be a string', // Custom validation message
      },
    },
    selectedFile: {
      type: String,
      default: '', // Default empty string if no file is uploaded
    },
    likeCount: {
      type: Number,
      default: 0, // Default like count is 0
      min: [0, 'Like count cannot be negative'], // Enforcing a minimum value of 0
    },
    createdAt: {
      type: Date,
      default: Date.now, // Automatically assigns the current date and time as default
    },
  },
  {
    timestamps: true, // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

// Create and export the PostMessage model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
