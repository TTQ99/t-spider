const Service = require("egg").Service

class HomeService extends Service {
  async user() {
    const { ctx, app } = this

    const QUERY_STR = "id, name"
    let sql = `select ${QUERY_STR} from list`

    try {
      console.log(1, app.mysql)

      const result = await app.mysql.query(sql)
      console.log(result, 11)
      return result
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = HomeService
