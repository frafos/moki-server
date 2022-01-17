const path = require('path');
const appDir = path.dirname(require.main.filename);
const dotenv = require('dotenv');

const c = {
    port: process.env.PORT || 5000,
    addr: process.env.ADDR || '127.0.0.1',
    nodeEnv: process.env.NODE_ENV || 'production',
    monitorVersion: '5.0',
    userFilter: '*',
    fileDefaults: '/etc/abc-monitor/defaults.json',
    fileMonitor: '/data/abc-monitor/monitor.json',
    fileGUILayout: '/data/abc-monitor/monitor-layout.json',
    htpasswd: '/data/abc-monitor/htpasswd',
    rootDir: appDir,
    es: process.env.ES || 'localhost:9200',
  };

  dotenv.config();
  module.exports = c;