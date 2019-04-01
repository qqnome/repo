function query2json(url) {

    let hashIndex = url.indexOf('#'),
        strQuery,
        arrQuery,
        map = {};

    strQuery = url.substring(url.indexOf('?') + 1, hashIndex < 0 ? undefined : hashIndex);
    arrQuery = strQuery.split('&');
    for (let i = 0, len = arrQuery.length; i < len; i++) {
        let queryItem = arrQuery[i],
            arrTemp = queryItem.split('='),
            key = arrTemp[0];
        if (arrTemp.length > 0 && key) {
            map[key] = arrTemp[1] || '';
        }
    }

    return map;
};

exports.query2json = query2json;
