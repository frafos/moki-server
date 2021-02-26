// index.js hold the controller boilerplate

const AdminController = require('../../../../src/controller/admin');
const CallsController = require('../../../../src/controller/calls');
const ConferenceController = require('../../../../src/controller/conference');
const ConnectivityCAController = require('../../../../src/controller/connectivityCA');
const ConnectivityController = require('../../../../src/controller/connectivity');
const DiagramController = require('../../../../src/controller/diagram');
const DiagnosticsController = require('../../../../src/controller/diagnostics');
const ExceededController = require('../../../../src/controller/exceeded');
const HomeController = require('../../../../src/controller/home');
const MonitoringController = require('../../../../src/controller/monitoring');
const MicroanalysisController = require('../../../../src/controller/microanalysis');
const NetworkController = require('../../../../src/controller/network');
const OverviewController = require('../../../../src/controller/overview');
const QoSController = require('../../../../src/controller/qos');
const RealmController = require('../../../../src/controller/realm');
const RegistrationController = require('../../../../src/controller/registration');
const RestrictedController = require('../../../../src/controller/restricted');
const SettingController = require('../../../../src/controller/setting');
const SecurityController = require('../../../../src/controller/security');
const SystemController = require('../../../../src/controller/system');
const TransportController = require('../../../../src/controller/transport');

// controller boilerplate code

function newHTTPError(status, msg) {
    const err = new Error(msg);
    err.status = status;
    return err;
}

// generate a not found error (400)
function newBadRequest(msg) {
    return newHTTPError(400, msg);
}

module.exports = {
    newHTTPError: () => newHTTPError,
    newBadRequest: () => newBadRequest,
    AdminController,
    CallsController,
    ConferenceController,
    ConnectivityCAController,
    ConnectivityController,
    DiagramController,
    DiagnosticsController,
    ExceededController,
    HomeController,
    MonitoringController,
    MicroanalysisController,
    NetworkController,
    OverviewController,
    QoSController,
    RealmController,
    RegistrationController,
    RestrictedController,
    SettingController,
    SecurityController,
    SystemController,
    TransportController,

};