[URL Rewrite]
^https?:\/\/[\w-]+\.googlevideo\.com\/initplayback.+&oad - reject-200

[Script]
youtube =type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|get_watch),script-path=https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/dist/youtube.response.preview.js,requires-body=true,binary-body-mode=true,max-size=-1,argument='{{"blockUpload":true,"blockImmersive":true,"debug":false}}'

[MITM]
hostname = %APPEND% *.googlevideo.com, youtubei.googleapis.com
