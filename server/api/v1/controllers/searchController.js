const searchService = require('../services/searchService');

// 검색 항목 생성
exports.createSearchEntry = async (req, res) => {
    try {
        const searchEntry = await searchService.createSearchEntry(req.body);
        res.status(201).json(searchEntry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 특정 쿼리에 대한 검색 결과 조회
exports.getSearchResultsByQuery = async (req, res) => {
    try {
        const searchResults = await searchService.getSearchResultsByQuery(req.params.query);
        res.status(200).json(searchResults);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
