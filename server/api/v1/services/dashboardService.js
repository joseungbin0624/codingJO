const Dashboard = require('../models/Dashboard');

async function getDashboardByUserId(userId) {
    return await Dashboard.findOne({ userId: userId });
}

async function createDashboard(userId) {
    const newDashboard = new Dashboard({ userId: userId, widgets: [] });
    await newDashboard.save();
    return newDashboard;
}

async function addWidgetToDashboard(userId, widget) {
    let dashboard = await getDashboardByUserId(userId);
    if (!dashboard) {
        dashboard = await createDashboard(userId);
    }
    if (!dashboard.widgets.includes(widget)) {
        dashboard.widgets.push(widget);
        await dashboard.save();
    }
    return dashboard;
}

async function removeWidgetFromDashboard(userId, widget) {
    const dashboard = await Dashboard.findOne({ userId: userId });
    if (!dashboard) {
        throw new Error('Dashboard not found');
    }
    const index = dashboard.widgets.indexOf(widget);
    if (index > -1) {
        dashboard.widgets.splice(index, 1);
        await dashboard.save();
    }
    return dashboard;
}

module.exports = { getDashboardByUserId, addWidgetToDashboard, removeWidgetFromDashboard, createDashboard };
