"use strict";function Next(a){switch(a){case"JDSecKilling_next":$.callback="",dealReturn("JDSecKilling",$.data),$.taskType?($.callback="Func.request",$.next=1,takeRequest("JDSecKillingNext"),!document.body.innerText&&($.callback="",$.next=0,dealReturn("JDSecKillingNext",$.data),document.write(JSON.stringify($)))):document.write(JSON.stringify($));break;case"JDSecKilling_next_next":document.body.innerText||($.callback="",$.next=0,dealReturn("JDSecKillingNext",$.data),document.write(JSON.stringify($)));break;case"getNHSignInfo_next":$.callback="",$.call.pop(),dealReturn("getNHSignInfo",$.data),document.write(JSON.stringify($));break;case"queryInteractiveInfo_next":$.callback="",$.call.pop(),dealReturn("queryInteractiveInfo",$.data),document.write(JSON.stringify($));break;case"doInteractiveAssignment_next":$.callback="",$.call.pop(),dealReturn("doInteractiveAssignment",$.data),document.write(JSON.stringify($));break;case"get618ZCInfo_next":$.callback="",$.call.pop(),dealReturn("get618ZCInfo",$.data),document.write(JSON.stringify($));break;case"do618ZCReward_next":$.callback="",$.call.pop(),dealReturn("do618ZCReward",$.data),document.write(JSON.stringify($));break;case"get618ZCTaskList_next":$.callback="",$.call.pop(),dealReturn("get618ZCTaskList",$.data),document.write(JSON.stringify($));break;case"do618ZCBrowseTask_next":if($.callback="",dealReturn("do618ZCBrowseTask",$.data),$.callbackInfo&&0==$.callbackInfo.code){var b;return $.wait=5,$.next=1,$.callback="Func.request",$.itemId=null===(b=$.callbackInfo.data)||void 0===b?void 0:b.itemId,void takeRequest("qryViewkitCallbackResult")}else $.message="\u6D4F\u89C8\u4EFB\u52A1\u5931\u8D25\uFF1A\u9047\u5230\u672A\u77E5\u9519\u8BEF\u6216ID".concat($.contentId,"\u5185\u5BB9\u4E0D\u5B58\u5728"),document.write(JSON.stringify($));break;case"do618ZCBrowseTask_next_next":$.callback="",$.wait=0,dealReturn("qryViewkitCallbackResult",$.data),document.write(JSON.stringify($));break;case"get618SuperBrandInfo_next":$.callback="",$.call.pop(),dealReturn("get618SuperBrandInfo",$.data),document.write(JSON.stringify($));break;case"get618SuperBrandSign_next":$.callback="",$.call.pop(),dealReturn("get618SuperBrandSign",$.data),document.write(JSON.stringify($));break;case"do618SuperBrandLottery_next":$.callback="",$.call.pop(),dealReturn("do618SuperBrandLottery",$.data),document.write(JSON.stringify($));break;case"doBeanSign_next":$.callback="",$.call.pop(),dealReturn("doBeanSign",$.data),document.write(JSON.stringify($));break;case"getBeanBrowseTaskAward_next":$.callback="",$.call.pop(),dealReturn("getBeanBrowseTaskAward",$.data),document.write(JSON.stringify($));break;case"getBeanTaskList_next":$.callback="",$.call.pop(),dealReturn("getBeanTaskList",$.data),document.write(JSON.stringify($));break;case"doBeanTask_next":if(9==$.taskType||8==$.taskType){return $.wait=$.oneTask.waitDuration||5,$.next=1,$.callback="Func.request",void takeRequest("doBeanWaitTask",$.data)}else $.callback="",dealReturn("doBeanTask",$.data),document.write(JSON.stringify($));break;case"doBeanTask_next_next":$.wait=1,$.next=0,$.callback="",dealReturn("doBeanWaitTask",$.data),document.write(JSON.stringify($));break;case"getLzdzCK_next":$.callback="",$.call.pop(),$.HEAD=!1,dealReturn("getLzdzCK",$.headerData),document.write(JSON.stringify($));break;case"getLzdzLogWithAD_next":$.callback="",$.call.pop(),$.HEAD=!1,dealReturn("getLzdzLogWithAD",$.headerData),document.write(JSON.stringify($));break;case"getLzdzToken_next":$.callback="",$.call.pop(),dealReturn("getLzdzToken",$.data),document.write(JSON.stringify($));break;case"getLzdzPin_next":$.callback="",$.call.pop(),dealReturn("getLzdzPin",$.data),document.write(JSON.stringify($));break;case"getLzdzInfo_next":$.callback="",$.call.pop(),dealReturn("getLzdzInfo",$.data),document.write(JSON.stringify($));break;case"doLzdzTaskFollowShop_next":$.callback="",$.call.pop(),dealReturn("doLzdzTaskFollowShop",$.data),document.write(JSON.stringify($));break;case"getLzdzOpenCardInfo_next":$.callback="",$.call.pop(),dealReturn("getLzdzOpenCardInfo",$.data),document.write(JSON.stringify($));break;case"doLzdzOpenCardTask_next":if(dealReturn("getShopOpenCardInfo",$.data),$.self.success){return $.next=1,$.callback="Func.request",void takeRequest("bindWithVender")}else document.write(JSON.stringify($));break;case"doLzdzOpenCardTask_next_next":$.callback="",dealReturn("bindWithVender",$.data),document.write(JSON.stringify($));break;case"getPlantBeanInfo_next":$.callback="",$.call.pop(),dealReturn("getPlantBeanInfo",$.data),document.write(JSON.stringify($));break;case"receiveNutrients_next":$.callback="",$.call.pop(),dealReturn("receiveNutrients",$.data),document.write(JSON.stringify($));case"oneActivityInfo_next":$.callback="",$.call.pop(),dealReturn("oneActivityInfo",$.data),document.write(JSON.stringify($));default:$.callback="";var c=(a+"").replace("_next","");dealReturn(c,$.data),document.write(JSON.stringify($));}}