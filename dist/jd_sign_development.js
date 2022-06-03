"use strict";function _createForOfIteratorHelper(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=c.call(a)},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}$.Utils=Utils();function init(){$.helpCodeList1=$.helpCodeObj.活动1助力码||[],$.inviteList?($.inviteList=Array.isArray($.inviteList)?$.inviteList:[$.inviteList],$.inviteList=$.inviteList.filter(function(a){return""!==a})):$.inviteList=[],$.taskStep=1,$.uuid=$.Utils.randomString(40),$.UA="jdapp;iPhone;10.2.0;13.1.2;".concat($.uuid,";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167853;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;"),$.self={},$.message="\u672C\u6307\u4EE4\u4F5C\u4E3A\u81EA\u52A8\u5316\u65B9\u6848\u5F00\u6E90\u5206\u4EAB\uFF0C\u5E76\u4E0D\u4FDD\u8BC1\u4ED6\u5E26\u6765\u7684\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u4EFB\u4F55\u526F\u4F5C\u7528\u8BF7\u81EA\u884C\u8D1F\u8D23\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u505C\u6B62\u4F7F\u7528\uFF01",document.write(JSON.stringify($))}function cloudTip(){$.message="\u6307\u4EE4\u5DF2\u8FD0\u884C\u5B8C\u6BD5\uFF01\n\u5176\u4ED6\u529F\u80FD\u548C\u4EFB\u52A1\u6B63\u5728\u5F00\u53D1\u4E2D\uFF0C\u4E0A\u7EBF\u5C06\u81EA\u52A8\u63A8\u9001\u5230\u6307\u4EE4\u4E2D\uFF0C\u65E0\u9700\u4EFB\u4F55\u64CD\u4F5C~",document.write(JSON.stringify($))}function JingDongBean(){return $.callback="Func.request",void takeRequest("JingDongBean")}function JingDongGetCash(){return $.callback="Func.request",void takeRequest("JingDongGetCash")}function JDSecKilling(){return $.callback="Func.request",void takeRequest("JDSecKilling")}function help(){document.write(JSON.stringify($))}function do618SuperBrand(){switch($.to="Func.logicHandler",$.call=["do618SuperBrand"],$.taskStep++){case 1:get618SuperBrandInfo();break;case 2:$.encryptProjectId?get618SuperBrandSign():$.taskStep=-1;break;case 3:get618SuperBrandInfo();break;case 4:300<=$.self.count?do618SuperBrandLottery():($.taskStep=-1,$.message="\u91D1\u5E01\u4E0D\u8DB3\uFF0C\u6682\u4E0D\u62BD\u5956~");break;default:$.to="",$.call.pop(),$.taskStep=1,$.self.data=void 0,document.write(JSON.stringify($));}}function get618SuperBrandInfo(){return"get618SuperBrandInfo"==$.call[$.call.length-1]||$.call.push("get618SuperBrandInfo"),$.callback="Func.request",void takeRequest("get618SuperBrandInfo")}function get618SuperBrandSign(){if("get618SuperBrandSign"==$.call[$.call.length-1]||$.call.push("get618SuperBrandSign"),1===$.activitySign1Info.ext.sign1.status){return $.itemId=$.activitySign1Info.ext.sign1.itemId,$.message="\u5F00\u59CB\u4EFB\u52A1\uFF1A".concat($.activitySign1Info.assignmentName,",\u8BF7\u7A0D\u540E..."),$.callback="Func.request",void takeRequest("get618SuperBrandSign")}else $.call.pop(),$.message="\u4ECA\u65E5\u5DF2\u7B7E\u5230",document.write(JSON.stringify($))}function do618SuperBrandLottery(){return"do618SuperBrandLottery"==$.call[$.call.length-1]||$.call.push("do618SuperBrandLottery"),$.message="\u7B7E\u5230\u62BD\u5956\u4E2D...",$.callback="Func.request",void takeRequest("do618SuperBrandLottery")}function do618ZC(){switch($.to="Func.logicHandler",$.call=["do618ZC"],$.taskStep++){case 1:get618ZCInfo();break;case 2:$.projectId?get618ZCTaskList():$.taskStep=-1;break;case 3:do618ZCReward();break;case 4:do618ZCRecommendTask();break;case 5:$.self.count=0,do618ZCBrowseTask();break;case 6:do618ZCLottery();break;default:$.to="",$.call.pop(),$.taskStep=1,$.self.data=void 0,document.write(JSON.stringify($));}}function get618ZCInfo(){return"get618ZCInfo"==$.call[$.call.length-1]||$.call.push("get618ZCInfo"),$.callback="Func.request",void takeRequest("get618ZCInfo")}function do618ZCReward(){return"do618ZCReward"==$.call[$.call.length-1]||$.call.push("do618ZCReward"),$.callback="Func.request",void takeRequest("do618ZCReward")}function get618ZCTaskList(){return"get618ZCTaskList"==$.call[$.call.length-1]||$.call.push("get618ZCTaskList"),$.callback="Func.request",void takeRequest("get618ZCTaskList")}function do618ZCBrowseTask(){return("do618ZCBrowseTask"==$.call[$.call.length-1]||$.call.push("do618ZCBrowseTask"),20<=$.self.count||20<=$.self.current)?($.call.pop(),$.next=0,$.self.count=0,$.message="\u6D4F\u89C8\u4EFB\u52A1\u5DF2\u5168\u90FD\u5B8C\u6210",void document.write(JSON.stringify($))):($.contentId=$.Utils.randomInt(1e7,3e7),$.message="\u505A\u6D4F\u89C8\u5185\u5BB9\u4EFB\u52A1\uFF0C\u7B2C".concat(++$.self.count,"\u6B21/20 \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takeRequest("do618ZCBrowseTask"))}function do618ZCRecommendTask(){var a;return("do618ZCRecommendTask"==$.call[$.call.length-1]||$.call.push("do618ZCRecommendTask"),$.oneActivityInfo=$.taskList.shift(),!$.oneActivityInfo)?($.call.pop(),$.next=0,$.message="\u63A8\u8350\u4EFB\u52A1\u5DF2\u5168\u90FD\u5B8C\u6210~",void document.write(JSON.stringify($))):("undefined"!=typeof $.oneActivityInfo.current&&($.self.current=$.oneActivityInfo.current),0!=$.oneActivityInfo.status||!(null!==(a=$.oneActivityInfo)&&void 0!==a&&a.itemId))?void document.write(JSON.stringify($)):($.itemId=$.oneActivityInfo.itemId,$.assignmentId=$.oneActivityInfo.assignmentId,$.message="\u505A\u4EFB\u52A1\uFF1A".concat($.oneActivityInfo.title," \u7B49\u5F85\u5B8C\u6210..."),$.callback="Func.request",void takeRequest("do618ZCRecommendTask"))}function do618ZCLottery(){return"do618ZCLottery"==$.call[$.call.length-1]||$.call.push("do618ZCLottery"),$.callback="Func.request",void takeRequest("do618ZCLottery")}function doNHSign(){switch($.to="Func.logicHandler",$.call=["doNHSign"],$.taskStep++){case 1:getNHSignInfo();break;case 2:$.encryptProjectId&&queryInteractiveInfo($.encryptProjectId,"aceaceglqd20211215");break;case 3:var a,b=new RegExp(new Date().getDate()+""),c=_createForOfIteratorHelper($.self.data);try{for(c.s();!(a=c.n()).done;){var d=a.value;d.assignmentName.match(b)?doInteractiveAssignment($.encryptProjectId,d.encryptAssignmentId,"aceaceglqd20211215",0):"\u7B7E\u5230"==d.assignmentName&&($.self.item=d)}}catch(a){c.e(a)}finally{c.f()}document.body.innerText||doInteractiveAssignment($.encryptProjectId,$.self.item.encryptAssignmentId,"aceaceglqd20211215");break;default:$.to="",$.call.pop(),$.taskStep=1,$.self.data=void 0,document.write(JSON.stringify($));}}function getNHSignInfo(){return"getNHSignInfo"==$.call[$.call.length-1]||$.call.push("getNHSignInfo"),$.callback="Func.request",void takeRequest("getNHSignInfo")}function queryInteractiveInfo(a,b){return"queryInteractiveInfo"==$.call[$.call.length-1]||$.call.push("queryInteractiveInfo"),$.sourceCode=b,$.callback="Func.request",void takeRequest("queryInteractiveInfo")}function doInteractiveAssignment(a,b,c,d){return"doInteractiveAssignment"==$.call[$.call.length-1]||$.call.push("doInteractiveAssignment"),$.sourceCode=c,$.AssignmentId=b,$.taskType=d,$.callback="Func.request",void takeRequest("doInteractiveAssignment")}function takeRequest(a){var b,c=(null===(b=$.signList)||void 0===b?void 0:b.shift())||{},d=c.log,e=c.random,f="",g="",h="",i=Date.now();switch(a){case"JingDongBean":g="https://api.m.jd.com/client.action",f="functionId=signBeanIndex&appid=ld",h=getRequest(g,f);break;case"JingDongGetCash":g="https://api.m.jd.com/client.action?functionId=cash_sign&body=%7B%22remind%22%3A0%2C%22inviteCode%22%3A%22%22%2C%22type%22%3A0%2C%22breakReward%22%3A0%7D&client=apple&clientVersion=9.0.8&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&sign=7e2f8bcec13978a691567257af4fdce9&st=1596954745073&sv=111",h=getRequest(g,f,"GET");break;case"JDSecKilling":g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=homePageV2&appid=SecKill2020",h=getRequest(g,f,"POST",headers);break;case"JDSecKillingNext":g="https://api.m.jd.com/client.action",headers={Origin:"https://h5.m.jd.com"},f="functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22".concat($.taskType.projectId,"%22%2C%22encryptAssignmentId%22%3A%22").concat($.taskType.taskId,"%22%2C%22completionFlag%22%3Atrue%7D&client=wh5&appid=SecKill2020"),h=getRequest(g,f,"POST",headers);break;case"getNHSignInfo":g="https://prodev.m.jd.com/mall/active/fARfxZh3zdMqs4tkFBhpqaQKTGA/index.html",headers={ContentType:"null"},h=getRequest(g,f,"GET");break;case"queryInteractiveInfo":g="https://api.m.jd.com/client.action?functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22".concat($.encryptProjectId,"%22%2C%22sourceCode%22%3A%22").concat($.sourceCode,"%22%7D&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType="),f="",h=getRequest(g,f);break;case"doInteractiveAssignment":f={encryptProjectId:$.encryptProjectId,encryptAssignmentId:$.AssignmentId,sourceCode:$.sourceCode,completionFlag:!0},0===$.taskType&&(f={encryptProjectId:$.encryptProjectId,encryptAssignmentId:$.AssignmentId,sourceCode:$.sourceCode,completionFlag:!0,ext:{exchangeNum:1}}),g="https://api.m.jd.com/client.action?functionId=doInteractiveAssignment&body=".concat(JSON.stringify(f),"&appid=publicUseApi&client=wh5&clientVersion=1.0.0&sid=&uuid=&area=22_2005_2009_36999&networkType="),g=encodeURI(g),f="",h=getRequest(g,f);break;case"get618ZCInfo":g="https://prodev.m.jd.com/mall/active/U18CGRp9tTnAkH1HfHnhBEWrfrr/index.html",headers={ContentType:"null"},h=getRequest(g,f,"GET");break;case"do618ZCReward":f={projectId:$.projectId,assignmentId:$.assignmentIdReward,type:"16"},g="https://api.m.jd.com/interactive_reward?functionId=interactive_reward&appid=contenth5_common&body=".concat(encodeURIComponent(JSON.stringify(f)),"&client=wh5&partner=ace1033463nrjs"),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,null,"POST",headers);break;case"get618ZCTaskList":var j,k=[{type:"18",projectId:$.projectId,assignmentId:$.assignmentIdBrowse,doneHide:!1}],l=_createForOfIteratorHelper($.scanTaskCodes);try{for(l.s();!(j=l.n()).done;){var m=j.value;k.push({type:"1",projectId:$.projectId,assignmentId:m,doneHide:!1})}}catch(a){l.e(a)}finally{l.f()}g="https://api.m.jd.com/interactive_info?functionId=interactive_info&appid=contenth5_common&body=".concat(encodeURIComponent(JSON.stringify(k)),"&client=wh5&partner=ace1033463nrjs"),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,null,"POST",headers);break;case"do618ZCBrowseTask":f={projectId:$.projectId,assignmentId:$.assignmentIdBrowse,type:"18",contentId:$.contentId,contentType:"ugc"},g="https://api.m.jd.com/interactive_accept?functionId=interactive_accept&appid=contenth5_common&body=".concat(encodeURIComponent(JSON.stringify(f)),"&client=wh5&partner=ace1033463nrjs"),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,null,"POST",headers);break;case"do618ZCRecommendTask":f={projectId:$.projectId,assignmentId:$.assignmentId,type:"1",itemId:$.itemId},g="https://api.m.jd.com/interactive_done?functionId=interactive_done&appid=contenth5_common&body=".concat(encodeURIComponent(JSON.stringify(f)),"&client=wh5&partner=ace1033463nrjs"),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,null,"POST",headers);break;case"do618ZCLottery":f={projectId:$.projectId,assignmentId:$.assignmentIdLottery,type:"17"},g="https://api.m.jd.com/interactive_done?functionId=interactive_done&appid=contenth5_common&body=".concat(encodeURIComponent(JSON.stringify(f)),"&client=wh5&partner=ace1033463nrjs"),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,f,"POST",headers);break;case"qryViewkitCallbackResult":g="https://api.m.jd.com/client.action?functionId=qryViewkitCallbackResult",f="appid=wh5&area=5_274_49707_49973&body={\"dataSource\":\"babelInteractive\",\"method\":\"customDoInteractiveAssignmentForBabel\",\"reqParams\":\"{\\\"itemId\\\":\\\"".concat($.itemId,"\\\",\\\"encryptProjectId\\\":\\\"").concat($.projectId,"\\\",\\\"encryptAssignmentId\\\":\\\"").concat($.assignmentIdBrowse,"\\\"}\"}&build=167283&client=apple&clientVersion=9.1.0"),h=getRequest(g,f);break;case"get618SuperBrandInfo":g="https://api.m.jd.com/api?functionId=showSecondFloorSignInfo&appid=ProductZ4Brand&client=wh5&t=".concat(i,"&body=").concat(encodeURIComponent("{\"source\":\"sign\"}")),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,f,"POST",headers);break;case"get618SuperBrandSign":g="https://api.m.jd.com/api?functionId=superBrandDoTask&appid=ProductZ4Brand&client=wh5&t=".concat(i,"&body=").concat(encodeURIComponent("{\"source\":\"sign\",\"activityId\":".concat($.activityId,",\"encryptProjectId\":\"").concat($.encryptProjectId,"\",\"encryptAssignmentId\":\"").concat($.activitySign1Info.encryptAssignmentId,"\",\"assignmentType\":5,\"itemId\":\"").concat($.itemId,"\",\"actionType\":0}"))),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,f,"POST",headers);break;case"do618SuperBrandLottery":g="https://api.m.jd.com/api?functionId=superBrandTaskLottery&appid=ProductZ4Brand&client=wh5&t=".concat(i,"&body=").concat(encodeURIComponent("{\"source\":\"sign\",\"activityId\":".concat($.activityId,",\"encryptProjectId\":\"").concat($.encryptProjectId,"\",\"encryptAssignmentId\":\"D2bsHLsAAPxoUhfKtHU3TvMpWrw\"}"))),headers={Origin:"https://prodev.m.jd.com",Referer:"https://prodev.m.jd.com"},h=getRequest(g,f,"POST",headers);break;default:$.error="takeRequest \u9519\u8BEF".concat(a),void 0;}$.request=h,document.write(JSON.stringify($))}function getRequest(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"POST",d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:{},e={Accept:"application/json, text/plain, */*",Origin:d.Origin||"https://h5.m.jd.com","Accept-Encoding":"gzip, deflate, br","Cache-Control":"no-cache",Cookie:$.cookie,"Content-Type":d.ContentType||"application/x-www-form-urlencoded",Host:"api.m.jd.com",Connection:"keep-alive","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-site","User-Agent":$.UA||"jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",Referer:d.Referer||"https://home.m.jd.com/myJd/newhome.action","Accept-Language":"zh-cn"};return{url:a,method:c,headers:e,body:b}}function dealReturn(a,b){var c,d,e,f,g,h,i,j;b||($.error="\u63A5\u53E3\u8FD4\u56DE\u6570\u636E\u4E3A\u7A7A\uFF0C\u68C0\u67E5\u8D26\u53F7cookie\u662F\u5426\u8FC7\u671F\u6216\u9519\u8BEF");var k=$.Utils.stringify(b);switch(a){case"JingDongBean":if(3===b.code)$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F";else if(k.match(/跳转至拼图/))$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u9700\u8981\u62FC\u56FE\u9A8C\u8BC1 \u26A0\uFE0F";else if(!k.match(/\"status\":\"?1\"?/))$.message=k.match(/(已签到|新人签到)/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":b.match(/人数较多|S101/)?"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u7B7E\u5230\u4EBA\u6570\u8F83\u591A \u26A0\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";else if(k.match(/dailyAward/)){var l,m,n;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(l=b.data)||void 0===l||null===(m=l.dailyAward)||void 0===m||null===(n=m.beanAward)||void 0===n?void 0:n.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(k.match(/continuityAward/)){var o,p,q;$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(null===(o=b.data)||void 0===o||null===(p=o.continuityAward)||void 0===p||null===(q=p.beanAward)||void 0===q?void 0:q.beanCount)+"\u4EAC\u8C46 \uD83D\uDC36"}else if(k.match(/新人签到/)){var J=k.match(/beanCount\":\"(\d+)\".+今天/);$.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: "+(J?J[1]:"\u65E0")+"\u4EAC\u8C46 \uD83D\uDC36"}else $.message="\u4EAC\u4E1C\u5546\u57CE-\u4EAC\u8C46: \u6210\u529F, \u660E\u7EC6: \u65E0\u4EAC\u8C46 \uD83D\uDC36";break;case"JingDongGetCash":if(null!==(c=b.data)&&void 0!==c&&c.success&&null!==(d=b.data)&&void 0!==d&&d.result){var r,s;$.message="\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u6210\u529F, \u660E\u7EC6: ".concat((null===(r=b.data)||void 0===r||null===(s=r.result)||void 0===s?void 0:s.signCash)||"\u65E0","\u73B0\u91D1 \uD83D\uDCB0")}else $.message=k.match(/\"bizCode\":201|已经签过/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u5DF2\u7B7E\u8FC7 \u26A0\uFE0F":k.match(/\"code\":300|退出登录/)?"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":"\u4EAC\u4E1C\u5546\u57CE-\u73B0\u91D1: \u5931\u8D25, \u539F\u56E0: \u672A\u77E5 \u26A0\uFE0F";break;case"JDSecKilling":203==b.code||3==b.code||101==b.code?$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u539F\u56E0: Cookie\u5931\u6548\u203C\uFE0F":null!==(e=b.result)&&void 0!==e&&e.projectId&&null!==(f=b.result)&&void 0!==f&&f.taskId?$.taskType={projectId:b.result.projectId,taskId:b.result.taskId}:$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, \u6682\u65E0\u6709\u6548\u6D3B\u52A8 \u26A0\uFE0F";break;case"JDSecKillingNext":if(0==b.code&&0==b.subCode){var K=k.match(/"discount":(\d.*?),/)[2];$.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u6210\u529F, \u660E\u7EC6: ".concat(K||"\u65E0","\u7EA2\u5305 \uD83E\uDDE7")}else $.message="\u4EAC\u4E1C\u79D2\u6740-\u7EA2\u5305: \u5931\u8D25, ".concat(103==b.subCode?"\u539F\u56E0: \u5DF2\u9886\u53D6":b.msg?b.msg:"\u539F\u56E0: \u672A\u77E5"," \u26A0\uFE0F");break;case"getNHSignInfo":try{$.encryptProjectId=b.match(/"projectId":"(.*?)"/)[1],$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u6210\u529F, \u660E\u7EC6: \u6D4B\u8BD5\u6210\u529F"}catch(a){$.encryptProjectId=null,$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u5931\u8D25, \u660E\u7EC6: \u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8ID \u26A0\uFE0F"}$.data={};break;case"queryInteractiveInfo":"0"===b.code?($.self.data=b.assignmentList,$.message="\u83B7\u53D6\u4EA4\u4E92\u4FE1\u606F\u6210\u529F"):$.message="\u83B7\u53D6\u4EA4\u4E92\u4FE1\u606F\u5931\u8D25";break;case"doInteractiveAssignment":if("0"===b.subCode){var t,u,v,w,x,y,z,A,B,C,D,E,F;$.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u6210\u529F, \u660E\u7EC6: ".concat((null===(t=b.rewardsInfo)||void 0===t?void 0:t.successRewards[10])&&(null===(u=b.rewardsInfo)||void 0===u?void 0:u.successRewards[10][0].rewardName)+"--\u4F18\u60E0\u5238--"+(null===(v=b.rewardsInfo)||void 0===v?void 0:v.successRewards[10][0].usageThreshold)+"-"+(null===(w=b.rewardsInfo)||void 0===w?void 0:w.successRewards[10][0].quota)||(null===(x=b.rewardsInfo)||void 0===x?void 0:x.successRewards[12])&&(null===(y=b.rewardsInfo)||void 0===y?void 0:y.successRewards[12][0].rewardName)+"--\u652F\u4ED8\u5238--"+(null===(z=b.rewardsInfo)||void 0===z?void 0:z.successRewards[12][0].usageThreshold)+"-"+(null===(A=b.rewardsInfo)||void 0===A?void 0:A.successRewards[12][0].quota)||(null===(B=b.rewardsInfo)||void 0===B?void 0:B.successRewards[11])&&(null===(C=b.rewardsInfo)||void 0===C?void 0:C.successRewards[11][0].rewardName)+"--\u7EA2\u5305--"+(null===(D=b.rewardsInfo)||void 0===D?void 0:D.successRewards[11][0].usageThreshold)+"-"+(null===(E=b.rewardsInfo)||void 0===E?void 0:E.successRewards[11][0].quota)||JSON.stringify(null===(F=b.rewardsInfo)||void 0===F?void 0:F.successRewards))}else $.message="\u4EAC\u4E1C\u5E74\u8D27-\u62BD\u7B7E: \u5931\u8D25, \u660E\u7EC6: "+b.msg;break;case"get618ZCInfo":try{$.projectId=b.match(/"projectId":"(.*?)"/)[1],$.assignmentIdBrowse=b.match(/"normalTabColor":"#FFFFFF","assignmentId":"(.*?)","activeTabColor"/)[1],$.assignmentIdLottery=b.match(/"writeColor":"","assignmentId":"(.*?)","defaultYellowGoodsPic"/)[1],$.assignmentIdReward=b.match(/"taskCode":"(.*?)"/)[1],$.scanTaskCodes=(b.match(/"scanTaskCodes":"(.*?)"/)[1]+"").split(","),$.message="\u4EAC\u4E1C618-\u79CD\u8349\u8857: \u6210\u529F, \u5DF2\u83B7\u53D6\u6D3B\u52A8\u4FE1\u606F"}catch(a){$.projectId=null,$.message="\u4EAC\u4E1C618-\u79CD\u8349\u8857: \u5931\u8D25, \u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8\u4FE1\u606F \u26A0\uFE0F"}$.data={};break;case"get618ZCTaskList":0==b.code&&b.data?($.taskList=b.data,$.message="\u83B7\u53D6\u4EFB\u52A1\u5217\u8868\u6210\u529F"):($.taskStep=-1,$.message="\u83B7\u53D6\u4EFB\u52A1\u5217\u8868\u5931\u8D25");break;case"do618ZCRecommendTask":$.message=0==b.code&&b.data?"\u5B8C\u6210\u4EFB\u52A1\uFF1A".concat(b.data.rewardMsg):0==b.code&&b.message?"\u5B8C\u6210\u4EFB\u52A1\uFF1A".concat(b.message):"\u4EFB\u52A1\u5931\u8D25\uFF1A\u539F\u56E0".concat(JSON.stringify(b));break;case"do618ZCReward":$.message=0==b.code?"\u5F53\u5929\u9996\u767B\u6709\u5956\uFF1A".concat(b.message||JSON.stringify(b)):"\u5F53\u5929\u9996\u767B\u6709\u5956\uFF1A\u51FA\u9519!\u539F\u56E0".concat(SON.stringify(b));break;case"do618ZCBrowseTask":$.callbackInfo=b;break;case"do618ZCLottery":if(0==b.code&&null!==(g=b.data)&&void 0!==g&&g.rewardMsg){var G;$.message="\u62BD\u5956\u6210\u529F\uFF1A".concat(null===(G=b.data)||void 0===G?void 0:G.rewardMsg)}else 0==b.code&&b.message?($.call.pop(),$.message="\u62BD\u5956\u5931\u8D25\uFF1A".concat(b.message)):($.call.pop(),$.message="\u62BD\u5956\u5931\u8D25\uFF1A".concat(JSON.stringify(b)));break;case"qryViewkitCallbackResult":$.message=0==b.code&&"query success!"==b.msg?"\u5B8C\u6210\u4EFB\u52A1\uFF1A\u6D4F\u89C8\u6210\u529F":"\u4EFB\u52A1\u5931\u8D25\uFF1A\u539F\u56E0".concat(JSON.stringify(b));break;case"get618SuperBrandInfo":if(0==b.code&&null!==(h=b.data)&&void 0!==h&&h.result){var L=b.data.result;L.activityBaseInfo&&($.activityId=L.activityBaseInfo.activityId,$.activityName=L.activityBaseInfo.activityName,$.self.count=L.activityUserInfo.userStarNum,$.encryptProjectId=L.activityBaseInfo.encryptProjectId,$.activitySign1Info=L.activitySign1Info),$.message="\u4EAC\u4E1C618-\u7279\u7269Z: \u6210\u529F, \u5DF2\u83B7\u53D6\u6D3B\u52A8\u4FE1\u606F\n\u5F53\u524D\u6D3B\u52A8\uFF1A".concat($.activityName,"  ").concat($.activityId)}else $.encryptProjectId=null,$.message="\u4EAC\u4E1C618-\u7279\u7269Z: \u5931\u8D25, \u65E0\u6CD5\u83B7\u53D6\u6D3B\u52A8\u4FE1\u606F \u26A0\uFE0F";break;case"get618SuperBrandSign":$.message=0==b.code&&0==(null===(i=b.data)||void 0===i?void 0:i.bizCode)?"\u7B7E\u5230\u6210\u529F\uFF1A".concat(b.data.bizMsg):0==b.code?"\u7B7E\u5230\u5931\u8D25\uFF1A".concat(b.data.bizMsg):"\u53D1\u751F\u9519\u8BEF\uFF1A".concat(JSON.stringify(b));break;case"do618SuperBrandLottery":if(0==b.code&&"TK000"==(null===(j=b.data)||void 0===j?void 0:j.bizCode)){var H,I;$.message=null!==(H=b.data)&&void 0!==H&&null!==(I=H.result)&&void 0!==I&&I.userAwardInfo?"\u62BD\u5956\u6210\u529F\uFF1A\u83B7\u5F97".concat(b.data.result.userAwardInfo.awardName||b.data.result.userAwardInfo.beanNum+"\u4EAC\u8C46"):"\u62BD\u5956\u62BD\u5956\uFF1A\u83B7\u5F97\u7A7A\u6C14"}else $.message=0==b.code?"\u62BD\u5956\u5931\u8D25\uFF1A".concat(b.data.bizMsg):"\u53D1\u751F\u9519\u8BEF\uFF1A".concat(JSON.stringify(b));break;default:}}function Utils(){return{randomString:function randomString(b){b=b||32;for(var c="abcdef0123456789",d=c.length,a="",f=0;f<b;f++)a+=c.charAt(Math.floor(Math.random()*d));return a},stringify:function stringify(a){try{if("string"==typeof JSON.stringify(a))return JSON.stringify(a)}catch(b){return a}},randomInt:function randomInt(a,b){return a=Math.ceil(a),b=Math.floor(b),Math.floor(Math.random()*(b-a))+a}}}