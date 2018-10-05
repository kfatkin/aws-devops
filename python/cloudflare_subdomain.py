import requests
import json
import re
import sys
import shutil
import webbrowser

###################################################
###### FUNCTIONS ##################################
###################################################
def strip_whitespace(headers_payload_dct):
    for value in headers_payload_dct:
        headers_payload_dct[value] = headers_payload_dct[value].strip()

def write_request_response_to_file(file, data):
    with open(file, 'w') as nput:
        nput.write(json.dumps(data.json(), indent = 2))
    nput.close()

def get_post_code(file, query):
    with open(file) as post:
        data = json.load(post)
    request_code = data[query]
    post.close()
    return request_code
###################################################


###################################################
###### START MAIN PROGRAM #########################
###################################################
headers = {'cache-control' : 'no-cache'}

payload = {'act' : 'zone_lookup',
           'host_key' : 'YOUR_HOST_KEY_HERE'}

### COMMENT OUT THE BELOW FOUR LINES AND UNCOMMENT THE FOUR AFTER THAT
### TO USE STATIC VARIABLES AND MAKE TESTING FASTER
payload['zone_name'] = input('Enter the CloudFlare zone_name:  ')
headers['x-auth-email'] = input('Enter the CloudFlare x-auth-email:  ')
payload['user_key'] = input('Enter the CloudFlare user_key:  ')
headers['x-auth-key'] = input('Enter the CloudFlare x-auth-key:  ')

# payload['zone_name'] = ''
# headers['x-auth-email'] = ''
# payload['user_key'] = ''
# headers['x-auth-key'] = ''

strip_whitespace(headers)
strip_whitespace(payload)

###################################################
###### START FIRST REQUEST ########################
###################################################
url = "https://api.cloudflare.com/client/v4/zones"
response = requests.request("GET", url, headers = headers)
###################################################

print(response) #RESPONSE SHOULD BE A 200
write_request_response_to_file('first_request_response.txt', response)

# PARSES THE JSON RESPONSE OF THE FIRST REQUEST TO FIND THE 'customer_account_id'
# IN ORDER TO CONSTRUCT THE URL FOR THE SECOND REQUEST
with open('first_request_response.txt') as first:
    data = json.load(first)
customer_account_id = data['result'][0]['id']
first.close()


###################################################
###### START SECOND REQUEST #######################
###################################################
url = "https://api.cloudflare.com/client/v4/zones/" + customer_account_id + "/dns_records"
response = requests.request("GET", url, headers = headers)
###################################################

print(response) #RESPONSE SHOULD BE A 200
write_request_response_to_file('second_request_response.txt', response)


###################################################
###### START THIRD REQUEST ########################
###################################################
url = "https://api.cloudflare.com/host-gw.html"
response = requests.post(url, params = payload, headers = headers)
###################################################

write_request_response_to_file('third_request_response.txt', response)

# A POST REQUEST DOES NOT RETURN A
post_code = get_post_code('third_request_response.txt', 'result')
print(post_code) #RESPONSE SHOULD BE 'SUCCESS'

# CREATES A NEW FILE THAT CONTAINS THE RAW TEXT OF THE THIRD RESPONSE
# SO THAT IT CAN BE MANIPULATED USING REGEX
with open ('rawDNS.txt', 'w') as data:
    data.write(response.text)
data.close()

#FORMAT THE SUBDOMAINS IN A WAY THAT CLOUDFLARE WILL EXCEPT THEM
#THERE IS PROBABLY A BETTER WAY TO DO THIS, BUT THIS WORKS AND I AM AFRAID TO MESS WITH IT
domain = payload['zone_name']
with open('rawDNS.txt', 'r') as zone:
    old_zones = zone.read()
    new_zones = re.sub('(.*)(?=hosted_cnames)', "", old_zones) #Delete anything before 'hosted_cnames'
    new_zones = re.sub('(forward_tos.*)', "", new_zones) #Delete anything after 'forward_tos'
    new_zones = re.sub('([.]'+re.escape(domain)+'")+(?=:)', "", new_zones) #Delete any '.domain.com"' but stop at any ':'
    new_zones = re.sub('(")+', "", new_zones) #Delete any '"'
    new_zones = re.sub('(hosted_cnames:{)', "", new_zones) #Delete 'hosted_cnames:{'
    new_zones = re.sub('(})', "", new_zones) #Delete '}'
    new_zones = re.sub('\n', "", new_zones) #Delete any new lines that may still be present
zone.close()

# CREATE A NEW FILE WITH THE FORMATTED SUBDOMAINS TO A NEW FILE TO KEEP AS A BACKUP
with open('new_zones.txt', 'w') as newzones:
    newzones.write(new_zones)
newzones.close()

# CREATE A COPY OF THE FILE FROM ABOVE
with open('zone_set.txt', 'w+') as output, open('new_zones.txt', 'r') as nput:
    shutil.copyfileobj(nput, output)
output.close()
nput.close()


#FORMATS THE POSTMAN.TXT FILE FOR EASIER READING
with open('postman.txt', 'w') as f:
    f.write('\t' 'POSTMAN HEADERS' '\n')
    f.write('   ' 'KEY' '\t\t' 'VALUE' '\n')
    f.write('x-auth-email' + "\t" + headers['x-auth-email'] + '\n')
    f.write('x-auth-key' + "\t" + headers['x-auth-key'] + '\n\n')
    f.write('\t' 'POSTMAN BODY' '\n')
    f.write('   ' 'KEY' '\t\t' 'VALUE' '\n')
    f.write('act' + '\t\t' + 'zone_set' + '\n')
    f.write('host_key' + "\t" + payload['host_key'] + '\n')
    f.write('user_key' + "\t" + payload['user_key'] + '\n')
    f.write('zone_name' + "\t" + payload['zone_name'] + '\n')
    f.write('resolve_to' + "\t" + 'Customer Specific' + '\n')
    f.write('subdomains' + "\t" + 'zone_set.txt file with new subdomains added' + '\n\n')
    f.write('\t' 'URL' '\n')
    f.write('https://api.cloudflare.com/host-gw.html' + '\n\n')
    f.write('BULK POSTMAN ENTRY' + '\n')
    f.write('\t' 'POSTMAN HEADERS' '\n')
    f.write('x-auth-email:' + headers['x-auth-email'] + '\n')
    f.write('x-auth-key:' + headers['x-auth-key'] + '\n\n')
    f.write('\t' 'POSTMAN BODY' '\n')
    f.write('act:zone_set' + '\n')
    f.write('host_key:' + payload['host_key'] + '\n')
    f.write('user_key:' + payload['user_key'] + '\n')
    f.write('zone_name:' + payload['zone_name'] + '\n')
    f.write('resolve_to:' + '\n')
    f.write('subdomains:')
f.close()

### UNCOMMENT THE BELOW FIVE LINES TO HAVE THE GENERATED TEXT FILES
### OPEN UP IN NOTEPAD AUTOMATICALLY AFTER THE PROGRAM COMPLETES
### (USEFUL WHEN TESTING)
# webbrowser.open('first_request_response.txt')
# webbrowser.open('second_request_response.txt')
# webbrowser.open('third_request_response.txt')
# webbrowser.open('zone_set.txt')
# webbrowser.open('postman.txt')
