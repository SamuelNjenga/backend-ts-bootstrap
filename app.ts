import express from "express";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import rateLimit from "express-rate-limit";

import routes from "./src/main/routes/index";

const app = express();

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions: cors.CorsOptions = {
  // origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 1000,
});

app.use("/api/", apiLimiter);

app.use("/api/v1/", routes);

// app.set("views", path.join(__dirname, "./src/main/views"));
// app.set("view engine", "ejs");

// app.get("/upload", (req, res) => {
//   res.render("upload");
// });

export default app;
