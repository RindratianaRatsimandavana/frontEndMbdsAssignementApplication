// /Install express server
console.log('oui oui')
const express = require("express");
const path = require("path");
console.log('oui oui1')

const app = express();
console.log('oui oui2')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/assignement_application/browser"));
console.log('oui oui3')

app.get("/*", function (req, res) {
 res.sendFile(path.join(__dirname + "/dist/assignement_application/browser/index.html"));
});
console.log('oui oui4')

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8081);