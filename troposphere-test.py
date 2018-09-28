from ipaddress import ip_network
from ipify import get_ip
from troposphere import Base64, ec2, GetAtt, Join, Output, Parameter, Ref, Template

ApplicationPort = '3000'
PublicCidrIp = str(ip_network(get_ip()))
t = Template()

t.add_description('Effective DevOps in AWS: Test application')
t.add_parameter(Parameter(
    'KeyPair',
    Description = 'Existing AWS Keypair',
    Type = 'AWS::EC2::Keypair::KeyName',
    ConstraintDescription = 'name of an existing EC2 KeyPair',
))
t.add_resource(ec2.SecurityGroup(
    'SecurityGroup',
    GroupDescription='Allow SSH and TCP/{} access'.format(ApplicationPort),
    SecurityGroupIngress = [ec2.SecurityGroupRule(
        IpProtocol = 'tcp',
        FromPort = '22',
        ToPort = '22',
        CidrIp = PublicCidrIp,
    ),
        ec2.SecurityGroupRule(
            IpProtocol = 'tcp',
            FromPort = ApplicationPort,
            ToPort = ApplicationPort,
            CidrIp = PublicCidrIp,
    )]
))


