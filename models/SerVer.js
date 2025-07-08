const mongoose = require("mongoose")

const SerVerSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true }
});

module.exports = mongoose.model("SerVer", SerVerSchema);

