import { app } from "./app";

app.listen(3333, () => {console.log("Servidor rodando na porta 3333")});


//  // http://localhost:3333/users

// app.get("/", (req, res) => {
//   return res.json({message: "Hello World!"})
// });

//  // 1º parâmetro = Rota (recurso da API)
//  // 2º parâmetro = request, response

// app.post("/", (req, res) => {
//   // recebe dados
//   return res.json({message: "Dados salvos com sucesso!"})
// })
