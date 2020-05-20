import { Op } from 'sequelize';
import Estoque from '../models/Estoque';

class EstoqueController {
  async index(req, res) {
    const estoque = await Estoque.findAll({
      where: {
        codigo: {
          [Op.eq]: 172,
        },
        quantidade: {
          [Op.gt]: 0,
        },
        preco: {
          [Op.not]: null,
          [Op.not]: 0,
        },
        desconto: {
          [Op.not]: null,
        },
        // inipromo: {
        //   [Op.lte]: Date.now(),
        // },
        // fimpromo: {
        //   [Op.gte]: Date.now(),
        // },
      },
    });

    return res.json({
      estoque,
    });
  }
}

export default new EstoqueController();
