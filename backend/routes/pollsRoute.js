const router = require("express").Router();

const { auth } = require("../middlewares/auth");
const {
    createPoll,
    fetchAllPolls,
    fetchRequiredPoll,
    deletePoll,
    castVote,
    removeVote,
    editPoll
} = require("../controllers/pollsController");


router.get("/fetchAllPolls", fetchAllPolls);
router.post("/fetchRequiredPoll", fetchRequiredPoll);

router.post("/createPoll", auth, createPoll);
router.delete("/deletePoll", auth, deletePoll);
router.put("/editPoll", auth, editPoll);

router.post("/castVote", auth, castVote);
router.delete("/removeVote", auth, removeVote);

module.exports = router;