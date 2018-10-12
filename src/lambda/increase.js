let increase = 0;

exports.handler = function(event, context, callback) {
    increase++;
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({points: increase})
    });
}