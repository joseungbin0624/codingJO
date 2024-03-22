const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.post('/', searchController.createSearchEntry);
router.get('/:query', searchController.getSearchResultsByQuery);

module.exports = router;
