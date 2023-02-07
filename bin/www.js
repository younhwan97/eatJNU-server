const server = require("../app")
const PORT = 8080

// ssh -i "eatJNU_password.pem" ubuntu@ec2-15-164-250-158.ap-northeast-2.compute.amazonaws.com

server.listen(PORT, () => {
    console.log(`Success: Started Eat JNU server!`);
})