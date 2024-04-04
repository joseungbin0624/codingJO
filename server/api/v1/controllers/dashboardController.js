const dashboardService = require('../services/dashboardService');

exports.getDashboardByUserId = async (req, res) => {
    try {
        const dashboard = await dashboardService.getDashboardByUserId(req.params.userId);
        if (!dashboard) {
            // If the dashboard does not exist, create a new one
            const newDashboard = await dashboardService.createDashboard(req.params.userId);
            return res.status(201).json(newDashboard);
        }
        return res.status(200).json(dashboard);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.addWidgetToDashboard = async (req, res) => {
    try {
        const dashboard = await dashboardService.addWidgetToDashboard(req.body.userId, req.body.widget);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeWidgetFromDashboard = async (req, res) => {
    try {
        const dashboard = await dashboardService.removeWidgetFromDashboard(req.body.userId, req.body.widget);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
