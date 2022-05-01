const Model = require('../models')

class NivelController {
  static async getAllLevels(_req, res) {
    try {
      const allLevels = await Model.Niveis.findAll();
      res.status(200).json(allLevels);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async getLevelById(req, res) {
    const { id } = req.params;
    try {
      const level = await Model.Niveis.findOne({ where: { id: Number(id) } })
      res.status(200).json(level)
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async createLevel(req, res) {
    const newLevel = req.body;
    try {
      const createdLevel = await Model.Niveis.create(newLevel);
      res.status(200).json(createdLevel);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async updateLevel(req, res) {
    const { id } = req.params;
    const updatedInfo = req.body;
    try {
      await Model.Niveis.update(updatedInfo ,{ where: { id: Number(id) } });
      const updatedLevel = await Model.Niveis.findOne({ where: { id: Number(id) } });
      res.status(200).json(updatedLevel);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params;
    try {
      await Model.Niveis.destroy({ where: { id: Number(id) } })
      res.status(200).json({ message: `Level com o id ${id} deletado!` })
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

module.exports = NivelController;