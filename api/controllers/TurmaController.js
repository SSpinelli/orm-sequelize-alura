const Model = require('../models');

class TurmaController {
  static async getAllClasses(_req, res) {
    try {
      const allClasses = await Model.Turmas.findAll();
      res.status(200).json(allClasses);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async getClassById(req, res) {
    const { id } = req.params;
    try {
      const theClass = await Model.Turmas.findOne({ where: { id: Number(id) } });
      res.status(200).json(theClass);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async createClass(req, res) {
    const info = req.body;
    try {
      const newClass = await Model.Turmas.create(info);
      res.status(200).json(newClass);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async updateClass(req, res) {
    const { id } = req.params;
    const updatedInfo = req.body;
    try {
      await Model.Turmas.update(updatedInfo, { where: { id: Number(id) }});
      const updatedClass = await Model.Turmas.findOne({ where: { id: Number(id) } });
      res.status(200).json(updatedClass);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async removeClass(req, res) {
    const { id } = req.params;
    try {
      await Model.Turmas.destroy({ where: { id: Number(id) } });
      res.status(200).json({ message: `Turma com o id: ${id}, foi deletada.` });
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = TurmaController;