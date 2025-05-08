module.exports = {
    apps: [{
        name: 'donasi_backend',
        script: './index.js', //entrypoint
        instances: 4,
        autorestart: true, // pm2 to restart if this app fails/stops
        max_memory_restart: '100M',
        env: {
            TZ: "Asia/Jakarta",
        },
    }]
}