const http = require("http");
const fs = require("fs");

const options = {
  hostname: "200.137.175.36",
  port: 80,
  path: "/",
  method: "TRACE",
  headers: {
    "X-XST-Test": "exploit"
    // Se quiser enviar cookies, adicione aqui: "Cookie": "PHPSESSID=xxx; outro=yyy"
  }
};

const req = http.request(options, (res) => {
  let data = "";

  console.log(`Status: ${res.statusCode} ${res.statusMessage}`);

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Resposta recebida. Salvando no arquivo trace-response.txt...");
    fs.writeFileSync("trace-response.txt", data);
    console.log("Arquivo salvo com sucesso!");
  });
});

req.on("error", (error) => {
  console.error("Erro na requisição:", error);
});

req.end();
