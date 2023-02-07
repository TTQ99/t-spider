"use strict"

const { Controller } = require("egg")

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    const { id } = ctx.query
    ctx.body = id
  }

  async user() {
    const { ctx, app } = this

    const result = await ctx.service.home.user()
    ctx.body = result
  }

  async add() {
    const { ctx } = this
    console.log(ctx.request.body)
    const { id } = ctx.request.body
    ctx.body = {
      id,
    }
  }
}

module.exports = HomeController
