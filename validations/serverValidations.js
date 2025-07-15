const joi = require("joi");

const SerVerSchema = joi.object({
  descricao: joi.string().min(3).required().messages({
    "string.base": "Descrição deve ser em texto",
    "string.empty": "Descrição obrigatória",
    "string.min": "Descrição deve ter pelo menos 3 caracteres",
    "any.required": "Descrição obrigatória",
  }),
});

module.exports = { SerVerSchema };