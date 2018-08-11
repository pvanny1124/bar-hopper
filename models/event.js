var mongoose = require("mongoose");

var EventSchema = new mongoose.Schema({
    eventName: String,
    capacity: String,
    city: String,
    state: String,
    date: Date,
    time: String,
    title: String,
    address: String,
    type: String
});

module.exports = mongoose.model("Event", EventSchema);