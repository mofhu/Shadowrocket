/*
//彩云天气

[rewrite_local]
^https:\/\/api\.caiyunapp\.com\/v1\/activity\? url script-response-body https://github.com/kelv1n1n/script/raw/refs/heads/main/js/caiyun.js
^https:\/\/biz\.cyapi\.cn\/(p\/v1\/entries|p\/v1\/trial_card\/info|v2\/product) url reject-dict
^https:\/\/starplucker\.cyapi\.cn\/v3\/(config\/cypage\/\w+\/conditions|notification\/message_center|operation\/homefeatures) url reject-dict
^https:\/\/wrapper\.cyapi\.cn\/v1\/activity\? url script-response-body https://github.com/kelv1n1n/script/raw/refs/heads/main/js/caiyun.js
^https:\/\/wrapper\.cyapi\.cn\/v1\/(nafp\/origin_images|satellite)\? url script-request-header https://github.com/kelv1n1n/script/raw/refs/heads/main/js/caiyun.js

[mitm]
hostname = api.caiyunapp.com, *.cyapi.cn
*/
