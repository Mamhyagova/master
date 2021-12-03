const express = require("express");
const mongoose = require("mongoose");

const TodoSchema = require("./models/Todo");

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

const db = "mongodb+srv://admin:123qwe@cluster0.jbmyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log("Connected to Mongodb"))
  .catch((err) => console.log(err));

const Todo = mongoose.model("todo", TodoSchema);

app.get("/api/todos/:id", (req, res) => {
  Todo.findOne({ _id: req.params.id }).then((todo) => {
    res.json(todo);
  });
});

app.get("/api/todos/", (req, res) => {
  Todo.find({}).then((todos) => {
    res.json(todos);
  });
});



app.post("/api/todos", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
  });
  newTodo.findByIdAndUpdate().then((todo) => res.json(todo));
});

app.delete("/:id", async (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
