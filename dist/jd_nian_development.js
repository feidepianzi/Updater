"use strict";var JD_API_HOST="https://api.m.jd.com/client.action?functionId=";function init(){$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.pkHelpList?($.pkHelpList=Array.isArray($.pkHelpList)?$.pkHelpList:[$.pkHelpList],$.pkHelpList=$.pkHelpList.filter(function(a){return""!==a})):$.pkHelpList=[],9<=new Date().getHours()&&11>=new Date().getHours()&&$.pkHelpList.push("E7unasWZHoZIX1kYiw8sbLbDzBTAz9WH22-dryVy9Pl-4zHBWpnA0Jc"),$.pkExpandList?($.pkExpandList=Array.isArray($.pkExpandList)?$.pkExpandList:[$.pkExpandList],$.pkExpandList=$.pkExpandList.filter(function(a){return""!==a})):$.pkExpandList=[],$.pkExpandList.push("PKASTT0195L6r47PBTNYCtIMjDX0CTdWnIaRzTwjeQOc"),$.partyHelpList?($.partyHelpList=Array.isArray($.partyHelpList)?$.partyHelpList:[$.partyHelpList],$.partyHelpList=$.partyHelpList.filter(function(a){return""!==a})):$.partyHelpList=[],8<=new Date().getHours()&&20>=new Date().getHours()&&$.pkHelpList.push("m2telgJiWVSZTvQtmTwGzKlOX6368EtbQXHJOCrQbW75rR9rigmZmwE"),$.taskStep=1,$.shopList=["3Nim1gacyGYMAXmZ3Y2k5VBxaejJ","46zESrwfq44GweVpStuKbRC41Hte","2L7HSDRra3SWkaXjMuTu7t12pcD3","FMMgZP4rY1Jn8No6ecHX9iXeUMM","o1eBs9bj8uSU61u69cU23RRD1CF","MS542hXYyzw3kSpiRWc4541HEBq","32SnogmGSmooYj8fjfVEYfSZQJAh","238znECxVhPhxMo6MwBtbKymQxJ5","iWCMNDBk5LGH6vk3KUMjh4zDqxW","4Cs3hEQxMxvqJPj71yboqP8bsA6W","hntbhJys5n6ruPgxTvnkLi6uKV1","23ATdy5hbTTCBAb3EGg9jiLePwVt","2mn15qhUwtay1HC9q6zzgtKQi9hE","45jeQMDcxfrUJ4WgytKLtEanZ3aG","xyDmumXCUwrynUBKF3BWGgNmNJy"],$.uuid=randomString(40),$.UA="jdapp;iPhone;10.2.0;13.1.2;".concat($.uuid,";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}function cloudTip(){$.error="\u6307\u4EE4\u5DF2\u8FD0\u884C\u5B8C\u6BD5\uFF01\u5165\u4F1A\u4EFB\u52A1\u548C\u4E0B\u5355\u4EFB\u52A1\u4E0D\u8D1F\u8D23\u505A\u54E6\uFF01\n\u5176\u4ED6\u529F\u80FD\u548C\u4EFB\u52A1\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}function update(){$.message="\u672C\u5730\u4EFB\u52A1\u548C\u5F00\u53D1\u662F\u540C\u6B65\u7684\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u96BE\u514D\u5B58\u5728bug\uFF0C\u5982\u679C\u8FD0\u884C\u65F6\u5361\u4F4F\uFF0C\u8BF7\u8FC7\u6BB5\u65F6\u95F4\u518D\u8BD5\u8BF7\u7406\u89E3~",document.write(JSON.stringify($))}function tigernian_getMainMsgPopUp(){return $.callback="Func.request",void takePostRequest("tigernian_getMainMsgPopUp")}function tigernian_getHomeData(){return $.callback="Func.request",void takePostRequest("tigernian_getHomeData")}function tigernian_getTaskDetail(){return $.call=Array.isArray($.call)?$.call:[$.call],"tigernian_getTaskDetail"==$.call[$.call.length-1]||$.call.push("tigernian_getTaskDetail"),$.callback="Func.request",void takePostRequest("tigernian_getTaskDetail")}function tigernian_collectAutoScore(){return $.callback="Func.request",void takePostRequest("tigernian_collectAutoScore")}function tigernian_sign(){return $.callback="Func.request",void takePostRequest("tigernian_sign")}function getHelpCode(){return $.callback="Func.request",$.modules=1,void takePostRequest("getHelpCode")}function help(){return($.to="Func.logicHandler",$.call=["help"],$.inviteId=$.inviteList.shift(),!$.setHelp||!$.inviteId||$.helpMax)?($.to="",$.call.pop(),$.setHelp||($.message="\u4F60\u5DF2\u5173\u95ED\u52A9\u529B\uFF0C\u5C31\u4E0D\u505A\u52A9\u529B\u4EFB\u52A1\u62C9~"),void document.write(JSON.stringify($))):($.message="".concat($.UserName,"\u53BB\u52A9\u529B\uFF0C\u5BF9\u65B9\u52A9\u529B\u7801:\n").concat($.inviteId),$.callback="Func.request",void takePostRequest("help"))}function pkHelp(){return($.to="Func.logicHandler",$.call=["pkHelp"],$.pkHelpId=$.pkHelpList.shift(),!$.setHelp||!$.pkHelpId)?($.to="",$.call.pop(),$.setHelp||($.message="\u4F60\u5DF2\u5173\u95ED\u52A9\u529B\uFF0C\u5C31\u4E0D\u505A\u5165\u961F\u4EFB\u52A1\u62C9~"),void document.write(JSON.stringify($))):($.message="".concat($.UserName,"\u53BB\u5165\u961F\uFF0C\u5BF9\u65B9\u7EC4\u961F\u7801:\n").concat($.pkHelpId),$.callback="Func.request",void takePostRequest("tigernian_pk_joinGroup"))}function tigernian_pk_getHomeData(){return $.callback="Func.request",void takePostRequest("tigernian_pk_getHomeData")}function tigernian_pk_collectPkExpandScore(){if($.to="Func.logicHandler",$.call=["tigernian_pk_collectPkExpandScore"],20<=new Date().getHours()&&22>=new Date().getHours()){return($.pkExpandId=$.pkExpandList.shift(),!$.pkExpandId)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):($.callback="Func.request",void takePostRequest("tigernian_pk_collectPkExpandScore"))}else $.to="",$.call.pop(),document.write(JSON.stringify($))}function doTaskController(){switch($.to="Func.logicHandler",$.call=["doTaskController"],$.taskStep++){case 1:doTask();break;case 2:tigernian_getTaskDetail();break;case 3:doTask();break;case 3:tigernian_getTaskDetail();break;case 4:doTask();break;case 5:tigernian_getTaskDetail();break;case 6:doTask();break;case 7:tigernian_getTaskDetail();break;case 8:doTask();break;default:$.to="",$.call.pop(),document.write(JSON.stringify($));}}function doTask(){var a;return $.to="Func.logicHandler","doTask"==$.call[$.call.length-1]||$.call.push("doTask"),$.oneTask=$.taskList.shift(),$.taskId=null===(a=$.oneTask)||void 0===a?void 0:a.taskId,$.oneTask?void([1,3,7,9,26].includes($.oneTask.taskType)&&1===$.oneTask.status&&($.activityInfoList=$.oneTask.shoppingActivityVos||$.oneTask.brandMemberVos||$.oneTask.followShopVo||$.oneTask.browseShopVo,$.activityInfoList.time=30,oneActivityInfo()),2!==$.oneTask.taskType||1!==$.oneTask.status||$.oneTask.taskName.includes("\u901B\u901B")?2===$.oneTask.taskType&&1===$.oneTask.status&&$.oneTask.taskName.includes("\u901B\u901B")?($.activityInfoList=$.oneTask.productInfoVos,$.activityInfoList.time=30,oneActivityInfo()):5===$.oneTask.taskType&&1===$.oneTask.status?tigernian_getFeedDetail():0===$.oneTask.taskType&&(1===$.oneTask.status||3===$.oneTask.status)&&oneTaskHandle():tigernian_getFeedDetail(),!document.body.innerText&&document.write(JSON.stringify($))):($.call.pop(),$.message="\u4EFB\u52A1\u5DF2\u5168\u90FD\u5B8C\u6210~",void document.write(JSON.stringify($)))}function tigernian_getBadgeAward(){var a;return($.to="Func.logicHandler",$.call=["tigernian_getBadgeAward"],$.oneTask=$.badgeAwardList.shift(),$.awardToken=null===(a=$.oneTask)||void 0===a?void 0:a.awardToken,!$.oneTask)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):4===$.oneTask.status?void document.write(JSON.stringify($)):($.callback="Func.request",void takePostRequest("tigernian_getBadgeAward"))}function oneTaskHandle(){return"oneTaskHandle"==$.call[$.call.length-1]||$.call.push("oneTaskHandle"),$.taskToken=$.oneTask.simpleRecordInfoVo.taskToken,$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.taskName," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takePostRequest("oneTaskHandle")}function oneActivityInfo(){var a,b;return($.to="Func.logicHandler","oneActivityInfo"==$.call[$.call.length-1]||$.call.push("oneActivityInfo"),$.oneActivityInfo=$.activityInfoList.shift(),!$.oneActivityInfo||0>=--$.activityInfoList.time)?($.call.pop(),void document.write(JSON.stringify($))):1===(null===(a=$.oneActivityInfo)||void 0===a?void 0:a.status)&&null!==(b=$.oneActivityInfo)&&void 0!==b&&b.taskToken?($.taskToken=$.oneActivityInfo.taskToken,$.callbackInfo={},$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneActivityInfo.skuName||$.oneActivityInfo.taskName||$.oneActivityInfo.title||$.oneActivityInfo.shopName," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takePostRequest("tigernian_collectScore")):void document.write(JSON.stringify($))}function callbackResult(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{},d=c.log,e=c.random,f="body={\"dataSource\":\"newshortAward\",\"method\":\"getTaskAward\",\"reqParams\":\"{\\\"taskToken\\\":\\\"".concat($.taskToken,"\\\"}\",\"sdkVersion\":\"1.0.0\",\"clientLanguage\":\"zh\",\"onlyTimeId\":\"\",\"riskParam\":{\"platform\":\"3\",\"orgType\":\"2\",\"openId\":\"-1\",\"pageClickKey\":\"Babel_VKCoupon\",\"eid\":\"\",\"fp\":\"-1\",\"shshshfp\":\"\",\"shshshfpa\":\"\",\"shshshfpb\":\"\",\"childActivityUrl\":\"\",\"userArea\":\"-1\",\"client\":\"\",\"clientVersion\":\"\",\"uuid\":\"\",\"osVersion\":\"\",\"brand\":\"\",\"model\":\"\",\"networkType\":\"\",\"jda\":\"-1\"}}"),g={Origin:"https://prodev.m.jd.com",Cookie:$.cookie,Connection:"keep-alive",Accept:"application/json, text/plain, */*","Accept-Encoding":"gzip, deflate, br",Host:"api.m.jd.com","Content-Type":"application/x-www-form-urlencoded","User-Agent":$.UA||"jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1","Accept-Language":"zh-CN",Referer:"https://prodev.m.jd.com/"};$.request={url:JD_API_HOST+a+"&client=wh5",method:"POST",headers:g,body:f},document.write(JSON.stringify($))}function tigernian_getFeedDetail(){return $.to="Func.logicHandler",$.call.push("tigernian_getFeedDetail"),$.feedDetailInfo={},$.callback="Func.request",$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.taskName," \u7B49\u5F85\u5B8C\u6210..."),void takePostRequest("tigernian_getFeedDetail")}function browseProducts(){return($.to="Func.logicHandler","browseProducts"==$.call[$.call.length-1]||$.call.push("browseProducts"),$.proCarInfo=$.productList.shift(),0>=$.needTime)?($.call.pop(),void document.write(JSON.stringify($))):1===$.proCarInfo.status?($.taskToken=$.proCarInfo.taskToken,$.needTime--,$.message="\u6D4F\u89C8\u5546\u54C1\uFF1A".concat($.proCarInfo.skuName||$.proCarInfo.shopName),$.callback="Func.request",void takePostRequest("browseProducts")):void document.write(JSON.stringify($))}function tigernian_raise(){return($.to="Func.logicHandler",$.call=["tigernian_raise"],$.raiseStatus)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):($.callback="Func.request",void takePostRequest("tigernian_raise"))}function jdjrTaskDetail(){return $.callback="Func.request",void takePostRequest("jdjrTaskDetail")}function jdjrDoTask(){var a;return($.to="Func.logicHandler",$.call=["jdjrDoTask"],$.oneTask=$.jdjrTaskList.shift(),$.missionId=null===(a=$.oneTask)||void 0===a?void 0:a.missionId,!$.oneTask)?($.to="",$.call.pop(),$.wait=1,$.message="\u6D4F\u89C8\u4EFB\u52A1\u5DF2\u5168\u90FD\u5B8C\u6210~",void document.write(JSON.stringify($))):$.oneTask.complete++<=$.oneTask.total?void document.write(JSON.stringify($)):($.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.title," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takePostRequest("jdjrDoTask"))}function doShopTask(){return $.to="Func.logicHandler",$.call=["doShopTask"],$.oneShop=$.shopList.shift(),$.oneShop?void($.fragmentId=1,getAppId()):($.to="",$.call.pop(),$.message="\u4EFB\u52A1\u5DF2\u5168\u90FD\u5B8C\u6210~",void document.write(JSON.stringify($)))}function getAppId(){return"getAppId"==$.call[$.call.length-1]||$.call.push("getAppId"),$.callback="Func.request",void takePostRequest("getAppId")}function getShopHomeData(){return"getShopHomeData"==$.call[$.call.length-1]||$.call.push("getShopHomeData"),$.callback="Func.request",void takePostRequest("getShopHomeData")}function doOneShopTask(){var a,b,c,d,e;if("doOneShopTask"==$.call[$.call.length-1]||$.call.push("doOneShopTask"),$.oneTask=$.taskList.shift(),$.taskId=null===(a=$.oneTask)||void 0===a?void 0:a.taskId,!$.oneTask)return $.call.pop(),$.call.push("doShopLottery"),void document.write(JSON.stringify($));if(1!==(null===(b=$.oneTask)||void 0===b?void 0:b.status)||21===(null===(c=$.oneTask)||void 0===c?void 0:c.taskType)||28===(null===(d=$.oneTask)||void 0===d?void 0:d.taskType)||15===(null===(e=$.oneTask)||void 0===e?void 0:e.taskType))return void document.write(JSON.stringify($));var f=$.oneTask.simpleRecordInfoVo||$.oneTask.followShopVo||$.oneTask.shoppingActivityVos;return $.taskToken=f.taskToken||f[0].taskToken,$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.taskName," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takePostRequest("doOneShopTask")}function doShopLottery(){return"doShopLottery"==$.call[$.call.length-1]||$.call.push("doShopLottery"),$.fragmentId++,$.callback="Func.request",void takePostRequest("doShopLottery")}function getPartyHomeData(){return $.callback="Func.request",void takePostRequest("getPartyHomeData")}function helpPartyCode(){return($.to="Func.logicHandler",$.call=["helpPartyCode"],$.inviteId=$.partyHelpList.shift(),!$.inviteId||$.partyHelpMax)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):($.message="".concat($.UserName,"\u53BB\u52A9\u529B\uFF0C\u5BF9\u65B9\u6CB8\u817E\u4E4B\u591C\u52A9\u529B\u7801:\n").concat($.inviteId),$.callback="Func.request",void takePostRequest("helpPartyCode"))}function takePostRequest(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{log:"",random:""},d=c.log,e=c.random,f="",g="",h="",i="",j="";"tigernian_getMainMsgPopUp"===a?(f="functionId=tigernian_getMainMsgPopUp&body={\"channel\":\"1\"}&client=wh5&clientVersion=1.0.0",g=getPostRequest("tigernian_getMainMsgPopUp",f)):"tigernian_getHomeData"===a?(f="functionId=tigernian_getHomeData&body={}&client=wh5&clientVersion=1.0.0",g=getPostRequest("tigernian_getHomeData",f)):"tigernian_getTaskDetail"===a?(f="functionId=tigernian_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0",g=getPostRequest("tigernian_getTaskDetail",f)):"tigernian_collectAutoScore"===a?(f="functionId=tigernian_collectAutoScore&body={\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_collectAutoScore",f)):"tigernian_getFeedDetail"===a?(f="functionId=tigernian_getFeedDetail&body={\"taskId\":\"".concat($.taskId,"\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_getFeedDetail",f)):"tigernian_collectScore"===a?(f="functionId=tigernian_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"actionType\":1}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_collectScore",f)):"tigernian_getBadgeAward"===a?(f="functionId=tigernian_getBadgeAward&body={\"awardToken\":\"".concat($.awardToken,"\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_getBadgeAward",f)):"help"===a?(f="functionId=tigernian_collectScore&body={\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"inviteId\":\"").concat($.inviteId,"\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_collectScore",f)):"tigernian_pk_getHomeData"===a?(f="functionId=tigernian_pk_getHomeData&body={}&client=wh5&clientVersion=1.0.0",g=getPostRequest("tigernian_pk_getHomeData",f)):"tigernian_pk_collectPkExpandScore"===a?(f="functionId=tigernian_pk_collectPkExpandScore&body={\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"inviteId\":\"").concat($.pkExpandId,"\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_pk_collectPkExpandScore",f)):"tigernian_pk_joinGroup"===a?(f="functionId=tigernian_collectScore&body={\"confirmFlag\":\"1\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"inviteId\":\"").concat($.pkHelpId,"\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_pk_joinGroup",f)):"zoo_pk_getTaskDetail"===a?(f="functionId=zoo_pk_getTaskDetail&body={}&client=wh5&clientVersion=1.0.0",g=getPostRequest("zoo_pk_getTaskDetail",f)):"zoo_pk_collectScore"===a?(f=getPostBody(a),g=getPostRequest("zoo_pk_collectScore",f)):"oneTaskHandle"===a?(f="functionId=tigernian_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_collectScore",f)):"tigernian_sign"===a?(f="functionId=tigernian_sign&body={\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_sign",f)):"tigernian_getSignHomeData"===a?(f="functionId=tigernian_getSignHomeData&body={}&client=wh5&clientVersion=1.0.0",g=getPostRequest("tigernian_getSignHomeData",f)):"tigernian_raise"===a?(f="functionId=tigernian_raise&body={\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"".concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_raise",f)):"getAppId"===a?(f="functionId=factory_getStaticConfig&appid=wh5&clientVersion=1.0.0&body={\"encryptActivityId\":\"".concat($.oneShop,"\",\"channelId\":1}"),h="https://api.m.jd.com/",g=getPostRequest("factory_getStaticConfig",f,h)):"getShopHomeData"===a?(f="functionId=template_mongo_getHomeData&appid=wh5&clientVersion=1.0.0&body={\"taskToken\":\"\",\"appId\":\"".concat($.appId,"\",\"channelId\":1}"),h="https://api.m.jd.com/",g=getPostRequest("template_mongo_getHomeData",f,h)):"doOneShopTask"===a?(f="functionId=template_mongo_collectScore&appid=wh5&clientVersion=1.0.0&body={\"taskToken\":\"".concat($.taskToken,"\",\"taskId\":").concat($.taskId,",\"actionType\":0,\"appId\":\"").concat($.appId,"\",\"safeStr\":\"{\\\"random\\\":\\\"\\\",\\\"sceneid\\\":\\\"HYJGJSh5\\\",\\\"log\\\":\\\"\\\"}\"}"),h=h="https://api.m.jd.com/client.action",g=getPostRequest("template_mongo_collectScore",f,h)):"doShopLottery"===a?(f="functionId=template_mongo_lottery&appid=wh5&clientVersion=1.0.0&body={\"appId\":\"".concat($.appId,"\",\"fragmentId\":").concat($.fragmentId,"}"),h="https://api.m.jd.com/",g=getPostRequest("template_mongo_lottery",f,h)):"getPartyHomeData"===a?(f="functionId=party1031_init&body={}&client=wh5&clientVersion=1.0.0&appid=o2_act&uuid=".concat($.uuid),h="https://api.m.jd.com/client.action?advId=party1031_init",g=getPostRequest("party1031_init",f,h)):"helpPartyCode"===a?(f="functionId=party1031_assist&client=wh5&clientVersion=1.0.0&appid=o2_act&_stk=appid,body,client,clientVersion,functionId&_ste=1&h5st=&body={\"inviteCode\":\"".concat($.inviteId,"\"}&uuid=").concat($.uuid),h="https://api.m.jd.com/client.action?advId=party1031_assist",g=getPostRequest("party1031_assist",f,h)):"getHelpCode"===a?(i="https://gitter.im/api/v1/rooms/6171836d6da0373984886132/chatMessages?lookups%5B%5D=user&includeThreads=false&limit=100",j={Origin:"https://gitter.im/leecobaby-shortcuts/",Host:"gitter.im",Referer:"https://gitter.im/leecobaby-shortcuts/jd_travel",Cookie:"null","x-access-token":"$9OVxcJtRbFDBoGj9Z3hXLFw9b3mrlWmop6Lw84IBmhs="},g=getRequest(i,f,"GET",j)):"jdjrTaskDetail"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd016EJ54F6BERNW7KQN572WZUQRRFEELIAO7P6YZYZBFUAR6T7LX5KRRGOFWEUJQB57AHD3RWA4Z7J5F5TSHDK3U65XMFZIU5KWEMIWOFA01234567\"}",h="https://ms.jr.jd.com/gw/generic/uc/h5/m/miMissions",g=getPostRequest("jdjrTaskDetail",f,h)):"jdjrDoTask"===a?(h="https://ms.jr.jd.com/gw/generic/mission/h5/m/queryMissionReceiveAfterStatus?reqData=%7B%2522missionId%2522:%2522".concat($.missionId,"%2522%7D"),g=getPostRequest("jdjrDoTask",f,h)):"jdjrDoTaskFinish"===a?(h="https://ms.jr.jd.com/gw/generic/mission/h5/m/finishReadMission?reqData=%7B%2522missionId%2522:%2522".concat($.missionId,"%2522,%2522readTime%2522:8%7D"),g=getPostRequest("jdjrDoTask",f,h)):"browseProducts"===a?(f="functionId=tigernian_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"ZNShPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\"}&client=wh5&clientVersion=1.0.0"),g=getPostRequest("tigernian_collectScore",f)):($.error="takePostRequest \u9519\u8BEF".concat(a),void 0);$.request=g,document.write(JSON.stringify($))}function getPostRequest(a,b,c){var d,e,f,g=c||JD_API_HOST+a,h={};("jdjrTaskDetail"===a||"jdjrDoTask"===a)&&("jdjrDoTask"===a&&(h.method="GET"),h.headers={Host:"ms.jr.jd.com",Origin:"https://wbbny.m.jd.com",Referer:"https://wbbny.m.jd.com/"},g=c);var i=h.method||"POST",j={Accept:"application/json, text/plain, */*",Origin:(null===(d=h.headers)||void 0===d?void 0:d.Origin)||"https://wbbny.m.jd.com","Accept-Encoding":"gzip, deflate, br",Cookie:$.cookie,"Content-Type":"application/x-www-form-urlencoded",Host:(null===(e=h.headers)||void 0===e?void 0:e.Host)||"api.m.jd.com",Connection:"keep-alive","User-Agent":$.UA||"jdapp;iPhone;10.0.6;14.4;c67093f5dd58d33fc5305cdc61e46a9741e05c5b;network/4g;model/iPhone12,1;addressid/2377723269;appBuild/167724;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:(null===(f=h.headers)||void 0===f?void 0:f.Referer)||"https://wbbny.m.jd.com/","Accept-Language":"zh-CN"};return{url:g,method:i,headers:j,body:b}}function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"POST",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},e={Accept:"application/json, text/javascript, */*",Origin:d.Origin||"https://h5.m.jd.com","Accept-Encoding":"gzip, deflate, br",Cookie:d.Cookie||$.cookie,"Content-Type":"application/x-www-form-urlencoded",Host:d.Host||"api.m.jd.com",Connection:"keep-alive","User-Agent":$.UA||"jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:d.Referer||"https://home.m.jd.com/myJd/newhome.action","Accept-Language":"zh-CN,zh-Hans;q=0.9","x-access-token":d["x-access-token"]||""};return{url:a,method:c,headers:e,body:b}}function getPostBody(a){var b="";return b="help"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:2,inviteId:$.inviteId,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"pkHelp"===a?"functionId=zoo_pk_assistGroup&body=".concat(JSON.stringify({confirmFlag:1,inviteId:$.pkInviteId,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_collectProduceScore"===a?"functionId=zoo_collectProduceScore&body=".concat(JSON.stringify({ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_getWelfareScore"===a?"functionId=zoo_getWelfareScore&body=".concat(JSON.stringify({type:2,currentScence:$.currentScence,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"add_car"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:$.taskId,taskToken:$.taskToken,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"functionId=".concat(a,"&body=").concat(JSON.stringify({taskId:$.oneTask.taskId,actionType:1,taskToken:$.oneActivityInfo.taskToken,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"),b}function dealReturn(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;switch(b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8D26\u53F7cookie\u662F\u5426\u8FC7\u671F\u6216\u9519\u8BEF"),a){case"tigernian_getHomeData":if(0===(null===b||void 0===b||null===(c=b.data)||void 0===c?void 0:c.bizCode)){var E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S;$.homeData=b.data,$.secretp=null===(E=b.data)||void 0===E||null===(F=E.result)||void 0===F||null===(G=F.homeMainInfo)||void 0===G?void 0:G.secretp,$.userInfo=null===(H=$.homeData)||void 0===H||null===(I=H.result)||void 0===I?void 0:I.homeMainInfo,$.message="\u5F53\u524D\u73A9\u5BB6\u8FDB\u5EA6: ".concat(null===(J=$.userInfo)||void 0===J||null===(K=J.raiseInfo)||void 0===K||null===(L=K.cityConfig)||void 0===L?void 0:L.cityName," ").concat(null===(M=$.userInfo)||void 0===M?void 0:M.curCity,"/20\n\u5269\u4F59\u7206\u7AF9").concat(null===(N=$.userInfo)||void 0===N||null===(O=N.raiseInfo)||void 0===O?void 0:O.remainScore,"\uFF0C\u4E0B\u4E00\u5173\u9700\u8981").concat((null===(P=$.userInfo)||void 0===P||null===(Q=P.raiseInfo)||void 0===Q?void 0:Q.nextLevelScore)-(null===(R=$.userInfo)||void 0===R||null===(S=R.raiseInfo)||void 0===S?void 0:S.curLevelStartScore))}else $.error=-30001===(null===b||void 0===b?void 0:b.code)?"\u26A0\uFE0F \u4F60\u7684 cookie \u9519\u8BEF\u6216\u8005\u8FC7\u671F\uFF0C\u8BF7\u53BB\u5F80\u6307\u4EE4\u8BBE\u7F6E\u91CD\u65B0\u6388\u6743\uFF01\n\u6293\u5305\u7684\u8BF7\u4E0D\u8981\u767B\u51FA\u8D26\u53F7\u548C\u5173\u95ED\u7F51\u9875\uFF0C\u76F4\u63A5\u5173\u95ED\u6D4F\u89C8\u5668\u5373\u53EF\u3002":"\u26A0\uFE0F \u5B58\u5728\u9519\u8BEF ".concat(JSON.stringify(b));break;case"tigernian_getTaskDetail":if(0===b.code){if(!$.selfInviteId){var T,U;$.selfInviteId=null===(T=b.data)||void 0===T||null===(U=T.result)||void 0===U?void 0:U.inviteId,$.message="\u4F60\u7684\u597D\u53CB\u4E92\u52A9\u7801\u4E3A:\n".concat($.selfInviteId||"\u4F60\u5DF2\u88AB\u52A9\u529B\u6EE1\uFF0C\u83B7\u53D6\u52A9\u529B\u7801\u5931\u8D25")}$.badgeAwardList=b.data.result.lotteryTaskVos[0].badgeAwardVos,$.taskList=b.data.result.taskVos}break;case"tigernian_raise":0===b.code&&0===(null===(d=b.data)||void 0===d?void 0:d.bizCode)?$.message="\u5347\u7EA7\u6210\u529F":($.message="\u5347\u7EA7\u5931\u8D25\uFF0C\u7206\u7AF9\u4E0D\u8DB3",$.raiseStatus=1);break;case"tigernian_collectAutoScore":$.message=0===b.code&&null!==(e=b.data)&&void 0!==e&&e.result?"\u6536\u53D6\u6210\u529F\uFF0C\u83B7\u5F97\uFF1A".concat(b.data.result.produceScore," \u7206\u7AF9\uD83E\uDDE8"):JSON.stringify(b),0===b.code&&b.data&&-1002===b.data.bizCode&&($.error="\u8BE5\u8D26\u6237\u811A\u672C\u6267\u884C\u4EFB\u52A1\u706B\u7206\uFF0C\u6682\u505C\u6267\u884C\u4EFB\u52A1\uFF0C\u8BF7\u624B\u52A8\u505A\u4EFB\u52A1\u6216\u8005\u7B49\u5F85\u89E3\u51B3\u811A\u672C\u706B\u7206\u95EE\u9898\n\u706B\u7206\u5E76\u975E\u8D26\u6237\u95EE\u9898\uFF0C\u800C\u662F\u5B98\u65B9\u5BF9\u5DE5\u5177\u505A\u4EFB\u52A1\u573A\u666F\u505A\u4E86\u9650\u5236\u624B\u6BB5\u3002");break;case"tigernian_collectScore":$.callbackInfo=b;break;case"tigernian_getBadgeAward":if(0===b.code&&0===(null===(f=b.data)||void 0===f?void 0:f.bizCode)){var V,W,X,Y;$.message="\u7D2F\u8BA1\u4EFB\u52A1\u6210\u529F\u9886\u53D6\uFF1A".concat(null===(V=b.data)||void 0===V||null===(W=V.result)||void 0===W||null===(X=W.myAwardVos[0])||void 0===X||null===(Y=X.pointVo)||void 0===Y?void 0:Y.score," \u7206\u7AF9\uD83E\uDDE8")}else $.message="\u9886\u53D6\u5931\u8D25\uFF1A".concat(b);break;case"help":case"pkHelp":switch(null===(g=b.data)||void 0===g?void 0:g.bizCode){case 0:$.message="\u52A9\u529B\u6210\u529F\uFF0C\u4F60\u83B7\u5F97".concat(null===(h=b.data)||void 0===h||null===(i=h.result)||void 0===i?void 0:i.score,"\u7206\u7AF9\uD83E\uDDE8");break;case-201:$.message="\u52A9\u529B\u5DF2\u6EE1",$.friendHelpMax=!0;break;case-202:$.message="\u5DF2\u7ECF\u52A9\u529B\u8FC7\u8BE5\u597D\u53CB";break;case-5:$.message="".concat((null===(j=b.data)||void 0===j?void 0:j.bizMsg)||"\u5DF2\u52A0\u5165\u8BE5\u961F\u4F0D");break;case-6:case 108:$.message="\u52A9\u529B\u6B21\u6570\u5DF2\u7528\u5149",$.helpMax=!0;break;default:$.message="\u52A9\u529B\u5931\u8D25\uFF1A".concat(JSON.stringify(b));}break;case"tigernian_pk_getHomeData":if(0===b.code&&0===(null===(k=b.data)||void 0===k?void 0:k.bizCode)){var Z,aa,ba;$.message="\u4F60\u7684\u7EC4\u961F\u7801\u4E3A\uFF1A\n".concat(null===(Z=b.data)||void 0===Z||null===(aa=Z.result)||void 0===aa||null===(ba=aa.groupInfo)||void 0===ba?void 0:ba.groupJoinInviteId)}break;case"zoo_pk_getTaskDetail":0===b.code&&($.pkTaskList=b.data.result.taskVos);break;case"tigernian_getFeedDetail":if(0===b.code){var ca,da,ea,fa,ga,ha;if(null!==(ca=b.data)&&void 0!==ca&&null!==(da=ca.result)&&void 0!==da&&da.addProductVos&&null!==(ea=b.data)&&void 0!==ea&&ea.result.addProductVos.length){var ia,ja;$.feedDetailInfo=null===(ia=b.data)||void 0===ia||null===(ja=ia.result)||void 0===ja?void 0:ja.addProductVos[0]}else if(null!==(fa=b.data)&&void 0!==fa&&null!==(ga=fa.result)&&void 0!==ga&&ga.taskVos&&null!==(ha=b.data)&&void 0!==ha&&ha.result.taskVos.length){var ka,la;$.feedDetailInfo=null===(ka=b.data)||void 0===ka||null===(la=ka.result)||void 0===la?void 0:la.taskVos[0]}}break;case"zoo_pk_collectScore":break;case"tigernian_pk_collectPkExpandScore":break;case"oneTaskHandle":if(0===b.code&&0===(null===(l=b.data)||void 0===l?void 0:l.bizCode)){var ma,na;$.message="\u5B8C\u6210\u4EFB\u52A1\uFF1A\u83B7\u5F97 ".concat(null===(ma=b.data)||void 0===ma||null===(na=ma.result)||void 0===na?void 0:na.acquiredScore," \u7206\u7AF9\uD83E\uDDE8")}else $.message="\u4EFB\u52A1\u5931\u8D25\uFF1A\u539F\u56E0 ".concat(JSON.stringify(b));break;case"tigernian_sign":if(0===b.code&&0===(null===(m=b.data)||void 0===m?void 0:m.bizCode)){var oa,pa,qa,ra,sa;$.message="\u7B7E\u5230\u6210\u529F\uFF1A\u83B7\u5F97 ".concat(null===(oa=b.data)||void 0===oa||null===(pa=oa.result)||void 0===pa||null===(qa=pa.scoreResult)||void 0===qa?void 0:qa.score," \u7206\u7AF9\uD83E\uDDE8\uFF0C\u5176\u4ED6\u5956\u52B1 ").concat(JSON.stringify(null===(ra=b.data)||void 0===ra||null===(sa=ra.result)||void 0===sa?void 0:sa.scoreResult))}else $.message=-6004===(null===(n=b.data)||void 0===n?void 0:n.bizCode)?"\u5DF2\u7ECF\u7B7E\u5230\u8FC7\u4E86":"\u7B7E\u5230\u5931\u8D25\uFF1A\u539F\u56E0".concat(JSON.stringify(b));break;case"tigernian_getSignHomeData":if(0===b.code&&0===(null===(o=b.data)||void 0===o?void 0:o.bizCode)){var ta,ua;$.message="\u5F53\u524D\u5DF2\u8FDE\u7EED\u7B7E\u5230 ".concat(null===(ta=b.data)||void 0===ta||null===(ua=ta.result)||void 0===ua?void 0:ua.progress," \u5929/22\u5929")}break;case"getHelpCode":$.data={};var va=_.filter(b.items,function(a){return a.text.match(/^[\w-]*$/g)}),wa=_.uniqBy(va,function(a){return a.fromUser}),xa=_.sampleSize(wa,5),ya=xa.map(function(a){return a.text});$.inviteList=$.inviteList.concat(ya),$.message="\u5DF2\u4ECE\u4E91\u7AEF\u52A9\u529B\u6C60\u83B7\u53D6\u52305\u6761\u52A9\u529B\u7801\u8FFD\u52A0\u5230\u52A9\u529B\u5217\u8868\u3002\u52A9\u529B\u5217\u8868\u9884\u89C8\uFF1A".concat(JSON.stringify($.inviteList)),$.modules=0;break;case"getAppId":if(0===b.code&&0===(null===(p=b.data)||void 0===p?void 0:p.bizCode)){var za,Aa;$.appId=null===(za=b.data)||void 0===za||null===(Aa=za.result)||void 0===Aa?void 0:Aa.appId}else $.message="\u83B7\u53D6\u5E97\u94FA\u4FE1\u606F\u5931\u8D25\uFF1A".concat(JSON.stringify(b));break;case"getShopHomeData":if(0===b.code&&0===(null===(q=b.data)||void 0===q?void 0:q.bizCode)){var Ba,Ca;$.taskList=null===(Ba=b.data)||void 0===Ba||null===(Ca=Ba.result)||void 0===Ca?void 0:Ca.taskVos}else $.message="\u83B7\u53D6\u5E97\u94FA\u4EFB\u52A1\u5217\u8868\u5931\u8D25\uFF1A".concat(JSON.stringify(b));break;case"doOneShopTask":if(0===b.code&&0===(null===(r=b.data)||void 0===r?void 0:r.bizCode)){var Da,Ea;$.message="\u5B8C\u6210\u4EFB\u52A1\uFF1A\u83B7\u5F97 ".concat(null===(Da=b.data)||void 0===Da||null===(Ea=Da.result)||void 0===Ea?void 0:Ea.acquiredScore," \u7206\u7AF9\uD83E\uDDE8")}else $.message="\u4EFB\u52A1\u5931\u8D25\uFF1A\u539F\u56E0 ".concat(JSON.stringify(b));break;case"doShopLottery":if(0===b.code&&0===(null===(s=b.data)||void 0===s?void 0:s.bizCode)){var Fa,Ga,Ha;switch(null===(t=b.data)||void 0===t||null===(u=t.result)||void 0===u||null===(v=u.userAwardDto)||void 0===v?void 0:v.type){case 0:$.message="\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97\u7A7A\u6C14";break;case 1:$.message="\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97\u4F18\u60E0\u5238";break;case 2:case 3:$.message="\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97\u672A\u77E5";break;case 5:$.message="\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97 ".concat(null===(w=b.data)||void 0===w||null===(x=w.result)||void 0===x||null===(y=x.userAwardDto)||void 0===y||null===(z=y.scoreVo)||void 0===z?void 0:z.quantity," \u7206\u7AF9\uD83E\uDDE8");default:$.message="\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97\u672A\u77E5";}0===(null===(Fa=b.data)||void 0===Fa||null===(Ga=Fa.result)||void 0===Ga||null===(Ha=Ga.userActionResult)||void 0===Ha?void 0:Ha.userLightChance)&&$.call.pop()}else 0===b.code&&112===(null===(A=b.data)||void 0===A?void 0:A.bizCode)?($.message="\u62BD\u5956\u6B21\u6570\u5DF2\u7528\u5B8C",$.call.pop()):0===b.code&&-1007===(null===(B=b.data)||void 0===B?void 0:B.bizCode)?$.message="\u4F60\u5DF2\u62BD\u8FC7\u6B64\u5956\u9879":($.message="\u62BD\u5956\u51FA\u9519\uFF1A".concat(JSON.stringify(b)),$.call.pop());break;case"getPartyHomeData":if(0===b.code&&0===(null===(C=b.data)||void 0===C?void 0:C.bizCode)){var Ia;$.message="\u4F60\u7684\u6CB8\u817E\u4E4B\u591C\u52A9\u529B\u7801\u4E3A\uFF1A\n".concat(null===(Ia=b.data.result)||void 0===Ia?void 0:Ia.inviteCode)}else $.message="\u83B7\u53D6\u6CB8\u817E\u4E4B\u591C\u52A9\u529B\u7801\u5931\u8D25\uFF1A".concat(JSON.stringify(b));break;case"helpPartyCode":switch(null===(D=b.data)||void 0===D?void 0:D.bizCode){case 0:$.message="\u52A9\u529B\u6210\u529F\uFF1A".concat(JSON.stringify(b));break;case-201:$.message="\u4E0D\u80FD\u4E3A\u81EA\u5DF1\u52A9\u529B";break;case-202:$.message="\u52A9\u529B\u6B21\u6570\u5DF2\u7528\u5149",$.partyHelpMax=!0;break;default:$.message="\u52A9\u529B\u5931\u8D25\uFF1A".concat(JSON.stringify(b));}break;case"jdjrTaskDetail":if(0===b.resultCode){var Ja,Ka;$.jdjrTaskList=(null===(Ja=b.resultData)||void 0===Ja||null===(Ka=Ja.data)||void 0===Ka?void 0:Ka.views)||[]}else $.jdjrTaskList=[],$.message="\u83B7\u53D6\u4EAC\u4E1C\u91D1\u878D\u4EFB\u52A1\u5931\u8D25";break;case"jdjrDoTask":$.message=0===b.resultCode?"\u4EFB\u52A1\u5B8C\u6210":"\u4EFB\u52A1\u5931\u8D25";break;case"browseProducts":if(0===b.code){var La,Ma,Na=null===(La=b.data)||void 0===La||null===(Ma=La.result)||void 0===Ma?void 0:Ma.acquiredScore;$.message=0<+Na?"\u52A0\u8D2D|\u6D4F\u89C8\u6210\u529F,\u83B7\u5F97:".concat(Na," \u7206\u7AF9\uD83E\uDDE8"):"\u52A0\u8D2D|\u6D4F\u89C8\u6210\u529F"}else $.message="\u52A0\u8D2D|\u6D4F\u89C8\u5931\u8D25";break;default:$.error="\u4EC0\u4E48\u60C5\u51B5\uFF0C\u6709\u672A\u77E5\u5F02\u5E38\u203C\uFE0F"+a;}}function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a}