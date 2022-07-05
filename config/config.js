const production = true;
const appConfig = {
    privateKey: '',
    emailProvider: '',
    emailUserName: '',
    emailPassword: '',
    emailFrom: '',
    database: 'stocks',
    dbusername: "testadmin",
    dbpassword: "",
    production: production,
    tokenExpiryTimeInMinute: 525600,
    razorpay_key_id: '',
    razorpay_key_secret: "",
    port: 3000,
    adminPort: 3001
}
const testConfig = {
    privateKey: '',
    emailProvider: '',
    emailUserName: '',
    emailPassword: '',
    emailFrom: '',
    database: 'stocks',
    dbusername: "stocks",
    dbpassword: "",
    production: production,
    tokenExpiryTimeInMinute: 525600,
    razorpay_key_id: '',
    razorpay_key_secret: "",
    port: 3000,
    adminPort: 3001
}
exports.getConfig = function (field) {
    if (production == true) {
        return appConfig[field];
    } else {
        return testConfig[field];
    }
}
