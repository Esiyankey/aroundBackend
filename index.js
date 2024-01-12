const express = require("express")
const app = express()
const userRouter = require("./routes/userRouter")
const port = "5000"

app.use("/user",userRouter)

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})
