function(){return function(){var f=!0,g=!1,h=this;function i(a,b){function c(){}c.prototype=b.prototype;a.c=b.prototype;a.prototype=new c};function j(a,b){this.code=a;this.message=b||"";this.name=l[a]||l[13];var c=Error(this.message);c.name=this.name;this.stack=c.stack||""}i(j,Error);
var l={7:"NoSuchElementError",8:"NoSuchFrameError",9:"UnknownCommandError",10:"StaleElementReferenceError",11:"ElementNotVisibleError",12:"InvalidElementStateError",13:"UnknownError",15:"ElementNotSelectableError",19:"XPathLookupError",23:"NoSuchWindowError",24:"InvalidCookieDomainError",25:"UnableToSetCookieError",26:"ModalDialogOpenedError",27:"NoModalDialogOpenError",28:"ScriptTimeoutError",32:"InvalidSelectorError",35:"SqlDatabaseError",34:"MoveTargetOutOfBoundsError"};
j.prototype.toString=function(){return this.name+": "+this.message};function m(a,b){for(var c=1;c<arguments.length;c++)var n=String(arguments[c]).replace(/\$/g,"$$$$"),a=a.replace(/\%s/,n);return a}
function o(a){for(var b=0,a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),c="533".replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),n=Math.max(a.length,c.length),k=0;0==b&&k<n;k++){var Y=a[k]||"",Z=c[k]||"",$=RegExp("(\\d*)(\\D*)","g"),aa=RegExp("(\\d*)(\\D*)","g");do{var d=$.exec(Y)||["","",""],e=aa.exec(Z)||["","",""];if(0==d[0].length&&0==e[0].length)break;b=((0==d[1].length?0:parseInt(d[1],10))<(0==e[1].length?0:parseInt(e[1],10))?-1:(0==d[1].length?0:parseInt(d[1],10))>(0==e[1].length?
0:parseInt(e[1],10))?1:0)||((0==d[2].length)<(0==e[2].length)?-1:(0==d[2].length)>(0==e[2].length)?1:0)||(d[2]<e[2]?-1:d[2]>e[2]?1:0)}while(0==b)}return b};var p,q,r,s;function t(){return h.navigator?h.navigator.userAgent:null}s=r=q=p=g;var u;if(u=t()){var ba=h.navigator;p=0==u.indexOf("Opera");q=!p&&-1!=u.indexOf("MSIE");r=!p&&-1!=u.indexOf("WebKit");s=!p&&!r&&"Gecko"==ba.product}var v=p,w=q,x=s,y=r,z;
a:{var A="",B;if(v&&h.opera)var C=h.opera.version,A="function"==typeof C?C():C;else if(x?B=/rv\:([^\);]+)(\)|;)/:w?B=/MSIE\s+([^\);]+)(\)|;)/:y&&(B=/WebKit\/(\S+)/),B)var D=B.exec(t()),A=D?D[1]:"";if(w){var E,F=h.document;E=F?F.documentMode:void 0;if(E>parseFloat(A)){z=String(E);break a}}z=A}var G={};var H,I,J,K,L,M,N;N=M=L=K=J=I=H=g;var O=t();O&&(-1!=O.indexOf("Firefox")?H=f:-1!=O.indexOf("Camino")?I=f:-1!=O.indexOf("iPhone")||-1!=O.indexOf("iPod")?J=f:-1!=O.indexOf("iPad")?K=f:-1!=O.indexOf("Android")?L=f:-1!=O.indexOf("Chrome")?M=f:-1!=O.indexOf("Safari")&&(N=f));var ca=H,da=I,ea=J,fa=K,ga=L,ha=M,ia=N;function P(a){return(a=a.exec(t()))?a[1]:""}(function(){if(ca)return P(/Firefox\/([0-9.]+)/);if(w||v)return z;if(ha)return P(/Chrome\/([0-9.]+)/);if(ia)return P(/Version\/([0-9.]+)/);if(ea||fa){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(t());if(a)return a[1]+"."+a[2]}else{if(ga)return(a=P(/Android\s+([0-9.]+)/))?a:P(/Version\/([0-9.]+)/);if(da)return P(/Camino\/([0-9.]+)/)}return""})();var Q,ja=function(){if(!x)return g;var a=h.Components;if(!a)return g;try{if(!a.classes)return g}catch(b){return g}var c=a.classes,a=a.interfaces,n=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),k=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo).platformVersion;Q=function(a){n.a(k,""+a)};return f}();function R(a){Error.captureStackTrace?Error.captureStackTrace(this,R):this.stack=Error().stack||"";a&&(this.message=String(a))}i(R,Error);R.prototype.name="CustomError";function S(a,b){b.unshift(a);R.call(this,m.apply(null,b));b.shift();this.b=a}i(S,R);S.prototype.name="AssertionError";!v&&y&&(ja?Q("533"):w?o(document.documentMode):G["533"]||(G["533"]=0<=o(z)));var T={}.refresh,U=["_"],V=h;!(U[0]in V)&&V.execScript&&V.execScript("var "+U[0]);for(var W;U.length&&(W=U.shift());){var X;if(X=!U.length)X=void 0!==T;X?V[W]=T:V=V[W]?V[W]:V[W]={}};; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null}, arguments);}