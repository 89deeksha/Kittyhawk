const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "kittycollection", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);
