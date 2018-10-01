#!/bin/bash
dd=$(date +%s)
dt=$(date +%F)
tstart=$(($dd - 420))
tstop=$(($tstart + 60))
${dt}
ls cloudflare/ 2>/dev/null || mkdir -p cloudflare/
curl --request GET \
--url "https://api.cloudflare.com/client/v4/zones/@option.zone@/logs/received?start=${tstart}&end=${tstop}" \
--header 'cache-control: no-cache' \
--header 'content-type: application/json' \
--header 'x-auth-email: jbanks@stansberryresearch.com' \
--header 'x-auth-key: 0fdb3fea8da8a3e1994bb060bb1d1351bf64b' \
--fail \
--silent | grep '{' > cloudflare/@option.site@.${tstart}.log
if [ -s cloudflare/@option.site@.${tstart}.log ]
then
 echo " file exists and is not empty "
 gzip cloudflare/@option.site@.${tstart}.log
 aws s3 cp cloudflare/@option.site@.${tstart}.log.gz s3://880392359248.logs/cloudflare/@option.site@/dt=${dt}/@option.site@.${tstart}.log.gz
 rm -f cloudflare/@option.site@.${tstart}.log.gz
else
 echo " file does not exist, or is empty "
 rm cloudflare/@option.site@.${tstart}.log
fi