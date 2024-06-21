const jsonServer = require("json-server");

const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");

//const server = jsonServer.create();
const router = jsonServer.router("./db/db.json");
const cors = require("cors");
const middlewares = jsonServer.defaults();
const app = express();
//const port = process.env.PORT || 3000;

app.use(cors());
app.use(middlewares);
app.use(router);

app.get('/sms', async (req,res) =>{
  const url= "https://api.iagentesms.com.br/webservices/http.php?metodo=envio&usuario=yasyasmin584@gmail.com&senha=X62MguK@3uuD@e#&celular=31981196855&mensagem=teste+integracao+http";
  await fetch(url).then((response) => response.text()).then((text) => {
    if(text === "OK"){
      res.send("deu certo");
    }
    res.send("erro");
  })
})


app.post("/send-email", async (req, res) => {

  
  //const { to, subject, text } = req.body;
  console.log('chamando a rota');
  // Configuração do Nodemailer
  const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    auth: {
      user: "yasmin.goncalves@sejaefi.com.br",
      pass: "GN@2024y",
    },
  });

  transport
    .sendMail({
      from: "Equipe 60 + Tech <servico60maisTech@hotmail.com>",
      to: "yasyasmin584@gmail.com",
      subject: "assunto",
      text: "olá teste com nodemailer",
    })
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
/*const mailOptions = {
    from: "Equipe 60 + Tech <servico60maisTech@hotmail.com>",
    to: to,
    subject: subject,
    text: text,
  };

  // Envie o e-mail
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      res.status(500).send("Erro ao enviar e-mail");
    } else {
      console.log("E-mail enviado:", info.response);
      res.status(200).send("E-mail enviado com sucesso");
    }
  });*/
});

app.listen(3000, () => {
  console.log("JSON Server is running em port:3000");
});
