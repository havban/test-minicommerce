module.exports = {
    browsers: ['chromium'],
    serverOptions: {
        command: 'npm run serve',
        port: 8080,
        usedPortAction: 'kill', // kill any process using port 8080
        waitOnScheme: {
            delay: 1000, // wait 1 second for tcp connect
        }
    },
    collectCoverage: true
}
