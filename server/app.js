const express = require("express");
const graphQLHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect(
  "mongodb+srv://kdav:1wewoL1SIB1t8bs5@cluster0-ujybv.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/api",
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Now I'm listening for requests on port 4000");
});
