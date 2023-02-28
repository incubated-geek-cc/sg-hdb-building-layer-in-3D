const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 5000
const engine = require("consolidate");
const compression = require('compression');
// set up router
var router = express.Router();
router.use(
  express.urlencoded({ extended: true })
)
router.use(express.json())
router.use((req, res, next) => { // router middleware
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
});
// REGISTER ALL ROUTES -------------------------------
// Compress all HTTP responses
app.use(compression());
app.use("/api", router); // all of the routes will be prefixed with /api

router.get("/wake_up", (req, res) => {
  res.json({"status":"app_is_awake"});
});

app.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.engine("html", engine.mustache)
	.set("view engine", "html")
	.get("/", (req, res) => res.render("index.html"))
	.listen(port, () => {
		console.log(`Example app listening on port ${port}!`)
	});