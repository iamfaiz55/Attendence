const mongoose = require("mongoose");

const attendenceSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    studId: {
      type: mongoose.Types.ObjectId,
      ref: "students",
      required: true,
    },
    isPresent: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "offline",
      enum: ["offline", "online"],
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("attendence", attendenceSchema);
