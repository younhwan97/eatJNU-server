const server = require("../app")
const PORT = 8080

server.listen(PORT, () => {
    console.log(`Success: Started Eat JNU server!`);
})