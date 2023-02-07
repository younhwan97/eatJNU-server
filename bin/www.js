const server = require("../app")
const PORT = 80

server.listen(PORT, () => {
    console.log(`Success: Started Eat JNU server!`);
})