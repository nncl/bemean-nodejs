'use strict';

const express = require('express');
const router = express.Router();
const Actions = require('./actions');

/**
 * @description
 * List all users
 */

router.get('/', Actions.list);

/**
 * @description
 * List user by id
 *
 * @param {int} id User id
 */

router.get('/:id', Actions.listById);

/**
 * @description
 * Creates an user
 */

router.post('/', Actions.create);

/**
 * @description
 * Updates an user
 *
 * @param {int} id User id
 */

router.put('/:id', Actions.update);

/**
 * @description
 * Deletes an user
 *
 * @param {int} id User id
 */

router.delete('/:id', Actions.delete);

module.exports = router;
