import express from "express";
import helmet from "helmet";
import compress from "compression";
import cors from "cors";
import services from "./services";

const app = express();
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"],
    },
  })
);
app.use(helmet.referrerPolicy({ policy: "same-origin" }));
app.use(compress());
app.use(cors());

const serviceNames = Object.keys(services);

serviceNames.forEach((key) => {
  const name = serviceNames[key];
  if (name === "graphql") {
    services[name].applyMiddleware({ app });
  } else {
    app.use(`/${name}`, services[name]);
  }
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first function");
    next();
  },
  (req, res) => {
    console.log("second function");
    res.send("Hello World!");
  }
);
app.listen(8000, () => console.log("I'm listening on 8000 port!!!"));
