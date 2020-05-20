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
}

export default Estoque;
