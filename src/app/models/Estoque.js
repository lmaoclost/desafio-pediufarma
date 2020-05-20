import Sequelize, { Model } from 'sequelize';

class Estoque extends Model {
  static init(sequelize) {
    super.init(
      {
        codigo: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        barra: Sequelize.STRING,
        desconto: Sequelize.DOUBLE,
        inipromo: Sequelize.DATE,
        fimpromo: Sequelize.DATE,
        preco: Sequelize.DOUBLE,
        quantidade: Sequelize.DOUBLE,
      },
      {
        sequelize,
        tableName: 'estoque',
        timestamps: false,
      }
    );
  }

  VerificaPromocao(listaEstoque) {
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
    return estoque;
  }
}

export default Estoque;
