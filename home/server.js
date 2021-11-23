const express = require('express')
const mongoose = require('mongoose')
const app = express();
const Post  = require('./models/Post')

mongoose.connect ('mongodb+srv://admin:123qwe@cluster0.jbmyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
()=> console.log(`MongoDB is connected`)
)

app.get('/api/todos', (req,res)=> {
    Post.find({}).then(posts=>{
        res.json(posts)
    })
})
app.get("/api/todos/:id", (req, res) => {
    Post.findOne({ _id: req.params.id }).then(post => {
      res.json(post);
    });
  });

app.listen(3000, ()=> console.log(`Server is punning on port 3000`))