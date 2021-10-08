const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 5000

const engine = require("consolidate");

app.use(express.static(path.join(__dirname, "public")))
	.set("views", path.join(__dirname, "views"))
	.engine("html", engine.mustache)
	.set("view engine", "html")
	.get("/", (req, res) => res.render("index.html"))

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`)
});