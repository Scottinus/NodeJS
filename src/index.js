const express = require("express");
const router = express.Router();
const fs = require("fs");


//Method GET ALL
router.get("/", (req, res) =>{
    var projects = fs.readFileSync("projectList.json");
    console.log(JSON.parse(projects));
    res.send(projects);   

})

//METHOD GET BY PARAMS
router.get("/:id", (req,res)=>{
    var projects = fs.readFileSync("projectList.json");
    const{id} = req.params;
    var parse_proj = JSON.parse(projects);
    var singleProj = parse_proj.find(p =>
        p.id == id
    );
    res.send(singleProj);
})

//POST METHOD
router.post("/", (req,res)=>{
    console.log(req.body)
    var projects = fs.readFileSync("projectList.json")
        var parse_proj = JSON.parse(projects.toString())
        console.log(parse_proj)
        parse_proj.push(req.body)
        projects = JSON.stringify(parse_proj)
        fs.writeFileSync('./projectList.json', JSON.stringify(parse_proj))
        console.log(projects)
        res.send("ok")
})

//PUT METHOD
router.put("/:id", (req,res)=>{
    console.log("req body:" , req.body);
    var projects = fs.readFileSync("projectList.json")
    const{id} = req.params;
    var parse_proj = JSON.parse(projects.toString())
    var singleProj = parse_proj.find(p =>
        p.id == id
    )
   console.log("the element is: ", singleProj)
    //singleProj.push(req.body)
    console.log("now is: " ,singleProj)
 
        res.send("put ok")
})

module.exports = router;