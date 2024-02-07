const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("batch", batchSchema);
