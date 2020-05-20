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

    const estoque = [];

    listaEstoque.forEach((item) => {
      if (
        item.inipromo <= Date.now() &&
        item.fimpromo >= Date.now() &&
        item.desconto !== 0 &&
        item.desconto <= item.preco
      ) {
        item.preco = item.desconto;
      }

      estoque.push({
        ean: item.barra,
        preco: item.preco,
        estoque: item.quantidade,
      });
    });

    return res.json({ estoque });
  }
}

export default new EstoqueController();
