'use strict';

/**
 * book-genre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-genre.book-genre');
