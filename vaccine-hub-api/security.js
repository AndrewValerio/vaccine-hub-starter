const bcrypt = require("bcrypt")

 const pw = "password"

 bcrypt.hash(pw, 6, (err, hashedPw) => {
    console.log(`Password is ${pw}`)
    console.log(`Hashed Password is ${hashedPw}`)
 })

 