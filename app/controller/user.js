"use strict"

const { Controller } = require("egg")

class UserContoller extends Controller {
  async index() {
    const { ctx } = this
    const { id } = ctx.query
    ctx.body = id
  }
}

module.exports = UserContoller
