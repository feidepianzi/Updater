"use strict";function Next(a){switch(a){case"promote_getTaskDetail_next":$.callback="",$.call.pop(),dealReturn("promote_getTaskDetail",$.data),document.write(JSON.stringify($));break;case"promote_sign_next":$.callback="",$.next=1,dealReturn("promote_sign",$.data),$.callback="Func.request",takePostRequest("promote_getSignHomeData"),document.body.innerText||($.callback="",dealReturn("promote_getSignHomeData",$.data),document.write(JSON.stringify($)));break;case"promote_sign_next_next":document.body.innerText||($.callback="",dealReturn("promote_getSignHomeData",$.data),document.write(JSON.stringify($)));break;case"oneTaskHandle_next":$.callback="",dealReturn("oneTaskHandle",$.data),$.call.pop(),document.write(JSON.stringify($));break;case"oneActivityInfo_next":$.callback="",dealReturn("promote_collectScore",$.data),0===$.callbackInfo.code&&$.callbackInfo.data.result&&$.callbackInfo.data.result.taskToken?($.wait=8,$.next=1,$.callback="Func.request",callbackResult("qryViewkitCallbackResult"),!document.body.innerText&&($.callback="",$.wait=1,$.message="".concat($.data.toast.subTitle),document.write(JSON.stringify($)))):[1,2,3,5,26].includes($.oneTask.taskType)?($.success=1,$.message="\u4EFB\u52A1\u5B8C\u6210",document.write(JSON.stringify($))):-1002===$.callbackInfo.data.bizCode?($.error="oneActivityInfo ".concat($.oneTask.taskId,"/").concat($.oneTask.taskType," \u4EFB\u52A1\u5931\u8D25\uFF0C\u6B64\u8D26\u53F7\u706B\u7206\uFF0C\u8BF7\u624B\u52A8\u505A\u4EFB\u52A1\u7B49\u5F85\u66F4\u65B0~"),document.write(JSON.stringify($))):($.message="oneActivityInfo ".concat($.oneTask.taskId,"/").concat($.oneTask.taskType," \u4EFB\u52A1\u5931\u8D25\uFF0C\u672A\u77E5\u9519\u8BEF\u7B49\u5F85\u4FEE\u590D\uFF0C\u5C1D\u8BD5\u7EE7\u7EED\u8FD0\u884C\u6307\u4EE4~"),document.write(JSON.stringify($)));break;case"oneActivityInfo_next_next":document.body.innerText||($.callback="",$.wait=1,$.message="".concat($.data.toast.subTitle),document.write(JSON.stringify($)));break;case"promote_getFeedDetail_next":$.callback="",dealReturn("promote_getFeedDetail",$.data),$.productList=$.feedDetailInfo.productInfoVos||$.feedDetailInfo.browseShopVo,$.needTime=+$.feedDetailInfo.maxTimes-+$.feedDetailInfo.times,$.call.pop(),$.next=0,browseProducts();break;case"jdjrDoTask_next":$.wait=8,$.callback="Func.request",takePostRequest("jdjrDoTaskFinish"),document.body.innerText||($.callback="",dealReturn("jdjrDoTask",$.data),document.write(JSON.stringify($)));break;case"jdjrDoTask_next_next":document.body.innerText||($.callback="",dealReturn("jdjrDoTask",$.data),document.write(JSON.stringify($)));break;case"getAppId_next":$.callback="",dealReturn("getAppId",$.data),$.call.pop(),$.next=0,getShopHomeData();break;case"getShopHomeData_next":$.callback="",dealReturn("getShopHomeData",$.data),$.call.pop(),$.next=0,doOneShopTask();break;case"jm_promotion_queryPromotionInfoByShopId_next":$.callback="",$.call.pop(),dealReturn("jm_promotion_queryPromotionInfoByShopId",$.data),document.write(JSON.stringify($));break;case"jm_marketing_maininfo_next":$.callback="",$.call.pop(),dealReturn("jm_marketing_maininfo",$.data),document.write(JSON.stringify($));break;case"jm_hidden_tryDoTask_next":$.callback="",$.call.pop(),dealReturn("jm_hidden_tryDoTask",$.data),document.write(JSON.stringify($));break;case"doOneDiceTask8_next":return dealReturn("doOneDiceTask8",$.data),$.wait=5,void takePostRequest("doOneDiceTask8_2");$.callback="",$.call.pop(),$.wait=void 0,dealReturn("doOneDiceTask8",$.data),document.write(JSON.stringify($));break;case"doOneDiceTask8_next_next":$.callback="",$.call.pop(),$.wait=void 0,dealReturn("doOneDiceTask8",$.data),document.write(JSON.stringify($));break;case"demo":$.callback="",$.call.pop(),dealReturn("doOneDiceTask8",$.data),document.write(JSON.stringify($));break;default:$.callback="";var b=(a+"").replace("_next","");dealReturn(b,$.data),document.write(JSON.stringify($));}}