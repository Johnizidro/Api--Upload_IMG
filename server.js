const express = require("express");
require("./config/db");
const tarefasRoutes = require("./routes/serverRoutes");
const SerVer = require("./models/SerVer");
const app = express();
const PORT = 3000;
app.use(express.json());
const cors = require("cors");

app.use(cors());



app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Bem Vindo à API!");
});

// app.delete("/tarefas/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const tarefas = await SerVer.findByIdAndDelete(id);
//     if (!tarefas) {
//       return res.status(404).json({ erro: "Tarefa não encontrada" });
//     }
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ erro: "Erro ao remover tarefa" });
//   }
// });

// app.get("/tarefas/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const tarefas = await SerVer.findById(id);
//     if (!tarefas) {
//       return res.status(404).json({ erro: "Tarefa não encontrada" });
//     }
//     res.status(219).json(tarefas);
//   } catch (error) {
//     res.status(500).json({ erro: "Erro, tarefa não encontrada" });
//   }
// });


