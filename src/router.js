const express = require("express");
const Ideas = require("../models/Ideas");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the our random ideas app");
});

//get all ideas
router.get("/ideas", async (req, res) => {
  try {
    const ideas = await Ideas.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//get a single idea
router.get("/ideas/:id", async (req, res) => {
  try {
    const idea = await Ideas.findById(req.params.id);
    return res.json({ success: true, data: idea });
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
});

//post an idea
router.post("/ideas", async (req, res) => {
  const idea = new Ideas({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });
  try {
    const newIdea = await idea.save();
    res.status(201).json({ success: true, data: newIdea });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

//update an idea
router.put("/ideas/:id", async (req, res) => {
  try {
    const updatedIdea = await Ideas.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

//delete an idea
router.delete("/ideas/:id", async (req, res) => {
  try {
    await Ideas.findByIdAndDelete(req.params.id);
    res.status(200).send("idea deleted successfully");
  } catch (error) {
    res.status(500).json({ error: "Somthing went wrong" });
  }
});

module.exports = router;
