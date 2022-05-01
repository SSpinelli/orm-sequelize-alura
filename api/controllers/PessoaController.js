const Model = require('../models')

class PessoaController {
  static async getAllPeople(req, res) {
    try {
      const allPeople = await Model.Pessoas.findAll();
      return res.status(200).json(allPeople);
    } catch(err) {
      return res.status(500).json(err.message);
    }
  }

  static async getPersonById(req, res) {
    const { id } = req.params;
    try {
      const person = await Model.Pessoas.findOne( { where: { id: Number(id) } } );
      return res.status(200).json(person);
    } catch(err) {
      return  res.status(500).json(err.message);
    }
  }

  static async createPerson(req, res) {
    const newPerson = req.body;
    try {
      const createdPerson = await Model.Pessoas.create(newPerson);
      return res.status(200).json(createdPerson);
    } catch (err) {
      return  res.status(500).json(err.message);
    }
  }

  static async updatePerson(req, res) {
    const { id } = req.params;
    const updatedInfo = req.body;
    try {
      await Model.Pessoas.update(updatedInfo, { where: { id: Number(id) } })
      const updatedPerson = await Model.Pessoas.findOne( { where: { id: Number(id) } } );
      return res.status(200).json(updatedPerson)
    } catch (err) {
      return  res.status(500).json(err.message);
    }
  }

  static async deletePerson(req, res) {
    const { id } = req.params;
    try {
      await Model.Pessoas.destroy({ where: { id: Number(id) } })
      return res.status(200).json({ message: `id ${id}, foi deletado.` })
    } catch (err) {
      return  res.status(500).json(err.message);
    }
  }

  static async getRegistrationById(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      const registration = await Model.Matriculas.findOne( { 
        where: {
           id: Number(matriculaId),
           estudante_id: Number(estudanteId),
        }
      });
      return res.status(200).json(registration);
    } catch(err) {
      return  res.status(500).json(err.message);
    }
  }

  static async createRegistration(req, res) {
    const { estudanteId } = req.params;
    const info = { ...req.body, estudante_id: Number(estudanteId) };
    try {
      const newRegistration = await Model.Matriculas.create(info);
      return res.status(200).json(newRegistration);
    } catch(err) {
      return  res.status(500).json(err.message);
    }
  }

  static async updateRegistration(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const info = { ...req.body };
    try {
      await Model.Matriculas.update(info, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });
      const updatedRegistration = await Model.Matriculas.findOne( { 
        where: {
           id: Number(matriculaId),
           estudante_id: Number(estudanteId),
        }
      });
      return res.status(200).json(updatedRegistration);
    } catch(err) {
      return  res.status(500).json(err.message);
    }
  }

  static async deleteRegistration(req, res) {
    const { matriculaId } = req.params;
    try {
      await Model.Matriculas.destroy({ where: { id: Number(matriculaId) } });
      return res.status(200).json({ message: `Matrícula com id ${matriculaId} foi deletada com sucesso` });
    } catch(err) {
      return  res.status(500).json(err.message);
    }
  }
}

module.exports = PessoaController;