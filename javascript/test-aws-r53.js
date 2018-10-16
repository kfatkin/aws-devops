var AWS = require('aws-sdk');
var route53 = new AWS.Route53();

/*
var params = {
        CallerReference: 'google.com-test6',
        HealthCheckConfig: {
                    FullyQualifiedDomainName: 'www.google.com', 
                    ResourcePath: '/', 
                    EnableSNI: false, 
                    Inverted: false, 
                    MeasureLatency: true, 
                    RequestInterval: 30, 
                    Type: 'HTTPS', 
                    Port: 443, 
                    FailureThreshold: 3,
                    Regions: [
                        'ap-northeast-1', 
                        'ap-southeast-1', 
                        'ap-southeast-2', 
                        'eu-west-1', 
                        'sa-east-1', 
                        'us-east-1', 
                        'us-west-1', 
                        'us-west-2'
                    ], 
                }, 
};

route53.createHealthCheck(params, function(err, data) {
    if (err) console.log(err, err.stack); //an error occurred
    else     console.log(data);           //successful response
});
*/

r53_objs = route53.listHealthChecks()
console.log(r53_objs)