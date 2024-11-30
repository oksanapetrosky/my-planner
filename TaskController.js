const TaskModel = require('./TaskModel');

// GET: Fetch tasks for a specific date
module.exports.getTasks = async (req, res) => {
    const { date } = req.query;
    const tasks = await TaskModel.find({ date });
    res.send(tasks);
};

//POST: add a new task
module.exports.saveTask = async (req, res) => {
    const { title, date } = req.body;
    TaskModel.create({ title, date })
    .then((data) => {
        console.log('Task added!');
        res.send(data);
    })
    .catch((err) => res.status(500).send(err));
};

//PUT: edit a task
module.exports.editTask = async (req, res) => {
    const { _id, title, date, status } = req.body; // Add status to the request body
    TaskModel.findByIdAndUpdate(_id, { title, date, status })
        .then(() => res.send('Task is edited!'))
        .catch((err) => res.status(500).send(err));
};

//DELETE: Remove a task

module.exports.deleteTask = async (req, res) => {
    const {_id} = req.body;
    TaskModel.findByIdAndDelete(_id)
    .then(() => res.send('Task is deleted!'))
    .catch((err) => res.send(500). send(err));
};
