const mongoose = require("mongoose");
const { subscribe } = require("../routes/uploadRoutes");

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        reuqired: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    subscribedAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Subscriber", subscribeSchema);