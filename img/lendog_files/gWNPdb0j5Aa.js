;/*FB_PKG_DELIM*/

__d("IGDSInfoPanoFilledIcon.react",["IGDSSVGIconBase.react","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){var b=d("react-compiler-runtime").c(3),e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=i.jsx("path",{d:"M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm-.182 5.955a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Zm1.614 11.318h-2.865a1 1 0 0 1 0-2H11V12.05h-.432a1 1 0 0 1 0-2H12a1 1 0 0 1 1 1v4.727h.433a1 1 0 1 1 0 2Z"}),b[0]=e):e=b[0];b[1]!==a?(e=i.jsx(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:e})),b[1]=a,b[2]=e):e=b[2];return e}b=i.memo(a);g["default"]=b}),98);
__d("InstagramWebAgeCollectionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5139");b=d("FalcoLoggerInternal").create("instagram_web_age_collection",a);e=b;g["default"]=e}),98);
__d("PolarisPlatformBadge",["PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=d("PolarisConfig").getPlatformInstallBadgeLinks();switch(a){case"ios":return(a=b==null?void 0:b.ios)!=null?a:"";case"android":return(a=b==null?void 0:b.android)!=null?a:"";case"windows_nt_10":return(a=b==null?void 0:b.windows_nt_10)!=null?a:""}return""}g["default"]=a}),98);
__d("PolarisAppInstallLink.react",["fbt","PolarisConfigConstants","PolarisFastLink.react","PolarisIgLiteCarbonUpsellsUtils","PolarisLoggedOutCtaClickLogger","PolarisNavigationUtils","PolarisPlatformBadge","polarisGetAppPlatform","polarisGetInstallAppHref","polarisLogAction","react","stylex","usePolarisPageID"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react")),l=j.useMemo,m={badgeImage:{height:"x1vqgdyp",$$css:!0},root:{marginEnd:"x1emribx x2pgyrj",$$css:!0},smallBadgeImage:{height:"x10w6t97",$$css:!0}};function a(a){var b=a.campaign,e=a.children,f=a.ctaTypeV2,g=a["data-testid"];g=a.isDismissible;var j=g===void 0?!1:g,n=a.isForIGCarbonPath,o=a.medium,p=a.onClick;g=a.platform;var q=a.role,r=a.smallHeight;a=a.xstyle;var s=g!=null&&g.length>0?g:d("polarisGetAppPlatform").getAppPlatform(),t=n===!0||d("PolarisIgLiteCarbonUpsellsUtils").isIgLiteCarbonUpsellsEligible(),u=c("usePolarisPageID")();g=function(a){if(p){p(a);if(a.isDefaultPrevented())return}a.preventDefault();c("polarisLogAction")("appInstallClick",{medium:w(),platform:s,source:b});d("PolarisLoggedOutCtaClickLogger").logLoggedOutCtaClickEvent("app_store_open",f,u,{isDismissible:j});d("PolarisNavigationUtils").openURLWithFullPageReload(v())};var v=function(){return t?d("polarisGetInstallAppHref").getInstallIGLiteCarbonAppHref(b,w(),s):d("polarisGetInstallAppHref").getInstallAppHref(b,w(),s)},w=function(){return o!=null?o:e!=null?"installLink":"badge"},x=l(function(){var a,b;switch(s){case d("PolarisConfigConstants").appPlatformTypes.ANDROID:b=h._(/*BTDS*/"__JHASH__de9bS1h0rCI__JHASH__");a=c("PolarisPlatformBadge")("android");break;case d("PolarisConfigConstants").appPlatformTypes.IOS:b=h._(/*BTDS*/"__JHASH__ar1zDXBHc3G__JHASH__");a=c("PolarisPlatformBadge")("ios");break;case d("PolarisConfigConstants").appPlatformTypes.WINDOWSNT10:b=h._(/*BTDS*/"__JHASH__Zd_MKNjbfpb__JHASH__");a=c("PolarisPlatformBadge")("windows_nt_10");break}var e;a==null||a===""?e=null:e=k.jsx("img",{alt:b,className:n===!0?"xwvwv9b":(i||(i=c("stylex")))(r!==!0&&m.badgeImage,r===!0&&m.smallBadgeImage),src:a});return{altText:b,badgeImage:e}},[n,s,r]);return k.jsx(c("PolarisFastLink.react"),{"aria-label":x.altText,className:(i||(i=c("stylex")))(m.root,a),"data-testid":void 0,href:v(),onClick:g,role:q,children:e!=null?e:x.badgeImage})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("PolarisBirthdayConstants",[],(function(a,b,c,d,e,f){"use strict";a={INPUT_AGE:"input_age",LEARN_MORE:"learn_more",LOG_OUT:"log_out",SEE_CONFIRMATION:"see_confirmation",SEE_PAGE:"see_page",SUBMIT_AGE:"submit_age"};b={CHECKPOINT:"checkpoint"};f.StepTypes=a;f.EntrypointTypes=b}),66);
__d("PolarisBirthdayFormInput.react",["PolarisAgeCollectionHelpers","PolarisDOBFieldSelect.react","PolarisDateHelpers","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useState;function a(a){var b=d("react-compiler-runtime").c(12),e=a.birthday,f=a.className,g=a.flex,h=a.onBirthdayChange,k,l;b[0]!==e?(a=e!=null?d("PolarisDateHelpers").dateStringToDateType(e):d("PolarisDateHelpers").getOneYearAgoDateType(),k=j,l=d("PolarisAgeCollectionHelpers").getDOBInvalidInputMessage(a),b[0]=e,b[1]=a,b[2]=k,b[3]=l):(a=b[1],k=b[2],l=b[3]);e=k(l);k=e[0];var m=e[1];b[4]!==h?(l=function(a){m(d("PolarisAgeCollectionHelpers").getDOBInvalidInputMessage(a)),h(a)},b[4]=h,b[5]=l):l=b[5];e=l;b[6]!==f||b[7]!==a||b[8]!==k||b[9]!==g||b[10]!==e?(l=i.jsx(c("PolarisDOBFieldSelect.react"),{className:f,date:a,errorColor:"ig-secondary-text",errorMessage:k,flex:g,onDateChange:e,showAge:!1}),b[6]=f,b[7]=a,b[8]=k,b[9]=g,b[10]=e,b[11]=l):l=b[11];return l}g["default"]=a}),98);
__d("PolarisBirthdayHelpers",["InstagramWebAgeCollectionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(b,d,e,g,a){var h=e!=null?e.year.toString()+"-"+e.month.toString()+"-"+e.day.toString():"";c("InstagramWebAgeCollectionFalcoEvent").log(function(){return{collected_birthday:h,endpoint:d,exception_message:g,exception_trace:a,step:b}})}g.logBirthdayAction=a}),98);
__d("PolarisBirthdaysAdditionalInfoModal.react",["ix","IGCoreImage.react","IGCoreModal.react","IGDSBox.react","IGDSText.react","IGDSTextVariants.react","PolarisAgeCollectionHelpers","PolarisBirthdayConstants","PolarisBirthdayHelpers","PolarisExternalLink.react","PolarisIGCoreButton.react","PolarisIGCoreModalHeader.react","PolarisNavigationUtils","PolarisUA","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react");function a(a){var b=d("react-compiler-runtime").c(15),e=a.entrypoint,f=a.helpLink;a=a.onClose;var g=f==null?d("PolarisAgeCollectionHelpers").DATA_POLICY_LINK:f;e!=null&&d("PolarisBirthdayHelpers").logBirthdayAction(d("PolarisBirthdayConstants").StepTypes.LEARN_MORE,e);b[0]!==a?(f=j.jsx(c("PolarisIGCoreModalHeader.react"),{onClose:a,children:d("PolarisAgeCollectionHelpers").BIRTHDAYS_HEADER}),b[0]=a,b[1]=f):f=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("IGDSBox.react"),{padding:1,position:"relative",children:j.jsx(c("IGCoreImage.react"),{alt:d("PolarisAgeCollectionHelpers").BIRTHDAY_ICON_ALT_TEXT,src:{dark:h("877412"),light:h("877413")}})}),b[2]=e):e=b[2];b[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=j.jsx(c("IGDSBox.react"),{marginTop:1,padding:2,position:"relative",children:j.jsx(d("IGDSTextVariants.react").IGDSTextTitle,{children:d("PolarisAgeCollectionHelpers").BIRTHDAYS_ON_IG_TITLE})}),b[3]=a):a=b[3];var i;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(i=j.jsx(c("IGDSBox.react"),{padding:3,position:"relative",children:j.jsx(d("IGDSTextVariants.react").IGDSTextBody,{textAlign:"center",children:d("PolarisAgeCollectionHelpers").BIRTHDAYS_ON_IG_BODY})}),b[4]=i):i=b[4];var k;b[5]!==g?(k=d("PolarisUA").isMobile()&&j.jsx(c("IGDSBox.react"),{padding:2,position:"relative",children:j.jsxs(c("PolarisExternalLink.react"),{href:g,onClick:function(){return d("PolarisNavigationUtils").openExternalURL(g)},children:[d("PolarisAgeCollectionHelpers").LEARN_MORE," "]})}),b[5]=g,b[6]=k):k=b[6];b[7]!==k?(e=j.jsxs(c("IGDSBox.react"),{alignItems:"center",marginBottom:5,marginEnd:7,marginStart:7,marginTop:5,position:"relative",children:[e,a,i,k]}),b[7]=k,b[8]=e):e=b[8];b[9]!==g?(a=!d("PolarisUA").isMobile()&&j.jsx("div",babelHelpers["extends"]({className:"x6s0dn4 x1yvgwvq x13fuv20 x178xt8z x9f619 x1ypdohk x78zum5 xdt5ytf x2lah0s xln7xf2 xk390pu x11x8uw5 xl56j7k xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x11njtxf"},{children:j.jsx(c("IGDSBox.react"),{position:"relative",width:"100%",children:j.jsx(c("PolarisIGCoreButton.react"),{borderless:!0,onClick:function(){return d("PolarisNavigationUtils").openExternalURL(g)},children:j.jsx(c("IGDSText.react"),{color:"primaryButton",size:"body",textAlign:"center",weight:"semibold",children:d("PolarisAgeCollectionHelpers").LEARN_MORE})})})})),b[9]=g,b[10]=a):a=b[10];b[11]!==f||b[12]!==e||b[13]!==a?(i=j.jsxs(c("IGCoreModal.react"),{"aria-label":d("PolarisAgeCollectionHelpers").BIRTHDAYS_HEADER,size:d("PolarisUA").isMobile()?"large":"default",children:[f,e,a]}),b[11]=f,b[12]=e,b[13]=a,b[14]=i):i=b[14];return i}g["default"]=a}),98);