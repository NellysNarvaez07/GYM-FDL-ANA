const { app } = require("./bin/routes")

app.listen(3000, () => {
  console.clear()
  console.log("Server on port http://localhost:3000");
});