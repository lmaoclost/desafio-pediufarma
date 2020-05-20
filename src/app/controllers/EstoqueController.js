import { Op } from 'sequelize';
import Estoque from '../models/Estoque';

class EstoqueController {
  async index(req, res) {
    const listaEstoque = await Estoque.findAll({
      where: {
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
      },
    });

    const verificaEstoque = new Estoque();

    const estoque = verificaEstoque.VerificaPromocao(listaEstoque);

    return res.json({ estoque });
  }
}

export default new EstoqueController();
