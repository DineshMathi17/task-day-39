const { error } = require("console");
const express = require ("express")
const fs = require("fs")
const path = require("path")


const dirpath = path.join(__dirname, "timestamps");

const app = express()

app.use(express.static("timestamps"))

app.get("/",(req,res)=>{
    res.send("Display data success")
})

app.get('/static', (req, res) => {
    let time = new Date();
    let deteString = time.toUTCString().slice(0, -3);
    let content = `current time and date :${deteString}`
    
    fs.writeFileSync(`${dirpath}/date-time.txt`, content, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("file created sucessfuly")
        }
    })
    res.sendFile(path.join(__dirname, "timestamps/date-time.txt"))
})


app.listen(9000, ()=>console.log(`server started in localhost:9000`))