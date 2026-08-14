const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("frontend"));
app.use(express.json());


var users = [

    {
        "id": 1,
        "name": "jiljana Spasojević",
        "gender": "female",
        "image" : "https://randomuser.me/api/portraits/women/64.jpg"
    },
    {
        "id": 2,
        "name": "Ognyana",
        "gender": "female",
        "image" : "https://randomuser.me/api/portraits/women/85.jpg"
    },
    {
        "id" : 3,
        "name": "Shivansh",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        "id" : 4,
        "name": "David",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        "id" : 5,
        "name": "Cristina",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/37.jpg"
    },
    {
        "id" : 6,
        "name": "Inesita",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/92.jpg"
    },
    {
        "id" : 7,
        "name": "Violetta",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
        "id" : 8,
        "name": "Goncharenko",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/25.jpg"
    },
    {
        "id" : 9,
        "name": "Soledad",
        "gender" : "female",
        "image" : "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
        "id" : 10,
        "name": "Gordyata",
        "gender" : "male",
        "image" : "https://randomuser.me/api/portraits/men/88.jpg"
    }

]
var nextId = 11;

function findIndex(id){
    for(var i=0; i<users.length; i++){
        if(id === users[i].id){
            return i;
        }
    }
    return -1;
}

app.get("/api/users", function(req, res){
    return res.json(users);
});

app.get("/api/users/:id", function(req, res){
    var id = Number(req.params.id);
    var index = findIndex(id);

    if(index === -1){
        return res.status(404).json({"message": "User not found with id : " + id});
    }
    var user = users[index];
    return res.json(user);
});

app.get("/api/random-user", function(req, res){
    if(users.length === 0){
        return res.status(404).json({"message": "No user found"});
    }
    var randomIndex = Math.floor(users.length * Math.random());
    return res.json(users[randomIndex]);
});



app.post("/api/users", function(req, res){
    var newUser = req.body;
    var tempuser = {
        "id" : nextId,
        "name" : newUser.name,
        "gender" : newUser.gender,
        "image" : newUser.image
    };
    nextId = nextId + 1;
    users.push(tempuser);
    return res.status(201).json({"message": "User created successfully",
        "user" : tempuser});
})

app.listen(port, function(){
    console.log("Server running on http://localhost:" + port);
});