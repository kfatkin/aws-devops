import boto3

route53_client = boto3.client('route53')

response = route53_client.create_health_check(
    CallerReference = 'google.com-test',
    HealthCheckConfig = {
                'FullyQualifiedDomainName': 'www.google.com', 
                'ResourcePath': '/', 
                'EnableSNI': False, 
                'Inverted': False, 
                'MeasureLatency': False, 
                'RequestInterval': 30, 
                'Type': 'HTTPS', 
                'Port': 443, 
                'FailureThreshold': 3,
            }, 
)