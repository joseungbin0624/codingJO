const dashboardService = require('../services/dashboardService');

exports.getDashboardByUserId = async (req, res) => {
    try {
        const dashboard = await dashboardService.getDashboardByUserId(req.params.userId);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.addWidgetToDashboard = async (req, res) => {
    try {
        const dashboard = await dashboardService.addWidgetToDashboard(req.params.userId, req.body.widget);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeWidgetFromDashboard = async (req, res) => {
    try {
        const dashboard = await dashboardService.removeWidgetFromDashboard(req.params.userId, req.body.widget);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
