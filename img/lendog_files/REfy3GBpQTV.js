;/*FB_PKG_DELIM*/

__d("LSVoprfComputeSharedSecret.nop",["LSVoprfLoggingUtils","Promise","XPlatReactVoprf","asyncToGeneratorRuntime","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("qpl")._(25312440,"206");a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,c,e,f){a=d("LSVoprfLoggingUtils").getAcsQplEventLogger(i);a.start();c=(yield d("XPlatReactVoprf").loadXPlatReactVoprf());var g=c.instanceCreationTimestampNs;c=c.voprfInstance;var j=c.voprfInfo,k=c.voprfWasm;a.addVoprfLoadedPoint(g);try{g=k.clientFinalize(j,new Uint8Array(e),new Uint8Array(f));a.endSuccess({wasmMemorySize:(j=k.wasmMemory)==null?void 0:j.buffer.byteLength});return(h||(h=b("Promise"))).resolve([g.finalEvaluation.buffer])}catch(b){a.endFailure({error:b,wasmMemorySize:(e=k.wasmMemory)==null?void 0:e.buffer.byteLength});throw b}finally{d("XPlatReactVoprf").freeVoprfInstance(c)}});function c(b,c,d,e){return a.apply(this,arguments)}return c}();g["default"]=a}),98);
__d("LSVoprfUnblind.nop",["LSVoprfLoggingUtils","Promise","XPlatReactVoprf","asyncToGeneratorRuntime","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("qpl")._(25299816,"2544");a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,c,e,f,g,j,k,l){a=d("LSVoprfLoggingUtils").getAcsQplEventLogger(i);a.start();c=(yield d("XPlatReactVoprf").loadXPlatReactVoprf());var m=c.instanceCreationTimestampNs;c=c.voprfInstance;var n=c.voprfInfo,o=c.voprfWasm;a.addVoprfLoadedPoint(m);try{m=o.verifiableUnblind(n,new Uint8Array(k),new Uint8Array(l),new Uint8Array(f),new Uint8Array(j),new Uint8Array(g),new Uint8Array(e),!0);a.endSuccess({wasmMemorySize:(n=o.wasmMemory)==null?void 0:n.buffer.byteLength});return(h||(h=b("Promise"))).resolve([m.unblindedElement.buffer])}catch(b){a.endFailure({error:b,wasmMemorySize:(k=o.wasmMemory)==null?void 0:k.buffer.byteLength});throw b}finally{d("XPlatReactVoprf").freeVoprfInstance(c)}});function c(b,c,d,e,f,g,h,i){return a.apply(this,arguments)}return c}();g["default"]=a}),98);
__d("LSVerifyAndSaveNewCredentials",["LSArrayGetObjectAt","LSBase64Decode.nop","LSRemoveBlindedTokens","LSVoprfComputeSharedSecret.nop","LSVoprfUnblind.nop"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.db.table(307).fetch([[[a[0]]]]).next().then(function(e,f){var g=e.done;e=e.value;return g?(d[1]=c.createArray(),d[2]=(d[1].push("No valid config found when saving signed credentials for project: "),d[1]),d[3]=(d[1].push("unknown"),d[1]),d[4]=c.toJSON(d[1]),function(a){c.logger(a).mustfix(a)}(d[4])):(f=e.item,c.sequence([function(e){return d[1]=c.i64.of_int32(a[1].length),c.i64.gt(d[1],c.i64.cast([0,0]))?c.loopAsync(d[1],function(e){return d[2]=e,c.sequence([function(e){return c.nativeTypeOperation("Array",b("LSArrayGetObjectAt"),a[1],d[2]).then(function(a){return a=a,d[3]=a[0],d[4]=a[1],a})},function(a){return d[5]=d[3].get("token_id"),c.db.table(308).fetch([[[d[5]]]]).next().then(function(b,e){var a=b.done;b=b.value;return a?(a=[c.blob(""),c.blob(""),c.blob("")],d[6]=a[0],d[7]=a[1],d[8]=a[2],a):(e=b.item,a=[e.nonce,e.blindedNonce,e.blindingFactor],d[6]=a[0],d[7]=a[1],d[8]=a[2],a)})},function(a){return c.forEach(c.db.table(308).fetch([[[d[5]]]]),function(a){return a["delete"]()})},function(a){return d[10]=d[3].get("signed_nonce"),c.nativeOperation(b("LSBase64Decode.nop"),d[10]).then(function(a){return a=a,d[11]=a[0],a})},function(a){return d[12]=d[3].get("proof_c"),c.nativeOperation(b("LSBase64Decode.nop"),d[12]).then(function(a){return a=a,d[13]=a[0],a})},function(a){return d[14]=d[3].get("proof_s"),c.nativeOperation(b("LSBase64Decode.nop"),d[14]).then(function(a){return a=a,d[15]=a[0],a})},function(a){return c.nativeOperation(b("LSVoprfUnblind.nop"),f.publicKey,d[8],d[7],d[11]==null?c.blob(""):d[11],d[13]==null?c.blob(""):d[13],d[15]==null?c.blob(""):d[15]).then(function(a){return a=a,d[16]=a[0],a})},function(e){return c.blobs.neq(d[16],void 0)?c.sequence([function(a){return c.nativeOperation(b("LSVoprfComputeSharedSecret.nop"),d[6],d[16]).then(function(a){return a=a,d[17]=a[0],a})},function(b){return c.blobs.neq(d[17],void 0)?c.db.table(309).add({tokenId:d[5],configId:a[0],nonce:d[6],redeemLimit:f.redemptionLimit,sharedSecret:d[17]}):c.resolve()}]):c.resolve()}])}):c.resolve()},function(d){return c.storedProcedure(b("LSRemoveBlindedTokens"),a[0])}]))})},function(a){return c.resolve(e)}])}a.__sproc_name__="LSAnonymousCredentialsVerifyAndSaveNewCredentialsStoredProcedure";a.__tables__=["secure_acs_configurations","secure_acs_blinded_tokens","secure_acs_tokens"];e.exports=a}),null);