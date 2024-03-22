const Search = require('../models/Search');

async function createSearchEntry(queryData) {
    const searchEntry = new Search(queryData);
    await searchEntry.save();
    return searchEntry;
}

async function getSearchResultsByQuery(query) {
    const searchResults = await Search.find({ query: new RegExp(query, 'i') });
    return searchResults;
}

module.exports = { createSearchEntry, getSearchResultsByQuery };
