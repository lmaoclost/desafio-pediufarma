import Sequelize from 'sequelize';
import Estoque from '../app/models/Estoque';
import databaseConfig from '../config/database';

const models = [Estoque];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
