const epxress = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

//dotenv config
dotenv.config();

//rest object
const app = epxress();

//middlewares
app.use(epxress.json());
app.use(morgan("dev"));

//routes
app.get("/", (request, response) => {
  response.status(200).send({
    message: "server running",
  });
});

//port
const port = process.env.PORT || 8080;

//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});
