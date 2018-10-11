import boto3

lambda_client = boto3.client('lambda')

fn_name = 'HelloWorld'
fn_role = 'arn:aws:iam::880392359248:role/lambda_basic_execution'

lambda_client.create_function(
    FunctionName=fn_name,
    Runtime='python3.6',
    Role=fn_role,
    Handler='{0}.lambda_handler'.format(fn_name),
    Code={'ZipFile': open('{0}.zip'.format(fn_name), 'rb').read(), },
)