import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Auth");
});

export default router;
