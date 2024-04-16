const config = {
    db: {
        host: "localhost",
        port: 1433,
        user: "SA",
        password: "reallyStrongPwd123",
        database: "shopapidb",
        dialectOptions: {
            options: {
                encrypt: true, // Gereksiz uyarıları önlemek için
                trustServerCertificate: true // Geliştirme ortamında geçici olarak kullanılabilir
            }
        }
    }
}

module.exports = config;