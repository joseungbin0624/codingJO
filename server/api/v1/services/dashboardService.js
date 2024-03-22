const Dashboard = require('../models/Dashboard');

async function getDashboardByUserId(userId) {
    const dashboard = await Dashboard.findOne({ userId: userId });
    if (!dashboard) {
        throw new Error('Dashboard not found');
    }
    return dashboard;
}

async function addWidgetToDashboard(userId, widget) {
    let dashboard = await Dashboard.findOne({ userId: userId });
    if (!dashboard) {
        dashboard = new Dashboard({ userId: userId, widgets: [widget] });
    } else {
        dashboard.widgets.push(widget);
    }
    await dashboard.save();
    return dashboard;
}

async function removeWidgetFromDashboard(userId, widget) {
    const dashboard = await Dashboard.findOne({ userId: userId });
    if (!dashboard) {
        throw new Error('Dashboard not found');
    }
    dashboard.widgets = dashboard.widgets.filter(w => w !== widget);
    await dashboard.save();
    return dashboard;
}

module.exports = { getDashboardByUserId, addWidgetToDashboard, removeWidgetFromDashboard };
