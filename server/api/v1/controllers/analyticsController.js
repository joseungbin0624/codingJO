const analyticsService = require('../services/analyticsService');

exports.logEvent = async (req, res) => {
    try {
        // req.body에서 예상하는 필드를 검증합니다.
        if (!req.body.event || !req.body.value) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const event = await analyticsService.logEvent(req.body);
        res.status(201).json(event);
    } catch (error) {
        console.error(error); // 로깅을 추가하여 에러를 더 자세히 파악할 수 있습니다.
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await analyticsService.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        console.error(error); // 로깅 추가
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getEventsByType = async (req, res) => {
    try {
        if (!req.params.eventType) {
            return res.status(400).json({ message: "Missing eventType parameter" });
        }
        const events = await analyticsService.getEventsByType(req.params.eventType);
        res.status(200).json(events);
    } catch (error) {
        console.error(error); // 로깅 추가
        res.status(500).json({ message: "Internal server error" });
    }
};
