const SerVer = require("../models/SerVer");

exports.create = async (req, res) => {
  const { descricao, titulo } = req.body;

  if (!descricao || !titulo) {
    return res.status(400).json({ erro: "Preencha a descrição e o titulo" });
  }
  try {
    const novaTarefa = new SerVer({ descricao, titulo });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao incluir tarefa" });
  }
};
