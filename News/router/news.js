const express = require("express");
const router = express.Router();
const { Report } = require("../model/Report.js");
const newsCrude = require("../controller/newsController.js");
router.post("/createnews", (req, res) => {
  newsCrude.createReport(req, res);
});
router.put("/updateReport", (req, res) => {
  newsCrude.updateReport(req, res);
});
router.delete("/deleteReport", async (req, res) => {
  newsCrude.deleteReport(req, res);
});
router.get("/search", async (req, res) => {
  newsCrude.searchReport(req, res);
});

module.exports = { router };
