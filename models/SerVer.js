const mongoose = require("mongoose")

const SerVerSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
});

module.exports = mongoose.model("SerVer", SerVerSchema);

