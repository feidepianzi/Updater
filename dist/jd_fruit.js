"use strict";/**
 * name: 东东农场
 * author: @leeco
 * apply: shortcuts
 * activity: https://h5.m.jd.com/babelDiy/Zeus/3KSjXqQabiTuD1cJ28QskrpWoBKT/index.html
 * tips: Only for learning and communication, strictly prohibited for commercial use, please delete within 24 hours
 */ // 到指令里运行需要注释掉
// const $ = {}
// $.inviteList = [];
// $.pkInviteList = [];
// $.secretpInfo = {};
// $.innerPkInviteList = [];
var JD_API_HOST="https://api.m.jd.com/client.action?functionId=";/** 下方放 call 文本，来控制函数执行 **/ /** 下方放 next 文本，来控制逻辑执行 **/ //   form 来源   to 目标   callback 回调   call 调用
//   当回调有值则执行回调，没有则去往目标，没有目标则去往来源
//   func.xxx -> logicHandler($) -> func.http -> logicHandler($) -> func.xxx
//   回调完执行 next，视情况来清空 callback
//   error 为错误信息，会终止当前账号在指令中的运行，直接运行输出log开始下一个账号或结束
/**
 * 初始化
 */function init(){// 任务流程初始化
// 生成随机 UA UUID
$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.taskStep=1,$.uuid=randomString(40),$.UA="jdapp;iPhone;10.2.0;13.1.2;".concat($.uuid,";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}/**
 * 云端推送提示
 */function cloudTip(){$.message="\u5176\u4ED6\u529F\u80FD\u548C\u4EFB\u52A1\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}/**
 * 初始化农场, 可获取果树及用户信息API
 */function initForFarm(){return $.callback="Func.request",void takeRequest("initForFarm");// next
}/**
 * 获取农场状态
 */function treeState(){if(2===$.farmInfo.treeState||3===$.farmInfo.treeState){var a;$.error="\u3010\u23F0 \u63D0\u9192\u3011".concat(null===(a=$.farmInfo.farmUserPro)||void 0===a?void 0:a.name,"\u5DF2\u53EF\u9886\u53D6\n\u8BF7\u53BB\u4EAC\u4E1CAPP\u6216\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u67E5\u770B")}else if(1===$.farmInfo.treeState){var b;$.message="".concat(null===(b=$.farmInfo.farmUserPro)||void 0===b?void 0:b.name,"\u79CD\u690D\u4E2D...")}else 0===$.farmInfo.treeState&&(//已下单购买, 但未开始种植新的水果
$.error="\u3010\u23F0 \u63D0\u9192\u3011\u60A8\u5FD8\u4E86\u79CD\u690D\u65B0\u7684\u6C34\u679C\n\u8BF7\u53BB\u4EAC\u4E1CAPP\u6216\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9009\u8D2D\u5E76\u79CD\u690D\u65B0\u7684\u6C34\u679C");document.write(JSON.stringify($))}/**
 * 获取农场任务信息
 */function taskInitForFarm(){return $.callback="Func.request",void takeRequest("taskInitForFarm");// next
}/**
 * 获取好友列表
 */function friendListInitForFarm(){return $.callback="Func.request",void takeRequest("friendListInitForFarm");// next
}/**
 * 好友助力
 */function help(){return($.to="Func.logicHandler",$.call=["help"],$.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteId=$.inviteList.shift(),!$.inviteId||$.selfHelpMax)?($.to="",$.call.pop(),void document.write(JSON.stringify($))):($.message="".concat($.UserName,"\u53BB\u52A9\u529B\uFF0C\u5BF9\u65B9\u52A9\u529B\u7801:\n").concat($.inviteId),$.callback="Func.request",void takeRequest("helpInvite"))}/**
 * 做签到任务
 */function signForFarm(){var a;if(!(null!==(a=$.farmTask.signInit)&&void 0!==a&&a.todaySigned)){return $.callback="Func.request",void takeRequest("signForFarm");// next
}else{var b,c;$.message="\u4ECA\u5929\u5DF2\u7B7E\u5230,\u8FDE\u7EED\u7B7E\u5230".concat(null===(b=$.farmTask.signInit)||void 0===b?void 0:b.totalSigned,",\u4E0B\u6B21\u7B7E\u5230\u53EF\u5F97").concat(null===(c=$.farmTask.signInit)||void 0===c?void 0:c.signEnergyEachAmount,"g"),document.write(JSON.stringify($))}}/**
 * 做浏览任务
 */function browseAdTaskForFarm(){var a,b,c,d;return($.to="Func.logicHandler",$.call=["browseAdTaskForFarm"],$.oneTask=null===(a=$.farmTask.gotBrowseTaskAdInit)||void 0===a||null===(b=a.userBrowseTaskAds)||void 0===b?void 0:b.shift(),$.advertId=null===(c=$.oneTask)||void 0===c?void 0:c.advertId,null!==(d=$.farmTask.gotBrowseTaskAdInit)&&void 0!==d&&d.f||!$.oneTask)?($.to="",$.call.pop(),$.message="\u6D4F\u89C8\u4EFB\u52A1\u5DF2\u7ECF\u5168\u90E8\u5B8C\u6210~",void document.write(JSON.stringify($))):($.oneTask.hadFinishedTimes>=$.oneTask.limit&&document.write(JSON.stringify($)),$.taskType=0,$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneTask.mainTitle," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takeRequest("browseAdTaskForFarm"));// 做过的任务则跳过重新执行
}/**
 * 做浇水十次任务
 */function doTenWater(){if($.to="Func.logicHandler",$.call=["doTenWater"],$.waterCount=$.waterCount||0,$.waterCount+$.farmTask.totalWaterTaskInit.totalWaterTaskTimes<$.farmTask.totalWaterTaskInit.totalWaterTaskLimit){return $.callback="Func.request",void takeRequest("waterGoodForFarm");// next
}else return $.to="",$.call.pop(),$.message="\u4ECA\u65E5\u5DF2\u5B8C\u621010\u6B21\u6D47\u6C34\u4EFB\u52A1",void document.write(JSON.stringify($))}/**
 * 领取阶段性水滴奖励
 */function gotStageAwardForFarm(){var a,b,c,d;return 0===(null===(a=$.waterResult)||void 0===a?void 0:a.waterStatus)&&10===(null===(b=$.waterResult)||void 0===b?void 0:b.treeEnergy)?($.callback="Func.request",$.taskType="1",$.waterResult.waterStatusMsg="\u679C\u6811\u53D1\u82BD\u4E86",void takeRequest("gotStageAwardForFarm")):1===(null===(c=$.waterResult)||void 0===c?void 0:c.waterStatus)?($.callback="Func.request",$.taskType="2",$.waterResult.waterStatusMsg="\u679C\u6811\u5F00\u82B1\u4E86",void takeRequest("gotStageAwardForFarm")):2===(null===(d=$.waterResult)||void 0===d?void 0:d.waterStatus)?($.callback="Func.request",$.taskType="3",$.waterResult.waterStatusMsg="\u679C\u6811\u7ED3\u679C\u4E86",void takeRequest("gotStageAwardForFarm")):($.message="\u6682\u65E0\u9636\u6BB5\u5956\u52B1",void document.write(JSON.stringify($)));// next
}/**
 * 领取首次浇水奖励
 */function firstWaterTaskForFarm(){return void taskInitForFarm();// next
}/**
 * 领取十次浇水奖励
 */function totalWaterTaskForFarm(){if(!$.farmTask.totalWaterTaskInit.f&&$.farmTask.totalWaterTaskInit.totalWaterTaskTimes>=$.farmTask.totalWaterTaskInit.totalWaterTaskLimit){return $.callback="Func.request",void takeRequest("totalWaterTaskForFarm");// next
}else $.farmTask.totalWaterTaskInit.totalWaterTaskTimes<$.farmTask.totalWaterTaskInit.totalWaterTaskLimit&&($.message="\u3010\u5341\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u4EFB\u52A1\u672A\u5B8C\u6210\uFF0C\u4ECA\u65E5\u6D47\u6C34".concat($.farmTask.totalWaterTaskInit.totalWaterTaskTimes,"\u6B21"));document.write(JSON.stringify($))}/**
 * 做定时领水
 */function gotThreeMealForFarm(){if(!$.farmTask.gotThreeMealInit.f){return $.callback="Func.request",void takeRequest("gotThreeMealForFarm");// next
}else $.message="\u5F53\u524D\u4E0D\u5728\u5B9A\u65F6\u9886\u6C34\u65F6\u95F4\u65AD\u6216\u8005\u5DF2\u7ECF\u9886\u8FC7",document.write(JSON.stringify($))}/**
 * 给两个好友浇水
 */function waterFriendForFarm(){var a,b,c;if($.to="Func.logicHandler",$.call=["waterFriendForFarm"],!$.needWaterFriends&&0<(null===(a=$.friendList.friends)||void 0===a?void 0:a.length))$.needWaterFriends=$.friendList.friends.filter(function(a){return 1===a.friendState});else if(0>=(null===(b=$.friendList.friends)||void 0===b?void 0:b.length))return $.to="",$.call.pop(),$.message="\u60A8\u7684\u597D\u53CB\u5217\u8868\u6682\u65E0\u597D\u53CB,\u5FEB\u53BB\u9080\u8BF7\u60A8\u7684\u597D\u53CB\u5427!",void document.write(JSON.stringify($));if(2>(null===(c=$.farmTask.waterFriendTaskInit)||void 0===c?void 0:c.waterFriendCountKey)){var d;return $.shareCode=$.needWaterFriends[null===(d=$.farmTask.waterFriendTaskInit)||void 0===d?void 0:d.waterFriendCountKey].shareCode,$.callback="Func.request",void takeRequest("waterFriendForFarm");// next
}else return $.to="",$.call.pop(),$.message="\u4ECA\u65E5\u5DF2\u7ECF\u4E3A\u4E24\u4E2A\u597D\u53CB\u6D47\u6C34",void document.write(JSON.stringify($))}/**
 * 提交请求信息
 */function takeRequest(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{},d=c.log,e=c.random,f="",g="";"initForFarm"===a?(f="body=".concat(encodeURIComponent(JSON.stringify({version:4})),"&appid=wh5&clientVersion=9.1.0;"),g=getRequest("initForFarm",f)):"taskInitForFarm"===a?(f="{\"version\":14,\"channel\":1,\"babelChannel\":\"120\"}",g=getRequest("taskInitForFarm",f,"GET")):"signForFarm"===a?(f="{}",g=getRequest("signForFarm",f,"GET")):"browseAdTaskForFarm"===a?(f="{\"advertId\":\"".concat($.advertId,"\",\"type\":\"").concat($.taskType,"\"}"),g=getRequest("browseAdTaskForFarm",f,"GET")):"waterGoodForFarm"===a?(f="{}",g=getRequest("waterGoodForFarm",f,"GET")):"helpInvite"===a?(f="{\"imageUrl\":\"\",\"nickName\":\"\",\"shareCode\":\"".concat($.inviteId,"\",\"babelChannel\":\"3\",\"version\":2,\"channel\":1}"),g=getRequest("initForFarm",f,"GET")):"gotStageAwardForFarm"===a?(f="{\"type\":".concat($.taskType,"}"),g=getRequest("gotStageAwardForFarm",f,"GET")):"firstWaterTaskForFarm"===a?(f="{}",g=getRequest("firstWaterTaskForFarm",f,"GET")):"totalWaterTaskForFarm"===a?(f="{}",g=getRequest("totalWaterTaskForFarm",f,"GET")):"gotWaterGoalTaskForFarm"===a?(f="{\"type\":3}",g=getRequest("gotWaterGoalTaskForFarm",f,"GET")):"gotThreeMealForFarm"===a?(f="{}",g=getRequest("gotThreeMealForFarm",f,"GET")):"friendListInitForFarm"===a?(f="{\"version\":4,\"channel\":1}",g=getRequest("friendListInitForFarm",f,"GET")):"waterFriendForFarm"===a?(f="{\"shareCode\":".concat($.shareCode,",\"version\":6,\"channel\":1}"),g=getRequest("waterFriendForFarm",f,"GET")):"wxTaskDetail"===a?(f="functionId=funny_getTaskDetail&body={\"appSign\":\"2\",\"channel\":1,\"shopSign\":\"\"}&client=wh5&clientVersion=1.0.0",g=getRequest("funny_getTaskDetail",f)):"zoo_shopLotteryInfo"===a?(f="functionId=zoo_shopLotteryInfo&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),g=getRequest("zoo_shopLotteryInfo",f)):"zoo_bdCollectScore"===a?(f=getPostBody(a),g=getRequest("zoo_bdCollectScore",f)):"qryCompositeMaterials"===a?(f="functionId=qryCompositeMaterials&body={\"qryParam\":\"[{\\\"type\\\":\\\"advertGroup\\\",\\\"mapTo\\\":\\\"resultData\\\",\\\"id\\\":\\\"05371960\\\"}]\",\"activityId\":\"2s7hhSTbhMgxpGoa9JDnbDzJTaBB\",\"pageId\":\"\",\"reqSrc\":\"\",\"applyKey\":\"jd_star\"}&client=wh5&clientVersion=1.0.0",g=getRequest("qryCompositeMaterials",f)):"zoo_boxShopLottery"===a?(f="functionId=zoo_boxShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),g=getRequest("zoo_boxShopLottery",f)):"zoo_wishShopLottery"===a?(f="functionId=zoo_wishShopLottery&body={\"shopSign\":\"".concat($.shopSign,"\"}&client=wh5&clientVersion=1.0.0"),g=getRequest("zoo_boxShopLottery",f)):"zoo_myMap"===a?(f="functionId=zoo_myMap&body={}&client=wh5&clientVersion=1.0.0",g=getRequest("zoo_myMap",f)):"zoo_getWelfareScore"===a?(f=getPostBody(a),g=getRequest("zoo_getWelfareScore",f)):"jdjrTaskDetail"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\"}",g=getRequest("listTask",f)):"jdjrAcceptTask"===a?(f="reqData={\"eid\":\"\",\"sdkToken\":\"jdd014JYKVE2S6UEEIWPKA4B5ZKBS4N6Y6X5GX2NXL4IYUMHKF3EEVK52RQHBYXRZ67XWQF5N7XB6Y2YKYRTGQW4GV5OFGPDPFP3MZINWG2A01234567\",\"id\":\"".concat($.taskId,"\"}"),g=getRequest("acceptTask",f)):"add_car"===a?(f="functionId=funny_collectScore&body={\"taskId\":".concat($.taskId,",\"taskToken\":\"").concat($.taskToken,"\",\"ss\":\"{\\\"extraData\\\":{\\\"log\\\":\\\"").concat(d,"\\\",\\\"sceneid\\\":\\\"HWJhPageh5\\\"},\\\"secretp\\\":\\\"").concat($.secretp,"\\\",\\\"random\\\":\\\"").concat(e,"\\\"}\",\"actionType\":1}&client=wh5&clientVersion=1.0.0&uuid=c67093f5dd58d33fc5305cdc61e46a9741e05c5b&appid=o2_act"),g=getRequest("funny_collectScore",f)):($.error="takeRequest \u9519\u8BEF".concat(a),console.log("\u9519\u8BEF".concat(a)));$.request=g,document.write(JSON.stringify($))}/**
 * 获取请求信息
 * @param {string} type 请求的接口类型
 * @param {string} body 请求body
 * @param {string} method 请求方式
 * @returns 
 */function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"POST",d=JD_API_HOST+a;("listTask"===a||"acceptTask"===a)&&(d="https://ms.jr.jd.com/gw/generic/hy/h5/m/".concat(a)),"GET"===c&&(d="".concat(JD_API_HOST).concat(a,"&appid=wh5&body=").concat(encodeURIComponent(b)));var e={Accept:"application/json, text/plain, */*",Origin:"https://h5.m.jd.com","Accept-Encoding":"gzip, deflate, br","Cache-Control":"no-cache",Cookie:$.cookie,"Content-Type":"application/x-www-form-urlencoded",Host:"api.m.jd.com",Connection:"keep-alive","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","User-Agent":$.UA||"jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:"https://home.m.jd.com/myJd/newhome.action","Accept-Language":"zh-cn"};return{url:d,method:c,headers:e,body:b}}// 组织请求 body
function getPostBody(a){var b="";return b="helpInvite"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:2,inviteId:$.inviteId,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"pkHelp"===a?"functionId=zoo_pk_assistGroup&body=".concat(JSON.stringify({confirmFlag:1,inviteId:$.pkInviteId,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_collectProduceScore"===a?"functionId=zoo_collectProduceScore&body=".concat(JSON.stringify({ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"zoo_getWelfareScore"===a?"functionId=zoo_getWelfareScore&body=".concat(JSON.stringify({type:2,currentScence:$.currentScence,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"add_car"===a?"functionId=funny_collectScore&body=".concat(JSON.stringify({taskId:$.taskId,taskToken:$.taskToken,actionType:1,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"):"functionId=".concat(a,"&body=").concat(JSON.stringify({taskId:$.oneTask.taskId,actionType:1,taskToken:$.oneActivityInfo.taskToken,ss:getBody()}),"&client=wh5&clientVersion=1.0.0"),b}// 处理返回信息
function dealReturn(a,b){var c;switch(b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8D26\u53F7cookie\u662F\u5426\u8FC7\u671F\u6216\u9519\u8BEF"),a){case"initForFarm":if(!b)$.error="\u670D\u52A1\u5668\u8FD4\u56DE\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u539F\u56E0~";else if($.farmInfo=b,$.farmInfo.farmUserPro){var d,e,f;$.success=1,$.message="\u3010\u597D\u53CB\u4E92\u52A9\u7801\u3011:\n".concat((null===(d=$.farmInfo)||void 0===d||null===(e=d.farmUserPro)||void 0===e?void 0:e.shareCode)||"\u52A9\u529B\u5DF2\u6EE1\uFF0C\u83B7\u53D6\u52A9\u529B\u7801\u5931\u8D25","\n\u3010\u5DF2\u5151\u6362\u6C34\u679C\u3011").concat(null===(f=$.farmInfo.farmUserPro)||void 0===f?void 0:f.winTimes,"\u6B21")}else $.error="\u3010\u6570\u636E\u5F02\u5E38\u3011\u8BF7\u624B\u52A8\u767B\u5F55\u4EAC\u4E1Capp\u67E5\u770B\u662F\u5426\u5DF2\u9009\u62E9\u4E86\u6C34\u679C\u79CD\u690D\uFF0CCookie\u662F\u5426\u6B63\u786E\u4E14\u672A\u8FC7\u671F \uFF0C\u8FD4\u56DE\u7684\u6570\u636E: ".concat(JSON.stringify($.farmInfo)," ");break;case"taskInitForFarm":b?$.farmTask=b:$.error="\u670D\u52A1\u5668\u8FD4\u56DE\u6570\u636E\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u539F\u56E0~";break;case"friendListInitForFarm":$.friendList=b;break;case"signForFarm":$.message="0"===b.code?"\u3010\u7B7E\u5230\u6210\u529F\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u7B7E\u5230\u7ED3\u679C:  ".concat(JSON.stringify(b));break;case"gotWaterGoalTaskForFarm":"0"===b.code&&($.message="\u3010\u88AB\u6C34\u6EF4\u7838\u4E2D\u3011\u83B7\u5F97".concat(b.addEnergy,"g\uD83D\uDCA7"));break;case"browseAdTaskForFarm":$.browseResult=b;break;case"browseAdTaskForFarmHandle":$.message="0"===b.code?"\u5B8C\u6210\u4EFB\u52A1\uFF0C\u83B7\u5F97".concat(null===b||void 0===b?void 0:b.amount,"g\uD83D\uDCA7"):"\u6D4F\u89C8\u4EFB\u52A1\u7ED3\u679C: ".concat(JSON.stringify(b));break;case"helpInvite":switch(null===(c=b.helpResult)||void 0===c?void 0:c.code){case"0":$.message="\u52A9\u529B\u6210\u529F\uFF0C\u83B7\u5F97".concat(b.helpResult.salveHelpAddWater,"g\u6C34\u6EF4");break;case"8":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u60A8\u4ECA\u5929\u52A9\u529B\u6B21\u6570\u5DF2\u8017\u5C3D",$.selfHelpMax=!0;break;case"9":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u5DF2\u7ECF\u52A9\u529B\u8FC7\u8BE5\u597D\u53CB";break;case"10":$.message="\u52A9\u529B\u5931\u8D25\uFF0C\u8BE5\u597D\u53CB\u5DF2\u6EE1\u4E94\u4EBA\u52A9\u529B";break;default:$.message="\u52A9\u529B\u5931\u8D25\uFF1A".concat(JSON.stringify(b.message));}break;case"waterGoodForFarm":if($.waterResult=b,"0"!==$.waterResult.code)$.message="\u6D47\u6C34\u51FA\u73B0\u5931\u8D25\u5F02\u5E38,\u8DF3\u51FA\u4E0D\u5728\u7EE7\u7EED\u6D47\u6C34",$.to="",$.call.pop();else if($.message="\u6210\u529F\u6D47\u6C34 ".concat(++$.waterCount," \u6B21\uFF0C\u5269\u4F59\u6C34\u6EF4").concat($.waterResult.totalEnergy,"g"),$.waterResult.finished){var g;$.error="\u3010\u23F0 \u63D0\u9192\u3011".concat(null===(g=$.farmInfo.farmUserPro)||void 0===g?void 0:g.name,"\u5DF2\u53EF\u9886\u53D6\n\u8BF7\u53BB\u4EAC\u4E1CAPP\u6216\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u67E5\u770B");break}else if(10>$.waterResult.totalEnergy){$.message="\u6C34\u6EF4\u4E0D\u591F\uFF0C\u7ED3\u675F\u6D47\u6C34",$.to="",$.call.pop();break}break;case"gotStageAwardForFarm":"0"===b.code&&($.message="\u3010".concat($.waterResult.waterStatusMsg,"\u3011\u5956\u52B1").concat(b.addEnergy,"g\uD83D\uDCA7"));break;case"firstWaterTaskForFarm":$.message="0"===b.code?"\u3010\u9996\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u9886\u53D6\u9996\u6B21\u6D47\u6C34\u5956\u52B1\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"totalWaterTaskForFarm":$.message="0"===b.code?"\u3010\u5341\u6B21\u6D47\u6C34\u5956\u52B1\u3011\u83B7\u5F97".concat(b.totalWaterTaskEnergy,"g\uD83D\uDCA7"):"\u9886\u53D610\u6B21\u6D47\u6C34\u5956\u52B1\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"gotThreeMealForFarm":$.message="0"===b.code?"\u3010\u5B9A\u65F6\u9886\u6C34\u3011\u83B7\u5F97".concat(b.amount,"g\uD83D\uDCA7"):"\u5B9A\u65F6\u9886\u6C34\u6210\u529F\u7ED3\u679C\uFF1A".concat(JSON.stringify(b.message));break;case"waterFriendForFarm":if("0"===b.code){var h;$.message="\u4E3A\u7B2C".concat(null===(h=$.farmTask.waterFriendTaskInit)||void 0===h?void 0:h.waterFriendCountKey,"\u4E2A\u597D\u53CB\u6D47\u6C34\u6210\u529F")}else"11"===b.code&&($.message="\u6D47\u6C34\u5931\u8D25\uFF1A\u6C34\u6EF4\u4E0D\u591F");break;default:$.error="\u672A\u5224\u65AD\u7684\u5F02\u5E38".concat(a);}}function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a}