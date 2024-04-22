const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Task = require('./models/Task');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/vue-todo-list')
  .then(() => console.log('Connected to MongoDB database'))
  .catch((err) => console.log(err));


app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.route('/tasks')
  .get(async (req, res) => {
    /*
    * GET all tasks
    * */

  const tasks = await Task.find();
  res.send(tasks);
}).post(async (req, res) => {
  /*
  * CREATE new task
  * */

  const { body } = req;

  const task = new Task(body);
  await task.save();
  res.send(task);
});

app.route('/tasks/:id')
  .get(async (req, res) => {
    /*
    * GET a specific task
    * */

    const { id } = req.params;

    const task = await Task.findById(id);
    res.send(task);
}).put(async (req, res) => {
  /*
   * UPDATE a specific task
   * */

  const { params: { id }, body} = req;

  const task = await Task.findByIdAndUpdate(id, body, { new: true });
  res.send(task);
}).delete(async (req, res) => {
  /*
   * DELETE task
   * */

  const { id } = req.params;

  const task = await Task.findByIdAndDelete(id);
  res.send(task);
});


app.get('/', (req, res) => {
  res.send('Node.js backend for VueTodoList running!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});