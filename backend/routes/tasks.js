import express from "express";
import Task from "../models/Task.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// @route   POST /tasks
// @desc    Create task
// @access  Private
router.post("/", protect, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Task text is required" });
    }

    const task = await Task.create({
      text,
      user: req.user._id,
    });

    res.status(200).json({ task, message: "Task created" });
  } catch (error) {
    res.status(500).json({ message: `Server error ${error}` });
  }
});

// @route   POST /tasks
// @desc    Read task
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: `Server error ${error}` });
  }
});

// @route   PUT /tasks/:id
// @desc    Update task
// @access  Private
router.put("/:id", protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(400).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Not authorized" });
    }

    task.text = req.body.text ?? task.text;
    task.completed = req.body.completed ?? task.completed;

    const updatedTask = await task.save();
    res
      .status(200)
      .json({
        _id: updatedTask._id,
        text: updatedTask.text,
        completed: updatedTask.completed,
        user: updatedTask.user,
        message: "Task updated successfully",
      });
  } catch (error) {
    res.status(500).json({ message: `Server error ${error}` });
  }
});

// @route   DELETE /tasks/:id
// @desc    Delete task
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(400).json({ message: "Task not found" });
    }

    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Not authorized" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Task removed" });
  } catch (error) {
    res.status(500).json({ message: `Server error ${error}` });
  }
});

export default router;
