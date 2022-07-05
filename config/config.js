const production = true;
const appConfig = {
    privateKey: '',
    emailProvider: '',
    emailUserName: '',
    emailPassword: '',
    emailFrom: '',
    database: 'stocks',
    dbusername: "testadmin",
    dbpassword: "3234vxvahsghasdfds",
    production: production,
    tokenExpiryTimeInMinute: 525600,
    razorpay_key_id: '',
    razorpay_key_secret: "",
    port: 9000,
    adminPort: 9001
}
const testConfig = {
    privateKey: '',
    emailProvider: '',
    emailUserName: '',
    emailPassword: '',
    emailFrom: '',
    database: 'stocks',
    dbusername: "stocks",
    dbpassword: "3234vxvahsghasdfds",
    production: production,
    tokenExpiryTimeInMinute: 525600,
    razorpay_key_id: '',
    razorpay_key_secret: "",
    port: 9000,
    adminPort: 9001
}
exports.getConfig = function (field) {
    if (production == true) {
        return appConfig[field];
    } else {
        return testConfig[field];
    }
}
