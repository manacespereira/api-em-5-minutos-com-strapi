'use strict';

/**
 * Produto.js controller
 *
 * @description: A set of functions called "actions" for managing `Produto`.
 */

module.exports = {

  /**
   * Retrieve produto records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.produto.search(ctx.query);
    } else {
      return strapi.services.produto.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a produto record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.produto.fetch(ctx.params);
  },

  /**
   * Count produto records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.produto.count(ctx.query);
  },

  /**
   * Create a/an produto record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.produto.add(ctx.request.body);
  },

  /**
   * Update a/an produto record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.produto.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an produto record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.produto.remove(ctx.params);
  }
};
