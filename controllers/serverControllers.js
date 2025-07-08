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

exports.update = async (req, res) => {
  const { id } = req.params;
  const { descricao, titulo } = req.body;

  if (!descricao && !titulo) {
    return res
      .status(400)
      .json({ erro: "Preencha a nova descrição ou o novo título" });
  }

  try {
    const tarefas = await SerVer.findByIdAndUpdate(
      id,
      { titulo, descricao }, 
      { new: true } 
    );

    if (!tarefas) {
      return res.status(404).json({ erro: "Tarefa não existente" });
    }

    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao atualizar tarefa" });
  }
};
