import boto3

route53_client = boto3.client('route53')

response = route53_client.create_health_check(
    CallerReference = 'google.com-test2',
    HealthCheckConfig = {
                'FullyQualifiedDomainName': 'www.google.com', 
                'ResourcePath': '/', 
                'EnableSNI': False, 
                'Inverted': False, 
                'MeasureLatency': True, 
                'RequestInterval': 30, 
                'Type': 'HTTPS', 
                'Port': 443, 
                'FailureThreshold': 3,
                'Regions': [
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
)

hchecks = route53_client.list_health_checks()
print(hchecks['HealthChecks'])
hchecks1 = hchecks['HealthChecks']
for i in hchecks1:
    print(i['HealthCheckConfig']['FullyQualifiedDomainName'])
    if i['HealthCheckConfig']['FullyQualifiedDomainName'] == 'www.google.com':
        instanceId = i['Id']


cloudwatch = boto3.client('cloudwatch')

cloudwatch.put_metric_alarm(
    AlarmName='google.com-test',
    ComparisonOperator='LessThanThreshold',
    EvaluationPeriods=1,
    MetricName='HealthCheckStatus',
    Namespace='AWS/Route53',
    Period=60,
    Statistic='Minimum',
    Threshold=1.0,
    ActionsEnabled=True,
    Dimensions=[
        {
          'Name': 'HealthCheckId',
          'Value': instanceId
        },
    ],
    Unit='Seconds'
)