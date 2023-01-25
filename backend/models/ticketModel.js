const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    concern: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
    },
    subject: {
        type: String,
    },
    details: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Active", "Closed"],
        default: "Active",
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ticketSchema.pre("save", function (next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

module.exports = new mongoose.model("Ticket", ticketSchema);