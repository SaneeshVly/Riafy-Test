module.exports.validate = async function (req, res, next) {
    var validationStatus = true;
    for (let i = 0; i < req.var.parameterList.length; i++) {
        switch (req.var.parameterList[i].type) {
            case 'string':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    }
                }
                break;
            case 'boolean':
                if (req.var.parameterList[i].isRequired == true) {
                    if (typeof req.body[req.var.parameterList[i].name] != 'boolean' && req.body[req.var.parameterList[i].name] != 'true' && req.body[req.var.parameterList[i].name] != 'false') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    } else if (typeof req.body[req.var.parameterList[i].name] != 'boolean' && req.body[req.var.parameterList[i].name] != 'true' && req.body[req.var.parameterList[i].name] != 'false') {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + ' (Boolean)' });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != '' && req.body[req.var.parameterList[i].name] != undefined) {
                        if (typeof req.body[req.var.parameterList[i].name] != 'boolean' && req.body[req.var.parameterList[i].name] != 'true' && req.body[req.var.parameterList[i].name] != 'false') {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + ' (Boolean)' });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
            case 'email':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name + " (email address)" });
                        validationStatus = false;
                        return;
                    } else if (!(/^[\-0-9a-z\.\+_]+@[\-0-9a-z\.\+_]+\.[a-z]{2,}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^[\-0-9a-z\.\+_]+@[\-0-9a-z\.\+_]+\.[a-z]{2,}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
            case 'mobile':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                    } else if (!(/^\d{10}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (10 numbers)" });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^\d{10}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (10 numbers)" });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
            case 'pincode':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    } else if (!(/^\d{6}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (6 numbers)" });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^\d{6}$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (6 numbers)" });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
            case 'number':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null) {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    } else if (!(/^[0-9]+$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (only numbers)" });
                        validationStatus = false;
                        return;
                    } else {
                        req.body[req.var.parameterList[i].name] = req.body[req.var.parameterList[i].name] * 1;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^[0-9]+$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name + " (only numbers)" });
                            validationStatus = false;
                            return;
                        } else {
                            req.body[req.var.parameterList[i].name] = req.body[req.var.parameterList[i].name] * 1;
                        }
                    }
                }
                break;
            case 'longitude':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    } else if (!(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
            case 'latitude':
                if (req.var.parameterList[i].isRequired == true) {
                    if (req.body[req.var.parameterList[i].name] == undefined || req.body[req.var.parameterList[i].name] == null || req.body[req.var.parameterList[i].name] == '') {
                        res.status(400).json({ status: "false", message: 'Missing field ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    } else if (!(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/).test(String(req.body[req.var.parameterList[i].name]))) {
                        res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                        validationStatus = false;
                        return;
                    }
                } else {
                    if (req.body[req.var.parameterList[i].name] != undefined && req.body[req.var.parameterList[i].name] != null && req.body[req.var.parameterList[i].name] != '') {
                        if (!(/^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/).test(String(req.body[req.var.parameterList[i].name]))) {
                            res.status(400).json({ status: "false", message: 'Enter valid ' + req.var.parameterList[i].name });
                            validationStatus = false;
                            return;
                        }
                    }
                }
                break;
        }
        if (i == (req.var.parameterList.length - 1) && validationStatus == true) {
            let bodyKeys = Object.keys(req.body);
            for (let index = 0; index < bodyKeys.length; index++) {
                let isAvailable = req.var.parameterList.filter((elem) => {
                    return elem.name == bodyKeys[index];
                });
                if (isAvailable.length == 0) {
                    res.status(401).json({ status: false, message: 'Unknown field ' + bodyKeys[index] });
                    return;
                }
                if (index * 1 + 1 == bodyKeys.length) {
                    next();
                }
            }
            if (bodyKeys.length == 0) {
                next();
            }
        }
    }
    if (req.var.parameterList.length == 0) {
        if (req.body.length != 0) {
            res.status(401).json({ status: false, message: 'Unknown fields in request' });
            return;
        } else {
            next();
        }
    }
}