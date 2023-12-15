const { Op } = require("sequelize");
const { Report } = require("../model/Report.js");
class CrudeNews {
  async createReport(req, res) {
    try {
      const { newsAgancy, text, headline } = req.body;
      if (newsAgancy == null || text == null || headline == null) {
        throw res.status(422).send("Please provide all requested data.");
      }
      const date = new Date();
      const report = await Report.create({
        newsAgancy: newsAgancy,
        text: text,
        headline: headline,
        createdAt: date.toLocaleDateString("en-US"),
      });
      res.status(201).send(report);
    } catch (error) {
      return error;
    }
  }
  async updateReport(req, res) {
    try {
      const { reportId, newsAgancy, text, headline } = req.body;
      const report = await Report.findByPk(reportId);

      if (report) {
        report.newsAgancy = newsAgancy;
        report.text = text;
        report.headline = headline;

        await report.save();
        res.send(report);
      } else {
        throw res.status(404).send("Report not found.");
      }
    } catch (error) {
      return error;
    }
  }
  async deleteReport(req, res) {
    try {
      const { reportId } = req.body;
      const report = await Report.findByPk(reportId);

      if (report) {
        await report.destroy();
        res.status(201).send(report);
      } else {
        throw res.status(404).send("Report not found.");
      }
    } catch (error) {
      return error;
    }
  }
  async searchReport(req, res) {
    try {
      const { newsAgancy, createDate } = req.query;
      console.log(newsAgancy);
      console.log(typeof createDate);
      let reports;
      if (createDate == null && newsAgancy == null) {
        throw res.status(422).send("Please provide all requested data.");
      }

      if (createDate == null) {
        reports = await Report.findAll({
          where: {
            newsAgancy: newsAgancy,
          },
        });
      } else if (newsAgancy == null) {
        return res.status(200).send(reports);
      } else if (newsAgancy == null) {
        reports = await Report.findAll({
          where: {
            createdAt: createDate,
          },
        });

        return res.status(200).send(reports);
      } else {
        reports = await Report.findAll({
          where: {
            [Op.or]: [{ newsAgancy: newsAgancy }, { createdAt: createDate }],
          },
        });
      }
      res.status(200).send(reports);
    } catch (error) {
      return error;
    }
  }
}
module.exports = new CrudeNews();
