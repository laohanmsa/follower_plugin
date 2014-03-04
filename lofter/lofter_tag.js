(function() {
    P("U");
    var cqP = {a: {r: /\<|\>|\r|\n|\s|\'|\"/g,"<": "&lt;",">": "&gt;"," ": "&nbsp;",'"': "&quot;","'": "&#39;","\n": "<br/>","\r": ""}};
    U.lO = function(bHm) {
        if (U.co(bHm, "number"))
            return bHm;
        if (U.co(bHm, "date"))
            return bHm.getTime();
        if (U.co(bHm, "boolean"))
            return !!bHm ? "true" : "false";
        if (U.co(bHm, "string"))
            return '"' + U.IY(bHm) + '"';
        if (!bHm)
            return "null";
        if (U.co(bHm, "array")) {
            var cd = [];
            for (var i = 0, l = bHm.length; i < l; cd.push(U.lO(bHm[i])), i++)
                ;
            return "[" + cd.join(",") + "]"
        }
        if (U.co(bHm, "object")) {
            var cd = [];
            for (var p in bHm)
                cd.push(U.lO(p) + ":" + U.lO(bHm[p]));
            return "{" + cd.join(",") + "}"
        }
        return "null"
    };
    U.qr = function(Z) {
        try {
            return !Z ? null : (new Function("return " + Z))()
        } catch (e) {
            return null
        }
    };
    if (B.da) {
        U.fp = U.qr
    } else {
        U.fp = !!window.JSON ? JSON.parse : U.qr
    }
    if (B.da) {
        U.ii = U.lO
    } else {
        U.ii = !!window.JSON ? JSON.stringify : U.lO
    }
    var p = P("loft.x"), AR = 60 * 1e3, RC = 60 * AR, bFH = 24 * RC, cg = document.createElement("input");
    var Vg = /(&nbsp;(\w+))/gi;
    var Vh = /((\w+)&nbsp;([^ ]+))/gi;
    p.bzz = function(fv) {
        fv = fv || "";
        fv = U.ew(fv);
        fv = fv.replace(Vg, " $2");
        fv = fv.replace(Vh, "$2 $3");
        return fv
    };
    p.mP = function(fv) {
        fv = fv || "";
        fv = fv.replace(Vg, " $2");
        fv = fv.replace(Vh, "$2 $3");
        return fv
    };
    p.cqR = function(Z) {
        return U.El(cqP.a, Z)
    };
    p.jo = function(Z) {
        Z = Z || "";
        return Z.replace(/^(<p>(&nbsp;|<br\s*\/?>)<\/p>)|(&nbsp;|<br\s*\/?>)$/i, "")
    };
    p.Gg = function(Z) {
        Z = Z || "";
        return Z.replace(/(^<p>(&nbsp;|<br\s*\/?>)<\/p>)|(<p>(&nbsp;|<br\s*\/?>)<\/p>$)/gi, "")
    };
    p.Gh = function(Gr, eg) {
        if (!Gr)
            return;
        if (!!eg) {
            Gr.focus()
        } else {
            var hy = Gr.selection.getRange();
            var bHk = E.dE(Gr.body) || [];
            if (bHk.length > 0) {
                var Gu = E.dE(bHk[bHk.length - 1]) || [];
                var RA = Gu[Gu.length - 1];
                if (!!RA && !!RA.tagName && RA.tagName.toLowerCase() == "br") {
                    hy.selectNodeContents(Gu[Gu.length - 1]);
                    hy.setCursor(false, true)
                } else {
                    hy.selectNodeContents(bHk[bHk.length - 1]);
                    hy.setCursor(true, true)
                }
            }
        }
    };
    p.th = function(du) {
        if ((!!P("loft.c").bUm || !!P("loft.c").bUn) && !!du) {
            alert(du)
        }
    };
    p.ccC = function(bOa) {
        if (!bOa)
            return;
        var bPM = document.cloneElement("link");
        bPM.setAttribute("href", bOa);
        if (!!document.head && !!bPM) {
            document.head.insertAdjacentElement("beforeEnd", bPM)
        }
    };
    p.ccB = function(bOa) {
        if (!!window.devicePixelRatio && window.devicePixelRatio > 1 && !B.da) {
            p.ccC(bOa)
        }
    };
    p.bJH = function(ccA) {
        try {
            var eJ = new Image;
            eJ.src = "http://www.lofter.com/statistic.png?act=" + ccA + "&t=" + (new Date).getTime()
        } catch (e) {
        }
    };
    p.bzy = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    p.GD = function(bHm) {
        if (U.co(bHm, "number"))
            return bHm;
        if (U.co(bHm, "date"))
            return bHm.getTime();
        if (U.co(bHm, "boolean"))
            return bHm;
        if (U.co(bHm, "string"))
            return bHm;
        if (U.co(bHm, "function"))
            return bHm;
        if (!bHm)
            return null;
        if (U.co(bHm, "array")) {
            var cd = [];
            for (var i = 0, l = bHm.length; i < l; cd.push(this.GD(bHm[i])), i++)
                ;
            return cd
        }
        if (U.co(bHm, "object")) {
            var cp = {};
            for (var p in bHm)
                cp[p] = this.GD(bHm[p]);
            return cp
        }
    };
    p.gW = function(cp) {
        return U.ii(cp)
    };
    p.wc = function(bp, bx, jD) {
        bp = bp || "";
        jD = jD || "?";
        bp = U.bA(bp);
        var csH = bp.indexOf(jD);
        if (csH < 0) {
            return ""
        }
        if (jD != "#") {
            var Q = bp.indexOf("#") || 0;
            if (Q >= 0 && csH < Q) {
                bp = bp.substring(0, Q)
            }
        }
        bp = bp.substr(csH + 1);
        if (!bp)
            return "";
        bp = bp.split("&");
        for (var i = 0, l = bp.length, d; i < l; i++) {
            d = bp[i].indexOf("=");
            if (bp[i].substring(0, d) === bx) {
                return bp[i].substr(d + 1) || ""
            }
        }
        return ""
    };
    p.ty = function(Z) {
        Z = Z || "";
        var fe = 0;
        for (var i = 0, l = Z.length; i < l; i++) {
            fe += Z.charCodeAt(i) > 255 ? 2 : 1
        }
        return fe
    };
    var Rx = ["http://www.lofter.com/control", "http://www.lofter.com/theme"];
    p.isInReferrerBlackList = function(hf) {
        hf = U.bA(hf);
        if (!hf)
            return false;
        for (var i = 0; i < Rx.length; i++) {
            if (!!Rx[i]) {
                var Q = hf.indexOf(Rx[i]);
                if (Q == 0) {
                    return true
                }
            } else {
                break
            }
        }
        return false
    };
    p.bM = function(eq) {
        eq = eq || "";
        return !eq && "http://www.lofter.com" || "http://" + eq + ".lofter.com"
    };
    p.GX = function(eq, dR, bc) {
        return this.bM(eq) + "/post/" + bc.toString(16) + "_" + dR.toString(16)
    };
    p.cF = function(bx) {
        var bg = window[bx];
        try {
            if (!delete window[bx])
                throw ""
        } catch (e) {
            window[bx] = undefined
        }
        return bg
    };
    p.eK = function(Rw, ok) {
        ok = ok || 64;
        if (!Rw) {
            if (ok <= 30)
                return location.dirhost + "/rsc/img/ava/30.png";
            if (ok <= 64)
                return location.dirhost + "/rsc/img/ava/64.png";
            return location.dirhost + "/rsc/img/ava/110.png"
        } else {
            if (ok > 140)
                return Rw;
            return "http://imgsize.ph.126.net/?imgurl=" + Rw + "_" + ok + "x" + ok + "x0.jpg"
        }
    };
    p.ccz = function(bws, dz, eT, cpT) {
        if (!bws)
            return null;
        if (bws.toLowerCase().indexOf("http://imgsize.ph.126.net") >= 0) {
            bws = p.wc(bws, "imgurl", "?") || "";
            var Q = bws.lastIndexOf("_");
            if (!!bws && Q >= 0) {
                bws = bws.substring(0, Q)
            }
            if (!bws)
                return null
        }
        if (!dz || dz < 0)
            return bws;
        if (!eT || eT < 0)
            eT = dz;
        if (!!cpT) {
            return "http://imgsize.ph.126.net/?enlarge=true&imgurl=" + bws + "_" + dz + "x" + eT + "x1.jpg"
        } else {
            return "http://imgsize.ph.126.net/?imgurl=" + bws + "_" + dz + "x" + eT + "x0.jpg"
        }
    };
    p.Ru = function(eF) {
        return this.bM() + "/login" + (!!eF ? "?target=" + encodeURIComponent(eF) : "")
    };
    B.HC = "placeholder" in cg;
    delete cg;
    p.Ws = function(X, wM) {
        wM = wM || "";
        var lb, i, l;
        if (!!B.HC || !X)
            return;
        X = E.be(X);
        if (!U.co(X, "array")) {
            if (X.value == "") {
                X.value = X.getAttribute("placeholder");
            }
            V.bHn(X, "focus", function() {
                lb = X.getAttribute("placeholder");
                if (X.value == lb) {
                    X.value = ""
                }
                if (!!wM)
                    E.ba(X, wM)
            });
            V.bHn(X, "blur", function() {
                lb = X.getAttribute("placeholder");
                if (!X.value) {
                    X.value = lb;
                    if (!!wM)
                        E.bf(X, wM)
                }
            })
        } else {
            for (i = 0, l = X.length; i < l; i++) {
                p.Ws(X[i], wM)
            }
        }
    };
    p.WD = function(Rt) {
        Rt = Rt || 1;
        switch (Rt) {
            case 1:
                return "文字";
            case 2:
                return "图片";
            case 3:
                return "音乐";
            case 4:
                return "视频";
            case 5:
                return "问答";
            default:
                return "文字"
        }
    };
    P(N.ui).fx("#<proxy-span2>{position:absolute;z-index:-1;left:0;bottom:0;width:370px;height:0;overflow:hidden;visibility:hidden;word-wrap:break-word;word-break:break-all;}#<proxy-span2> .proxy-span{position:absolute;visibility:hidden;width:370px;line-height:20px;}", "proxy-span2");
    p.WG = function(cx, dz, eT) {
        var Rp = document.cloneElement("span", "proxy-span2"), yx = document.cloneElement("span", "proxy-span");
        Rp.appendChild(yx);
        if (!!dz)
            yx.style.width = Rp.style.width = dz + "px";
        cx.insertAdjacentElement("afterEnd", Rp);
        V.bHn(cx, "input", function() {
            if (!cx.value) {
                cx.style.height = "20px";
                return
            } else {
                if (cx.value.length > 200) {
                    cx.value = cx.value.substring(0, 200)
                }
            }
            var bg = cx.value.replace(/\n/g, "<br>");
            bg = bg.replace(/<br>$/, "<br>&nbsp;");
            yx.innerText = bg;
            if (yx.clientHeight > 20) {
                cx.style.height = yx.clientHeight + "px"
            } else {
                cx.style.height = "20px"
            }
        });
        return yx
    };
    p.AL = function(cx, WN) {
        if (!cx || !WN)
            return;
        V.bHn(cx, "keydown", function(bHl) {
            var bK = bHl && (bHl.which || bHl.keyCode) || 0, bzx = bHl && bHl.ctrlKey;
            if (!!bzx && bK == 13) {
                WN.call()
            }
        })
    };
    p.bzw = function(bHl) {
        V.bb(bHl);
        E.bf(document.body, "p-tmsg2");
        E.ba(this.bzv, "f-dn");
        U.ru("OutdatedBrowserBanner", "1", ".lofter.com", 30, "/");
        this.WX = false;
        this.Ig()
    };
    p.Rn = function() {
        if (U.ot("OutdatedBrowserBanner") == "1") {
            return
        }
        if (B.dh) {
            E.ba(document.body, "p-tmsg2");
            var p = document.createElement("div");
            document.body.insertAdjacentElement("afterBegin", p);
            p.className = "m-tmsg2";
            p.innerHTML = '<p>温馨提示：使用<a href="http://www.google.com/chrome" target="_blank">Chrome</a>、<a href="http://firefox.com.cn/download/" target="_blank">Firefox</a>、<a href="http://windows.microsoft.com/zh-CN/windows/downloads" target="_blank">IE7以上版本</a>等最新浏览器访问LOFTER，可以获得更好的视觉体验！</p><a href="#" id="closeOutdatedBrowserBanner" class="w-close2">关闭</a>';
            this.bzv = p;
            var closeLink = E.be("closeOutdatedBrowserBanner");
            V.bHn(closeLink, "click", this.bzw.A(this));
            this.WX = true
        }
    };
    p.qB = function(hD) {
        var Xh = new Date, bzu = new Date(hD), ig = Xh.getTime() - hD;
        if (ig > 13 * RC)
            return U.ws(hD, (bzu.getFullYear() != Xh.getFullYear() ? "yyyy/" : "") + "MM/dd HH:mm");
        for (var i = 12; i > 0; i--)
            if (ig > i * RC)
                return i + "小时前";
        if (ig > 30 * AR)
            return "半小时前";
        if (ig > 15 * AR)
            return "一刻钟前";
        if (ig > 10 * AR)
            return "10分钟前";
        if (ig > 5 * AR)
            return "5分钟前";
        return "1分钟前"
    };
    p.kX = function() {
        E.bd("由于权限设置，您暂时无法进行该操作！", true)
    };
    p.bzt = function(cG) {
        return !!cG && cG.length > 4 && /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(cG)
    };
    p.yA = function() {
        return;
        this.Ix = E.be("rside");
        this.AH = E.be("g-foreverEntryArea");
        if (!this.Ix || !this.AH)
            return;
        this.bVI = E.bj(document.body, "g-bd")[0];
        window.setTimeout(function() {
            V.bHn(window, "scroll", this.Ig.A(this));
            V.bHn(window, "resize", this.Ig.A(this))
        }.A(this), 1e3);
        window.setTimeout(this.Ig.A(this), 1200)
    };
    p.Ig = function() {
        if (B.dh) {
            this.XE()
        } else {
            if (!!this.Rl)
                this.Rl = window.clearTimeout(this.Rl);
            this.Rl = window.setTimeout(this.XE.A(this), 10)
        }
    };
    p.XE = function() {
        var kj = this.bzy();
        var AF = this.Ix.clientHeight || this.Ix.offsetHeight || 300;
        var dp = document.documentElement || document.body;
        var bVY = E.bj(document.body, "mlistimg").length;
        if (bVY > 0 && bVY <= 20) {
            this.ccx = this.bVI.offsetHeight > AF + 100 ? this.bVI.offsetHeight : AF + 100
        }
        var qx = dp.clientHeight || 0;
        if (kj + qx > AF + 220 && kj + qx < this.ccx + 220) {
            if (B.dh) {
                this.AH.style.left = 0;
                var XT = 0;
                if (this.WX) {
                    XT = 46
                }
                this.AH.style.top = kj + qx - 163 - XT + "px"
            }
            if (!!this.bLe)
                this.bLe = window.clearTimeout(this.bLe);
            E.ba(this.AH, "js-foreverEntry-show-1");
            E.ba(this.AH, "js-foreverEntry-show")
        } else {
            E.bf(this.AH, "js-foreverEntry-show");
            if (!!this.bLe)
                this.bLe = window.clearTimeout(this.bLe);
            this.bLe = window.setTimeout(function() {
                E.bf(this.AH, "js-foreverEntry-show-1")
            }.A(this), 300)
        }
    };
    p.Rh = function(bN) {
        var Rg = "";
        if (bN.citeRootBlogId > 0 && !!bN.citeRootBlogInfo) {
            var bzs = bN.citeRootBlogInfo.blogNickName || "";
            var bzr = loft.x.GX(bN.citeRootBlogInfo.blogName, bN.citeRootPostId, bN.citeRootBlogId);
            Rg = '<a href="' + bzr + '" target="_blank">转载自&nbsp;&nbsp;' + bzs + "</a>"
        } else if (!!bN.blogInfo.imageProtected) {
            Rg = "&copy;" + bN.blogInfo.blogNickName
        }
        return Rg
    };
    p.AD = function(origiString, len, needsuffix) {
        if (!!origiString) {
            var cuted = U.bgB(origiString, len);
            if (needsuffix && cuted.length < origiString.length)
                cuted += "...";
            return cuted
        }
        return origiString
    };
    p.csb = function(tF) {
        if (!!tF) {
            tF.addListener("afterpaste", this.ctJ.A(this, tF))
        }
    };
    p.ctJ = function(tF) {
        if (!tF || !tF.document || !tF.document.getElementsByTagName)
            return;
        var bHk = tF.document.getElementsByTagName("span") || [];
        for (var i = 0; i < bHk.length; i++) {
            var csA = bHk[i].style.textDecoration || "";
            bHk[i].style.cssText = "";
            if (csA.toLowerCase() == "underline") {
                bHk[i].style.textDecoration = csA
            } else if (csA.toLowerCase() == "line-through") {
                bHk[i].style.textDecoration = csA
            }
        }
        bHk = tF.document.getElementsByTagName("ol") || [];
        for (var i = 0; i < bHk.length; i++) {
            bHk[i].style.cssText = "";
            bHk[i].style.listStyleType = "decimal"
        }
        bHk = tF.document.getElementsByTagName("ul") || [];
        for (var i = 0; i < bHk.length; i++) {
            bHk[i].style.cssText = "";
            bHk[i].style.listStyleType = "disc"
        }
    };
    p.qt = function(tF) {
        if (B.oc && !!tF) {
            tF.addListener("afterpaste", this.bzq.A(this, tF))
        }
    };
    p.bzq = function(tF) {
        if (!tF || !tF.document || !tF.document.getElementsByTagName)
            return;
        var bHk = tF.document.getElementsByTagName("span");
        if (!bHk || bHk.length <= 0)
            return;
        for (var i = 0; i < bHk.length; i++) {
            bHk[i].style.whiteSpace = ""
        }
    };
    p.stopEvent = V.bb;
    p.ccw = function() {
        var bLk = window.navigator.userAgent.toLowerCase();
        var bSz = false;
        if (bLk.indexOf("safari") >= 0) {
            try {
                bSz = bLk.match(/version\/([\d.]+)/)[1]
            } catch (e) {
            }
        }
        return bSz
    };
    p.ccv = function() {
        var bLk = window.navigator.userAgent.toLowerCase();
        return bLk.indexOf("ipad") >= 0
    };
    p.ccu = function() {
        var bLk = window.navigator.userAgent;
        /OS ([0-9]_\d[_\d]*) like Mac OS X/i.test(bLk);
        return RegExp.$1 || ""
    };
    var cct = /(?:<embed.*?>)|(?:<\/embed>)/gi;
    p.bPD = function(Z) {
        return (Z || "").replace(cct, "")
    };
    p.cfE = function(bHl, ok) {
        ok = ok || 125;
        if (!bHl)
            return;
        var X = V.be(bHl);
        if (!X)
            return;
        if (X.clientWidth > X.clientHeight) {
            X.style.height = ok + "px";
            X.style.width = "auto";
            var cw = X.clientWidth;
            var ch = X.clientHeight || 1;
            var offset = (ok * cw / ch - ok) / 2;
            X.style.left = -offset + "px"
        } else {
            X.style.width = ok + "px";
            X.style.height = "auto";
            var cw = X.clientWidth;
            var ch = X.clientHeight || 1;
            var offset = (ok * ch / cw - ok) / 2;
            X.style.top = -offset + "px"
        }
        X.style.visibility = "visible"
    };
    p.csR = function(CL, ctI) {
        CL.focus();
        CL.innerHTML = U.ew(ctI);
        if (!B.da) {
            var crD = window.getSelection ? window.getSelection() : document.selection;
            var hy = crD.createRange ? crD.createRange() : crD.getRangeAt(0);
            var csS = CL.lastChild;
            hy.setEndAfter(csS);
            hy.setStartAfter(csS);
            crD.removeAllRanges();
            crD.addRange(hy)
        }
    };
    p.cvJ = function(CL, fW) {
        if (!CL)
            return;
        var atags = CL.getElementsByTagName("a"), l = atags.length, i = l - 1;
        for (; i > -1; i--) {
            if (atags[i].tagName === "A" && (atags[i].href.indexOf("mailto") >= 0 || atags[i].className === "")) {
                atags[i].outerHTML = atags[i].innerHTML
            }
        }
        if (!!fW) {
            return CL.innerHTML.replace(/^(<p>&nbsp;<\/p>(\r)?(\n)?)*/ig, "").replace(/(<p>&nbsp;<\/p>(\r)?(\n)?)*$/ig, "").replace(/<\/p>/ig, "").replace(/<p>/ig, "<br>").replace(/^(<br>)?/ig, "")
        } else {
            return CL.innerHTML
        }
    };
    p.csi = function(csT) {
        if (!!csT) {
            this.xI = document.getElementById(csT).contentWindow
        } else {
            this.xI = window
        }
        var crD = this.xI.getSelection ? this.xI.getSelection() : document.selection, hy = crD.createRange ? crD.createRange() : crD.getRangeAt(0), csU = false, CL = this.xI.getSelection ? crD.anchorNode.parentNode : hy.parentElement(), csK = this.xI.getSelection ? crD.anchorNode.parentNode.tagName.toUpperCase() : hy.parentElement().nodeName.toUpperCase();
        if (csK === "A") {
            csU = true
        }
        return csU
    };
    p.cqi = function(bK) {
        if (bK == -100) {
            E.bd("您关注得太快了，请休息一下。", true)
        } else if (bK == -2) {
            E.bd("您已经关注该博客。", true)
        } else if (bK == -4) {
            E.bd("博客已经不存在，不允许关注。", true)
        } else if (bK == -6) {
            E.bd("关注失败，您关注博客的总数已经超过限制。", true)
        } else if (bK == -7) {
            E.bd("加密博客，无法关注！", true)
        } else if (bK <= 0) {
            E.bd("关注失败，错误码: " + bK, true)
        }
    }
})();
(function() {
    var p = P("loft.c"), bHo = loft.x.cF("CF") || {};
    p.cep = bHo.debugMode || false;
    p.bUm = bHo.testDBMode || false;
    p.bUn = bHo.devSourceMode || false;
    p.cm = bHo.visitor || [];
    p.jg = bHo.blogs || [];
    p.bzp = !!bHo.crm;
    p.ccs = bHo.activityTags || []
})();
(function() {
    var p = P("loft.w"), wS, bHW, bId, cl = "ui-" + U.cA();
    var bVK = "js-scrollList";
    var bPo = "js-trans";
    var HL = "js-showscrolllist";
    P(N.ui).fx("#<uispace>{position:absolute;z-index:100;text-align:left;cursor:pointer;color:#444;background:#fff;}*[hidefocus]{outline:none;}#<uispace> .clearfix{zoom:1;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .js-trans{transition:all 0.15s linear;-webkit-transition:all 0.15s linear;-moz-transition:all 0.15s linear;-o-transition:all 0.15s linear;}#<uispace> .zitm{/*padding:0 5px;width:57px;*/ *min-width:expression(this.parentNode.clientWidth+\"px\");height:19px;line-height:19px;cursor:pointer;font-size:12px;}#<uispace> .zitm{background-color:#fff;text-align:center;}#<uispace> .zitm:hover,#<uispace> .item.js-zhvr-910{color:#fff;background-color:#4ea0d4;}#<uispace> .scrollNode{position:relative;zoom:1;overflow:hidden;border:1px solid #c0c0c0;}#<uispace> .scrollNode .scrollList{position:absolute;left:0;top:0;*text-align:center;}#<uispace> .scrollNode .vSlideWayNode{display:none;position:absolute;right:0;_right:-1px;top:0;background:#e2dfdf;cursor:default;}#<uispace> .scrollNode .hSlideWayNode{display:none;position:absolute;left:0;bottom:0;background:#e2dfdf;cursor:default;}#<uispace> .scrollNode .vSlideWayNode .vSlideBtn{position:absolute;top:0left:0;width:6px;background:#aaa;text-indent:-9999px;}#<uispace> .scrollNode .hSlideWayNode .hSlideBtn{position:absolute;top:0;left:0;width:6px;background:#aaa;text-indent:-9999px;}#<uispace> .js-noHoverItem,#<uispace> .js-noHoverItem:hover{color:#444;background-color:#fff;}#<uispace> .js-hoverItem,#<uispace> .js-hoverItem:hover{color:#fff;background-color:#4ea0d4;}", cl);
    p.bMf = C();
    wS = p.bMf.bi(P(N.ut).fc, true);
    Xx = p.bMf.bw;
    wS.bq = function() {
        this.bHq();
        this.Y = document.cloneElement("div", "zitm thide");
        E.fy(this.Y, "js-zhvr-910");
        V.bHn(this.Y, "click", this.rF.A(this))
    };
    wS.bHu = function(I) {
        I = I || O;
        this.bHn("onclick", I.onclick || F);
        this.buE = I.notShowTitle || false
    };
    wS.ce = function(bHm) {
        this.bHp = bHm || O;
        var bg = this.bHp.t || this.bHp.n || this.bHp.v || " ";
        if (!this.buE)
            this.Y.title = bg;
        this.Y.innerText = bg
    };
    wS.hY = function() {
        return this.bHp
    };
    wS.rF = function(bHl) {
        this.bh("onclick", this.bHp)
    };
    wS.cK = function() {
        this.Y.innerHTML = "";
        this.Y.style.display = "";
        Xx.cK.apply(this)
    };
    wS.cau = function(bJf, bJc) {
        bJf = bJf || "js-hoverItem";
        bJc = bJc || "js-noHoverItem";
        E.bf(this.Y, bJc);
        E.ba(this.Y, bJf)
    };
    wS.bMe = function(bJf, bJc) {
        bJf = bJf || "js-hoverItem";
        bJc = bJc || "js-noHoverItem";
        E.bf(this.Y, bJf);
        E.ba(this.Y, bJc)
    };
    wS.cat = function(bJf, bJc) {
        bJf = bJf || "js-hoverItem";
        bJc = bJc || "js-noHoverItem";
        E.bf(this.Y, bJf);
        E.bf(this.Y, bJc)
    };
    wS.cas = function() {
        var du = {width: this.Y.clientWidth,height: this.Y.clientHeight};
        return du
    };
    p.bLr = C();
    bHW = p.bLr.bi(P(N.ui).ga, true);
    bHW.bq = function(bl, I) {
        I = I || O;
        this.eL = {onclick: this.DD.A(this)};
        this.bVT = I.triggerNode || "";
        this.dL = bl || document.body;
        this.bHq(bl, I);
        if (!this.bMd) {
            this.bMd = p.bNU.bG(this.bsU);
            if (this.pp > -1) {
                this.crh(I)
            }
        }
        V.bHn(this.Y, "mousedown", function(bHl) {
            V.bb(bHl)
        }.A(this));
        V.bHn(document, "mousedown", this.Hl.A(this));
        if (B.qi) {
            V.bHn(this.Y, "DOMMouseScroll", this.but.A(this))
        } else {
            V.bHn(this.Y, "mousewheel", this.but.A(this))
        }
        V.bHn(this.Y, "mousemove", this.caq.A(this))
    };
    bHW.bz = function(I) {
        if (B.dh)
            this.dL.style.zoom = 1;
        I = I || O;
        this.bHn("onchange", I.onchange || F);
        this.bHn("onlisthide", I.onlisthide || F);
        this.eL.notShowTitle = I.notShowTitle || false;
        this.Ho = I.items || [];
        this.bWg = I.noFixChromeWheelHover || false;
        this.cez = I.scrollNodewidth || 0;
        this.bLD = I.scrollNodeHeight || 0;
        this.bLv = I.minBtnLength || 10;
        this.bIU = I.scrollType || "";
        this.bSp = I.scrollAreaWidth || 0;
        this.bSq = I.scrollAreaHeight || 0;
        this.bSs = I.btnBreadth || this.bIn.clientWidth || 6;
        this.bSt = I.btnBreadth || this.bLu.clientHeight || 6;
        if (!!this.bSq) {
            if (this.bIU == "v" || this.bIU == "vh") {
                this.bIM.style.height = this.bSq - this.bSt + "px";
                this.bIM.style.paddingBottom = this.bSt + "px"
            }
        }
        if (!!this.bSp) {
            if (this.bIU == "v" || this.bIU == "vh") {
                this.bIM.style.width = this.bSp - this.bSs + "px";
                this.bIM.style.paddingRight = this.bSs + "px"
            }
        }
        if (!this.bIU) {
            this.bIM.style.height = "auto";
            this.bIM.style.paddingBottom = 0;
            this.bIM.style.width = this.bSp + "px";
            this.bIM.style.paddingRight = 0
        }
        this.bRB = I.hasAnimateMove || false;
        this.bmA = I.noHideListIfListShowed || false;
        this.bub = I.upScrollBarStyleBottom || 0;
        this.XL(I.items);
        this.pp = I.pp || -1;
        this.bmz();
        if (!!this.bub) {
            this.Y.style.left = 0;
            this.Y.style.bottom = this.bub + "px"
        }
        this.bsU = {scrollNode: this.bIM,scrollList: this.bHS,vSlideWayNode: this.bIk,hSlideWayNode: this.bIm,vSlideBtn: this.bIn,hSlideBtn: this.bLu,minBtnLength: this.bLv,scrollType: this.bIU,hasAnimateMove: this.bRB};
        if (!!this.bMd) {
            this.bMd.bHu(this.bsU)
        }
        if (!!this.bMd && this.pp > -1) {
            this.crh(I)
        }
    };
    bHW.crh = function(I) {
        var Q = this.pp, fe = this.cT.length, bIW, WJ;
        this.cT[Q - 1].cau();
        if (fe > 10 && Q > 5) {
            var cgv = fe - Q - 5;
            WJ = cgv < 0 ? fe - 10 : Q - 5;
            this.bHS.style.top = 0 - WJ * I.scrollAreaHeight / 10 + "px";
            this.bMd.cgu(WJ, fe)
        }
    };
    bHW.caq = function(bHl) {
        if (this.pp > -1) {
            this.cT[this.pp - 1].cat();
            this.pp = -1
        }
        if (B.oc && !!this.bRi) {
            this.cap(this.cT);
            this.bRi = false
        }
    };
    bHW.but = function(bHl) {
        if (!bHl)
            return;
        V.bb(bHl);
        var bIW;
        var bNN = 1;
        if (!!bHl.wheelDelta && !!this.bMd) {
            if (bHl.wheelDelta > 0) {
                bIW = {deltaTop: -bNN}
            } else {
                bIW = {deltaTop: bNN}
            }
        } else if (!!bHl.detail) {
            if (bHl.detail > 0) {
                bIW = {deltaTop: bNN}
            } else {
                bIW = {deltaTop: -bNN}
            }
        }
        if (!!bIW) {
            this.bMd.cao(bIW);
            if (B.oc && !this.bWg && !!this.cT) {
                if (!this.bRi) {
                    this.bRi = true;
                    this.can(this.cT)
                }
                this.cam(this.cT, bHl)
            }
        }
    };
    bHW.cam = function(cf, bHl) {
        if (!!cf && !!cf[0] && !!this.bMd) {
            var bNI = cf[0].cas();
            if (!bNI.height)
                return;
            var kT = this.bMd.cal();
            var QL = V.IO(bHl);
            var wF = V.vS(bHl);
            var bSi = E.tz(this.bIM);
            var cak = E.jO(this.bIM);
            if (QL < bSi || QL > bSi + bNI.width) {
                if (!!this.bJz)
                    this.bJz.bMe();
                return
            }
            var Q = Math.ceil((wF - cak - kT.top + bNI.height) / bNI.height) - 1 - 1;
            if (!!cf[Q]) {
                if (this.bJz == cf[Q]) {
                    return
                } else {
                    if (!!this.bJz)
                        this.bJz.bMe();
                    this.bJz = cf[Q];
                    this.bJz.cau()
                }
            } else {
                if (!!this.bJz)
                    this.bJz.bMe()
            }
        } else {
            if (!!this.bJz)
                this.bJz.bMe()
        }
    };
    bHW.can = function(cf) {
        if (!cf || cf.length <= 0)
            return;
        for (var i = 0; i < cf.length; i++) {
            this.cT[i].bMe()
        }
    };
    bHW.cap = function(cf) {
        if (!cf || cf.length <= 0)
            return;
        for (var i = 0; i < cf.length; i++) {
            this.cT[i].cat()
        }
    };
    bHW.cK = function() {
        p.bLr.bw.cK.call(this);
        this.bMd = this.bMd.cK();
        this.cT = p.bMf.db(this.cT)
    };
    bHW.XL = function(cf) {
        p.bMf.db(this.cT);
        this.cT = p.bMf.bG(cf, this.bHS, this.eL)
    };
    bHW.cU = function() {
        return cl + " " + bVK
    };
    bHW.cM = function() {
        return '<div class="scrollNode ztag"><div class="scrollList ztag"></div><div class="vSlideWayNode ztag"><div hidefocus="true" class="vSlideBtn ztag">&nbsp;</div></div><div class="hSlideWayNode ztag"><div hidefocus="true" class="hSlideBtn ztag">&nbsp;</div></div></div>'
    };
    bHW.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.bIM = bHk[Q++];
        this.bHS = bHk[Q++];
        this.bIk = bHk[Q++];
        this.bIn = bHk[Q++];
        this.bIm = bHk[Q++];
        this.bLu = bHk[Q++];
        this.pp = -1
    };
    bHW.DD = function(bHm) {
        if (!bHm)
            return;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHm.v) {
                Q = i;
                break
            }
        }
        this.Hl();
        this.bh("onchange", bHm.v || bHm.n || bHm.t || "", Q)
    };
    bHW.bmz = function(bHl) {
        if (bHl)
            V.bb(bHl);
        if (!this.XK) {
            if (!E.cr(this.Y, HL)) {
                this.bmy();
                this.Y.style.visibility = "visible";
                E.ba(this.Y, HL)
            } else {
                if (!this.bmA)
                    this.Hl()
            }
        }
    };
    bHW.Hl = function(bHl) {
        var bSu = V.be(bHl);
        if (this.pp > -1) {
            this.cT[this.pp - 1].cat();
            this.pp = -1
        }
        if (!!bSu && !!this.bVT) {
            var bk = bSu;
            while (!!bk && bk != document.body) {
                if (bk == this.bVT) {
                    return
                } else {
                    bk = bk.parentNode
                }
            }
        }
        E.bf(this.bHS, bPo);
        this.Y.style.visibility = "hidden";
        E.bf(this.Y, HL);
        this.bh("onlisthide")
    };
    bHW.bPd = function() {
        if (E.cr(this.Y, HL)) {
            return true
        } else {
            return false
        }
    };
    bHW.bmy = function() {
        var bHk = E.bj(document.body, bVK) || [];
        for (var i = 0; i < bHk.length; i++) {
            bHk[i].style.visibility = "hidden";
            E.bf(bHk[i].parentNode, HL)
        }
    };
    p.bNU = C();
    bId = p.bNU.bi(P(N.ut).gY);
    p.bNU.bG = function(I) {
        return new p.bNU(I)
    };
    bId.bq = function(I) {
        this.bHq();
        this.bHu(I)
    };
    bId.bHu = function(I) {
        this.bz(I);
        this.caj()
    };
    bId.bz = function(I) {
        I = I || O;
        this.bIM = I.scrollNode;
        this.bHS = I.scrollList;
        this.bIk = I.vSlideWayNode;
        this.bIm = I.hSlideWayNode;
        this.bIn = I.vSlideBtn;
        this.bLu = I.hSlideBtn;
        this.bLv = I.minBtnLength || 10;
        this.bIU = I.scrollType;
        this.bRB = I.hasAnimateMove;
        if (!!this.bIM) {
            this.bPc = this.bIM.clientWidth || 0;
            this.bLD = this.bIM.clientHeight || 0
        }
        if (!!this.bIk) {
            this.bIk.style.visibility = "hidden";
            this.bIk.style.display = "block";
            this.bMc = this.bIk.clientHeight || this.bIM.clientHeight || 0;
            this.bIk.style.height = this.bMc + "px";
            this.bIk.style.width = (this.bIn.clientWidth || 6) + "px"
        }
        if (!!this.bIm) {
            this.bIm.style.visibility = "hidden";
            this.bIm.style.display = "block";
            this.bQy = this.bIm.clientWidth || this.bIM.clientWidth || 0;
            this.bIm.style.width = this.bQy + "px";
            this.bIm.style.height = (this.bLu.clientHeight || 6) + "px"
        }
        if (!!this.bHS) {
            this.bQp = this.bHS.clientWidth || 0;
            this.bOS = this.bHS.clientHeight || 0;
            if (!!this.bIU) {
                this.bHS.style.position = "absolute";
                this.bHS.style.minWidth = this.bPc - this.bIn.clientWidth + "px";
                this.bHS.style.minHeight = this.bLD - this.bLu.clientHeight + "px"
            } else {
                this.bHS.style.minWidth = 0;
                this.bHS.style.minHeight = 0;
                this.bHS.style.position = "relative";
                this.bHS.style.width = "100%";
                this.bIM.style.paddingBottom = 0;
                this.bIM.style.paddingRight = 0
            }
        }
    };
    bId.ceA = function() {
        if (!!this.bIk)
            this.bIk.style.display = "none";
        if (!!this.bIm)
            this.bIm.style.display = "none"
    };
    bId.ceB = function() {
        if (!!this.bIk)
            this.bIk.style.display = "block";
        if (!!this.bIm)
            this.bIm.style.display = "block"
    };
    bId.caj = function() {
        this.yQ(this.bIn, null);
        this.bPA(null, false);
        if (this.bIU == "v" || this.bIU == "vh") {
            if (this.bLD > 0 && this.bOS > 0 && this.bOS > this.bLD && this.bMc > 0) {
                this.bLG = Math.floor(this.bLD * this.bMc / this.bOS);
                if (this.bLG < this.bLv)
                    this.bLG = this.bLv;
                this.bIn.style.height = this.bLG + "px";
                this.bIk.style.visibility = "";
                V.bHn(this.bIn.parentNode, "mousedown", this.cai.A(this));
                this.bHy = {mintop: 0,minleft: 0,maxwidth: 0,maxheight: this.bMc - this.bLG};
                this.bPJ = new (P(N.ut).Er)(this.bIn, {nobubble: true,noselect: true,ondrag: this.cah.A(this),onmove: this.cag.A(this),ondrop: this.caf.A(this)})
            } else {
                this.bIk.style.visibility = "hidden";
                this.bIk.style.display = "none"
            }
        }
    };
    bId.bPA = function(bLH, buD) {
        if (this.bRB && !!buD) {
            E.ba(this.bHS, bPo)
        } else {
            E.bf(this.bHS, bPo)
        }
        if (!!bLH && !!bLH.top) {
            var bPx = this.bOS - this.bLD;
            if (bPx <= 0)
                bPx = 0;
            if (!!bLH.maxheight && bLH.maxheight > 0) {
                var dn = bLH.top * bPx / bLH.maxheight;
                if (dn > 0) {
                    this.bHS.style.top = -dn + "px"
                } else {
                    this.bHS.style.top = 0
                }
            } else {
                this.bHS.style.top = 0
            }
        } else {
            this.bHS.style.top = 0
        }
    };
    bId.cao = function(bIW) {
        if (this.bLG <= 0)
            return;
        bIW = bIW || {deltaTop: 0};
        if ((this.bIU == "v" || this.bIU == "vh") && !!bIW.deltaTop && !!this.bHy) {
            this.bHy.top = (this.bHy.top || 0) + bIW.deltaTop;
            var bum = Math.floor(this.bMc / this.bLG - 1) * 10 + 1;
            var bPs = Math.floor((this.bMc - this.bLG) / bum);
            if (bPs < 1)
                bPs = 1;
            var kT = this.Ap(this.bIn);
            var dn = (kT.top || 0) + bIW.deltaTop * bPs;
            if (dn < this.bHy.mintop) {
                this.bHy.top = this.bHy.mintop
            } else if (dn > this.bHy.mintop + this.bHy.maxheight) {
                this.bHy.top = this.bHy.mintop + this.bHy.maxheight
            } else {
                this.bHy.top = dn
            }
            this.yQ(this.bIn, this.bHy);
            this.bPA(this.bHy, true)
        }
    };
    bId.cal = function() {
        var kT = {top: parseInt(this.bHS.style.top) || 0};
        return kT
    };
    bId.cah = function(sm, pD) {
        var wF = this.bPJ.Zl();
        var cad = E.jO(this.bIn);
        this.cac = wF - cad
    };
    bId.cag = function(sm, pD) {
        var wF = this.bPJ.Zl(), cab = E.jO(this.bIn.parentNode);
        var dn = wF - this.cac - cab;
        this.bHy.left = this.bHy.minleft;
        if (dn < this.bHy.mintop) {
            this.bHy.top = this.bHy.mintop
        } else if (dn > this.bHy.mintop + this.bHy.maxheight) {
            this.bHy.top = this.bHy.mintop + this.bHy.maxheight
        } else {
            this.bHy.top = dn
        }
        this.yQ(this.bIn, this.bHy);
        this.bPA(this.bHy)
    };
    bId.caf = function(sm, pD) {
    };
    bId.cai = function(bHl) {
        var dn = V.vS(bHl) - E.jO(this.bIn.parentNode) - Math.floor(this.bLG / 2);
        if (dn < this.bHy.mintop) {
            this.bHy.top = this.bHy.mintop
        } else if (dn > this.bHy.mintop + this.bHy.maxheight) {
            this.bHy.top = this.bHy.mintop + this.bHy.maxheight
        } else {
            this.bHy.top = dn
        }
        this.yQ(this.bIn, this.bHy);
        this.bPA(this.bHy, true);
        this.bPJ.jY(bHl)
    };
    bId.ceC = function() {
        if (this.bIU == "h" || this.bIU == "vh") {
            if (this.bPc > 0 && this.bQp > 0 && this.bQp > this.bPc && this.bQy > 0) {
                this.bRp = Math.floor(this.bPc * this.bQy / this.bQp);
                if (this.bRp < this.bLv)
                    this.bRp = this.bLv;
                this.bLu.style.width = this.bRp + "px";
                this.bIm.style.visibility = ""
            } else {
                this.bIm.style.visibility = "hidden";
                this.bIm.style.display = "none"
            }
        }
    };
    bId.yQ = function(X, bg, ya) {
        X = E.be(X);
        if (!X)
            return;
        bg = bg || {};
        var dn = bg.top || 0, cN = bg.left || 0, QZ = bg.mintop || 0, Rc = bg.minleft || 0;
        YR = bg.maxwidth || 0, YQ = bg.maxheight || 0;
        if (!!ya) {
            var kT = this.Ap(X) || {};
            cN += kT.left || 0;
            dn += kT.top || 0
        }
        dn = Math.max(QZ, dn);
        if (YQ > 0) {
            dn = Math.min(dn, YQ + QZ)
        } else {
            dn = QZ
        }
        cN = Math.max(Rc, cN);
        if (YR > 0) {
            cN = Math.min(cN, YR + Rc)
        } else {
            cN = Rc
        }
        X.style.top = (dn || 0) + "px";
        X.style.left = (cN || 0) + "px"
    };
    bId.Ap = function(X) {
        X = E.be(X);
        if (!X)
            return;
        return {left: parseInt(E.oS(X, "left")) || 0,top: parseInt(E.oS(X, "top")) || 0}
    };
    bId.cK = function() {
        delete this
    };
    bId.cgu = function(WJ, fe) {
        var dn = Math.floor(this.bHy.maxheight * WJ / (fe - 10));
        this.bIn.style.top = dn + "px";
        this.bHy.top = dn
    }
})();
(function() {
    var p = P(N.ui), lI, cl = "ui-" + U.cA();
    var hb = [], Sg = "js-zslt-123", YI = "js-zslt-124", hC = "w-sbtn-2";
    p.fx("#<uispace> .zitm{font-size:16px;height:25px;line-height:25px;}", cl);
    p.AZ = C();
    lI = p.AZ.bi(p.vW, true);
    lI.bz = function(I) {
        I = I || O;
        this.yE = Math.min(I.total, Math.max(I.number || 10, 3));
        p.AZ.bw.bz.call(this, I)
    };
    lI.cU = function() {
        return "m-page " + cl
    };
    lI.cM = function() {
        var gd = N.tm.fc00 || "";
        return '<a class="w-sbtn" href="#"><span class="w-ial">上 一 页</span></a><div class="num"><span>2 / 10</span><span class="arrow">&nbsp;</span></div><a class="w-sbtn" href="#"><span class="w-iar r">下 一 页</span></a>'
    };
    lI.cc = function() {
        this.Y.onselectstart = F;
        E.ba(this.Y, "noselect");
        var bHk = E.dE(this.Y);
        this.rf = bHk[0];
        this.cfL = bHk[2];
        this.beQ = bHk[1];
        bHk = E.dE(this.beQ);
        this.Sb = bHk[0];
        this.bpL = bHk[1];
        V.bHn(this.beQ, "mouseover", this.bFI.A(this));
        V.bHn(this.beQ, "mouseout", this.bzn.A(this));
        V.bHn(this.rf, "click", this.Rf.A(this, 1));
        V.bHn(this.cfL, "click", this.Rf.A(this, 2))
    };
    lI.Sh = function() {
        var yF = p.AZ.bw.Sh.call(this);
        yF.number = this.yE;
        return yF
    };
    lI.bFI = function(bHl) {
        V.bb(bHl);
        if (!this.eZ)
            return;
        if (!this.bHS) {
            this.bFM();
            E.ba(this.bpL, "arrowup");
            this.beR.pp = this.bC;
            this.bHS = P("loft.w").bLr.bG(this.beQ, this.beR)
        } else {
            if (!!this.beP) {
                this.beP = window.clearTimeout(this.beP)
            }
            if (!this.bHS.bPd()) {
                E.ba(this.bpL, "arrowup");
                this.beR.pp = this.bC;
                this.bHS.bz(this.beR)
            }
        }
    };
    lI.bzn = function() {
        if (!!this.beP)
            return;
        this.beP = window.setTimeout(function() {
            this.bHS.Hl();
            this.beP = null
        }.A(this), 400)
    };
    lI.Rf = function(fW, bHl) {
        V.bb(bHl);
        switch (fW) {
            case 0:
                if (E.cr(this.bFJ, hC))
                    return;
                this.nx(1, this.eZ);
                return;
            case 1:
                if (E.cr(this.rf, hC))
                    return;
                this.nx(this.bC - 1, this.eZ);
                return;
            case 2:
                if (E.cr(this.cfL, hC))
                    return;
                this.nx(this.bC + 1, this.eZ);
                return;
            case 3:
                if (E.cr(this.bFL, hC))
                    return;
                this.nx(this.eZ, this.eZ);
                return;
            case 4:
                var bul = bHl;
                this.nx(bul, this.eZ);
                return
        }
    };
    lI.bFM = function() {
        var i = 0;
        cf = [];
        for (; i < this.eZ; i++) {
            cf.push({v: i + 1})
        }
        var bfq = 250;
        if (this.eZ <= 10) {
            bfq = this.eZ * 25
        }
        var bqe = this.beQ.clientWidth || 48;
        this.beR = {notShowTitle: true,triggerNode: this.beQ,upScrollBarStyleBottom: 30,scrollAreaWidth: bqe,scrollAreaHeight: bfq,scrollType: this.eZ <= 10 ? "" : "v",minBtnLength: 20,hasAnimateMove: true,"class": "scrollbar0",items: cf,onchange: this.bsK.A(this),onlisthide: this.bsS.A(this)}
    };
    lI.bsK = function(bg, Q) {
        this.Rf(4, bg)
    };
    lI.bsS = function() {
        E.bf(this.bpL, "arrowup")
    };
    lI.Sc = function() {
        var bHk = this.bC == 1;
        bHk ? E.ba(this.rf, hC) : E.bf(this.rf, hC);
        bHk = this.bC == this.eZ;
        bHk ? E.ba(this.cfL, hC) : E.bf(this.cfL, hC)
    };
    lI.bFN = function() {
        var bn = this.YS.getElementsByTagName("a");
        if (!bn || !bn.length)
            return;
        for (var i = 0, l = bn.length, gA, lo = Math.min(this.eZ - this.yE + 1, Math.max(1, this.bC - Math.floor(this.yE / 2))); i < l; i++) {
            gA = lo + i;
            bn[i].index = gA;
            bn[i].innerText = gA;
            gA == this.bC ? E.ba(bn[i], YI) : E.bf(bn[i], YI)
        }
    };
    lI.wO = function(Q, eB) {
        window.scrollTo(0, 0);
        if (this.bC == Q && this.eZ == eB)
            return false;
        p.AZ.bw.wO.call(this, Q, eB);
        this.Sb.innerText = this.bC + " / " + this.eZ + " ";
        this.Sc();
        return true
    }
})();
(function() {
    var p = P(N.ui), hA, cl = "ui-" + U.cA();
    p.fx("#<uispace> .zcvr,#<uispace> .zhnt{display:none;position:fixed;_position:absolute;z-index:80;}#<uispace> .zcvr{top:0;left:0;width:100%;height:100%;background:url(" + N.rc.r + "empty.png);}#<uispace> .zhnt{display:block;top:0px;color:#000;z-index:12000;}", cl);
    p.Cd = C();
    hA = p.Cd.bi(p.ga, true);
    hA.SF = function(eV, vp, by) {
        this.nu();
        this.Cc(eV, vp, by)
    };
    hA.Cc = function(eV, vp, by) {
        var qx = this.ep.clientHeight, dp = document.documentElement || document.body, FW = document.body || document.documentElement, dn = 0;
        this.JA.innerText = eV || " ";
        if (by == "err") {
            this.JA.className = "tmsgc err"
        } else if (by == "load") {
            this.JA.className = "tmsgc load"
        } else {
            this.JA.className = "tmsgc ok"
        }
        if (B.dh) {
            dn = dp.scrollTop || FW.scrollTop
        }
        if (!!vp) {
            dn += Math.max(0, dp.clientHeight - qx) / 2
        }
        this.Rb.style.top = dn + "px";
        E.ba(this.Rb, "a-slide-do");
        this.ep.style.marginTop = !!vp ? "6px" : "0px"
    };
    hA.gI = function(bKK) {
        if (!bKK)
            this.hG();
        this.JQ()
    };
    hA.JQ = function() {
        this.ep.style.marginTop = -this.ep.scrollHeight + "px";
        E.bf(this.Rb, "a-slide-do")
    };
    hA.nu = function(bB) {
        if (U.co(bB, "number") && bB >= 0) {
            if (bB > 100)
                bB = 100;
            this.fG.style.backgroundColor = "black";
            this.fG.style.opacity = bB / 100;
            this.fG.style.filter = "alpha(opacity=" + bB + ")"
        } else {
            this.fG.style.backgroundColor = "";
            this.fG.style.opacity = "";
            this.fG.style.filter = ""
        }
        if (B.dh) {
            var gl = document.documentElement || document.body;
            this.fG.style.width = gl.scrollWidth + "px";
            this.fG.style.height = gl.scrollHeight + "px"
        }
        this.fG.style.display = "block"
    };
    hA.hG = function() {
        this.fG.style.display = "none"
    };
    hA.cU = function() {
        return cl
    };
    hA.cM = function() {
        return '<div class="zcvr wtag">&nbsp;</div><div class="zhnt m-tmsg a-slide a-slide-tmsg"><div class="slide" style="margin-top:-42px;"><div class="tmsg"><span class="tmsgc ok wtag"></span></div></div></div>'
    };
    hA.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.fG = bHk[0];
        this.JA = bHk[1];
        this.ep = bHk[1].parentNode.parentNode;
        this.Rb = this.ep.parentNode
    };
    var cv, eb, Ca = 0;
    var jM = function() {
        if (!eb)
            eb = p.Cd.bG(document.body, {"class": "uiutil"});
        return eb
    };
    var SE = function(bKK) {
        cv = window.clearTimeout(cv);
        E.gI(bKK)
    };
    E.bY = function(eV, pB, SD, vp, bKK, by) {
        if (!!pB && (bKK === null || bKK === undefined)) {
            bKK = true
        }
        if (!!SD) {
            cv = window.clearTimeout(cv);
            Ca = 0
        } else if (!!cv) {
            Ca++
        } else {
            cv = window.setTimeout(SE.A(E, bKK), 3e3)
        }
        var hk = jM();
        by = by || "ok";
        !pB ? hk.SF(eV, vp, by) : hk.Cc(eV, vp, by)
    };
    E.bd = function() {
        var de = Array.prototype.slice.call(arguments, 0);
        while (de.length < 5) {
            de.push(null)
        }
        de.push("err");
        E.bY(de[0], de[1], de[2], de[3], de[4], de[5])
    };
    E.ef = function() {
        var de = Array.prototype.slice.call(arguments, 0);
        while (de.length < 5) {
            de.push(null)
        }
        de.push("load");
        E.bY(de[0], de[1], de[2], de[3], de[4], de[5])
    };
    E.nu = function(bB) {
        jM().nu(bB)
    };
    E.gI = function(bKK) {
        if (!!cv)
            return;
        jM().gI(bKK)
    };
    E.JQ = function() {
        if (!!cv)
            return;
        jM().JQ()
    };
    E.hG = function() {
        jM().hG()
    }
})();
(function() {
    var p = P("loft.w"), kg, lz, ye;
    var JV = '<div class="m-layer"><div class="layert"><h3 class="zflg">删除投稿</h3><a class="w-close2 zflg" href="#">关闭</a></div><div class="zflg"></div></div>';
    var cc = function() {
        var bHk = E.bj(this.Y, "zflg");
        this.yh = bHk[0];
        this.fP = bHk[1];
        this.nJ = bHk[2];
        E.DX(bHk[1].parentNode);
        E.DX(bHk[1].parentNode);
        V.bHn(this.fP, "click", this.rR.A(this));
        P(N.ui).fx("#<uispace>{border:none;}", this.cU())
    };
    p.nr = C();
    kg = p.nr.bi(P(N.ui).nr, true);
    kg.cM = function() {
        return JV
    };
    kg.cc = function() {
        cc.call(this)
    };
    kg.cU = function() {
        return "a-scale a-scale-layer"
    };
    kg.bE = function() {
        p.nr.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    kg.rR = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.nr.bw.rR.A(this), 300)
    };
    p.mG = C();
    lz = p.mG.bi(P(N.ui).mG, true);
    lz.cM = function() {
        return JV
    };
    lz.cc = function() {
        cc.call(this);
        E.ba(this.yh.parentNode, "zmov")
    };
    lz.cU = function() {
        return "a-scale a-scale-layer"
    };
    lz.bE = function() {
        p.mG.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    lz.rR = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.mG.bw.rR.A(this), 300)
    };
    p.fr = C();
    ye = p.fr.bi(P(N.ui).yc, true);
    ye.rU = function(I) {
        this.eX = I || {};
        p.fr.bw.rU.call(this, this.eX);
        if (!this.eX.nocover) {
            this.eX.onclose = E.hG;
            this.eX.onbeforeshow = E.nu.A(null, 25)
        }
        if (!!this.eX.wclass) {
            return this.eX.wclass.bG(null, this.eX)
        }
        return !this.eX.nomove ? p.mG.bG(null, this.eX) : p.nr.bG(null, this.eX)
    };
    ye.ccm = function(ca) {
        if (!!this.ei && !!this.ei.fP) {
            V.bLb(this.ei.fP, "click");
            V.bHn(this.ei.fP, "click", this.ccl.A(this, ca))
        }
    };
    ye.ccl = function(ca, bHl) {
        V.bb(bHl);
        if (!!this.ei && !!this.ei.fP) {
            if (!!ca)
                ca();
            this.ei.rR()
        }
    };
    ye.bz = function(I) {
        if (!I.nocover) {
            I.onclose = E.hG;
            I.onbeforeshow = E.nu.A(null, 25)
        }
        I.content = this.Y;
        this.ei.bz(I);
        p.fr.bw.bz.call(this, I)
    }
})();
(function() {
    var p = P("loft.w"), JY;
    var ctH = function(cp) {
        if (!cp)
            return true;
        for (var iq in cp) {
            return false
        }
        return true
    };
    p.cV = C();
    JY = p.cV.bi(P(N.ut).gY);
    JY.bq = function() {
        this.bHq();
        var bk = E.bj(document, "fa-init");
        this.bzh(bk && bk[0] || null);
        this.bHo = this.bzd || {};
        this.Y = E.be(this.bHo.mid)
    };
    JY.bzh = function(bk) {
        var dc, mw;
        if (!!bk) {
            var bHk = bk.getElementsByTagName("textarea") || [];
            for (var i = bHk.length - 1, by, bo; i >= 0; i--) {
                bo = bHk[i];
                by = U.bA(bo.name.toLowerCase());
                if (by == "js") {
                    mw = bo.value || "";
                    continue
                }
                if (by == "html") {
                    dc = bo.value || "";
                    continue
                }
                if (!bo.id)
                    continue;
                if (by == "jst") {
                    E.ft(bo);
                    continue
                }
                if (by == "txt") {
                    fa.x.ce(bo.id, bo.value || "");
                    continue
                }
                if (by == "ntp") {
                    E.gD(bo.value || "", bo.id);
                    continue
                }
            }
            E.hE(bk)
        }
        this.Aw(mw);
        if (!!dc)
            this.jc(dc)
    };
    JY.Aw = function(kO) {
        kO = U.bA(kO || "");
        if (!kO)
            return;
        try {
            (new Function(kO)).call(this);
            this.bzd = this.p || "index"
        } catch (e) {
            try {
                var kO = kO.replace(/\u2028/g, "");
                (new Function(kO)).call(this);
                this.bzd = this.p || "index"
            } catch (e2) {
                alert(e2)
            }
        }
        if (!P("loft.c").crN || ctH(P("loft.c").crN)) {
            P("loft.c").crN = this.bzd || {}
        }
    }
})();
(function() {
    var p = P("loft.w"), hN;
    p.jt = C();
    hN = p.jt.bi(P(N.fw).jt);
    hN.bY = function(tj) {
        E.dt(this.bLN, "lhint", "w-load2");
        this.bLN.innerHTML = '<div class="load">加载中</div>';
        this.cP.icase.innerHTML = "";
        this.cP.icase.appendChild(this.bLN)
    }
})();
(function() {
    var p = P("loft.w.suggest"), bAV, Ip, eR;
    p.Ce = C();
    bAV = p.Ce.bi(P(N.ui).gB, true);
    bAV.cM = function() {
        return '<div class="ssch"><form class="xtag"><button type="submit">&nbsp;</button><input type="text" style="padding:0;" class="xtag" placeholder="搜索标签、博客、我的文章" maxlength="40"></form></div><div class="suggest"><div class="xtag sugbox"></div></div>'
    };
    bAV.cU = function() {
        return "m-ssch2"
    };
    bAV.bz = function(I) {
        I.option = p.MO;
        p.Ce.bw.bz.call(this, I)
    };
    bAV.xW = function(bn, Q) {
        if (!bn || !bn.length) {
            if (this.kb) {
                this.ec.style.display = "none"
            }
            return
        }
        this.cT = this.SJ.bG(bn, this.fS, this.cP);
        if (!!this.cT[Q]) {
            this.bC = Q;
            this.rg = 0;
            this.cT[this.bC].gg(true)
        }
        this.fS.style.visibility = "visible";
        if (!this.kb) {
            this.UQ()
        }
        E.ba(this.fS, "sugbox-act")
    };
    bAV.cc = function() {
        var bHk = E.bj(this.Y, "xtag");
        this.ek = bHk[0];
        this.bU = bHk[1];
        this.fS = bHk[2];
        V.bHn(this.bU, "click", V.bb.A(V));
        V.bHn(document, "click", this.he.A(this, true));
        V.bHn(this.bU, "input", this.hu.A(this));
        V.bHn(this.bU, "focus", this.dX.A(this, true));
        V.bHn(this.bU, "blur", this.dX.A(this, false));
        V.bHn(this.ek, "submit", this.fd.A(this));
        V.bHn(document, "keydown", this.mW.A(this));
        if (loft.c.cm.userId <= 0) {
            this.bU.setAttribute("placeholder", "搜索标签")
        }
        if (!B.HC)
            this.bU.value = this.bU.getAttribute("placeholder")
    };
    bAV.dX = function(en, bHl) {
        var lb = this.bU.getAttribute("placeholder");
        if (!!en) {
            E.ba(this.Y, "m-ssch-act");
            this.hu()
        } else {
            E.bf(this.Y, "m-ssch-act")
        }
        if (!B.HC) {
            window.setTimeout(function() {
                if (!!en && this.bU.value == lb)
                    this.bU.value = "";
                if (!en && this.bU.value == "")
                    this.bU.value = lb
            }.A(this), 50)
        }
    };
    bAV.fd = function(bHl) {
        V.bb(bHl);
        this.he();
        this.bh("onenter")
    };
    bAV.hu = function() {
        var bg = U.bA(this.bU.value);
        var lb = this.bU.getAttribute("placeholder");
        if (bg === lb)
            return;
        this.he(!bg);
        if (!bg)
            return;
        this.bh("onchange", bg)
    };
    bAV.bgH = function(Q, pN) {
        this.rg = this.rg || -1;
        var bo = this.cT[this.bC];
        if (!!bo)
            bo.gg(false, this.rg);
        this.bC = Q;
        this.rg = pN
    };
    bAV.pz = function(fW) {
        var bo = this.cT[this.bC];
        if (!!bo)
            bo.gg(false, this.rg);
        var pN = this.rg + fW;
        if (!!bo && pN >= 0 && pN < bo.re.length) {
            this.rg = pN;
            bo.gg(true, pN)
        } else {
            this.bC = (this.bC + fW) % this.cT.length;
            if (this.bC < 0)
                this.bC = this.cT.length - 1;
            var bo = this.cT[this.bC];
            this.rg = bo.re.length > 1 && fW < 0 ? bo.re.length - 1 : 0;
            if (!!bo)
                bo.gg(true, this.rg)
        }
    };
    bAV.SK = function(bg, yk) {
        if (!!yk)
            bg.href = yk;
        else {
            var bo = this.cT[Math.max(0, Math.min(this.bC, this.cT.length - 1))];
            var hf = bo.re[this.rg || 0];
            bg.href = hf.href
        }
        this.he();
        this.bh("onselect", bg)
    };
    bAV.he = function(MN) {
        E.bf(this.fS, "sugbox-act");
        if (!!MN) {
            window.setTimeout(p.Ce.bw.he.A(this), 300)
        } else {
            p.Ce.bw.he.call(this)
        }
    };
    p.MO = C();
    eR = p.MO.bi(P(N.ui).hF, true);
    var eO = E.gD('<div class="sugitm"><a href="#" class="sugitma stag"><span class="sugin stag">搜“<strong>关键关键字关键字关键字关键字字</strong>”标签</span></a></div>');
    eR.bq = function() {
        this.bHq();
        this.Y = E.mF(eO);
        var bHk = E.bj(this.Y, "stag");
        this.Bx = bHk[0];
        this.dg = bHk[1];
        V.bHn(this.Y, "click", this.rF.A(this));
        V.bHn(this.Y, "mouseout", this.Cr.A(this));
        V.bHn(this.Y, "mouseover", this.Cq.A(this))
    };
    eR.bHu = function(I) {
        I = I || O;
        this.re = [this.Bx];
        this.gg(false);
        this.bC = I.VP;
        this.bHn("onclick", I.onclick || F);
        this.bHn("onmouseover", I.onmouseover || F)
    };
    eR.gg = function(hU, pN) {
        pN = pN || 0;
        var hf = this.re[pN];
        if (!hf)
            return;
        hU ? E.ba(hf, "js-select") : E.bf(hf, "js-select")
    };
    eR.ce = function(bg) {
        this.fg = bg;
        this.dg.innerHTML = bg.html || "";
        if (bg.type == 0)
            this.Bx.className = "sugitma stag sctag";
        if (bg.type == 1)
            this.Bx.className = "sugitma stag scblog";
        if (!!bg.subItems && !!bg.subItems.length) {
            this.IC = p.ID.bG(bg.subItems, this.Y, {search: bg.value});
            for (var i = 0, l = this.IC.length; i < l; i++) {
                this.re.push(this.IC[i].Y)
            }
        }
    };
    eR.cK = function() {
        this.IC = p.ID.db(this.IC);
        var l = this.re.length, i = 0;
        for (; i < l; i++) {
            this.gg(false, i)
        }
        p.MO.bw.cK.apply(this, arguments)
    };
    eR.cF = function() {
        return this.fg
    };
    eR.rF = function(bHl) {
        V.bb(bHl);
        var eF = V.be(bHl, function(X) {
            return X.tagName == "A"
        });
        this.bh("onclick", this.fg, !!eF ? eF.href : "")
    };
    eR.Cq = function(bHl) {
        var eF = V.be(bHl, function(X) {
            return X.tagName == "A"
        });
        if (!eF)
            return;
        var IE = U.fO(this.re, eF);
        this.gg(true, IE);
        this.bh("onmouseover", this.bC, IE)
    };
    eR.Cr = function(bHl) {
        var eF = V.be(bHl, function(X) {
            return X.tagName == "A"
        });
        if (!eF)
            return;
        var IE = U.fO(this.re, eF);
        this.gg(false, IE)
    };
    p.ID = C();
    Ip = p.ID.bi(P(N.ut).fc, true);
    var Di = E.gD('<a href="#" class="sugitma"><span class="w-img2 w-img2-2"><img class="utag" src="http://l.bst.126.net/rsc/img/ava/30.png"></span><span class="sugin f-thide itag utag">搜“<strong>关键字</strong>”标标签标签标签标签标签签</span></a>');
    Ip.bq = function() {
        this.bHq(Di);
        var bHk = E.bj(this.Y, "utag");
        this.IF = bHk[0];
        this.fz = bHk[1]
    };
    Ip.ce = function(bHm) {
        p.ID.bw.ce.call(this, bHm);
        var crb = U.ew(this.hm.replace(/([\\*|\\+|\\?|\\[])/ig, "\\$1")), bKI = new RegExp("(" + crb + ")", "ig");
        if (U.co(bHm, "string")) {
            this.IF.parentNode.style.display = "none";
            this.Y.href = "http://www.lofter.com/tag/" + bHm;
            this.Y.title = bHm;
            bHm = U.ew(bHm).replace(bKI, "<strong>$1</strong>");
            this.fz.innerHTML = bHm
        } else {
            this.IF.parentNode.style.display = "block";
            this.IF.src = loft.x.eK(bHm.bigAvaImg, 20);
            this.Y.href = loft.x.bM(bHm.blogName);
            this.Y.title = bHm.blogNickName;
            var gR = bHm.blogNickName, iV = gR.split(this.hm);
            gR = U.ew(gR).replace(bKI, "<strong>$1</strong>");
            this.fz.innerHTML = gR
        }
    };
    Ip.bHu = function(yF) {
        this.hm = yF.search
    }
})();
(function() {
    var p = P("loft.w.suggestnew"), MM, qX, bAV, ML = "skey_";
    p.wb = C();
    qX = p.wb.bi(P(N.ut).gY);
    qX.bq = function(bl, I) {
        I = I || {};
        this.brp = I.targetBlogName || loft.c.cm.blogName || "";
        this.bro = new p.VU({onsearchsucc: this.brn.A(this)});
        this.eH = p.Ce.bG(bl, {onselect: this.qu.A(this),onchange: this.hu.A(this),onenter: this.SI.A(this)})
    };
    qX.SI = function() {
        if (loft.c.cm.userId > 0)
            return;
        var bg = this.eH.cF();
        location.href = location.hosturl + "/tag/" + bg + "?from=tagsearch"
    };
    qX.hu = function(bg) {
        if (loft.c.cm.userId <= 0)
            return;
        this.eH.xW(this.VY(bg), 0);
        window.setTimeout(function() {
            this.bro.brm(bg, 3)
        }.A(this), 100)
    };
    qX.VY = function(bx, brl, ck) {
        var bn = [];
        bn.push({html: "进入 <strong>" + this.MK(bx, 13) + "</strong> 标签 ＞",value: bx,type: 0,subItems: ck || []});
        bn.push({html: "<strong>" + this.MK(bx, 11) + "</strong> 相关的博客 ＞",value: bx,type: 1,subItems: brl || []});
        return bn
    };
    qX.MK = function(bx, Wi) {
        var fe = loft.x.ty(bx);
        if (fe > Wi) {
            var gd, i = 0;
            while (++i) {
                if (i >= bx.length)
                    break;
                gd = bx.substring(0, i);
                if (loft.x.ty(gd) >= Wi) {
                    bx = gd + "...";
                    break
                }
            }
        }
        return U.ew(bx)
    };
    qX.brn = function(bx, bn) {
        var bg = U.bA(this.eH.cF());
        if (!!bn && (!!bn.blogInfos.length || !!bn.tags.length) && bx == bg) {
            var bu = [], i = 0, l = bn.blogInfos.length;
            for (; i < l; i++) {
                if (!!bn.blogInfos[i].blogId)
                    bu.push(bn.blogInfos[i])
            }
            this.eH.he();
            this.eH.xW(this.VY(bx, bu, bn.tags), 0)
        }
    };
    qX.qu = function(bg) {
        switch (bg.type) {
            case 0:
                if (/#$/.test(bg.href) == false) {
                    location.href = bg.href + "?from=tagsearch"
                } else {
                    location.href = location.hosturl + "/tag/" + bg.value + "?from=tagsearch"
                }
                break;
            case 1:
                if (/#$/.test(bg.href) == false) {
                    window.open(bg.href)
                } else {
                    location.href = location.hosturl + "/follow/" + bg.value
                }
                break;
            case 2:
                location.href = location.hosturl + "/blog/" + this.brp + "/tag/" + bg.value;
                break
        }
    };
    qX.bE = F;
    p.VU = C();
    MM = p.VU.bi(P(N.ut).hx);
    MM.brm = function(bx, dx) {
        if (bx == "" || bx == undefined)
            return;
        var bS = this.et(ML + bx);
        if (!!bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null : bS);
            return
        }
        J.br(location.dwr, "UserBean", "searchBlogAndTagForSuggest", bx, dx, this.hm.A(this, bx))
    };
    MM.hm = function(bx, bS) {
        if (!!bS) {
            this.gp(ML + bx, bS)
        } else {
            this.gp(ML + bx, "empty")
        }
        this.bh("onsearchsucc", bx, bS)
    };
    p.Ce = C();
    bAV = p.Ce.bi(P("loft.w.suggest").Ce, true);
    bAV.cU = function() {
        return "m-ssch2"
    };
    bAV.cM = function() {
        return ""
    };
    bAV.cc = function() {
        this.Y = E.be("schtagbox");
        var bHk = E.bj(this.Y, "xtag");
        this.ek = bHk[0];
        this.brC = bHk[1];
        this.bU = bHk[2];
        this.bTF = bHk[3];
        this.fS = bHk[4];
        this.bTG = E.be("newguide-1");
        this.bIV = false;
        this.bIY = E.be("taglist");
        V.bHn(this.brC, "click", this.bPj.A(this));
        V.bHn(this.bU, "click", V.bb.A(V));
        V.bHn(document, "click", this.he.A(this, true));
        V.bHn(this.bU, "input", this.hu.A(this));
        V.bHn(this.bU, "focus", this.dX.A(this, true));
        V.bHn(this.bU, "blur", this.dX.A(this, false));
        V.bHn(this.ek, "submit", this.fd.A(this));
        V.bHn(document, "keydown", this.mW.A(this));
        if (!!B.dh)
            V.bHn(document, "keypress", this.bPi.A(this));
        if (loft.c.cm.userId <= 0) {
            this.bU.setAttribute("placeholder", "搜索标签")
        }
        if (!B.HC)
            this.bU.value = this.bU.getAttribute("placeholder") || "搜索标签、博客";
        p.hideschlist = this.he.A(this, true);
        this.bIY.style.marginTop = "-" + this.bIY.offsetHeight + "px";
        if (!!this.bU.isfocus)
            this.dX(true)
    };
    bAV.bPj = function(bHl) {
        V.bb(bHl);
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、博客";
        if (!B.HC) {
            if (this.bU.value == lb)
                return
        }
        if (!this.bU.value)
            return;
        location.href = location.hosturl + "/tag/" + this.bU.value + "?from=tagsearch"
    };
    bAV.dX = function(en, bHl) {
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、博客";
        if (!!en) {
            if (!this.bIV) {
                J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_02", F)
            }
            if (!!loft.w.hidemorelist)
                loft.w.hidemorelist();
            if (!!loft.w.bm.hidebloglist)
                loft.w.bm.hidebloglist();
            E.ba(this.bTF, "f-op0");
            this.bIV = true;
            this.bNQ();
            E.ba(this.Y, "m-ssch-act");
            this.hu()
        } else {
            E.bf(this.bTF, "f-op0");
            this.bIV = false;
            E.bf(this.Y, "m-ssch-act");
            this.bKH = false
        }
        if (!B.HC) {
            window.setTimeout(function() {
                if (!!en && this.bU.value == lb)
                    this.bU.value = "";
                if (!en && this.bU.value == "")
                    this.bU.value = lb
            }.A(this), 50)
        }
    };
    var Oq = [38, 40, 13, 27, 83];
    bAV.mW = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode), Q = U.fO(Oq, rB);
        if (Q == -1)
            return;
        var X = V.be(bHl);
        switch (Q) {
            case 0:
                if (!!this.bIV)
                    this.bNP(-1, bHl);
                break;
            case 1:
                if (!!this.bIV)
                    this.bNP(1, bHl);
                break;
            case 2:
                if (!!this.bIV)
                    this.SI(0, bHl);
                break;
            case 3:
                if (!!this.bIV) {
                    this.bU.blur();
                    if (!!this.bIC[this.bHE])
                        E.bf(this.bIC[this.bHE], "seli-hover");
                    this.he(true);
                    this.bNO(true)
                }
                break;
            case 4:
                if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || !!E.cr(X, "noshortkey"))
                    return;
                this.ccj(bHl);
                break
        }
    };
    bAV.ccj = function(bHl) {
        V.bb(bHl);
        if (!!this.bTG && this.bTG.style.display == "") {
            window.loft.g.g5(1, bHl)
        }
        this.bU.focus()
    };
    bAV.bPi = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode);
        if (rB == 13 && !!this.bIV) {
            if (!!this.bKH) {
                this.bNP(0, bHl)
            } else {
                if (!!this.bJR[this.bIs]) {
                    this.bJR[this.bIs].click()
                } else {
                    this.bPj(bHl)
                }
            }
        }
        if (rB == 27 && !!this.bIV) {
            this.bU.blur();
            if (!!this.bIC[this.bHE])
                E.bf(this.bIC[this.bHE], "seli-hover");
            this.he(true);
            this.bNO(true)
        }
    };
    bAV.SI = function(gC, bHl) {
        if (!!this.bKH) {
            this.bNP(0, bHl)
        } else {
            if (!!this.bJR[this.bIs]) {
                var CL = this.bJR[this.bIs];
                try {
                    CL.click();
                    return true
                } catch (e) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true);
                    CL.dispatchEvent(evt);
                    return false
                }
            } else {
                this.bPj(bHl)
            }
        }
    };
    bAV.bNP = function(gC, bHl) {
        if (this.bIC.length == 0)
            return;
        if (gC == 0) {
            V.bb(bHl);
            if (!!this.bIC[this.bHE])
                location.href = this.bIC[this.bHE].children[0].href
        } else {
            if (!!this.bKH && !this.bU.value) {
                if (!!this.bIC[this.bHE])
                    E.bf(this.bIC[this.bHE], "seli-hover");
                this.bHE = this.bHE + gC <= -1 ? this.bIC.length - 1 : this.bHE + gC >= this.bIC.length ? 0 : this.bHE + gC;
                if (!!this.bIC[this.bHE])
                    E.ba(this.bIC[this.bHE], "seli-hover")
            } else {
                if (!E.cr(this.bJR[this.bIs], "js-select"))
                    this.bIs = -1;
                if (this.bIs > -1)
                    E.bf(this.bJR[this.bIs], "js-select");
                this.bIs = this.bIs + gC <= -1 ? this.bJR.length - 1 : this.bIs + gC >= this.bJR.length ? 0 : this.bIs + gC;
                if (this.bIs > -1)
                    E.ba(this.bJR[this.bIs], "js-select")
            }
        }
    };
    bAV.he = function(MN) {
        E.bf(this.fS, "sugbox-act");
        if (!!MN) {
            this.bNO();
            window.setTimeout(p.Ce.bw.he.A(this), 300)
        } else {
            p.Ce.bw.he.call(this)
        }
    };
    bAV.hu = function(fW) {
        var bg = U.bA(this.bU.value);
        var lb = this.bU.getAttribute("placeholder") || "搜索标签、博客";
        if ((!bg || bg === lb) && this.fS.children.length > 0) {
            window.setTimeout(function() {
                E.bf(this.fS, "sugbox-act");
                if (!!this.bIV) {
                    this.bNQ()
                }
            }.A(this), "150");
            return
        }
        if (bg === lb) {
            if (!!this.bIV)
                this.bNQ();
            return
        }
        this.he(!bg);
        if (!bg) {
            if (!!this.bIV)
                this.bNQ();
            return
        }
        this.bNO(true);
        this.bh("onchange", bg)
    };
    bAV.bNQ = function(gu, bHl) {
        E.ba(this.bIY.parentNode, "a-w-sel-do");
        this.bIY.style.marginTop = "0";
        this.bKH = true;
        this.bHE = -1
    };
    bAV.bNO = function(fW) {
        if (!E.cr(this.bIY.parentNode, "a-w-sel-do"))
            return;
        if (!this.bKH || !!fW) {
            this.bIY.style.marginTop = "-" + this.bIY.offsetHeight + "px";
            E.bf(this.bIY.parentNode, "a-w-sel-do")
        }
        this.bKH = false;
        this.bHE = -1;
        this.bIC = E.bj(this.bIY, "seli")
    };
    bAV.xW = function(bn, Q) {
        p.Ce.bw.xW.call(this, bn, Q);
        this.bJR = E.bj(this.fS, "sugitma");
        this.bIs = 0
    }
})();
(function() {
    var p = P("loft.w"), ber, fQ, sR;
    p.bet = C();
    ber = p.bet.bi(P(N.ut).hx);
    ber.biT = function(uG) {
        J.br(location.dwr, "UserBean", "updateFavoriteTagSequence", uG, this.bh.A(this, "onupdatesequence"))
    };
    p.yp = C();
    sR = p.yp.bi(P(N.fw).lu);
    sR.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I);
        this.dl = new p.bet;
        var g = P("m.n");
        g.refreshFavTagList = this.biS.A(this)
    };
    sR.ke = function() {
        var bHk = E.be("favtagcnew");
        if (!bHk)
            return;
        this.tu = this.bex(bHk);
        var fC = E.bj(bHk, "fctag");
        if (fC.length > 0) {
            E.be("nav2flnew").style.display = "";
            E.bf(E.be("nav2flnew").parentNode, "f-op0")
        }
        return bHk
    };
    sR.bex = function(bHk) {
        bHk = bHk || this.Y;
        var bS = E.dE(bHk), i = 0, l = bS.length, bey = [];
        if (!l)
            return;
        if (!this.tk) {
            this.tk = p.bUa.bG(bHk, {handler: "seli",height: 54,noselect: "f-usn",onchange: this.Qx.A(this)})
        } else {
            this.tk.gH()
        }
        for (; i < l; bey.push(parseInt(bS[i].id.replace(/ftagid/g, ""))), i++)
            ;
        if (!!B.da && l > 0) {
            for (var i = 0; i < l; i++) {
                V.bHn(bS[i].children[0], "click", function(bp) {
                    location.href = bp
                }.A(this, bS[i].children[0].href))
            }
        }
        return bey.join(",")
    };
    sR.Qx = function() {
        this.bez()
    };
    sR.bez = function() {
        var qP = this.tk.GK("id", ";");
        qP = qP.replace(/ftagid/g, "");
        if (!!qP && this.tu == qP)
            return;
        this.tu = qP;
        this.biR();
        !!this.tu && this.dl.biT(this.tu)
    };
    sR.biR = function() {
        var bS = this.tk.cB, i = 1, l = bS.length, Q;
        E.ba(bS[0], "first");
        for (; i < l; i++) {
            E.bf(bS[i], "first")
        }
    };
    sR.biS = function() {
        this.bex();
        this.bez();
        var cf = E.dE(this.Y);
        this.Y.style.display = !!cf && cf.length ? "" : "none"
    };
    p.bUa = C();
    fQ = p.bUa.bi(P(N.ui).gX, true);
    fQ.jY = function(bHl) {
        this.bLg = true;
        this.cci = V.vS(bHl);
        return
    };
    fQ.yd = function(bHl) {
        if (!this.bLg || Math.abs(V.vS(bHl) - this.cci) < 5)
            return;
        if (!this.bLh)
            this.bSa(bHl);
        p.gX.bw.yd.call(this, bHl)
    };
    fQ.EK = function(bHl) {
        this.bLg = this.bLh = false;
        p.gX.bw.EK.call(this)
    };
    fQ.bSa = function(bHl) {
        this.Br();
        this.rL = V.vS(bHl);
        this.YH(this.Y, true);
        this.mn = V.be(bHl, this.bBh.A(this));
        this.mn.style.visibility = "hidden";
        var cY = this.Y.style;
        this.gh = this.mn.offsetTop;
        cY.top = this.gh + "px";
        cY.height = this.mn.offsetHeight + "px";
        this.dL.appendChild(this.Y);
        if (B.dh && !this.cv) {
            this.cv = window.setInterval(this.YZ.A(this), 10)
        }
        this.Y.innerHTML = this.mn.innerHTML;
        this.bLh = true
    };
    fQ.cc = function() {
        p.gX.bw.cc.call(this);
        E.ba(this.Y, "seli seli-hover seli-move")
    };
    fQ.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL)
            return;
        this.Y.style.width = "100%";
        this.gH()
    };
    fQ.RY = function(X) {
        var bHk = !!this.rO && E.bj(X, this.rO) || null;
        return bHk && bHk[0] || X
    };
    fQ.GJ = function(X) {
        if (!!X[this.Bt])
            return;
        X[this.Bt] = true;
        X = this.RY(X);
        this.bLg = this.bLh = false;
        V.bHn(X.parentNode, "dragstart", V.bb);
        V.bHn(X, "dragstart", V.bb);
        V.bHn(X, "mousedown", this.jY.A(this))
    }
})();
(function() {
    var p = P("loft.w.bm"), qk, fQ, Eu;
    p.lH = C();
    qk = p.lH.bi(P(N.ui).ga, true);
    qk.bq = function(bl, I) {
        I = I || O;
        this.bHq(bl, I);
        var i = 0, l = loft.c.jg.length, Ah = [];
        for (; i < l; Ah.push(loft.c.jg[i].blogId), i++)
            ;
        this.tu = Ah.join(";");
        this.tO = I.targetid;
        for (var i = 0; i < loft.c.jg.length; i++) {
            if (loft.c.jg[i].blogId == this.tO) {
                this.bRW = i > 0 ? loft.c.jg[i - 1].blogId : -1;
                break
            }
        }
        p.loadMsgCount = this.byS.A(this)
    };
    qk.cc = function() {
        var CL = E.be("blogmanage");
        var bHk = E.bj(CL, "bmtag"), bRU = E.be("bgmancontri", "bgmanmsg", "bgmanask");
        this.ou = bHk[0];
        this.bUl = bHk[1];
        this.bJv = bHk[2];
        this.cB = bHk[3];
        this.bRS = bRU[0];
        this.bRP = bRU[1];
        this.bRO = bRU[2];
        this.bUo = E.be("newguide-2");
        this.bJv.style.marginTop = -this.bJv.offsetHeight + "px";
        V.bHn(this.ou, "click", this.ccg.A(this));
        V.bHn(document, "click", this.bNd.A(this, true));
        V.bHn(document, "keydown", this.mW.A(this));
        if (!!B.dh)
            V.bHn(document, "keypress", this.bPi.A(this));
        p.hidebloglist = this.bNd.A(this, true)
    };
    qk.bz = function(I) {
        I = I || O;
        p.lH.bw.bz.call(this, I)
    };
    qk.fs = function(bl, pa) {
        if (!this.tk)
            this.tk = p.gX.bG(this.cB, {userclass: true,tag: "candrag",height: 52,noselect: "f-usn",onchange: this.Qx.A(this)});
        else
            this.tk.gH()
    };
    var Oq = [38, 40, 13, 27, 68];
    qk.mW = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode), Q = U.fO(Oq, rB);
        if (Q == -1)
            return;
        var X = V.be(bHl);
        switch (Q) {
            case 0:
                if (!!this.bKG)
                    this.bNM(-1, bHl);
                break;
            case 1:
                if (!!this.bKG)
                    this.bNM(1, bHl);
                break;
            case 2:
                if (!!this.bKG)
                    this.bNM(0, bHl);
                break;
            case 3:
                if (!!this.bKG)
                    if (!!this.bIL[this.bHE]) {
                        E.bf(this.bIL[this.bHE], "j-hover")
                    }
                this.bNd();
                break;
            case 4:
                if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || !!E.cr(X, "noshortkey"))
                    return;
                this.ccf(bHl);
                break
        }
    };
    qk.ccf = function(bHl) {
        V.bb(bHl);
        if (!!this.bUo && this.bUo.style.display == "") {
            window.loft.g.g5(2, bHl)
        }
        document.body.scrollTop = 0;
        try {
            this.ou.click();
            return true
        } catch (e) {
            var evt = document.createEvent("MouseEvents");
            evt.initMouseEvent("click", true, true);
            this.ou.dispatchEvent(evt);
            return false
        }
    };
    qk.bNM = function(gC, bHl) {
        if (this.bIL.length == 0)
            return;
        V.bb(bHl);
        if (gC == 0) {
            if (!!this.bIL[this.bHE]) {
                var CL = this.bIL[this.bHE];
                try {
                    CL.click();
                    return true
                } catch (e) {
                    var evt = document.createEvent("MouseEvents");
                    evt.initMouseEvent("click", true, true);
                    CL.dispatchEvent(evt);
                    return false
                }
            }
        } else {
            if (!!this.bIL[this.bHE])
                E.bf(this.bIL[this.bHE], "j-hover");
            this.bHE = this.bHE + gC <= -1 ? this.bIL.length - 1 : this.bHE + gC >= this.bIL.length ? 0 : this.bHE + gC;
            if (!!this.bIL[this.bHE])
                E.ba(this.bIL[this.bHE], "j-hover")
        }
    };
    qk.bPi = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode);
        if (rB == 13 && !!this.bKG) {
            this.bNM(0, bHl)
        }
        if (rB == 27 && !!this.bKG) {
            if (!!this.bIL[this.bHE]) {
                E.bf(this.bIL[this.bHE], "j-hover")
            }
            this.bNd()
        }
        return
    };
    qk.ccg = function(bHl) {
        V.bb(bHl);
        if (!E.cr(this.bJv.parentNode, "a-w-sel-do")) {
            this.bKG = true;
            this.bHE = -1;
            if (!!loft.w.suggestnew.hideschlist)
                loft.w.suggestnew.hideschlist();
            if (!!loft.w.hidemorelist)
                loft.w.hidemorelist();
            this.bJv.style.marginTop = "0px";
            E.ba(this.bJv.parentNode, "a-w-sel-do");
            J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_03", F)
        } else {
            this.bNd()
        }
    };
    qk.bNd = function() {
        this.bKG = false;
        this.bHE = -1;
        if (!this.bJv)
            return;
        if (this.bJv.offsetHeight == 0)
            return;
        this.bJv.style.marginTop = -this.bJv.offsetHeight + "px";
        E.bf(this.bJv.parentNode, "a-w-sel-do")
    };
    qk.Qx = function() {
        var qP = this.tk.GK("id", ";"), bKI = new RegExp(this.bRW, "gi");
        qP = this.bRW == -1 ? this.tO + ";" + qP : qP.replace(bKI, this.bRW + ";" + this.tO);
        if (this.tu != qP) {
            this.tu = qP;
            this.byA();
            J.br(location.dwr, "UserBean", "updateBlogSequence", qP, function() {
            }.A(this))
        }
    };
    qk.byA = function() {
        var i = 0, ij = [], pP = this.tu.split(";"), byt = pP.length, bt, Q;
        for (i = 0; i < byt; i++) {
            bt = pP[i];
            Q = U.fO(loft.c.jg, function(mV) {
                return mV.blogId == bt
            });
            if (Q != -1) {
                ij.push(loft.c.jg[Q])
            }
        }
        loft.c.jg = ij
    };
    qk.byS = function(bS) {
        var Lt = !!this.tO ? this.tO : E.be("blogmanage").children[0].id, bUx = U.fO(bS, function(mV) {
            return mV.blogId == Lt
        });
        if (bUx >= 0)
            this.bKF = bS.splice(bUx, 1);
        var i = 0, l = bS.length, fC, qC = 0, bn = E.bj(this.cB, "candrag"), bt, Q, df, bKk;
        for (; i < l; i++) {
            fC = bS[i] || {};
            qC += (fC.unReadContributeCount || 0) + (fC.unReadMsgCount || 0) + (fC.unReadAskCount || 0)
        }
        this.bUl.innerHTML = qC;
        this.bUl.style.display = qC > 0 ? "block" : "none";
        for (i = 0; i < bS.length; i++) {
            bt = bn[i].id;
            Q = U.fO(bS, function(mV) {
                return mV.blogId == bt
            });
            df = E.bj(bn[i], "ttag");
            bKk = 0;
            if (bS[Q].unReadContributeCount > 0) {
                df[1].innerHTML = bS[Q].unReadContributeCount;
                df[1].parentNode.style.display = "inline-block";
                E.ba(df[1].parentNode, "j-blogman");
                bKk++
            } else {
                df[1].parentNode.style.display = "none";
                E.bf(df[1].parentNode, "j-blogman")
            }
            if (bS[Q].unReadAskCount > 0) {
                df[2].innerHTML = bS[Q].unReadAskCount;
                df[2].parentNode.style.display = "inline-block";
                E.ba(df[2].parentNode, "j-blogman");
                bKk++
            } else {
                df[2].parentNode.style.display = "none";
                E.bf(df[2].parentNode, "j-blogman")
            }
            if (bS[Q].unReadMsgCount > 0) {
                df[3].innerHTML = bS[Q].unReadMsgCount;
                df[3].parentNode.style.display = "inline-block";
                E.ba(df[3].parentNode, "j-blogman");
                bKk++
            } else {
                df[3].parentNode.style.display = "none";
                E.bf(df[3].parentNode, "j-blogman")
            }
            df[0].style.width = bKk == 0 ? "192px" : 157 - 40 * (bKk - 1) + "px";
            df[0].style.paddingRight = bKk == 0 ? "17px" : 52 + 40 * (bKk - 1) + "px"
        }
        if (this.bKF.length > 0) {
            if (!!this.bRS && this.bKF[0].unReadContributeCount > 0) {
                this.bRS.innerHTML = this.bKF[0].unReadContributeCount;
                this.bRS.style.display = ""
            }
            if (!!this.bRP && this.bKF[0].unReadMsgCount > 0) {
                this.bRP.innerHTML = this.bKF[0].unReadMsgCount;
                this.bRP.style.display = ""
            }
            if (!!this.bRO && this.bKF[0].unReadAskCount > 0) {
                this.bRO.innerHTML = this.bKF[0].unReadAskCount;
                this.bRO.style.display = ""
            }
        }
        this.bIL = E.bj(this.cB, "j-blogman")
    };
    p.gX = C();
    fQ = p.gX.bi(P(N.ui).gX, true);
    fQ.cc = function() {
        p.gX.bw.cc.call(this);
        E.ba(this.Y, "seli seli-hover seli-move")
    };
    fQ.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL)
            return;
        this.gH()
    };
    fQ.jY = function(bHl) {
        this.bLg = true;
        this.cce = V.vS(bHl);
        return
    };
    fQ.yd = function(bHl) {
        if (!this.bLg || Math.abs(V.vS(bHl) - this.cce) < 5)
            return;
        if (!this.bLh)
            this.bSa(bHl);
        p.gX.bw.yd.call(this, bHl)
    };
    fQ.EK = function(bHl) {
        this.bLg = this.bLh = false;
        p.gX.bw.EK.call(this)
    };
    fQ.bSa = function(bHl) {
        p.gX.bw.jY.call(this, bHl);
        this.Y.innerHTML = this.mn.innerHTML;
        this.bLh = true
    }
})();
(function() {
    var p = P("loft.w"), jQ, qk, qf, Eu, QY, yI, bFO = 10, bzb = 3e4, ex = "blogcount";
    p.QX = C();
    yI = p.QX.bi(P(N.ut).hx);
    yI.ZU = function() {
        var bS = this.et(ex);
        if (!!bS) {
            this.bh("ongetblogcount", bS);
            return
        }
        J.br(location.dwr, "UserBean", "getAllBlogCount", this.bza.A(this))
    };
    yI.bza = function(bS) {
        if (!!bS && !!bS.length) {
            this.gp(ex, bS);
            this.bh("ongetblogcount", bS)
        }
    };
    yI.ZZ = function(bc, iQ, on) {
        if (!bc || !iQ)
            return;
        var bS = this.et(ex), Q;
        if (!!bS) {
            Q = U.fO(bS, function(fC) {
                return bc == fC.blogId
            });
            if (!!on) {
                bS[Q][iQ] += on
            }
            if (!!bS[Q] && (bS[Q][iQ] < 0 || !on))
                bS[Q][iQ] = 0;
            this.bh("ongetmsgcount", bS)
        }
    };
    yI.bai = function(byZ, byY) {
        J.br(location.dwr, "TrackBean", "getTopCount", byZ, byY, this.byW.A(this))
    };
    yI.byW = function(dU) {
        if (!!dU) {
            var byV = dU.unread || 0, bS = dU.list || [];
            this.gp(ex, bS);
            this.bh("ongetunreadtrackcount", byV);
            if (!!E.be("blogmanage")) {
                loft.w.bm.loadMsgCount(bS)
            }
        }
    };
    p.bas = C();
    jQ = p.bas.prototype;
    jQ.bq = function() {
        this.bv = new p.QX({ongetunreadtrackcount: this.byT.A(this),ongetmsgcount: this.byS.A(this)});
        P("m");
        window.m.loadAllMembers = this.QQ.A(this);
        if (!!this.dK() && loft.c.cm.userId > 0) {
            this.bbc = this.bbd = -1;
            this.bv.bai(-1, -1);
            window.m.refreshMsgCount = this.byR.A(this);
            window.m.clearMsgCount = this.byQ.A(this);
            this.byP();
            this.byO()
        }
    };
    jQ.byO = function() {
        if (loft.c.cm.isFromMobile == "1") {
            var QK = document.cloneElement("div", "g-hd2");
            QK.innerHTML = '<div class="m-bkmbbtn"><a href="#">返回移动版</a>';
            document.body.insertAdjacentElement("afterBegin", QK);
            E.ba(document.body, "p-body9");
            V.bHn(QK, "click", this.byN.A(this))
        }
    };
    jQ.byN = function() {
        U.ir("NTES_LOFT_PCSTICK");
        U.ir("NTES_LOFT_PCSTICK", ".lofter.com", "/");
        location.reload()
    };
    jQ.byP = function() {
        var byM = function() {
            this.bv.bai(this.bbc, this.bbd)
        }.A(this);
        window.setInterval(byM, bzb)
    };
    jQ.byR = function(bc, on) {
        this.bv.ZZ(bc, "unReadMsgCount", on)
    };
    jQ.byQ = function(bc) {
        this.bv.ZZ(bc, "unReadMsgCount", 0)
    };
    jQ.QQ = function(bHl) {
        V.bb(bHl);
        var X = V.be(bHl, function(X) {
            return X.tagName == "A"
        }), bl = X.parentNode.parentNode, qC = E.dE(bl), l = qC.length - 1;
        for (; l--; qC[l].style.display = "")
            ;
        var QH = qC[0].clientHeight;
        bl.style.height = (qC.length - 1) * QH + "px";
        X.parentNode.style.display = "none"
    };
    jQ.byS = function(bS) {
    };
    jQ.byT = function(bHm) {
        if (!!bHm) {
            this.QD.parentNode.style.display = "";
            this.QD.innerText = bHm;
            if (!!window.isInDashboard) {
                var gC = parseInt(bHm);
                if (!!bHm && bHm > 99) {
                    document.title = "(99+)" + "LOFTER"
                } else {
                    if (!!bHm && bHm > 0) {
                        document.title = "(" + bHm + ")" + "LOFTER"
                    } else {
                        document.title = "LOFTER"
                    }
                }
            }
        } else {
            this.QD.parentNode.style.display = "none";
            if (!!window.isInDashboard) {
                document.title = "LOFTER"
            }
        }
        this.bbc = bHm || 0
    };
    jQ.dK = function() {
        var byJ = E.be("topbar"), bHk = E.bj(byJ, "tbtag"), i = 0;
        if (!bHk || !bHk.length)
            return false;
        this.FO = bHk[i++];
        this.QD = bHk[i++];
        this.pj = bHk[i++];
        this.ceq = bHk[i++];
        this.bNb = bHk[i++];
        this.cbT = bHk[i++];
        this.cg = bHk[i++];
        this.bIY = bHk[i++];
        V.bHn(this.pj.parentNode, "click", this.bRj.A(this, true));
        V.bHn(document, "click", this.byE.A(this));
        this.byD();
        var bHk = E.dE(this.cbT).concat(E.dE(E.be("favtagcnew")).concat(E.dE(E.be("bloglstp")))), l = bHk.length;
        for (; l--; E.fy(bHk[l], "seli-hover"))
            ;
        this.CN = new loft.w.suggestnew.wb(null, {stag: "",stype: 0});
        this.IT = new p.yp(null, {});
        p.hidemorelist = this.bRj.A(this, false);
        return true
    };
    jQ.byD = function() {
        var cpR = E.be("rside-postcount"), cpQ = E.be("rside-postqueuecount"), cpP = E.be("rside-draftcount");
        this.cpO = {postCount: cpR,postQueueCount: cpQ,draftCount: cpP};
        var g = P("loft.g");
        g.updateRightSide = this.cpN.A(this);
        this.bKH = false;
        this.bIY.style.marginTop = "-" + this.bIY.offsetHeight + "px";
        if (!B.dh)
            return;
        var bdb = E.be("rside"), cf, l;
        if (!!bdb) {
            cf = bdb.getElementsByTagName("li");
            for (l = cf.length; l--; E.fy(cf[l], "j-hover"))
                ;
        }
    };
    jQ.cpN = function(by, cpM) {
        var X = this.cpO[by];
        if (X) {
            var fC = 0;
            try {
                fC = parseInt(X.innerText)
            } catch (e) {
            }
            fC += cpM;
            if (fC <= 0) {
                fC = 0
            }
            X.innerText = fC;
            if (by == "postCount")
                return;
            X.parentNode.parentNode.style.display = fC > 0 ? "" : "none"
        }
    };
    jQ.bRj = function(gu, bHl) {
        if (!!bHl && !!E.cr(bHl.originalTarget || bHl.srcElement, "tbtag"))
            V.bb(bHl);
        if (!gu || !!E.cr(this.bNb, "a-w-sel-do")) {
            E.bf(this.bNb, "a-w-sel-do");
            this.bNb.children[0].style.marginTop = "-258px"
        } else {
            if (!!loft.w.suggestnew.hideschlist)
                loft.w.suggestnew.hideschlist();
            if (!!loft.w.bm.hidebloglist)
                loft.w.bm.hidebloglist();
            E.ba(this.bNb, "a-w-sel-do");
            this.bNb.children[0].style.marginTop = "0px";
            J.br(location.dwr, "LoggerBean", "printStatLog", "homeClick_20130514_01", F)
        }
    };
    jQ.byE = function(bHl) {
        this.bRj(false)
    };
    p.gX = C();
    fQ = p.gX.bi(P(N.ui).gX, true);
    fQ.jY = function(bHl) {
        p.gX.bw.jY.call(this, bHl);
        this.Y.innerHTML = this.mn.innerHTML
    };
    fQ.cc = function() {
        p.gX.bw.cc.call(this);
        E.ba(this.Y, "seli seli-hover seli-move")
    };
    fQ.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL)
            return;
        this.gH()
    }
})();
(function() {
    var mA = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    }, byg = function() {
        var X = E.be("gtotop"), sv, Qs, bfP, HU;
        if (!X)
            return;
        V.bHn(X, "click", byf);
        Qs = function() {
            if (mA() > 500) {
                if (B.dh) {
                    X.style.top = document.documentElement.clientHeight + mA() - 86 + "px"
                }
                X.style.visibility = "visible";
                X.style.filter = "alpha(opacity=100)";
                X.style.opacity = 1;
                if (!!HU)
                    window.clearTimeout(HU)
            } else {
                X.style.filter = "alpha(opacity=0)";
                X.style.opacity = 0;
                HU = window.setTimeout(function() {
                    X.style.visibility = "hidden";
                    delete HU
                }.A(this), 300)
            }
        };
        bfP = function() {
            if (!!sv) {
                window.clearTimeout(sv);
                delete sv
            }
            sv = window.setTimeout(Qs, 100)
        };
        V.bHn(window, "scroll", B.dh ? Qs : bfP)
    }, byf = function(bHl) {
        V.bb(bHl);
        document.documentElement.scrollTop = document.body.scrollTop = 0
    };
    byg()
})();
(function() {
    var p = P("loft.w"), vm, eb;
    p.Ie = C();
    p.Ie.Qq = function(dN, eT, I) {
        if (!eb)
            eb = new p.Ie(I);
        if (!!dN)
            eb.Qq(dN, eT || 0)
    };
    vm = p.Ie.prototype;
    vm.bq = function(I) {
        I = I || O;
        this.Qo = [];
        this.bye(I);
        this.bgg = this.bgj();
        this.byd()
    };
    vm.bye = function(I) {
        this.bgy = I.imgattr || "imgsrc";
        this.Qm = I.diff || 0
    };
    vm.byd = function() {
        var sv, self = this;
        V.bHn(window, "scroll", bgF);
        V.bHn(window, "resize", function() {
            self.bgg = self.bgj();
            bgF(true)
        });
        function bgF(qF) {
            if (sv)
                return;
            sv = setTimeout(function() {
                self.bgG(qF);
                sv = null
            }, 100)
        }
    };
    vm.bgG = function(qF) {
        var kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (!qF && kj <= this.Qm)
            return;
        var dN = this.Qo, byc = this.bgg + kj, i, eJ, In;
        for (i = 0; eJ = dN[i++]; ) {
            var byb = eJ.dataoffset || E.jO(eJ);
            if (byb <= byc) {
                In = eJ.getAttribute(this.bgy);
                if (In && eJ.src != In) {
                    eJ.src = In;
                    eJ.removeAttribute(this.bgy);
                    dN.splice(--i, 1)
                }
            }
        }
    };
    vm.bgj = function() {
        var bgS = document.documentElement.clientHeight;
        if (this.Qm === 0)
            return 2 * bgS;
        else
            return this.Qm + bgS
    };
    vm.Qq = function(dN, eT) {
        if (!!dN.length) {
            for (var i = 0, l = dN.length; i < l; this.Qo.push(dN[i]), dN[i].dataoffset = eT, i++)
                ;
        } else {
            this.Qo.push(dN);
            dN.dataoffset = eT
        }
        this.bgG(true)
    }
})();
(function() {
    var p = P("loft.d"), yX;
    p.vz = C();
    yX = p.vz.bi(P(N.fw).bIF);
    yX.yY = function(bDB) {
        J.br(location.dwr, "UserBean", "addBlacklist", bDB || "", this.bh.A(this, "onaddblacklist"))
    };
    yX.bxZ = function(bt) {
        J.br(location.dwr, "UserBean", "removeBlacklist", bt || 0, this.bh.A(this, "onremoveblacklist", bt))
    };
    yX.csP = function(bc, ctG) {
        J.br(location.dwr, "UserBean", "removeFollower", bc || 0, ctG || 0, this.bh.A(this, "onremovefollowed"))
    };
    yX.bFQ = function(dx, ci) {
        J.br(location.dwr, "UserBean", "getBlacklistUserList", dx, ci, this.bh.A(this, "onloadblacklist"))
    };
    yX.pQ = function(I, ca) {
        ca(I.allcount)
    };
    yX.kB = function(I, ca) {
        J.br(location.dwr, "UserBean", "getBlacklistUserList", I.limit, I.offset, ca)
    }
})();
(function() {
    window.setTimeout(function() {
        new (P("loft.w").bas);
        if (!!loft.c.bzp) {
            J.Ty("http://music.ph.126.net/ph.js?001")
        }
        J.Ty("http://analytics.163.com/ntes.js", function() {
            window["_ntes_nacc"] = "lofter";
            window.neteaseTracker()
        })
    }, 1e3);
    var bxW = function() {
        if (typeof screen.fontSmoothingEnabled != "undefined")
            return screen.fontSmoothingEnabled;
        try {
            var a = document.createElement("canvas");
            a.width = "35", a.height = "35", a.style.display = "none", document.body.appendChild(a);
            var b = a.getContext("2d");
            b.textBaseline = "top", b.font = "32px Arial", b.fillStyle = "black", b.strokeStyle = "black", b.fillText("E", 0, 0);
            for (var c = 8; c <= 32; c++)
                for (var d = 1; d <= 32; d++) {
                    var e = b.getImageData(d, c, 1, 1).data, f = e[3];
                    if (f != 255 && f != 0)
                        return document.body.removeChild(a), true
                }
            return document.body.removeChild(a), false
        } catch (e) {
            return null
        }
    }, bxU = function() {
        var b = navigator.userAgent.indexOf("Windows NT 5.1") > -1, c = b ? bxW() : true, d = document.getElementsByTagName("html")[0];
        if (c == false)
            d.className += " z-ff"
    };
    bxU();
    function test() {
        var cer = "just for update!!!"
    }
    loft.x.ccB("/src/css/retina/style.css")
})();
(function() {
    var p = P("loft.d"), bdX = "ck-hot", Ak = "ck-cmt", lj;
    p.up = C();
    lj = p.up.bi(P(N.ut).hx);
    lj.bvW = function(em, dA, dx, ci) {
        var bHm = this.et(bdX + em + ci);
        if (!!bHm) {
            this.bh("onloadhotlist", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getPostHots", em, dA, dx, ci, this.bvV.A(this, em, ci))
        }
    };
    lj.bvV = function(em, ci, bHm) {
        if (!!bHm) {
            this.gp(bdX + em + ci, bHm);
            this.bh("onloadhotlist", bHm)
        }
    };
    lj.bvU = function(em, dx, ci) {
        var bHm = this.et(Ak + em), Pp;
        if (!!bHm) {
            Pp = bHm.slice(ci, ci + dx)
        }
        if (!!Pp && !!Pp.length) {
            this.bh("onloadcmtlist", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getPostResponses", em, dx, ci, this.bvS.A(this, em, dx, ci))
        }
    };
    lj.bvS = function(em, dx, ci, bHm) {
        if (!!bHm) {
            var eu = this.et(Ak + em) || [];
            eu = eu.concat(bHm);
            this.gp(Ak + em, eu);
            this.bh("onloadcmtlist", eu)
        }
    };
    lj.Ao = function(Z, em, dA, hT, rs, rq) {
        var Po = {postId: em,blogId: dA,content: Z,replyToUserId: rs || 0,replyToResponseId: hT || 0};
        J.br(location.dwr, "PostBean", "addPostResponse", Po, !!rq, this.bvR.A(this, em))
    };
    lj.bvR = function(em, bHm) {
        var bx = Ak + em, eu = this.et(bx) || [];
        eu.unshift(bHm);
        this.gp(bx, eu);
        this.bh("onaddcmt", bHm)
    };
    lj.bZu = function(Z, em, dA, hT, rs, rq) {
        var Po = {postId: em,blogId: dA,content: Z,replyToUserId: rs || 0,replyToResponseId: hT || 0};
        J.br(location.dwr, "PostBean", "addPostResponse", Po, !!rq, this.bZt.A(this, em))
    };
    lj.bZt = function(em, bHm) {
        this.bh("onaddcmt", bHm)
    };
    lj.Pm = function(sT, dR, bc) {
        J.br(location.dwr, "PostBean", "removePostResponse", sT, dR, bc, this.bvO.A(this, dR))
    };
    lj.bvO = function(em, bHm) {
        if (!!bHm) {
            var eu = this.et(Ak + em), Q = U.fO(eu, function(bo) {
                return bHm == bo.id
            });
            if (Q != -1)
                eu.splice(Q, 1);
            this.bh("ondelcmt", bHm, Q)
        }
    };
    lj.bfg = function(em, dA) {
        J.br(location.dwr, "PostBean", "like", em, dA, this.bh.A(this, "onlike", true))
    };
    lj.bfi = function(em, dA) {
        J.br(location.dwr, "PostBean", "unlike", em, dA, this.bh.A(this, "onlike", false))
    };
    lj.bvN = function(em, dA) {
        J.br(location.dwr, "PostBean", "removePost", em, dA, this.bh.A(this, "ondelete"))
    };
    lj.bvE = function(em, dA, ld) {
        J.br(location.dwr, "PostBean", "share", em, dA, this.bh.A(this, "onshare", true, ld))
    };
    lj.bvA = function(em, dA, ld) {
        J.br(location.dwr, "PostBean", "unShare", em, dA, this.bh.A(this, "onshare", false, ld))
    };
    lj.bZs = function(em, dA) {
        J.br(location.dwr, "PostBean", "publishQueuePostNow", em, dA, this.bh.A(this, "oncontripass"))
    }
})();
(function() {
    var p = P("loft.d"), ex = "ck_tracklist", Pe = "ck_eventsids", bfu = "ck_eventid_userid_map", eN = 20, bZE = 20, JU, Au, uM, lV, Pc, bOb, bVG;
    p.bfJ = C();
    JU = p.bfJ.bi(P(N.ut).hx);
    JU.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            if (cq == 1) {
                J.br(location.dwr, "TrackBean", "getTrackItemListWithShare", false, this.nf.A(this, cq))
            } else {
                var Kh = this.et(Pe), qv = (cq - 1) * eN, ik;
                if (!!Kh && Kh.length > qv) {
                    ik = Kh.slice(qv, qv + eN);
                    if (!!ik && !!ik.length) {
                        var bvy = this.et(bfu);
                        var bfU = {};
                        for (var i = 0, j = ik.length; i < j; i++) {
                            var Pb = bvy[ik[i]];
                            if (!!Pb && Pb > 0) {
                                bfU[ik[i]] = Pb
                            }
                        }
                        J.br(location.dwr, "TrackBean", "getTrackItemWithShareListByEventIds", ik, bfU, this.nf.A(this, cq));
                        return
                    }
                }
                this.bh("ontracklistload", null)
            }
        }
    };
    JU.nf = function(cq, bHm) {
        cq = cq || 1;
        if (!bHm || bHm.items && !bHm.items.length) {
            this.bh("ontracklistload", null, !!bHm);
            return
        }
        if (cq == 1) {
            this.gp(ex + cq, bHm.items || []);
            this.gp(Pe, bHm.eventsIds || []);
            this.gp(bfu, bHm.shareEventIdUserIdMap || {});
            this.bfW = bHm.eventsIds.length;
            var Pa = this.bfW > cq * eN;
            this.bh("ontracklistload", bHm.items || [], Pa)
        } else {
            this.gp(ex + cq, bHm || []);
            this.bh("ontracklistload", bHm || [], this.bfW > cq * eN)
        }
    };
    JU.Et = function() {
        return eN
    };
    p.bgc = C();
    Au = p.bgc.bi(P(N.ut).hx);
    Au.bq = function(bvx, bvw) {
        this.bHq();
        this.bgk = bvx || [];
        this.bvv = bvw || [];
        this.bgv = this.bgk.length
    };
    Au.uP = function(cq) {
        cq = cq || 2;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            var Kh = this.et(Pe), qv = (cq - 1) * eN, Ah, bgx;
            if (this.bgv > qv) {
                Ah = this.bgk.slice(qv, qv + eN);
                bgx = this.bvv.slice(qv, qv + eN);
                J.br(location.dwr, "TagBean", "getRecommendTagPost4GoogleAd", Ah, bgx, this.nf.A(this, cq));
                return
            }
            this.bh("ontracklistload", null)
        }
    };
    Au.nf = function(cq, bHm) {
        cq = cq || 2;
        if (!bHm || bHm.items && !bHm.items.length) {
            this.bh("ontracklistload", null);
            return
        }
        this.gp(ex + cq, bHm || []);
        this.bh("ontracklistload", bHm || [], this.bgv > cq * eN)
    };
    Au.Et = function() {
        return eN
    };
    p.qe = C();
    lV = p.qe.bi(P(N.ut).hx);
    lV.bq = function(I) {
        I = I || O;
        this.bHq(I);
        this.er = I.tag || "";
        this.dJ = I.type || 0;
        this.bgC = I.first || "";
        this.bvu = I.recommType || "new";
        this.bvt = I.isrecommender || false;
        this.AB = I.rtagId || 0;
        this.bbp = I.rtagRank || 0;
        this.tO = I.targetBlogId || 0;
        this.chA = I.mjtag || false;
        this.cim = I.mjPage
    };
    lV.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq), bOk = this.bQn(cq), ci = this.bZA(cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            if (!!this.chA) {
                ci += 200 * this.cim;
                J.br(location.dwr, "TagBeanWrap", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, 200, ci, this.bgM || 0, this.nf.A(this, cq))
            } else {
                J.br(location.dwr, "TagBean", "search", this.er, this.dJ, this.bgC, this.bvu, this.bvt, this.tO, bOk, ci, this.bgM || 0, this.nf.A(this, cq))
            }
            return
        }
    };
    lV.nf = function(cq, bHm) {
        cq = cq || 1;
        if (!bHm || !bHm.length) {
            this.bh("ontracklistload", bHm);
            return
        }
        this.gp(ex + cq, bHm || []);
        var bGd, Q = bHm.length;
        this.bgM = 0;
        if (!!this.chA) {
            while (--Q >= 0) {
                if (!!bHm[Q]) {
                    this.bgM = bHm[Q].trackItem.post.publishTime;
                    break
                }
            }
        } else {
            while (--Q >= 0) {
                if (!!bHm[Q]) {
                    this.bgM = bHm[Q].post.publishTime;
                    break
                }
            }
        }
        this.bh("ontracklistload", bHm || [])
    };
    lV.bQn = function(cq) {
        return cq === 1 ? bZE : eN
    };
    lV.bZA = function(cq) {
        var ci = 0, i = 1;
        for (; i <= cq - 1; i++) {
            ci += this.bQn(i)
        }
        return ci
    };
    lV.Et = function(cq) {
        cq = cq || 0;
        var bOk = this.bQn(cq);
        return !!this.bgC ? bOk - 1 : bOk
    };
    lV.bvr = function(df) {
        J.br(location.dwr, "TagBean", "favTag", df, this.bh.A(this, "onfavtag"))
    };
    lV.bvq = function(bvp) {
        J.br(location.dwr, "TagBean", "unFavTag", bvp, this.bh.A(this, "unfavtag"))
    };
    lV.bgW = function(dR, bc, bha) {
        J.br(location.dwr, "TagBean", "addRecommendPost", this.AB, dR, bc, !!bha, this.bh.A(this, "onrecommend", true, dR, this.er, !!bha))
    };
    lV.bvm = function(yz) {
        J.br(location.dwr, "TagBean", "addRecommendPostByPermalink", this.AB, yz, this.bh.A(this, "onrecommendpermalink"))
    };
    lV.bhl = function(dR, bc, Ui) {
        J.br(location.dwr, "TagBean", "removeRecommendPost", this.AB, dR, bc, !!Ui, this.bh.A(this, "onrecommend", false, dR, this.er, !!Ui))
    };
    lV.bvl = function(dx) {
        if (!!this.AB) {
            J.br(location.dwr, "TagBean", "getTagEditors", this.AB, this.bh.A(this, "onloadeditors"))
        } else {
            J.br(location.dwr, "TagBean", "getCommonTagExcellentAuthors", this.er, this.bh.A(this, "onloadeditors"))
        }
    };
    lV.bZy = function(dR, bc) {
        J.br(location.dwr, "TagBean", "degradePostTag", this.er, dR, bc, this.bh.A(this, "ondegradepost", dR, this.er))
    };
    lV.bvk = function(dR, bc) {
        J.br(location.dwr, "TagBean", "filterPostTag", this.er, dR, bc, this.bh.A(this, "onfilterpost", dR))
    };
    lV.bvi = function(bc) {
        J.br(location.dwr, "TagBean", "addBlogTagForbid", bc, this.er, this.bh.A(this, "onforbidblog", bc))
    };
    p.Uo = C();
    Pc = p.Uo.bi(p.qe);
    Pc.bq = function(I) {
        this.bHq(I);
        this.bI = I.blogId || 0
    };
    Pc.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getPosts", this.bI, eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    p.Uq = C();
    Us = p.Uq.bi(p.qe);
    Us.bq = function(I) {
        this.bHq(I);
        this.bI = I.blogId || 0
    };
    Us.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getDrafts", this.bI, eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    p.Ut = C();
    Uw = p.Ut.bi(p.qe);
    Uw.bq = function(I) {
        this.bHq(I);
        this.bI = I.blogId || 0
    };
    Uw.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getContributes", this.bI, eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    p.bWe = C();
    bQq = p.bWe.bi(p.qe);
    bQq.bq = function(I) {
        this.bHq(I);
        this.bI = I.blogId || 0
    };
    bQq.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getQueuePostTrackItemList", this.bI, eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    bQq.bZx = function(dA, bZw, bZv, fC) {
        J.br(location.dwr, "PostBean", "updateQueuePostSetting", dA, bZw, bZv, fC, this.bh.A(this, "cbsettime"))
    };
    p.OX = C();
    OW = p.OX.bi(p.qe);
    OW.bq = function(I) {
        this.bHq(I)
    };
    OW.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getFavTrackItem", eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    OW.nf = function(cq, bHm) {
        if (!!bHm && bHm.length > 0)
            for (var l = bHm.length; l--; !!bHm[l] && (bHm[l].liked = true))
                ;
        p.OX.bw.nf.call(this, cq, bHm)
    };
    p.EY = C();
    uM = p.EY.bi(P(N.fw).bIF);
    uM.kB = function(I, ca) {
        var UC = this.et("_$FCID$_" + I.cyid);
        if (!!UC) {
            this.UE(ca, I.cyid, UC)
        } else {
            J.br(location.dwr, "BlogBean", "getGoodBlogsByCategory", I.cyid, this.UE.A(this, ca, I.cyid))
        }
    };
    uM.pQ = function(I, ca) {
        ca(I.allcount)
    };
    uM.UE = function(ca, bt, bn) {
        this.gp("_$FCID$_" + bt, bn);
        ca(bn)
    };
    uM.OU = function() {
        return this.et("_$FIDS$_") || {}
    };
    uM.bvh = function() {
        return this.et("_$FIDSC$_") || 0
    };
    uM.bvg = function(bc, bvf) {
        var cp = this.et("_$FIDS$_"), fC = this.et("_$FIDSC$_"), bg;
        if (!cp) {
            cp = {};
            this.gp("_$FIDS$_", cp)
        }
        if (!fC) {
            fC = 0;
            this.gp("_$FIDSC$_", fC)
        }
        bg = cp[bc];
        if (!!bvf) {
            if (!bg) {
                cp[bc] = "1";
                fC++
            }
        } else {
            if (!!bg) {
                cp[bc] = null;
                fC--
            }
        }
        this.gp("_$FIDS$_", cp);
        this.gp("_$FIDSC$_", fC)
    };
    p.bQv = C();
    bOb = p.bQv.bi(p.qe);
    bVG = p.bQv.bw;
    bOb.bq = function(I) {
        this.bHq(I);
        this.bI = I.blogId || 0
    };
    bOb.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "PostBean", "getAskList", this.bI, eN, eN * (cq - 1), this.nf.A(this, cq));
            return
        }
    };
    bOb.nf = function(cq, bHm) {
        bVG.nf.call(this, cq, bHm)
    };
    p.byp = C();
    buS = p.byp.bi(p.qe);
    buS.bq = function(I) {
        this.bHq(I);
        this.Am = I.userId;
        this.cgb = I.fpost;
        this.civ = I.dwrMethod
    };
    buS.uP = function(cq) {
        cq = cq || 1;
        var bHm = this.et(ex + cq);
        if (!!bHm && !!bHm.length) {
            this.bh("ontracklistload", bHm)
        } else {
            J.br(location.dwr, "BlogBean", this.civ, this.Am, eN, eN * (cq - 1), this.cgb, this.nf.A(this, cq));
            return
        }
    };
    buS.nf = function(cq, bHm) {
        p.OX.bw.nf.call(this, cq, bHm)
    }
})();
(function() {
    var p = P("loft.d"), UL = "uf", fK = "cmt", vB;
    p.AS = C();
    vB = p.AS.bi(P(N.ut).hx);
    vB.bq = function(I) {
        I = I || O;
        this.bHq(I);
        this.bZr = I.followFrom || ""
    };
    vB.OS = function(bc) {
        J.br(location.dwr, "UserBean", "followBlogWithFrom", bc, this.bZr, this.bh.A(this, "onfollow", bc, true))
    };
    vB.OP = function(bc) {
        J.br(location.dwr, "UserBean", "unFollowBlog", bc, this.bh.A(this, "unfollow", bc, false))
    };
    vB.bGe = function(bc) {
        var vF = this.et(UL + bc);
        if (!!vF)
            this.bh("ongetuf", vF);
        else
            J.br(location.dwr, "UserBean", "getUserFollowing", bc, this.bvd.A(this))
    };
    vB.bvd = function(vF) {
        if (!!vF) {
            this.gp(UL + vF.blogId, vF);
            this.bh("ongetuf", vF)
        }
    };
    vB.bvb = function(bc) {
        var bu = this.et(fK + bc);
        if (!!bu) {
            this.bh("ongetcancomment", bu)
        } else
            J.br(location.dwr, "UserBean", "canComment", bc, this.bva.A(this, bc))
    };
    vB.bva = function(bc, bu) {
        if (!!bu) {
            this.gp(fK + bc, bu);
            this.bh("ongetcancomment", bu)
        }
    }
})();
(function() {
    var p = P("loft.d"), rZ;
    var dbits;
    var canary = 0xdeadbeefcafe;
    var j_lm = (canary & 16777215) == 15715070;
    function BigInteger(a, b, c) {
        if (a != null)
            if ("number" == typeof a)
                this.fromNumber(a, b, c);
            else if (b == null && "string" != typeof a)
                this.fromString(a, 256);
            else
                this.fromString(a, b)
    }
    function nbi() {
        return new BigInteger(null)
    }
    function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 67108864);
            w[j++] = v & 67108863
        }
        return c
    }
    function am2(i, x, w, j, c, n) {
        var xl = x & 32767, xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 32767;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 32767) << 15) + w[j] + (c & 1073741823);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 1073741823
        }
        return c
    }
    function am3(i, x, w, j, c, n) {
        var xl = x & 16383, xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 16383;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 16383) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 268435455
        }
        return c
    }
    if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
        BigInteger.prototype.am = am2;
        dbits = 30
    } else if (j_lm && navigator.appName != "Netscape") {
        BigInteger.prototype.am = am1;
        dbits = 26
    } else {
        BigInteger.prototype.am = am3;
        dbits = 28
    }
    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = (1 << dbits) - 1;
    BigInteger.prototype.DV = 1 << dbits;
    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2, BI_FP);
    BigInteger.prototype.F1 = BI_FP - dbits;
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array;
    var rr, vv;
    rr = "0".charCodeAt(0);
    for (vv = 0; vv <= 9; ++vv)
        BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
    function int2char(n) {
        return BI_RM.charAt(n)
    }
    function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return c == null ? -1 : c
    }
    function bnpCopyTo(r) {
        for (var i = this.t - 1; i >= 0; --i)
            r[i] = this[i];
        r.t = this.t;
        r.s = this.s
    }
    function bnpFromInt(x) {
        this.t = 1;
        this.s = x < 0 ? -1 : 0;
        if (x > 0)
            this[0] = x;
        else if (x < -1)
            this[0] = x + DV;
        else
            this.t = 0
    }
    function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r
    }
    function bnpFromString(s, b) {
        var k;
        if (b == 16)
            k = 4;
        else if (b == 8)
            k = 3;
        else if (b == 256)
            k = 8;
        else if (b == 2)
            k = 1;
        else if (b == 32)
            k = 5;
        else if (b == 4)
            k = 2;
        else {
            this.fromRadix(s, b);
            return
        }
        this.t = 0;
        this.s = 0;
        var i = s.length, mi = false, sh = 0;
        while (--i >= 0) {
            var x = k == 8 ? s[i] & 255 : intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-")
                    mi = true;
                continue
            }
            mi = false;
            if (sh == 0)
                this[this.t++] = x;
            else if (sh + k > this.DB) {
                this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
                this[this.t++] = x >> this.DB - sh
            } else
                this[this.t - 1] |= x << sh;
            sh += k;
            if (sh >= this.DB)
                sh -= this.DB
        }
        if (k == 8 && (s[0] & 128) != 0) {
            this.s = -1;
            if (sh > 0)
                this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh
        }
        this.clamp();
        if (mi)
            BigInteger.ZERO.subTo(this, this)
    }
    function bnpClamp() {
        var c = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == c)
            --this.t
    }
    function bnToString(b) {
        if (this.s < 0)
            return "-" + this.negate().toString(b);
        var k;
        if (b == 16)
            k = 4;
        else if (b == 8)
            k = 3;
        else if (b == 2)
            k = 1;
        else if (b == 32)
            k = 5;
        else if (b == 4)
            k = 2;
        else
            return this.toRadix(b);
        var km = (1 << k) - 1, d, m = false, r = "", i = this.t;
        var p = this.DB - i * this.DB % k;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) > 0) {
                m = true;
                r = int2char(d)
            }
            while (i >= 0) {
                if (p < k) {
                    d = (this[i] & (1 << p) - 1) << k - p;
                    d |= this[--i] >> (p += this.DB - k)
                } else {
                    d = this[i] >> (p -= k) & km;
                    if (p <= 0) {
                        p += this.DB;
                        --i
                    }
                }
                if (d > 0)
                    m = true;
                if (m)
                    r += int2char(d)
            }
        }
        return m ? r : "0"
    }
    function bnNegate() {
        var r = nbi();
        BigInteger.ZERO.subTo(this, r);
        return r
    }
    function bnAbs() {
        return this.s < 0 ? this.negate() : this
    }
    function bnCompareTo(a) {
        var r = this.s - a.s;
        if (r != 0)
            return r;
        var i = this.t;
        r = i - a.t;
        if (r != 0)
            return r;
        while (--i >= 0)
            if ((r = this[i] - a[i]) != 0)
                return r;
        return 0
    }
    function nbits(x) {
        var r = 1, t;
        if ((t = x >>> 16) != 0) {
            x = t;
            r += 16
        }
        if ((t = x >> 8) != 0) {
            x = t;
            r += 8
        }
        if ((t = x >> 4) != 0) {
            x = t;
            r += 4
        }
        if ((t = x >> 2) != 0) {
            x = t;
            r += 2
        }
        if ((t = x >> 1) != 0) {
            x = t;
            r += 1
        }
        return r
    }
    function bnBitLength() {
        if (this.t <= 0)
            return 0;
        return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
    }
    function bnpDLShiftTo(n, r) {
        var i;
        for (i = this.t - 1; i >= 0; --i)
            r[i + n] = this[i];
        for (i = n - 1; i >= 0; --i)
            r[i] = 0;
        r.t = this.t + n;
        r.s = this.s
    }
    function bnpDRShiftTo(n, r) {
        for (var i = n; i < this.t; ++i)
            r[i - n] = this[i];
        r.t = Math.max(this.t - n, 0);
        r.s = this.s
    }
    function bnpLShiftTo(n, r) {
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << cbs) - 1;
        var ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i;
        for (i = this.t - 1; i >= 0; --i) {
            r[i + ds + 1] = this[i] >> cbs | c;
            c = (this[i] & bm) << bs
        }
        for (i = ds - 1; i >= 0; --i)
            r[i] = 0;
        r[ds] = c;
        r.t = this.t + ds + 1;
        r.s = this.s;
        r.clamp()
    }
    function bnpRShiftTo(n, r) {
        r.s = this.s;
        var ds = Math.floor(n / this.DB);
        if (ds >= this.t) {
            r.t = 0;
            return
        }
        var bs = n % this.DB;
        var cbs = this.DB - bs;
        var bm = (1 << bs) - 1;
        r[0] = this[ds] >> bs;
        for (var i = ds + 1; i < this.t; ++i) {
            r[i - ds - 1] |= (this[i] & bm) << cbs;
            r[i - ds] = this[i] >> bs
        }
        if (bs > 0)
            r[this.t - ds - 1] |= (this.s & bm) << cbs;
        r.t = this.t - ds;
        r.clamp()
    }
    function bnpSubTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] - a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        if (a.t < this.t) {
            c -= a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB
            }
            c += this.s
        } else {
            c += this.s;
            while (i < a.t) {
                c -= a[i];
                r[i++] = c & this.DM;
                c >>= this.DB
            }
            c -= a.s
        }
        r.s = c < 0 ? -1 : 0;
        if (c < -1)
            r[i++] = this.DV + c;
        else if (c > 0)
            r[i++] = c;
        r.t = i;
        r.clamp()
    }
    function bnpMultiplyTo(a, r) {
        var x = this.abs(), y = a.abs();
        var i = x.t;
        r.t = i + y.t;
        while (--i >= 0)
            r[i] = 0;
        for (i = 0; i < y.t; ++i)
            r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
        r.s = 0;
        r.clamp();
        if (this.s != a.s)
            BigInteger.ZERO.subTo(r, r)
    }
    function bnpSquareTo(r) {
        var x = this.abs();
        var i = r.t = 2 * x.t;
        while (--i >= 0)
            r[i] = 0;
        for (i = 0; i < x.t - 1; ++i) {
            var c = x.am(i, x[i], r, 2 * i, 0, 1);
            if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                r[i + x.t] -= x.DV;
                r[i + x.t + 1] = 1
            }
        }
        if (r.t > 0)
            r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
        r.s = 0;
        r.clamp()
    }
    function bnpDivRemTo(m, q, r) {
        var pm = m.abs();
        if (pm.t <= 0)
            return;
        var pt = this.abs();
        if (pt.t < pm.t) {
            if (q != null)
                q.fromInt(0);
            if (r != null)
                this.copyTo(r);
            return
        }
        if (r == null)
            r = nbi();
        var y = nbi(), ts = this.s, ms = m.s;
        var nsh = this.DB - nbits(pm[pm.t - 1]);
        if (nsh > 0) {
            pm.lShiftTo(nsh, y);
            pt.lShiftTo(nsh, r)
        } else {
            pm.copyTo(y);
            pt.copyTo(r)
        }
        var ys = y.t;
        var y0 = y[ys - 1];
        if (y0 == 0)
            return;
        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
        var d1 = this.FV / yt, d2 = (1 << this.F1) / yt, e = 1 << this.F2;
        var i = r.t, j = i - ys, t = q == null ? nbi() : q;
        y.dlShiftTo(j, t);
        if (r.compareTo(t) >= 0) {
            r[r.t++] = 1;
            r.subTo(t, r)
        }
        BigInteger.ONE.dlShiftTo(ys, t);
        t.subTo(y, y);
        while (y.t < ys)
            y[y.t++] = 0;
        while (--j >= 0) {
            var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
                y.dlShiftTo(j, t);
                r.subTo(t, r);
                while (r[i] < --qd)
                    r.subTo(t, r)
            }
        }
        if (q != null) {
            r.drShiftTo(ys, q);
            if (ts != ms)
                BigInteger.ZERO.subTo(q, q)
        }
        r.t = ys;
        r.clamp();
        if (nsh > 0)
            r.rShiftTo(nsh, r);
        if (ts < 0)
            BigInteger.ZERO.subTo(r, r)
    }
    function bnMod(a) {
        var r = nbi();
        this.abs().divRemTo(a, null, r);
        if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
            a.subTo(r, r);
        return r
    }
    function Classic(m) {
        this.m = m
    }
    function cConvert(x) {
        if (x.s < 0 || x.compareTo(this.m) >= 0)
            return x.mod(this.m);
        else
            return x
    }
    function cRevert(x) {
        return x
    }
    function cReduce(x) {
        x.divRemTo(this.m, null, x)
    }
    function cMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r)
    }
    function cSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r)
    }
    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;
    function bnpInvDigit() {
        if (this.t < 1)
            return 0;
        var x = this[0];
        if ((x & 1) == 0)
            return 0;
        var y = x & 3;
        y = y * (2 - (x & 15) * y) & 15;
        y = y * (2 - (x & 255) * y) & 255;
        y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
        y = y * (2 - x * y % this.DV) % this.DV;
        return y > 0 ? this.DV - y : -y
    }
    function Montgomery(m) {
        this.m = m;
        this.mp = m.invDigit();
        this.mpl = this.mp & 32767;
        this.mph = this.mp >> 15;
        this.um = (1 << m.DB - 15) - 1;
        this.mt2 = 2 * m.t
    }
    function montConvert(x) {
        var r = nbi();
        x.abs().dlShiftTo(this.m.t, r);
        r.divRemTo(this.m, null, r);
        if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0)
            this.m.subTo(r, r);
        return r
    }
    function montRevert(x) {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r
    }
    function montReduce(x) {
        while (x.t <= this.mt2)
            x[x.t++] = 0;
        for (var i = 0; i < this.m.t; ++i) {
            var j = x[i] & 32767;
            var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
            j = i + this.m.t;
            x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
            while (x[j] >= x.DV) {
                x[j] -= x.DV;
                x[++j]++
            }
        }
        x.clamp();
        x.drShiftTo(this.m.t, x);
        if (x.compareTo(this.m) >= 0)
            x.subTo(this.m, x)
    }
    function montSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r)
    }
    function montMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r)
    }
    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;
    function bnpIsEven() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0
    }
    function bnpExp(e, z) {
        if (e > 4294967295 || e < 1)
            return BigInteger.ONE;
        var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e) - 1;
        g.copyTo(r);
        while (--i >= 0) {
            z.sqrTo(r, r2);
            if ((e & 1 << i) > 0)
                z.mulTo(r2, g, r);
            else {
                var t = r;
                r = r2;
                r2 = t
            }
        }
        return z.revert(r)
    }
    function bnModPowInt(e, m) {
        var z;
        if (e < 256 || m.isEven())
            z = new Classic(m);
        else
            z = new Montgomery(m);
        return this.exp(e, z)
    }
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);
    function bnClone() {
        var r = nbi();
        this.copyTo(r);
        return r
    }
    function bnIntValue() {
        if (this.s < 0) {
            if (this.t == 1)
                return this[0] - this.DV;
            else if (this.t == 0)
                return -1
        } else if (this.t == 1)
            return this[0];
        else if (this.t == 0)
            return 0;
        return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
    }
    function bnByteValue() {
        return this.t == 0 ? this.s : this[0] << 24 >> 24
    }
    function bnShortValue() {
        return this.t == 0 ? this.s : this[0] << 16 >> 16
    }
    function bnpChunkSize(r) {
        return Math.floor(Math.LN2 * this.DB / Math.log(r))
    }
    function bnSigNum() {
        if (this.s < 0)
            return -1;
        else if (this.t <= 0 || this.t == 1 && this[0] <= 0)
            return 0;
        else
            return 1
    }
    function bnpToRadix(b) {
        if (b == null)
            b = 10;
        if (this.signum() == 0 || b < 2 || b > 36)
            return "0";
        var cs = this.chunkSize(b);
        var a = Math.pow(b, cs);
        var d = nbv(a), y = nbi(), z = nbi(), r = "";
        this.divRemTo(d, y, z);
        while (y.signum() > 0) {
            r = (a + z.intValue()).toString(b).substr(1) + r;
            y.divRemTo(d, y, z)
        }
        return z.intValue().toString(b) + r
    }
    function bnpFromRadix(s, b) {
        this.fromInt(0);
        if (b == null)
            b = 10;
        var cs = this.chunkSize(b);
        var d = Math.pow(b, cs), mi = false, j = 0, w = 0;
        for (var i = 0; i < s.length; ++i) {
            var x = intAt(s, i);
            if (x < 0) {
                if (s.charAt(i) == "-" && this.signum() == 0)
                    mi = true;
                continue
            }
            w = b * w + x;
            if (++j >= cs) {
                this.dMultiply(d);
                this.dAddOffset(w, 0);
                j = 0;
                w = 0
            }
        }
        if (j > 0) {
            this.dMultiply(Math.pow(b, j));
            this.dAddOffset(w, 0)
        }
        if (mi)
            BigInteger.ZERO.subTo(this, this)
    }
    function bnpFromNumber(a, b, c) {
        if ("number" == typeof b) {
            if (a < 2)
                this.fromInt(1);
            else {
                this.fromNumber(a, c);
                if (!this.testBit(a - 1))
                    this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
                if (this.isEven())
                    this.dAddOffset(1, 0);
                while (!this.isProbablePrime(b)) {
                    this.dAddOffset(2, 0);
                    if (this.bitLength() > a)
                        this.subTo(BigInteger.ONE.shiftLeft(a - 1), this)
                }
            }
        } else {
            var x = new Array, t = a & 7;
            x.length = (a >> 3) + 1;
            b.nextBytes(x);
            if (t > 0)
                x[0] &= (1 << t) - 1;
            else
                x[0] = 0;
            this.fromString(x, 256)
        }
    }
    function bnToByteArray() {
        var i = this.t, r = new Array;
        r[0] = this.s;
        var p = this.DB - i * this.DB % 8, d, k = 0;
        if (i-- > 0) {
            if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p)
                r[k++] = d | this.s << this.DB - p;
            while (i >= 0) {
                if (p < 8) {
                    d = (this[i] & (1 << p) - 1) << 8 - p;
                    d |= this[--i] >> (p += this.DB - 8)
                } else {
                    d = this[i] >> (p -= 8) & 255;
                    if (p <= 0) {
                        p += this.DB;
                        --i
                    }
                }
                if ((d & 128) != 0)
                    d |= -256;
                if (k == 0 && (this.s & 128) != (d & 128))
                    ++k;
                if (k > 0 || d != this.s)
                    r[k++] = d
            }
        }
        return r
    }
    function bnEquals(a) {
        return this.compareTo(a) == 0
    }
    function bnMin(a) {
        return this.compareTo(a) < 0 ? this : a
    }
    function bnMax(a) {
        return this.compareTo(a) > 0 ? this : a
    }
    function bnpBitwiseTo(a, op, r) {
        var i, f, m = Math.min(a.t, this.t);
        for (i = 0; i < m; ++i)
            r[i] = op(this[i], a[i]);
        if (a.t < this.t) {
            f = a.s & this.DM;
            for (i = m; i < this.t; ++i)
                r[i] = op(this[i], f);
            r.t = this.t
        } else {
            f = this.s & this.DM;
            for (i = m; i < a.t; ++i)
                r[i] = op(f, a[i]);
            r.t = a.t
        }
        r.s = op(this.s, a.s);
        r.clamp()
    }
    function op_and(x, y) {
        return x & y
    }
    function bnAnd(a) {
        var r = nbi();
        this.bitwiseTo(a, op_and, r);
        return r
    }
    function op_or(x, y) {
        return x | y
    }
    function bnOr(a) {
        var r = nbi();
        this.bitwiseTo(a, op_or, r);
        return r
    }
    function op_xor(x, y) {
        return x ^ y
    }
    function bnXor(a) {
        var r = nbi();
        this.bitwiseTo(a, op_xor, r);
        return r
    }
    function op_andnot(x, y) {
        return x & ~y
    }
    function bnAndNot(a) {
        var r = nbi();
        this.bitwiseTo(a, op_andnot, r);
        return r
    }
    function bnNot() {
        var r = nbi();
        for (var i = 0; i < this.t; ++i)
            r[i] = this.DM & ~this[i];
        r.t = this.t;
        r.s = ~this.s;
        return r
    }
    function bnShiftLeft(n) {
        var r = nbi();
        if (n < 0)
            this.rShiftTo(-n, r);
        else
            this.lShiftTo(n, r);
        return r
    }
    function bnShiftRight(n) {
        var r = nbi();
        if (n < 0)
            this.lShiftTo(-n, r);
        else
            this.rShiftTo(n, r);
        return r
    }
    function lbit(x) {
        if (x == 0)
            return -1;
        var r = 0;
        if ((x & 65535) == 0) {
            x >>= 16;
            r += 16
        }
        if ((x & 255) == 0) {
            x >>= 8;
            r += 8
        }
        if ((x & 15) == 0) {
            x >>= 4;
            r += 4
        }
        if ((x & 3) == 0) {
            x >>= 2;
            r += 2
        }
        if ((x & 1) == 0)
            ++r;
        return r
    }
    function bnGetLowestSetBit() {
        for (var i = 0; i < this.t; ++i)
            if (this[i] != 0)
                return i * this.DB + lbit(this[i]);
        if (this.s < 0)
            return this.t * this.DB;
        return -1
    }
    function cbit(x) {
        var r = 0;
        while (x != 0) {
            x &= x - 1;
            ++r
        }
        return r
    }
    function bnBitCount() {
        var r = 0, x = this.s & this.DM;
        for (var i = 0; i < this.t; ++i)
            r += cbit(this[i] ^ x);
        return r
    }
    function bnTestBit(n) {
        var j = Math.floor(n / this.DB);
        if (j >= this.t)
            return this.s != 0;
        return (this[j] & 1 << n % this.DB) != 0
    }
    function bnpChangeBit(n, op) {
        var r = BigInteger.ONE.shiftLeft(n);
        this.bitwiseTo(r, op, r);
        return r
    }
    function bnSetBit(n) {
        return this.changeBit(n, op_or)
    }
    function bnClearBit(n) {
        return this.changeBit(n, op_andnot)
    }
    function bnFlipBit(n) {
        return this.changeBit(n, op_xor)
    }
    function bnpAddTo(a, r) {
        var i = 0, c = 0, m = Math.min(a.t, this.t);
        while (i < m) {
            c += this[i] + a[i];
            r[i++] = c & this.DM;
            c >>= this.DB
        }
        if (a.t < this.t) {
            c += a.s;
            while (i < this.t) {
                c += this[i];
                r[i++] = c & this.DM;
                c >>= this.DB
            }
            c += this.s
        } else {
            c += this.s;
            while (i < a.t) {
                c += a[i];
                r[i++] = c & this.DM;
                c >>= this.DB
            }
            c += a.s
        }
        r.s = c < 0 ? -1 : 0;
        if (c > 0)
            r[i++] = c;
        else if (c < -1)
            r[i++] = this.DV + c;
        r.t = i;
        r.clamp()
    }
    function bnAdd(a) {
        var r = nbi();
        this.addTo(a, r);
        return r
    }
    function bnSubtract(a) {
        var r = nbi();
        this.subTo(a, r);
        return r
    }
    function bnMultiply(a) {
        var r = nbi();
        this.multiplyTo(a, r);
        return r
    }
    function bnDivide(a) {
        var r = nbi();
        this.divRemTo(a, r, null);
        return r
    }
    function bnRemainder(a) {
        var r = nbi();
        this.divRemTo(a, null, r);
        return r
    }
    function bnDivideAndRemainder(a) {
        var q = nbi(), r = nbi();
        this.divRemTo(a, q, r);
        return new Array(q, r)
    }
    function bnpDMultiply(n) {
        this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
        ++this.t;
        this.clamp()
    }
    function bnpDAddOffset(n, w) {
        while (this.t <= w)
            this[this.t++] = 0;
        this[w] += n;
        while (this[w] >= this.DV) {
            this[w] -= this.DV;
            if (++w >= this.t)
                this[this.t++] = 0;
            ++this[w]
        }
    }
    function NullExp() {
    }
    function nNop(x) {
        return x
    }
    function nMulTo(x, y, r) {
        x.multiplyTo(y, r)
    }
    function nSqrTo(x, r) {
        x.squareTo(r)
    }
    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;
    function bnPow(e) {
        return this.exp(e, new NullExp)
    }
    function bnpMultiplyLowerTo(a, n, r) {
        var i = Math.min(this.t + a.t, n);
        r.s = 0;
        r.t = i;
        while (i > 0)
            r[--i] = 0;
        var j;
        for (j = r.t - this.t; i < j; ++i)
            r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
        for (j = Math.min(a.t, n); i < j; ++i)
            this.am(0, a[i], r, i, 0, n - i);
        r.clamp()
    }
    function bnpMultiplyUpperTo(a, n, r) {
        --n;
        var i = r.t = this.t + a.t - n;
        r.s = 0;
        while (--i >= 0)
            r[i] = 0;
        for (i = Math.max(n - this.t, 0); i < a.t; ++i)
            r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
        r.clamp();
        r.drShiftTo(1, r)
    }
    function Barrett(m) {
        this.r2 = nbi();
        this.q3 = nbi();
        BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
        this.mu = this.r2.divide(m);
        this.m = m
    }
    function barrettConvert(x) {
        if (x.s < 0 || x.t > 2 * this.m.t)
            return x.mod(this.m);
        else if (x.compareTo(this.m) < 0)
            return x;
        else {
            var r = nbi();
            x.copyTo(r);
            this.reduce(r);
            return r
        }
    }
    function barrettRevert(x) {
        return x
    }
    function barrettReduce(x) {
        x.drShiftTo(this.m.t - 1, this.r2);
        if (x.t > this.m.t + 1) {
            x.t = this.m.t + 1;
            x.clamp()
        }
        this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
        this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
        while (x.compareTo(this.r2) < 0)
            x.dAddOffset(1, this.m.t + 1);
        x.subTo(this.r2, x);
        while (x.compareTo(this.m) >= 0)
            x.subTo(this.m, x)
    }
    function barrettSqrTo(x, r) {
        x.squareTo(r);
        this.reduce(r)
    }
    function barrettMulTo(x, y, r) {
        x.multiplyTo(y, r);
        this.reduce(r)
    }
    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;
    function bnModPow(e, m) {
        var i = e.bitLength(), k, r = nbv(1), z;
        if (i <= 0)
            return r;
        else if (i < 18)
            k = 1;
        else if (i < 48)
            k = 3;
        else if (i < 144)
            k = 4;
        else if (i < 768)
            k = 5;
        else
            k = 6;
        if (i < 8)
            z = new Classic(m);
        else if (m.isEven())
            z = new Barrett(m);
        else
            z = new Montgomery(m);
        var g = new Array, n = 3, k1 = k - 1, km = (1 << k) - 1;
        g[1] = z.convert(this);
        if (k > 1) {
            var g2 = nbi();
            z.sqrTo(g[1], g2);
            while (n <= km) {
                g[n] = nbi();
                z.mulTo(g2, g[n - 2], g[n]);
                n += 2
            }
        }
        var j = e.t - 1, w, is1 = true, r2 = nbi(), t;
        i = nbits(e[j]) - 1;
        while (j >= 0) {
            if (i >= k1)
                w = e[j] >> i - k1 & km;
            else {
                w = (e[j] & (1 << i + 1) - 1) << k1 - i;
                if (j > 0)
                    w |= e[j - 1] >> this.DB + i - k1
            }
            n = k;
            while ((w & 1) == 0) {
                w >>= 1;
                --n
            }
            if ((i -= n) < 0) {
                i += this.DB;
                --j
            }
            if (is1) {
                g[w].copyTo(r);
                is1 = false
            } else {
                while (n > 1) {
                    z.sqrTo(r, r2);
                    z.sqrTo(r2, r);
                    n -= 2
                }
                if (n > 0)
                    z.sqrTo(r, r2);
                else {
                    t = r;
                    r = r2;
                    r2 = t
                }
                z.mulTo(r2, g[w], r)
            }
            while (j >= 0 && (e[j] & 1 << i) == 0) {
                z.sqrTo(r, r2);
                t = r;
                r = r2;
                r2 = t;
                if (--i < 0) {
                    i = this.DB - 1;
                    --j
                }
            }
        }
        return z.revert(r)
    }
    function bnGCD(a) {
        var x = this.s < 0 ? this.negate() : this.clone();
        var y = a.s < 0 ? a.negate() : a.clone();
        if (x.compareTo(y) < 0) {
            var t = x;
            x = y;
            y = t
        }
        var i = x.getLowestSetBit(), g = y.getLowestSetBit();
        if (g < 0)
            return x;
        if (i < g)
            g = i;
        if (g > 0) {
            x.rShiftTo(g, x);
            y.rShiftTo(g, y)
        }
        while (x.signum() > 0) {
            if ((i = x.getLowestSetBit()) > 0)
                x.rShiftTo(i, x);
            if ((i = y.getLowestSetBit()) > 0)
                y.rShiftTo(i, y);
            if (x.compareTo(y) >= 0) {
                x.subTo(y, x);
                x.rShiftTo(1, x)
            } else {
                y.subTo(x, y);
                y.rShiftTo(1, y)
            }
        }
        if (g > 0)
            y.lShiftTo(g, y);
        return y
    }
    function bnpModInt(n) {
        if (n <= 0)
            return 0;
        var d = this.DV % n, r = this.s < 0 ? n - 1 : 0;
        if (this.t > 0)
            if (d == 0)
                r = this[0] % n;
            else
                for (var i = this.t - 1; i >= 0; --i)
                    r = (d * r + this[i]) % n;
        return r
    }
    function bnModInverse(m) {
        var ac = m.isEven();
        if (this.isEven() && ac || m.signum() == 0)
            return BigInteger.ZERO;
        var u = m.clone(), v = this.clone();
        var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
        while (u.signum() != 0) {
            while (u.isEven()) {
                u.rShiftTo(1, u);
                if (ac) {
                    if (!a.isEven() || !b.isEven()) {
                        a.addTo(this, a);
                        b.subTo(m, b)
                    }
                    a.rShiftTo(1, a)
                } else if (!b.isEven())
                    b.subTo(m, b);
                b.rShiftTo(1, b)
            }
            while (v.isEven()) {
                v.rShiftTo(1, v);
                if (ac) {
                    if (!c.isEven() || !d.isEven()) {
                        c.addTo(this, c);
                        d.subTo(m, d)
                    }
                    c.rShiftTo(1, c)
                } else if (!d.isEven())
                    d.subTo(m, d);
                d.rShiftTo(1, d)
            }
            if (u.compareTo(v) >= 0) {
                u.subTo(v, u);
                if (ac)
                    a.subTo(c, a);
                b.subTo(d, b)
            } else {
                v.subTo(u, v);
                if (ac)
                    c.subTo(a, c);
                d.subTo(b, d)
            }
        }
        if (v.compareTo(BigInteger.ONE) != 0)
            return BigInteger.ZERO;
        if (d.compareTo(m) >= 0)
            return d.subtract(m);
        if (d.signum() < 0)
            d.addTo(m, d);
        else
            return d;
        if (d.signum() < 0)
            return d.add(m);
        else
            return d
    }
    var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509];
    var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
    function bnIsProbablePrime(t) {
        var i, x = this.abs();
        if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
            for (i = 0; i < lowprimes.length; ++i)
                if (x[0] == lowprimes[i])
                    return true;
            return false
        }
        if (x.isEven())
            return false;
        i = 1;
        while (i < lowprimes.length) {
            var m = lowprimes[i], j = i + 1;
            while (j < lowprimes.length && m < lplim)
                m *= lowprimes[j++];
            m = x.modInt(m);
            while (i < j)
                if (m % lowprimes[i++] == 0)
                    return false
        }
        return x.millerRabin(t)
    }
    function bnpMillerRabin(t) {
        var n1 = this.subtract(BigInteger.ONE);
        var k = n1.getLowestSetBit();
        if (k <= 0)
            return false;
        var r = n1.shiftRight(k);
        t = t + 1 >> 1;
        if (t > lowprimes.length)
            t = lowprimes.length;
        var a = nbi();
        for (var i = 0; i < t; ++i) {
            a.fromInt(lowprimes[i]);
            var y = a.modPow(r, this);
            if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
                var j = 1;
                while (j++ < k && y.compareTo(n1) != 0) {
                    y = y.modPowInt(2, this);
                    if (y.compareTo(BigInteger.ONE) == 0)
                        return false
                }
                if (y.compareTo(n1) != 0)
                    return false
            }
        }
        return true
    }
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    function sha1(msg) {
        var K = [1518500249, 1859775393, 2400959708, 3395469782];
        msg += String.fromCharCode(128);
        var l = Math.ceil(msg.length / 4) + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);
        for (var i = 0; i < N; i++) {
            M[i] = new Array(16);
            for (var j = 0; j < 16; j++)
                M[i][j] = msg.charCodeAt(i * 64 + j * 4) << 24 | msg.charCodeAt(i * 64 + j * 4 + 1) << 16 | msg.charCodeAt(i * 64 + j * 4 + 2) << 8 | msg.charCodeAt(i * 64 + j * 4 + 3)
        }
        M[N - 1][14] = (msg.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (msg.length - 1) * 8 & 4294967295;
        var H0 = 1732584193;
        var H1 = 4023233417;
        var H2 = 2562383102;
        var H3 = 271733878;
        var H4 = 3285377520;
        var W = new Array(80);
        var a, b, c, d, e;
        for (var i = 0; i < N; i++) {
            for (var t = 0; t < 16; t++)
                W[t] = M[i][t];
            for (var t = 16; t < 80; t++) {
                W[t] = W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16];
                W[t] = W[t] << 1 | W[t] >>> 31
            }
            a = H0;
            b = H1;
            c = H2;
            d = H3;
            e = H4;
            for (var t = 0; t < 80; t++) {
                var s = Math.floor(t / 20);
                var T = (a << 5 | a >>> 27) + e + K[s] + W[t];
                switch (s) {
                    case 0:
                        T += b & c ^ ~b & d;
                        break;
                    case 1:
                        T += b ^ c ^ d;
                        break;
                    case 2:
                        T += b & c ^ b & d ^ c & d;
                        break;
                    case 3:
                        T += b ^ c ^ d;
                        break
                }
                e = d;
                d = c;
                c = b << 30 | b >>> 2;
                b = a;
                a = T
            }
            H0 = H0 + a & 4294967295;
            H1 = H1 + b & 4294967295;
            H2 = H2 + c & 4294967295;
            H3 = H3 + d & 4294967295;
            H4 = H4 + e & 4294967295
        }
        var hex = "";
        for (var i = 7; i >= 0; i--) {
            var v = H0 >>> i * 4 & 15;
            hex += v.toString(16)
        }
        for (var i = 7; i >= 0; i--) {
            var v = H1 >>> i * 4 & 15;
            hex += v.toString(16)
        }
        for (var i = 7; i >= 0; i--) {
            var v = H2 >>> i * 4 & 15;
            hex += v.toString(16)
        }
        for (var i = 7; i >= 0; i--) {
            var v = H3 >>> i * 4 & 15;
            hex += v.toString(16)
        }
        for (var i = 7; i >= 0; i--) {
            var v = H4 >>> i * 4 & 15;
            hex += v.toString(16)
        }
        return hex
    }
    var RSAPublicKey = function($modulus, $encryptionExponent) {
        this.modulus = new BigInteger(Hex.encode($modulus), 16);
        this.encryptionExponent = new BigInteger(Hex.encode($encryptionExponent), 16)
    };
    var UTF8 = {encode: function($input) {
        $input = $input.replace(/\r\n/g, "\n");
        var $output = "";
        for (var $n = 0; $n < $input.length; $n++) {
            var $c = $input.charCodeAt($n);
            if ($c < 128) {
                $output += String.fromCharCode($c)
            } else if ($c > 127 && $c < 2048) {
                $output += String.fromCharCode($c >> 6 | 192);
                $output += String.fromCharCode($c & 63 | 128)
            } else {
                $output += String.fromCharCode($c >> 12 | 224);
                $output += String.fromCharCode($c >> 6 & 63 | 128);
                $output += String.fromCharCode($c & 63 | 128)
            }
        }
        return $output
    },decode: function($input) {
        var $output = "";
        var $i = 0;
        var $c = $c1 = $c2 = 0;
        while ($i < $input.length) {
            $c = $input.charCodeAt($i);
            if ($c < 128) {
                $output += String.fromCharCode($c);
                $i++
            } else if ($c > 191 && $c < 224) {
                $c2 = $input.charCodeAt($i + 1);
                $output += String.fromCharCode(($c & 31) << 6 | $c2 & 63);
                $i += 2
            } else {
                $c2 = $input.charCodeAt($i + 1);
                $c3 = $input.charCodeAt($i + 2);
                $output += String.fromCharCode(($c & 15) << 12 | ($c2 & 63) << 6 | $c3 & 63);
                $i += 3
            }
        }
        return $output
    }};
    var Base64 = {base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode: function($input) {
        if (!$input) {
            return false
        }
        var $output = "";
        var $chr1, $chr2, $chr3;
        var $enc1, $enc2, $enc3, $enc4;
        var $i = 0;
        do {
            $chr1 = $input.charCodeAt($i++);
            $chr2 = $input.charCodeAt($i++);
            $chr3 = $input.charCodeAt($i++);
            $enc1 = $chr1 >> 2;
            $enc2 = ($chr1 & 3) << 4 | $chr2 >> 4;
            $enc3 = ($chr2 & 15) << 2 | $chr3 >> 6;
            $enc4 = $chr3 & 63;
            if (isNaN($chr2))
                $enc3 = $enc4 = 64;
            else if (isNaN($chr3))
                $enc4 = 64;
            $output += this.base64.charAt($enc1) + this.base64.charAt($enc2) + this.base64.charAt($enc3) + this.base64.charAt($enc4)
        } while ($i < $input.length);
        return $output
    },decode: function($input) {
        if (!$input)
            return false;
        $input = $input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var $output = "";
        var $enc1, $enc2, $enc3, $enc4;
        var $i = 0;
        do {
            $enc1 = this.base64.indexOf($input.charAt($i++));
            $enc2 = this.base64.indexOf($input.charAt($i++));
            $enc3 = this.base64.indexOf($input.charAt($i++));
            $enc4 = this.base64.indexOf($input.charAt($i++));
            $output += String.fromCharCode($enc1 << 2 | $enc2 >> 4);
            if ($enc3 != 64)
                $output += String.fromCharCode(($enc2 & 15) << 4 | $enc3 >> 2);
            if ($enc4 != 64)
                $output += String.fromCharCode(($enc3 & 3) << 6 | $enc4)
        } while ($i < $input.length);
        return $output
    }};
    var Hex = {hex: "0123456789abcdef",encode: function($input) {
        if (!$input)
            return false;
        var $output = "";
        var $k;
        var $i = 0;
        do {
            $k = $input.charCodeAt($i++);
            $output += this.hex.charAt($k >> 4 & 15) + this.hex.charAt($k & 15)
        } while ($i < $input.length);
        return $output
    },decode: function($input) {
        if (!$input)
            return false;
        $input = $input.replace(/[^0-9abcdef]/g, "");
        var $output = "";
        var $i = 0;
        do {
            $output += String.fromCharCode(this.hex.indexOf($input.charAt($i++)) << 4 & 240 | this.hex.indexOf($input.charAt($i++)) & 15)
        } while ($i < $input.length);
        return $output
    }};
    var ASN1Data = function($data) {
        this.error = false;
        this.parse = function($data) {
            if (!$data) {
                this.error = true;
                return null
            }
            var $result = [];
            while ($data.length > 0) {
                var $tag = $data.charCodeAt(0);
                $data = $data.substr(1);
                var $length = 0;
                if (($tag & 31) == 5)
                    $data = $data.substr(1);
                else {
                    if ($data.charCodeAt(0) & 128) {
                        var $lengthSize = $data.charCodeAt(0) & 127;
                        $data = $data.substr(1);
                        if ($lengthSize > 0)
                            $length = $data.charCodeAt(0);
                        if ($lengthSize > 1)
                            $length = $length << 8 | $data.charCodeAt(1);
                        if ($lengthSize > 2) {
                            this.error = true;
                            return null
                        }
                        $data = $data.substr($lengthSize)
                    } else {
                        $length = $data.charCodeAt(0);
                        $data = $data.substr(1)
                    }
                }
                var $value = "";
                if ($length) {
                    if ($length > $data.length) {
                        this.error = true;
                        return null
                    }
                    $value = $data.substr(0, $length);
                    $data = $data.substr($length)
                }
                if ($tag & 32)
                    $result.push(this.parse($value));
                else
                    $result.push(this.value($tag & 128 ? 4 : $tag & 31, $value))
            }
            return $result
        };
        this.value = function($tag, $data) {
            if ($tag == 1)
                return $data ? true : false;
            else if ($tag == 2)
                return $data;
            else if ($tag == 3)
                return this.parse($data.substr(1));
            else if ($tag == 5)
                return null;
            else if ($tag == 6) {
                var $res = [];
                var $d0 = $data.charCodeAt(0);
                $res.push(Math.floor($d0 / 40));
                $res.push($d0 - $res[0] * 40);
                var $stack = [];
                var $powNum = 0;
                var $i;
                for ($i = 1; $i < $data.length; $i++) {
                    var $token = $data.charCodeAt($i);
                    $stack.push($token & 127);
                    if ($token & 128)
                        $powNum++;
                    else {
                        var $j;
                        var $sum = 0;
                        for ($j = 0; $j < $stack.length; $j++)
                            $sum += $stack[$j] * Math.pow(128, $powNum--);
                        $res.push($sum);
                        $powNum = 0;
                        $stack = []
                    }
                }
                return $res.join(".")
            }
            return null
        };
        this.data = this.parse($data)
    };
    var RSA = {getPublicKey: function($pem) {
        if ($pem.length < 50)
            return false;
        if ($pem.substr(0, 26) != "-----BEGIN PUBLIC KEY-----")
            return false;
        $pem = $pem.substr(26);
        if ($pem.substr($pem.length - 24) != "-----END PUBLIC KEY-----")
            return false;
        $pem = $pem.substr(0, $pem.length - 24);
        $pem = new ASN1Data(Base64.decode($pem));
        if ($pem.error)
            return false;
        $pem = $pem.data;
        if ($pem[0][0][0] == "1.2.840.113549.1.1.1")
            return new RSAPublicKey($pem[0][1][0][0], $pem[0][1][0][1]);
        return false
    },encrypt: function($data, $pubkey) {
        if (!$pubkey)
            return false;
        var bytes = $pubkey.modulus.bitLength() + 7 >> 3;
        $data = this.pkcs1pad2($data, bytes);
        if (!$data)
            return false;
        $data = $data.modPowInt($pubkey.encryptionExponent, $pubkey.modulus);
        if (!$data)
            return false;
        $data = $data.toString(16);
        while ($data.length < bytes * 2)
            $data = "0" + $data;
        return Base64.encode(Hex.decode($data))
    },pkcs1pad2: function($data, $keysize) {
        if ($keysize < $data.length + 11)
            return null;
        var $buffer = [];
        var $i = $data.length - 1;
        while ($i >= 0 && $keysize > 0)
            $buffer[--$keysize] = $data.charCodeAt($i--);
        $buffer[--$keysize] = 0;
        while ($keysize > 2)
            $buffer[--$keysize] = Math.floor(Math.random() * 254) + 1;
        $buffer[--$keysize] = 2;
        $buffer[--$keysize] = 0;
        return new BigInteger($buffer)
    }};
    var bYP = "-----BEGIN PUBLIC KEY-----MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKv+HA7ffW9BAM34Lx6KHlLp2YB9MNy48nPG3D3A23y2w5zUqkDty8FibnshyLc9BonyLFDWZHbRMEvfU38s0nMCAwEAAQ==-----END PUBLIC KEY-----";
    var mo = RSA.getPublicKey(bYP);
    p.Cj = C();
    rZ = p.Cj.bi(P(N.ut).hx);
    rZ.Ly = function(cG) {
        var bu = this.et("ekey_" + cG);
        if (bu != null) {
            this.bh("checkExistsSucc", cG, bu);
            return
        }
        J.br(location.dwr, "URSBean", "checkUrsName", cG, this.bpQ.A(this, cG))
    };
    rZ.bpQ = function(cG, bu) {
        this.gp("ekey_" + cG, bu);
        this.bh("checkExistsSucc", cG, bu)
    };
    rZ.bdl = function(cG, dZ, lC) {
        var pwd = RSA.encrypt(dZ, mo);
        J.br(location.dwr, "URSBean", "regNewURSPassport", false, cG, pwd, lC, this.bdo.A(this))
    };
    rZ.bpP = function(cG, dZ, lC) {
        var pwd = RSA.encrypt(dZ, mo);
        J.br(location.dwr, "URSBean", "regNewURSPassport4Connect", false, cG, pwd, lC, this.bdo.A(this))
    };
    rZ.cgs = function(cG, dZ, lC) {
        var pwd = RSA.encrypt(dZ, mo);
        J.br(location.dwr, "URSBean", "regNewURSPassport4bindEmail", false, cG, pwd, lC, this.bdo.A(this))
    };
    rZ.bdo = function(bu) {
        this.bh("registSucc", bu)
    };
    rZ.bpO = function(cG) {
        J.br(location.dwr, "URSBean", "sendActiveMail", false, cG, this.bh.A(this, "resendmailsucc"))
    };
    rZ.cgr = function(cG) {
        J.br(location.dwr, "URSBean", "sendActiveMail4bindEmail", false, cG, this.bh.A(this, "resendmailsucc"))
    };
    rZ.bpN = function(nC, Lx) {
        J.br(location.dwr, "URSBean", "updateConnectLoginInfoInSession", false, nC, Lx, this.bh.A(this, "updateconnectlogininfoinsessionsucc"))
    }
})();
(function() {
    var p = P("loft.w"), bpM;
    p.ET = C();
    bpM = p.ET.prototype;
    var HT = ["123456", "123456789", "12345678", "123123", "5201314", "1234567", "7758521", "654321", "1314520", "123321", "1234567890", "147258369", "123654", "5211314", "woaini", "1230123", "987654321", "147258", "123123123", "7758258", "520520", "789456", "456789", "159357", "112233", "1314521", "456123", "110110", "521521", "zxcvbnm", "789456123", "0123456789", "0123456", "123465", "159753", "qwertyuiop", "987654", "115415", "1234560", "123000", "123789", "100200", "963852741", "121212", "111222", "123654789", "12301230", "456456", "741852963", "asdasd", "asdfghjkl", "369258", "863786", "258369", "8718693", "666888", "5845201314", "741852", "168168", "iloveyou", "852963", "4655321", "102030", "147852369", "321321"];
    var Lw = function(fv) {
        var nh = fv.charAt(0), l = fv.length, i = 1, Cv;
        for (; i < l; i++) {
            Cv = fv.charAt(i);
            if (Cv !== nh)
                return false
        }
        return true
    };
    p.ET.bdB = function(dZ, eq) {
        var HX;
        if (dZ.length < 6 || dZ.length > 16) {
            return "请输入6到16个字符的密码"
        }
        HX = eq.split("@")[0] || "";
        if (U.fO(HT, dZ) != -1 || eq == dZ || HX == dZ || Lw(dZ)) {
            return "密码太简单，请尝试数字和字母的组合"
        }
        return ""
    }
})();
(function() {
    var p = P("loft.w"), jj, mY, bhM = /ad3/.test(location.href) ? "<br/>" : "", Dr = "该邮箱已注册网易通行证，" + bhM + '请 <a href="http://www.lofter.com/" style="color:#308db4;text-decoration:underline;" onclick="loft.g.directLogin(event);">直接登录</a>', Ds = [];
    var HT = ["123456", "123456789", "12345678", "123123", "5201314", "1234567", "7758521", "654321", "1314520", "123321", "1234567890", "147258369", "123654", "5211314", "woaini", "1230123", "987654321", "147258", "123123123", "7758258", "520520", "789456", "456789", "159357", "112233", "1314521", "456123", "110110", "521521", "zxcvbnm", "789456123", "0123456789", "0123456", "123465", "159753", "qwertyuiop", "987654", "115415", "1234560", "123000", "123789", "100200", "963852741", "121212", "111222", "123654789", "12301230", "456456", "741852963", "asdasd", "asdfghjkl", "369258", "863786", "258369", "8718693", "666888", "5845201314", "741852", "168168", "iloveyou", "852963", "4655321", "102030", "147852369", "321321"];
    p.Ts = C();
    jj = p.Ts.prototype;
    jj.bq = function(I) {
        this.mT = I.regform;
        this.bhL = I.valcodesrc || "http://www.lofter.com/cap/captcha.jpgx?h=38&w=97&r=";
        this.dK();
        this.my = new p.IN(this.hh, this.bhK, this.Lm, {onfocus: this.bgt.A(this, true),onblur: this.bgt.A(this, false)});
        this.iu = new p.IN(this.dk, this.nO, this.Lj, {onfocus: this.CQ.A(this, true),onblur: this.CQ.A(this, false)});
        this.kd = new p.IN(this.HN, this.bhG, this.bgz, {onfocus: this.bgA.A(this, true),onblur: this.bgA.A(this, false)});
        this.Dy = new loft.d.Cj({registSucc: this.CD.A(this),checkExistsSucc: this.CB.A(this)});
        var g = P("loft.g");
        g.directLogin = this.bhD.A(this)
    };
    jj.bhD = function(bHl) {
        V.bb(bHl);
        if (!!this.bgD)
            U.ru("LAST_LOGIN_EMAIL", this.bgD);
        location.href = "http://www.lofter.com"
    };
    jj.fd = function(bHl) {
        V.bb(bHl);
        if (!!this.bhC)
            return;
        var eq = this.my.cF(), dZ = this.iu.cF(), lC = this.kd.cF();
        this.DO = true;
        if (!eq) {
            this.my.qL("请输入常用邮箱");
            this.hh.focus()
        } else if (!dZ) {
            this.iu.qL("请输入密码");
            this.dk.focus()
        } else if (!lC) {
            this.kd.qL("验证码为空");
            this.HN.focus()
        } else {
            var X;
            if (this.my.TI()) {
                this.my.TJ()
            } else if (this.iu.TI()) {
                this.iu.TJ()
            } else if (this.kd.TI()) {
                this.kd.TJ()
            } else {
                this.Dy.bdl(eq, dZ, lC)
            }
        }
        this.DO = false;
        return false
    };
    jj.CD = function(bu) {
        if (bu > 0) {
            this.iu.sd("");
            this.my.sd("");
            this.kd.sd("");
            location.href = location.hosturl + "/regsucc"
        } else {
            this.GR();
            if (bu == -1e4) {
                this.kd.qL("验证码错误")
            } else {
                var es = "注册失败，未知错误";
                switch (bu) {
                    case -401:
                        es = "注册失败，参数错误";
                        break;
                    case -40101:
                        es = "注册失败，用户名长度过长";
                        break;
                    case -421:
                        es = "注册失败，用户已经存在";
                        break;
                    case -503:
                        es = "注册失败，服务器正在维护";
                        break
                }
                E.bd(es)
            }
        }
    };
    jj.CB = function(cG, bu) {
        if (bu > 0) {
            Ds.unshift(cG);
            this.bgD = cG;
            this.my.qL(Dr)
        } else {
            var iV = cG.split("@");
            var gG = iV[1];
            if (gG == "163.com" || gG == "126.com" || gG == "yeah.net" || gG == "188.com" || gG == "vip.163.com" || gG == "popo.163.com" || gG == "vip.126.com") {
                this.my.qL("该邮箱不存在，请用常用邮箱注册");
                return
            }
        }
    };
    jj.TL = function(dZ) {
        var eq = this.my.cF() || "", bJB = loft.w.ET.bdB(dZ, eq);
        if (!!bJB) {
            this.iu.qL(bJB);
            return false
        } else {
            this.iu.TM();
            return true
        }
    };
    jj.TN = function() {
        cG = this.my.cF() || "";
        if (!cG)
            return;
        var iV = cG.split("@");
        if (iV.length != 2 || !iV[0] || !iV[1] || !/^[0-9a-zA-Z\._-]+@[0-9a-zA-Z\._-]+\.[0-9a-zA-Z\._-]+$/.test(cG)) {
            this.my.qL("请输入正确的邮箱");
            return
        }
        if (U.fO(Ds, cG) != -1) {
            this.my.qL(Dr);
            return
        }
        this.my.TM();
        this.Dy.Ly(cG)
    };
    jj.bgt = function(en, bHl) {
        if (!en) {
            this.TN()
        }
        this.bhC = !!en
    };
    jj.CQ = function(en, bHl) {
        var dZ = this.iu.cF();
        if (!en && !!dZ) {
            this.TL(dZ)
        }
        if (!!en) {
            if (!this.TO.src)
                this.GR();
            this.bgz.parentNode.parentNode.style.display = ""
        }
    };
    jj.bgA = function(en, bHl) {
    };
    jj.dK = function() {
        var bHk = E.bj(this.mT, "ftag"), i = 0;
        this.TP = bHk[i++];
        this.hh = bHk[i++];
        this.bhK = bHk[i++];
        this.Lm = bHk[i++];
        this.dk = bHk[i++];
        this.nO = bHk[i++];
        this.Lj = bHk[i++];
        this.HN = bHk[i++];
        this.bhG = bHk[i++];
        this.TO = bHk[i++];
        this.bgz = bHk[i++];
        V.bHn(this.TO.parentNode, "click", this.GR.A(this));
        V.bHn(this.mT, "submit", this.fd.A(this))
    };
    jj.bE = function() {
        this.GR();
        this.TP.style.display = "";
        this.hh.value = this.dk.value = this.HN.value = "";
        this.hh.focus()
    };
    jj.GR = function(bHl) {
        V.bb(bHl);
        this.TO.src = this.bhL + U.cA(6)
    };
    jj.bHi = function() {
        this.TP.style.display = "none"
    };
    jj.TR = function() {
        return this.TP.style.display == ""
    };
    jj.gc = function() {
        if (!this.hh.value) {
            this.hh.focus()
        } else if (!this.dk.value) {
            this.dk.focus()
        } else {
            this.HN.focus()
        }
    };
    p.IN = C();
    mY = p.IN.bi(P(N.ut).gY);
    mY.bq = function(cx, cE, nR, I) {
        this.bHq();
        this.cg = cx;
        this.bgR = cE;
        this.tC = nR;
        V.bHn(cx, "input", this.ha.A(this));
        V.bHn(cE, "click", this.bhA.A(this));
        V.bHn(cx, "focus", this.dX.A(this));
        V.bHn(cx, "blur", this.Mi.A(this));
        this.bHn("focus", I.onfocus || F);
        this.bHn("blur", I.onblur || F)
    };
    mY.dX = function(bHl) {
        this.bh("focus")
    };
    mY.Mi = function(bHl) {
        this.bh("blur")
    };
    mY.qL = function(nR) {
        this.tC.parentNode.style.display = !!nR ? "" : "none";
        this.tC.innerHTML = nR
    };
    mY.TM = function() {
        this.tC.parentNode.style.display = "none"
    };
    mY.TI = function() {
        return this.tC.parentNode.style.display == ""
    };
    mY.TJ = function() {
        this.tC.parentNode.style.visibility = "hidden";
        window.setTimeout(function() {
            this.tC.parentNode.style.visibility = "visible"
        }.A(this), 300)
    };
    mY.bhA = function(bHl) {
        V.bb(bHl);
        this.cg.focus()
    };
    mY.sd = function(bg) {
        this.cg.value = bg;
        this.bgR.style.display = !bg ? "" : "none"
    };
    mY.cF = function() {
        return this.cg.value
    };
    mY.ha = function(bHl) {
        this.bgR.style.display = !this.cg.value ? "" : "none";
        this.TM()
    }
})();
(function() {
    var p = P("loft.m.dashboard"), PJ;
    var mA = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    p.Zz = C();
    PJ = p.Zz.bi(P(N.ut).gY);
    PJ.bq = function() {
        this.bHq();
        this.dK();
        this.mT = new loft.w.Ts({regform: this.ek,valcodesrc: "http://www.lofter.com/cap/captcha.jpgx?w=60&h=32&r="});
        this.mT.bE()
    };
    PJ.dK = function() {
        var lt = E.be("regbox");
        this.ek = E.be("regboxform");
        if (!B.dh) {
            V.bHn(window, "scroll", function() {
                var kj = mA();
                var Zx = kj > 97;
                lt.style.position = Zx ? "fixed" : "";
                lt.style.top = Zx ? "15px" : "0px"
            })
        }
    }
})();
(function() {
    var p = P("loft.w.suggest"), csk, crE, crX, eR, ML = "skey_";
    p.csV = C();
    csk = p.csV.bi(P(N.ut).hx);
    csk.brm = function(bx, dx) {
        if (bx == "" || bx == undefined)
            return;
        var bS = this.et(ML + bx);
        if (!!bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null : bS);
            return
        }
        J.br(location.dwr, "MentionBean", "search", bx, 30, this.hm.A(this, bx))
    };
    csk.ctF = function() {
        var bx = "";
        var bS = this.et(ML + bx);
        if (!!bS) {
            this.bh("onsearchsucc", bx, bS == "empty" ? null : bS);
            return
        }
        J.br(location.dwr, "MentionBean", "getLastMentions", this.hm.A(this, bx))
    };
    csk.hm = function(bx, bS) {
        if (!!bS) {
            this.gp(ML + bx, bS)
        } else {
            this.gp(ML + bx, "empty")
        }
        this.bh("onsearchsucc", bx, bS)
    };
    csk.cK = function() {
        this.iJ("onsearchsucc")
    };
    p.csO = C();
    crE = p.csO.bi(P(N.ui).gB, true);
    crE.cM = function() {
        return ""
    };
    crE.cU = function() {
        return "m-ssch2"
    };
    crE.bz = function(I) {
        I.option = p.csN;
        this.crW = I.itemNum || 6;
        this.ctL = I.scrollPos || 2;
        this.csC = I.iframeId;
        this.ctE = I.canBlurHide;
        if (!!this.csC) {
            V.bHn(document.getElementById(this.csC).contentDocument, "click", this.csB)
        }
        p.csO.bw.bz.call(this, I)
    };
    crE.xW = function(bn, Q) {
        if (!bn || !bn.length) {
            this.bIM.style.height = 0;
            this.bIM.style.visibility = "hidden";
            return
        }
        this.cT = this.SJ.bG(bn, this.fS, this.cP);
        for (var i = 0; i < this.cT.length; i++) {
            this.cT[i].Y.className = "atitm"
        }
        if (!!this.cT[Q]) {
            this.bC = 0;
            this.cT[this.bC].gg(true)
        }
        this.bIM.style.height = (this.cT.length > this.crW ? this.crW : this.cT.length) * 30 + "px";
        this.bsU = {scrollNode: this.bIM,scrollList: this.fS,vSlideWayNode: this.bIk,hSlideWayNode: this.bIm,vSlideBtn: this.bIn,hSlideBtn: this.bLu,minBtnLength: this.crW,scrollType: "v",hasAnimateMove: true};
        if (!this.bMd) {
            this.bMd = loft.w.bNU.bG(this.bsU)
        } else {
            if (this.cT.length <= this.crW) {
                this.fS.style.minHeight = this.cT.length * 30 + "px"
            }
            this.bMd.bHu(this.bsU)
        }
        this.bIM.style.visibility = "visible";
        this.fS.style.visibility = "visible"
    };
    crE.cc = function() {
        this.Y = E.be("atinput");
        var bHk = E.bj(this.Y, "xtag"), i = 0;
        this.csM = bHk[i++];
        this.bU = bHk[i++];
        this.bIM = bHk[i++];
        this.fS = bHk[i++];
        this.bIk = bHk[i++];
        this.bIn = bHk[i++];
        this.bIm = bHk[i++];
        this.bLu = bHk[i++];
        this.bIV = false;
        this.csB = this.ctD.A(this);
        this.ctC = this.mW.A(this);
        V.bHn(this.Y, "click", V.bb.A(V));
        V.bHn(this.bU, "click", V.bb.A(V));
        V.bHn(document, "click", this.csB);
        V.bHn(this.csM, "click", function(bHl) {
            V.bb(bHl);
            this.bU.focus()
        }.A(this));
        V.bHn(this.bU, "input", this.hu.A(this));
        V.bHn(this.bU, "focus", this.dX.A(this, true));
        V.bHn(this.bU, "blur", this.dX.A(this, false));
        V.bHn(this.bU, "keydown", this.ctC);
        if (!!B.dh)
            V.bHn(this.bU, "keypress", this.bPi.A(this));
        if (B.qi) {
            V.bHn(this.Y, "DOMMouseScroll", this.but.A(this))
        } else {
            V.bHn(this.Y, "mousewheel", this.but.A(this))
        }
        this.csX = true
    };
    crE.but = function(bHl) {
        if (!bHl || this.bIk.style.display === "none")
            return;
        V.bb(bHl);
        var bIW;
        var bNN = 1;
        if (!!bHl.wheelDelta && !!this.bMd) {
            if (bHl.wheelDelta > 0) {
                bIW = {deltaTop: -bNN}
            } else {
                bIW = {deltaTop: bNN}
            }
        } else if (!!bHl.detail) {
            if (bHl.detail > 0) {
                bIW = {deltaTop: bNN}
            } else {
                bIW = {deltaTop: -bNN}
            }
        }
        if (!!bIW) {
            this.bMd.cao(bIW)
        }
    };
    crE.ctD = function(bHl) {
        if (this.Y.style.visibility === "hidden")
            return;
        V.bb(bHl);
        this.csj();
        this.bh("onselect", "atbodyclick")
    };
    crE.dX = function(en, bHl) {
        if (!!en) {
            this.bIV = true;
            this.hu()
        } else {
            this.bIV = false;
            if (!!this.ctE) {
                window.setTimeout(function(bHl) {
                    if (!!this.csX) {
                        this.csj();
                        this.bh("onselect", "atbodyclick")
                    }
                }.A(this), 300)
            }
        }
    };
    crE.xS = function() {
        this.lN = false;
        V.iJ(document, "click", this.csB);
        if (!!this.csC) {
            V.iJ(document.getElementById(this.csC).contentDocument, "click", this.csB)
        }
        V.bLb(this.bU)
    };
    var Oq = [38, 40, 13, 27, 8];
    crE.mW = function(bHl) {
        if (this.Y.style.visibility !== "visible")
            return;
        var X = V.be(bHl);
        if (X === this.bU) {
            var rB = bHl && (bHl.which || bHl.keyCode), Q = U.fO(Oq, rB);
            if (Q == -1) {
                return
            }
            switch (Q) {
                case 0:
                    if (!!this.bIV && this.fS.style.visibility === "visible") {
                        V.bb(bHl);
                        this.pz(-1, bHl)
                    }
                    break;
                case 1:
                    if (!!this.bIV && this.fS.style.visibility === "visible") {
                        V.bb(bHl);
                        this.pz(1, bHl)
                    }
                    break;
                case 2:
                    if (!!this.bIV && this.fS.style.visibility === "visible") {
                        V.bb(bHl);
                        this.csL = true;
                        this.GQ(bHl)
                    }
                    break;
                case 3:
                    if (!!this.bIV) {
                        V.bb(bHl);
                        this.csj();
                        this.bh("onselect", "atbodyclick")
                    }
                    break;
                case 4:
                    if (!!this.bIV && U.bA(this.bU.value) === "") {
                        V.bb(bHl);
                        this.csj();
                        this.bh("onselect", "atbodyclick")
                    }
                    break
            }
        }
    };
    crE.bPi = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode);
        if (rB == 13 && !!this.bIV) {
            V.bb(bHl);
            this.csL = true;
            this.GQ(bHl)
        }
        if (rB == 27 && !!this.bIV) {
            V.bb(bHl);
            this.csj();
            this.bh("onselect", "atbodyclick")
        }
    };
    crE.hu = function() {
        var bg = U.bA(this.bU.value);
        if (bg === "") {
            this.csM.style.display = ""
        } else {
            this.csM.style.display = "none"
        }
        this.he();
        this.bh("onchange", bg)
    };
    crE.SK = function(bHm) {
        var csY = true;
        if (!!this.csL) {
            csY = false;
            this.csL = false
        }
        this.he();
        this.csj();
        this.csX = false;
        this.bh("onselect", bHm, csY)
    };
    crE.pz = function(fW) {
        var csZ = this.bC + fW;
        if (this.cT.length > this.crW && (csZ < 0 || csZ >= this.cT.length)) {
            return
        }
        var bo = this.cT[this.bC], dn = 0 - parseInt(this.fS.style.top.replace("px", "")), crY = Math.floor(dn / 30), cta = crY + this.crW - 1, fe = this.cT.length, ctM = [crY, cta];
        if (fW === 1 && this.bC === cta && this.bC !== fe - 1) {
            this.fS.style.top = 0 - (crY + 1) * 30 + "px";
            this.bMd.cgu(crY + 1, fe + 10 - this.crW)
        } else if (fW === -1 && this.bC === crY && this.bC !== 0) {
            this.fS.style.top = 0 - (crY - 1) * 30 + "px";
            this.bMd.cgu(crY - 1, fe + 10 - this.crW)
        }
        if (!!bo)
            bo.gg(false);
        this.bC = (this.bC + fW) % this.cT.length;
        if (this.bC < 0)
            this.bC = this.cT.length - 1;
        var bo = this.cT[this.bC];
        if (!!bo)
            bo.gg(true, 2)
    };
    crE.bgH = function(Q) {
        return
    };
    crE.he = function(MN) {
        this.fS.style.visibility = "hidden";
        this.cT = this.SJ.db(this.cT)
    };
    crE.csj = function() {
        this.bIk.style.display = "none";
        this.fS.style.minHeight = 0
    };
    p.csN = C();
    crX = p.csN.bi(P(N.ut).fc, true);
    var Di = E.gD('<span class="atitm"><span class="w-img2"><img class="utag" src="http://l.bst.126.net/rsc/img/ava/30.png"></span><span class="name f-thide utag">名称</span></span>');
    crX.bq = function() {
        this.bHq(Di);
        var bHk = E.bj(this.Y, "utag");
        this.IF = bHk[0];
        this.fz = bHk[1];
        V.bHn(this.Y, "click", this.rF.A(this));
        E.fy(this.Y, "c-hover", true)
    };
    crX.ce = function(bHm) {
        p.csN.bw.ce.call(this, bHm);
        this.gg(false);
        this.IF.src = bHm.avator || "http://l.bst.126.net/rsc/img/ava/30.png";
        this.fz.innerHTML = U.ew(bHm.nickName);
        this.bHp = bHm
    };
    crX.bHu = function(I) {
        this.bHn("onclick", I.onclick || F)
    };
    crX.rF = function(bHl) {
        V.bb(bHl);
        this.bh("onclick", this.bHp)
    };
    crX.gg = function(hU, pN) {
        hU ? E.ba(this.Y, "j-hover") : E.bf(this.Y, "j-hover")
    };
    crX.cF = function() {
        return this.bHp
    }
})();
(function() {
    var p = P("loft.w"), csk, crF, crE, cyt = '<div class="inputNode"><label class="xtag">想用@提到谁？</label><input id="atinputb" class="input xtag"></div><div class="scrollNode xtag" style="height: 60px; visibility: hidden;"><div class="result xtag" style="visibility: hidden; position: absolute; min-width: 167px; min-height: 0px; top: 0px;"></div><div class="vSlideWayNode xtag" style="visibility: hidden; display: none; height: 180px; width: 6px;"><div hidefocus="true" class="vSlideBtn xtag" style="top: 0px; left: 0px;">&nbsp;</div></div><div class="hSlideWayNode xtag" style="visibility: hidden; display: block; width: 173px; height: 17px;"><div hidefocus="true" class="hSlideBtn xtag">&nbsp;</div></div></div><div id="atshadow" class="shadow"></div>';
    p.crZ = C();
    crF = p.crZ.bi(P(N.ut).gY);
    crF.bq = function(bl, I) {
        var I = I || {};
        this.gF = I;
        this.gF.linkColorClass = "s-fc2";
        this.xI = window;
        if (!!I.iframeId) {
            this.xI = document.getElementById(I.iframeId).contentWindow
        }
        var ctN = loft || this.xI.loft, ctB = !!loft.g ? !!loft.g.noAt : false;
        if (ctB === true) {
            return
        }
        this.crO = I.textBody;
        if (!!I.isInLayer) {
            this.cwX = I.isInLayer;
            E.hE(E.be("atinput"));
            this.cxo = E.be(I.layerId);
            this.crV = document.createElement("a");
            this.crV.className = "m-at";
            this.crV.id = "atinput";
            this.crV.innerHTML = cyt;
            this.cxo.appendChild(this.crV)
        } else {
            this.crV = E.be("atinput")
        }
        this.bro = new loft.w.suggest.csV({onsearchsucc: this.brn.A(this)});
        this.eH = loft.w.suggest.csO.bG(bl, {canBlurHide: I.canBlurHide || true,scrollPos: I.scrollPos || 2,itemNum: I.itemNum,iframeId: I.iframeId || "",onselect: this.qu.A(this),onchange: this.hu.A(this),onenter: this.SI.A(this)});
        this.ctb = navigator.userAgent.toLowerCase().match(/version\/([\d.]+).*safari/) ? true : false;
        this.ctA(I)
    };
    crF.ctO = function() {
        var crD = this.xI.getSelection ? this.xI.getSelection() : document.selection, hy = crD.createRange ? crD.createRange() : crD.getRangeAt(0), ctc = true, csK = this.xI.getSelection ? crD.anchorNode.parentNode.tagName.toUpperCase() : hy.parentElement().nodeName.toUpperCase();
        if (csK === "A") {
            ctc = false
        }
        return ctc
    };
    crF.ctA = function(I) {
        this.ctd = this.ctz(this.crO);
        this.cty();
        this.crH = E.bj(this.crO, "test")[0];
        if (!!this.cwX) {
            var ci = this.cys(this.crH, this.cxo), cN = !!this.csI ? 10 : 22, csg = ci.top, csh = ci.left + cN
        } else {
            this.fl = this.YL(this.crH);
            var cN = !!this.csI ? 10 : 22, csJ = {top: 0,left: 0}, csh, csg;
            if (!!I.iframeId) {
                csJ = this.YL(document.getElementById(I.iframeId));
                if (this.fl.scrollTop > 0) {
                    this.fl.top = this.fl.top - this.fl.scrollTop
                }
            }
            csg = this.fl.top + csJ.top;
            csh = this.fl.left + csJ.left + cN;
            if (!!this.gF.canAutoSetInputPos) {
                var by = 0, ctP = {top: csg,left: csh}, cte = {top: csg + 175,left: csh + 30 * this.gF.itemNum}, ctf = {width: document.body.offsetWidth,height: document.body.offsetHeight};
                if (cte.left > ctf.width) {
                    by = by + 1;
                    csh = csh - 2 * cN - 170
                }
                if (cte.top > ctf.height) {
                    by = by + 2;
                    csg = csg
                }
            }
        }
        E.be("atshadow").style.display = !!I.isSdHide ? "none" : "";
        this.crV.style.top = csg + "px";
        this.crV.style.left = csh + "px";
        this.crV.style.visibility = "visible";
        E.be("atinputb").focus();
        this.ctg = this.ctx.A(this)
    };
    crF.ctx = function(bHl) {
        if (!this.crH)
            return;
        var rB = bHl && (bHl.which || bHl.keyCode);
        if (rB === 8) {
            window.setTimeout(function() {
                if (this.crH.innerText.length === this.cvV.length - 1) {
                    if (!!this.ctb) {
                        this.crO.focus();
                        var selection = this.xI.getSelection ? this.xI.getSelection() : document.selection;
                        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
                        if (!!this.crU) {
                            range.setEndAfter(this.crU);
                            range.setStartAfter(this.crU);
                            selection.removeAllRanges();
                            selection.addRange(range)
                        }
                    }
                    E.hE(this.crH);
                    if (!B.da) {
                        this.csa.nodeValue = this.csa.nodeValue.replace(/^\s/, "");
                        if (!this.ctb) {
                            this.crU.nodeValue = this.crU.nodeValue.replace(/\s$/, "")
                        }
                    }
                    if (B.qi && this.crO.innerHTML === "") {
                        this.crO.innerHTML = " "
                    }
                    V.iJ(this.crO, "keydown", this.ctg);
                    this.crH = null;
                    this.gF.cbDelTag()
                }
            }.A(this), 40)
        }
        this.cvV = this.crH.innerText
    };
    crF.SI = function() {
        return
    };
    crF.hu = function(bg) {
        if (loft.c.cm.userId <= 0)
            return;
        this.eH.xW([], 0);
        if (bg === "") {
            window.setTimeout(function() {
                this.bro.ctF()
            }.A(this), 100)
        } else {
            window.setTimeout(function() {
                this.bro.brm(bg, 10)
            }.A(this), 100)
        }
    };
    crF.brn = function(bx, bn) {
        var bg = U.bA(this.eH.cF());
        if (!!bn && !!bn.length && bx === bg) {
            var bu = [], i = 0, l = bn.length;
            this.eH.he();
            this.eH.xW(bn, 0)
        } else if (bx === bg) {
            this.eH.he();
            this.eH.xW([], 0)
        }
    };
    crF.qu = function(bHm, fW) {
        if (this.crV.style.visibility === "hidden" || !this.crV) {
            return
        }
        if (bHm === "atbodyclick") {
            if (!this.crH) {
                this.crH = E.bj(this.crO, "test")[0]
            }
            E.hE(this.crH);
            if (!!this.csa && !!this.crU) {
                this.csa.nodeValue = "@";
                this.crU.nodeValue = ""
            }
            this.crH = null;
            this.cth(false)
        } else {
            this.bHp = bHm;
            if (!!this.csI) {
                this.csI.text = ""
            }
            this.crH.href = "http://www.lofter.com/mentionredirect.do?blogId=" + bHm.blogId;
            this.crH.innerHTML = "@" + U.ew(bHm.nickName);
            this.crH.setAttribute("loftermentionblogId", bHm.blogId + "");
            this.crH.target = "_blank";
            V.bHn(this.crO, "keydown", this.ctg);
            this.cth(fW)
        }
    };
    crF.cth = function(fW) {
        E.bf(this.crH, "test");
        this.gF.cbDelTag();
        this.crV.children[1].style.visibility = "hidden";
        this.crV.style.visibility = "hidden";
        this.crV.style.top = "-150px";
        this.crV.style.left = "-150px";
        E.be("atinputb").value = "";
        this.ctw(fW);
        this.bro.cK();
        this.eH.cK();
        if (this.cwX) {
            E.hE(this.crV)
        }
    };
    crF.ctw = function(fW) {
        this.crO.focus();
        var selection = this.xI.getSelection ? this.xI.getSelection() : document.selection;
        var range = selection.createRange ? selection.createRange() : selection.getRangeAt(0);
        if (!!this.csa && !!this.crU) {
            range.setEndAfter(this.csa);
            range.setStartAfter(this.csa);
            selection.removeAllRanges();
            selection.addRange(range)
        } else {
            if (!fW || B.Ud === "8.0") {
                var cgv = this.ctd.index;
                if (!!this.crH) {
                    cgv = cgv + this.crH.innerText.length
                }
                range.moveStart("character", cgv);
                range.select()
            } else {
                range.collapse(false);
                var cgv = 0 - this.ctd.last;
                range.moveStart("character", cgv);
                range.moveEnd("character", cgv);
                range.select()
            }
        }
    };
    crF.ctQ = function() {
        if (!!this.crH && !!this.bHp.blogId) {
        }
    };
    crF.YL = function(elem) {
        var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement;
        var clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top = box.top + (self.pageYOffset || docElem.scrollTop) - clientTop, left = box.left + (self.pageXOffset || docElem.scrollLeft) - clientLeft;
        return {left: left,top: top,right: left + box.width,bottom: top + box.height,scrollTop: self.pageYOffset || docElem.scrollTop}
    };
    crF.cys = function(elem, pelem) {
        var box = elem.getBoundingClientRect(), pbox = pelem.getBoundingClientRect();
        return {left: box.left - pbox.left,top: box.top - pbox.top}
    };
    crF.ctz = function(element) {
        var Q = 0, csf, cgv = 0;
        if (document.selection) {
            element.focus();
            csf = document.selection.createRange();
            csf.moveStart("character", -element.innerText.length);
            var jd = csf.text;
            for (var i = 0; i < element.innerText.length; i++) {
                if (element.innerText.substring(0, i + 1) == jd.substring(jd.length - i - 1, jd.length)) {
                    Q = i + 1
                }
            }
            cgv = element.innerText.length - Q
        } else {
            var crD = this.xI.getSelection(), ctv = crD.anchorNode.parentNode.tagName, bfd = crD.anchorOffset, crT = crD.anchorNode.parentNode.previousSibling, tM = "";
            if (ctv == element.tagName) {
                while (crT != null) {
                    tM += crT.textContent;
                    crT = crT.previousSibling;
                    Q = tM.trim().length + bfd
                }
            } else {
                while (crT != null) {
                    tM += crT.textContent;
                    crT = crT.previousSibling
                }
                Q = tM.trim().length + bfd
            }
            this.ctR = this.xI.getSelection().baseNode
        }
        return {index: Q,last: cgv}
    };
    crF.cty = function() {
        this.crO.focus();
        var crD = this.xI.getSelection ? this.xI.getSelection() : document.selection;
        var hy = crD.createRange ? crD.createRange() : crD.getRangeAt(0);
        if (!this.xI.getSelection) {
            var ctu = !!this.gF.linkColorClass ? '<a href="#" class="test f-atbox ' + this.gF.linkColorClass + '">&nbsp;</a>&nbsp;' : '<a href="#" class="test f-atbox">&nbsp;</a>&nbsp;';
            var csf = crD.createRange();
            csf.moveStart("character", -1);
            this.csI = csf;
            hy.pasteHTML(ctu);
            hy.collapse(false);
            hy.select()
        } else {
            var cse, csq;
            var cti = !!this.gF.linkColorClass ? '&nbsp;<a href="#" class="test f-atbox ' + this.gF.linkColorClass + '">@</a>&nbsp;' : '&nbsp;<a href="#" class="test f-atbox">@</a>&nbsp;';
            if (!!hy.createContextualFragment) {
                cse = hy.createContextualFragment(cti)
            } else {
                var ctj = document.createElement("div");
                cse = document.createDocumentFragment();
                cse.appendChild(ctj);
                ctj.outerHTML = cti
            }
            csq = cse.lastChild;
            this.csa = csq;
            this.crU = cse.firstChild;
            hy.insertNode(cse);
            crD.anchorNode.nodeValue = crD.anchorNode.nodeValue.replace(/@$/, "");
            if (csq) {
                hy.setEndAfter(csq);
                hy.setStartAfter(csq)
            }
            crD.removeAllRanges();
            crD.addRange(hy)
        }
    };
    crF.bE = F
})();
(function() {
    var p = P("loft.w"), eN = 10, buZ = 60 * 60 * 24 * 7 * 1e3, nc, gr, Vc = function(X) {
        X.style.marginTop = "0px";
        E.ba(X.parentNode, "a-isaym2-do")
    }, Ve = function(X, buY) {
        X.style.marginTop = -(buY || X.scrollHeight) + "px";
        E.bf(X.parentNode, "a-isaym2-do")
    };
    p.mZ = C();
    nc = p.mZ.bi(P(N.ui).ga, true);
    nc.bq = function(bl, I) {
        I = I || O;
        this.bv = new (P("loft.d").up);
        this.bv.bHn("onloadhotlist", this.buX.A(this));
        this.bHq(bl, I)
    };
    nc.buX = function(bS) {
        if (!!bS) {
            this.pW = this.pW.concat(p.Ba.bG(bS, this.yu, {typeText: loft.x.WD(this.dJ)}));
            this.fP.parentNode.parentNode.style.display = this.pW.length > 5 ? "" : "none";
            this.oz.style.display = this.pW.length >= this.lx ? "none" : "";
            E.ba(this.yu.parentNode, "a-show-do");
            this.yu.parentNode.style.height = this.yu.scrollHeight + "px";
            this.cQ.style.display = "none"
        } else {
        }
        this.cQ.style.display = "none"
    };
    nc.cK = function() {
        p.mZ.bw.cK.apply(this, arguments);
        E.bf(this.vP, "opti-crt");
        E.bf(this.yu.parentNode, "a-show-do");
        this.yu.parentNode.style.height = 0
    };
    nc.bz = function(I) {
        p.mZ.bw.bz.call(this, I);
        this.ic = I.pid || 0;
        this.bI = I.bid || 0;
        this.vP = I.act || O;
        this.dJ = I.type || 1;
        this.fl = 0;
        this.lx = I.count || 0;
        if (!!this.pW)
            p.Ba.db(this.pW);
        this.pW = [];
        E.ba(this.vP, "opti-crt")
    };
    nc.xT = function(pa) {
        p.mZ.bw.xT.call(this, pa);
        if (!!this.Bc)
            window.clearTimeout(this.Bc);
        this.dL.parentNode.style.display = "block";
        this.iT();
        Vc(this.dL)
    };
    nc.xS = function() {
        this.Bc = window.setTimeout(function() {
            if (this.pW && !!this.pW.length) {
                this.pW = p.Ba.db(this.pW)
            }
            p.mZ.bw.xS.call(this);
            B.da && (this.dL.parentNode.style.display = "none")
        }.A(this), 300);
        Ve(this.dL)
    };
    nc.iT = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        this.cQ.style.display = "";
        this.bv.bvW(this.ic, this.bI, eN, this.fl);
        this.fl += eN
    };
    nc.cU = function() {
        return ""
    };
    nc.cM = function() {
        return '<div class="shadow"></div><div class="isaymin"><div class="m-cmt"><div class="a-show a-show-cmtul"><ul class="xtag"></ul></div></div><div class="isayi xtag"><div class="more"><div class="w-load">正在载入中...</div></div></div><div class="isayi"><a class="w-more2 xtag" href="#"><span>查看更多</span></a></div><div class="more"><div class="isayi"><a class="w-more w-more-close xtag" href="#">收起</a></div></div></div>'
    };
    nc.cc = function() {
        var bHk = E.bj(this.Y, "xtag");
        this.yu = bHk[0];
        this.cQ = bHk[1];
        this.oz = bHk[2];
        this.fP = bHk[3];
        this.oz.style.display = this.fP.parentNode.parentNode.style.display = "none";
        V.bHn(this.fP, "click", this.kN.A(this));
        V.bHn(this.oz, "click", this.iT.A(this))
    };
    nc.kN = function(bHl) {
        V.bb(bHl);
        p.mZ.db(this)
    };
    p.Ba = C();
    OL = p.Ba.bi(P(N.ut).fc, true);
    var eO = E.gD('<li><div class="cmti"><div class="w-img2 w-img2-4"><a href="#" target="_blank"><img class="xtag"><span class="xtag w-icn3 w-icn3-1">&nbsp;</span></a></div><div class="cmtcnt xtag"></div></div></li>');
    OL.bq = function() {
        this.bHq(eO);
        var bHk = E.bj(this.Y, "xtag");
        this.bD = bHk[0];
        this.bQC = bHk[1];
        this.vP = bHk[2];
        this.FP = [];
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;喜欢此${typeText}</div>'));
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;从&nbsp;&nbsp;<a href="${link2}" class="s-fc4" target="_blank">${nick2}</a>&nbsp;&nbsp;转载了此${typeText}${reblogTargetUrl}</div>{if !!content}<div class="cmtcmt cmtcmt-1">{if !!toPost}<a href="${toPost.blogPageUrl}" target="_blank" title="浏览文章">${content}</a>{else}${content}{/if}</div>{/if}'));
        this.FP.push(E.ft('<div class="cmthot"><a href="${link1}" target="_blank" class="s-fc4" title="${title}">${nick1}</a>&nbsp;&nbsp;{if !!link2}从&nbsp;&nbsp;<a href="${link2}" class="s-fc4" target="_blank">${nick2}</a>&nbsp;&nbsp;{/if}推荐了此${typeText}</div>'));
        V.bHn(this.bD.parentNode, "mouseover", this.cwq.A(this, true, this.bD.parentNode, null));
        V.bHn(this.bD.parentNode, "mouseout", this.cwq.A(this, false, this.bD.parentNode, null))
    };
    OL.cwq = function(gu, CL, dA, bHl) {
        dA = dA || this.bHp.publisherUserId;
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    OL.ce = function(bHm) {
        p.Ba.bw.ce.call(this, bHm);
        bHm.typeText = this.buV;
        bHm.link1 = loft.x.bM(bHm.publisherMainBlogInfo.blogName);
        bHm.nick1 = U.ew(bHm.publisherMainBlogInfo.blogNickName) || "";
        bHm.title = loft.x.AD(bHm.nick1, 20, true) + " - " + loft.x.qB(bHm.opTime);
        if (!!bHm.fromPost) {
            bHm.link2 = loft.x.bM(bHm.fromPost.blogInfo.blogName);
            bHm.nick2 = U.ew(bHm.fromPost.blogInfo.blogNickName);
            if (bHm.type == 3 && bHm.postId == bHm.fromPostId) {
                bHm.link2 = null
            }
        }
        bHm.reblogTargetUrl = "";
        if (bHm.publisherUserId != bHm.toBlogId && !!bHm.toPost) {
            var buU = loft.x.GX(bHm.toPost.blogInfo.blogName, bHm.toPost.id, bHm.toPost.blogId);
            bHm.reblogTargetUrl = '&nbsp;&nbsp;到&nbsp;&nbsp;<a href="' + buU + '" target="_blank" class="s-fc4">' + bHm.toPost.blogInfo.blogNickName + "</a>"
        }
        this.bD.src = loft.x.eK(bHm.publisherMainBlogInfo.bigAvaImg, 20);
        this.bD.parentNode.href = bHm.link1;
        this.bD.parentNode.title = bHm.title;
        this.bQC.className = this.caa(bHm.type);
        this.vP.innerHTML = E.dG(this.FP[bHm.type - 1], bHm);
        var cwU = this.vP.children[0].children[0];
        V.bHn(cwU, "mouseover", this.cwq.A(this, true, cwU, bHm.publisherUserId));
        V.bHn(cwU, "mouseout", this.cwq.A(this, false, cwU, bHm.publisherUserId));
        if (!!bHm.link2) {
            var Ai = this.vP.getElementsByTagName("a"), l = Ai.length, i = 0;
            for (; i < l; i++) {
                if (Ai[i].href.replace(/\/$/i, "") === bHm.link2.replace(/\/$/i, "")) {
                    V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], bHm.fromBlogId));
                    V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], bHm.fromBlogId));
                    continue
                }
                if (Ai[i].href.indexOf(bHm.toBlogId.toString(16) + "_" + bHm.toPostId.toString(16)) > 0 && U.Ua(bHm.toPost.blogInfo.blogNickName) === Ai[i].innerHTML) {
                    V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], bHm.toBlogId));
                    V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], bHm.toBlogId))
                }
            }
        }
    };
    OL.caa = function(by) {
        var iQ = 5;
        switch (by) {
            case 1:
                iQ = 5;
                break;
            case 2:
                iQ = 3;
                break;
            case 3:
                iQ = 2;
                break
        }
        return "w-icn3 w-icn3-" + iQ
    };
    OL.bHu = function(I) {
        I = I || O;
        this.buV = I.typeText
    };
    p.lT = C();
    gr = p.lT.bi(P(N.ui).ga, true);
    gr.bq = function(bl, I) {
        I = I || O;
        this.bv = new (P("loft.d").up);
        this.bv.bHn("onloadcmtlist", this.OI.A(this));
        this.bv.bHn("onaddcmt", this.OG.A(this));
        this.bv.bHn("ondelcmt", this.OF.A(this));
        this.buT = new loft.d.AS({ongetcancomment: this.buO.A(this)});
        this.rp = new loft.d.vz({onaddblacklist: this.nV.A(this)});
        this.wd = !!I.isReblog;
        this.cP = {onreply: this.lJ.A(this),onblack: this.rz.A(this),ondelete: this.pV.A(this)};
        this.cwX = I.isInLayer || false;
        this.cyr = I.layerId || "";
        this.bHq(bl, I)
    };
    gr.bz = function(I) {
        p.lT.bw.bz.call(this, I);
        this.cQ.style.display = this.oz.style.display = this.fP.parentNode.parentNode.style.display = "none";
        this.ic = I.pid || 0;
        this.bI = I.bid || 0;
        this.Bn = !!I.isanonymous;
        this.bGf = I.followTime || 0;
        this.buM = I.commentRank || 0;
        this.vP = I.act || O;
        this.wd = !!I.isReblog;
        E.ba(this.vP, "opti-crt");
        this.lm = I.isedit || false;
        this.lx = I.count || 0;
        this.bHn("oncmtupdate", I.oncmtupdate || F);
        this.fl = 0;
        !!this.wd ? E.ba(this.bU.parentNode, "add-tbu") : E.bf(this.bU.parentNode, "add-tbu");
        this.jr = false;
        this.cP.postId = this.ic;
        this.cP.blogId = this.bI;
        this.cP.isedit = this.lm;
        this.cP.isanonymous = this.Bn;
        this.cP.onanonymousclick = I.onanonymousclick || F;
        this.bU.parentNode.style.display = this.Bn ? "none" : "";
        this.bU.disabled = this.ou.disabled = false;
        E.bf(this.bU, "w-inputxt-dis");
        E.dt(this.ou, "w-bbtn-2", "w-bbtn-0");
        this.crC = "";
        this.buL()
    };
    gr.buL = function() {
        if (!this.lm && this.buM == 11) {
            this.bU.parentNode.style.display = "none";
            this.buT.bvb(this.bI)
        }
    };
    gr.buO = function(bu) {
        this.bU.parentNode.style.display = "";
        if (!!bu && bu == -1) {
            this.bU.disabled = this.ou.disabled = true;
            this.bU.innerHTML = "由于该用户的权限设置，你暂时无法进行评论...";
            E.ba(this.bU, "w-inputxt-dis");
            E.dt(this.ou, "w-bbtn-0", "w-bbtn-2");
            E.bf(this.bU.parentNode, "add-tbu");
            return
        }
        this.bU.focus()
    };
    gr.iT = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        if (!this.lx)
            return;
        this.cQ.style.display = "";
        this.bv.bvU(this.ic, eN, this.fl)
    };
    gr.OI = function(bS) {
        this.cQ.style.display = "none";
        if (!!bS && !!bS.length) {
            var buK = bS.length;
            this.lQ.parentNode.parentNode.style.display = "";
            if (!!this.kG) {
                if (bS.length < this.kG.length + eN) {
                    this.td = true
                }
                bS = bS.slice(this.kG.length, bS.length);
                this.fl += eN
            } else {
                this.fl += bS.length;
                this.td = bS.length < eN
            }
            if (buK >= this.lx)
                this.td = true;
            this.oz.style.display = !!this.td ? "none" : "";
            this.fP.parentNode.parentNode.style.display = "";
            if (!bS.length)
                return;
            var Wd = p.kD.bG(bS, this.lQ, this.cP);
            !!this.kG ? this.kG = this.kG.concat(Wd) : this.kG = Wd;
            this.buJ()
        } else {
            this.td = true;
            this.lQ.parentNode.parentNode.style.display = "none";
            this.fP.parentNode.parentNode.style.display = "none"
        }
    };
    gr.buJ = function() {
        if (!E.cr(this.lQ.parentNode, "a-show-do"))
            E.ba(this.lQ.parentNode, "a-show-do");
        this.lQ.parentNode.style.height = this.lQ.scrollHeight + "px"
    };
    gr.cK = function() {
        p.lT.bw.cK.call(this);
        if (!!this.kG) {
            this.kG = p.kD.db(this.kG)
        }
        this.bU.innerHTML = "";
        this.bU.style.height = "20px";
        E.bf(this.vP, "opti-crt");
        E.bf(this.bU.parentNode, "add-tbu");
        E.bf(this.ju, "w-tbu-sel");
        E.bf(this.lQ.parentNode, "a-show-do");
        this.lQ.parentNode.style.height = 0
    };
    gr.lJ = function(hT, Oz, Bs, gR) {
        this.Ow = Bs || "";
        this.Bw = gR || "";
        this.bIP = Oz || 0;
        this.kk = hT || 0;
        if (this.bU.disabled === true) {
            return
        }
        loft.x.csR(this.bU, "回复 " + gR + "：");
        this.crC = this.bU.innerText
    };
    gr.rz = function(bc, gR) {
        loft.w.eD.bE({parent: document.body,title: "加入黑名单",c1: "确定将 " + (gR || "") + " 加入黑名单吗？",c2: "加入黑名单之后，" + (gR || "") + "将不会出现在您的博客中，" + (gR || "") + "也不能对您的博客进行评论、投稿和私信。您还可以去帐号设置管理黑名单。",onok: function() {
            this.rp.yY(bc)
        }.A(this)})
    };
    gr.nV = function(bHm) {
        if (!!bHm) {
            if (bHm.id == -1e3) {
                alert("你尚未登录");
                return
            }
            if (bHm.id == -999) {
                return
            }
            if (bHm.id > 0) {
                E.bY("加入黑名单成功！", true)
            } else if (bHm.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHm.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHm.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHm.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    gr.pV = function(buF, dR, bc) {
        loft.w.eD.bE({parent: document.body,title: "删除评论",c1: "确定删除这条评论吗？",onok: function() {
            this.bv.Pm(buF, dR, bc)
        }.A(this)})
    };
    gr.OF = function(bHm, Q) {
        if (!!bHm && bHm > 0) {
            var ctt = this.lQ.parentNode.scrollHeight;
            this.bh("oncmtupdate", -1);
            var QH = this.kG[Q].ra.offsetHeight;
            p.kD.db(this.kG[Q]);
            this.kG.splice(Q, 1);
            this.lQ.parentNode.style.height = ctt - QH + "px"
        }
    };
    gr.cU = function() {
        return ""
    };
    gr.cM = function() {
        return '<div class="shadow"></div><div class="isaymin"><div class="isayi add"><div contentEditable="true" class="w-inputxt xtag noshortkey" maxlength="200"></div><button class="w-bbtn w-bbtn-0 xtag">发　布</button><a title="点击图标，同时评论给原作者" class="w-tbu xtag">同时评论给原作者</a></div><div class="m-cmt"><div class="a-show a-show-cmtul"><ul class="xtag"></ul></div></div><div class="isayi xtag"><div class="more"><div class="w-load">正在载入中...</div></div></div><div class="isayi"><a class="w-more2 xtag" href="#"><span>查看更多</span></a></div><div class="more"><div class="isayi"><a class="w-more w-more-close xtag" href="#">收起</a></div></div></div>'
    };
    gr.cc = function() {
        var bHk = E.bj(this.Y, "xtag"), i = 0;
        this.bU = bHk[i++];
        this.ou = bHk[i++];
        this.ju = bHk[i++];
        this.lQ = bHk[i++];
        this.cQ = bHk[i++];
        this.oz = bHk[i++];
        this.fP = bHk[i++];
        V.bHn(this.bU, "keyup", this.csu.A(this));
        V.bHn(this.ou, "click", this.Wu.A(this));
        V.bHn(this.fP, "click", this.kN.A(this));
        V.bHn(this.oz, "click", this.iT.A(this));
        V.bHn(this.ju, "click", this.buC.A(this));
        loft.x.AL(this.bU, this.Wu.A(this));
        this.crC = "";
        this.crJ = []
    };
    gr.csu = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode);
        if (rB == 86) {
            var ck = this.bU.children, l = ck.length;
            if (l == 0) {
                this.crC = this.bU.innerText;
                return
            }
            for (var i = l - 1; i > -1; i--) {
                if (ck[i].tagName === "A" && !!E.cr(ck[i], "f-atbox") && ck[i].innerText.indexOf("@") >= 0) {
                    if (ck[i].children.length > 0) {
                        ck[i].innerHTML = ck[i].innerText
                    }
                    continue
                } else {
                    ck[i].outerHTML = ck[i].innerText
                }
            }
        } else if (rB !== 17 && rB !== 86 && this.bU.innerText.split("@").length === this.crC.split("@").length + 1) {
            if (!!loft.x.csi() || loft.c.cm.userId <= 0) {
                this.crC = this.bU.innerText;
                return
            }
            V.bb(bHl);
            var crK = new loft.w.crZ(null, {textBody: this.bU,isInLayer: this.cwX,layerId: this.cyr,cbDelTag: this.crL.A(this)});
            this.crJ.push(crK)
        }
        this.crC = this.bU.innerText
    };
    gr.crL = function() {
        this.crC = this.bU.innerText
    };
    gr.buC = function(bHl) {
        V.bb(bHl);
        this.jr = !this.jr;
        !!this.jr ? E.ba(this.ju, "w-tbu-sel") : E.bf(this.ju, "w-tbu-sel");
        this.ju.title = !!this.jr ? "点击图标，取消评论同步" : "点击图标，同时评论给原作者"
    };
    gr.fs = function() {
        p.lT.bw.fs.apply(this, arguments);
        if (!!this.Ww)
            window.clearTimeout(this.Ww);
        this.Ww = window.setTimeout(function() {
            if (!this.bU.parentNode.style.display && !this.bU.disabled)
                this.bU.focus()
        }.A(this), 350);
        this.iT()
    };
    gr.xT = function(pa) {
        p.lT.bw.xT.call(this, pa);
        if (!!this.Bc)
            window.clearTimeout(this.Bc);
        this.dL.parentNode.style.display = "block";
        Vc(this.dL)
    };
    gr.xS = function() {
        this.Bc = window.setTimeout(function() {
            p.lT.bw.xS.call(this);
            B.da && (this.dL.parentNode.style.display = "none")
        }.A(this), 300);
        Ve(this.dL)
    };
    gr.kN = function(bHl) {
        V.bb(bHl);
        p.lT.db(this)
    };
    gr.Wu = function() {
        if (!!loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        var jd = "", bRh = U.bA(this.bU.innerText);
        if (B.da) {
            jd = U.bA(loft.x.cvJ(this.bU, true))
        } else {
            jd = U.bA(this.bU.innerHTML.replace(/<\/div>/ig, "").replace(/<div>(<[\/]?\s*br>)?/ig, "<br>").replace(/^(<br>)*/ig, "").replace(/(<br>)*$/ig, ""))
        }
        if (!!this.bIP) {
            var tI = U.ew("回复 " + this.Bw + "：");
            if (jd.indexOf(tI) != 0) {
                this.bIP = 0
            } else {
                jd = jd.replace(tI, "")
            }
        }
        if (!bRh) {
            E.bd("请输入评论内容", true);
            this.bU.focus();
            return
        }
        if (bRh.length > 200) {
            E.bd("评论内容不超过200个字", true);
            this.bU.focus();
            return
        }
        this.ou.innerText = "正在发布...";
        E.dt(this.ou, "w-bbtn-0", "w-bbtn-2");
        this.bU.disabled = this.ou.disabled = true;
        this.bv.Ao(jd, this.ic, this.bI, this.kk, this.bIP, !!this.jr)
    };
    gr.OG = function(bHm) {
        this.bU.innerHTML = "";
        this.crC = "";
        this.ou.innerText = "发　布";
        this.bU.disabled = this.ou.disabled = false;
        this.lQ.parentNode.parentNode.style.display = "";
        E.dt(this.ou, "w-bbtn-2", "w-bbtn-0");
        if (!!bHm) {
            if (bHm.id == -10) {
                E.bd("对不起，您没有权限发表评论", true)
            } else if (bHm.id == -11) {
                E.bd("对不起，由于用户设置，您没有权限发表评论")
            } else if (bHm.id == -15) {
                E.bd("该文章已删除，不能回复评论！")
            } else if (bHm.id == -16) {
                E.bd("该评论已删除，不能回复评论！")
            } else if (bHm.id == -100) {
                E.bd("您发布得太快了，请休息一下。")
            } else if (bHm.id == -199) {
                E.bd("您提交的内容中含敏感词！", true)
            } else {
                this.bh("oncmtupdate", 1);
                if (!!bHm.replyToUserId) {
                    bHm.replyBlogInfo = {blogId: this.bIP,blogName: this.Ow,blogNickName: this.Bw}
                }
                this.bIP = 0;
                this.kk = 0;
                this.cP.before = true;
                this.kG = this.kG || [];
                this.kG.unshift(p.kD.bG(bHm, this.lQ, this.cP));
                this.cP.before = false
            }
        }
    };
    p.kD = C();
    iP = p.kD.bi(P(N.ut).fc, true);
    var ex = E.gD('<li class="a-slide a-slide-do"><div class="cmti slide xtag"><div class="w-img2 w-img2-2 noshortkey"><a href="#" target="_blank"><img class="xtag"></a></div><div class="cmtcnt"><div class="cmthot"><span class="cmtusr"><a href="#" target="_blank" class="s-fc4 xtag">某某某</a><span class="xtag">&nbsp;&nbsp;回复了&nbsp;&nbsp;<a class="s-fc4 xtag" target="_blank"></a></span></span><span class="xtag"></span></div><div class="cmtopt"><a href="#" class="cmtj s-fc4 xtag">加黑</a><a href="#" class="xtag cmtj s-fc4">删除</a><a href="#" class="s-fc4 xtag">回复</a></div></div></div></li>');
    iP.bq = function() {
        this.bHq(ex);
        var bHk = E.bj(this.Y, "xtag"), i = 0;
        this.ra = bHk[i++];
        this.bD = bHk[i++];
        this.fz = bHk[i++];
        this.BQ = bHk[i++];
        this.Wz = bHk[i++];
        this.dg = bHk[i++];
        this.rW = bHk[i++];
        this.WB = bHk[i++];
        this.of = bHk[i++];
        V.bHn(this.of, "click", this.lJ.A(this));
        V.bHn(this.rW, "click", this.rz.A(this));
        V.bHn(this.WB, "click", this.pV.A(this));
        E.fy(this.Y, "j-hover");
        V.bHn(this.bD.parentNode, "mouseover", this.cwq.A(this, true, this.bD.parentNode, null));
        V.bHn(this.bD.parentNode, "mouseout", this.cwq.A(this, false, this.bD.parentNode, null));
        V.bHn(this.fz, "mouseover", this.cwq.A(this, true, this.fz, null));
        V.bHn(this.fz, "mouseout", this.cwq.A(this, false, this.fz, null))
    };
    iP.cwq = function(gu, CL, dA, bHl) {
        if (!dA && (!CL.href || CL.href.indexOf("lofter.com") < 0)) {
            return
        }
        dA = dA || this.bHp.publisherUserId;
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    iP.bHu = function(I) {
        this.bHn("onreply", I.onreply || F);
        this.bHn("onblack", I.onblack || F);
        this.bHn("ondelete", I.ondelete || F);
        this.bHn("onanonymousclick", I.onanonymousclick || F);
        this.lm = I.isedit || false;
        this.ic = I.postId || 0;
        this.bI = I.blogId || 0;
        this.BR = I.before || false;
        this.Bn = !!I.isanonymous;
        if (!!this.BR) {
            E.bf(this.Y, "a-slide-do");
            this.ra.style.marginTop = "-100px"
        } else {
            this.Y.className = "a-slide a-slide-do";
            this.ra.style.marginTop = 0
        }
    };
    iP.fs = function(bl) {
        p.kD.bw.fs.call(this, bl, this.BR)
    };
    iP.cK = function() {
        this.ra.style.marginTop = -this.ra.scrollHeight + "px";
        E.bf(this.Y, "a-slide-do");
        window.setTimeout(p.kD.bw.cK.A(this), 300)
    };
    iP.ce = function(bHm) {
        p.kD.bw.ce.call(this, bHm);
        var du = bHm.publisherMainBlogInfo || O;
        this.bD.src = loft.x.eK(du.bigAvaImg, 20);
        if (du.blogId < 0) {
            if (!!du.blogName) {
                this.bD.parentNode.href = this.fz.href = du.blogName;
                this.bD.parentNode.target = this.fz.target = "_blank"
            } else {
                this.bD.parentNode.removeAttribute("href");
                this.fz.removeAttribute("href");
                this.bD.parentNode.style.cursor = "default";
                this.fz.style.cursor = "default";
                this.fz.style.textDecoration = "none"
            }
        } else {
            this.bD.parentNode.href = this.fz.href = loft.x.bM(du.blogName)
        }
        this.Ov = bHm.publisherUserId || 0;
        this.fz.innerText = du.blogNickName || "";
        this.dg.innerHTML = bHm.content || "";
        this.cvX();
        var title = loft.x.AD(du.blogNickName, 20, true) + " - " + loft.x.qB(bHm.publishTime);
        this.bD.parentNode.title = title;
        this.fz.title = title;
        if (!!bHm.replyBlogInfo) {
            this.BQ.style.display = "";
            this.Wz.innerText = bHm.replyBlogInfo.blogNickName || "";
            if (bHm.replyBlogInfo.blogId < 0) {
                if (!!bHm.replyBlogInfo.blogName) {
                    this.Wz.href = bHm.replyBlogInfo.blogName;
                    this.Wz.target = "_blank"
                } else {
                    this.Wz.removeAttribute("href");
                    this.Wz.style.cursor = "default";
                    this.Wz.style.textDecoration = "none"
                }
            } else {
                this.Wz.href = loft.x.bM(bHm.replyBlogInfo.blogName)
            }
            V.bHn(this.Wz, "mouseover", this.cwq.A(this, true, this.Wz, bHm.replyToUserId));
            V.bHn(this.Wz, "mouseout", this.cwq.A(this, false, this.Wz, bHm.replyToUserId))
        } else {
            this.BQ.style.display = "none"
        }
        if (bHm.publisherUserId == -90) {
            this.of.style.display = "none"
        }
        this.lm = !!this.lm || loft.c.cm.userId === this.Ov;
        this.WB.style.display = !!this.lm ? "" : "none";
        this.rW.style.display = this.Ov < 0 || loft.c.cm.userId == this.Ov || this.Bn ? "none" : "";
        if (!!this.BR) {
            var GZ = this.Y.parentNode.parentNode;
            window.setTimeout(function() {
                this.ra.style.marginTop = "0px";
                E.ba(this.Y, "a-slide-do");
                GZ.style.height = GZ.offsetHeight + this.ra.offsetHeight + "px";
                if (!E.cr(GZ, "a-show-do"))
                    E.ba(GZ, "a-show-do")
            }.A(this), 50)
        }
    };
    iP.cvX = function() {
        var bVb = this.dg.getElementsByTagName("a"), i = 0, l = bVb.length;
        for (; i < l; i++) {
            if (!!bVb[i].getAttribute("loftermentionblogId")) {
                bVb[i].target = "_blank";
                V.bHn(bVb[i], "mouseover", this.cwq.A(this, true, bVb[i], parseInt(bVb[i].getAttribute("loftermentionblogId"))));
                V.bHn(bVb[i], "mouseout", this.cwq.A(this, false, bVb[i], parseInt(bVb[i].getAttribute("loftermentionblogId"))))
            }
        }
    };
    iP.lJ = function(bHl) {
        V.bb(bHl);
        if (this.Bn) {
            this.bh("onanonymousclick")
        } else {
            this.bh("onreply", this.bHp.id, this.Ov, this.bHp.publisherMainBlogInfo.blogName, this.bHp.publisherMainBlogInfo.blogNickName || "")
        }
    };
    iP.rz = function(bHl) {
        V.bb(bHl);
        this.bh("onblack", this.bHp.publisherMainBlogInfo.blogName, this.bHp.publisherMainBlogInfo.blogNickName)
    };
    iP.pV = function(bHl) {
        V.bb(bHl);
        this.bh("ondelete", this.bHp.id, this.ic, this.bI)
    }
})();
(function() {
    var p = P("loft.w"), wu, bwa, bwK, cir, cis;
    p.eD = C();
    wu = p.eD.bi(p.fr, true);
    wu.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "未定义标题";
        this.bHq(bl, I)
    };
    wu.bz = function(I) {
        this.ei.iI(I.title);
        this.bHn("onok", I.onok || F);
        this.bHn("oncc", I.oncc || F);
        this.bbK.innerHTML = U.ew(I.c1);
        this.bwb.innerHTML = U.ew(I.c2);
        p.eD.bw.bz.call(this, I)
    };
    wu.cM = function() {
        return '<div class="layerm"><h4 class="warmt wtag">确定要删除某某某的投稿吗？</h4><div class="warmc"><p class="wtag">加入黑名单后，你还可以去帐号设置管理黑名单</p></div></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" href="#" hidefocus="true">确 定</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">取 消</a></div>'
    };
    wu.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bbK = bHk[0];
        this.bwb = bHk[1];
        this.zY = bHk[2];
        this.yU = bHk[3];
        V.bHn(this.zY, "click", this.ry.A(this));
        V.bHn(this.yU, "click", this.gL.A(this))
    };
    wu.ry = function(bHl) {
        V.bb(bHl);
        this.cy();
        this.bh("onok")
    };
    wu.gL = function(bHl) {
        V.bb(bHl);
        this.cy();
        this.bh("oncc")
    };
    p.Pu = C();
    bwa = p.Pu.bi(p.eD, true);
    bwa.cc = function() {
        p.Pu.bw.cc.call(this);
        this.yU.style.display = "none";
        E.ba(this.bbK, "warmt-ok")
    };
    p.Qe = C();
    bwK = p.Qe.bi(p.eD, true);
    bwK.cc = function() {
        p.Pu.bw.cc.call(this);
        this.yU.style.display = "none"
    };
    p.ciq = C();
    cir = p.ciq.bi(p.eD, true);
    cir.bz = function(I) {
        I = I || O;
        p.eD.bw.bz.call(this, I);
        this.bbK.innerHTML = I.c1 || "";
        this.bwb.innerHTML = I.c2 || "";
        if (I.noError) {
            E.ba(this.bbK, "warmt-ok")
        }
    };
    p.cip = C();
    cis = p.cip.bi(p.ciq, true);
    cis.cc = function() {
        p.cip.bw.cc.call(this);
        this.yU.style.display = "none"
    }
})();
(function() {
    var p = P("loft.w"), jT, cI, bRb = false, rj = {}, buB = "<div class=\"exif\" style=\"display:none;\" onclick=\"loft.g.stopBubble(event);\"><div class=\"exifbg\"></div><a class=\"w-ii\"  onclick=\"this.parentNode.className= 'exif exif-open'\"></a><a class=\"w-ii w-ii-hover\" onclick=\"this.parentNode.className='exif'\"></a><table><tbody><tr><th>品牌</th><td>${make||'-'}</td></tr><tr><th>型号</th><td>${model||'-'}</td></tr><tr><th>焦距</th><td>${focalLength||'-'}</td></tr><tr><th>光圈</th><td>${apertureValue||'-'}</td></tr><tr><th>快门速度</th><td>${exposureTime||'-'}</td></tr><tr><th>ISO</th><td>${isoSpeedRatings||'-'}</td></tr><tr><th>曝光补偿</th><td>${exposureBiasValue||'-'}</td></tr><tr><th>镜头</th><td><div class=\"exifitm\" title=\"${lens||''}\">${lens||'-'}</div></td></tr></tbody></table></div>";
    p.nX = C();
    jT = p.nX.bi(P(N.ui).ga, true);
    jT.bq = function() {
        this.bHq.apply(this, arguments);
        var g = P("loft.g");
        g.stopBubble = V.qK
    };
    jT.bz = function(I) {
        I = I || O;
        p.nX.bw.bz.call(this, I);
        window["__photo_showing_lock__"] = true;
        V.bHn(document, "keydown", this.WP);
        if (window.addEventListener) {
            window.addEventListener("DOMMouseScroll", this.Hf, false)
        }
        V.bHn(document, "mousewheel", this.Hf);
        this.BS = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var dp = document.documentElement || document.body;
        this.buA = dp.style.overflowY;
        this.buz = dp.style.overflowX;
        dp.style.overflowY = "hidden";
        dp.style.overflowX = "hidden";
        this.buw = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    jT.bHu = function(bl, I) {
        p.nX.bw.bHu.call(this, bl, I);
        this.sG = I.photos || [];
        this.bC = I.index || 0;
        window.Theme = window.Theme || O;
        this.buv = {cctype: I.cctype || window.Theme.CcType || 0,imageProtected: !!I.contextValue || !!window.Theme.ImageProtected,contextValue: I.contextValue || window.Theme.ContextValue || "",firstShowPhoto: this.sG[this.bC],authorId: I.authorId};
        this.Ot()
    };
    jT.Ot = function() {
        var dp = document.documentElement || document.body;
        if (B.dh) {
            this.fG.style.width = dp.scrollWidth + "px";
            this.fG.style.height = dp.scrollHeight + "px"
        }
        window.setTimeout(function() {
            this.fG.style.opacity = .9
        }.A(this), 1);
        this.Xd.style.top = this.buw + "px";
        this.Xe.style.display = this.oz.style.display = this.sG.length <= 1 ? "none" : "";
        this.Xf();
        this.BT.style.display = "";
        bRb = false;
        this.fo = p.BV.bG(this.sG, this.BT, this.buv);
        this.Xk();
        this.Xl = window.setInterval(this.Xk.A(this), 280)
    };
    jT.Xk = function() {
        var dp = document.documentElement || document.body, ll = dp.clientWidth, nq = dp.clientHeight, Xo = ll / nq;
        this.fo[this.bC].Sy();
        this.BT.style.width = ll * this.sG.length + "px";
        this.Xd.style.height = nq + "px";
        this.oz.style.left = ll - 60 + "px"
    };
    jT.cU = function() {
        return "widgetcommon photoshow"
    };
    jT.cM = function() {
        return '<div class="a-show-mask m-mask wtag" style="opacity:0;"></div><table class="m-bphoto wtag"><tbody><tr><td><div class="photos wtag" style="position:absolute;_position:relative;left:0;top:0;width:1000000px;height:100%;"></div><a title="上一张" class="wtag w-pctrl w-pctrl-pre" href="#">上一张</a><a title="下一张" class="wtag w-pctrl w-pctrl-nxt" href="#" style="right:auto;">下一张</a></td></tr></tbody></table>'
    };
    jT.cK = function() {
        p.nX.bw.cK.call(this);
        if (this.Xl)
            window.clearInterval(this.Xl);
        this.fo = p.BV.db(this.fo);
        this.BT.style.display = "none";
        this.fG.style.opacity = 0;
        V.iJ(document, "keydown", this.WP);
        window["__photo_showing_lock__"] = false;
        if (window.removeEventListener) {
            window.removeEventListener("DOMMouseScroll", this.Hf, false)
        }
        V.iJ(document, "mousewheel", this.Hf)
    };
    jT.cc = function() {
        var bHk = E.bj(this.Y, "wtag"), i = 0;
        this.fG = bHk[i++];
        this.Xd = bHk[i++];
        this.BT = bHk[i++];
        this.Xe = bHk[i++];
        this.oz = bHk[i++];
        V.bHn(this.Y, "click", this.buu.A(this));
        V.bHn(this.Xe, "click", this.iT.A(this, -1));
        V.bHn(this.oz, "click", this.iT.A(this, 1));
        this.WP = this.Cf.A(this);
        this.Hf = this.but.A(this)
    };
    jT.buu = function(bHl) {
        var X = V.be(bHl);
        if (X == this.fo[this.bC].bD) {
            if (this.bC + 1 == this.sG.length) {
                this.HM(bHl)
            } else {
                this.iT(1, bHl)
            }
        } else {
            this.HM(bHl)
        }
    };
    jT.iT = function(is, bHl) {
        V.bb(bHl);
        if (!this.sG || this.sG.length <= 1)
            return;
        var Or = this.bC;
        var Xy = (this.bC + is + this.sG.length) % this.sG.length;
        this.bC = Xy;
        this.fo[Or].bus();
        this.fo[Xy].bur();
        this.Xf()
    };
    jT.Xf = function() {
        var dp = document.documentElement || document.body, ll = dp.clientWidth;
        this.BT.style.left = -ll * this.bC + "px"
    };
    jT.but = function(bHl) {
        var delta = 0;
        if (bHl.wheelDelta) {
            delta = bHl.wheelDelta / Math.abs(bHl.wheelDelta);
            if (B.wZ)
                delta = -delta
        } else if (bHl.detail) {
            delta = -bHl.detail / Math.abs(bHl.detail)
        }
        this.iT(-delta)
    };
    var Oq = [37, 38, 39, 40, 27];
    jT.Cf = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode), Q = U.fO(Oq, rB);
        V.bb(bHl);
        if (Q == -1)
            return;
        var X = V.be(bHl);
        switch (Q) {
            case 0:
            case 1:
                this.iT(-1);
                break;
            case 2:
            case 3:
                this.iT(1);
                break;
            case 4:
                this.HM()
        }
    };
    jT.HM = function(bHl) {
        V.bb(bHl);
        var dp = document.documentElement || document.body;
        dp.style.overflowY = this.buA || "";
        dp.style.overflowX = this.buz || "";
        document.documentElement.scrollTop = document.body.scrollTop = this.BS;
        p.nX.db(this)
    };
    var buq = E.gD('<table class="photowrap" style="width:1640px;"><tr><td><div class="bphoto" style="background-color:transparent;"><img class="xtag a-show a-show-photo"><a class="rphlink xtag" href="#" target="_blank" style="display:none;">查看原图（1280x1024）&gt;</a><div class="rinfo xtag" onclick="loft.g.stopBubble(event);" style="display:none;transition:opacity 0.3s;-webkit-transition:opacity 0.3s;-moz-transition:opacity 0.3s;-o-transition:opacity 0.3s;"></div><div class="w-load2 xtag" style="display:none;"><div class="load">&nbsp;</div></div></div></td></tr></table>');
    p.BV = C();
    cI = p.BV.bi(P(N.ut).fc, true);
    cI.bq = function() {
        this.bHq(buq);
        this.bhq = E.ft(buB);
        var bHk = E.bj(this.Y, "xtag"), i = 0;
        this.bD = bHk[i++];
        this.xZ = bHk[i++];
        this.sl = bHk[i++];
        this.cQ = bHk[i++];
        V.bHn(this.xZ, "click", V.qK.A(null));
        V.bHn(this.bD.parentNode, "contextmenu", this.buo.A(this));
        V.bHn(this.bD.parentNode, "mouseover", this.XQ.A(this, true));
        V.bHn(this.bD.parentNode, "mouseout", this.XQ.A(this, false));
        V.bHn(this.bD, "load", this.vb.A(this))
    };
    cI.ce = function(bHm) {
        p.BV.bw.ce.call(this, bHm);
        this.eU = bHm;
        this.On = true;
        this.xY = this.eU.orign || "";
        this.uk = this.eU.ow || 1;
        this.xX = this.eU.oh || 1;
        this.Cn = this.uk / this.xX;
        if (this.uk > 1680) {
            this.uk = 1680;
            this.xX = parseInt(1680 / this.Cn)
        }
        if (B.oc) {
            if (this.xY != N.rc.r + "empty.png" && this.bD.src == this.xY) {
                this.xY = this.xY + "?copyone_" + U.cA()
            }
        }
        var dp = document.documentElement || document.body, ll = dp.clientWidth, nq = dp.clientHeight;
        this.Y.style.width = ll + "px";
        this.Y.style.height = nq + "px";
        this.bD.style.visibility = "hidden";
        this.bD.style.width = "500px";
        this.bD.style.height = 500 / this.Cn + "px";
        this.bD.style.display = "";
        this.bTD();
        this.sl.style.display = "none"
    };
    cI.bTD = function() {
        if (bRb || this.bZZ == this.eU) {
            window.setTimeout(function() {
                this.bD.src = this.xY
            }.A(this), 20);
            window.setTimeout(function() {
                this.cQ.style.display = this.On ? "" : "none"
            }.A(this), 100);
            this.Om(this.xY)
        } else {
            window.setTimeout(this.bTD.A(this), 100)
        }
    };
    cI.bHu = function(I) {
        I = I || O;
        this.Co = !!I.imageProtected;
        this.bun = I.contextValue || "";
        this.buj = I.cctype || 0;
        this.bZZ = I.firstShowPhoto;
        this.cEn = I.authorId || 0;
        this.bHn("onblack", I.onblack || F)
    };
    cI.cK = function() {
        E.bf(this.bD, "a-show-do");
        this.bD.src = N.rc.r + "empty.png";
        this.bD.style.opacity = 1;
        this.bD.style.display = "none";
        this.cQ.style.display = "none";
        E.hv(this.Oh);
        this.xZ.style.display = "none";
        p.BV.bw.cK.apply(this, arguments)
    };
    cI.bus = function() {
        var dp = document.documentElement || document.body, ll = dp.clientWidth, nq = dp.clientHeight;
        var Yr = parseInt(this.bD.style.width) || 0, oE = parseInt(this.bD.style.height) || 0;
        if (Yr > 0 && oE > 0) {
            this.bD.style.height = oE / 4 + "px";
            this.bD.style.width = Yr / 4 + "px"
        }
        this.bD.style.opacity = .5
    };
    cI.bur = function() {
        this.Sy();
        this.bD.style.opacity = 1
    };
    cI.Sy = function() {
        var dp = document.documentElement || document.body, ll = dp.clientWidth, nq = dp.clientHeight, Xo = ll / nq;
        this.Y.style.width = ll + "px";
        this.Y.style.height = nq + "px";
        if (!!this.On)
            return;
        if (this.Cn > Xo) {
            if (this.uk > ll - 100) {
                this.bD.style.width = ll - 100 + "px";
                this.bD.style.height = (ll - 100) / this.Cn + "px"
            } else {
                this.bD.style.width = this.uk + "px";
                this.bD.style.height = this.xX + "px"
            }
        } else {
            if (this.xX > nq - 100) {
                this.bD.style.height = nq - 100 + "px";
                this.bD.style.width = (nq - 100) * this.Cn + "px"
            } else {
                this.bD.style.height = this.xX + "px";
                this.bD.style.width = this.uk + "px"
            }
        }
    };
    cI.vb = function(bHl) {
        if (this.bD.src == N.rc.r + "empty.png")
            return;
        this.On = false;
        bRb = true;
        this.cQ.style.display = "none";
        this.bD.style.visibility = "visible";
        E.ba(this.bD, "a-show-do");
        this.Sy();
        this.bui();
        if (!!this.Co && (!loft.c.cm.userId || loft.c.cm.userId !== this.cEn || this.bun.indexOf("转载自") > 0)) {
            this.xZ.style.display = "none"
        } else {
            if (!!this.Co) {
                this.xZ.title = "仅作者可见"
            }
            this.xZ.style.display = "";
            this.xZ.innerText = "查看原图（" + this.uk + "x" + this.xX + "）>";
            this.xZ.href = this.xY
        }
    };
    cI.buo = function(bHl) {
        if (!!this.Co) {
            this.sl.innerHTML = this.bun || "TEST";
            var bug = E.tz(this.bD), bud = E.jO(this.bD);
            this.sl.style.left = V.IO(bHl) - bug + "px";
            this.sl.style.top = V.vS(bHl) - bud + "px";
            this.sl.style.opacity = "0.8";
            this.sl.style.display = "";
            if (!!this.Ok)
                this.Ok = window.clearTimeout(this.Ok);
            if (!!this.Oi)
                this.Oi = window.clearTimeout(this.Oi);
            this.Ok = window.setTimeout(function() {
                this.sl.style.opacity = "0"
            }.A(this), 2700);
            this.Oi = window.setTimeout(function() {
                this.sl.style.display = "none"
            }.A(this), 3e3)
        }
        if (!!this.Co) {
            V.bb(bHl);
            bHl.returnValue = !this.Co;
            return !this.Co
        } else {
            bHl.returnValue = true;
            return true
        }
    };
    cI.bui = function() {
        var dc;
        if (!!this.Oh)
            E.hE(this.Oh);
        switch (this.buj) {
            case 1:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc-nd/2.5/deed.zh" class="w-cc1 w-cc1-1" target="_blank" title="署名-非商业性使用-禁止演绎">署名-非商业性使用-禁止演绎</a>';
                break;
            case 2:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc-sa/2.5/deed.zh" class="w-cc1 w-cc1-2" target="_blank" title="署名-非商业性使用-相同方式共享">署名-非商业性使用-相同方式共享</a>';
                break;
            case 3:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nc/2.5/deed.zh" class="w-cc1 w-cc1-3" target="_blank" title="署名-非商业性使用">署名-非商业性使用</a>';
                break;
            case 4:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-nd/2.5/deed.zh" class="w-cc1 w-cc1-4" target="_blank" title="署名-禁止演绎">署名-禁止演绎</a>';
                break;
            case 5:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by-sa/2.5/deed.zh" class="w-cc1 w-cc1-5" target="_blank" title="署名-相同方式共享">署名-相同方式共享</a>';
                break;
            case 6:
                dc = '<a onclick="loft.g.stopBubble(event);" href="http://creativecommons.org/licenses/by/2.5/deed.zh" class="w-cc1 w-cc1-6" target="_blank" title="署名">署名</a>';
                break
        }
        if (!!dc) {
            this.Oh = E.eY(dc);
            this.bD.parentNode.appendChild(this.Oh)
        }
    };
    cI.XQ = function(gu, bHl) {
        if (!this.uw)
            return;
        var eF = V.be(bHl, function(X) {
            if (E.cr(X, "exif"))
                return true;
            if (X.tagName == "IMG")
                return true;
            return false
        });
        if (!!eF) {
            if (this.uw.className === "exif exif-open")
                return;
            this.uw.style.display = !!gu ? "" : "none"
        }
    };
    cI.Om = function(fV) {
        if (!fV)
            return;
        var bx = U.bcq(fV), bg = rj[bx];
        if (!!this.uw) {
            E.hE(this.uw);
            delete this.uw
        }
        if (!bg) {
            if (!/\.(?:jpg|jpeg)$/.test(fV)) {
                rj[bx] = "none";
                return
            }
            rj[bx] = "loading";
            J.YK("http://photo.163.com/photo/dwr", "PhotoBean", "getImageExif", fV, this.Cu.A(this, bx))
        } else {
            if (U.co(bg, "string") && (bg === "loading" || bg === "none")) {
                return
            } else {
                this.Cu(bx, bg)
            }
        }
    };
    cI.Cu = function(bx, iH) {
        rj[bx] = iH || "none";
        if (!iH)
            return;
        this.uw = E.eY(E.dG(this.bhq, iH));
        this.bD.parentNode.appendChild(this.uw)
    }
})();
(function() {
    var netease = window.netease || {};
    window.netease = netease;
    netease.lofter = {};
    netease.lofter.widget = {};
    var Ft = document.createDocumentFragment();
    var browser = netease.lofter.browser = function() {
        var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser = {ie: !!window.ActiveXObject,opera: !!opera && opera.version,webkit: agent.indexOf(" applewebkit/") > -1,mac: agent.indexOf("macintosh") > -1,quirks: document.compatMode == "BackCompat"};
        browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera;
        var version = 0;
        if (browser.ie) {
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            browser.ie8 = !!document.documentMode;
            browser.ie8Compat = document.documentMode == 8;
            browser.ie7Compat = version == 7 && !document.documentMode || document.documentMode == 7;
            browser.ie6Compat = version < 7 || browser.quirks;
            if (version >= 10 || document.documentMode >= 7)
                browser.ie6Compat = false
        }
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split(".");
                version = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1
            }
        }
        if (/chrome\/(\d+\.\d)/i.test(agent)) {
            browser.chrome = +RegExp["$1"]
        }
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp["$1"] || RegExp["$2"])
        }
        if (browser.opera)
            version = parseFloat(opera.version());
        if (browser.webkit)
            version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
        browser.version = version;
        browser.isCompatible = !browser.mobile && (browser.ie && version >= 6 || browser.gecko && version >= 10801 || browser.opera && version >= 9.5 || browser.air && version >= 1 || browser.webkit && version >= 522 || false);
        return browser
    }();
    var ie = browser.ie, webkit = browser.webkit, gecko = browser.gecko;
    if (!window.Node) {
        window.Node = {ELEMENT_NODE: 1}
    }
    if (browser.gecko) {
        HTMLElement.prototype["__defineGetter__"]("innerText", function() {
            return this.textContent
        });
        HTMLElement.prototype["__defineSetter__"]("innerText", function(Z) {
            this.textContent = Z
        });
        HTMLElement.prototype.insertAdjacentElement = function(DW, X) {
            if (!DW || !X)
                return;
            switch (DW) {
                case "beforeEnd":
                    this.appendChild(X);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(X, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(X) : this.insertBefore(X, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(X) : this.parentNode.insertBefore(X, this.nextSibling);
                    return
            }
        };
        HTMLElement.prototype.insertAdjacentHTML = function(DW, dc) {
            if (!DW || !dc)
                return;
            this.insertAdjacentElement(DW, document.createRange().createContextualFragment(dc))
        }
    }
    Function.prototype.A = function() {
        var de = arguments, fb = arguments[0], iA = this;
        return function() {
            var bdL = [].slice.call(de, 1);
            [].push.apply(bdL, arguments);
            return iA.apply(fb || window, bdL)
        }
    };
    var utils = netease.lofter.utils = {trim: function(fv) {
        if (fv != null) {
            return fv.replace(/(^\s*)|(\s*$)/g, "")
        } else {
            return null
        }
    },stopBubble: function(bHl) {
        bHl = bHl ? bHl : window.event;
        if (!bHl)
            return;
        if (!!(window.attachEvent && !window.opera)) {
            bHl.cancelBubble = true
        } else {
            bHl.stopPropagation()
        }
        return bHl
    },stopDefault: function(bHl) {
        if (!bHl)
            return;
        !!bHl.preventDefault ? bHl.preventDefault() : bHl.returnValue = false
    },stopEvent: function(bHl) {
        this.stopBubble(bHl);
        this.stopDefault(bHl)
    },addEvent: function(X, by, ev, vf) {
        X = this.getElement(X);
        if (!X || !by || !ev)
            return;
        if (!!document.addEventListener) {
            X.addEventListener(by, ev, !!vf)
        } else {
            X.attachEvent("on" + by, ev)
        }
    },delEvent: function(X, by, ev, vf) {
        X = this.getElement(X);
        if (!X || !by || !ev)
            return;
        if (!!document.addEventListener) {
            X.removeEventListener(by, ev, !!vf)
        } else {
            X.detachEvent("on" + by, ev)
        }
    },isExpectedString: function(pattern, str) {
        if (pattern.test(str)) {
            return true
        } else {
            return false
        }
    },hasClassName: function(X, bIw) {
        bIw = this.trim(bIw);
        if (!X || !X.className || !bIw)
            return false;
        var bPh = "\\s+" + bIw + "\\s+";
        var bKI = new RegExp(bPh);
        return this.isExpectedString(bKI, " " + X.className + " ")
    },getChildElements: function(X, cj) {
        X = this.getElement(X);
        if (!X)
            return null;
        var bu = [];
        for (var bk = X.children || X.childNodes, i = 0, l = bk.length; i < l; i++) {
            if (bk[i].nodeType != Node.ELEMENT_NODE || cj && !this.hasClassName(bk[i], cj))
                continue;
            bu.push(bk[i])
        }
        return bu
    },getElementsByClassName: function(bLQ, bIw) {
        var X = [];
        bLQ = utils.getElement(bLQ);
        if (typeof bLQ != "object" || bLQ == null) {
            bLQ = document
        }
        var Qu = bLQ.getElementsByTagName("*");
        for (var i = 0; i < Qu.length; i++) {
            if (this.hasClassName(Qu[i], bIw)) {
                X[X.length] = Qu[i]
            }
        }
        return X
    },addClassName: function(cp, bIw) {
        if (!this.hasClassName(cp, bIw)) {
            cp.className = cp.className + " " + bIw
        }
    },delClassName: function(cp, bIw) {
        if (!!this.hasClassName(cp, bIw)) {
            var bPh = "(^" + bIw + "\\s+)" + "|" + "(\\s+" + bIw + "\\s+)" + "|" + "(\\s+" + bIw + "$)";
            var bKI = new RegExp(bPh, "g");
            cp.className = cp.className.replace(bKI, " ")
        }
    },removeElement: function(X) {
        X = this.getElement(X);
        if (!X || !X.parentNode)
            return;
        X.parentNode.removeChild(X);
        if (browser.ie && !!X.outerHTML)
            X.outerHTML = ""
    },removeElementByEC: function() {
        for (var i = 0, l = arguments.length, X; i < l; i++) {
            X = utils.getElement(arguments[i]);
            X && Ft.appendChild(X)
        }
    },getElement: function(X) {
        if (typeof X == "string" || typeof X == "number") {
            X = document.getElementById(X)
        }
        return X
    }};
    var pageLayer = netease.lofter.widget.pageLayer = function() {
    };
    pageLayer.YV = function(bl, I) {
        if (!!this.eb) {
            this.eb.resetOption(I)
        } else {
            this.eb = new this;
            this.eb.init(bl, I)
        }
        return this.eb
    };
    pageLayer.prototype = {init: function(bl, I) {
        this.Y = document.createElement("div");
        this.Y.className = this.getSpace();
        this.Y.innerHTML = this.getXhtml();
        this.initNode();
        this.reset(bl, I);
        utils.addEvent(window, "resize", this.resizewin.A(this, false));
        utils.addEvent(document.body, "click", this.onDocumentClick.A(this))
    },onDocumentClick: function(bHl) {
        if (!this.cqQ) {
            if (!!this.cbBeforeDestroy) {
                this.cbBeforeDestroy()
            } else {
                this.destroy()
            }
        }
    },onKeyPress: function(bHl) {
        var bK = bHl.keyCode;
        if (bK == 38 || bK == 40) {
            if (!this.destroyed() && this.bLP) {
                utils.stopDefault(bHl)
            }
        }
    },getSpace: function() {
        return "w-pagelayer"
    },getXhtml: function() {
        return '<div class="pagelayer ztag"><div class="lyloading a-show ztag"></div><div class="lycover a-show ztag">&nbsp;</div><div class="lyscroll ztag" id="lyscroll"><a href="#" class="lyclosed ztag"></a><div class="lybody ztag"><div class="lycont a-show ztag"></div></div></div></div>'
    },initNode: function() {
        var bHk = utils.getElementsByClassName(this.Y, "ztag");
        var Q = 0;
        this.bPk = bHk[Q++];
        this.bNJ = bHk[Q++];
        this.bJg = bHk[Q++];
        this.bTg = bHk[Q++];
        this.cfh = bHk[Q++];
        this.ceG = bHk[Q++];
        this.bIq = bHk[Q++];
        utils.addEvent(this.bIq, "click", this.onLycontClick.A(this));
        utils.addEvent(this.cfh, "click", this.onClosedClick.A(this))
    },onLycontClick: function(bHl) {
        if (!this.cqQ) {
            utils.stopBubble(bHl)
        }
        if (browser.gecko && !!this.bLP) {
            utils.delEvent(document.body, "keydown", this.onKeyPress.A(this));
            this.bLP = false
        }
    },onClosedClick: function(bHl) {
        utils.stopEvent(bHl);
        this.destroy()
    },reset: function(bl, I) {
        I = I || {};
        bl = utils.getElement(bl);
        this.dL = bl == document.documentElement ? document.body : bl;
        this.resetOption(I);
        if (browser.gecko && !this.bLP) {
            this.bLP = true;
            utils.addEvent(document.body, "keydown", this.onKeyPress.A(this))
        }
    },resetOption: function(I) {
        utils.addClassName(this.bNJ, "a-show-do");
        if (!!I.showClosedIcon) {
            this.cfh.style.display = "block"
        }
        this.bYU = I.notSetContMinHeight || false;
        this.cqQ = I.noDocClickDestroy || false;
        this.bPl = (!browser.ie || browser.version >= 10) && I.isNeedAnimation || false;
        this.ng = I["class"] || "";
        utils.addClassName(this.Y, this.ng);
        this.cbAfterSetHtmlContent = I.cbAfterSetHtmlContent;
        this.cbBeforeDestroy = I.cbBeforeDestroy;
        this.cbAfterDestroy = I.cbAfterDestroy;
        if (!this.lN) {
            this.hideScroll();
            this.appendToParent(!!I.before)
        }
        this.showCover(I.bgcolor, I.opacity);
        this.setHtmlContent(I.html)
    },getNoDocClickDestroy: function() {
        return this.cqQ
    },setNoDocClickDestroy: function(czy) {
        this.cqQ = czy || false
    },hideScroll: function() {
        if (!!this.czf)
            return;
        this.czf = true;
        var dp = document.documentElement || document.body;
        this.BS = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.buA = dp.style.overflowY;
        var bTj = dp.clientWidth || 0;
        if (this.buA != "hidden") {
            dp.style.overflowY = "hidden";
            var Az = dp.clientWidth || 0;
            if (Az > bTj) {
                dp.style.paddingRight = Az - bTj + "px";
                dp.style.width = "auto"
            }
        }
        this.buz = dp.style.overflowX;
        if (this.buz != "hidden") {
            dp.style.overflowX = "hidden";
            this.buw = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }
    },showHtmlContent: function() {
        utils.delClassName(this.bNJ, "a-show-do");
        utils.addClassName(this.bIq, "a-show-do")
    },hideHtmlContent: function() {
        utils.delClassName(this.bIq, "a-show-do");
        utils.addClassName(this.bNJ, "a-show-do")
    },setHtmlContent: function(dc) {
        utils.addClassName(this.bNJ, "a-show-do");
        this.beforeSetHtmlContent(dc);
        if (!!this.bPl && !!this.bIq.innerHTML) {
            this.doAnimate(true);
            window.setTimeout(this.doSetHtmlContent.A(this, dc), 280)
        } else {
            this.doSetHtmlContent(dc)
        }
    },beforeSetHtmlContent: function(dc) {
        if (!!dc && browser.ie && browser.version < 10) {
            this.bIq.style.visibility = "hidden"
        }
    },doSetHtmlContent: function(dc) {
        if (typeof dc == "object") {
            this.bIq.innerHTML = "";
            this.bIq.insertAdjacentElement("beforeEnd", dc)
        } else {
            this.bIq.innerHTML = dc || ""
        }
        this.afterSetHtmlContent(dc);
        if (!!this.cbAfterSetHtmlContent)
            this.cbAfterSetHtmlContent()
    },afterSetHtmlContent: function(dc) {
        if (!dc)
            return;
        if (!!dc && browser.ie && browser.version < 10) {
            window.setTimeout(this.setZoomForIE.A(this), 300)
        }
        if (!!this.bPl) {
            window.setTimeout(this.doAnimate.A(this), 200)
        } else {
            this.doAnimate()
        }
        this.setLyContMinHeight()
    },doAnimate: function(bYT) {
        if (!bYT) {
            utils.addClassName(this.bIq, "a-show-do");
            utils.delClassName(this.bNJ, "a-show-do")
        } else {
            utils.delClassName(this.bIq, "a-show-do")
        }
    },setLyContMinHeight: function() {
        if (!!this.bYU) {
            return
        }
        if (!this.bIq.innerHTML) {
            return
        }
        if (!!this.bPm)
            this.bPm = window.clearTimeout(this.bPm);
        this.bPm = window.setTimeout(this.doLyContMinHeight.A(this), 10)
    },doLyContMinHeight: function() {
        if (this.destroyed())
            return;
        var gl = document.documentElement || document.body;
        var qx = gl.clientHeight || 1;
        var bPn = utils.getChildElements(this.bIq);
        var tD;
        if (!!bPn && bPn.length == 1) {
            tD = bPn[0]
        }
        if (browser.ie6Compat) {
            if (!!tD) {
                tD.style.height = "auto"
            } else {
                this.bIq.style.height = "auto"
            }
        } else {
            if (!!tD) {
                tD.style.minHeight = 0
            } else {
                this.bIq.style.minHeight = 0
            }
        }
        var bYS = this.bIq.clientHeight || 1;
        var bMB = Math.ceil(qx * 3 / 4);
        if (bMB > bYS) {
            if (browser.ie6Compat) {
                if (!!tD) {
                    tD.style.height = bMB + "px"
                } else {
                    this.bIq.style.height = bMB + "px"
                }
            } else {
                if (!!tD) {
                    tD.style.minHeight = bMB + "px"
                } else {
                    this.bIq.style.minHeight = bMB + "px"
                }
            }
        }
    },setZoomForIE: function() {
        this.Y.style.zoom = 1;
        this.bIq.style.visibility = "visible"
    },showCover: function(bPp, bB) {
        this.resizewin(true);
        if (!!bB || bB === 0) {
            this.bJg.style.opacity = 0;
            this.bJg.style.filter = "alpha(opacity=" + 0 + ")"
        }
        if (browser.ie && browser.version < 10) {
            window.setTimeout(this.showCoverForIE.A(this), 10)
        } else {
            this.bJg.style.visibility = "visible"
        }
        this.ceH = bPp;
        this.bJX = bB;
        if (!!bPp) {
            this.bJg.style.backgroundColor = bPp
        } else {
            this.bJg.style.backgroundColor = ""
        }
        if (!!bB || bB === 0) {
            this.bJg.style.opacity = bB / 100;
            this.bJg.style.filter = "alpha(opacity=" + bB + ")"
        } else {
            this.bJg.style.opacity = ""
        }
    },hideCover: function() {
        if (browser.ie && browser.version < 10) {
            this.bJg.style.visibility = "hidden"
        } else {
            this.bJg.style.opacity = 0
        }
    },showCoverForIE: function() {
        this.bJg.style.visibility = "visible"
    },resizewin: function(bYQ) {
        if (!bYQ) {
            this.setLyContMinHeight()
        }
        if (browser.ie6Compat) {
            var gl = document.documentElement || document.body;
            this.bJg.style.width = gl.clientWidth + "px";
            this.bJg.style.height = gl.clientHeight + "px";
            this.bTg.style.width = gl.clientWidth + "px";
            this.bTg.style.height = gl.clientHeight + "px";
            this.bPk.style.width = gl.clientWidth + "px";
            this.bPk.style.height = gl.clientHeight + "px";
            this.bPk.style.top = this.buw || 0 + "px"
        }
    },appendToParent: function(pa) {
        if (!this.Y)
            return;
        this.revertBody(pa)
    },revertBody: function(pa) {
        if (!this.dL || !this.Y)
            return;
        !pa ? this.dL.appendChild(this.Y) : this.dL.insertAdjacentElement("afterBegin", this.Y);
        this.lN = true
    },destroy: function() {
        if (browser.gecko && !!this.bLP) {
            utils.delEvent(document.body, "keydown", this.onKeyPress.A(this));
            this.bLP = false
        }
        if (!this.destroyed()) {
            utils.delClassName(this.bNJ, "a-show-do");
            if (!!this.bPl) {
                this.hideCover();
                this.doAnimate(true);
                window.setTimeout(this.recycleBody.A(this), 280)
            } else {
                this.recycleBody()
            }
        }
        if (!!this.cbAfterDestroy)
            this.cbAfterDestroy()
    },destroyed: function() {
        return !this.lN
    },recycleBody: function() {
        this.lN = false;
        utils.removeElementByEC(this.Y);
        this.bIq.innerHTML = "";
        this.recoverScroll()
    },recoverScroll: function(bHl) {
        utils.stopEvent(bHl);
        var dp = document.documentElement || document.body;
        if (this.buz != "hidden") {
            dp.style.overflowX = this.buz || ""
        }
        if (this.buA != "hidden") {
            dp.style.paddingRight = 0;
            dp.style.width = "";
            dp.style.overflowY = this.buA || "";
            document.documentElement.scrollTop = document.body.scrollTop = this.BS
        }
        this.czf = false
    }}
})();
(function() {
    var p = P("loft.m.newpublish.w");
    p.cyX = function() {
        var agent = navigator.userAgent.toLowerCase(), opera = window.opera, browser = {ie: !!window.ActiveXObject,opera: !!opera && opera.version,webkit: agent.indexOf(" applewebkit/") > -1,mac: agent.indexOf("macintosh") > -1,quirks: document.compatMode == "BackCompat"};
        browser.gecko = navigator.product == "Gecko" && !browser.webkit && !browser.opera;
        var version = 0;
        var kernelVersion = 0;
        if (browser.ie) {
            version = parseFloat(agent.match(/msie (\d+)/)[1]);
            kernelVersion = version;
            if (version >= 7) {
                B.dh = false
            }
        }
        if (browser.gecko) {
            var geckoRelease = agent.match(/rv:([\d\.]+)/);
            if (geckoRelease) {
                geckoRelease = geckoRelease[1].split(".");
                version = parseFloat(geckoRelease);
                kernelVersion = geckoRelease[0] * 1e4 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1
            }
        }
        if (/chrome\/(\d+\.\d)/i.test(agent)) {
            browser.chrome = +RegExp["$1"];
            version = browser.chrome
        }
        if (/(\d+\.\d)?(\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
            browser.safari = +(RegExp["$1"] || RegExp["$3"]);
            try {
                version = parseFloat(RegExp["$1"]) + parseFloat(RegExp["$2"]) * .1
            } catch (e) {
                version = browser.safari
            }
        }
        if (browser.opera) {
            version = parseFloat(opera.version());
            kernelVersion = version
        }
        if (browser.webkit) {
            kernelVersion = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1])
        }
        browser.version = version;
        browser.kernelVersion = kernelVersion;
        if (browser.gecko && browser.version >= 11 && agent.indexOf(" .net") > -1 && agent.lastIndexOf("like gecko") > -1) {
            browser.ie11plus = true;
            B.cEl = true
        }
        return browser
    }();
    p.cqC = function() {
        var bp = location.href;
        var coF = bp.indexOf("#");
        if (!!window.history && !!window.history.replaceState) {
            window.history.replaceState(null, "", bp.substring(0, coF))
        } else {
            if (!!location.hash)
                location.hash = ""
        }
    };
    p.cts = function() {
        var bp = location.href;
        var csQ = bp.indexOf("?");
        if (!!window.history && !!window.history.replaceState) {
            window.history.replaceState(null, "", bp.substring(0, csQ))
        } else {
            location.href = bp.substring(0, csQ)
        }
    };
    p.ckb = function() {
        var bMA = E.be("publishPostBar");
        if (!bMA)
            return;
        var bHk = bMA.getElementsByTagName("li") || [];
        var Q = 1;
        var bMz = bHk[Q++];
        var bMy = bHk[Q++];
        var bMx = bHk[Q++];
        var bMw = bHk[Q++];
        var bMv;
        var bMu;
        var bMt;
        var bMs;
        if (!!bMz)
            bMv = (bMz.getElementsByTagName("a") || [])[0];
        if (!!bMy)
            bMu = (bMy.getElementsByTagName("a") || [])[0];
        if (!!bMx)
            bMt = (bMx.getElementsByTagName("a") || [])[0];
        if (!!bMw)
            bMs = (bMw.getElementsByTagName("a") || [])[0];
        var bKs = [bMv, bMu, bMt, bMs];
        return bKs
    };
    p.czx = function() {
        if (window["__flash__removeCallback"])
            return;
        window["__flash__removeCallback"] = function(instance, name) {
            try {
                if (instance) {
                    instance[name] = null
                }
            } catch (flashEx) {
            }
        }
    };
    p.czC = function() {
        if (p.cyX.ie && p.cyX.version >= 10) {
            p.czx()
        }
    };
    p.ciU = function() {
        if (p.isAdvancedBrowser !== undefined && !U.co(p.isAdvancedBrowser, "undefined"))
            return p.isAdvancedBrowser;
        var mN = true;
        try {
            var clD = document.createElement("canvas");
            if (!clD.toBlob) {
                new Blob(["test"], {type: "text"})
            } else {
                var buf = new ArrayBuffer(10);
                var ui8a = new Uint8Array(buf, 0)
            }
            var cpL = clD.getContext("2d");
            var brG = new XMLHttpRequest;
            window.URL = window.URL || window.webkitURL;
            if (!cpL.drawImage || !clD.toDataURL || !atob || !window.URL || !window.URL.createObjectURL || !brG.upload || !window.localStorage) {
                mN = false
            }
        } catch (e) {
            mN = false
        }
        if (p.cyX.chrome) {
            if (p.cyX.version >= 17)
                mN = true
        } else if (p.cyX.ie) {
            mN = false
        } else if (p.cyX.safari) {
            if (p.cyX.version >= 4.04)
                mN = true
        }
        var bx = "noAdvancedBrowser";
        var bMb = 365 * 100;
        if (!!mN) {
            U.ru(bx, 0, null, bMb, "/")
        } else {
            U.ru(bx, 1, null, bMb, "/")
        }
        p.isAdvancedBrowser = mN;
        return p.isAdvancedBrowser
    };
    window.setTimeout(function() {
        p.ciU()
    }.A(this), 2e5)
})();
(function() {
    var p = P("loft.m.newpublish.w"), cut;
    p.cuP = C();
    cut = p.cuP.prototype;
    cut.bq = function(X, I) {
        this.lX = E.be(X);
        if (!this.lX)
            return;
        this.bHu(I)
    };
    cut.bHu = function(I) {
        I = I || O;
        this.bfZ = I.from;
        this.EO = I.to;
        this.jX = I.time || 200;
        this.qU = I.callback || F;
        this.bhN = this.EO - this.bfZ;
        this.fg = this.bfZ;
        this.cuK = I.bounce || this.EO * .1;
        if (this.cuK <= 0) {
            this.cuK = 0
        }
        this.cvx = this.bfZ;
        this.cuL = this.EO + this.cuK;
        this.cvw = this.cuL - this.cvx;
        this.cuM = this.jX;
        this.cuC = -2 * this.cvw / (this.cuM * this.cuM);
        this.cvv = -this.cuC * this.cuM
    };
    cut.JT = function(bg) {
        if (!this.lX)
            return;
        if (U.co(bg, "number") && bg >= 0) {
            this.lX.style.height = bg + "px"
        } else if (bg == "auto") {
            this.lX.style.height = bg
        }
    };
    cut.cuv = function() {
        var zV = new Date, bge = zV - this.sI;
        if (bge > this.jX || this.fg == this.EO) {
            this.cuy = window.clearTimeout(this.cuy);
            this.JT(this.EO);
            this.cvu()
        } else {
            var ig = this.cvv * bge + this.cuC * bge * bge / 2;
            if (ig <= 0)
                ig = .1;
            this.fg = this.bfZ + ig;
            if (this.fg >= this.EO) {
                this.fg = this.EO;
                this.cuy = window.clearTimeout(this.cuy);
                this.cuv()
            } else {
                this.JT(this.fg);
                this.cuy = window.clearTimeout(this.cuy);
                this.cuy = window.setTimeout(this.cuv.A(this), 5)
            }
        }
    };
    cut.cvu = function() {
        this.cvt = new Date;
        this.cuz = this.cuL;
        this.cuQ()
    };
    cut.cuQ = function() {
        var zV = new Date, bge = zV - this.cvt;
        if (this.cuz <= this.EO) {
            this.cuB = window.clearTimeout(this.cuB);
            this.JT(this.EO);
            this.lX.style.height = "auto";
            this.lX.style.overflow = "visible";
            this.lX.style.opacity = 1
        } else {
            var ig = this.cuC * bge * bge / 2;
            ig = ig / 3;
            if (ig >= 0)
                ig = -1;
            this.cuz = this.cuL + ig;
            if (this.cuz < this.EO)
                this.cuz = this.EO;
            this.JT(this.cuz);
            this.cuB = window.clearTimeout(this.cuB);
            this.cuB = window.setTimeout(this.cuQ.A(this), 3)
        }
    };
    cut.cvs = function(I) {
        if (!!I) {
            this.bHu(I)
        }
        if (p.cyX.ie && p.cyX.version < 7) {
            this.lX.style.height = "auto";
            this.lX.style.overflow = "visible";
            this.lX.style.opacity = 1;
            if (!!this.qU)
                this.qU.call(this);
            return
        }
        this.sI = new Date;
        this.JT(this.bfZ);
        this.lX.style.overflow = "hidden";
        this.lX.style.opacity = 0;
        this.cuv(this.bfZ, this.EO)
    };
    cut.cvr = function(I) {
        this.cuR = I.callback || F;
        this.lX.style.opacity = 0;
        window.setTimeout(function() {
            this.cvq = new Date;
            this.cuu = this.lX.clientHeight || this.EO;
            this.JT(this.cuu);
            this.lX.style.overflow = "hidden";
            this.cuS()
        }.A(this), 200)
    };
    cut.cuS = function() {
        var zV = new Date, bge = zV - this.cvq;
        if (this.cuu <= this.bfZ) {
            this.cuA = window.clearTimeout(this.cuA);
            this.JT(this.bfZ);
            if (!!this.cuR)
                this.cuR()
        } else {
            var ig = this.cuC * bge * bge / 2;
            ig = ig / 2;
            if (ig >= 0)
                ig = -1;
            this.cuu = this.cuu + ig;
            if (this.cuu < this.bfZ)
                this.cuu = this.bfZ;
            this.JT(this.cuu);
            this.cuA = window.clearTimeout(this.cuA);
            this.cuA = window.setTimeout(this.cuS.A(this), 5)
        }
    };
    cut.fD = function(I) {
        this.cvs(I)
    };
    cut.cvp = function(I) {
        this.cvr(I)
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), cjb, cpK;
    p.cjC = C();
    cjb = p.cjC.bi(P(N.ut).gY);
    cpK = p.cjC.bw;
    p.cjC.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    p.cjC.ckX = function(I) {
        var hk = this.YV(I);
        if (!!hk) {
            hk.ckX(I)
        } else {
        }
        return hk
    };
    cjb.bq = function(I) {
        this.bHq();
        I = I || {};
        this.clE = I.ue_cfg_develop || false;
        this.ckW = I.ue_js_version || "";
        this.ciI = {};
        this.bz(I);
        this.cpJ()
    };
    cjb.cpJ = function() {
        if (!!this.cpI)
            return;
        this.cpI = true;
        window.UEDITOR_HOME_URL = "";
        var cpH = "http://l.bst.126.net/rsc/js/ueditor/editor_config.js?v=" + this.ckW;
        J.Iv(cpH, {charset: "utf-8",onload: this.cpG.A(this)});
        var clF;
        if (!!this.clE) {
            window.ueditorloadmode = "syncload";
            clF = "http://l.bst.126.net/rsc/js/ueditor/uesrc/editor_api.js"
        } else {
            clF = "http://l.bst.126.net/rsc/js/ueditor/output/r/ueditor_min.js?v=" + this.ckW
        }
        var cpF = {charset: "utf-8",onload: this.cpE.A(this)};
        J.Iv(clF, cpF)
    };
    cjb.bz = function(I) {
        I = I || {};
        if (!!I.parent) {
            I.parent = I.parent.id || I.parent
        }
        if (!!I.ongenueditor) {
            this.bHn("ongenueditor", I.ongenueditor || F)
        }
    };
    cjb.cpG = function() {
        this.cpD = true;
        this.cpC()
    };
    cjb.cpE = function() {
        this.cpB = true
    };
    cjb.cpC = function() {
        if (!!window.UEDITOR_CONFIG) {
            window.UEDITOR_CONFIG.focus = false;
            if (/opera\/(.*?)\s/i.test(window.navigator.userAgent)) {
                window.UEDITOR_CONFIG.initialStyle += "body{min-height:260px;padding:1px 8px 8px 8px;margin:0;*padding:0;*margin:8px;}"
            }
        }
    };
    cjb.ckX = function(I) {
        if (!I || !I.parent) {
            loft.x.th("ueditormanager.js: 缺少parent，不能实例化编辑器");
            return
        }
        this.clG = I.minFrameHeight || "";
        this.clH = I.maxFrameHeight || "";
        this.clI = I.autoHeightEnabled || false;
        if (I.forceNew) {
            if (!!this.ciI[I.parent] && !!this.ciI[I.parent].uEditor) {
                this.ciI[I.parent].uEditor.destroy();
                this.ciI[I.parent] = null
            }
        }
        if (!!this.ciI[I.parent] && !!this.ciI[I.parent].uEditor) {
            this.cmL(I.parent, this.ciI[I.parent].uEditor)
        } else {
            this.ciI[I.parent] = {state: "gening",timer: null,delay: 10,uEditor: null};
            this.cmM(I)
        }
    };
    cjb.bYG = function(tF, clJ, clK, clL) {
        this.clG = clJ || this.clG;
        this.clH = clK || this.clH;
        this.clI = clL || this.clI;
        if (!!tF) {
            this.cpA(tF)
        }
    };
    cjb.cpA = function(tF, clJ, clK, clL) {
        if (!tF)
            return;
        clJ = clJ || this.clG;
        clK = clK || this.clH;
        clL = clL || this.clI;
        if (!!clL) {
            tF.enableAutoHeight && tF.enableAutoHeight(clJ, clK)
        } else {
            tF.disableAutoHeight && tF.disableAutoHeight()
        }
    };
    cjb.cmL = function(bl, tF) {
        if (!!tF) {
            try {
                tF.render(bl);
                this.cpA(tF);
                this.czw(tF)
            } catch (e) {
            }
        }
    };
    cjb.czw = function(tF) {
        if (p.cyX.ie && p.cyX.version >= 10 && document.documentMode >= 0 && !!tF) {
            try {
                V.iJ(tF.document.documentElement, "click", this.czg.A(this, tF));
                V.bHn(tF.document.documentElement, "click", this.czg.A(this, tF))
            } catch (e) {
            }
        }
    };
    cjb.czg = function(tF) {
        if (tF)
            tF.focus()
    };
    cjb.cmM = function(I) {
        var bl = I.parent;
        if (!!window.baidu && !!window.baidu.editor && !!window.baidu.editor.ui && !!window.baidu.editor.ui.Editor && !!this.cpD && !!this.cpB) {
            try {
                var uEditor_Instance = new baidu.editor.ui.Editor;
                this.cmL(bl, uEditor_Instance);
                V.bHn(uEditor_Instance.document, "dragenter", function() {
                }.A(this));
                V.bHn(uEditor_Instance.document, "dragover", function(bHl) {
                    V.bb(bHl)
                }.A(this));
                V.bHn(uEditor_Instance.document, "drop", function(bHl) {
                    V.bb(bHl)
                }.A(this))
            } catch (e) {
                this.bh("ongenueditor", {parent: bl,code: -1});
                this.ciI[bl].state = "error"
            }
            if (!!uEditor_Instance) {
                this.bh("ongenueditor", {parent: bl,uEditorInstance: uEditor_Instance});
                this.ciI[bl].state = "ok";
                this.ciI[bl].uEditor = uEditor_Instance
            } else {
                this.bh("ongenueditor", {parent: bl,code: -1});
                this.ciI[bl].state = "error"
            }
        } else {
            this.ciI[bl].state = "retry";
            if (this.ciI[bl].delay < 3e5) {
                if (!!this.ciI[bl].timer)
                    this.ciI[bl].timer = window.clearTimeout(this.ciI[bl].timer);
                this.ciI[bl].timer = window.setTimeout(this.cmM.A(this, I), this.ciI[bl].delay);
                this.ciI[bl].delay = (this.ciI[bl].delay + 500) * 2
            } else {
                this.ciI[bl].state = "timeout"
            }
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), wS, Xx, le, cl = "ui-" + U.cA();
    var Xz = 2e3;
    var ckT = "js-noSelect";
    var HL = "js-showlist";
    var cuc = "js-upperlist";
    var cue = "js-nipple-hover";
    var XB = "js_selectListTag";
    var cuf = "js_selected_option";
    var cmP = "js-noDownListWhenOne";
    P(N.ui).fx("#<uispace>{position:relative;z-index:16;float:left;background-color:#fff;}#<uispace>.js-showlist{z-index:1600;}*[hidefocus]{outline:none;}#<uispace> .clearfix{zoom:1;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .ztxt{float:left;height:25px;line-height:25px;max-width:191px;font-size:16px;color:#777;cursor:pointer;}#<uispace> .zdwn{float:left;width:0;height:0;overflow:hidden;margin:10px;border-width:5px 5px 0 5px;border-style:solid;border-color:#aaa transparent transparent transparent;}#<uispace> .zlst{visibility:hidden;position:absolute;top:30px;left:-40px;}#<uispace> .zlst .case{width:254px;max-height:" + Xz + 'px;overflow:auto;overflow-x:hidden;border:1px solid #c2c2c2;background-color:#fff;}#<uispace> .zlst .nipple{position:absolute;top:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #c2c2c2;/*border-color:transparent;*/border-image:none;}#<uispace> .zlst .nipple:after{content:"";position:absolute;top:1px;left:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #fff;border-image:none;}#<uispace> .zlst .js-nipple-hover.nipple:after{border-bottom-color:#999;}#<uispace> .zlst.js-upperlist .nipple{top:auto;bottom:-9px;border-width:9px 9px 0;border-color:#c2c2c2 transparent transparent;}#<uispace> .zlst.js-upperlist .nipple:after{top:auto;bottom:1px;border-width:9px 9px 0;border-color:#fff transparent transparent;}#<uispace> .zlst.js-upperlist .js-nipple-hover.nipple:after{border-top-color:#999;border-bottom-color:transparent;}#<uispace> .zlst .zitm{padding:0 5px 0 40px;height:36px;line-height:36px;color:#444;font-size:16px;cursor:pointer;}#<uispace> .zlst .zitm:hover,#<uispace> .zlst .zitem.js-zhvr-910{color:#fff;background-color:#999;}#<uispace> .noSelect, #<uispace> .noSelect:hover{background-position:-230px -482px;}#<uispace>.js-noDownListWhenOne .zdwn,#<uispace>.js-noDownListWhenOne .zlst{display:none;}#<uispace>.js-noDownListWhenOne .ztxt{cursor:default;}#<uispace>.js-noSelect .ztxt,#<uispace>.js-noSelect .zdwn{cursor:default;}', cl);
    p.sC = C();
    wS = p.sC.bi(P(N.ut).fc, true);
    Xx = p.sC.bw;
    wS.bq = function() {
        this.bHq();
        this.Y = document.cloneElement("div", "zitm thide");
        E.fy(this.Y, "js-zhvr-910");
        V.bHn(this.Y, "click", this.rF.A(this))
    };
    wS.bHu = function(I) {
        I = I || O;
        this.Hx = I.isTagSelect || false;
        this.Hw = I.isBlogSelect || false;
        this.bHn("onclick", I.onclick || F)
    };
    wS.ce = function(bHm) {
        this.bHp = bHm || O;
        var bg = this.bHp.t || this.bHp.n || this.bHp.v || " ";
        this.Y.title = bg;
        if (!!this.Hx) {
            if (this.bHp.t == "使用过的标签" && this.bHp.v == "-1") {
                this.Y.style.display = "none"
            } else {
                this.Y.innerHTML = '<a href="#"><i>' + U.ew(bg) + "</i></a>"
            }
        } else if (!!this.Hw) {
            if (this.bHp.t == "博客名称" && this.bHp.n == "博客名称" && this.bHp.v == "-1") {
                this.Y.style.display = "none"
            } else {
                this.Y.innerText = bg
            }
        } else {
            this.Y.innerText = bg
        }
    };
    wS.hY = function() {
        return this.bHp
    };
    wS.rF = function(bHl) {
        this.bh("onclick", this.bHp)
    };
    wS.cK = function() {
        this.Y.innerHTML = "";
        this.Y.style.display = "";
        this.cmQ();
        this.cpz();
        Xx.cK.apply(this)
    };
    wS.cpy = function() {
        E.ba(this.Y, cuf)
    };
    wS.cmQ = function() {
        E.bf(this.Y, cuf)
    };
    wS.clM = function(ca, cqS) {
        var cul = function(cqS) {
            ca("mouseout", cqS)
        }.A(this, cqS);
        var cuk = function(cqS) {
            ca("mouseover", cqS)
        }.A(this, cqS);
        V.bHn(this.Y, "mouseout", cul);
        V.bHn(this.Y, "mouseover", cuk)
    };
    wS.cpz = function() {
        V.bLb(this.Y, "mouseout");
        V.bLb(this.Y, "mouseover")
    };
    p.jv = C();
    le = p.jv.bi(P(N.ui).ga, true);
    le.bq = function(bl, I) {
        this.eL = {onclick: this.DD.A(this)};
        this.bHq(bl, I)
    };
    le.bz = function(I) {
        I = I || O;
        this.Hx = I.isTagSelect || false;
        this.eL.isTagSelect = this.Hx;
        this.Hw = I.isBlogSelect || false;
        this.eL.isBlogSelect = this.Hw;
        this.Ho = I.items || [];
        this.bmB = I.showAvatar || false;
        this.XK = I.noSelect || false;
        this.cpx = I.noDownListWhenOne || false;
        p.jv.bw.bz.call(this, I);
        this.bHn("onchange", I.onchange || F);
        this.XL(I.items);
        this.lE(I.index);
        this.XM = I.zIndex;
        if (this.XM !== undefined) {
            this.Y.style.zIndex = this.XM;
            this.Y.setAttribute("bak_zIndex", this.XM)
        }
        if (!this.XK) {
            E.bf(this.XN, "noSelect");
            E.bf(this.Y, ckT)
        } else {
            E.ba(this.XN, "noSelect");
            E.ba(this.Y, ckT)
        }
        this.bmA = I.noHideListIfListShowed || false;
        this.bHn("onshowdownlist", I.onshowdownlist || F);
        this.bHn("onhidedownlist", I.onhidedownlist || F)
    };
    le.cK = function() {
        p.jv.bw.cK.call(this);
        this.cT = p.sC.db(this.cT)
    };
    le.XL = function(cf) {
        if (!!this.cpx && (!cf || cf.length <= 1)) {
            E.ba(this.Y, cmP)
        } else {
            E.bf(this.Y, cmP)
        }
        p.sC.db(this.cT);
        if (!!this.Hx) {
            if (!cf || cf.length <= 1) {
                this.bU.innerHTML = "使用过的标签";
                this.fS.innerHTML = '<div style="height:60px;line-height:60px;font-size:12px;color:#888;text-align:center;">暂未使用标签</div>'
            } else {
                this.fS.innerHTML = "";
                this.cT = p.sC.bG(cf, this.fS, this.eL)
            }
        } else if (!!this.Hw) {
            if (!cf || cf.length <= 1) {
                this.bU.innerHTML = "无其他可选博客";
                this.fS.innerHTML = '<div style="height:60px;line-height:60px;font-size:12px;color:#888;text-align:center;">无其他可选博客</div>'
            } else {
                this.fS.innerHTML = "";
                this.cT = p.sC.bG(cf, this.fS, this.eL)
            }
        } else {
            this.cT = p.sC.bG(cf, this.fS, this.eL)
        }
        if (!!this.cT && this.cT.length > 0) {
            if (!!this.cT[0]) {
                this.cT[0].clM(this.clP.A(this))
            }
        }
    };
    le.clP = function(by, cqS) {
        if (!!cqS && E.cr(this.ckJ, cuc) || !cqS && !E.cr(this.ckJ, cuc)) {
            if (by == "mouseover") {
                E.ba(this.ckk, cue)
            } else {
                E.bf(this.ckk, cue)
            }
        }
    };
    le.lE = function(Q) {
        if (!this.cT)
            return;
        var bo = this.cT[Q || 0];
        if (!bo)
            return;
        this.ckl = Q || 0;
        this.DD(bo.hY(), true)
    };
    le.cU = function() {
        return cl
    };
    le.cM = function() {
        return '<div class="ztxt thide">&nbsp;</div><a hidefocus="true" href="#" class="zdwn">&#8711;</a><div class="zlst ' + XB + '"><span class="nipple" style="left:-9999px;"></span><div class="case"></div></div>'
    };
    le.cc = function() {
        var bHk = E.dE(this.Y);
        this.bU = bHk[0];
        this.XN = bHk[1];
        this.ckJ = bHk[2];
        bHk = E.dE(this.ckJ);
        this.ckk = bHk[0];
        this.fS = bHk[1];
        E.bqd(this.ckJ, Xz);
        var iA = this.bmz.A(this);
        V.bHn(this.Y, "click", iA);
        var cmT = function(bHl) {
            V.bb(bHl)
        }.A(this);
        V.bHn(this.fS, "click", cmT);
        V.bHn(this.ckk, "click", cmT);
        V.bHn(document, "click", this.Hl.A(this))
    };
    le.bmz = function(bHl) {
        V.bb(bHl);
        if (!this.XK) {
            if (!E.cr(this.Y, HL)) {
                this.bmy();
                this.clQ();
                E.ba(this.Y, HL);
                this.Y.style.zIndex = "";
                this.cub(cuc);
                this.ckJ.style.visibility = "visible";
                this.bh("onshowdownlist")
            } else {
                if (!this.bmA)
                    this.Hl()
            }
        }
    };
    le.cub = function(cnn) {
        if (!!cnn && E.cr(this.ckJ, cnn)) {
            E.bf(this.ckJ, cnn)
        }
    };
    le.clQ = function() {
        var clR = this.Y.clientWidth || 30;
        this.ckk.style.left = clR + 16 + "px"
    };
    le.bmy = function() {
        var bHk = E.bj(document.body, XB) || [];
        for (var i = 0; i < bHk.length; i++) {
            if (!!bHk[i] && !!bHk[i].parentNode) {
                bHk[i].style.visibility = "hidden";
                E.bf(bHk[i].parentNode, HL);
                var ckm = this.Y.getAttribute("bak_zIndex");
                if (ckm !== undefined) {
                    this.Y.style.zIndex = ckm
                }
            }
        }
    };
    le.Hl = function() {
        var cpw = this.ckJ.style.visibility;
        this.ckJ.style.visibility = "hidden";
        E.bf(this.Y, HL);
        if (this.XM !== undefined) {
            this.Y.style.zIndex = this.XM
        }
        if (cpw != "hidden") {
            this.bh("onhidedownlist")
        }
    };
    le.DD = function(bHm, clS) {
        if (!bHm)
            return;
        if (this.bmB) {
            this.bU.innerHTML = '<img src="' + (bHm.imgurl || bmC) + '" /><span class="thide">' + U.ew(bHm.t || bHm.n || bHm.v || " ") + "</span>"
        } else {
            this.bU.innerHTML = U.ew(bHm.t || bHm.n || bHm.v || " ")
        }
        this.fg = bHm;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHm.v) {
                Q = i;
                break
            }
        }
        this.clT(this.ckl, Q);
        this.ckl = Q;
        this.Hl();
        this.bh("onchange", bHm.v || bHm.n || bHm.t || "", Q, bHm, clS)
    };
    le.clT = function(bGU, bjL) {
        if (!!this.cT) {
            if (!!this.cT[bGU] && bGU != bjL)
                this.cT[bGU].cmQ();
            if (!!this.cT[bjL])
                this.cT[bjL].cpy()
        }
    };
    le.cF = function() {
        return this.fg
    };
    le.bSH = function(caG) {
        this.XK = caG || false;
        if (!this.XK) {
            E.bf(this.XN, "noSelect");
            E.bf(this.Y, ckT)
        } else {
            E.ba(this.XN, "noSelect");
            E.ba(this.Y, ckT)
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), eI, Zd, cl = "ui-" + U.cA(), Ze = "ui-" + U.cA();
    var Al = 20;
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;padding:0 40px 0 10px;border-style:solid;border-color:#dfdfdf;border-width:0 1px 1px 1px;color:#222;/*background:#fff url("http://l.bst.126.net/rsc/img/shadow-in.png") no-repeat;*/}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .f-iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .tokens{line-height:20px;padding:10px 0 10px 24px;}#<uispace> .tokens .token{float:left;height:20px;line-height:20px;padding:0 1px;margin-right:8px;color:#aaa;font-size:12px;white-space:nowrap;}#<uispace> .tokens .token:hover{text-decoration:line-through;cursor:pointer;}#<uispace> .tokens .token:before{content: "#";}#<uispace> .iptwrap{position:relative;float:left;}#<uispace> .iptwrap .taginput{position:relative;/*left:-1px;*/z-index:2;min-width:60px;height:20px;line-height:20px;padding:0;margin:0;background-color:transparent;color:#333;border:0;outline:0;}#<uispace> .iptwrap .hiddenSpan{position:absolute;font-size:12px;visibility:hidden;}#<uispace> .iptwrap label{display:block;position:absolute;left:2px;top:0;z-index:1;width:240px;height:19px;line-height:19px;color:#ccc;font-size:14px;overflow:hidden;}#<uispace> .iptwrap .js-hidetips{display:none;}#<uispace> .taguseful{position:absolute;right:9px;top:10px;width:20px;height:20px;text-indent:-9999px;background:url("http://l.bst.126.net/rsc/img/newpublish/helpicon.png") 1px 1px no-repeat;}#<uispace> .taguseful:hover{background-position:1px -41px;}#<uispace> .usedtagarea{visibility:hidden;overflow:hidden;height:0;}#<uispace> .usedtagarea{transition:height 0.2s linear;-webkit-transition:height 0.2s linear;-moz-transition:height 0.2s linear;-o-transition:height 0.2s linear;}', cl);
    P(N.ui).fx("#<uispace>{padding:15px 0 8px 0;border-top:1px solid #eee;}#<uispace> .token2{float:left;height:22px;line-height:22px;padding:0 5px;margin:0 6px 6px 0;color:#fff;font-size:12px;white-space:nowrap;background-color:#aaa;cursor:pointer;}#<uispace> .token2{border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-o-border-radius:2px;}#<uispace> .token2:hover{background-color:#888;}", Ze);
    p.eG = C();
    eI = p.eG.bi(P(N.ui).ga, true);
    Zd = p.eG.bw;
    eI.bq = function(bl, I) {
        this.dL = bl;
        I = I || {};
        this.Al = I.maxCharsPerTag || Al;
        this.bHq(bl, I);
        V.bHn(this.Y, "click", this.bqx.A(this));
        V.bHn(this.gm, "blur", this.bqv.A(this));
        V.bHn(this.gm, "keydown", this.bqu.A(this));
        V.bHn(this.gm, "input", this.kF.A(this));
        V.bHn(this.gm, "propertychange", this.kF.A(this))
    };
    eI.cU = function() {
        return cl + " tageditor"
    };
    eI.cM = function() {
        return '<div class="clearfix tokens ztag"><div class="iptwrap ztag"><input maxlength="' + this.Al + '" class="taginput ztag" /><label class="ztag">添加相关标签，用逗号或回车分隔</label></div></div><div class="usedtagarea ztag"></div><a class="taguseful" target="_blank" href="http://www.lofter.com/help#q=为日志添加标签有什么作用？" title="为日志添加标签有什么作用？">为日志添加标签有什么作用？</a>'
    };
    eI.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        this.pX = bHk[0];
        this.cmU = bHk[1];
        this.gm = bHk[2];
        this.bgR = bHk[3];
        this.clU = bHk[4]
    };
    eI.bz = function(I) {
        I = I || O;
        Zd.bz.call(this);
        this.bHn("onaddtag", I.onaddtag || F);
        this.bHn("ondeletetag", I.ondeletetag || F);
        this.bHn("onexceedmaxtagnum", I.onexceedmaxtagnum || F);
        this.bHn("onexceedmaxcharpertag", I.onexceedmaxcharpertag || F);
        this.bHn("ontageditorfocus", I.ontageditorfocus || F);
        if (I.tags)
            this.nI(I.tags);
        this.vc = I.maxTagNum || 10
    };
    eI.mM = function() {
        this.oq = true;
        this.gm.disabled = true
    };
    eI.yG = function() {
        this.oq = false;
        this.gm.disabled = false
    };
    eI.qw = function(bg) {
        var iz = U.bA(bg || this.gm.value);
        if (!iz) {
            return
        }
        if (iz.length > this.Al) {
            this.bh("onexceedmaxcharpertag", this.Al);
            return
        }
        if (!!this.vc && this.vc > 0) {
            var bHk = E.dE(this.pX);
            if (!!bHk && bHk.length > this.vc) {
                this.gm.value = "";
                this.bh("onexceedmaxtagnum", this.vc);
                return
            }
        }
        this.cmV(iz);
        this.bh("onaddtag", iz);
        this.gm.style.width = "60px"
    };
    eI.cmV = function(iz) {
        var bk = document.cloneElement("span", "token");
        bk.innerText = iz;
        V.bHn(bk, "click", this.ZO.A(this, bk, iz));
        this.gm.value = "";
        this.cmU.insertAdjacentElement("beforeBegin", bk);
        this.cro()
    };
    eI.nI = function(ck) {
        this.FJ();
        if (!ck || ck.length < 1) {
            return
        }
        if (U.co(ck, "String")) {
            ck = ck.split(",")
        }
        var bk;
        for (var i = 0; i < ck.length; i++) {
            ck[i] = U.bA(ck[i]);
            if (!!ck[i]) {
                this.cmV(ck[i])
            }
        }
    };
    eI.ZI = function(bg) {
        if (!bg)
            return;
        this.qw(bg)
    };
    eI.FJ = function() {
        var bHk = E.dE(this.pX) || [];
        for (var i = 0; i < bHk.length - 1; i++) {
            E.hE(bHk[i])
        }
        this.cro()
    };
    eI.ne = function() {
        var tD;
        var bQ = [];
        var bHk = E.dE(this.pX) || [];
        for (var i = 0; i < bHk.length - 1; i++) {
            if (!!bHk[i] && !!bHk[i].innerText) {
                bQ.push(bHk[i].innerText)
            }
        }
        return bQ
    };
    eI.ZO = function(bL, iz) {
        if (this.oq)
            return;
        iz = iz || "";
        E.hE(bL);
        this.bh("ondeletetag", iz);
        this.cro()
    };
    eI.bqx = function(bHl) {
        if (this.oq)
            return;
        this.cua = true;
        this.ctZ();
        V.qK(bHl);
        this.gm.focus();
        this.bh("ontageditorfocus")
    };
    eI.bqv = function(bHl) {
        V.bb(bHl);
        this.qw();
        this.cua = false;
        this.ctZ()
    };
    eI.ctZ = function() {
        if (!!this.ctY)
            this.ctY = window.clearTimeout(this.ctY);
        this.ctY = window.setTimeout(this.cuj.A(this), 150)
    };
    eI.cuj = function() {
        if (this.cua) {
            var eT = 0;
            if (!!this.clo) {
                eT = this.clo.clientHeight || 0
            }
            if (eT > 0) {
                this.clU.style.cssText = "visibility:visible;height:" + eT + "px"
            }
        } else {
            this.clU.style.cssText = ""
        }
    };
    eI.bqu = function(bHl) {
        if (bHl.keyCode == 13) {
            V.bb(bHl);
            this.gm.value = U.bA(this.gm.value);
            if (!!this.gm.value) {
                this.qw()
            }
        } else if (bHl.keyCode == 8) {
            if (!this.gm.value) {
                var bHk = E.dE(this.pX);
                if (!!bHk && !!bHk[bHk.length - 2]) {
                    V.bb(bHl);
                    var iz = bHk[bHk.length - 2].innerText || "";
                    this.ZO(bHk[bHk.length - 2], iz)
                }
            }
        }
    };
    eI.kF = function(bHl) {
        var bg = this.gm.value;
        var dz = this.cpv(bg);
        if (dz + 10 > 60) {
            this.gm.style.width = dz + 10 + "px"
        } else {
            this.gm.style.width = "60px"
        }
        if (!!bg) {
            bg = bg.replace(/，/gi, ",");
            bg = bg.replace(/;/gi, ",");
            bg = bg.replace(/；/gi, ",");
            var Q = bg.indexOf(",");
            if (Q > 0) {
                bg = U.bA(bg.substring(0, Q));
                if (!!bg) {
                    this.qw(bg)
                }
            } else if (Q == 0) {
                this.gm.value = ""
            }
        }
        this.cro()
    };
    eI.cpv = function(bg) {
        if (!this.ckI) {
            this.ckI = document.cloneElement("span", "hiddenSpan");
            this.cmU.insertAdjacentElement("beforeEnd", this.ckI)
        }
        this.ckI.innerText = bg || "";
        return this.ckI.clientWidth || this.ckI.offsettWidth || 0
    };
    eI.qb = function(bl, ck, ca) {
        if (!bl)
            return;
        if (U.co(ck, "String")) {
            ck = U.bA(ck);
            if (!ck)
                return;
            ck = ck.split(",")
        }
        if (!ck || ck.length < 1) {
            return
        }
        ca = ca || this.bqt.A(this);
        if (!this.clo) {
            this.clo = document.cloneElement("div", Ze + " clearfix usedTagWrap")
        } else {
            this.clo.innerHTML = ""
        }
        var bk;
        for (var i = 0; i < ck.length; i++) {
            ck[i] = U.bA(ck[i]);
            if (!!ck[i]) {
                this.cpu(this.clo, ck[i], ca)
            }
        }
        bl.insertAdjacentElement("beforeEnd", this.clo)
    };
    eI.cpu = function(bl, iz, ca) {
        var bk = document.cloneElement("span", "token2");
        bk.innerText = iz;
        V.bHn(bk, "click", function(iz) {
            ca(iz)
        }.A(this, iz));
        bl.insertAdjacentElement("beforeEnd", bk)
    };
    eI.bqt = function(iz) {
        this.qw(iz)
    };
    eI.cnb = function(ck) {
        if (!!ck) {
            this.qb(this.clU, ck)
        } else {
            this.cua = false;
            this.ctZ()
        }
    };
    eI.cro = function() {
        var bQ = this.ne();
        if (!!this.gm.value || !!bQ && bQ.length > 0) {
            this.bYK()
        } else {
            this.bTS()
        }
    };
    eI.bTS = function() {
        E.bf(this.bgR, "js-hidetips")
    };
    eI.bYK = function() {
        E.ba(this.bgR, "js-hidetips")
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), JF, bgp, us, bgm;
    var bgl = "ccui-" + U.cA();
    var bgi = "js-moreinfoitem";
    var KU = {0: "ccicon-0",1: "ccicon-1",2: "ccicon-2",3: "ccicon-3",4: "ccicon-4",5: "ccicon-5",6: "ccicon-6"};
    var bpp = {0: "不使用原创授权",1: "署名-非商业性使用-禁止演绎",2: "署名-非商业性使用-相同方式共享",3: "署名-非商业性使用",4: "署名-禁止演绎",5: "署名-相同方式共享",6: "署名"};
    P(N.ui).fx("#<uispace>{}#<uispace> .ztxt{width:auto;height:30px;line-height:30px;margin-right:-5px;color:#999;font-size:14px;}#<uispace> .zdwn{margin:13px 10px 12px 10px;}#<uispace> .zlst{display:none;left:-31px;width:292px;height:224px;max-height:none;background:#fff;}#<uispace>.js-showlist .zlst{display:block;}#<uispace> .zlst.js-upperlist{top:auto;bottom:36px;}#<uispace> .ccicon{background:url(/rsc/img/ccommons/cc-icon24.png?004) 0 0 no-repeat;_background:url(/rsc/img/ccommons/cc-icon8.png?004) 0 0 no-repeat;}#<uispace> .ccicon-0{width:20px;background-position:-10px -5px;}#<uispace> .ccicon-1{width:64px;background-position:-10px -30px;}#<uispace> .ccicon-2{width:64px;background-position:-10px -57px;}#<uispace> .ccicon-3{width:42px;background-position:-10px -85px;}#<uispace> .ccicon-4{width:42px;background-position:-10px -113px;}#<uispace> .ccicon-5{width:42px;background-position:-10px -141px;}#<uispace> .ccicon-6{width:20px;background-position:-10px -169px;}#<uispace> .ztxt .ccicon{opacity:0.6;}#<uispace> .zlst .case{width:292px;}#<uispace> .zlst .zitm{height:28px;line-height:28px;padding:0 10px 0 30px;color:#444;}#<uispace> .zitm .ccicon{float:left;width:72px;height:100%;}#<uispace> .zitm .cctitle{float:left;width:180px;height:100%;overflow:hidden;font-size:12px;}#<uispace> .zlst .js-moreinfoitem{position:relative;zoom:1;cursor:default;}#<uispace> .js-moreinfoitem .moreinfo{position:absolute;left:0;top:0;width:292px;height:28px;background:#fff;}#<uispace> .js-moreinfoitem .moreinfo a{position:absolute;right:10px;top:0;height:16px;line-height:16px;font-size:10px;color:#666;text-decoration:underline;}#<uispace> .zlst .zitm:hover .ccicon-0,#<uispace> .zlst .item.js-zhvr-910 .ccicon-0{background-position:-10px -331px;}#<uispace> .zlst .zitm:hover .ccicon-1,#<uispace> .zlst .item.js-zhvr-910 .ccicon-1{background-position:-10px -356px;}#<uispace> .zlst .zitm:hover .ccicon-2,#<uispace> .zlst .item.js-zhvr-910 .ccicon-2{background-position:-10px -383px;}#<uispace> .zlst .zitm:hover .ccicon-3,#<uispace> .zlst .item.js-zhvr-910 .ccicon-3{background-position:-10px -411px;}#<uispace> .zlst .zitm:hover .ccicon-4,#<uispace> .zlst .item.js-zhvr-910 .ccicon-4{background-position:-10px -439px;}#<uispace> .zlst .zitm:hover .ccicon-5,#<uispace> .zlst .item.js-zhvr-910 .ccicon-5{background-position:-10px -467px;}#<uispace> .zlst .zitm:hover .ccicon-6,#<uispace> .zlst .item.js-zhvr-910 .ccicon-6{background-position:-10px -495px;}#<uispace>.js-noSelect .zdwn{visibility:hidden;}", bgl);
    p.Dt = C();
    JF = p.Dt.bi(p.sC, true);
    bgp = p.Dt.bw;
    JF.bq = function() {
        this.bHq()
    };
    JF.ce = function(bHm) {
        this.bHp = bHm || O;
        if (this.bHp.v != "7") {
            this.Y.innerHTML = '<span class="ccicon ' + KU[this.bHp.v] + '">&nbsp;</span><span class="cctitle">' + bpp[this.bHp.v] + "</span>"
        } else {
            E.ba(this.Y, bgi);
            this.Y.innerHTML = '<div class="moreinfo"><a class="moreinfolinlk" target="_blank" href="' + this.bHp.n + '">' + this.bHp.t + "</a></div>";
            this.beX = (E.bj(this.Y, "moreinfolinlk") || [])[0];
            if (!!this.beX) {
                V.bHn(this.beX, "click", function(bHl) {
                    V.qK(bHl)
                }.A(this))
            }
        }
    };
    JF.cK = function() {
        E.bf(this.Y, bgi);
        bgp.cK.apply(this)
    };
    p.vG = C();
    us = p.vG.bi(p.jv, true);
    bgm = p.vG.bw;
    us.bq = function(bl, I) {
        this.bHq(bl, I)
    };
    us.bz = function(I) {
        I = I || O;
        bgm.bz.call(this, I);
        if (this.XK) {
            this.Y.title = I.hoverTips
        } else {
            this.Y.title = ""
        }
    };
    us.cU = function() {
        var bpt = bgm.cU.apply(this);
        return bgl + " " + bpt
    };
    us.cK = function() {
        p.vG.bw.cK.call(this);
        this.cT = p.Dt.db(this.cT)
    };
    us.XL = function(cf) {
        p.Dt.db(this.cT);
        this.cT = p.Dt.bG(cf, this.fS, this.eL);
        if (!!this.cT && this.cT.length > 0) {
            if (!!this.cT[0]) {
                this.cT[0].clM(this.clP.A(this))
            }
        }
    };
    us.lE = function(Q) {
        if (!!Q && Q == -1) {
            this.DD();
            return
        }
        if (!this.cT)
            return;
        var bo = this.cT[Q || 0];
        if (!bo)
            return;
        this.DD(bo.hY())
    };
    us.DD = function(bHm) {
        if (!bHm) {
            this.bU.innerHTML = "授权方式";
            return
        }
        if (!!KU[bHm.v]) {
            this.bU.innerHTML = '<div class="ccicon ' + KU[bHm.v] + '">&nbsp;</div>'
        } else {
            this.bU.innerHTML = "授权方式"
        }
        this.fg = bHm;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHm.v) {
                Q = i;
                break
            }
        }
        this.clT(this.ckl, Q);
        this.ckl = Q;
        this.Hl();
        this.bh("onchange", bHm.v || bHm.n || bHm.t || "", Q)
    };
    us.clQ = function() {
        var clR = this.Y.clientWidth || 30;
        this.ckk.style.left = clR + 7 + "px"
    };
    us.cub = function(cnn) {
        if (!cnn)
            return;
        var dp = document.documentElement || document.body, FW = document.body || document.documentElement;
        var ctX = dp.scrollTop || FW.scrollTop || 0;
        var ctW = ctX + dp.clientHeight;
        var Zt = E.jO(this.Y);
        var bCp = Zt + this.Y.clientHeight;
        if (this.Y.clientHeight <= dp.clientHeight) {
            var ig = 10;
            var cqU = this.ckJ.clientHeight;
            if (ctW - bCp > this.ckJ.clientHeight + ig || Zt < cqU + ig) {
                E.bf(this.ckJ, cnn)
            } else {
                E.ba(this.ckJ, cnn)
            }
        } else {
            E.bf(this.ckJ, cnn)
        }
    }
})();
(function() {
    var p = P("loft.w"), bHJ, cl = "ui-" + U.cA(), bUq = ["日", "一", "二", "三", "四", "五", "六"], cbz = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], cby = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
    var bUs = /^\d+$/;
    var bQo = -101;
    var bUt = 101;
    P(N.ui).fx('#<uispace>{width:190px;font-size:12px;text-align:center;border:1px solid #c0c0c0;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .simpleBar,#<uispace> .simpleBar a{background:url("http://l.bst.126.net/rsc/img/calendar/calendaricon8.png") -9999px -9999px no-repeat;}#<uispace> .complexBar{display:none;height:26px;line-height:26px;padding:0 3px;cursor:default;background-color:#ccc;color:#fff;}#<uispace> .complexBar .zleft{float:left;}#<uispace> .complexBar .zright{float:right;}#<uispace> .complexBar .selmonth{width:80px;padding:2px 0 0 3px;}#<uispace> .complexBar .selyear{width:80px;padding-top:2px;}#<uispace> .complexBar .iptyear{width:40px;}#<uispace> .complexBar .btnyear{width:22px;}#<uispace> .complexBar .btnyear .yearup, #<uispace> .complexBar .btnyear .yeardown{display:block;width:16px;height:9px;line-height:9px;font-size:8px;cursor:pointer;}#<uispace> .complexBar .btnyear .yearup{background-position:-282px -445px;margin-bottom:2px;}#<uispace> .complexBar .btnyear .yeardown{background-position:-242px -424px;}#<uispace> .simpleBar{display:none;height:25px;background-color:#e6e6e6;background-position:0 -176px;}#<uispace> .simpleBar .zmonth{width:12px;height:12px;line-height:12px;padding:6px 0 7px 0;}#<uispace> .simpleBar .prevMonth{float:left;padding-left:30px;margin-right:-45px;}#<uispace> .simpleBar .nextMonth{float:right;padding-right:30px;margin-left:-45px;}#<uispace> .simpleBar a{display:block;width:100%;height:100%;text-indent:-9999px;}#<uispace> .simpleBar .prevMonth a{background-position:3px 2px;}#<uispace> .simpleBar .prevMonth a:hover{background-position:3px -22px;}#<uispace> .simpleBar .nextMonth a{background-position:3px -46px;}#<uispace> .simpleBar .nextMonth a:hover{background-position:3px -70px;}#<uispace> .simpleBar .ztip{width:100px;height:25px;line-height:25px;margin:0 45px;font-weight:bold;text-align:center;}#<uispace> .tablewrap{width:161px;padding:0 15px 0 14px;background:url("http://l.bst.126.net/rsc/img/calendar/bgline8.png") 0 27px no-repeat;}#<uispace> .table{table-layout:auto;width:100%;}#<uispace> .zcnt{border-collapse:collapse;border-spacing:0;}#<uispace> .zcnt .wkitm,#<uispace> .zcnt .itm{float:left;width:19px;height:19px;line-height:19px;}#<uispace> .zcnt .wkitm{padding:4px 1px 4px 3px;text-align:center;}#<uispace> .zcnt .itm{padding:2px;}#<uispace> .zcnt .itm .iday{display:block;width:17px;height:17px;background-color:#fff;border-width:1px 1px 1px 1px;border-style:solid;border-color:#FFF;cursor:pointer;}#<uispace> .zcnt .itm .iday:hover{color:#fff;background-color:#4e9fd4;border-color:#4e9fd4;}#<uispace> .zcnt .itm .iold{color:#aaa;}#<uispace> .zcnt .itm .inext{color:#aaa;}#<uispace> .zcnt .js-emptyitem{visibility:hidden;}#<uispace> .zcnt .js-weekend .iday{background-color:#fff;}#<uispace> .zcnt .js-zcurrent .iday{color:#fff;background-color:#4e9fd4;border-color:#4e9fd4;}#<uispace> .zcnt .js-today .iday{border-color:#4e9fd4;}#<uispace> .zcnt .js-disablepast .iday,#<uispace> .zcnt .js-disablepast .iday:hover{color:#aaa;background-color:#fff;border-color:#fff;cursor:default;}#<uispace> .selectMonth{color:#000;}#<uispace> .selectMonth .zlst{max-height:210px;}#<uispace> .selectMonth .zlst .wkitm{height:16px;line-height:16px;}', cl);
    var bLX = function(bHz, bHF) {
        if (!bHz || !bHF)
            return null;
        if (bHF == 2 && (bHz % 400 == 0 || bHz % 4 == 0 && bHz % 100 != 0)) {
            return 29
        } else {
            return cbz[bHF - 1]
        }
    };
    p.bIu = C();
    bHJ = p.bIu.bi(P(N.ui).YJ, true);
    p.bIu.bOo = function(bHK, tI, bJM) {
        bHK = U.bA(bHK);
        if (!bHK)
            return false;
        tI = tI || "yyyy/MM/dd";
        bJM = bJM || "/";
        var bKA = bHK.split(bJM);
        var bJZ = tI.split(bJM);
        var dU = {};
        var bHG;
        if (!!bKA && !!bJZ && bKA.length == bJZ.length && bKA.length <= 3) {
            for (var i = 0; i < bKA.length; i++) {
                if (!!bJZ[i]) {
                    if (!bKA[i] || !bUs.test(bKA[i]))
                        return false;
                    dU[bJZ[i].substring(0, 1)] = bKA[i]
                }
            }
            try {
                bHG = new Date(bHK);
                if (!bHG || isNaN(bHG) || bHG == "Invalid Date") {
                    return false
                }
            } catch (e) {
                return false
            }
            if ((!!dU["y"] ? bHG.getFullYear() == parseInt(dU["y"], 10) : true) && (!!dU["M"] ? bHG.getMonth() + 1 == parseInt(dU["M"], 10) : true) && (!!dU["d"] ? bHG.getDate() == parseInt(dU["d"], 10) : true)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    };
    p.bIu.bUA = function(bIj, tI, bJM) {
        bIj = U.bA(bIj);
        if (!bIj)
            return false;
        tI = tI || "HH/mm/ss";
        bJM = bJM || ":";
        var bKz = bIj.split(bJM);
        var bJZ = tI.split(bJM);
        var dU = {};
        var bHC;
        if (!!bKz && !!bJZ && bKz.length == bJZ.length && bKz.length <= 3) {
            for (var i = 0; i < bKz.length; i++) {
                if (!!bJZ[i]) {
                    if (!bKz[i] || !bUs.test(bKz[i]))
                        return false;
                    dU[bJZ[i].substring(0, 1)] = bKz[i]
                }
            }
            try {
                bHC = new Date("2012/01/01 " + bIj);
                if (!bHC || isNaN(bHC) || bHC == "Invalid Date") {
                    return false
                }
            } catch (e) {
                return false
            }
            if ((!!dU["H"] ? bHC.getHours() == parseInt(dU["H"], 10) : true) && (!!dU["m"] ? bHC.getMinutes() == parseInt(dU["m"], 10) : true) && (!!dU["s"] ? bHC.getSeconds() == parseInt(dU["s"], 10) : true)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    };
    bHJ.bq = function(bl, I) {
        this.cT = [];
        var cbx = [{t: "一月",v: "1"}, {t: "二月",v: "2"}, {t: "三月",v: "3"}, {t: "四月",v: "4"}, {t: "五月",v: "5"}, {t: "六月",v: "6"}, {t: "七月",v: "7"}, {t: "八月",v: "8"}, {t: "九月",v: "9"}, {t: "十月",v: "10"}, {t: "十一月",v: "11"}, {t: "十二月",v: "12"}];
        this.bQm = {"class": "selectMonth",items: cbx,onchange: this.cbw.A(this)};
        this.bHq(bl, I);
        cby = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        V.bHn(this.Y, "click", this.cbv.A(this));
        if (B.dh && !!bl)
            bl.style.zoom = 1
    };
    bHJ.cbw = function(bHF) {
        if (!!this.bLf) {
            this.bHA = parseInt(bHF) || this.bHA;
            this.bUF(this.bHx);
            this.bKy(this.bHx, this.bHA)
        }
    };
    bHJ.cbv = function() {
        if (!!this.bLf)
            this.bLf.Hl()
    };
    bHJ.cM = function() {
        var bKn = [];
        bKn.push('<div class="complexBar"><div class="zleft selmonth zbtag"></div><div class="zright selyear"><div class="zright btnyear"><a hidefocus="true" class="yearup zbtag" href="#">∧</a><a hidefocus="true" class="yeardown zbtag" href="#">∨</a></div><input type="text" class="zright iptyear zbtag" maxlength="4" /></div></div><div class="simpleBar"><div class="prevMonth zmonth"><a hidefocus="true" class="zsbtag" href="#">&lt;&lt;上月</a></div><div class="nextMonth zmonth"><a hidefocus="true" class="zsbtag" href="#">&gt;&gt;下月</a></div><div class="ztip zsbtag">&nbsp;</div></div><div class="tablewrap"><table class="table zcnt"><thead>');
        for (var i = 0; i < bUq.length; i++) {
            bKn.push('<th class="wkitm">' + bUq[i] + "</th>")
        }
        bKn.push("</thead><tbody>");
        for (var i = 0; i < 6; i++) {
            bKn.push("<tr>");
            for (var j = 0; j < 7; j++) {
                bKn.push('<td class="itm"><span class="iday ztag"></span></td>')
            }
            bKn.push("</tr>")
        }
        bKn.push("</tbody></table></div>");
        return bKn.join("")
    };
    bHJ.cU = function() {
        return cl
    };
    bHJ.cc = function() {
        var bHk = E.dE(this.Y);
        this.bUI = bHk[0];
        this.bUJ = bHk[1];
        this.bUK = bHk[2];
        bHk = E.bj(this.bUI, "zbtag");
        this.cbu = bHk[0];
        this.cbt = bHk[1];
        this.cbr = bHk[2];
        this.bJJ = bHk[3];
        bHk = E.bj(this.bUJ, "zsbtag");
        this.cbq = bHk[0];
        this.cbp = bHk[1];
        this.cbo = bHk[2];
        V.bHn(this.cbt, "click", this.cbn.A(this));
        V.bHn(this.cbr, "click", this.cbm.A(this));
        V.bHn(this.bJJ, "blur", this.bUV.A(this));
        V.bHn(this.bJJ, "keypress", this.cbl.A(this));
        V.bHn(this.cbq, "click", this.cbk.A(this));
        V.bHn(this.cbp, "click", this.cbj.A(this));
        this.cT = E.bj(this.bUK, "ztag");
        V.bHn(this.bUK, "click", this.cbh.A(this))
    };
    bHJ.bUV = function() {
        var bHz = parseInt(this.bJJ.value);
        if (!isNaN(bHz)) {
            this.bHx = bHz
        } else {
            this.bHx = this.bLj
        }
        this.bJJ.value = this.bHx;
        this.bKy(this.bHx, this.bHA)
    };
    bHJ.cbl = function(bHl) {
        if (bHl.keyCode == 13) {
            this.bUV()
        }
    };
    bHJ.cbn = function(bHl) {
        V.bb(bHl);
        var bHz = parseInt(this.bJJ.value);
        if (!isNaN(bHz)) {
            this.bHx = bHz - 1
        } else {
            this.bHx = this.bLj
        }
        this.bJJ.value = this.bHx;
        this.bKy(this.bHx, this.bHA)
    };
    bHJ.cbm = function(bHl) {
        V.bb(bHl);
        var bHz = parseInt(this.bJJ.value);
        if (bHz >= 0) {
            this.bHx = bHz + 1
        } else {
            this.bHx = this.bLj
        }
        this.bJJ.value = this.bHx;
        this.bKy(this.bHx, this.bHA)
    };
    bHJ.bz = function(I) {
        I = I || O;
        this.bUW = I.isDisablePastDates || false;
        this.bQj = I.isShowCompleteDates || false;
        this.cbg = I.isShowComplexBar || false;
        this.cbf = I.isShowSimpleBar || false;
        if (!!this.cbg) {
            this.bUI.style.display = "block"
        }
        if (!!this.cbf) {
            this.bUJ.style.display = "block"
        }
        this.bHn("onselect", I.onselect || F);
        this.bMX = new Date;
        this.Td = I.date || this.bMX;
        if (U.co(this.Td, "string")) {
            this.Td = new Date(this.Td)
        }
        this.bQh = "";
        this.bQe = "";
        this.bQd = "";
        if (!!I.date && !!U.bA(I.date) && !!this.Td && !isNaN(this.Td) && this.Td != "Invalid Date") {
            this.bQh = this.Td.getFullYear();
            this.bQe = this.Td.getMonth() + 1;
            this.bQd = this.Td.getDate()
        }
        if (!this.Td || isNaN(this.Td) || this.Td == "Invalid Date") {
            this.Td = this.bMX
        }
        this.bHx = this.Td.getFullYear();
        this.bHA = this.Td.getMonth() + 1;
        this.cet = this.Td.getDate();
        this.bLj = this.bMX.getFullYear();
        this.bUZ = this.bMX.getMonth() + 1;
        this.bVa = this.bMX.getDate();
        this.bUF(this.bHx);
        this.cbe(this.bHA);
        this.bKy(this.bHx, this.bHA)
    };
    bHJ.bUF = function(bHz) {
        this.bJJ.value = parseInt(bHz) || this.bLj
    };
    bHJ.cbe = function(bHF) {
        this.bQm.index = parseInt(bHF) - 1;
        if (!this.bLf) {
            if (!!P(N.ui).jv) {
                this.bLf = P(N.ui).jv.bG(this.cbu, this.bQm)
            }
        } else {
            if (!!this.bLf.lE) {
                this.bLf.lE(this.bQm.index)
            }
        }
    };
    bHJ.bKy = function(bHz, bHF, ci) {
        if (!bHz || !bHF)
            return;
        if (ci) {
            if (bHF + ci > 12) {
                this.bHx = bHz + Math.floor((bHF + ci) / 12);
                this.bHA = (bHF + ci) % 12
            } else if (bHF + ci < 1) {
                this.bHx = bHz - (Math.floor(-(bHF + ci) / 12) + 1);
                this.bHA = 12 + (bHF + ci) % 12
            } else {
                this.bHx = bHz;
                this.bHA = bHF + ci
            }
        } else {
            this.bHx = bHz;
            this.bHA = bHF
        }
        this.cbd()
    };
    bHJ.cbd = function() {
        var cbc = new Date(this.bHx, this.bHA - 1, 1), bHH = cbc.getDay();
        bHV = bHH + bLX(this.bHx, this.bHA);
        this.cbo.innerHTML = this.bHx + "年" + this.bHA + "月";
        for (var i = 0, fe = this.cT.length; i < fe; i++) {
            if (!this.bQj) {
                this.cT[i].innerText = i < bHH || i >= bHV ? "" : i - bHH + 1;
                if (B.oc) {
                    if (E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.bf(this.cT[i].parentNode, "js-emptyitem")
                    }
                }
                if (!!this.cT[i].innerText) {
                    if (E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.bf(this.cT[i].parentNode, "js-emptyitem")
                    }
                } else {
                    if (!E.cr(this.cT[i].parentNode, "js-emptyitem")) {
                        E.ba(this.cT[i].parentNode, "js-emptyitem")
                    }
                }
            } else {
                if (i < bHH) {
                    if (E.cr(this.cT[i], "inext")) {
                        E.bf(this.cT[i], "inext")
                    }
                    if (!E.cr(this.cT[i], "iold")) {
                        E.ba(this.cT[i], "iold")
                    }
                    if (this.bHA - 1 == 0) {
                        this.cT[i].innerText = i - bHH + bLX(this.bHx - 1, 12) + 1
                    } else {
                        this.cT[i].innerText = i - bHH + bLX(this.bHx, this.bHA - 1) + 1
                    }
                } else if (i >= bHV) {
                    if (E.cr(this.cT[i], "iold")) {
                        E.bf(this.cT[i], "iold")
                    }
                    if (!E.cr(this.cT[i], "inext")) {
                        E.ba(this.cT[i], "inext")
                    }
                    this.cT[i].innerText = i - bHV + 1
                } else {
                    if (E.cr(this.cT[i], "iold")) {
                        E.bf(this.cT[i], "iold")
                    }
                    if (E.cr(this.cT[i], "inext")) {
                        E.bf(this.cT[i], "inext")
                    }
                    this.cT[i].innerText = i - bHH + 1
                }
            }
            if (this.bUW) {
                this.cbb(i, bHH, bHV)
            }
            if (E.cr(this.cT[i].parentNode, "js-zcurrent")) {
                E.bf(this.cT[i].parentNode, "js-zcurrent")
            }
            if (E.cr(this.cT[i].parentNode, "js-today")) {
                E.bf(this.cT[i].parentNode, "js-today")
            }
            if ((i % 7 == 0 || i % 7 == 6) && i >= bHH && i < bHV) {
                E.ba(this.cT[i].parentNode, "js-weekend")
            } else {
                E.bf(this.cT[i].parentNode, "js-weekend")
            }
            if (i % 7 == 0) {
                this.cT[i].parentNode.parentNode.style.display = ""
            }
            if (i % 7 == 0 && i >= bHV) {
                this.cT[i].parentNode.parentNode.style.display = "none";
                break
            }
        }
        this.cba(bHH, bHV);
        this.caZ(bHH, bHV)
    };
    bHJ.cbb = function(i, bHH, bHV) {
        if (!bHV || !this.cT[i])
            return;
        bHH = bHH || 0;
        var Q = this.bPS(this.bLj, this.bUZ, this.bVa, bHH, bHV);
        if (Q > 0) {
            if (i < Q) {
                E.ba(this.cT[i].parentNode, "js-disablepast")
            } else {
                E.bf(this.cT[i].parentNode, "js-disablepast")
            }
        } else {
            E.bf(this.cT[i].parentNode, "js-disablepast")
        }
    };
    bHJ.cba = function(bHH, bHV) {
        if (!!this.bQh && !!this.bQe && !!this.bQd) {
            var Q = this.bPS(this.bQh, this.bQe, this.bQd, bHH, bHV);
            if (!!this.cT[Q])
                E.ba(this.cT[Q].parentNode, "js-zcurrent")
        }
    };
    bHJ.caZ = function(bHH, bHV) {
        if (!bHV)
            return;
        bHH = bHH || 0;
        var Q = this.bPS(this.bLj, this.bUZ, this.bVa, bHH, bHV);
        if (!!this.cT[Q])
            E.ba(this.cT[Q].parentNode, "js-today")
    };
    bHJ.bPS = function(bHz, bHF, bMV, bHH, bHV) {
        var Q = bQo;
        if (!this.bQj) {
            if (bHz == this.bHx && bHF == this.bHA) {
                Q = bMV + bHH - 1
            } else if (bHz > this.bHx || bHz == this.bHx && bHF > this.bHA) {
                Q = bUt
            } else {
                Q = bQo
            }
        } else {
            if (bHz == this.bHx && bHF == this.bHA) {
                Q = bMV + bHH - 1
            } else if (bHz == this.bHx && this.bHA - bHF == 1 || this.bHx - bHz == 1 && this.bHA == 1 && bHF == 12) {
                if (bHF - 1 == 0) {
                    Q = bMV - bLX(bHz - 1, 12) + bHH - 1
                } else {
                    Q = bMV - bLX(bHz, bHF - 1) + bHH - 1
                }
            } else if (bHz == this.bHx && this.bHA - bHF == -1 || this.bHx - bHz == -1 && this.bHA == 12 && bHF == 1) {
                Q = bMV + bHV
            } else if (bHz > this.bHx || bHz == this.bHx && bHF > this.bHA) {
                Q = bUt
            } else {
                Q = bQo
            }
        }
        return Q
    };
    bHJ.cbh = function(bHl) {
        var X = V.be(bHl);
        if (!this.bQj) {
            if (E.cr(X, "iday") && X.innerText != "" && (!this.bUW || !E.cr(X.parentNode, "js-disablepast"))) {
                this.cy();
                this.bh("onselect", new Date(this.bHx, this.bHA - 1, X.innerText))
            }
        } else {
            if (E.cr(X, "iday") && X.innerText != "") {
                this.cy();
                var bOf = parseInt(X.innerText), bHG;
                if (E.cr(X, "inext")) {
                    if (this.bHA - 1 == 11) {
                        bHG = new Date(this.bHx + 1, 0, bOf)
                    } else {
                        bHG = new Date(this.bHx, this.bHA, bOf)
                    }
                } else if (E.cr(X, "iold")) {
                    if (this.bHA - 1 == 0) {
                        bHG = new Date(this.bHx - 1, 11, bOf)
                    } else {
                        bHG = new Date(this.bHx, this.bHA - 2, bOf)
                    }
                } else {
                    bHG = new Date(this.bHx, this.bHA - 1, X.innerText)
                }
                this.bh("onselect", bHG)
            }
        }
    };
    bHJ.cbj = function(bHl) {
        V.bb(bHl);
        this.bKy(this.bHx, this.bHA, 1)
    };
    bHJ.cbk = function(bHl) {
        V.bb(bHl);
        this.bKy(this.bHx, this.bHA, -1)
    };
    bHJ.ceu = function(bKb, I) {
        return p.bIu.bVi(bKb, I)
    };
    p.bIu.bVi = function(bKb, I) {
        if (!bKb || !U.co(bKb, "date"))
            return;
        I = I || {};
        var caY = I.yearOffset || 0;
        var bKc = I.monthOffset || 0;
        var bVk = I.msecondOffset || 0;
        var bLo = bKb.getFullYear() + caY;
        var bIQ = bKb.getMonth() + 1;
        var bPQ = bKb.getDate();
        if (bKc) {
            if (bIQ + bKc > 12) {
                bLo = bLo + Math.floor((bIQ + bKc) / 12);
                bIQ = (bIQ + bKc) % 12
            } else if (bIQ + bKc < 1) {
                bLo = bLo - (Math.floor(-(bIQ + bKc) / 12) + 1);
                bIQ = 12 + (bIQ + bKc) % 12
            } else {
                bIQ = bIQ + bKc
            }
        }
        var bVn = bLX(bLo, bIQ);
        if (bPQ > bVn) {
            bPQ = bVn
        }
        var bHC = new Date(bKb);
        bHC.setYear(bLo);
        bHC.setMonth(bIQ - 1);
        bHC.setDate(bPQ);
        if (bVk) {
            try {
                var caX = bHC.getTime() + bVk;
                bHC = new Date(caX)
            } catch (e) {
                return null
            }
        }
        return bHC
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), ciF, clj, ciW, cli;
    var cja = "定时发布";
    var ctS = "js-timing-publish";
    var cnd = "ptui-" + U.cA();
    P(N.ui).fx('#<uispace>{}#<uispace> .ztxt{/*width:auto;*/width:5px;height:30px;line-height:30px;margin-right:-5px;}#<uispace> .zdwn{margin:13px 10px 12px 10px;}#<uispace> .zlst{display:none;left:-31px;width:190px;max-height:none;background:#fff;}#<uispace>.js-showlist .zlst{display:block;}#<uispace> .zlst .case{width:190px;}#<uispace> .zlst .zitm{padding:0 10px 0 35px;color:#444;}#<uispace> .zlst .zitm.js-timing-publish{height:auto;padding:0;overflow:visible;}#<uispace> .zlst .zitm.js-timing-publish:hover{background-color:#fff;color:#444;}#<uispace> .zlst .zitm.js-timing-publish label{display:block;height:36px;line-height:36px;padding:0 10px 0 35px;color:#444;}#<uispace> .zlst .zitm.js-timing-publish label:hover{color:#fff;background-color:#999;}#<uispace> .zlst .zitm.js-timing-publish .publishDateTime{display:none;width:190px;margin-top:7px;font-size:16px;background:#fff url("/rsc/img/shadow-in.png") 0 0 no-repeat;}#<uispace> .zlst .zitm.js-timing-publish .publishDateTime{border-style:solid;border-color:#cbcbcb;border-width:1px 0;}#<uispace> .zlst .zitm.js-timing-publish .publishDate{position:relative;zoom:1;z-index:8;float:left;width:116px;}#<uispace> .zlst .zitm.js-timing-publish .publishDate .dateInput{display:block;width:116px;height:38px;line-height:38px;text-align:center;font-size:16px;border:0;outline:none;}#<uispace> .zlst .zitm.js-timing-publish .publishTime{position:relative;zoom:1;z-index:10;float:right;width:72px;height:38px;border-left:1px solid #cbcbcb;}#<uispace> .zlst .zitm.js-timing-publish .timeInput{overflow:hidden;float:right;/*width:67px;*/width:66px;height:38px;line-height:38px;padding-right:6px;text-align:center;font-size:16px;border:0;outline:none;}#<uispace> .zlst .zitm.js-timing-publish .publishDate .calendarWrap .newpublishcalendar{position:static;border-style:solid;border-color:#cbcbcb;border-width:1px 0 0 0;}#<uispace> .zlst .zitm.js-timing-publish.js_selected_option .publishDateTime{display:block;}', cnd);
    p.ckH = C();
    ciF = p.ckH.bi(p.sC, true);
    clj = p.ckH.bw;
    ciF.bq = function() {
        this.bHq()
    };
    ciF.bHu = function(I) {
        I = I || O;
        clj.bHu.call(this, I);
        this.bhw = I.post
    };
    ciF.ce = function(bHm) {
        this.bHp = bHm || O;
        var bg = this.bHp.t || this.bHp.n || this.bHp.v || " ";
        if (this.bHp.v == cja) {
            E.ba(this.Y, ctS);
            this.Y.innerHTML = '<label class="thide">' + bg + '</label><div class="clearfix publishDateTime typetag"><div class="publishDate"><input type="text" class="dateInput typetag" maxlength="20"><div class="calendarWrap typetag"></div></div><div class="publishTime"><input type="text" class="timeInput typetag" maxlength="10"></div></div>';
            this.cpt()
        } else {
            this.Y.innerText = bg
        }
    };
    ciF.cpt = function() {
        var bHk = E.bj(this.Y, "typetag");
        var Q = 0;
        this.bUj = bHk[Q++];
        this.bIa = bHk[Q++];
        this.bXm = bHk[Q++];
        this.bHY = bHk[Q++];
        this.cps();
        V.bHn(this.bIa, "click", this.bNW.A(this));
        V.bHn(this.bIa, "blur", this.bUe.A(this));
        V.bHn(this.bHY, "blur", this.bQE.A(this))
    };
    ciF.cps = function() {
        if (!!this.bHp && this.bHp != "null") {
            var bHC = new Date;
            var bxd = this.bHp.publishDateTime || -1;
            if (bxd > 0) {
                bHC.setTime(bxd);
                if (!U.bA(this.bIa.value)) {
                    this.bIa.value = U.ws(bHC, "yyyy/MM/dd")
                }
                if (!U.bA(this.bHY.value)) {
                    this.bHY.value = U.ws(bHC, "HH:mm")
                }
            }
        }
        if (!U.bA(this.bIa.value) || !U.bA(this.bHY.value)) {
            var bHC = new Date;
            bHC = bHC.setTime(bHC.getTime() + 3 * 3600 * 1e3);
            if (!U.bA(this.bIa.value)) {
                this.bIa.value = U.ws(bHC, "yyyy/MM/dd")
            }
            if (!U.bA(this.bHY.value)) {
                this.bHY.value = U.ws(bHC, "HH:mm")
            }
        }
    };
    ciF.cpU = function() {
    };
    ciF.cpV = function() {
    };
    ciF.bNW = function(bHl) {
        V.bb(bHl);
        P("loft.w").bIu.bE({isDisablePastDates: true,isShowCompleteDates: false,isShowSimpleBar: true,"class": "newpublishcalendar",date: this.bIa.value,parent: this.bXm,onselect: this.bNY.A(this)})
    };
    ciF.bNY = function(bHG) {
        this.bIa.value = U.ws(bHG, "yyyy/MM/dd");
        this.bUe("", true)
    };
    ciF.bUe = function(bHl, bMD) {
        if (!!this.bQK)
            this.bQK = window.clearTimeout(this.bQK);
        if (!!bMD) {
            this.bKx(U.bA(this.bIa.value))
        } else {
            this.bQK = window.setTimeout(this.bKx.A(this, U.bA(this.bIa.value)), 200)
        }
    };
    ciF.bQE = function(bHl, bMD) {
        if (!!this.bQL)
            this.bQL = window.clearTimeout(this.bQL);
        if (!!bMD) {
            this.bUv(U.bA(this.bHY.value))
        } else {
            this.bQL = window.setTimeout(this.bUv.A(this, U.bA(this.bHY.value)), 200)
        }
    };
    ciF.bKx = function(bHK) {
        this.bQE("", true);
        bHK = U.bA(bHK);
        if (!bHK) {
            E.bf(this.bIa, "js-errorDate");
            return
        } else if (!loft.w.bIu.bOo(bHK)) {
            E.ba(this.bIa, "js-errorDate");
            return
        }
        var bHC = new Date(bHK);
        bHC.setHours(0, 0, 0, 0);
        var bOH = new Date;
        bOH.setHours(0, 0, 0, 0);
        if (bHC.getTime() + 5e3 < bOH.getTime()) {
            E.ba(this.bIa, "js-errorDate")
        } else {
            E.bf(this.bIa, "js-errorDate")
        }
    };
    ciF.bUv = function(bIj) {
        bIj = U.bA(bIj);
        if (!bIj) {
            E.bf(this.bHY, "js-errorTime");
            return
        } else if (!loft.w.bIu.bUA(bIj, "HH:mm")) {
            E.ba(this.bHY, "js-errorTime");
            return
        }
        var bHK = U.bA(this.bIa.value);
        if (!bHK || !loft.w.bIu.bOo(bHK)) {
            E.bf(this.bHY, "js-errorTime");
            return
        }
        var bHC = new Date(bHK + " " + bIj);
        var bOH = new Date;
        if (bHC.getTime() + 5e3 < bOH.getTime()) {
            E.ba(this.bHY, "js-errorTime")
        } else {
            E.bf(this.bHY, "js-errorTime")
        }
    };
    ciF.rF = function(bHl) {
        if (this.bHp.v == cja) {
            if (!U.bA(this.bIa.value) || !U.bA(this.bHY.value)) {
                var bHC = new Date;
                bHC = bHC.setTime(bHC.getTime() + 3 * 3600 * 1e3);
                if (!U.bA(this.bIa.value)) {
                    E.bf(this.bIa, "js-errorTime");
                    this.bIa.value = U.ws(bHC, "yyyy/MM/dd")
                }
                if (!U.bA(this.bHY.value)) {
                    E.bf(this.bHY, "js-errorTime");
                    this.bHY.value = U.ws(bHC, "HH:mm")
                }
            }
        }
        clj.rF.apply(this)
    };
    ciF.cK = function() {
        if (E.cr(this.Y, ctS)) {
            E.bf(this.Y, ctS)
        }
        this.Y.innerHTML = "";
        clj.cK.apply(this)
    };
    ciF.clV = function() {
        if (!!this.bIa) {
            return U.bA(this.bIa.value)
        }
    };
    ciF.ckG = function(bHK) {
        if (!!this.bIa) {
            this.bIa.value = bHK
        }
    };
    ciF.ckF = function() {
        if (!!this.bHY) {
            return U.bA(this.bHY.value)
        }
    };
    ciF.clX = function(bIj) {
        if (!!this.bHY) {
            this.bHY.value = bIj
        }
    };
    p.cma = C();
    ciW = p.cma.bi(p.jv, true);
    cli = p.cma.bw;
    ciW.bq = function(bl, I) {
        this.bHq(bl, I)
    };
    ciW.bz = function(I) {
        I = I || O;
        this.bhw = I.post || null;
        this.eL.post = this.bhw;
        cli.bz.call(this, I)
    };
    ciW.cU = function() {
        var bpt = cli.cU.apply(this);
        return cnd + " " + bpt
    };
    ciW.cK = function() {
        cli.cK.call(this);
        this.cT = p.ckH.db(this.cT)
    };
    ciW.XL = function(cf) {
        p.ckH.db(this.cT);
        this.cT = p.ckH.bG(cf, this.fS, this.eL);
        if (!!this.cT && this.cT.length > 0) {
            if (!!this.cT[0]) {
                this.cT[0].clM(this.clP.A(this))
            }
            if (!!this.cT[this.cT.length - 1]) {
                this.cT[this.cT.length - 1].clM(this.clP.A(this), true)
            }
        }
    };
    ciW.lE = function(Q) {
        if (!!Q && Q == -1) {
            this.DD();
            return
        }
        if (!this.cT)
            return;
        var bo = this.cT[Q || 0];
        if (!bo)
            return;
        this.DD(bo.hY())
    };
    ciW.DD = function(bHm) {
        this.fg = bHm;
        var Q = 0;
        for (var i = 0; i < this.Ho.length; i++) {
            if (this.Ho[i].v == bHm.v) {
                Q = i;
                break
            }
        }
        this.clT(this.ckl, Q);
        this.ckl = Q;
        if (bHm.v != cja) {
            this.Hl();
            this.ckG("");
            this.clX("")
        }
        this.bh("onchange", bHm.v || bHm.n || bHm.t || "", Q)
    };
    ciW.clQ = function() {
        this.ckk.style.left = "115px"
    };
    ciW.clV = function() {
        if (!!this.cT[2] && !!this.cT[2].ckG) {
            return this.cT[2].clV()
        }
    };
    ciW.ckG = function(bHK) {
        if (!!this.cT[2] && !!this.cT[2].ckG) {
            this.cT[2].ckG(bHK)
        }
    };
    ciW.ckF = function() {
        if (!!this.cT[2] && !!this.cT[2].ckF) {
            return this.cT[2].ckF()
        }
    };
    ciW.clX = function(bIj) {
        if (!!this.cT[2] && !!this.cT[2].ckF) {
            this.cT[2].clX(bIj)
        }
    };
    ciW.cub = function(cnn) {
        if (!cnn)
            return;
        var dp = document.documentElement || document.body, FW = document.body || document.documentElement;
        var ctX = dp.scrollTop || FW.scrollTop || 0;
        var ctW = ctX + dp.clientHeight;
        var Zt = E.jO(this.Y);
        var bCp = Zt + this.Y.clientHeight;
        if (this.Y.clientHeight <= dp.clientHeight) {
            var ig = 10;
            var cqU = this.ckJ.clientHeight;
            var bHk = E.bj(this.ckJ, ctS);
            if (!!bHk && !!bHk[0]) {
                cqU = 400
            }
            if (ctW - bCp > this.ckJ.clientHeight + ig || Zt < cqU + ig) {
                E.bf(this.ckJ, cnn)
            } else {
                E.ba(this.ckJ, cnn)
            }
        } else {
            E.bf(this.ckJ, cnn)
        }
    }
})();
(function() {
    var p = P("loft.w"), bHX, bTM, cl = "ui-" + U.cA();
    var Li = ["1", "2", "3", "6", "5", "4", "7", "8", "10", "11"], bew = ["新浪微博", "网易微博", "QQ空间", "腾讯微博", "人人", "豆瓣", "Twitter", "Facebook", "flickr", "500px"];
    P(N.ui).fx('#<uispace>{}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .sitewrap{padding-bottom:1px;margin:0 -5px 0 -1px;}#<uispace> .sitewrap a{float:left;position:relative;zoom:1;z-index:1;width:24px;height:24px;margin:0 4px 8px 0;}#<uispace> .sitewrap em,#<uispace> .sitewrap b{background:url("http://l.bst.126.net/rsc/img/sitesyncmanager/siteicon24.png") 0 0 no-repeat;_background:url("http://l.bst.126.net/rsc/img/sitesyncmanager/siteicon8.png") 0 0 no-repeat;}#<uispace> .sitewrap a em{display:block;width:100%;height:100%;overflow:hidden;text-indent:-9999px;}#<uispace> .sitewrap .site1{background-position:1px 1px;}#<uispace> .sitewrap .js-sel .site1{background-position:1px -102px;}#<uispace> .sitewrap .site2{background-position:-27px 1px;}#<uispace> .sitewrap .js-sel .site2{background-position:-27px -102px;}#<uispace> .sitewrap .site3{background-position:-55px 1px;}#<uispace> .sitewrap .js-sel .site3{background-position:-55px -102px;}#<uispace> .sitewrap .site6{background-position:-83px 1px;}#<uispace> .sitewrap .js-sel .site6{background-position:-83px -102px;}#<uispace> .sitewrap .site5{background-position:-111px 1px;}#<uispace> .sitewrap .js-sel .site5{background-position:-111px -102px;}#<uispace> .sitewrap .site4{background-position:-139px 1px;}#<uispace> .sitewrap .js-sel .site4{background-position:-139px -102px;}#<uispace> .sitewrap .site7{background-position:-167px 1px;}#<uispace> .sitewrap .js-sel .site7{background-position:-167px -102px;}#<uispace> .sitewrap .site8{background-position:1px -31px;}#<uispace> .sitewrap .js-sel .site8{background-position:1px -130px;}#<uispace> .sitewrap .site10{background-position:-27px -31px;}#<uispace> .sitewrap .js-sel .site10{background-position:-27px -130px;}#<uispace> .sitewrap .site11{background-position:-55px -31px;}#<uispace> .sitewrap .js-sel .site11{background-position:-55px -130px;}#<uispace> .sitewrap .syncmore{background-position:-83px -31px;}#<uispace> .sitewrap .syncmore:hover{background-position:-83px -130px;}#<uispace> .sitewrap b{display:none;position:absolute;bottom:-3px;right:-4px;z-index:5;clear:both;width:10px;height:10px;overflow:hidden;cursor:pointer;background-position:0 -72px;}#<uispace> .sitewrap .js-sel2 b{display:block;}', cl);
    p.bQs = C();
    bHX = p.bQs.bi(P(N.ui).ga, true);
    bTM = p.bQs.bw;
    bHX.bq = function(bl, I) {
        this.ki = {};
        this.bKT = {};
        this.kh = {};
        this.so = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.bHq(bl, I);
        this.dB();
        for (var i = 0; i < this.xQ.length; i++) {
            V.bHn(this.xQ[i], "click", this.bpG.A(this, i))
        }
    };
    bHX.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbConnectSite = this.bXN.A(this)
    };
    bHX.ix = function(Q, bp) {
        var hj = Li[Q];
        var eT = 400, dz = 600;
        if (hj == "1") {
            eT = 760;
            dz = 900
        }
        var dn = (window.screen.height - eT - 200) / 2, cN = (window.screen.width - dz) / 2;
        if (dn < 0)
            dn = 0;
        if (cN < 0)
            cN = 0;
        if (!!bp) {
            if (hj == "1") {
                J.gf(location.dwr, "SinaSiteBean", "cancelConnect", this.bI, hj)
            } else if (hj == "8") {
                J.gf(location.dwr, "FacebookSiteBean", "cancelConnect", this.bI, hj)
            } else if (hj == "5") {
                J.gf(location.dwr, "RenrenSiteBean", "cancelConnect", this.bI, hj)
            }
            window.open(bp, "关联", "height=" + eT + ",width=" + dz + ",top=" + dn + ",left=" + cN + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")
        } else {
            E.bd("关联同步失败", true)
        }
    };
    bHX.bXN = function(rI, hj, rQ) {
        hj = hj || "";
        hj = hj + "";
        if (!!rI) {
            if (hj == "1" || hj == "8" || hj == "5" || hj == "3" || hj == "4") {
                var Q = this.bXM(hj);
                var bk = this.xQ[Q];
                if (!bk)
                    return;
                E.bf(bk, "js-sel2");
                E.ba(bk, "js-sel");
                this.so[Q] = 1;
                bk.title = "点击取消同步" + bew[Q] + "（已同步帐号：" + rQ + "）"
            }
            E.bY("关联成功", true)
        } else {
            E.bd("关联失败,请稍后再试", true)
        }
    };
    window.cbConnectSite = function(rI, hj, rQ) {
        loft.w.g.cbConnectSite(rI, hj, rQ)
    };
    bHX.bXM = function(hj) {
        var Q = -1;
        for (var i = 0; i < Li.length; i++) {
            if (Li[i] == hj) {
                Q = i;
                break
            }
        }
        return Q
    };
    bHX.bpG = function(Q, bHl) {
        var bk = this.xQ[Q];
        if (this.bKT[this.bI] == "nobind") {
            return
        }
        V.bb(bHl);
        var bg = this.so[Q];
        if (bg == 2 && this.bhZ == 2) {
            E.bd("非管理员无权设置绑定", true);
            return
        }
        if (Q == 0 && bg == 2) {
            J.gf(location.dwr, "SinaSiteBean", "getOauth2AuthorUrl", this.bI, false, this.ix.A(this, Q));
            return
        } else if (Q == 7 && bg == 2) {
            J.gf(location.dwr, "FacebookSiteBean", "getAuthorUrl", this.bI, false, this.ix.A(this, Q));
            return
        } else if (Q == 4 && bg == 2) {
            J.gf(location.dwr, "RenrenSiteBean", "getAuthorUrl", this.bI, false, this.ix.A(this, Q));
            return
        } else if (Q == 2 && bg == 2) {
            J.gf(location.dwr, "QQSiteBean", "getAuthorUrl", this.bI, false, this.ix.A(this, Q));
            return
        } else if (Q == 5 && bg == 2) {
            J.gf(location.dwr, "DoubanSiteBean", "getAuthorUrl", this.bI, false, this.ix.A(this, Q));
            return
        }
        if (!!bg) {
            E.bf(bk, "js-sel");
            bk.title = bk.title.replace("取消同步", "同步到")
        } else {
            E.ba(bk, "js-sel");
            bk.title = bk.title.replace("同步到", "取消同步")
        }
        this.so[Q] = !!bg ? 0 : 1
    };
    bHX.bz = function(I) {
        I = I || O;
        bTM.bz.call(this);
        this.bI = I.blogId || 0;
        this.dr = I.blogName;
        this.bhZ = I.role || 2;
        this.lD = I.isDraftPost;
        this.bX = I.actionType || "NEW";
        this.nM = I.editorType || "text";
        this.bXL = I.noSiteSync || false;
        this.bXK = I.forceRefresh || false;
        if (!!this.bXL) {
            E.ba(this.Y.parentNode, "f-dn")
        } else {
            this.bXJ(this.bI, this.bXK);
            this.bQu.href = this.bdu(this.dr) || "#"
        }
    };
    bHX.cU = function() {
        return cl + " sitesyncmanager"
    };
    bHX.cM = function() {
        return '<div class="sitewrap clearfix"><a href="#" class="xtag"><em class="site1">新浪微博</em><b></b></a><a href="#" class="xtag"><em class="site2">网易微博</em><b></b></a><a href="#" class="xtag"><em class="site3">QQ空间</em><b></b></a><a href="#" class="xtag"><em class="site6">腾讯微博</em><b></b></a><a href="#" class="xtag"><em class="site5">人人网</em><b></b></a><a href="#" class="xtag"><em class="site4">豆瓣</em><b></b></a><a href="#" class="xtag"><em class="site7">twitter</em><b></b></a><a href="#" class="xtag"><em class="site8">facebook</em><b></b></a><a href="#" class="xtag"><em class="site10">flickr</em><b></b></a><a href="#" class="xtag"><em class="site11">500px</em><b></b></a><a href="#" class="xtag" target="_blank" title="同步更多网站"><em class="syncmore">+</em><b></b></a></div>'
    };
    bHX.cc = function() {
        var bHk = E.bj(this.Y, "xtag");
        var Q = 0;
        this.bNn = bHk[Q++];
        this.bXH = bHk[Q++];
        this.Gx = bHk[Q++];
        this.bQw = bHk[Q++];
        this.Gz = bHk[Q++];
        this.Gy = bHk[Q++];
        this.bXG = bHk[Q++];
        this.bXF = bHk[Q++];
        this.bXE = bHk[Q++];
        this.bXD = bHk[Q++];
        this.bQu = bHk[Q++];
        this.xQ = [this.bNn, this.bXH, this.Gx, this.bQw, this.Gz, this.Gy, this.bXG, this.bXF, this.bXE, this.bXD]
    };
    bHX.bXJ = function(bc, bNp) {
        E.ba(this.Y.parentNode, "f-dn");
        if (bc <= 0) {
            return
        }
        var nB = this.ki[bc];
        if (!!nB && !bNp) {
            this.bTT(bc, nB)
        } else {
            if (!this.kh[bc]) {
                this.kh[bc] = true;
                J.br(location.dwr, "SiteConnectInfoBean", "getConnectSites", bc, this.vN.A(this, bc))
            }
        }
    };
    bHX.vN = function(bc, nB) {
        this.kh[bc] = false;
        if (!nB)
            nB = [];
        this.ki[bc] = nB;
        if (bc == this.bI) {
            this.bTT(bc, nB)
        }
    };
    bHX.bTT = function(bc, nB) {
        var sF = nB.length;
        var bTU = true, bTV = 0;
        var hj, bdc = {}, bcY = {}, bcX = {}, bcU = {};
        for (var i = 0; i < sF; i++) {
            hj = nB[i].siteType + "";
            bdc[hj] = nB[i].synchType;
            bcY[hj] = nB[i].accountName;
            bcX[hj] = nB[i].defaultSel;
            bcU[hj] = nB[i].extValue;
            if (this.nM == "photo" || hj != "10" && hj != "11") {
                bTU = false;
                bTV++
            }
        }
        var bQz = Li.length;
        if (this.nM != "photo") {
            bQz = bQz - 2
        }
        if (!!bTU) {
            this.bKT[bc] = "nobind"
        } else if (bQz == bTV) {
            this.bKT[bc] = "allbind"
        } else {
            this.bKT[bc] = "somebind"
        }
        for (var i = 0; i < this.xQ.length; i++) {
            var hj = Li[i], bg = bdc[hj], iq = bcY[hj], bpY = bcX[hj], jG = bew[i], bk = this.xQ[i];
            if (this.bKT[bc] == "nobind") {
                this.so[i] = 0;
                bk.href = this.bdu(this.dr) || "#";
                bk.title = "点击同步到" + jG;
                bk.target = "_blank";
                if (this.nM != "photo" && (hj == "10" || hj == "11")) {
                    E.ba(bk, "f-dn")
                } else {
                    E.bf(bk, "f-dn js-sel js-sel2")
                }
                continue
            } else {
                bk.removeAttribute("target");
                bk.removeAttribute("href")
            }
            if (this.nM != "photo" && (hj == "10" || hj == "11")) {
                this.so[i] = 0;
                E.ba(bk, "f-dn");
                continue
            }
            if (this.nM == "photo" && this.bX == "REBLOG" && (hj == "10" || hj == "11")) {
                this.so[i] = 0;
                E.ba(bk, "f-dn");
                continue
            }
            if (bg == 1) {
                E.bf(bk, "f-dn")
            } else {
                E.ba(bk, "f-dn")
            }
            if ((this.bX == "NEW" || this.bX == "REBLOG" || this.bX == "EDIT" && !!this.lD) && bg == 1 && !!bpY) {
                E.ba(bk, "js-sel");
                this.so[i] = 1;
                bk.title = "点击取消同步" + jG + "（已同步帐号：" + iq + "）"
            } else {
                E.bf(bk, "js-sel");
                bk.title = "点击同步到" + jG + "（已同步帐号：" + iq + "）";
                this.so[i] = 0
            }
            if (hj == "1" || hj == "8" || hj == "5" || hj == "3" || hj == "4") {
                E.bf(bk, "js-sel2");
                var bcw = bcU[hj];
                if (!bcw && hj == "4" && bg == 1) {
                    bcw = '{"expireTime":1}'
                }
                if (!!bcw) {
                    if (hj == "3" && bcw.indexOf("{") < 0) {
                        bcw = '{"expireTime":1}'
                    }
                    if (hj == "4" && bcw.indexOf("{") < 0) {
                        bcw = '{"expireTime":1}'
                    }
                    var LF = U.fp(bcw);
                    if (!!LF && !!LF.expireTime && LF.expireTime <= (new Date).getTime()) {
                        E.bf(bk, "js-sel");
                        E.ba(bk, "js-sel2");
                        if (hj == "1") {
                            bk.title = "因新浪策略调整，微博同步设置已过期，请重新设置！"
                        } else if (hj == "8") {
                            bk.title = "因FaceBook策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "5") {
                            bk.title = "因人人网策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "3") {
                            bk.title = "因QQ空间策略调整，同步设置已过期，请重新设置！"
                        } else if (hj == "4") {
                            bk.title = "因豆瓣空间策略调整，同步设置已过期，请重新设置！"
                        }
                        this.so[i] = 2
                    }
                    if (hj == "3" && !!LF && !!LF.expireTime && LF.expireTime <= 13818708e5) {
                        E.bf(bk, "js-sel");
                        E.ba(bk, "js-sel2");
                        bk.title = "因QQ空间策略调整，同步设置已过期，请重新设置！";
                        this.so[i] = 2
                    }
                }
            }
        }
        if (this.bKT[bc] == "somebind" && this.bhZ != 2) {
            E.bf(this.bQu, "f-dn")
        } else {
            E.ba(this.bQu, "f-dn")
        }
        if (this.bKT[bc] == "nobind" && this.bhZ == 2) {
            E.ba(this.Y.parentNode, "f-dn")
        } else {
            E.bf(this.Y.parentNode, "f-dn")
        }
    };
    bHX.bdu = function(bDB) {
        if (!!bDB) {
            return "http://www.lofter.com/theme/" + bDB + "/?type=sync"
        }
        return ""
    };
    bHX.Hm = function() {
        if (E.cr(this.Y.parentNode, "f-dn"))
            return "";
        var bu = "", hj;
        for (var i = 0; i < this.so.length; i++) {
            hj = Li[i];
            if (this.so[i] == 1) {
                bu += hj + ","
            }
        }
        return bu
    };
    bHX.bXC = function() {
        if (E.cr(this.Y.parentNode, "f-dn"))
            return "";
        var bTW = [];
        for (var i = 0; i < this.so.length; i++) {
            if (this.so[i] == 2) {
                var iq = bew[i];
                if (!!iq)
                    bTW.push(iq)
            }
        }
        return bTW
    };
    bHX.cwi = function() {
        var dY = {blogId: this.bI,blogName: this.dr,role: this.bhZ};
        return dY
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), pl, beO, cl = "ui-" + U.cA();
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;z-index:12;width:60px;height:20px;color:#444;font-size:12px;font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .uploadCover{position:absolute;left:0;top:0;width:25px;height:20px;visibility:hidden;background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}', cl);
    p.Db = C();
    pl = p.Db.bi(P(N.ui).ga, true);
    beO = p.Db.bw;
    pl.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I);
        this.fo = [];
        this.Lf = {};
        this.dB()
    };
    pl.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbUploadPhoto = this.Dd.A(this)
    };
    pl.bz = function(I) {
        I = I || O;
        beO.bz.call(this);
        this.ct = I.ueditor;
        if (!!this.ct) {
            this.ct.addListener("sourcemodechanged", this.ctV.A(this))
        }
    };
    pl.ctV = function(by, ctU) {
        if (!!ctU) {
            this.mM()
        } else {
            this.yG()
        }
    };
    pl.yG = function() {
        this.KN.style.visibility = "hidden"
    };
    pl.mM = function() {
        this.KN.style.visibility = "visible"
    };
    pl.cU = function() {
        return cl + " editoruploadphoto"
    };
    pl.cM = function() {
        return '<div class="uploadCover ztag"></div><iframe class="ztag" width="25" scrolling="no" height="20" frameborder="0" border="0" allowtransparency="true" src="http://www.lofter.com/html/newpublish/uploadphoto.html?005"></iframe>'
    };
    pl.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        this.KN = bHk[0];
        this.Le = bHk[1]
    };
    pl.Dd = function(bH) {
        if (!!this.Le) {
            this.Le.src = "about:blank";
            this.Le.src = loft.x.bM() + "/html/newpublish/uploadphoto.html?005"
        }
        bH = bH || {};
        if (bH.resultcode == 999) {
            var gz = {ow: bH.ow,oh: bH.oh,small: bH.userDef1Url || "",middle: bH.userDef2Url || "",orign: "",photoGarbageIds: bH.photoGarbageIds};
            this.fo.push(gz);
            if (!!this.ct) {
                var beV = [], eJ = {};
                eJ.src = bH.userDef2Url;
                this.Lf[eJ.src] = bH.userDef1Url;
                beV.push(eJ);
                this.ct.focus();
                this.ct.execCommand("insertImage", beV);
                this.ct.execCommand("inserthtml", "<br />")
            }
        } else {
            alert("图片添加失败!")
        }
    };
    pl.bps = function(bpr) {
        var bHk = this.ct.document.getElementsByTagName("img");
        for (var i = 0; i < bHk.length; i++) {
            if (!!bHk[i] && !!bHk[i].src && !!this.Lf[bHk[i].src] && !!bHk[i].tagName && bHk[i].tagName.toLowerCase() == "img") {
                bHk[i].setAttribute(bpr, this.Lf[bHk[i].src])
            }
        }
    };
    pl.Lc = function() {
        this.bps("smallsrc");
        return this.fo
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), ciw, cmf, cl = "ui-" + U.cA();
    var mH = /<.*?>/gi;
    var bTq = "http://l.bst.126.net/rsc/img/ava/64.png" || "http://l.bst.126.net/rsc/img/newpublish/defavatar.png";
    var cjJ = "现在发布", cjK = "自动发布", cja = "定时发布", cjL = "保存为草稿", cjj = "仅自己可见";
    P(N.ui).fx("#<uispace>{position:relative;z-index:100;zoom:1;width:674px;color:#444;font-size:12px;}#<uispace> .pleft{float:left;}#<uispace> .pright{float:right;}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .publishlayer .cCommonsArea{height:33px;}#<uispace> .publishlayer .siteSyncArea{float:right;}#<uispace> .m-mlist .w-img a{position:relative;z-index:10;}#<uispace> .m-mlist .w-img img{position:relative;z-index:10;}#<uispace> .m-mlist .w-img .blogavatar{position:absolute;left:0;top:0;z-index:1;width:64px;height:64px;background-size:cover;background-color:transparent;background-repeat:no-repeat;}#<uispace> .m-mlist .w-img .blogavatar{-webkit-transform-style:preserve-3d;backface-visibility:hidden;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;}#<uispace> .m-mlist .w-img .blogavatar{transform:perspective(300px) rotateY(0deg);-webkit-transform:perspective(300px) rotateY(0deg);-moz-transform:perspective(300px) rotateY(0deg);-o-transform:perspective(300px) rotateY(0deg);}#<uispace> .m-mlist .w-img .newblogavatar{z-index:0;transform:perspective(300px) rotateY(180deg);-webkit-transform:perspective(300px) rotateY(180deg);-moz-transform:perspective(300px) rotateY(180deg);-o-transform:perspective(300px) rotateY(180deg);}#<uispace> .m-mlist .w-img a.js-useblogavatar img{visibility:hidden;}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .blogavatar{transition:transform 0.3s linear, z-index 0.3s linear;-webkit-transition:-webkit-transform 0.3s linear, z-index 0.3s linear;-moz-transition:-moz-transform 0.3s linear, z-index 0.3s linear;-o-transition:-o-transform 0.3s linear,z-index 0.3s linear;}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .blogavatar{z-index:0;transform:perspective(300px) rotateY(180deg);-webkit-transform:perspective(300px) rotateY(180deg);-moz-transform:perspective(300px) rotateY(180deg);-o-transform:perspective(300px) rotateY(180deg);}#<uispace> .m-mlist .w-img a.js-useblogavatar.js-animating .newblogavatar{z-index:1;transform:perspective(300px) rotateY(360deg);-webkit-transform:perspective(300px) rotateY(360deg);-moz-transform:perspective(300px) rotateY(360deg);-o-transform:perspective(300px) rotateY(360deg);}#<uispace> .actionBar .previewBtn{float:right;}#<uispace> .actionBar .publishArea{float:right;}#<uispace> .actionBar .publishBtn{float:left;overflow:hidden;}#<uispace> .actionBar .publishType{float:left;}#<uispace> .m-mlist .mlistcnt .isay{position:relative;}#<uispace> .m-mlist .mlistcnt .isay .overlayer{display:none;position:absolute;left:23px;right:2px;top:1px;bottom:3px;z-index:1000;background:rgba(255, 255, 255, 0.7);}", cl);
    p.cjz = C();
    ciw = p.cjz.bi(P(N.ui).ga, true);
    cmf = p.cjz.bw;
    p.cjz.YV = function(bl, I) {
        I = I || {};
        if (!!this.eb && !this.eb.bby()) {
            this.db(this.eb)
        }
        bl = bl || document.body;
        I.singleton = true;
        try {
            this.eb = p.cjz.bG(bl, I)
        } catch (e) {
        }
        return this.eb
    };
    p.cjz.db = function(hk) {
        if (!!hk)
            hk.cnh(hk.ciT);
        p.cjz.bHq.db.call(this, hk)
    };
    ciw.bq = function(bl, I) {
        this.bHq(bl, I);
        this.dB();
        this.nW = {};
        V.bHn(document, "keydown", this.cpr.A(this), true)
    };
    ciw.cpr = function(bHl) {
        if (!this.cni()) {
            var bJS = bHl.which || bHl.keyCode;
            if (bJS == 74 || bJS == 75 || bJS == 72 || bJS == 76 || bJS == 83 || bJS == 68) {
                V.qK(bHl);
                return
            }
            if (bJS == 27 && E.be("atinput").style.visibility === "hidden") {
                this.ku()
            }
        }
    };
    ciw.cpq = function(ciH) {
        this.cpp(ciH);
        this.bQI();
        this.cpo();
        this.bXc();
        this.bXd();
        this.bXb();
        this.bXe()
    };
    ciw.cpn = function(bN, ciH) {
        this.bhw = bN;
        this.bOE();
        this.cpq(ciH);
        if (!!this.bhw && this.bhw != "null") {
            var Z = this.bhw.content || this.bhw.caption || this.bhw.answer;
            var eg = false;
            if (this.bX == "REBLOG") {
                Z = this.os();
                eg = true
            }
            if (!!this.gt) {
                Z = this.ov(Z);
                eg = true
            }
            if (!!Z && (this.bX == "EDIT" || this.bX == "REBLOG")) {
                this.cmi(Z, eg, true)
            } else {
                this.cmi(Z, eg)
            }
        }
    };
    ciw.cmk = function() {
        return this.dm
    };
    ciw.os = function() {
        if (!this.bhw || !this.bhw.blogInfo)
            return "";
        var Z = this.bhw.content || this.bhw.caption || "";
        var bDB = U.ew(this.bhw.blogInfo.blogNickName || this.bhw.blogInfo.blogName);
        var oy = loft.x.bM(this.bhw.blogInfo.blogName) + "/post/" + this.bhw.permalink;
        var hW = "<p><br></p>";
        if (B.da) {
            hW = "<p>&nbsp;</p>"
        }
        if (!Z) {
            return hW + '<p reblogfrom="reblogfrom">转载自：<a href="' + oy + '">' + bDB + "</a></p>"
        } else {
            return hW + '<p reblogfrom="reblogfrom"><a href="' + oy + '">' + bDB + ":</a></p><blockquote>" + Z + "</blockquote>" + hW
        }
    };
    ciw.ov = function(Z) {
        Z = Z || this.bhw.content || this.bhw.caption || "";
        if (!!this.bhw && !!this.bhw.queuePost) {
            return Z
        }
        var kH = "";
        var oG = "";
        if (!!this.clk) {
            kH = U.ew(this.clk.blogNickName || this.clk.blogName);
            oG = loft.x.bM(this.clk.blogName)
        }
        if (!!kH) {
            Z = Z + '<p>来自：<a href="' + oG + '">' + kH + "</a></p>"
        }
        return Z
    };
    ciw.bHu = function(bl, I) {
        cmf.bHu.call(this, bl, I)
    };
    ciw.bz = function(I) {
        I = I || {};
        this.clG = I.minFrameHeight || "";
        this.clH = I.maxFrameHeight || "";
        this.clI = I.autoHeightEnabled || false;
        this.ciT = I.js_activating;
        this.bXv(I);
        this.bHn("ontempsavepost", I.ontempsavepost || F);
        this.bHn("oncancel", I.oncancel || F);
        this.bHn("onpublish", I.onpublish || F);
        this.bHn("onpreview", I.onpreview || F)
    };
    ciw.bXv = function(I) {
        I = I || {};
        this.cjf = I.targetBlogInfo || {};
        this.brp = this.cjf.blogName || "";
        this.kq = I.blogList || [];
        this.bhw = I.post || null;
        this.cmr = this.cmr || I.lastCCType || -1;
        this.cjp = I.postOverNum || false;
        this.bGz = I.postType || "";
        this.bX = I.actionType || "";
        this.nM = I.editorType || "";
        this.clE = I.ue_cfg_develop || false;
        this.ckW = I.ue_js_version || "";
        this.gn = I.isCitePost;
        this.gt = I.isContribute;
        this.lD = I.isDraftPost;
        this.cpm();
        this.clk = I.submiterBlogInfo || null;
        if (this.bX == "NEW") {
            this.sW = this.clg()
        }
    };
    ciw.clg = function() {
        var cnl = loft.x.wc(location.hash, "from", "#");
        var bp = location.href || "";
        if (bp.length >= 27 && bp.substring(0, 27) == "http://www.lofter.com/time/") {
            cnl = "blogPostQueue"
        }
        return cnl
    };
    ciw.cpm = function(bHm) {
        if (!!bHm && !!bHm.n && !!bHm.imgurl) {
            this.ciR.href = "http://" + bHm.n + ".lofter.com";
            this.ciR.title = bHm.t || bHm.n || "";
            this.bkb.src = bHm.imgurl || bTq;
            this.cjx = loft.x.eK(bHm.imgurl, 64) || bTq;
            this.cms.style.backgroundImage = 'url("' + (this.cjx || bTq) + '")'
        } else {
            this.ciR.href = "http://" + this.cjf.blogName + ".lofter.com";
            this.ciR.title = this.cjf.blogNickName || this.cjf.blogName || "";
            this.bkb.src = this.cjf.bigAvaImg || bTq;
            this.cjx = loft.x.eK(this.cjf.bigAvaImg, 64) || bTq;
            this.cms.style.backgroundImage = 'url("' + (this.cjx || bTq) + '")'
        }
    };
    ciw.bOE = function(bUp) {
        this.dm = this.brp;
        if (!!this.bhw && this.bX != "REBLOG") {
            if (!!this.bhw.blogName) {
                this.dm = this.bhw.blogName
            } else if (!!this.bhw.blogInfo && !!this.bhw.blogInfo.blogName) {
                this.dm = this.bhw.blogInfo.blogName
            }
        }
        if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogInfo && !!this.bhw.blogInfo.blogName && this.dm == this.bhw.blogInfo.blogName) {
            if (!!this.kq && !!this.kq[0] && !!this.kq[0].blogInfo) {
                this.dm = this.kq[0].blogInfo.blogName || ""
            } else {
                this.dm = ""
            }
        }
        this.bIz = cjJ;
        if (!!this.bhw && this.bhw != "null") {
            if (!!this.bhw.queuePost && this.bhw.queuePost.valid == 15 || this.bhw.queuePostType == 15) {
                this.bIz = cja
            } else if (!!this.bhw.queuePost && this.bhw.queuePost.valid == 16 || this.bhw.queuePostType == 16) {
                this.bIz = cjK
            } else if (!this.bhw.isContribute && !this.bhw.isPublished) {
                this.bIz = cjL
            } else if (this.bhw.allowView == "100") {
                this.bIz = cjj
            } else {
                this.bIz = cjJ
            }
        }
        if (this.sW == "blogPostQueue" && (!this.bhw || this.bhw == "null")) {
            this.bIz = cjK
        }
    };
    ciw.cU = function() {
        return "publishcommon " + cl
    };
    ciw.cjN = function(cpl) {
        if (this.cle) {
            E.bf(this.Y, this.cle)
        }
        this.cle = cpl || "";
        if (this.cle) {
            E.ba(this.Y, this.cle)
        }
    };
    ciw.clc = function() {
        this.cjN()
    };
    ciw.cpk = function(cj) {
        if (!!cj && !E.cr(this.Y, cj)) {
            E.ba(this.Y, cj);
            this.cmt()
        }
    };
    ciw.cnh = function(cj) {
        if (!!cj && E.cr(this.Y, cj)) {
            E.bf(this.Y, cj)
        }
    };
    ciw.cM = function() {
        var cpj = '<div class="publishlayer ztag"><div class="hdinfobar clearfix"><div class="publishTo ztag"></div><div class="reblogfrom f-thide ztag"></div></div><div class="publishMain ztag"></div><div class="editorWrap ztag"><div class="newPublishUEditor ztag"></div><div id="editor_uploadPhotoArea" class="editor_uploadPhotoArea"></div></div><div class="tagArea ztag"></div><div class="siteSyncArea ztag"></div><div class="clearfix cCommonsArea ztag"></div><div class="clearfix actionBar"><div class="publishArea" hidefocus="true"><button class="publishBtn f-noselect f-commonicon ztag" hidefocus="true"><span class="ztag">发&#12288;布</span></button><div class="publishType ztag"></div></div><button class="previewBtn f-noselect f-commonicon ztag" hidefocus="true"><span>预&#12288;览</span></button><button class="cancelBtn f-noselect f-commonicon ztag" hidefocus="true"><span>取&#12288;消</span></button></div></div>';
        var dc = '<div class="m-mlist"><div class="mlistimg"><div class="w-img"><a class="ztag" target="_blank"><img class="ztag" /><span class="blogavatar ztag"></span><span class="blogavatar newblogavatar ztag"></span></a></div></div><div class="mlistcnt"><div class="isay"><div class="isayt"><span class="isayc"></span></div><div class="isaym"><div class="publishlayerwrap">' + cpj + '</div></div><div class="isayb"></div><div class="overlayer ztag"></div></div></div></div>';
        return dc
    };
    ciw.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.ciR = bHk[Q++];
        this.bkb = bHk[Q++];
        this.cpi = bHk[Q++];
        this.cms = bHk[Q++];
        this.ciE = bHk[Q++];
        this.uj = bHk[Q++];
        this.clb = bHk[Q++];
        this.ckA = bHk[Q++];
        this.JL = bHk[Q++];
        this.cph = bHk[Q++];
        this.Yp = bHk[Q++];
        this.cpg = bHk[Q++];
        this.cpf = bHk[Q++];
        this.uh = bHk[Q++];
        this.ckz = bHk[Q++];
        this.bXo = bHk[Q++];
        this.qp = bHk[Q++];
        this.iO = bHk[Q++];
        this.ckh = bHk[Q++];
        V.bHn(this.iO, "click", this.ku.A(this));
        V.bHn(this.qp, "click", this.qN.A(this));
        V.bHn(this.uh, "click", this.nA.A(this))
    };
    ciw.cK = function() {
        cmf.cK.call(this)
    };
    ciw.czv = function() {
        this.cK();
        E.hE(this.Y);
        delete this
    };
    ciw.cy = function() {
        this.Y.style.display = "none";
        this.clq = false
    };
    ciw.cni = function() {
        if (this.Y.style.display == "block") {
            return false
        }
        if (this.Y.style.display == "none") {
            return true
        }
        if (!E.cr(this.Y, "js-showpublishlayer")) {
            return true
        }
        return false
    };
    ciw.bE = function() {
        this.Y.style.display = "block";
        this.cmt()
    };
    ciw.cno = function(ckm, bB) {
        this.ckh.style.zIndex = ckm || 1e3;
        if (bB !== undefined) {
            this.ckh.style.opacity = bB || 0
        } else {
            this.ckh.style.opacity = ""
        }
        this.ckh.style.display = "block"
    };
    ciw.cnp = function() {
        this.ckh.style.display = "none";
        this.ckh.style.zIndex = ""
    };
    ciw.ku = function() {
        this.ckV = false;
        this.bh("oncancel")
    };
    ciw.qN = function() {
        this.bh("onpreview")
    };
    ciw.nA = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        var I = {};
        if (!!this.bLt) {
            var bQR = this.bLt.bXC();
            var cwe = this.bLt.cwi();
            if (!!bQR && !!bQR[0]) {
                I.expiredSites = bQR
            }
            I.syncBlogInfo = cwe
        }
        if (!!this.bLU) {
            I.publishTypeData = this.bLU.cF()
        }
        this.bh("onpublish", I);
        this.ckV = false
    };
    ciw.cpe = function(I) {
        return this.cpd(I)
    };
    ciw.cra = function() {
        if (!this.cky())
            return;
        if (!this.ct)
            return;
        var Z = this.ct.getContent();
        return Z
    };
    ciw.cnq = function(I) {
        if (!this.cky())
            return;
        I = I || O;
        var iX = I.noShowError || false;
        if (!this.ct)
            return;
        var Z = this.ct.getContent();
        Z = loft.x.mP(Z);
        Z = loft.x.jo(Z);
        if (this.bX == "REBLOG" && !!Z) {
            Z = loft.x.Gg(Z)
        }
        if (!!Z && Z.replace(mH, "").length > 5e4) {
            if (!iX)
                E.bd("日志内容超过5万字，请精简！", true, false, false, true);
            return
        }
        if (!!Z && Z.length > 2e5) {
            if (!iX)
                E.bd("日志中HTML代码超过20万字符，请精简！", true, false, false, true);
            return
        }
        return Z
    };
    ciw.cpd = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var Z = this.cnq(I);
        if (Z === undefined || Z === null)
            return;
        var bQ = this.cnr();
        var bc = "";
        var bDB = "";
        var bHm;
        if (!!this.dF) {
            bHm = this.cns();
            if (!!bHm) {
                bc = bHm.v || "";
                bDB = bHm.n || ""
            }
        }
        bHm = this.bLU.cF();
        var mc = "0";
        var bQW = false;
        var bLL = -1;
        var bOM = -1;
        if (!!bHm && bHm.v == cjj) {
            mc = "100";
            bQW = true
        } else if (!!bHm && bHm.v == cjL) {
        } else if (!!bHm && bHm.v == cja) {
            bLL = 15;
            var bHK = this.bLU.clV();
            var bIj = this.bLU.ckF();
            if (!bHK) {
                if (!iX)
                    E.bd("请输入定时发布的日期！", true, false, false, true);
                return
            } else if (!loft.w.bIu.bOo(bHK)) {
                if (!iX)
                    E.bd("时间设置错误，请重新设置再发布！", true, false, false, true);
                return
            }
            if (!bIj) {
                if (!iX)
                    E.bd("请输入定时发布的时间！", true, false, false, true);
                return
            } else if (!loft.w.bIu.bUA(bIj, "HH:mm")) {
                if (!iX)
                    E.bd("时间设置错误，请重新设置再发布！", true, false, false, true);
                return
            }
            var bUG;
            try {
                bUG = new Date(bHK + " " + bIj)
            } catch (e) {
                return
            }
            bOM = bUG.getTime()
        } else if (!!bHm && bHm.v == cjK) {
            bLL = 16
        } else {
            bQW = true
        }
        var lU = "0";
        if (!!this.hX) {
            bHm = this.hX.cF();
            if (!!bHm) {
                lU = bHm.v || "0"
            }
        }
        var hd = {blogId: bc,blogName: bDB,content: Z,allowView: mc,isPublished: bQW,cctype: lU,tag: bQ.join(","),syncSites: this.bWP()};
        if (!!bLL && bLL != -1) {
            hd.queuePostType = bLL
        }
        if (bLL == 15) {
            var zV = new Date;
            if (!bOM) {
                if (!iX)
                    E.bd("请输入定时发布的时间！", true, false, false, true);
                return
            } else if (bOM <= zV.getTime()) {
                if (!iX)
                    E.bd("定时发布的时间不能早于当前时间！", true, false, false, true);
                return
            } else {
                hd.queuePostPublishTime = bOM
            }
        }
        return hd
    };
    ciw.cnr = function() {
        var bQ;
        if (!!this.dV) {
            bQ = this.dV.ne()
        }
        return bQ || []
    };
    ciw.cns = function() {
        if (!!this.dF) {
            return this.dF.cF()
        }
    };
    ciw.bQI = function() {
        if (!!this.kq) {
            this.oF()
        }
    };
    ciw.oF = function(cpc, ub) {
        this.kq = cpc || this.kq;
        this.dm = ub || this.dm;
        var nD = 0;
        if (!!this.kq && this.kq.length > 0) {
            var bo;
            var cf = [];
            for (var i = 0; i < this.kq.length; i++) {
                var dY = this.kq[i].blogInfo || {};
                if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogId && dY.blogId == this.bhw.blogId) {
                    continue
                }
                bo = {t: dY.blogNickName,n: dY.blogName,v: dY.blogId,imgurl: dY.bigAvaImg,role: this.kq[i].role};
                if (this.bGz == 2) {
                    bo.isNeedImageStamp = dY.imageStamp;
                    bo.isNeedImageDigitStamp = dY.imageDigitStamp
                }
                cf.push(bo);
                if (bo.n == this.dm) {
                    nD = i
                }
            }
            var I = {noDownListWhenOne: true,noSelect: this.gt,index: nD,"class": "selpublishto",zIndex: 115,items: cf,onchange: this.uN.A(this),onshowdownlist: this.cmw.A(this),onhidedownlist: this.cmx.A(this)};
            if (!this.dF) {
                this.dF = p.jv.bG(this.uj, I)
            } else {
                this.dF.bz(I)
            }
        }
    };
    ciw.uN = function(bc, Q, bHm, clS) {
        bHm = bHm || O;
        var cmy = loft.x.eK(bHm.imgurl, 64) || bTq;
        if (!clS) {
            this.cnv(cmy)
        } else {
            if (this.cjx !== cmy) {
                window.setTimeout(function() {
                    this.cnv(cmy)
                }.A(this), 600)
            }
        }
        this.ciR.href = "http://" + bHm.n + ".lofter.com";
        this.ciR.title = bHm.t || bHm.n || "";
        this.wx(bc);
        this.bOG()
    };
    ciw.cpo = function() {
        this.cpb()
    };
    ciw.cpb = function() {
        if (this.bX == "REBLOG" && !!this.bhw && !!this.bhw.blogInfo && !!this.bhw.blogInfo.blogName) {
            this.clb.innerText = "转载自 " + (this.bhw.blogInfo.blogNickName || this.bhw.blogInfo.blogName);
            this.clb.style.display = "block"
        } else {
            this.clb.innerText = "";
            this.clb.style.display = "none"
        }
    };
    ciw.cpp = function(ciH) {
        if (ciH)
            return;
        if (!this.cjl) {
            this.cjl = {parent: this.cph,ue_cfg_develop: this.clE,ue_js_version: this.ckW,ongenueditor: this.cpa.A(this)};
            if (p.cyX.ie) {
                this.cjl.forceNew = true
            }
        }
        this.cjl.minFrameHeight = this.clG || "";
        this.cjl.maxFrameHeight = this.clH || "";
        this.cjl.autoHeightEnabled = this.clI || false;
        this.cmt()
    };
    ciw.cky = function() {
        return !this.cni() && E.cr(this.Y, this.ciT)
    };
    ciw.cmt = function() {
        if (!!this.clq)
            return;
        if (this.cky() && !!this.cjl) {
            this.clq = true;
            if (this.cjl.parent) {
                var bHk = E.bj(this.cjl.parent, "edui-editor") || [];
                for (var i = 0; i < bHk.length; i++) {
                    E.hv(bHk[i])
                }
            }
            if (!this.cnw) {
                this.cnw = p.cjC.ckX(this.cjl)
            } else {
                this.cnw.ckX(this.cjl);
                this.crC = this.ct.getContentTxt();
                this.crJ = []
            }
        }
    };
    ciw.bYG = function(clJ, clK) {
        this.clG = clJ || 0;
        this.clH = clK || 0;
        if (this.clG > this.clH) {
            this.clH = this.clG
        }
        this.cjl.minFrameHeight = this.clG || "";
        this.cjl.maxFrameHeight = this.clH || "";
        if (!!this.cnw) {
            this.cnw.bYG(this.ct, this.clG, this.clH, true)
        }
    };
    ciw.cui = function(tF) {
        tF = tF || this.ct;
        if (!tF)
            return;
        tF.addListener("fullscreenchanged", this.cuh.A(this));
        this.pd = p.Db.bG("editor_uploadPhotoArea", {ueditor: tF});
        V.bHn(window, "resize", this.cug.A(this))
    };
    ciw.cuh = function(by, cuq) {
        this.cug()
    };
    ciw.cug = function(bHl) {
        var ctT = E.be("editor_uploadPhotoArea");
        if (!ctT)
            return;
        if (this.nM == "text" && E.cr(document.body, "js-ueditor-fullscreen")) {
            var dp = document.documentElement || document.body;
            var Az = dp.clientWidth;
            if (Az > 630) {
                ctT.style.left = (Az - 630) / 2 + 335 + "px"
            } else {
                ctT.style.left = 335 + "px"
            }
        } else {
            ctT.style.left = ""
        }
    };
    ciw.cpa = function(I) {
        if (!!I && !!I.parent) {
            if (!!I.uEditorInstance) {
                this.ct = I.uEditorInstance;
                this.cui();
                this.ct.addListener("keyup", this.crQ.A(this));
                this.ct.addListener("keydown", this.bUg.A(this));
                V.bHn(document.body, "keydown", this.bUg.A(this, ""));
                this.bXu();
                if (this.bX == "NEW") {
                    this.ct.addListener("afterselectionchange", this.wQ.A(this));
                    this.ct.addListener("afterexeccommand", this.wR.A(this))
                }
                if (!!this.clf && this.clf.content !== undefined) {
                    this.cmi(this.clf.content, this.clf.notend, this.clf.remember);
                    this.clf = undefined
                }
            } else if (I.code == -1) {
            } else if (I.code == -2) {
            } else {
            }
            this.crC = this.ct.getContentTxt();
            this.crJ = []
        }
    };
    ciw.wQ = function(bHl) {
        this.bh("ontempsavepost")
    };
    ciw.wR = function() {
        this.bh("ontempsavepost")
    };
    ciw.bXu = function() {
        loft.x.csb(this.ct)
    };
    ciw.cmi = function(Z, eg, cqI) {
        if (!this.cky()) {
            this.clf = {};
            this.clf.content = Z || "";
            this.clf.notend = eg;
            this.clf.remember = cqI;
            return
        }
        if (!!this.ct) {
            try {
                this.ct.focus();
                Z = Z || "";
                if (Z === "") {
                    this.ct.setContent("<br>")
                } else {
                    this.ct.setContent(Z)
                }
                loft.x.Gh(this.ct, eg);
                this.cqv = this.cnq({noShowError: true});
            } catch (e) {
            }
        } else {
            this.clf = {};
            this.clf.content = Z || "";
            this.clf.notend = eg;
            this.clf.remember = cqI
        }
        if (!!this.ct) {
            this.crC = this.ct.getContentTxt()
        } else {
            this.crC = ""
        }
        this.crJ = []
    };
    ciw.cqZ = function() {
        return this.cqv
    };
    ciw.bUg = function(by, bHl) {
        if (this.cni())
            return;
        if (!bHl)
            return;
        var bJS = bHl.which || bHl.keyCode;
        if (bHl.ctrlKey && bJS == 13) {
            if (!!this.ct.ui && this.ct.ui.isFullScreen())
                return;
            this.nA()
        }
    };
    ciw.crQ = function(by, bHl) {
        var bJS = bHl.which || bHl.keyCode;
        if (bJS !== 17 && bJS !== 86 && this.ct.getContentTxt().split("@").length === this.crC.split("@").length + 1) {
            var czu = E.bj(document.body, "newPublishUEditor")[0], lL = czu.getElementsByTagName("iframe")[0], czo = lL.id;
            if (!!loft.x.csi(czo) || loft.c.cm.userId <= 0) {
                this.crC = this.ct.getContentTxt();
                return
            }
            var crK = new loft.w.crZ(null, {textBody: this.ct.document.body,iframeId: czo,noIframeOffset: true,cbDelTag: this.crL.A(this)});
            this.crJ.push(crK)
        }
        this.crC = this.ct.getContentTxt()
    };
    ciw.crL = function() {
        this.crC = this.ct.getContentTxt()
    };
    ciw.coZ = function() {
        return this.ct
    };
    ciw.coY = function() {
        if (!!this.pd) {
            return this.pd.Lc()
        }
    };
    ciw.bXc = function() {
        this.bWW()
    };
    ciw.bWW = function(ck) {
        if (!!this.bhw && this.bhw != "null") {
            ck = ck || this.bhw.tag
        }
        ck = ck || "";
        var I = {tags: ck,onexceedmaxtagnum: this.oD.A(this),onexceedmaxcharpertag: this.oA.A(this),ontageditorfocus: this.coX.A(this)};
        if (!!this.dV) {
            this.dV.nI(ck)
        } else {
            this.dV = P("loft.m.newpublish.w").eG.bG(this.Yp, I)
        }
    };
    ciw.oA = function(gC) {
        E.bd("标签长度不能超过" + gC + "个字。", true, false, false, true)
    };
    ciw.oD = function(gC) {
        E.bd("最多只能设置" + gC + "个标签。", true, false, false, true)
    };
    ciw.coX = function() {
        var bc;
        if (!!this.dF) {
            var bg = this.dF.cF();
            if (!!bg)
                bc = bg.v || ""
        }
        this.ckZ(bc)
    };
    ciw.nI = function(ck) {
        if (!!this.dV) {
            this.dV.nI(ck)
        }
    };
    ciw.ckZ = function(bc) {
        var dH;
        if (!!bc) {
            dH = this.nW[bc]
        }
        if (!!this.dV) {
            this.dV.cnb(dH)
        }
    };
    ciw.coW = function(bc) {
        this.ckZ()
    };
    ciw.wx = function(bc) {
        var dH = this.nW[bc];
        if (!!dH) {
            this.ckZ(bc)
        } else {
            J.br(location.dwr, "TagBean", "getBlogHotAndRecommendTags", bc, this.tW.A(this, bc))
        }
    };
    ciw.tW = function(bc, hZ) {
        hZ = hZ || {};
        var dH = hZ["hotTags"];
        this.ux(bc, dH)
    };
    ciw.ux = function(bc, dH) {
        if (!!dH && !!dH[0]) {
            this.nW[bc] = dH;
            this.ckZ(bc)
        } else {
            this.coW()
        }
    };
    ciw.bXd = function() {
        if (!this.kJ) {
            var ve = [{t: "0",v: "0"}, {t: "1",v: "1"}, {t: "2",v: "2"}, {t: "3",v: "3"}, {t: "4",v: "4"}, {t: "5",v: "5"}, {t: "6",v: "6"}, {t: "了解更多",n: "http://www.lofter.com/CreativeCommons",v: "7"}];
            this.kJ = {index: 0,zIndex: 6,"class": "selccommons",items: ve,onchange: this.wL.A(this),onshowdownlist: this.cmw.A(this),onhidedownlist: this.cmx.A(this)}
        }
        this.kJ.noSelect = this.gn || this.bX == "REBLOG";
        if (!!this.kJ.noSelect) {
            this.kJ.hoverTips = "转载文章不可更改授权"
        }
        this.nU()
    };
    ciw.nU = function() {
        var Q = 0;
        if (!!this.bhw && !!this.bhw.cctype) {
            try {
                Q = parseInt(this.bhw.cctype)
            } catch (e) {
            }
        }
        Q = Q || 0;
        if (this.bX == "NEW" && (!this.bhw || this.bhw == "null")) {
            Q = this.cmr || -1
        }
        this.kJ.index = Q;
        if (!this.hX) {
            this.hX = p.vG.bG(this.cpf, this.kJ)
        } else {
            this.hX.bz(this.kJ)
        }
    };
    ciw.wL = function(bg) {
    };
    ciw.bXb = function() {
        this.bOG()
    };
    ciw.bWM = function(bNp) {
        var bHm, bJD = {isDraftPost: this.lD,actionType: this.bX,editorType: this.nM};
        bJD.forceRefresh = !!bNp;
        if (!!this.dF) {
            bHm = this.dF.cF();
            if (!!bHm) {
                bJD.blogId = bHm.v || "";
                bJD.blogName = bHm.n || "";
                bJD.role = bHm.role
            }
        }
        if (!!this.bLU) {
            bHm = this.bLU.cF();
            if (!!bHm && bHm.v == cjj) {
                bJD.noSiteSync = true
            } else {
                bJD.noSiteSync = false
            }
        }
        return bJD
    };
    ciw.bOG = function(bNp) {
        var bJD = this.bWM(bNp);
        if (!this.bLt) {
            this.bLt = P("loft.w").bQs.bG(this.cpg, bJD)
        } else {
            this.bLt.bz(bJD)
        }
    };
    ciw.bWP = function() {
        var bUP = "";
        if (!!this.bLt) {
            bUP = this.bLt.Hm()
        }
        return bUP
    };
    ciw.cnz = function() {
        this.bOG(true)
    };
    ciw.dB = function() {
        var bJ = P("loft.m.g");
        bJ.refreshSiteSync = this.cnz.A(this)
    };
    ciw.bXe = function() {
        this.bWY()
    };
    ciw.bWY = function(bWU) {
        this.bIz = bWU || this.bIz;
        var bUy = 0;
        var bIy;
        var bo;
        var cf = [];
        if (this.bGz != 5 && (this.bX == "NEW" || this.bX == "REBLOG")) {
            bIy = [cjJ, cjK, cja, cjL, cjj]
        } else if (this.bX == "EDIT" && !!this.bhw && this.bhw != "null") {
            if (!this.bhw.isPublished) {
                if (this.bhw.isContribute) {
                    bIy = [cjJ, cjK, cja, cjj]
                } else {
                    bIy = [cjJ, cjK, cja, cjL, cjj]
                }
            } else {
                bIy = [cjJ, cjj]
            }
        } else {
            bIy = [cjJ, cjj]
        }
        for (var i = 0; i < bIy.length; i++) {
            bo = {t: bIy[i],n: bIy[i],v: bIy[i]};
            if (bo.n == cja && !!this.bhw && this.bhw != "null") {
                if (!!this.bhw.queuePost && this.bhw.queuePost.valid == 15) {
                    bo.publishDateTime = this.bhw.queuePost.publishTime
                } else if (this.bhw.queuePostType == 15) {
                    bo.publishDateTime = this.bhw.queuePostPublishTime
                }
            }
            cf.push(bo);
            if (bo.n == this.bIz) {
                bUy = i
            }
        }
        var I = {noSelect: false,index: bUy,"class": "selpublishtype",zIndex: 12,items: cf,onchange: this.bWT.A(this),onshowdownlist: this.cmw.A(this),onhidedownlist: this.cmx.A(this)};
        if (!this.bLU) {
            this.bLU = p.cma.bG(this.bXo, I)
        } else {
            this.bLU.bz(I)
        }
    };
    ciw.bWT = function(by, Q) {
        if (by == cjj) {
            this.ckz.innerText = "发布自己可见"
        } else {
            if (by == cja) {
                this.ckz.innerText = "定时发布"
            } else if (by == cjK) {
                this.ckz.innerText = "加入队列"
            } else if (by == cjL) {
                this.ckz.innerText = "保存草稿"
            } else {
                this.ckz.innerText = "发　布"
            }
        }
        this.bOG()
    };
    ciw.cpW = function() {
        return this.ckA
    };
    ciw.ciQ = function(bk) {
        if (!!bk && !!this.ckA) {
            this.ckA.insertAdjacentElement("beforeEnd", bk)
        }
    };
    ciw.ciX = function() {
        if (!!this.ckA) {
            this.ckA.innerHTML = ""
        }
    };
    ciw.cnv = function(cjS) {
        this.bkb.style.transition = "none";
        E.bf(this.ciR, "js-animating");
        E.bf(this.ciR, "js-useblogavatar");
        this.cpi.style.backgroundImage = 'url("' + (this.cjx || bTq) + '")';
        this.cjx = cjS;
        this.cms.style.backgroundImage = 'url("' + (this.cjx || bTq) + '")';
        E.ba(this.ciR, "js-useblogavatar");
        window.setTimeout(function() {
            this.bkb.style.transition = ""
        }.A(this), 1);
        window.setTimeout(function() {
            E.ba(this.ciR, "js-animating")
        }.A(this), 300)
    };
    ciw.coV = function() {
        this.bkb.style.visibility = "visible";
        E.bf(this.ciR, "js-useblogavatar");
        E.bf(this.ciR, "js-animating");
        var coU = this.cjf.bigAvaImg || bTq;
        window.setTimeout(function() {
            this.bkb.style.visibility = ""
        }.A(this), 1);
        if (coU !== this.cjx) {
            window.setTimeout(function() {
            }.A(this), 600)
        }
    };
    ciw.ckw = function(ckv) {
        if (!!ckv) {
            E.bf(this.ciR.parentNode, "js-userimgscale")
        } else {
            E.ba(this.ciR.parentNode, "js-userimgscale")
        }
    };
    ciw.cmA = function() {
        this.ckw(true)
    };
    ciw.cmB = function(cjT) {
        var eT = this.ciE.clientHeight || 0;
        if (eT < cjT)
            eT = cjT;
        this.ciE.parentNode.style.height = eT + "px";
        this.ciE.parentNode.style.minHeight = eT + "px";
        window.setTimeout(function() {
            this.ciE.parentNode.style.transition = "none";
            this.ciE.parentNode.style.height = "auto";
            window.setTimeout(function() {
                this.ciE.parentNode.style.minHeight = cjT + "px";
                this.ciE.parentNode.style.transition = ""
            }.A(this), 1);
            this.ciE.parentNode.style.visibility = "visible";
            this.ciE.parentNode.style.overflow = "visible"
        }.A(this), 350)
    };
    ciw.cmC = function() {
        var eT = this.ciE.clientHeight || 0;
        if (eT > 0) {
            this.ciE.parentNode.style.height = eT + "px"
        }
        this.ciE.parentNode.style.visibility = "hidden";
        this.ciE.parentNode.style.overflow = "hidden";
        this.ciE.parentNode.style.minHeight = 0;
        this.ciE.parentNode.style.height = ""
    };
    ciw.cmD = function(cjT, ckv) {
        this.bE();
        window.setTimeout(this.ckw.A(this, ckv), 1);
        this.cmB(cjT)
    };
    ciw.cmE = function(ca) {
        this.coV();
        this.cmA();
        this.cmC();
        window.setTimeout(function() {
            this.cy();
            ca()
        }.A(this), 350)
    };
    ciw.cmF = function() {
        this.bkb.style.transition = "none";
        this.ciE.parentNode.style.transition = "none";
        this.ckw();
        this.ciE.parentNode.style.visibility = "visible";
        this.ciE.parentNode.style.overflow = "visible";
        this.ciE.parentNode.style.height = "auto";
        window.setTimeout(function() {
            this.bkb.style.transition = "";
            this.ciE.parentNode.style.transition = ""
        }.A(this), 1);
        this.bE()
    };
    ciw.cls = function() {
        this.cy()
    };
    ciw.cuG = function() {
        this.bkb.style.transition = "none";
        if (!!this.ciE && !!this.ciE.parentNode) {
            this.ciE.parentNode.style.transition = "none"
        }
        this.ckw();
        if (!!this.ciE && !!this.ciE.parentNode) {
            this.ciE.parentNode.style.opacity = "";
            this.ciE.parentNode.style.visibility = "visible";
            this.ciE.parentNode.style.overflow = "visible";
            this.ciE.parentNode.style.height = "auto"
        }
        window.setTimeout(function() {
            this.bkb.style.transition = "";
            if (!!this.ciE && !!this.ciE.parentNode) {
                this.ciE.parentNode.style.transition = ""
            }
        }.A(this), 1);
        this.bE()
    };
    ciw.cuH = function() {
        if (!!this.ciE && !!this.ciE.parentNode) {
            this.ciE.parentNode.style.overflow = "hidden";
            this.ciE.parentNode.style.height = "";
            this.ciE.parentNode.style.opacity = ""
        }
        this.cy()
    };
    ciw.cuI = function(cjT) {
        window.setTimeout(this.ckw.A(this, false), 1);
        var eT = this.ciE.clientHeight || 0;
        if (eT < cjT)
            eT = cjT;
        var ca = function() {
        }.A(this);
        var cuO = {from: 56,to: eT,callback: ca};
        if (!this.cuv) {
            this.cuv = new (P("loft.m.newpublish.w").cuP)(this.ciE.parentNode, cuO)
        }
        this.cuv.fD(cuO);
        this.ciE.parentNode.style.visibility = "visible";
        this.ciE.parentNode.style.overflow = "visible"
    };
    ciw.cuJ = function(ca) {
        this.coV();
        this.cmA();
        if (!!this.cuv)
            this.cuv.cvp({callback: ca})
    };
    ciw.bCu = function() {
        return this.Y
    };
    ciw.cmw = function() {
        this.cno(1e3, 0)
    };
    ciw.cmx = function() {
        this.cnp()
    };
    ciw.coT = function(cmG) {
        this.cmr = cmG
    }
})();
(function() {
    var p = P("loft.w"), bKe;
    p.bQB = C();
    bKe = p.bQB.bi(p.fr, true);
    bKe.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "过期提醒";
        this.bHq(bl, I);
        this.ccm(this.bXB.A(this))
    };
    bKe.bXB = function() {
    };
    bKe.bz = function(I) {
        this.ei.iI(I.title);
        this.bNq = I.expiredSites || [];
        if (!!this.bNq[0]) {
            if (this.bNq.length > 1) {
                this.bTY.innerText = this.bNq[0] + "等" + this.bNq.length + "个帐号同步已过期，需重新设置"
            } else {
                this.bTY.innerText = this.bNq[0] + "帐号同步已过期，需重新设置"
            }
        }
        this.cwg = I.syncBlogInfo || {};
        this.bHn("onok", I.onok || F);
        this.bHn("oncc", I.oncc || F);
        this.bHn("onclose", I.onclose || F);
        p.bQB.bw.bz.call(this, I);
        this.bTZ.href = "http://www.lofter.com/theme/" + (this.cwg.blogName || loft.c.cm.blogName) + "/?type=sync"
    };
    bKe.cU = function() {
        return "syncExpiredTipWin"
    };
    bKe.cM = function() {
        return '<div class="layerm"><h4 class="warmt wtag">帐号同步已过期，需重新设置</h4></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" target="_blank" href="#" hidefocus="true">重新设置</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">继续发布</a></div>'
    };
    bKe.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bTY = bHk[0];
        this.bTZ = bHk[1];
        this.bXA = bHk[2];
        V.bHn(this.bTZ, "click", this.ry.A(this));
        V.bHn(this.bXA, "click", this.gL.A(this))
    };
    bKe.ry = function(bHl) {
        if (this.cwg.role == 2) {
            V.bb(bHl);
            this.cy();
            E.bd("非管理员无权设置绑定", true)
        } else {
            V.qK(bHl);
            this.cy()
        }
    };
    bKe.gL = function(bHl) {
        V.bb(bHl);
        this.cy();
        this.bh("oncc")
    }
})();
(function() {
    (function() {
        var p = P(N.ut), Nf, Ne, Nd, GL;
        if (!!window.sessionStorage) {
            Nf = function(bx, bHm) {
                sessionStorage.setItem(bx, U.lO(bHm))
            };
            Ne = function(bx) {
                return U.qr(sessionStorage.getItem(bx))
            };
            GL = function(bx) {
                sessionStorage.removeItem(bx)
            };
            Nd = function() {
                if (!!sessionStorage.clear) {
                    sessionStorage.clear();
                    return
                }
                for (var i = (sessionStorage.length || 0) - 1; i >= 0; GL(sessionStorage.key(i)), i--)
                    ;
            }
        } else {
            var qm;
            try {
                qm = U.qr(window.name.replace(/(document.write|alert|appendChild)/ig, ""))
            } catch (e) {
            }
            if (!qm || !U.co(qm, "object"))
                qm = {};
            var bsv = function() {
                window.name = U.lO(qm)
            };
            Nf = function(bx, bHm) {
                qm[bx] = bHm
            };
            Ne = function(bx) {
                return qm[bx]
            };
            GL = function(bx) {
                delete qm[bx]
            };
            Nd = function() {
                qm = {}
            };
            V.bHn(window, "beforeunload", bsv)
        }
        p.GN = C();
        p.GN.wE = Nf;
        p.GN.qs = Ne;
        p.GN.Nc = Nd;
        p.GN.hz = GL
    })();
    (function() {
        var p = P(N.ut), bgn, bgo, bgq, bgr, bgs, qI;
        var GT = "ntsstorage", bsq = "nts_flash_storage", GV = "http://www.lofter.com/rsc/swf/storage.swf?t=" + (new Date).getTime();
        if (!!window.localStorage) {
            bgn = function(bx, bHm) {
                localStorage.setItem(bx, U.lO(bHm))
            };
            bgo = function(bx) {
                return U.qr(localStorage.getItem(bx))
            };
            bgr = function(bx) {
                localStorage.removeItem(bx)
            };
            bgq = function() {
                localStorage.clear()
            };
            bgs = function(tq) {
                tq = tq || F;
                tq()
            }
        } else {
            (function() {
                document.body.insertAdjacentHTML("beforeEnd", '<div style="position:absolute;top:0;right:0;z-index:999;width:1px;height:1px;overflow:hidden;"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="' + GT + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + GV + '"/><param name="AllowScriptAccess" value="sameDomain"/><embed src="' + GV + '" width="1" height="1"name="' + GT + '" AllowScriptAccess="sameDomain"type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed></object></div>')
            })()
        }
        p.iv = C();
        qI = p.iv.prototype;
        qI.bq = function() {
            this.vY(true)
        };
        qI.vY = function(nd) {
            var ed = E.bfk(GT);
            if (!!ed) {
                if (!!nd)
                    this.bsp(ed)
            } else {
            }
            return ed
        };
        qI.bsp = function(ed) {
            if (!!ed && !!ed.init) {
                ed.init(bsq)
            }
        };
        qI.bsn = function(bx, gA) {
            var ed = this.vY();
            if (!!ed && !!ed.setValue) {
                ed.setValue(bx, gA)
            }
        };
        qI.bsm = function(bx) {
            var ed = this.vY();
            if (!!ed && !!ed.getValue) {
                return ed.getValue(bx)
            }
        };
        qI.bGo = function(bx, gA) {
            var ed = this.vY();
            if (!!ed && !!ed.appendValue) {
                ed.appendValue(bx, gA)
            }
        };
        qI.bsk = function(bx) {
            var ed = this.vY();
            if (!!ed && !!ed.deleteValue) {
                ed.deleteValue(bx)
            }
        };
        qI.bsj = function() {
            var ed = this.vY();
            if (!!ed && !!ed.clearCookie) {
                ed.clearCookie()
            }
        };
        p.iv.jM = function() {
            if (!this.bgN) {
                var ed = E.bfk(GT);
                if (!!ed && !!ed.init) {
                    this.bgN = new p.iv
                }
            }
            return this.bgN
        };
        p.iv.wE = function(bx, bHm) {
            var jP = p.iv.jM();
            if (!!jP) {
                jP.bsn(bx, encodeURIComponent(U.ii(bHm)))
            }
        };
        p.iv.qs = function(bx) {
            var jP = p.iv.jM();
            if (!!jP) {
                return U.fp(decodeURIComponent(jP.bsm(bx)))
            }
        };
        p.iv.Nc = function() {
            var jP = p.iv.jM();
            if (!!jP) {
                jP.bsj()
            }
        };
        p.iv.hz = function(bx) {
            var jP = p.iv.jM();
            if (!!jP) {
                jP.bsk(bx)
            }
        };
        p.iv.kI = function(tq) {
            tq = tq || F;
            var jP, ed;
            jP = p.iv.jM();
            if (!!jP)
                ed = jP.vY();
            if (!!jP && !!ed) {
                tq()
            } else {
                window.setTimeout(this.kI.A(this, tq), 100)
            }
        };
        p.dC = C();
        p.dC.wE = bgn || p.iv.wE;
        p.dC.qs = bgo || p.iv.qs;
        p.dC.Nc = bgq || p.iv.Nc;
        p.dC.hz = bgr || p.iv.hz;
        p.dC.kI = bgs || p.iv.kI
    })()
})();
(function() {
    var p = P("loft.w"), nv;
    var cl = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .errmsg{padding-bottom:10px;color:#E25151;}#<uispace> .imgwrap{float:left;width:80px;height:44px;padding-left:20px;}#<uispace> .imgwrap img{float:left;width:80px;height:44px;}#<uispace> .txtcode{float:left;text-align:center;vertical-align:middle;width:106px;height:44px;line-height:44px;font-size:16px;border:1px solid #C0C0C0;background:url(\"http://l.bst.126.net/rsc/img/shadow-in.png\") no-repeat scroll 0 0 #fff;}#<uispace> .changeimg{float:left;height:44px;line-height:44px;padding-left:20px;color:#5A8DCD;cursor:pointer;}", cl);
    p.fu = C();
    nv = p.fu.bi(p.fr, true);
    nv.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "请输入验证码";
        this.bHq(bl, I)
    };
    p.fu.bGE = function() {
        return this.eb
    };
    p.fu.ky = function(fU) {
        if (!!this.eb) {
            this.eb.ky(fU)
        }
    };
    p.fu.jK = function() {
        if (!!this.eb) {
            this.eb.jK()
        }
    };
    nv.bz = function(I) {
        this.ei.iI(I.title);
        this.bHn("onok", I.onok || F);
        this.bHn("oncc", I.oncc || F);
        p.fu.bw.bz.call(this, I);
        this.jK();
        this.xk.value = "";
        this.bgw.innerText = ""
    };
    nv.cU = function() {
        return cl
    };
    nv.cM = function() {
        return '<div class="layerm"><div class="errmsg thide wtag"></div><div class="clearfix"><input type="text" maxlength="4" class="txtcode wtag" /><div class="imgwrap"><img class="wtag" /></div><div class="changeimg wtag">换一张</div></div></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" href="#" hidefocus="true">确 定</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">取 消</a></div>'
    };
    nv.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bgw = bHk[0];
        this.xk = bHk[1];
        this.bpf = bHk[2];
        this.bpg = bHk[3];
        this.zY = bHk[4];
        this.yU = bHk[5];
        V.bHn(this.zY, "click", this.ry.A(this));
        V.bHn(this.yU, "click", this.gL.A(this));
        V.bHn(this.bpg, "click", this.jK.A(this))
    };
    nv.ky = function(fU) {
        this.bgw.innerText = fU || ""
    };
    nv.jK = function() {
        var bph = "http://www.lofter.com/cap/captcha.jpgx?";
        this.bpf.src = bph + U.cA(5)
    };
    nv.ry = function(bHl) {
        V.bb(bHl);
        if (this.zp()) {
            this.bh("onok", this.xk.value)
        }
    };
    nv.zp = function() {
        this.xk.value = U.bA(this.xk.value);
        if (!this.xk.value) {
            this.ky("请输入验证码！");
            return false
        } else if (this.xk.value.length < 4) {
            this.ky("验证码不少于4位！");
            return false
        } else {
            this.ky("");
            return true
        }
    };
    nv.gL = function(bHl) {
        V.bb(bHl);
        this.cy();
        this.bh("oncc")
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), ciy, coS;
    var mH = /<.*?>/gi;
    var cu = "rescued_post_" + loft.c.cm.userId;
    var cjL = "保存为草稿";
    var ciT = "js-activating";
    p.cks = C();
    ciy = p.cks.bi(P(N.ut).gY);
    coS = p.cks.bw;
    ciy.bq = function(I) {
        this.bHq();
        this.bR = {type: "json",method: "POST",ctype: "application/x-www-form-urlencoded; charset=utf-8"};
        this.bz(I);
        this.un();
        V.bHn(window, "beforeunload", this.BK.A(this));
        this.bUd = {noShowError: true}
    };
    ciy.cK = function() {
        V.iJ(window, "beforeunload", this.BK.A(this));
        if (!!this.ciz && P("loft.m.newpublish.w").cyX.ie) {
            this.ciz.czv()
        }
        this.cnD = true;
        delete this
    };
    ciy.coR = function() {
        var cmH = false;
        if (!!this.ckr) {
            cmH = this.cnD && this.coQ
        } else {
            cmH = this.cnD
        }
        return cmH
    };
    ciy.bz = function(I) {
        I = I || {};
        this.dL = I.parent = I.parent || document.body;
        this.bHn("onpostovernum", I.onpostovernum || F);
        this.bHn("onpostpublished", I.onpostpublished || F);
        this.bHn("onclosepublishlayer", I.onclosepublishlayer || F);
        this.bGz = I.postType || 1;
        this.nM = I.editorType || "text";
        this.cnF = I.defaultHeight || 300;
        this.bX = I.actionType || "";
        this.ckr = I.enableAnimate || false;
        this.cjf = I.targetBlogInfo || {};
        this.brp = I.defaultPublishTo || this.cjf.blogName || "";
        this.bhw = I.post || null;
        this.cjp = I.postOverNum || false;
        this.cku = I.submitUrl;
        if (!this.cku) {
            if (this.bX == "EDIT" && !!this.bhw) {
                this.cku = "http://www.lofter.com/edit/" + this.bhw.permalink
            } else if (this.bX == "REBLOG") {
                this.cku = "http://www.lofter.com/reblog/" + this.bhw.permalink
            } else {
                this.cku = "http://www.lofter.com/blog/" + this.brp + "/new/" + this.nM + "/"
            }
        }
        if (!!this.bhw && (this.bhw.citeRootPostId || -1) > 0) {
            this.gn = true
        } else {
            this.gn = false
        }
        I.isCitePost = this.gn;
        if (!!this.bhw && this.bhw != "null") {
            this.gt = this.bhw.isContribute && !this.bhw.isPublished
        } else {
            this.gt = false
        }
        I.isContribute = this.gt;
        this.lD = false;
        if (!!this.bhw && this.bhw != "null") {
            this.lD = !this.bhw.isContribute && !this.bhw.isPublished
        }
        I.isDraftPost = this.lD;
        this.cnG = false;
        if (!!this.bhw && !!this.bhw.queuePost && (this.bhw.queuePost.valid == 15 || this.bhw.queuePost.valid == 16)) {
            this.cnG = true
        }
        this.cu = this.nM + "_" + cu;
        I.ontempsavepost = this.iD.A(this);
        I.oncancel = this.coP.A(this);
        I.onpreview = this.coO.A(this);
        I.onpublish = this.coN.A(this);
        this.ciT = ciT;
        I.js_activating = this.ciT;
        if (P("loft.m.newpublish.w").cyX.ie) {
            this.ciz = new (P("loft.m.newpublish.w").cjz)(this.dL, I)
        } else {
            this.ciz = P("loft.m.newpublish.w").cjz.YV(this.dL, I)
        }
        if (!!this.ckr) {
            this.cvo()
        } else {
            this.cuG()
        }
        this.csl(false);
        this.clG = I.minFrameHeight;
        this.clH = I.maxFrameHeight
    };
    ciy.un = function() {
        if (this.bX != "NEW") {
            if (!!this.bhw) {
                this.bNu(this.bhw)
            } else {
                this.bNu(null)
            }
        } else {
            this.crn()
        }
        this.ciY({post: this.bhw,actionType: this.bX,minFrameHeight: this.clG,maxFrameHeight: this.clH})
    };
    ciy.ciY = function(I) {
        this.bYG(I.minFrameHeight, I.maxFrameHeight)
    };
    ciy.crn = function() {
        if (!!P(N.ut).dC.kI) {
            P(N.ut).dC.kI(this.vD.A(this))
        } else {
            this.bNu(null)
        }
    };
    ciy.vD = function() {
        if (this.bX == "NEW") {
            this.coL();
            if (!!this.bhw && this.bhw != "null") {
                this.bNu(this.bhw)
            } else {
                this.bNu(null)
            }
            this.bXj()
        }
    };
    ciy.bXj = function() {
        var bLw = loft.x.wc(this.cku, "extraTags", "?");
        if (!bLw && !!location.hash) {
            bLw = loft.x.wc(location.hash, "extraTags", "#")
        }
        bLw = U.bA(bLw);
        if (!bLw || !this.ciz)
            return;
        if (bLw.indexOf("%") >= 0) {
            this.ciz.nI(decodeURIComponent(bLw))
        } else {
            this.ciz.nI(bLw)
        }
    };
    ciy.coL = function() {
        var lY = U.ot(this.cu);
        var kA = P(N.ut).dC.qs(this.cu);
        if (!!lY && !!kA) {
            try {
                this.bKZ(kA)
            } catch (e) {
            }
        }
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.bsM()
        }
    };
    ciy.bsM = F;
    ciy.bKZ = function(kA) {
        this.cookiePostData = kA;
        this.bhw = this.cookiePostData
    };
    ciy.bNu = function(bN, ciH) {
        if (!!bN && bN != "null") {
            this.cjB(this.ciT)
        }
        if (!!this.ciz) {
            this.ciz.cpn(bN, ciH)
        }
    };
    ciy.BK = function(bHl) {
        if (!this.bWV && (!this.bhw || this.bhw == "null" || !!this.cookiePostData)) {
            this.uX()
        }
    };
    ciy.cjN = function(cj) {
        if (!!this.ciz) {
            this.ciz.cjN(cj)
        }
    };
    ciy.clc = function() {
        if (!!this.ciz) {
            this.ciz.clc()
        }
    };
    ciy.cjB = function(cj) {
        if (!!this.ciz) {
            this.ciz.cpk(cj)
        }
    };
    ciy.cnH = function(cj) {
        if (!!this.ciz) {
            this.ciz.cnh(cj)
        }
    };
    ciy.ciQ = function(bk) {
        if (!!this.ciz && !!bk) {
            this.ciz.ciQ(bk)
        }
    };
    ciy.ciX = function() {
        if (!!this.ciz) {
            this.ciz.ciX()
        }
        this.cK()
    };
    ciy.cnI = function() {
        if (!!this.ciz) {
            return this.ciz.coY()
        }
    };
    ciy.crc = function() {
        var Z;
        if (!!this.ciz) {
            Z = this.ciz.cra()
        }
        return Z
    };
    ciy.bQV = function(I) {
        var Z;
        if (!!this.ciz) {
            Z = this.ciz.cnq(I)
        }
        return Z
    };
    ciy.ns = function(Z, eg) {
        if (!!this.ciz) {
            this.ciz.cmi(Z, eg)
        }
    };
    ciy.hl = function() {
        if (!!this.ciz) {
            var tF = this.ciz.coZ();
            if (!!tF) {
                var og = tF.queryCommandState("source");
                if (og == 1) {
                    tF.execCommand("source")
                }
            }
        }
    };
    ciy.gU = function(I) {
        var hd;
        if (!!this.ciz) {
            hd = this.ciz.cpe(I)
        }
        return hd
    };
    ciy.coK = function() {
        var bQ;
        if (!!this.ciz) {
            bQ = this.ciz.cnr()
        }
        return bQ || []
    };
    ciy.coJ = function() {
        if (!!this.ciz) {
            return this.ciz.cns()
        }
    };
    ciy.bXf = function(I) {
        if (!!I && !!I.expiredSites) {
            var bQR = I.expiredSites;
            var cwe = I.syncBlogInfo;
            if (!!bQR && !!bQR[0]) {
                this.cjd(1e3, 0);
                loft.w.bQB.bE({parent: document.body,nocover: true,expiredSites: bQR,title: "过期提醒",syncBlogInfo: cwe,oncc: this.bQS.A(this, I),onok: function() {
                    this.ciL()
                }.A(this),onclose: function() {
                    this.ciL()
                }.A(this)});
                return
            }
        }
        this.bQS(I)
    };
    ciy.bQS = function(I) {
        var bHm = I.publishTypeData;
        if (!!bHm && bHm.v == cjL) {
            this.ti()
        } else {
            this.nA()
        }
    };
    ciy.nA = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        this.hl();
        this.bR.data = this.gU(this.bWS);
        if (!this.bR.data) {
            return
        }
        this.vR()
    };
    ciy.cmk = function(bN) {
        if (!!this.ciz) {
            return this.ciz.cmk()
        }
    };
    ciy.vR = function() {
        this.dm = this.cmk();
        if (this.bX == "EDIT" && this.bR.data.blogName != this.dm && !!this.bhw && !!this.bhw.postCount) {
            if (!!this.gn) {
                if ((this.bhw.postCount.responseCount || 0) > 0) {
                    this.cjd(1e3, 0);
                    loft.w.eD.bE({parent: document.body,nocover: true,title: "发布文章",c1: "如果将该文章发布到其他博客，其中的评论将丢失，是否发布？",onok: this.kl.A(this),oncc: function() {
                        this.ciL()
                    }.A(this),onclose: function() {
                        this.ciL()
                    }.A(this)});
                    return
                }
            } else {
                var tX = (this.bhw.postCount.responseCount || 0) + (this.bhw.postCount.favoriteCount || 0) + (this.bhw.postCount.reblogCount || 0);
                if (tX > 0) {
                    this.cjd(1e3, 0);
                    loft.w.eD.bE({parent: document.body,nocover: true,title: "发布文章",c1: "如果将该文章发布到其他博客，其中的热度和评论将丢失，是否发布？",onok: this.kl.A(this),oncc: function() {
                        this.ciL()
                    }.A(this),onclose: function() {
                        this.ciL()
                    }.A(this)});
                    return
                }
            }
        }
        this.kl()
    };
    ciy.kl = function() {
        if (!!this.cjp && this.bX == "NEW") {
            this.cjd(1e3, 0);
            loft.w.fu.bE({parent: document.body,nocover: true,title: "请输入验证码",onok: function(dW) {
                this.bga(dW)
            }.A(this),oncc: function() {
                this.ciL()
            }.A(this),onclose: function() {
                this.ciL()
            }.A(this)})
        } else {
            this.bga()
        }
    };
    ciy.bga = function(dW) {
        this.oP(dW)
    };
    ciy.oP = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.cjd();
        if (!!this.bR.data.answer) {
            if (!!this.bR.data.onlyAnswer) {
                loft.x.bJH("qbask_20121211_04")
            } else {
                loft.x.bJH("qbask_20121211_05")
            }
        }
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.bUD.A(this, this.bR.data);
        this.bOL(this.cku, this.bR)
    };
    ciy.bUD = function(bHm, bZ) {
        E.gI(true);
        this.ciL();
        if (!!bZ && bZ.r == 1) {
            this.ciZ(bHm, bZ.id, this.bR.data.blogId)
        } else if (!!bZ && bZ.r == -4) {
            E.bd("您提交的内容中含敏感词！", true, false, false, true)
        } else if (!!bZ && bZ.r == -3) {
            loft.w.fu.jK();
            loft.w.fu.ky("验证码错误！");
            this.cjp = true;
            this.bh("onpostovernum", this.cjp);
            return
        } else if (!!bZ && bZ.r == -30) {
            E.bd("定时日志数量超过限制！", true, false, false, true)
        } else if (!!bZ && bZ.r == -31) {
            E.bd("定时日志设置的发布时间已经小于服务器当前时间！", true, false, false, true)
        } else if (!!bZ && bZ.r == -98) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, false, false, true)
        } else if (!!bZ && bZ.r == -99) {
            loft.x.kX()
        } else if (!!bZ && bZ.r == -100) {
            E.bd("您发得太快了，请休息一下。", true, false, false, true)
        } else if (!!bZ && bZ.r == -202) {
            E.bd("每次最多允许@30个人！", true, false, false, true)
        } else {
            E.bd("发布失败，请检查网络或重新登录！", true, false, false, true)
        }
        loft.w.fu.cy()
    };
    ciy.ti = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        this.hl();
        this.bR.data = this.gU(this.bWR);
        if (!this.bR.data)
            return;
        if (!!this.cjp && this.bX == "NEW") {
            this.cjd(1e3, 0);
            loft.w.fu.bE({parent: document.body,nocover: true,title: "请输入验证码",onok: function(dW) {
                this.oI(dW)
            }.A(this),oncc: function() {
                this.ciL()
            }.A(this),onclose: function() {
                this.ciL()
            }.A(this)})
        } else {
            this.oI()
        }
    };
    ciy.oI = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.cjd();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.ur.A(this, this.bR.data);
        this.bOL(this.cku, this.bR)
    };
    ciy.ur = function(bHm, bZ) {
        var bDB = bHm.blogName;
        E.gI(true);
        this.ciL();
        if (!!bZ && bZ.r == 1) {
            this.ciZ(bHm, bZ.id, this.bR.data.blogId);
            if (!!bZ.postOverNum) {
                this.cjp = true;
                this.bh("onpostovernum", this.cjp)
            }
        } else if (!!bZ && bZ.r == -4) {
            E.bd("您提交的内容中含敏感词！", true, false, false, true)
        } else if (!!bZ && bZ.r == -3) {
            loft.w.fu.jK();
            loft.w.fu.ky("验证码错误！");
            this.cjp = true;
            this.bh("onpostovernum", this.cjp)
        } else if (!!bZ && bZ.r == -98) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, false, false, true)
        } else if (!!bZ && bZ.r == -99) {
            loft.x.kX()
        } else if (!!bZ && bZ.r == -100) {
            E.bd("您发得太快了，请休息一下。", true, false, false, true)
        } else {
            E.bd("保存草稿失败，请检查网络或重新登录！", true, false, false, true)
        }
    };
    ciy.ku = function(bHl) {
        this.hl();
        if (!this.jN()) {
            this.ciZ();
            return
        }
        this.cjd(1e3, 0);
        loft.w.eD.bE({parent: document.body,nocover: true,title: "文档未保存",c1: "未保存的内容将丢失， 要继续吗？",onok: function() {
            this.ciZ()
        }.A(this),oncc: function() {
            this.ciL()
        }.A(this),onclose: function() {
            this.ciL()
        }.A(this)})
    };
    ciy.bOL = function(bWO, bJp) {
        if (!bWO) {
            if (!!P("loft.c").bUm || !!P("loft.c").bUn) {
                loft.x.th("提交地址不能为空")
            }
            return
        }
        if (this.bX != "REBLOG" && (!!P("loft.c").bUm || !!P("loft.c").bUn)) {
            if (!this.bWN(bJp))
                return
        }
        J.rl(bWO, bJp)
    };
    ciy.bWN = function(bJp) {
        bJp = bJp || {};
        bJp.data = bJp.data || {};
        if (this.nM == "photo") {
            if (!bJp.data.photoInfo || bJp.data.photoInfo == "null") {
                loft.x.th("图片没有持久化");
                return false
            }
        } else if (this.nM == "music") {
            if (!!this.kL) {
                var bRa = this.kL.Jw();
                var gZ = U.fp(bJp.data.photoInfo || "null");
                if (!!bRa && bRa.length > 0) {
                    if (!gZ || gZ.length <= 0) {
                        loft.x.th("图片没有持久化");
                        return false
                    }
                }
            }
        } else if (this.nM == "video") {
        } else {
            var bT = this.cnI();
            var gZ = U.fp(bJp.data.photoInfo || "null");
            if (!!bT && bT.length > 0) {
                if (!gZ || bT.length > gZ.length) {
                    loft.x.th("图片没有持久化");
                    return false
                }
            }
        }
        return true
    };
    ciy.clg = function() {
        if (!!this.ciz) {
            return this.ciz.clg()
        }
    };
    ciy.ciZ = function(bHm, dR, bc) {
        this.iE = true;
        this.bOJ();
        this.bh("onclosepublishlayer", this.csl.A(this));
        if (!!bHm) {
            this.coI(bHm.cctype);
            var RR = {actionType: this.bX,isContribute: this.gt,isDraftPost: this.lD,isAutoPublish: this.cnG,isCitePost: this.gn};
            bHm.id = dR;
            this.bh("onpostpublished", bHm, RR, this.csl.A(this));
            if (this.clg() == "blogPostQueue" && !bHm.isPublished && (bHm.queuePostType == 15 || bHm.queuePostType == 16) || !!bHm.isPublished && this.bX == "NEW") {
                this.cmz(dR, bc)
            }
            this.coH(bHm);
            this.bWL()
        }
        if (!!this.ckr) {
            this.cvn()
        } else {
            window.setTimeout(this.cuH.A(this), 300)
        }
        this.ciL();
        P("loft.m.newpublish.w").cqC()
    };
    ciy.csl = function(ctr) {
        this.ctq = ctr
    };
    ciy.ctp = function() {
        return this.ctq
    };
    ciy.bWL = function(bHm) {
        if (!!this.ciz) {
            this.ciz.cnz()
        }
    };
    ciy.coH = function(bHm) {
        if (!bHm)
            return;
        var by;
        if (!bHm.isPublished && (bHm.queuePostType == 15 || bHm.queuePostType == 16)) {
            by = "postQueueCount"
        } else if (!!bHm.isPublished && this.bX == "NEW") {
            by = "postCount"
        } else if (!bHm.isPublished && this.bX == "NEW") {
            by = "draftCount"
        }
        if (!!P("loft.g").updateRightSide) {
            try {
                P("loft.g").updateRightSide(by, 1)
            } catch (e) {
            }
        }
    };
    ciy.coI = function(cmG) {
        if (!!this.ciz) {
            this.ciz.coT(cmG)
        }
    };
    ciy.bOJ = function() {
        if (!!this.hI) {
            this.hI = window.clearTimeout(this.hI)
        }
        if (this.bX == "NEW") {
            U.ir(this.cu, null, "/");
            this.bWV = true;
            P(N.ut).dC.hz(this.cu);
            if (!!P("loft.m.dashboard").ciM) {
                P("loft.m.dashboard").ciM.clm()
            }
            if (!!P("loft.m.blog").ciO) {
                P("loft.m.blog").ciO.clm()
            }
        }
    };
    ciy.uX = function() {
        if (this.bX == "NEW") {
            if (!!this.hI)
                this.hI = clearTimeout(this.hI);
            var bHm = this.gU(this.bUd);
            this.bQY(bHm)
        }
    };
    ciy.bQY = function(bHm) {
        if (!!bHm) {
            var bMb = 1;
            U.ru(this.cu, this.bJQ, null, bMb, "/");
            P(N.ut).dC.wE(this.cu, bHm)
        } else {
            U.ir(this.cu, null, "/");
            P(N.ut).dC.hz(this.cu)
        }
    };
    ciy.iD = function() {
        if (!!this.bWV) {
            if (!!this.hI) {
                this.hI = window.clearTimeout(this.hI)
            }
            return
        }
        if (!this.hI)
            this.hI = window.setTimeout(this.uX.A(this), 200)
    };
    ciy.il = function(df, bQ) {
        if (!df || !bQ || bQ.length <= 0)
            return false;
        for (var i = 0; i < bQ.length; i++) {
            if (bQ[i] == df)
                return true;
            if (df == "next gen") {
                if (encodeURIComponent(bQ[i]).toLowerCase() == encodeURIComponent(df) || encodeURIComponent(bQ[i]).toLowerCase() == "next%c2%a0gen")
                    return true
            }
            if (df == "app首页交给你" && bQ[i] && bQ[i].toLowerCase() == df) {
                return true
            }
        }
        return false
    };
    ciy.sx = function(df, bQ) {
        if (!df || !bQ || bQ.length <= 0)
            return false;
        for (var i = 0; i < bQ.length; i++) {
            if (bQ[i] == df) {
                bQ.splice(i, 1)
            }
            if (df == "next gen") {
                if (encodeURIComponent(bQ[i]).toLowerCase() == encodeURIComponent(df) || encodeURIComponent(bQ[i]).toLowerCase() == "next%c2%a0gen") {
                    bQ.splice(i, 1)
                }
            }
        }
        return bQ
    };
    ciy.coP = function(I) {
        this.ku()
    };
    ciy.coO = function(I) {
        this.qN()
    };
    ciy.coN = function(I) {
        this.bXf(I)
    };
    ciy.qN = function() {
        this.hl();
        var bHm = this.gU({isPreview: true});
        if (!bHm)
            return;
        this.eo = this.coE();
        if (!this.eo)
            return;
        this.eo.action = loft.x.bM(bHm.blogName) + "/post/preview";
        this.eo["postType"].value = this.bGz || 1;
        this.eo["previewParams"].value = P("loft.x").gW(bHm);
        this.eo.submit()
    };
    ciy.coE = function() {
        if (!this.eo) {
            var ckn = document.createElement("form");
            ckn.target = "_blank";
            ckn.method = "post";
            ckn.style.cssText = "display:block;";
            ckn.innerHTML = '<input type="hidden" value="" name="postType"><input type="hidden" value="" name="previewParams">';
            this.dL.insertAdjacentElement("beforeEnd", ckn);
            return ckn
        } else {
            return this.eo
        }
    };
    ciy.os = function() {
        if (!!this.ciz) {
            return this.ciz.os()
        }
    };
    ciy.ov = function() {
        if (!!this.ciz) {
            return this.ciz.ov()
        }
    };
    ciy.cky = function() {
        if (!!this.ciz) {
            return this.ciz.cky()
        }
    };
    ciy.bYG = function(clJ, clK) {
        if (!!this.ciz) {
            return this.ciz.bYG(clJ, clK)
        }
    };
    ciy.jN = F;
    var cqw = /<br(\s)*>|<br(\s)*\/>/gi;
    ciy.cqo = function(Z) {
        if (!!Z) {
            Z = Z.replace(cqw, "<br>")
        }
        return Z
    };
    ciy.cqx = function() {
        if (!!this.ciz) {
            return this.ciz.cqZ()
        }
    };
    ciy.cqm = function(FK) {
        var cqy = this.cqx();
        var Z = this.bQV({noShowError: true});
        if (cqy == Z)
            return true;
        if (this.bX == "REBLOG") {
            FK = this.os()
        }
        if (!!this.gt) {
            FK = this.ov(FK)
        }
        FK = loft.x.mP(FK);
        FK = loft.x.jo(FK);
        if (this.bX == "REBLOG" && !!FK) {
            FK = loft.x.Gg(FK)
        }
        Z = this.cqo(Z);
        FK = this.cqo(FK);
        if (Z == FK) {
            return true
        } else {
            return false
        }
    };
    ciy.coM = function() {
        this.coD();
        window.setTimeout(function() {
            E.ba(this.dL, "js-showpublishlayer");
            this.cmD()
        }.A(this), 500)
    };
    ciy.coG = function() {
        var ca = function() {
            E.bf(this.dL, "js-showpublishlayer");
            this.clc();
            this.cnH(this.ciT);
            this.ciX()
        }.A(this);
        this.cmE(ca);
        window.setTimeout(this.coC.A(this), 500)
    };
    ciy.coD = function() {
        var cjR = E.be("publishPostBar");
        if (!!cjR) {
            cjR.style.zIndex = "100";
            E.ba(cjR, "js-coverShow")
        }
        E.nu(0);
        this.coQ = false;
        window.setTimeout(E.nu.A(null, 75), 100)
    };
    ciy.coC = function() {
        E.nu(0);
        window.setTimeout(function() {
            E.hG();
            this.coQ = true;
            var cjR = E.be("publishPostBar");
            if (!!cjR) {
                cjR.style.zIndex = "";
                E.bf(cjR, "js-coverShow")
            }
        }.A(this), 300)
    };
    ciy.ckw = function(ckv) {
        if (!!this.ciz) {
            this.ciz.ckw(ckv)
        }
    };
    ciy.cmA = function() {
        if (!!this.ciz) {
            this.ciz.cmA()
        }
    };
    ciy.cmB = function() {
        if (!!this.ciz) {
            this.ciz.cmB(this.cnF)
        }
    };
    ciy.cmC = function() {
        if (!!this.ciz) {
            this.ciz.cmC()
        }
    };
    ciy.cmD = function(cjT) {
        if (!!this.ciz) {
            this.ciz.cmD(this.cnF)
        }
    };
    ciy.cmE = function(ca) {
        if (!!this.ciz) {
            this.ciz.cmE(ca)
        }
    };
    ciy.cmF = function() {
        if (!!this.ciz) {
            this.ciz.cmF()
        }
    };
    ciy.cls = function() {
        if (this.ctp()) {
            this.csl(false);
            return
        }
        if (!!this.ciz) {
            this.ciz.cls()
        }
        E.bf(this.dL, "js-showpublishlayer");
        this.clc();
        this.cnH(this.ciT);
        this.ciX();
        this.csl(false)
    };
    ciy.cuG = function() {
        if (!!this.ciz) {
            this.ciz.cuG()
        }
    };
    ciy.cuH = function() {
        if (!!this.ciz) {
            this.ciz.cuH()
        }
        E.bf(this.dL, "js-showpublishlayer");
        this.clc();
        this.cnH(this.ciT);
        this.ciX();
        this.csl(false)
    };
    ciy.cvo = function() {
        this.cvm()
    };
    ciy.cvn = function() {
        var ca = function() {
            this.clc();
            this.cnH(this.ciT);
            this.ciX();
            this.cvl()
        }.A(this);
        this.cvk(ca)
    };
    ciy.cvm = function() {
        E.ba(document.body, "js-bodyCoverShow");
        E.nu(0);
        this.coQ = false;
        window.setTimeout(E.nu.A(null, 75), 10);
        window.setTimeout(function() {
            this.cvj();
            this.cvi()
        }.A(this), 20)
    };
    ciy.cvh = function() {
        this.cvg();
        E.nu(0);
        window.setTimeout(function() {
            E.hG();
            this.coQ = true;
            E.bf(document.body, "js-bodyCoverShow")
        }.A(this), 300)
    };
    ciy.cvi = function() {
        E.ba(this.dL, "js-showpublishlayer");
        var cjR = E.be("publishPostBar");
        if (!!cjR) {
            cjR.style.opacity = 0;
            window.setTimeout(function() {
                cjR.style.visibility = "hidden";
                this.cvf()
            }.A(this), 350)
        }
    };
    ciy.cvl = function() {
        var cjR = E.be("publishPostBar");
        if (!!cjR) {
            cjR.style.cssText = ""
        }
        E.bf(this.dL, "js-showpublishlayer");
        window.setTimeout(function() {
            this.cvh()
        }.A(this), 200)
    };
    ciy.cvf = function() {
        this.cuI()
    };
    ciy.cvk = function(ca) {
        this.cuJ(ca)
    };
    ciy.cuI = function() {
        if (!!this.ciz) {
            this.ciz.cuI(this.cnF)
        }
    };
    ciy.cuJ = function(ca) {
        if (!!this.ciz) {
            this.ciz.cuJ(ca)
        }
    };
    ciy.cvj = function() {
        if (!!this.ciz) {
            this.ciz.bE()
        }
    };
    ciy.cvg = function() {
        if (!!this.ciz) {
            this.ciz.cy()
        }
    };
    ciy.cjd = function(ckm, bB) {
        if (!!this.ciz) {
            this.ciz.cno(ckm, bB)
        }
    };
    ciy.ciL = function() {
        if (!!this.ciz) {
            this.ciz.cnp()
        }
    };
    ciy.cmz = function(dR, bc) {
        var bWO = location.href || "";
        var Lt = this.cjf.blogId || "";
        var cmI = this.cjf.blogName || "";
        var coB = "http://www.lofter.com/blog/" + cmI;
        if (!!cmI && bWO.indexOf(coB) === 0 && Lt != bc) {
            return
        }
        var coA = "http://www.lofter.com/tag/";
        if (this.bX == "REBLOG" && bWO.indexOf(coA) === 0) {
            return
        }
        if (!!dR && !!bc) {
            J.br(location.dwr, "TrackBean", "getTrackItem", dR, bc, this.ckx.A(this))
        } else {
            this.ckx(null)
        }
    };
    ciy.ckx = function(clt) {
        if (!clt || !clt.post)
            return;
        if (!!P("loft.m.dashboard").ciM && !!P("loft.m.dashboard").ciM.cjq) {
            var bN = clt.post;
            if (bN.viewRank == 0 && clt.followed > 0 && (!bN.blogSettings || bN.blogSettings.securityRank == 0)) {
                P("loft.m.dashboard").ciM.cjq.cjc(clt, true)
            }
        }
        if (!!P("loft.m.blog").ciO && !!P("loft.m.blog").ciO.cjF) {
            P("loft.m.blog").ciO.cjF.cjc(clt, true)
        }
        if (!!P("loft.m.blog").cjw && !!P("loft.m.blog").cjw.ckU) {
            P("loft.m.blog").cjw.ckU.cjc(clt, false)
        }
        if (!!P("loft.m.search").Vs && !!P("loft.m.search").Vs.cmJ) {
            P("loft.m.search").Vs.cmJ.cjc(clt, true)
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish"), cpX, cpY, dP, bMa;
    p.cmv = C();
    cpZ = p.cmv.bi(P("loft.m.newpublish.w").cjz, true);
    cqa = p.cmv.bw;
    p.cmv.bq = function(bl, I) {
        this.bHq(bl, I)
    };
    p.beh = C();
    dP = p.beh.bi(loft.m.newpublish.w.cks, true);
    bMa = p.beh.bw;
    p.beh.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    dP.bq = function(I) {
        I = I || {};
        this.bHq(I)
    };
    dP.bz = function(I) {
        I = I || {};
        this.bJQ = "new/text/";
        I.autoHeightEnabled = true;
        I.minFrameHeight = 190;
        I.maxFrameHeight = 190;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        I.maxFrameHeight = qx - 112 - 80 - 300;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bMa.bz.call(this, I);
        if (!this.ciz) {
        }
        this.cmu = E.be("editor_uploadPhotoArea");
        if (!!this.cmu) {
            this.cmu.style.display = "none"
        }
        this.cjN("js-postText");
        this.cjB("js-activating");
        this.ciQ();
        window.setTimeout(function() {
            if (!!this.cmu) {
                this.cmu.style.display = ""
            }
        }.A(this), 800)
    };
    dP.coz = function(bN, ciH) {
        if (!!ciH || !this.cjO)
            return;
        if (!this.oN) {
            this.oN = document.cloneElement("input", "");
            this.oN.type = "text";
            this.oN.setAttribute("maxlength", 50);
            this.ckg = document.cloneElement("label", "");
            this.ckg.innerText = "标题（可不填）";
            this.cjO.insertAdjacentElement("beforeEnd", this.oN);
            this.cjO.insertAdjacentElement("beforeEnd", this.ckg);
            V.bHn(this.oN, "input", this.kF.A(this))
        }
        if (!!bN && bN != "null") {
            this.oN.value = bN.title || "";
            if (!!this.oN.value)
                this.bYK()
        }
    };
    dP.kF = function(bHl) {
        var bg = this.oN.value;
        if (!!bg) {
            this.bYK()
        } else {
            this.bTS()
        }
    };
    dP.ciQ = function() {
        if (!this.cjO) {
            this.cjO = document.cloneElement("div", "blogTittle");
            bMa.ciQ.call(this, this.cjO)
        }
    };
    dP.ciX = function() {
        this.oN = E.hE(this.oN);
        this.ckg = E.hE(this.ckg);
        this.cjO = E.hE(this.cjO);
        bMa.ciX.call(this)
    };
    dP.cK = function() {
        bMa.cK.call(this)
    };
    dP.bTS = function() {
        E.bf(this.ckg, "js-hidetips")
    };
    dP.bYK = function() {
        E.ba(this.ckg, "js-hidetips")
    };
    dP.gU = function(I) {
        I = I || O;
        var iX = I.noShowError || false;
        var hd;
        var eM = U.bA(this.oN.value);
        hd = bMa.gU.call(this, I);
        if (!!hd) {
            hd.title = eM;
            var Z = hd.content;
            if (!eM && !Z) {
                if (!iX)
                    E.bd("请输入日志内容！", true, false, false, true);
                return
            }
            var bT = null;
            if (this.bX != "REBLOG") {
                bT = this.cnI();
                if (!!bT) {
                    Z = hd.content = this.bQV(I)
                }
                if (!!this.rX && !this.bsL) {
                    if (!!bT) {
                        this.bsL = true
                    } else {
                        bT = []
                    }
                    for (var i = 0; i < this.rX.length && !!this.rX[i]; i++) {
                        bT.push(this.rX[i])
                    }
                }
            }
            hd.photoInfo = U.ii(bT)
        }
        return hd
    };
    dP.bNu = function(bN, ciH) {
        this.coz(bN, ciH);
        bMa.bNu.call(this, bN, ciH)
    };
    dP.bsM = function() {
        V.bHn(this.oN, "keydown", this.iD.A(this))
    };
    dP.bKZ = function(kA) {
        bMa.bKZ.call(this, kA);
        if (!!this.cookiePostData && !!this.cookiePostData.photoInfo) {
            this.rX = U.fp(this.cookiePostData.photoInfo)
        }
    };
    dP.ciZ = function(bHm, dR, bc) {
        bMa.ciZ.call(this, bHm, dR, bc)
    };
    dP.jN = function() {
        if (this.bX == "NEW" || !this.bhw || this.bhw == "null") {
            var sc = U.bA(this.oN.value);
            var Z = this.bQV({noShowError: true});
            if (!sc && !Z) {
                return false
            }
        } else {
            var bsN = U.bA(this.bhw.title || "");
            var FK = this.bhw.content || "";
            var sc = U.bA(this.oN.value);
            if (bsN == sc && this.cqm(FK)) {
                return false
            }
        }
        return true
    }
})();
(function() {
    var p = P(N.ui), ciA, cl = "ui-" + U.cA();
    p.fx("#<uispace>{position:absolute;top:0;left:0;}#<uispace> .zhdl{position:absolute;width:10px;background:#0000cd;}#<uispace> .zmvr{display:none;position:absolute;width:20px;height:20px;border:1px solid #aaa;background:#eee;}", cl);
    p.cjo = C();
    ciA = p.cjo.bi(p.Sa, true);
    ciA.bq = function(bl, I) {
        this.cji = {length: 0};
        this.bHq(bl, I)
    };
    ciA.bz = function(I) {
        p.cjo.bw.bz.call(this, I);
        I = I || O;
        this.li = I.box;
        this.sy = I.selected || "";
        if (!!I.ranged && !this.ckB)
            this.ckB = p.cqb.bG(document.body, {onrangechange: this.coy.A(this)})
    };
    ciA.fs = function(bl) {
        this.dL = E.be(bl);
        if (!this.dL)
            return;
        this.cmN();
        this.gH()
    };
    ciA.gH = function() {
        p.cjo.bw.gH.call(this);
        if (!!this.ckB)
            this.ckB.mM(false);
        if (!this.li && !!this.cB[0])
            this.li = [this.cB[0].offsetWidth, this.cB[0].offsetHeight];
        this.cjv = [Math.ceil(this.dL.clientHeight / this.li[1]), Math.floor(this.dL.clientWidth / this.li[0])];
        this.cmq[0].style.height = this.li[1] + "px"
    };
    ciA.cK = function() {
        if (!!this.ckB)
            this.ckB.mM(true)
    };
    ciA.cU = function() {
        return cl
    };
    ciA.cM = function() {
        return '<div class="zhdl">&nbsp;</div><div class="zmvr">&nbsp;</div>'
    };
    ciA.cc = function() {
        p.cjo.bw.cc.call(this);
        this.cmq = E.dE(this.Y);
        V.bHn(document, "mousedown", this.ckc.A(this))
    };
    ciA.cmN = function() {
        this.fl = [E.tz(this.dL), E.jO(this.dL)]
    };
    ciA.cmp = function(cox, cow) {
        return [Math.min(Math.floor(cow / this.li[1]), this.cjv[0]), Math.min(Math.floor(cox / this.li[0]), this.cjv[1])]
    };
    ciA.cmo = function(bt) {
        return !!this.cji[bt]
    };
    ciA.cmR = function(bt) {
        if (!this.cji[bt])
            return;
        E.bf(bt, this.sy);
        delete this.cji[bt];
        this.cji.length--
    };
    ciA.cmn = function(bt) {
        if (this.cji[bt])
            return;
        E.ba(bt, this.sy);
        this.cji[bt] = true;
        this.cji.length++
    };
    ciA.ckc = function() {
        this.ckC = null;
        for (var p in this.cji)
            if (p != "length")
                this.cmR(p)
    };
    ciA.YH = function(bBf) {
        if (!!bBf)
            B.da ? E.DX(document.body, false) : E.ba(document.body, this.BW);
        else
            B.da ? E.DX(document.body, true) : E.bf(document.body, this.BW)
    };
    ciA.jY = function(bHl) {
        this.cmm = true;
        V.bb(bHl);
        this.YH(true);
        var bt = V.be(bHl, this.bBh.A(this)).id;
        if (!bHl.ctrlKey && !bHl.shiftKey && !this.cmo(bt))
            this.ckc();
        if (!bHl.shiftKey) {
            this.ckC = bt;
            this.cmn(bt)
        } else {
            this.ckC = this.ckC || bt;
            for (var i = 0, l = this.cB.length, fC = 0, cka, cln; i < l; i++) {
                cka = this.cB[i].id;
                cln = this.ckC == bt && cka == bt;
                if (cln)
                    fC++;
                if (cka == this.ckC || cka == bt) {
                    cln = true;
                    fC++
                }
                cln || fC == 1 ? this.cmn(cka) : this.cmR(cka)
            }
        }
    };
    ciA.yd = function(bHl) {
        if (!this.cmm || !this.cji.length)
            return;
        if (!this.cmS) {
            this.cmN();
            this.cmS = true
        }
        this.cml = false;
        var sm = V.IO(bHl) - this.fl[0], pD = V.vS(bHl) - this.fl[1] + (this.bFA ? this.bFA.scrollTop : 0), cjZ = this.cmp(sm, pD);
        if (cjZ[0] < 0 || cjZ[0] >= this.cjv[0] || cjZ[1] < 0 || cjZ[1] >= this.cjv[1]) {
            E.hv(this.Y);
            return
        }
        this.dL.appendChild(this.Y);
        var cY = this.cmq[1].style;
        cY.top = pD + 20 + "px";
        cY.left = sm + 10 + "px";
        cY.visibility = "visible";
        var cY = this.cmq[0].style;
        cY.visibility = "hidden";
        var Q = cjZ[0] * this.cjv[1] + cjZ[1], cN, dn;
        this.cmj = sm % this.li[0] > this.li[0] / 2;
        this.cjm = this.cB[Q];
        if (!this.cjm) {
            this.cmj = true;
            this.cjm = this.cB[this.cB.length - 1]
        }
        if (this.cmo(this.cjm.id))
            return;
        dn = this.cjm.offsetTop;
        cN = this.cjm.offsetLeft;
        if (this.cmj)
            cN += this.li[0];
        cY.top = dn + "px";
        cY.left = cN - 5 + "px";
        cY.visibility = "visible";
        this.cml = true
    };
    ciA.EK = function(bHl) {
        if (!this.cmm || !this.cji.length)
            return;
        this.cmm = false;
        this.cmS = false;
        this.YH(false);
        E.hv(this.Y);
        if (!this.cml)
            return;
        this.cml = false;
        var bn = [];
        for (var i = 0, l = this.cB.length; i < l; i++)
            if (this.cmo(this.cB[i].id))
                bn.push(this.cB[i]);
        this.cjm.insertAdjacentElement(this.cmj ? "afterEnd" : "beforeBegin", bn[0]);
        this.cjm = bn[0];
        for (var i = 1, l = bn.length; i < l; i++) {
            this.cjm.insertAdjacentElement("afterEnd", bn[i]);
            this.cjm = bn[i]
        }
        this.Br();
        this.bh("onchange")
    };
    ciA.coy = function(cN, dn, dz, eT) {
        this.ckc();
        dn += !this.bFA ? 0 : this.bFA.scrollTop;
        dn -= this.fl[1];
        cN -= this.fl[0];
        var lo = this.cmp(cN, dn), iB = this.cmp(cN + dz, dn + eT);
        for (var i = Math.max(0, lo[0]), IW; i <= iB[0] && i < this.cjv[0]; i++) {
            IW = i * this.cjv[1];
            for (var j = Math.max(0, lo[1]), bo; j <= iB[1] && j < this.cjv[1]; j++) {
                bo = this.cB[IW + j];
                if (!bo)
                    break;
                this.cmn(bo.id)
            }
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), ciA, cjM, cl = "ui-" + U.cA();
    P(N.ui).fx('#<uispace>{position:absolute;top:0;left:-2px;}#<uispace> .zhdl{position:absolute;width:9px;min-height:104px;background:url("http://l.bst.126.net/rsc/img/newpublish/sortstub.png") 0px -2px no-repeat;}#<uispace> .zmvr{display:none;position:absolute;width:20px;height:20px;border:1px solid #aaa;background:#eee;}', cl);
    p.cjo = C();
    ciA = p.cjo.bi(P(N.ui).cjo, true);
    cjM = p.cjo.bw;
    ciA.bq = function(bl, I) {
        this.bHq(bl, I)
    };
    ciA.bz = function(I) {
        I = I || O;
        this.dL = I.parent;
        cjM.bz.call(this, I);
        this.bHn("ondragsortitem", I.ondragsortitem || F);
        this.bHn("ondropsortitem", I.ondropsortitem || F)
    };
    ciA.cU = function() {
        return cl
    };
    ciA.mM = function() {
        this.cjY = true
    };
    ciA.yG = function() {
        this.cjY = false
    };
    ciA.cin = function(bHl) {
        if (!!this.cjY)
            return;
        cjM.cin.call(this, bHl)
    };
    ciA.jY = function(bHl) {
        this.bh("ondragsortitem", this.dL);
        if (!!this.cjY)
            return;
        cjM.jY.call(this, bHl)
    };
    ciA.yd = function(bHl) {
        if (!!this.cjY)
            return;
        cjM.yd.call(this, bHl)
    };
    ciA.EK = function(bHl) {
        this.bh("ondropsortitem", this.dL);
        if (!!this.cjY)
            return;
        cjM.EK.call(this, bHl);
        this.ckc()
    };
    ciA.ckc = function(bHl) {
        if (!!this.cjY)
            return;
        cjM.ckc.call(this, bHl)
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), cjg, cmh, cl = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{position:absolute;left:-138px;top:43px;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}#<uispace> .editdescwrap{width:332px;height:74px;padding:10px;background-color:#fff;border:1px solid #c2c2c2;}#<uispace> .editdescwrap .nipple{position:absolute;top:-9px;left:180px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #c2c2c2;/*border-color:transparent;*/border-image:none;}#<uispace> .editdescwrap .nipple:after{content:\"\";position:absolute;top:1px;left:-9px;width:0;height:0;border-width:0 9px 9px 9px;border-style:solid;border-color:transparent transparent #fff transparent;border-image:none;}#<uispace> .editdescwrap .desciptwrap{margin-bottom:10px;}#<uispace> .editdescwrap .descinput{width:310px;height:30px;line-height:30px;padding:5px 10px;color:#999;border:1px solid #ededed;outline:none;}#<uispace> .editdescwrap .updatedesc{float:right;width:60px;height:26px;background-position:-8px -912px;color:#888;border:none;outline:none;}", cl);
    p.clp = C();
    cjg = p.clp.bi(P(N.ui).ga, true);
    cmh = p.clp.bw;
    cjg.bq = function(bl, I) {
        this.bHq(bl, I);
        V.bHn(document, "click", this.bYE.A(this))
    };
    cjg.bHu = function(bl, I) {
        cmh.bHu.call(this, bl, I)
    };
    cjg.bYE = function(bHl) {
        if (!this.lN) {
            return
        }
        var cov = V.be(bHl, function(X) {
            return X == this.Y
        }.A(this));
        if (!cov) {
            this.clr(bHl)
        } else {
        }
    };
    cjg.db = function() {
        E.hv(this.Y);
        if (this.lN) {
            this.bh("onclosedesclayer", this.dL, U.bA(this.cmg.value))
        }
        p.clp.db(this)
    };
    cjg.bz = function(I) {
        I = I || O;
        cmh.bz.call(this, I);
        this.dL = I.parent;
        this.cmg.value = I.photodesc || "";
        this.bHn("onupdatedesc", I.onupdatedesc || F);
        this.bHn("onclosedesclayer", I.onclosedesclayer || F)
    };
    cjg.cU = function() {
        return cl + " editphotodesc"
    };
    cjg.cM = function() {
        return '<div class="editdescwrap"><span class="nipple"></span><div class="desciptwrap"><input class="descinput ztag" maxlength=500 /></div><div class="m-btns f-cb"><button type="submit" class="btn ztag"><span>提　交</span></button></div></div>'
    };
    cjg.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        this.cmg = bHk[0];
        this.cou = bHk[1];
        V.bHn(this.cou, "click", this.clr.A(this))
    };
    cjg.clr = function(bHl) {
        this.bh("onupdatedesc", this.dL, U.bA(this.cmg.value));
        this.db()
    }
})();
(function() {
    var p = P("loft.w"), ho;
    p.Cs = C();
    ho = p.Cs.bi(P(N.ut).gY);
    p.Cs.A = function(I) {
        if (!window.XMLHttpRequest)
            return null;
        var brG = new XMLHttpRequest;
        if (!!brG.upload && !!I && !!I.uploadUrl) {
            return new p.Cs(I)
        } else {
            return null
        }
    };
    ho.bq = function(I) {
        this.bHq();
        this.Uv = I.selectFile;
        this.Cg = I.dragContainer || document;
        if (!!this.Uv)
            V.bHn(this.Uv, "change", this.bhm.A(this));
        if (this.Cg == document) {
            V.bHn(this.Cg, "drop", this.Na.A(this, true))
        } else {
            V.bHn(this.Cg, "drop", this.Na.A(this, false));
            V.bHn(document, "dragover", this.brK.A(this));
            V.bHn(document, "drop", this.brL.A(this));
            V.bHn(document, "mouseover", this.brM.A(this))
        }
        V.bHn(document, "dragenter", this.brN.A(this));
        this.bz(I)
    };
    ho.cK = function() {
        if (!!this.Uv)
            V.iJ(this.Uv, "change", this.bhm.A(this));
        if (this.Cg == document) {
            V.iJ(this.Cg, "drop", this.Na.A(this, true))
        } else {
            V.iJ(this.Cg, "drop", this.Na.A(this, false));
            V.iJ(document, "dragover", this.brK.A(this));
            V.iJ(document, "drop", this.brL.A(this));
            V.iJ(document, "mouseover", this.brM.A(this))
        }
        V.iJ(document, "dragenter", this.brN.A(this));
        this.bz(null);
        delete this
    };
    ho.brM = function(bHl) {
        if (!this.Hj)
            this.Hj = setTimeout(this.brP.A(this), 100)
    };
    ho.bGq = function(go, bHl) {
        if (!!go)
            V.bb(bHl)
    };
    ho.bGp = function(go, bHl) {
        if (!!go)
            V.bb(bHl)
    };
    ho.Na = function(go, bHl) {
        if (!!go)
            V.bb(bHl);
        this.bhm(bHl)
    };
    ho.bnb = function(bHl) {
        this.Na(false, bHl)
    };
    ho.brN = function(bHl) {
        V.bb(bHl);
        this.bh("ondocdragenter")
    };
    ho.brK = function(bHl) {
        V.bb(bHl)
    };
    ho.brP = function(bHl) {
        if (!!this.Hj)
            this.Hj = clearTimeout(this.Hj);
        this.bh("ondocdragleave")
    };
    ho.brL = function(bHl) {
        V.bb(bHl);
        this.bh("ondocdrop")
    };
    ho.bz = function(I) {
        I = I || {};
        this.brS = I.isExceedMaxPhotoNum || F;
        this.cot = I.maxFileSize || 20 * 1024 * 1024;
        this.brT = I.cbUploadStart || F;
        this.brU = I.cbUploadProgress || F;
        this.brV = I.cbUploadComplete || F;
        this.bgY = I.cbUploadError || F;
        this.brX = I.uploadUrl || "";
        this.brY = I.fileField || "Filedata";
        this.bHn("ondocdragenter", I.ondocdragenter || F);
        this.bHn("ondocdragleave", I.ondocdragleave || F);
        this.bHn("ondocdrop", I.ondocdrop || F);
        this.bHn("onexceedmaxfilesize", I.onexceedmaxfilesize || F)
    };
    ho.bhm = function(bHl) {
        var Hi = bHl.target.files || bHl.dataTransfer.files;
        if (!Hi || !Hi[0]) {
            return
        }
        if (!this.bsa(Hi[0].type)) {
            return
        }
        if (this.brS())
            return;
        var f = Hi[0];
        f = this.bsb(f);
        this.bsc(f)
    };
    ho.bsb = function(bgV) {
        if (bgV.size > this.cot) {
            this.bh("onexceedmaxfilesize");
            return null
        }
        return bgV
    };
    ho.bsc = function(bgV) {
        if (!bgV)
            return;
        var xhr = new XMLHttpRequest, formData = new FormData, gk = "tastId-" + U.cA();
        formData.append(this.brY, bgV);
        if (xhr.upload) {
            this.bse(gk, bgV.size);
            V.bHn(xhr.upload, "progress", this.bsf.A(this, gk));
            V.bHn(xhr, "load", this.bsg.A(this, gk));
            V.bHn(xhr, "error", this.bsh.A(this, gk));
            V.bHn(xhr, "abort", this.bsi.A(this, gk));
            xhr.open("POST", this.brX, true);
            xhr.send(formData)
        }
    };
    ho.bse = function(gk, cEg) {
        this.brT(gk, "", cEg)
    };
    ho.bsf = function(gk, bHl) {
        var pc = parseInt(bHl.loaded / bHl.total * 100);
        this.brU(gk, pc)
    };
    ho.bsg = function(gk, bHl) {
        this.brV(gk, bHl.target.responseText)
    };
    ho.bsh = function(gk, bHl) {
        this.bgY(gk, 0, 0, 1)
    };
    ho.bsi = function(gk, bHl) {
        this.bgY(gk, 0, 0, 1)
    };
    ho.bsa = function(by) {
        switch (by) {
            case "image/jpeg":
            case "image/png":
            case "image/gif":
            case "image/bmp":
            case "image/jpg":
                return true;
            default:
                return false
        }
    }
})();
(function() {
    var cgd = function(cG) {
        cG = cG || "";
        return cG.replace(/#/g, "@")
    };
    var bTA = function(bHT) {
        bHT = bHT || "";
        if (bHT.slice(-8) === "@163.com")
            return bHT.replace("@163.com", "");
        if (bHT.slice(-8) === "@126.com")
            return bHT.replace("@126.com", "@126");
        else if (bHT.slice(-8) === "@188.com")
            return bHT.replace("@188.com", "@188");
        else if (bHT.slice(-13) === "@popo.163.com")
            return bHT.replace("@popo.163.com", ".popo");
        else if (bHT.slice(-12) === "@vip.163.com")
            return bHT.replace("@vip.163.com", ".vip");
        else if (bHT.slice(-9) === "@yeah.net")
            return bHT.replace("@yeah.net", "@yeah");
        else if (bHT.slice(-5) === "@game")
            return bHT;
        else if (bHT.slice(-12) === "@vip.126.com")
            return bHT;
        return cgd(bHT)
    };
    var caB = function() {
        if (!!window.uploadProxyDomain)
            return;
        if (!loft.c.cm || !loft.c.cm.email)
            return;
        var bMm = bTA(loft.c.cm.email);
        if (!!bMm) {
            var bp = "http://upload.photo.163.com/" + bMm + "/proxydomain?responsetype=js";
            J.Ty(bp, F)
        }
    };
    var cEs = "fastestuploadproxydomainkey";
    var czn = -1;
    var cEz = {"http://tuploadbj.ph.126.net/detectspeed?": "uploadbj","http://uuploadbj.ph.126.net/detectspeed?": "uploadbj","http://uploadhz.ph.126.net/detectspeed?": "upload","http://tuploadgz.ph.126.net/detectspeed?": "uploadgz","http://uuploadgz.ph.126.net/detectspeed?": "uploadgz"};
    var czb = function(bp, cyx, bMm, brG) {
        if (!bp)
            return;
        if (!brG)
            brG = new XMLHttpRequest;
        var bRI = (new Date).getTime();
        brG.addEventListener("load", cEo.A(this, bp, bRI, true), false);
        brG.addEventListener("error", cEo.A(this, bp, bRI), false);
        brG.addEventListener("abort", cEo.A(this, bp, bRI), false);
        bp = bp + bMm;
        brG.open("POST", bp, true);
        brG.send(cyx)
    };
    var cEo = function(bp, bRI, cEy) {
        if (!!cEy) {
            var rD = (new Date).getTime() - bRI;
            if (czn == -1 || rD < czn) {
                czn = rD;
                window.uploadProxyDomain = cEz[bp];
                var czj = window.uploadProxyDomain + "|" + (new Date).getTime();
                U.ru(cEs, czj, null, 100, "/")
            }
        }
    };
    var cEx = function() {
        var czj = U.ot(cEs);
        if (!!czj) {
            var cEp = czj.split("|");
            window.uploadProxyDomain = cEp[0] || "";
            var cEq = cEp[1] || 0;
            var bge = (new Date).getTime() - cEq;
            if (cEq > 0 && bge < 864e5)
                return
        }
        if (!window.XMLHttpRequest)
            return;
        var brG = new XMLHttpRequest;
        if (!brG.upload)
            return;
        var cyx = cEw();
        var bMm = bTA(loft.c.cm.email);
        var cyY = ["http://tuploadbj.ph.126.net/detectspeed?", "http://uuploadbj.ph.126.net/detectspeed?", "http://uploadhz.ph.126.net/detectspeed?", "http://tuploadgz.ph.126.net/detectspeed?", "http://uuploadgz.ph.126.net/detectspeed?"];
        czb(cyY[0], cyx, bMm, brG);
        czb(cyY[1], cyx, bMm);
        czb(cyY[2], cyx, bMm);
        czb(cyY[3], cyx, bMm);
        czb(cyY[4], cyx, bMm)
    };
    var cEw = function() {
        var cEv = "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest";
        var cEr = [];
        for (var i = 0; i < 180; i++) {
            cEr.push(cEv)
        }
        return cEr.join("")
    };
    cEx();
    var p = P("loft.m.newpublish.w"), cS, Vv, cl = "ui-" + U.cA();
    var cuT = "http://l.bst.126.net/rsc/img/common/empty.png";
    var Vy = "js_isCitePost";
    var Vx = "js-singlePhoto";
    var cme = "js-moreThanOnePhoto";
    var Io = "js-exceedMaxPhotoNum";
    var cos = "js-uploaderror";
    var cjX = "js-photouploading";
    var cmc = "js-photorotateing";
    var cux = "js-photouploadingflag";
    var cmW = "js-photoitemhover";
    var ckY = "js-hasimgdesc";
    var cor = "js-sortselected";
    var cmX = "js-onsortdraging";
    var xJ = 10;
    var cjI = 20;
    var cmY = 667;
    var hh = cgd(loft.c.cm.email || "");
    var tx = ".photo.163.com/anony/web/upload/userdefinesize?email=" + hh + "&sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96;";
    var VB = ".photo.163.com/anony/imgoperate/cropuserdefinesize?sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96&imgurl=";
    var bnY = ".photo.163.com/anony/imgoperate/cropuserdefinesize?sitefrom=lofterblog&userdefinesize=164x164x1x90;500x10000x0x96;1680x10000x0x96&stamptype=lofter&imgurl=";
    var Lo = location.dirhost + "/rsc/img/common/empty.png";
    var oX = location.dirhost + "/rsc/swf/";
    if (B.da) {
        oX = "http://www.lofter.com/rsc/swf/"
    }
    var xr = E.ft('<div id="${id}" class="photoItem"><div class="move">&nbsp;</div><div class="itemWrap"><img class="ztag" onload="loft.np.w.g.onImgLoad(this)" src="${imgurl}" smallsrc="${smallsrc|default:\'\'}" middlesrc="${middlesrc|default:\'\'}" ><div class="operatebar"><span class="operate remove f-pbicon" onclick="loft.np.w.g.removeItem(\'${id}\',event)" hidefocus="true">删除</span><div class="operate imgdesc"><input class="hiddendesc ztag" type="hidden" value="${caption}" /><span class="editdesc f-pbicon" onclick="loft.np.w.g.editPhotoDesc(\'${id}\',this,event)" hidefocus="true">添加描述</span></div><span class="operate clockwise f-pbicon" onclick="loft.np.w.g.clockwiseRotate(\'${id}\',event)" hidefocus="true">旋转</span></div><div class="uploadinfo ztag"><div class="infoicon f-pbicon"></div><div class="infotext ztag"></div></div><div style="display:none" class="hidepartimg ztag" hidefocus="true">其余部分发布后可完整显示</div><div class="sortcover">&nbsp;</div></div></div>');
    var cjn = function(bk) {
        var ciC = {};
        var bHk = E.bj(bk, "ztag") || [];
        var Q = 0;
        ciC["imgNode"] = bHk[Q++];
        ciC["hiddenDesc"] = bHk[Q++];
        ciC["uploadInfo"] = bHk[Q++];
        ciC["infoText"] = bHk[Q++];
        ciC["hidePartImg"] = bHk[Q++];
        return ciC
    };
    P(N.ui).fx('#<uispace>{color:#444;font-size:12px;font-family:"Hiragino Sans GB","Microsoft YaHei","微软雅黑",tahoma,arial,simsun,"宋体";}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .photowrap{}#<uispace> .photowrap .photoList{padding-bottom:4px;margin:-4px -10px 0 0;}#<uispace> .photowrap .addPhotoBar{position:relative;z-index:1;width:500px;height:312px;background:#fff url("http://l.bst.126.net/rsc/img/newpublish/firstaddbg.png") 0 0 no-repeat;}#<uispace> .photowrap .addPhotoBar:hover,#<uispace> .photowrap .addPhotoBar.js-flashhover{background-color:#f8f8f8;}#<uispace> .addPhotoBar .dropPhotoArea{position:absolute;left:0;right:0;top:-10px;bottom:-10px;z-index:15;}#<uispace> .addPhotoBar .dropPhotoArea .tipcover{position:relative;left:0;top:0;z-index:11;width:100%;height:100%;background-color:#000;opacity:0.5;filter:alpha(opacity=50);}#<uispace> .addPhotoBar .dropPhotoArea .tipmsg,#<uispace> .addPhotoBar .dropPhotoArea .tiptxt{position:absolute;left:0;right:0;top:50%;z-index:12;height:70px;line-height:70px;margin-top:-35px;text-align:center;font-size:24px;color:#fff;}#<uispace> .addPhotoBar .dropPhotoArea .tipmsg{display:none;}#<uispace> .photowrap .addPhotoBar .flashwrap{position:relative;left:0;top:0;z-index:10;width:100%;height:100%;overflow:hidden;/*opacity:0;*/opacity:0.001;}#<uispace> .photowrap .addPhotoBar .flashwrap object,#<uispace> .photowrap .addPhotoBar .flashwrap embed{/*opacity:0;*/opacity:0.001;}#<uispace> .photowrap .addPhotoBar .addbtn{position:absolute;left:197px;top:135px;z-index:5;width:100px;height:80px;}#<uispace> .photowrap .addPhotoBar .addbtn .addicon{width:51px;height:43px;/*margin:0 auto;*/margin-left:24px;background-position:-2px -497px;}#<uispace> .photowrap .addPhotoBar .addbtn .addtext{height:35px;line-height:35px;color:#aaa;font-size:14px;text-align:center;}#<uispace> .photowrap .flashinfo{display:none;width:500px;height:80px;line-height:80px;background:#ededed;opacity:0.5;}#<uispace> .photowrap .flashinfo .infoicon{}#<uispace> .photowrap .flashinfo .infotext{color:#666;font-size:13px;text-align:center;}#<uispace> .photowrap .flashinfo .infotext a{color:#333;}#<uispace> .photowrap .photoList .photoItem{position:relative;z-index:100;float:left;width:96px;height:96px;padding:4px 5px 0 0;}#<uispace> .photowrap .photoList .photoItem.js-photoitemhover{z-index:99999;}#<uispace> .photowrap .photoList .photoItem .itemWrap{position:relative;z-index:10;width:100%;height:100%;}#<uispace> .photowrap .photoList .photoItem .move{display:none;position:absolute;left:0;top:4px;z-index:20;width:96px;height:66px;cursor:move;opacity:0;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .move{display:block;}#<uispace> .photowrap .photoList .photoItem img{display:block;width:96px;height:96px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo{display:none;position:absolute;left:50%;top:50%;z-index:5;width:50px;height:50px;margin:-25px 0 0 -25px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo .infoicon{width:100%;height:100%;background-position:-4px -690px;}#<uispace> .photowrap .photoList .photoItem .uploadinfo .infotext{position:absolute;left:50%;top:50%;width:60px;height:20px;line-height:20px;margin:-10px 0 0 -30px;color:#333;font-size:12px;text-align:center;}#<uispace> .photowrap .photoList .photoItem .operatebar{display:none;position:absolute;right:0;top:0;z-index:10;height:30px;margin-left:-10px;}#<uispace> .photowrap .photoList .photoItem:hover .operatebar,#<uispace> .photowrap .photoList .photoItem.js-photoitemhover .operatebar{display:block;}#<uispace> .photowrap .photoList .photoItem .operatebar .operate{float:right;width:30px;height:30px;margin-left:3px;text-indent:-9999px;cursor:pointer;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc{display:none;text-indent:0;cursor:default;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc .editdesc{float:right;width:30px;height:30px;text-indent:-9999px;cursor:pointer;}#<uispace> .photowrap .photoList .photoItem .operatebar .remove{background-position:-1px -208px;}#<uispace> .photowrap .photoList .photoItem .operatebar .imgdesc .editdesc{background-position:-1px -304px;}#<uispace> .photowrap .photoList .photoItem.js-hasimgdesc .operatebar .imgdesc .editdesc{background-position:-69px -304px;}#<uispace> .photowrap .photoList .photoItem .operatebar .clockwise{background-position:-1px -400px;}#<uispace> .photowrap .photoList .photoItem .sortcover{display:none;position:absolute;left:0;top:0;z-index:15;width:96px;height:96px;background-color:#fff;opacity:0.5;}#<uispace> .photowrap .photoList .photoItem.js-sortselected{}#<uispace> .photowrap .photoList .photoItem.js-sortselected .sortcover{display:block;}#<uispace> .photowrap.js-singlePhoto{}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem{float:none;width:500px;height:auto;padding:0;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap{min-height:30px;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem img{width:auto;height:auto;max-width:500px;margin:0 auto;/*width:500px;height:auto;*/}#<uispace> .photowrap.js-singlePhoto .addPhotoBar,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar{height:50px;margin-top:20px;background:#fff url("http://l.bst.126.net/rsc/img/newpublish/goonaddbg.png") 0 0 no-repeat;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn{left:210px;top:10px;widh:100px;height:30px;line-height:30px;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn .addicon,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn .addicon{position:absolute;left:0;top:6px;width:20px;height:20px;margin-left:0;background-position:-1px -606px;}#<uispace> .photowrap.js-singlePhoto .addPhotoBar .addbtn .addtext,#<uispace> .photowrap.js-moreThanOnePhoto .addPhotoBar .addbtn .addtext{position:absolute;left:28px;top:0;height:30px;line-height:30px;}#<uispace> .photowrap.js-moreThanOnePhoto .photoItem .operatebar .imgdesc{display:block;}#<uispace> .photowrap .photoItem.js-uploaderror .itemWrap,#<uispace> .photowrap .photoItem.js-photouploading .itemWrap{background-color:#f3f3f3;}#<uispace> .photowrap .photoItem.js-uploaderror .operatebar .imgdesc,#<uispace> .photowrap .photoItem.js-uploaderror .operatebar .clockwise,#<uispace> .photowrap .photoItem.js-photouploading .operatebar .imgdesc,#<uispace> .photowrap .photoItem.js-photouploading .operatebar .clockwise{display:none;}#<uispace> .photowrap .photoItem.js-photouploading .uploadinfo{display:block;}#<uispace> .photowrap.js-singlePhoto .photoItem.js-uploaderror img,#<uispace> .photowrap.js-singlePhoto .photoItem.js-photouploading img{height:312px;}#<uispace> .photowrap.js-singlePhoto .photoItem.js-photouploading .uploadinfo .infoicon{}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo{display:block;}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo .infoicon{background-position:1px -803px;}#<uispace> .photowrap .photoItem.js-uploaderror .uploadinfo .infotext{top:58px;opacity:0.5;font-size:13px;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .operatebar{top:auto;bottom:0;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap{max-height:' + cmY + 'px;overflow:hidden;}#<uispace> .photowrap.js-singlePhoto .photoList .photoItem .itemWrap .hidepartimg{position:absolute;left:0;bottom:0;z-index:10;width:500px;height:60px;line-height:60px;color:#ccc;font-size:16px;text-align:center;background:url("http://l.bst.126.net/rsc/img/newpublish/hidepartimg.png") 0 0 no-repeat;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .itemWrap .hidepartimg{visibility:hidden;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar{height:0;margin-bottom:-20px;border:none;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar .addbtn{display:none;}#<uispace> .photowrap.js-exceedMaxPhotoNum .addPhotoBar .dropPhotoArea{visibility:hidden;}#<uispace> .photowrap.js_isCitePost .addPhotoBar{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .move{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .itemWrap .operatebar,#<uispace> .photowrap.js_isCitePost .photoList .photoItem:hover .itemWrap .operatebar,#<uispace> .photowrap.js_isCitePost .photoList .photoItem.js-photoitemhover .itemWrap .operatebar{display:none;}#<uispace> .photowrap .photoList.js-onsortdraging .photoItem .operatebar,#<uispace> .photowrap .photoList.js-onsortdraging .photoItem:hover .operatebar,#<uispace> .photowrap .photoList.js-onsortdraging .photoItem.js-photoitemhover .operatebar{display:none;}#<uispace> .photowrap.js_isCitePost{position:relative;z-index:100;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem{display:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem:first-child{display:block;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem img{width:96px;height:96px;margin:0;max-width:none;}#<uispace> .photowrap.js_isCitePost .photoList .photoItem .itemWrap .hidepartimg{display:none;}#<uispace> .photowrap.js_isCitePost .totalphoto{display:none;position:absolute;left:71px;top:71px;z-index:120;width:20px;height:20px;line-height:20px;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalbg,#<uispace> .photowrap.js_isCitePost .totalphoto .totalnum{position:absolute;left:0;top:0;width:100%;height:100%;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalbg{opacity:0.5;filter:alpha(opacity=50);background-position:-65px -313px;}#<uispace> .photowrap.js_isCitePost .totalphoto .totalnum{overflow:hidden;text-align:center;white-space:nowrap;color:#fff;font-size:10px;}#<uispace> .photowrap .addPhotoBar .addphotobarcover{display:none;}#<uispace> .photowrap .photoList .photoItem .move{opacity:0.0001;background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}#<uispace> .photowrap.js-moreThanOnePhoto .photoList .photoItem .operatebar{background:url("http://l.bst.126.net/rsc/img/empty.png") 0 0 repeat;}', cl);
    var VE = {"-100": "IO异常","-101": "上传失败！可能因代理服务器导致上传错误","-102": "数据解析异常","-103": "上传失败！可能因网络不稳定导致上传错误","-104": "上传超时",0: "单个文件过长",1: "包段的content type错误",2: "网络超时",3: "数据包整体过长",4: "不支持的编码形式",5: "相册不存在",6: "上传包格式错误",7: "相册内照片过多",12: "图片文件格式错误",13: "SID错误",14: "上传临时文件无法获取异常",15: "MD5计算错误",16: "UFS 系统插入异常",17: "Cache文件更新并提交异常",18: "上传者权限错误",19: "头像文件大小错误",20: "相片不存在",21: "您上传的图片中含有不恰当词汇",22: "空间总容量超限异常",23: "该帐号受到上传限制，每月最多可上传200MB",24: "上传受到限制，可能是由于你在博客发布违规内容所导致",25: "当前插件不是最新版本，请升级新版后再进行上传",400: "请求错误",401: "资源禁用，您的相册正在迁移中，稍后重试",403: "资源禁用",404: "资源无法读取",500: "内部错误",506: "登录信息异常，请重新登录",1e4: "图片上传发生未知异常"};
    p.CH = C();
    cS = p.CH.bi(P(N.ui).ga, true);
    Vv = p.CH.bw;
    cS.bq = function(bl, I) {
        I = I || {};
        this.tx = "http://upload" + tx;
        this.VB = "http://upload" + VB;
        this.bnY = "http://upload" + bnY;
        this.caA();
        this.dB();
        this.fo = [];
        this.im = {};
        this.Lr = {tag: "photoItem",handler: "move",selected: cor,ondragsortitem: this.coq.A(this),ondropsortitem: this.cop.A(this)};
        this.bHq(bl, I);
        this.oK = {};
        this.sI = {};
        this.cEf = {};
        this.cDZ = {};
        this.bnM();
        this.Wa();
        if (!this.gn && this.bX != "REBLOG" && !!loft.w.Cs) {
            var bnW = {uploadUrl: this.tx + "&responsetype=json",selectFile: null,tipContainer: this.bnV,dragContainer: this.Cg,ondocdragenter: this.bnU.A(this),ondocdragleave: this.bnT.A(this),ondocdrop: this.bnS.A(this),isExceedMaxPhotoNum: this.bnR.A(this),maxFileSize: cjI * 1024 * 1024,onexceedmaxfilesize: this.clA.A(this),cbUploadStart: this.zg.A(this),cbUploadProgress: this.Kg.A(this),cbUploadComplete: this.bnQ.A(this),cbUploadError: this.zM.A(this)};
            this.bnP = loft.w.Cs.A(bnW)
        }
    };
    cS.coq = function(ckD) {
        if (!!ckD) {
            E.ba(ckD, cmX)
        }
    };
    cS.cop = function(ckD) {
        if (!!ckD) {
            E.bf(ckD, cmX)
        }
    };
    cS.caA = function() {
        window.uploadProxyDomain = window.uploadProxyDomain || "";
        if (!!window.uploadProxyDomain) {
            this.tx = "http://" + window.uploadProxyDomain + tx;
            this.VB = "http://" + window.uploadProxyDomain + VB;
            this.bnY = "http://" + window.uploadProxyDomain + bnY;
            return
        }
        if (!loft.c.cm || !loft.c.cm.email)
            return;
        var bMm = bTA(loft.c.cm.email);
        if (!!bMm) {
            var bp = "http://upload.photo.163.com/" + bMm + "/proxydomain?responsetype=js";
            J.Ty(bp, function() {
                window.uploadProxyDomain = window.uploadProxyDomain || "upload";
                this.tx = "http://" + window.uploadProxyDomain + tx;
                this.VB = "http://" + window.uploadProxyDomain + VB;
                this.bnY = "http://" + window.uploadProxyDomain + bnY
            }.A(this))
        }
    };
    cS.bHu = function(bl, I) {
        Vv.bHu.call(this, bl, I);
        var zI = this.coo();
        if (zI > 1) {
            window.setTimeout(function() {
                this.zi()
            }.A(this), 500)
        }
    };
    cS.cK = function() {
        if (!!this.bnP) {
            this.bnP = this.bnP.cK()
        }
        this.FI.innerHTML = "";
        this.tw.style.csstext = "";
        this.FI.style.csstext = "";
        E.bf(this.tw, Vx);
        E.bf(this.tw, cme);
        E.bf(this.tw, Io);
        E.bf(this.Y, "js-animateState0  js-animateState1  js-animateState2  js-animateState3  js-animateState4  js-animateState5");
        Vv.cK.call(this)
    };
    cS.bz = function(I) {
        I = I || O;
        Vv.bz.call(this);
        this.Cg = I.dragContainer;
        this.xJ = I.maxPhotoNum || xJ;
        this.ckr = I.enableAnimate || false;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.gt = I.isContribute || false;
        if (!!this.gn || this.bX == "REBLOG") {
            E.ba(this.tw, Vy)
        } else {
            E.bf(this.tw, Vy)
        }
        var fq, hg;
        if (U.co(I.photoLinks, "string")) {
            try {
                fq = U.fp(I.photoLinks)
            } catch (e) {
            }
        } else {
            fq = I.photoLinks
        }
        if (!!I.photoCaptions && U.co(I.photoCaptions, "string")) {
            try {
                hg = U.fp(I.photoCaptions)
            } catch (e) {
            }
        } else {
            hg = I.photoCaptions
        }
        if (!!I.photoLinks)
            this.Lu(fq, hg);
        this.bHn("onuploadstart", I.onuploadstart || F);
        this.bHn("onchoosephoto", I.onchoosephoto || F);
        this.bHn("onremovephoto", I.onremovephoto || F);
        this.bHn("oneditphotodesc", I.oneditphotodesc || F);
        this.bHn("onclosephotodesc", I.onclosephotodesc || F)
    };
    cS.cU = function() {
        return cl + " photomanager"
    };
    cS.cM = function() {
        var bmI = this.bmH();
        return '<div class="photowrap ztag"><div class="photoList clearfix ztag"></div><div class="addPhotoBar ztag"><div style="display:none" class="dropPhotoArea ztag"><div class="tipcover">&nbsp;</div><div class="tiptxt ztag">拖放图片到这里，直接上传</div><div class="tipmsg">最多只能上传10张图片</div></div><div class="flashwrap">' + bmI + '</div><div class="addbtn ztag"><div class="addicon f-pbicon ztag"></div><div class="addtext ztag">添加一张图片</div></div><div class="addphotobarcover"></div></div><div class="flashinfo ztag"><div class="infoicon f-pbicon"></div><div class="infotext ztag"></div></div><div class="totalphoto ztag"><span class="icon2-8 totalbg"></span><span class="totalnum ztag"></span></div></div>'
    };
    cS.bmH = function() {
        this.cjW = "flashId_" + U.cA();
        return '<object id="obj_' + this.cjW + '" name="obj_' + this.cjW + '" hidefocus="true" height="312" width="500" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + oX + "flash_upload_basic.swf?v=" + (new Date).getTime() + '"><param name="quality" value="high"><param name="allowscriptaccess" value="always"><param name="wmode" value="transparent"><param name="flashvars" value="compressQuality=96&width=90&height=30&cbNameSpace=loft.np.w.g&maxWidth=1680&maxHeight=10000&uploadExif=true&uploadUrl=' + encodeURIComponent(this.tx) + '"><embed id="' + this.cjW + '" name="' + this.cjW + '" hidefocus="true" height="312" width="500" flashvars="compressQuality=96&width=90&height=30&cbNameSpace=loft.np.w.g&maxWidth=1680&maxHeight=10000&uploadExif=true&uploadUrl=' + encodeURIComponent(this.tx) + '" allowscriptaccess="always" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="' + oX + 'flash_upload_basic.swf?v=20130326"></object>'
    };
    cS.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.tw = bHk[Q++];
        this.FI = bHk[Q++];
        this.bGO = bHk[Q++];
        this.Gk = bHk[Q++];
        this.bnV = bHk[Q++];
        this.boM = bHk[Q++];
        this.cqc = bHk[Q++];
        this.cnc = bHk[Q++];
        this.cla = bHk[Q++];
        this.cjV = bHk[Q++];
        this.ckd = bHk[Q++];
        this.cqq = bHk[Q++]
    };
    cS.Wa = function() {
        if (!!this.LS)
            this.LS = window.clearTimeout(this.LS);
        var bne = this.bnd;
        if (B.da || B.cEl) {
            this.kK = window["obj_" + this.cjW]
        } else {
            this.kK = document[this.cjW]
        }
        if (!this.kK && !bne) {
            this.LS = window.setTimeout(this.Wa.A(this), 100)
        } else if (!!this.kK) {
            try {
                this.kK.style.display = "block";
                this.bnD()
            } catch (e) {
            }
        }
    };
    cS.cEk = function() {
        if (p.completeFlashVersion !== undefined && !U.co(p.completeFlashVersion, "undefined"))
            return p.completeFlashVersion;
        var ed = 0, MA = "";
        try {
            ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (ed) {
                MA = ed.GetVariable("$version")
            }
        } catch (e) {
            ed = navigator.plugins["Shockwave Flash"];
            if (ed) {
                MA = ed.description
            }
        }
        p.completeFlashVersion = MA;
        return MA
    };
    cS.bnr = function() {
        if (p.flashVersion !== undefined && !U.co(p.flashVersion, "undefined"))
            return p.flashVersion;
        var ed = 0, MA = 0;
        try {
            ed = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (ed) {
                MA = +ed.GetVariable("$version").match(/\d+/)
            }
        } catch (e) {
            ed = navigator.plugins["Shockwave Flash"];
            if (ed) {
                MA = +ed.description.match(/\d+/)
            }
        }
        p.flashVersion = MA;
        return MA
    };
    cS.bnD = function() {
        var bnv = "<span>当前浏览器没有安装FLASH，无法上传图片，请更换其他浏览器，或&nbsp;</span>";
        var bnt = '<a target="_blank" href="http://get.adobe.com/cn/flashplayer/ ">直接安装&gt;&gt;</a>';
        var bGL = "<span>当前FLASH版本较低，升级可以提升图片上传速度及图片质量。</span>";
        var bGN = '<a target="_blank" href="http://get.adobe.com/cn/flashplayer/ ">点击升级&gt;&gt;</a>';
        var Bz = this.bnr() || 0;
        if (Bz == 0 && !B.oc) {
            this.cjV.innerHTML = bnv + bnt;
            var bnh = U.ot("no-flashveriontipclosed") || "0";
            if (bnh != "1") {
                this.cla.style.display = "block"
            } else {
                this.cla.style.display = "none"
            }
            this.boM.style.opacity = "0.5";
            return
        } else {
            this.boM.style.opacity = ""
        }
        if (Bz < 11 && !B.oc) {
            var bng = U.ot("flashveriontipclosed") || "0";
            if (bng != "1") {
                this.cjV.innerHTML = bGL + bGN;
                this.ym.style.display = "block"
            } else {
                this.cla.style.display = "none"
            }
        } else {
            this.cla.style.display = "none"
        }
    };
    cS.dB = function() {
        var bJ = P("loft.np.w.g");
        bJ.getUploadUrl = this.zK.A(this);
        bJ.uploadStart = this.zg.A(this);
        bJ.uploadComplete = this.zf.A(this);
        bJ.uploadError = this.zM.A(this);
        bJ.showProgress = this.Kg.A(this);
        bJ.removeItem = this.bmY.A(this);
        bJ.setSwfIsReady = this.bmW.A(this);
        bJ.isReady = this.bmV.A(this);
        bJ.printFlashLog = this.th.A(this);
        bJ.onImgLoad = this.bmU.A(this);
        bJ.mouseOver = this.Kv.A(this);
        bJ.mouseOut = this.Kw.A(this);
        bJ.clockwiseRotate = this.bmT.A(this);
        bJ.cbPhotoRotateCB = this.Mj.A(this);
        bJ.editPhotoDesc = this.con.A(this);
        bJ.cbMakeImageStamp = this.bmQ.A(this)
    };
    cS.bmU = function(bk) {
        if (!bk)
            return;
        var dz = bk.width || bk.naturalWidth || 1;
        var eT = bk.height || bk.naturalHeight || 1;
        var ciC = cjn(bk.parentNode);
        var cmb = ciC["hidePartImg"];
        if (!cmb)
            return;
        var chw = eT;
        if (dz > 500) {
            chw = 500 * eT / dz
        }
        if (chw > cmY) {
            cmb.style.display = ""
        } else {
            cmb.style.display = "none"
        }
        var cuD = dz, cuE = chw;
        if (cuD > 500)
            cuD = 500;
        if (cuE > cmY)
            cuE = cmY;
        if (bk.src != cuT && bk.src != loft.x.ccz(cuT, 96, 96, true)) {
            window.setTimeout(function(bk) {
                bk.style.opacity = 1;
                window.setTimeout(function() {
                    E.bf(bk.parentNode.parentNode, cjX)
                }.A(this), 200)
            }.A(this, bk), 210)
        }
        this.cuF({imgNode: bk,photoItemWidth: cuD,photoItemHeight: cuE})
    };
    cS.cuF = function(I) {
        var bHk = E.bj(this.FI, "photoItem");
        this.FI.style.overflow = "";
        if (!bHk || bHk.length <= 0 || !bHk[0]) {
            this.FI.style.height = 0
        } else if (bHk.length == 1) {
            if (this.gn || this.bX == "REBLOG") {
                this.FI.style.height = "100px";
                this.tw.style.height = "100px"
            } else {
                if (E.cr(bHk[0], cux)) {
                    this.FI.style.height = "312px";
                    this.tw.style.height = ""
                } else {
                    if (!!I && I.photoItemHeight) {
                        this.FI.style.height = I.photoItemHeight + "px";
                        this.tw.style.height = I.photoItemHeight + 73 + "px"
                    } else {
                        if (!!bHk[0].clientHeight) {
                            this.FI.style.height = bHk[0].clientHeight + "px";
                            this.tw.style.height = bHk[0].clientHeight + 73 + "px"
                        }
                    }
                }
            }
        } else {
            if (this.gn || this.bX == "REBLOG") {
                this.FI.style.height = "100px";
                this.tw.style.height = "100px"
            } else {
                if (bHk.length < 6) {
                    this.FI.style.height = "100px";
                    this.tw.style.height = "173px"
                } else {
                    if (this.gn || this.bX == "REBLOG") {
                        this.FI.style.height = "100px";
                        this.tw.style.height = "100px"
                    } else {
                        this.FI.style.height = "200px";
                        if (bHk.length == 10) {
                            this.tw.style.height = "220px"
                        } else {
                            this.tw.style.height = "273px"
                        }
                    }
                }
            }
        }
        if (!!this.cze)
            this.cze = window.clearTimeout(this.cze);
        this.cze = window.setTimeout(function(I) {
            this.FI.style.overflow = "visible";
            var zI = this.ckE() || 0;
            if (zI > 1)
                this.zi()
        }.A(this, I), 200)
    };
    cS.th = function(du) {
        var du = "photoupload_" + du;
        J.br(location.dwr, "LoggerBean", "print", du, F)
    };
    cS.cEh = function() {
        J.br(location.dwr, "LoggerBean", "upload")
    };
    cS.cEi = function(cDY) {
        J.br(location.dwr, "LoggerBean", "uploadFail", cDY)
    };
    cS.cEj = function(bt) {
        if (this.cDZ[bt] == "uploading") {
            J.br(location.dwr, "LoggerBean", "uploadCancel")
        }
    };
    cS.bmW = function() {
        this.bnd = true
    };
    cS.bmV = function() {
        return this.bmN
    };
    cS.bnM = function() {
        this.bmN = true
    };
    cS.Kv = function(Kx) {
    };
    cS.Kw = function(Kx) {
    };
    cS.bmK = function(bt) {
        var rD = (new Date).getTime() - this.sI[bt];
        this.th("timeout " + "costTime:" + rD + " id:" + bt)
    };
    cS.zK = function() {
        return this.tx
    };
    cS.zg = function(bt, boB, cEg) {
        var zI = this.coo();
        if (zI <= 0) {
            this.cve(bt, boB)
        } else {
            this.cvd(bt, boB)
        }
        this.sI[bt] = (new Date).getTime();
        this.oK[bt] = window.setInterval(this.bmK.A(this, bt), 4e4);
        this.cEf[bt] = cEg || 0;
        this.cDZ[bt] = "uploading";
        this.cEh()
    };
    cS.cvd = function(bt, boB) {
        var zI = this.coo();
        if (zI < 2) {
            this.tw.style.opacity = 0
        }
        window.setTimeout(function(bt, boB) {
            this.cvc(bt, boB);
            window.setTimeout(function(bt, boB) {
                if (this.tw.style.opacity == 0) {
                    this.tw.style.opacity = 1
                }
            }.A(this, bt, boB), 100)
        }.A(this, bt, boB), 200)
    };
    cS.cvc = function(bt, boB) {
        this.im[bt] = {};
        var bk = this.WS(bt, null);
        var zI = this.ckE() || 0;
        if (zI > 1) {
            if (zI == 6)
                this.cuF()
        }
        this.bh("onuploadstart")
    };
    cS.cve = function(bt, boB) {
        this.tw.style.height = "";
        E.ba(this.Y, "js-animateState0");
        window.setTimeout(function(bt, boB) {
            E.ba(this.Y, "js-animateState1")
        }.A(this, bt, boB), 10);
        window.setTimeout(function(bt, boB) {
            this.cvb(bt, boB)
        }.A(this, bt, boB), 200)
    };
    cS.cvb = function(bt, boB) {
        this.im[bt] = {};
        var bk = this.WS(bt, null);
        var zI = this.ckE() || 0;
        if (zI > 1) {
        }
        window.setTimeout(function() {
            E.ba(this.Y, "js-animateState2")
        }.A(this), 10);
        window.setTimeout(function() {
            E.ba(this.Y, "js-animateState3");
            window.setTimeout(function() {
                E.ba(this.Y, "js-animateState4");
                this.bh("onuploadstart")
            }.A(this), 20)
        }.A(this), 200)
    };
    cS.Kg = function(bt, gC) {
        gC = gC || 0;
        var gK = E.be(bt);
        if (!!gK) {
            var ciC = cjn(gK);
            var cjU = ciC["uploadInfo"];
            var cjA = ciC["infoText"];
            if (!!cjU) {
                cjU.title = ""
            }
            if (!!cjA) {
                cjA.innerText = (gC || 0) + "%"
            }
        }
    };
    cS.zf = function(bt, bK, bH) {
        if (bK == 999 && !!bH) {
            this.cDZ[bt] = "ok"
        } else {
            this.cDZ[bt] = "fail"
        }
        window.setTimeout(function(bt, bK, bH) {
            this.cva(bt, bK, bH)
        }.A(this, bt, bK, bH), 600)
    };
    cS.cva = function(bt, bK, bH) {
        if (!!this.oK[bt])
            this.oK[bt] = window.clearInterval(this.oK[bt]);
        var gK = E.be(bt);
        if (!!gK) {
            E.bf(gK, cux);
            var zI = this.coo();
            if (zI < 2) {
                E.bf(gK, cjX)
            } else {
            }
            var ciC = cjn(gK);
            var nt = ciC["imgNode"];
            if (bK == 999 && !!bH) {
                bH = this.Mo(bH);
                if (!!nt) {
                    nt.setAttribute("smallsrc", bH.userDef1Url || Lo);
                    nt.setAttribute("middlesrc", bH.userDef2Url || Lo);
                    this.ckE()
                }
                E.ba(this.Y, "js-animateState5");
                var gz = {id: bt,ow: bH.ow,oh: bH.oh,small: bH.userDef1Url || "",middle: bH.userDef2Url || "",orign: bH.userDef3Url || "",photoGarbageIds: bH.photoGarbageIds};
                this.fo.push(gz);
                this.im[bt]["state"] = 0;
                this.im[bt][0] = gz;
                this.bh("onchoosephoto", gz)
            } else {
                this.zM(bt, bK)
            }
        } else {
            this.th("id:" + bt + " , 本地htm节点错误：" + bK)
        }
    };
    cS.zM = function(gk, vU, PF, cEa) {
        this.cDZ[gk] = "fail";
        var rD = (new Date).getTime() - this.sI[gk];
        var cDY = {};
        cDY.taskId = gk;
        cDY.uploadType = cEa || 0;
        cDY.failType = vU || 0;
        cDY.httpCode = PF || 0;
        cDY.fileSize = this.cEf[gk];
        cDY.flashVer = this.cEk();
        cDY.costTime = rD;
        cDY.uploadUrl = this.tx;
        this.cEi(cDY);
        window.setTimeout(function(gk, vU, PF, cEa) {
            this.cuZ(gk, vU, PF, cEa)
        }.A(this, gk, vU, PF, cEa), 600)
    };
    cS.cuZ = function(gk, vU, PF, cEa) {
        if (!!this.oK[gk])
            this.oK[gk] = window.clearInterval(this.oK[gk]);
        var gK = E.be(gk);
        if (!!gK) {
            var Mt = VE[vU] || "上传失败";
            var dc = Mt + "！错误码：" + (vU || 0) + ",httpcode:" + (PF || 0);
            var ciC = cjn(gK);
            var cjU = ciC["uploadInfo"];
            var cjA = ciC["infoText"];
            if (!!cjU) {
                cjU.title = dc
            }
            if (!!cjA) {
                cjA.innerText = "上传失败"
            }
            E.bf(gK, cux);
            E.dt(gK, cjX, cos)
        } else {
            this.th("id:" + gk + " , 本地htm节点错误：" + vU)
        }
    };
    cS.bmY = function(bt, bHl) {
        bHl = bHl ? bHl : window.event;
        if (!!bHl)
            V.bb(bHl);
        if (!!this.cld) {
            this.cld = this.cld.db(this.cld)
        }
        if (!!this.oK[bt])
            this.oK[bt] = window.clearInterval(this.oK[bt]);
        this.cEj(bt);
        var zI = this.coo();
        if (zI > 0 && !!this.cuw) {
            this.cuw = window.clearTimeout(this.cuw);
            E.ba(this.Y, "js-animateState0  js-animateState3")
        }
        if (zI == 1) {
            this.cuY(bt)
        } else {
            this.cuX(bt, zI)
        }
    };
    cS.cuX = function(bt, zI) {
        if (zI < 3) {
            this.tw.style.height = "";
            this.tw.style.opacity = 0
        } else {
            var bk = E.be(bt);
            if (!!bk)
                bk.style.opacity = 0
        }
        window.setTimeout(function(bt) {
            this.cuV(bt);
            window.setTimeout(function(bt) {
                if (this.tw.style.opacity == 0) {
                    this.tw.style.opacity = 1
                }
            }.A(this, bt), 200)
        }.A(this, bt), 200)
    };
    cS.cuY = function(bt) {
        this.tw.style.height = "";
        this.tw.style.opacity = 0;
        E.bf(this.Y, "js-animateState5");
        window.setTimeout(function(bt) {
            E.bf(this.Y, "js-animateState4");
            window.setTimeout(function(bt) {
                E.bf(this.Y, "js-animateState3");
                E.bf(this.Y, "js-animateState2");
                window.setTimeout(function(bt) {
                    this.cuV(bt);
                    this.tw.style.opacity = 1
                }.A(this, bt), 150)
            }.A(this, bt), 200)
        }.A(this, bt), 200)
    };
    cS.cuV = function(bt) {
        this.bmJ(bt);
        this.cuF()
    };
    cS.bmJ = function(bt) {
        for (var i = 0; i < this.fo.length; i++) {
            if (this.fo[i].id == bt) {
                this.fo.splice(i, 1);
                break
            }
        }
        var gK = E.be(bt);
        if (!gK)
            return;
        var bHk = E.bj(gK, "ztag");
        if (E.cr(gK, cux)) {
            if (!!this.kK && !!this.kK.cancleTask) {
                try {
                    this.kK.cancleTask(bt)
                } catch (e) {
                }
            }
        }
        E.hE(gK);
        var zI = this.ckE() || 0;
        E.bf(this.Y, "js-animateState1");
        if (zI > 1)
            this.zi();
        this.bh("onremovephoto")
    };
    cS.Mo = function(bH) {
        var sL = U.bA(bH.ourl || "");
        var bIe = (bH.photoGarbageIds || "").split(",");
        if (!(!!sL && sL.length > 4 && sL.substring(sL.length - 4) == ".gif")) {
            var bRJ = this.caz(bH, bIe);
            if (!!bRJ) {
                bH = bRJ.photo;
                bIe = bRJ.gIds
            }
        }
        if (!!sL && sL.length > 4 && sL.substring(sL.length - 4) == ".gif") {
            bH.userDef2Url = sL;
            bH.userDef3Url = sL;
            var Xa = "";
            for (var i = 0; i < bIe.length; i++) {
                var bo = bIe[i].split(":");
                if (bo[0].toLowerCase() == "ourl") {
                    Xa = bo[1]
                }
            }
            for (var i = 0; i < bIe.length; i++) {
                var bo = bIe[i].split(":");
                if (bo[0].toLowerCase() == "userdef2url" || bo[0].toLowerCase() == "userdef3url") {
                    bo[1] = Xa || -1
                }
                bIe[i] = bo.join(":")
            }
        } else {
            if (!!sL && sL != "http://") {
                for (var i = 0; i < bIe.length; i++) {
                    var bo = bIe[i].split(":");
                    if (bo[0].toLowerCase() == "ourl") {
                        bo[1] = -1
                    }
                    bIe[i] = bo.join(":")
                }
            }
        }
        bH.photoGarbageIds = bIe.join(",");
        return bH
    };
    cS.caz = function(bH, bIe) {
        var bMh = U.bA(bH.userDef3Url || "");
        if (!!bMh && bMh.length > 4 && bMh.substring(bMh.length - 4) == ".gif") {
            bH.userDef2Url = bMh;
            for (var i = 0; i < bIe.length; i++) {
                var bo = bIe[i].split(":");
                if (bo[0].toLowerCase() == "userdef2url") {
                    bo[1] = -1
                }
                bIe[i] = bo.join(":")
            }
            return {photo: bH,gIds: bIe}
        }
    };
    cS.WS = function(bt, bH) {
        var MH = Lo;
        var clZ = Lo;
        var clY = Lo;
        var bF = "";
        if (!!bH) {
            var gz = {id: bt,caption: bH.caption || "",ow: bH.ow,oh: bH.oh,small: bH.small || bH.userDef1Url || "",middle: bH.middle || bH.userDef2Url || "",orign: bH.orign || bH.userDef3Url || ""};
            if (!!bH.photoGarbageIds) {
                gz.photoGarbageIds = bH.photoGarbageIds
            }
            this.fo.push(gz);
            MH = loft.x.ccz(gz.middle, 96, 96, true) || MH;
            clZ = gz.small || clZ;
            clY = gz.middle || clY;
            bF = U.ew(U.bA(gz.caption || ""))
        }
        var bk = E.eY(E.dG(xr, {id: bt,imgurl: MH,smallsrc: clZ,middlesrc: clY,caption: bF}));
        if (!!bk) {
            if (!bH) {
                var ciC = cjn(bk);
                var nt = ciC["imgNode"];
                var cjA = ciC["infoText"];
                cjA.innerText = "0%";
                E.ba(bk, cjX);
                E.ba(bk, cux);
                bk.style.opacity = 0;
                window.setTimeout(function() {
                    bk.style.opacity = ""
                }.A(this, bk), 100)
            } else {
                E.bf(bk, cjX);
                E.bf(bk, cux)
            }
            if (!!bF) {
                E.ba(bk, ckY)
            } else {
                E.bf(bk, ckY)
            }
        }
        this.FI.insertAdjacentElement("beforeEnd", bk);
        return bk
    };
    cS.coo = function() {
        var bHk = E.bj(this.FI, "photoItem") || [];
        return bHk.length || 0
    };
    cS.ckE = function() {
        var bHk = E.bj(this.FI, "photoItem") || [];
        if (bHk.length <= 0) {
            E.bf(this.tw, Vx);
            E.bf(this.tw, cme);
            E.bf(this.tw, Io);
            this.cnc.innerHTML = "添加一张图片";
            return 0
        } else {
            this.cnc.innerHTML = "继续添加"
        }
        if (bHk.length >= this.xJ) {
            E.ba(this.tw, Io)
        } else {
            E.bf(this.tw, Io)
        }
        if (bHk.length == 1) {
            E.dt(this.tw, cme, Vx)
        } else {
            if (this.ckr && E.cr(this.tw, Vx)) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0
            }
            E.dt(this.tw, Vx, cme)
        }
        this.com(bHk);
        return bHk.length || 0
    };
    cS.com = function(bT) {
        if (!bT || bT.length <= 0)
            return;
        for (var i = 0; i < bT.length; i++) {
            if (!!bT[i]) {
                var ciC = cjn(bT[i]);
                var nt = ciC["imgNode"];
                var cjU = ciC["uploadInfo"];
                var cjA = ciC["infoText"];
                if (!!nt) {
                    if (bT.length == 1 && !this.gn && this.bX != "REBLOG") {
                        var cjS = nt.getAttribute("middlesrc") || Lo;
                        if (nt.src !== cjS) {
                            nt.src = cjS
                        }
                    } else {
                        var cjS = loft.x.ccz(nt.getAttribute("middlesrc"), 96, 96, true) || Lo;
                        if (nt.src !== cjS) {
                            nt.src = cjS
                        }
                    }
                }
            }
        }
    };
    cS.bmT = function(bt) {
        var di = parseInt(this.im[bt]["state"] || 0);
        var bH = this.im[bt][0];
        if (!bH) {
            E.bd("图片上传完成后才能旋转！", true, false, false, true);
            return
        }
        if (!this.im[bt][di]) {
            return
        }
        E.ef("图片旋转中...", true, true, false, true);
        this.WM(bt);
        di = (di + 1) % 4;
        if (!this.im[bt][di]) {
            var bp = this.VB + bH.orign + "&rotatedegree=" + di * 90;
            if (!!this.kK && !!this.kK.clockwiseRotate) {
                try {
                    this.kK.clockwiseRotate(bt, bp, di, "cbPhotoRotateCB")
                } catch (e) {
                }
            } else {
                E.bd("旋转失败！", true, false, false, true);
                this.Ml(bt)
            }
        } else {
            this.Mj(di, bt, 999, this.im[bt][di], true)
        }
    };
    cS.WM = function(bt) {
        var gK = E.be(bt);
        if (!!gK) {
            E.ba(gK, cmc)
        }
    };
    cS.Ml = function(bt) {
        var gK = E.be(bt);
        if (!!gK) {
            E.bf(gK, cmc)
        }
    };
    cS.Mj = function(di, bt, bK, bH, bmM) {
        E.gI(true);
        var gK = E.be(bt);
        if (!!gK) {
            var gz;
            if (bK == 999 && !!bH) {
                if (!bmM && !!bH.userDef1Url) {
                    bH = this.Mo(bH);
                    gz = {id: bt,ow: bH.ow,oh: bH.oh,small: bH.userDef1Url || "",middle: bH.userDef2Url || "",orign: bH.userDef3Url || "",photoGarbageIds: bH.photoGarbageIds}
                } else {
                    gz = bH;
                    gz.id = bt
                }
                var ciC = cjn(gK);
                var nt = ciC["imgNode"];
                if (!!nt) {
                    nt.setAttribute("smallsrc", gz.small || Lo);
                    nt.setAttribute("middlesrc", gz.middle || Lo);
                    this.ckE()
                }
                this.bmL(gz);
                this.im[bt]["state"] = di;
                this.im[bt][di] = gz;
                this.bh("onchoosephoto", gz)
            } else {
                E.bd("旋转失败！", true, false, false, true)
            }
        }
        this.Ml(bt)
    };
    cS.bmL = function(gz) {
        if (!gz || !gz.id)
            return;
        for (var i = 0; i < this.fo.length; i++) {
            if (this.fo[i].id == gz.id) {
                this.fo[i] = gz;
                break
            }
        }
    };
    cS.con = function(bt, As, bHl) {
        V.bb(bHl);
        if (!As || !As.parentNode || !As.parentNode.parentNode || !As.parentNode.parentNode.parentNode || !As.parentNode.parentNode.parentNode.parentNode)
            return;
        var ciJ = As.parentNode;
        var clW = As.parentNode.parentNode.parentNode;
        var gK = As.parentNode.parentNode.parentNode.parentNode;
        var ciC = cjn(clW);
        var cjD = ciC["hiddenDesc"];
        var cne = "";
        if (!!cjD) {
            cne = cjD.value || ""
        }
        var I = {imgDescNode: ciJ,photodesc: cne,singleton: true,onupdatedesc: this.clr.A(this),onclosedesclayer: this.col.A(this)};
        if (!!this.cld) {
            this.cld = this.cld.db(this.cld)
        }
        this.cld = p.clp.bG(ciJ, I);
        if (!!this.pZ)
            this.pZ.mM();
        E.ba(gK, cmW);
        if (B.da) {
            E.ba(this.tw, "js-hasphotoitemhover")
        }
        this.bh("oneditphotodesc")
    };
    cS.clr = function(ciJ, jG) {
        var gK;
        if (!!ciJ) {
            var cjD = E.bj(ciJ, "hiddendesc")[0];
            if (!!cjD) {
                cjD.value = jG || ""
            }
        }
        if (!!ciJ && !!ciJ.parentNode && !!ciJ.parentNode.parentNode && !!ciJ.parentNode.parentNode.parentNode) {
            gK = ciJ.parentNode.parentNode.parentNode
        }
        if (!!jG) {
            E.ba(gK, ckY);
            E.bY("图片描述已提交", true, false, false, true)
        } else {
            E.bf(gK, ckY)
        }
    };
    cS.col = function(ciJ, jG) {
        var gK, clW;
        if (!!ciJ && !!ciJ.parentNode && !!ciJ.parentNode.parentNode && !!ciJ.parentNode.parentNode.parentNode) {
            clW = ciJ.parentNode.parentNode;
            gK = ciJ.parentNode.parentNode.parentNode;
            E.bf(gK, cmW)
        }
        if (!!this.pZ)
            this.pZ.yG();
        if (B.da) {
            E.bf(this.tw, "js-hasphotoitemhover")
        }
        this.bh("onclosephotodesc")
    };
    cS.bmE = function(IZ) {
        if (!IZ)
            return 0;
        var fC = 0;
        if (IZ.length > 0) {
            var bHk;
            for (var i = 0; i < IZ.length; i++) {
                if (!!IZ[i] && (E.cr(IZ[i], cux) || E.cr(IZ[i], cmc))) {
                    fC++;
                    break
                }
            }
        }
        return fC
    };
    cS.zi = function() {
        if (!this.pZ) {
            this.pZ = p.cjo.bG(this.FI, this.Lr)
        } else {
            this.pZ.gH()
        }
    };
    cS.Lu = function(jh, MC) {
        jh = jh || [];
        MC = MC || [];
        for (var i = 0; i < jh.length && i < this.xJ; i++) {
            jh[i].caption = MC[i] || "";
            var bt = jh[i].id || "photoId-" + U.cA();
            this.WS(bt, jh[i]);
            this.im[bt] = {};
            this.im[bt]["state"] = 0;
            this.im[bt][0] = jh[i]
        }
        if (!!this.gn || this.bX == "REBLOG") {
            if (jh.length > 1) {
                this.cqq.innerText = jh.length;
                this.ckd.style.display = "block"
            } else {
                this.ckd.style.display = "none"
            }
        }
        var zI = this.ckE() || 0;
        if (zI > 0) {
            this.tw.style.height = "auto";
            E.ba(this.Y, "js-animateState1  js-animateState2  js-animateState4  js-animateState5");
            if (!!this.cuw) {
                this.cuw = window.clearTimeout(this.cuw)
            }
            this.cuw = window.setTimeout(function() {
                this.cuw = window.clearTimeout(this.cuw);
                E.ba(this.Y, "js-animateState0  js-animateState3")
            }.A(this), 1500)
        }
    };
    cS.vl = function() {
        var bHm = {};
        var IV = {};
        for (var i = 0; !!this.fo && i < this.fo.length; i++) {
            IV[this.fo[i].id] = this.fo[i]
        }
        var bHk = E.bj(this.FI, "photoItem") || [];
        if (bHk.length == 0) {
            bHm.code = -1;
            return bHm
        }
        if (bHk.length > 0 && this.bmE(bHk) > 0) {
            bHm.code = -2;
            return bHm
        }
        var cf = [];
        for (var k = 0; k < bHk.length; k++) {
            var jG = "";
            var ciC = cjn(bHk[k]);
            var cjD = ciC["hiddenDesc"];
            if (!!cjD) {
                jG = cjD.value || ""
            }
            if (!!IV[bHk[k].id]) {
                IV[bHk[k].id].caption = jG;
                cf.push(IV[bHk[k].id])
            }
        }
        bHm.code = 1;
        bHm.photos = cf;
        return bHm
    };
    cS.bmD = function(bT, tJ, I) {
        I = I || {};
        var wf = I.stampString;
        var bc = I.blogId;
        this.Xs = tJ;
        if (!!this.kK && !!this.kK.postUploadCrossDomain && (!!wf || !!bc)) {
            this.fo = bT || [];
            this.yo = {};
            this.Xu = this.fo.length;
            try {
                for (var i = 0; i < this.fo.length; i++) {
                    if (!this.fo[i].photoGarbageIds) {
                        this.bUE();
                        continue
                    }
                    var bt = this.fo[i].id || "photoId-" + U.cA();
                    this.fo[i].id = bt;
                    this.yo[bt] = this.fo[i];
                    var bp = this.bnY + this.fo[i].orign;
                    if (!!wf) {
                        bp = bp + "&stampstring=" + wf
                    }
                    if (!!bc) {
                        bp = bp + "&loftdigitmark=" + bc
                    }
                    this.kK.postUploadCrossDomain(bt, bp, "", "cbMakeImageStamp")
                }
            } catch (e) {
            }
        } else {
            this.Xs()
        }
    };
    cS.bmQ = function(di, bt, bK, bH) {
        if (bK == 999 && !!bH) {
            if (!!bH.userDef1Url) {
                bH = this.Mo(bH);
                if (!!this.yo[bt]) {
                    this.yo[bt].small = bH.userDef1Url || "";
                    this.yo[bt].middle = bH.userDef2Url || "";
                    this.yo[bt].orign = bH.userDef3Url || "";
                    this.yo[bt].photoGarbageIds = bH.photoGarbageIds
                }
            }
        }
        this.bUE()
    };
    cS.bUE = function() {
        this.Xu--;
        if (this.Xu == 0) {
            var gZ = U.ii(this.fo);
            this.Xs(gZ)
        }
    };
    cS.bnU = function() {
        this.Gk.style.display = "block"
    };
    cS.bnT = function() {
        this.Gk.style.display = "none"
    };
    cS.bnS = function() {
        this.Gk.style.display = "none"
    };
    cS.bnc = function(bHl) {
        this.bnP.bnb(bHl);
        this.Gk.style.display = "none"
    };
    cS.bnQ = function(bt, bH) {
        var photodata;
        if (!!bH) {
            bH = "var photodata=" + bH;
            eval(bH || "null")
        }
        if (!photodata || photodata.resultcode != 999) {
            if (!photodata) {
                photodata = {resultcode: 1e4}
            }
            this.zM(bt, photodata.resultcode || 0, 0, 1);
            if (photodata.resultcode == 3) {
                E.bd("图片不能超过" + cjI + "M！", true, false, false, true)
            }
            return
        }
        this.zf(bt, 999, photodata)
    };
    cS.bnR = function() {
        if (E.cr(this.tw, Io)) {
            E.bd("您最多只能上传" + (this.xJ || 10) + "张图片！", true, false, false, true);
            return true
        } else {
            return false
        }
    };
    cS.clA = function(cjH) {
        cjH = (cjH || 0) / (1024 * 1024) || cjI;
        E.bd("图片不能超过" + cjH + "M！", true, false, false, true)
    }
})();
(function() {
    var p = P("loft.m.newpublish"), cW, bNL;
    var cke = 150, cll = 150;
    p.bgL = C();
    cW = p.bgL.bi(loft.m.newpublish.w.cks, true);
    bNL = p.bgL.bw;
    p.bgL.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    cW.bq = function(I) {
        I = I || {};
        this.bHq(I);
        this.bWR = {isPreview: false,autoSubmitMethod: this.ti.A(this)};
        this.bWS = {isPreview: false,autoSubmitMethod: this.nA.A(this)};
        this.bUd = {isPreview: true,noShowError: true}
    };
    cW.bz = function(I) {
        I = I || {};
        this.bJQ = "new/photo/";
        I.minFrameHeight = cke;
        I.maxFrameHeight = cll;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bYF = 660;
        I.maxFrameHeight = qx - 112 - 80 - bYF;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bNL.bz.call(this, I);
        this.bIl = I.mydomains || {};
        this.crl = I.goPublishData;
        I.goPublishData = null;
        var cnf;
        if (!!this.ciz) {
            cnf = this.ciz.bCu()
        }
        this.Nb = {enableAnimate: this.ckr,actionType: this.bX,isCitePost: this.gn,isContribute: this.gt,dragContainer: cnf,onuploadstart: this.cok.A(this),oneditphotodesc: this.coj.A(this),onclosephotodesc: this.coi.A(this)};
        if (this.bX == "NEW") {
            this.Nb.onchoosephoto = this.bsr.A(this);
            this.Nb.onremovephoto = this.bss.A(this)
        }
        this.cjN("js-postPhoto");
        if (this.bX != "NEW") {
            this.cjB(this.ciT)
        }
        this.ciQ()
    };
    cW.ciY = function(I) {
        if (!!I && !!I.post) {
            var dp = document.documentElement || document.body;
            var qx = dp.clientHeight || 0;
            var bYF = 590;
            if (I.actionType == "REBLOG") {
                bYF = 449
            } else {
                var fq;
                if (!!I.post.photoLinks && U.co(I.post.photoLinks, "string")) {
                    try {
                        fq = U.fp(I.post.photoLinks)
                    } catch (e) {
                    }
                } else {
                    fq = I.post.photoLinks
                }
                if (!!fq && fq.length > 0) {
                    if (fq.length == 1 && !!fq[0]) {
                        var dz = fq[0].ow;
                        var eT = fq[0].oh;
                        var chw = eT;
                        if (dz > 500) {
                            chw = 500 * eT / dz
                        }
                        if (chw > 667) {
                            chw = 667
                        }
                        bYF = 349 + chw
                    } else if (fq.length < 6) {
                        bYF = 449
                    } else {
                        bYF = 549
                    }
                }
            }
            var clJ = I.minFrameHeight || cke;
            var clK = qx - 112 - 80 - bYF;
            clK = clK || cll;
            if (clK < clJ) {
                clK = clJ
            }
            I.minFrameHeight = clJ;
            I.maxFrameHeight = clK;
            this.bYG(clJ, clK)
        }
    };
    cW.crn = function() {
        if (!!this.crl && this.crl.code == "999") {
            var bH = this.crl;
            var gz = {ow: bH.ow,oh: bH.oh,small: bH.userDef1Url || "",middle: bH.userDef2Url || "",orign: bH.userDef3Url || ""};
            if (!!bH.photoGarbageIds) {
                gz.photoGarbageIds = bH.photoGarbageIds
            }
            this.bhw = {isPublished: true,photoLinks: [gz],photoCaptions: null};
            var bF = this.crl.content || "";
            try {
                bF = decodeURIComponent(bF)
            } catch (e) {
            }
            this.bhw.caption = bF;
            if (!!this.crl.source) {
                this.bhw.caption = this.bhw.caption + '<p>来自：<a href="' + (this.crl.sourceUrl || "") + '">' + this.crl.source + "</a></p>"
            }
            if (this.crl.from) {
                this.bhw.from = this.crl.from
            }
            if (!!this.crl.tag) {
                this.bhw.tag = this.crl.tag
            }
            this.cookiePostData = this.bhw;
            this.bNu(this.bhw);
            this.crl = null
        } else {
            bNL.crn.call(this)
        }
    };
    cW.bQY = function(bHm) {
        bNL.bQY.call(this, bHm);
        if (!!bHm) {
        }
    };
    cW.coj = function() {
        this.cjd(1e3, 0)
    };
    cW.coi = function() {
        this.ciL()
    };
    cW.cok = function() {
        if (this.bX == "NEW" && !this.coh) {
            this.coh = true;
            this.cjB(this.ciT)
        }
    };
    cW.bsr = function(Eb) {
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.iD()
        }
    };
    cW.bss = function() {
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.iD()
        }
    };
    cW.cog = function() {
        if (!this.ckq)
            return;
        if (!this.gy) {
            this.gy = P("loft.m.newpublish.w").CH.bG(this.ckq, this.Nb);
            if (!(!!this.gn || this.bX == "REBLOG")) {
                if (!!this.gy) {
                    var ff = this.gy.vl() || {};
                    var bT = ff.photos;
                    if (!!bT)
                        bT = P("loft.x").gW(bT);
                    this.cqz = bT
                }
            }
        } else {
            this.gy.bz(this.Nb)
        }
    };
    cW.ciQ = function() {
        if (!this.ckq) {
            this.ckq = document.cloneElement("div", "pmanagerwrap");
            bNL.ciQ.call(this, this.ckq)
        }
    };
    cW.ciX = function() {
        if (!!this.gy) {
            this.gy.cK()
        }
        this.ckq = E.hE(this.ckq);
        bNL.ciX.call(this)
    };
    cW.cK = function() {
        bNL.cK.call(this)
    };
    cW.cof = function(bN) {
        if (!!bN) {
            var fq, hg;
            if (!!bN && !!bN.photoLinks) {
                fq = bN.photoLinks;
                hg = bN.photoCaptions
            }
            this.Nb.photoLinks = fq;
            this.Nb.photoCaptions = hg || ""
        } else {
            this.Nb.photoLinks = "";
            this.Nb.photoCaptions = ""
        }
        this.cog()
    };
    cW.beS = function(bT, tJ, I) {
        I = I || {};
        if (!!bT && bT.length > 0 && (!!I["isNeedImageStamp"] || !!I["isNeedImageDigitStamp"])) {
            var wf;
            if (!!I["isNeedImageStamp"]) {
                var cck = this.bIl[this.bR.data.blogId + ""] || this.bR.data.blogName + ".lofter.com";
                wf = (this.bR.data.blogNickName || this.bR.data.blogName || "未命名") + " / " + cck;
                if (loft.x.ty(wf) < 45) {
                    wf = encodeURIComponent(wf)
                } else {
                    wf = ""
                }
            }
            var bc;
            if (!!I["isNeedImageDigitStamp"]) {
                bc = this.bR.data.blogId
            }
            if (!!wf || !!bc) {
                I["stampString"] = wf || "";
                I["blogId"] = bc || "";
                this.gy.bmD(bT, tJ, I)
            } else {
                tJ()
            }
        }
    };
    cW.bga = function(dW) {
        var ff, bT = null;
        if (this.bX != "REBLOG" && !!this.gy) {
            ff = this.gy.vl() || {};
            bT = ff.photos
        }
        var bQ = this.coK();
        if (this.bX != "REBLOG" && (this.sW == "kuang" || this.il("框不住", bQ))) {
            if (!!this.bhw && this.bhw != "null") {
                if (this.il("框不住", bQ)) {
                    if (!this.il("框不住", this.bst)) {
                        bQ = this.sx("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                }
                this.oP(dW);
                return
            }
            if (!!bT && !!bT[0]) {
                if (bT[0].ow < 900) {
                    E.ef("日志中图片小于最小尺寸，无法生成效果预览图！（最小宽度*最小高度：900px*440px)", true, true, false, true);
                    if (this.il("框不住", bQ)) {
                        bQ = this.sx("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                    window.setTimeout(this.oP.A(this), 3e3)
                } else if (bT[0].oh < 440) {
                    E.ef("日志中图片小于最小尺寸，无法生成效果预览图！（最小宽度*最小高度：900px*440px)", true, true, false, true);
                    if (this.il("框不住", bQ)) {
                        bQ = this.sx("框不住", bQ);
                        this.bR.data.tag = bQ.join(",")
                    }
                    window.setTimeout(this.oP.A(this), 3e3)
                } else {
                    if (this.sW == "kuang" && !this.il("框不住", bQ)) {
                        this.dV.ZI("框不住");
                        bQ = this.dV.ne() || [];
                        this.bR.data.tag = bQ.join(",")
                    }
                    this.oP(dW)
                }
            } else {
                E.ef("您添加的图片不符合活动要求，无法生成效果预览图!", true, true, false, true);
                window.setTimeout(this.oP.A(this, dW), 3e3)
            }
        } else if ((!this.bhw || this.bhw == "null") && this.il("首页交给你", bQ)) {
            if (!!bT && !!bT[0]) {
                if (bT[0].ow < 1e3) {
                    E.ef("日志中图片宽度小于1000px，无法生成个人登陆页！（最小宽度*最小高度：1000px*600px)", true, true, false, true);
                    window.setTimeout(this.oP.A(this), 3e3)
                } else if (bT[0].oh < 600) {
                    E.ef("日志中图片高度小于600px，无法生成个人登陆页！（最小宽度*最小高度：1000px*600px)", true, true, false, true);
                    window.setTimeout(this.oP.A(this), 3e3)
                } else {
                    this.oP(dW)
                }
            } else {
                E.ef("您添加的图片不符合活动要求，将无法生成个人登陆页!", true, true, false, true);
                window.setTimeout(this.oP.A(this, dW), 3e3)
            }
        } else if (this.bX == "NEW" && this.il("app首页交给你", bQ)) {
            this.bR.data.isNeedImageStamp = false;
            if (!!bT && !!bT[0]) {
                if (bT[0].ow < 320) {
                    E.ef("日志中图片宽度小于320px，可能影响最终效果！（最小宽度*最小高度：320px*480px)", true, true, false, true);
                    window.setTimeout(this.oP.A(this), 3e3)
                } else if (bT[0].oh < 480) {
                    E.ef("日志中图片高度小于480px，可能影响最终效果！（最小宽度*最小高度：320px*480px)", true, true, false, true);
                    window.setTimeout(this.oP.A(this), 3e3)
                } else {
                    this.oP(dW)
                }
            } else {
                E.ef("图片未达尺寸要求，可能影响最终效果!", true, true, false, true);
                window.setTimeout(this.oP.A(this, dW), 3e3)
            }
        } else {
            this.oP(dW)
        }
    };
    cW.oP = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.cjd();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.bUD.A(this, this.bR.data);
        if ((this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && (!!this.bR.data.isNeedImageStamp || !!this.bR.data.isNeedImageDigitStamp)) {
            var tJ = this.beW.A(this);
            var I = {};
            if (!!this.bR.data.isNeedImageStamp)
                I["isNeedImageStamp"] = true;
            if (!!this.bR.data.isNeedImageDigitStamp)
                I["isNeedImageDigitStamp"] = true;
            this.beS(this.bR.data.photoItemsForImageStamp, tJ, I)
        } else {
            this.beW()
        }
    };
    cW.beW = function(gZ) {
        if (!!gZ) {
            this.bR.data.photoInfo = gZ
        }
        this.bOL(this.cku, this.bR)
    };
    cW.oI = function(dW) {
        E.ef("提交中...", true, true, false, true);
        this.cjd();
        this.bR.data.valCode = dW || "";
        this.bR.timeout = 0;
        this.bR.onload = this.ur.A(this, this.bR.data);
        if ((this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && (!!this.bR.data.isNeedImageStamp || !!this.bR.data.isNeedImageDigitStamp)) {
            var tJ = this.beJ.A(this);
            var I = {};
            if (!!this.bR.data.isNeedImageStamp)
                I["isNeedImageStamp"] = true;
            if (!!this.bR.data.isNeedImageDigitStamp)
                I["isNeedImageDigitStamp"] = true;
            this.beS(this.bR.data.photoItemsForImageStamp, tJ, I)
        } else {
            this.beJ()
        }
    };
    cW.beJ = function(gZ) {
        if (!!gZ) {
            this.bR.data.photoInfo = gZ
        }
        this.bOL(this.cku, this.bR)
    };
    cW.ku = function(bHl) {
        if (this.uu)
            this.uu = window.clearInterval(this.uu);
        E.gI(true);
        bNL.ku.call(this, bHl)
    };
    cW.nA = function(bHl) {
        if (this.coR()) {
            E.gI(true);
            return
        }
        bNL.nA.call(this, bHl)
    };
    cW.ti = function(bHl) {
        if (this.coR()) {
            E.gI(true);
            return
        }
        bNL.ti.call(this, bHl)
    };
    cW.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var beG = I.autoSubmitMethod || false;
        var hd;
        var ff, bT = null;
        if (!!this.gy) {
            ff = this.gy.vl() || {};
            bT = ff.photos
        }
        if (!!ff) {
            if (!iX) {
                if (ff.code == 1) {
                    if (!bT || bT.length < 1) {
                        E.bd("你还没有添加任何图片！", true, false, false, true);
                        return
                    }
                } else if (ff.code == -2) {
                    if (beG) {
                        E.ef("等待中，上传或旋转完成后自动发布...", true, true, false, true);
                        if (!this.uu) {
                            this.uu = window.setInterval(beG, 1e3)
                        }
                    } else {
                        E.bd("你有图片还在上传中！", true, false, false, true)
                    }
                    return
                } else if (ff.code == -1) {
                    E.bd("你还没有添加任何图片！", true, false, false, true);
                    return
                } else {
                    E.bd("你还没有添加任何图片！", true, false, false, true);
                    return
                }
            }
        }
        if (this.uu && !iX)
            this.uu = window.clearInterval(this.uu);
        hd = bNL.gU.call(this, I);
        var bF;
        if (!!hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if (!!ff) {
            if (!!iX) {
                if ((!bT || bT.length < 1) && !bF)
                    return
            }
        }
        if (!nw) {
            if (!!hd) {
                hd.photoInfo = U.ii(bT)
            }
        } else {
            var fq = [], hg = [];
            if (!!bT && bT.length > 0) {
                for (var i = 0; i < bT.length; i++) {
                    hg.push(bT[i].caption || "")
                }
            }
            if (!!hd) {
                hd.photoLinks = bT;
                hd.photoCaptions = hg
            }
        }
        var Nr;
        var bNR;
        var xy;
        var bHm = this.coJ();
        if (!!bHm) {
            Nr = bHm.isNeedImageStamp || false;
            bNR = bHm.isNeedImageDigitStamp || false;
            xy = bHm.t || ""
        }
        if (!nw && !iX && (this.bX == "NEW" || this.bX == "EDIT" && !this.gt) && !!hd && (!!Nr || !!bNR)) {
            if (!!Nr)
                hd.isNeedImageStamp = Nr;
            if (!!bNR)
                hd.isNeedImageDigitStamp = bNR;
            hd.blogNickName = xy;
            hd.photoItemsForImageStamp = bT || []
        }
        if (!!hd && !!this.bhw && !!this.bhw.from) {
            hd.from = this.bhw.from
        }
        return hd
    };
    cW.bNu = function(bN, ciH) {
        if (!ciH) {
            this.cof(bN)
        }
        bNL.bNu.call(this, bN, ciH)
    };
    cW.bKZ = function(kA) {
        bNL.bKZ.call(this, kA)
    };
    cW.ciZ = function(bHm, dR, bc) {
        bNL.ciZ.call(this, bHm, dR, bc)
    };
    cW.jN = function() {
        if (this.bX == "NEW" || !this.bhw || this.bhw == "null") {
            var bF = this.bQV({noShowError: true});
            if (!!bF) {
                return true
            }
            var ff, bT = null;
            if (!!this.gy) {
                ff = this.gy.vl() || {};
                bT = ff.photos;
                if (!!ff) {
                    if (ff.code == 1) {
                        if (!bT || bT.length < 1) {
                            return false
                        }
                    } else if (ff.code == -2) {
                        return true
                    } else {
                        return false
                    }
                }
            }
        } else {
            var ge = this.bhw.caption;
            var bF = this.bQV({noShowError: true});
            if (!(this.bX == "REBLOG" || this.gn)) {
                var ff, bT = null;
                if (!!this.gy) {
                    ff = this.gy.vl() || {};
                    bT = ff.photos;
                    if (!!bT)
                        bT = P("loft.x").gW(bT)
                }
                if (bT != this.cqz) {
                    return true
                }
            }
            if (this.cqm(ge)) {
                return false
            }
        }
        return true
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), hr, fm, bgd, cl = "ui-" + U.cA();
    var Jz = /\+/g;
    var bpn = 40;
    var oX = location.dirhost + "/rsc/swf/";
    var xr = E.ft('<embed flashvars="type=${type|escape}&loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&title=${title|escape}&namespace=loft.w.g" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="258" height="33"></embed>');
    var Og = location.cloudMusicFlashUrl || "http://s1.music.126.net/style/swf/LofterMusicPlayer.swf";
    var Oo = E.ft('<embed flashvars="loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&trackId=${trackId|escape}&trackName=${trackName|escape}&artistName=${artistName|escape}" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="257" height="34"></embed>');
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;width:100%;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .thide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;-o-text-overflow:ellipsis;word-break:keep-all;}#<uispace> .musicResult{width:100%;}#<uispace> .musicResult .w-ttl{position:relative;zoom:1;padding-bottom:10px;font-weight:normal;}#<uispace> .musicResult .w-ttl small{font-size:12px;}#<uispace> .musicResult .inputListWrap{position:relative;zoom:1;border:1px solid #C0C0C0;}#<uispace> .musicResult .srchInputWrap{font-size:16px;background:url("http://l.bst.126.net/rsc/img/shadow-in.png") 0 0 no-repeat;}#<uispace> .musicResult .searchInput{font-size:24px;height:30px;padding:7px;line-height:30px;}#<uispace> .musicResult .searchInput{width:536px;padding-left:42px;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 999px 999px;background-color:transparent;background-position:10px -520px;border:none;outline:none;}#<uispace> .musicResult .resultArea{position:absolute;left:-1px;top:44px;width:100%;border:1px solid #c0c0c0;background-color:#fff;box-shadow:0px 22px 55px -30px rgba(0,0,0,.7);-moz-box-shadow:0px 22px 55px -30px rgba(0,0,0,.7);}#<uispace> .resultArea .musiclist{font-size:16px;}#<uispace> .musicfooter{position:relative;zoom:1;height:29px;border-bottom:1px solid #fff;text-align:right;background:#ebebeb;font-size:12px;line-height:29px;}#<uispace> .musicinfo{float:right;width:440px;padding-left:10px;color:#777;}#<uispace> .musicpager{float:left;font-size:14px;}#<uispace> .prevpage,#<uispace> .nextpage{float:left;height:19px;line-height:19px;padding:5px 10px;color:#7594B3;cursor:pointer;}#<uispace> .musicpager .sep{float:left;margin:0 1px;}#<uispace> .musicpager a:hover{color:#3366cc;}#<uispace> .musicPreview{/*padding:15px;background-color:#eee;-moz-border-radius:5px 5px 5px 5px;*/}#<uispace> .rechoose{position:relative;zoom:1;z-index:2;float:right;width:16px;height:16px;outline:none;cursor:pointer;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 999px 999px;overflow:hidden;text-indent:-20000px;background-position:0 0;}#<uispace> .previewImg{float:left;max-width:150px;padding-right:20px;_width:150px;}#<uispace> .musicitm{display:block;width:560px;height:24px;line-height:24px;padding:5px 10px;cursor:pointer;background:url("http://l.bst.126.net/rsc/img/x.png") repeat-x 999px 9999px;}#<uispace> .musicitm:hover{color:#fff;/*color:#fff;text-decoration:none;background-position:0 0;*/}#<uispace> .js-itmhoverbg{color:#fff;text-decoration:none;background-position:0 0;}#<uispace> .musicitm .artist,#<uispace> .musicitm .album{color:#777;}#<uispace> .musicitm .musicsep{margin:0 15px;color:#777;}#<uispace> .js-itmhoverbg .artist,#<uispace> .js-itmhoverbg .album,#<uispace> .js-itmhoverbg .musicsep{color:#fff;}#<uispace> .embedWrap{position:relative;zoom:1;z-index:1;}#<uispace> .flashLink{position:absolute;left:0;top:0;width:32px;height:32px;}#<uispace> .musicinfo a{color:#7594B3;}#<uispace> .musicinfo a:hover{color:#3366cc;}', cl);
    p.qT = C();
    hr = p.qT.bi(P(N.ut).fc, true);
    var DQ = E.gD('<a href="#" class="itm thide"><span class="song ztag"></span><span class="musicsep">—</span><span class="artist ztag"></span><span class="musicsep">—</span><span class="album ztag"></span></a>');
    hr.bq = function() {
        this.bHq(DQ);
        this.bpm();
        var bHk = E.bj(this.Y, "ztag");
        this.bpl = bHk[0];
        this.bpk = bHk[1];
        this.cfm = bHk[2];
        V.bHn(this.Y, "click", this.xp.A(this))
    };
    hr.bHu = function(I) {
        this.gg(false);
        this.bHn("onchoose", I.onchoose)
    };
    hr.xp = function(bHl) {
        V.bb(bHl);
        this.bh("onchoose", this.bHp)
    };
    hr.bpj = function() {
        this.bh("onchoose", this.bHp)
    };
    hr.bpm = function() {
        V.bHn(this.Y, "mouseover", this.KM.A(this))
    };
    hr.KM = function() {
        var bHk = E.dE(this.Y.parentNode) || [];
        for (var i = 0; i < bHk.length; i++) {
            this.gg(false, bHk[i])
        }
        this.gg(true)
    };
    var Hh = function(hU, X, cj) {
        X = E.be(X);
        if (!X)
            return;
        hU = !!hU;
        hU ? E.ba(X, cj) : E.bf(X, cj)
    };
    hr.gg = function(hU, X, cj) {
        X = X || this.Y;
        cj = cj || "crt";
        Hh(hU, X, cj)
    };
    hr.bpi = function(X, cj) {
        X = X || this.Y;
        cj = cj || "crt";
        return E.cr(X, cj)
    };
    hr.ce = function(bHm) {
        p.qT.bw.ce.call(this, bHm);
        try {
            this.bpl.innerHTML = decodeURIComponent((this.bHp.song_name || "").replace(Jz, "%20"));
            this.bpk.innerHTML = decodeURIComponent((this.bHp.artist_name || "").replace(Jz, "%20"));
            this.cfm.innerHTML = decodeURIComponent((this.bHp.album_name || "").replace(Jz, "%20"))
        } catch (e) {
            this.bpl.innerHTML = this.bHp.song_name || "";
            this.bpk.innerHTML = this.bHp.artist_name || "";
            this.cfm.innerHTML = this.bHp.album_name || ""
        }
    };
    p.KK = C();
    fm = p.KK.bi(P(N.ui).ga, true);
    bgd = p.KK.bw;
    fm.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I);
        V.bHn(this.dd, "input", this.kF.A(this));
        V.bHn(this.dd, "propertychange", this.kF.A(this));
        if (B.da) {
            var cqH = parseInt(B.Ud);
            if (!!cqH && cqH >= 9) {
                V.bHn(this.dd, "keyup", this.kF.A(this))
            }
        }
        V.bHn(this.nG, "click", this.kY.A(this));
        V.bHn(this.JH, "click", this.EL.A(this));
        V.bHn(this.JI, "click", this.bpe.A(this));
        V.bHn(this.dd, "paste", this.bYB.A(this));
        V.bHn(this.dd, "keydown", this.bYC.A(this), true);
        V.bHn(this.dd, "blur", this.bYD.A(this));
        this.dB();
        this.eL = {charset: "utf-8"};
        V.bHn(document, "keydown", this.mW.A(this));
        V.bHn(document, "click", this.bYE.A(this));
        this.KJ = {};
        this.bJG = {};
        this.bIt = {};
        this.bHD = [];
        this.bfG = 100
    };
    fm.bYB = function(bHl) {
        window.setTimeout(function() {
            this.csc(this.dd.value)
        }.A(this), 100)
    };
    fm.bYC = function(bHl) {
        var bJS = bHl && (bHl.which || bHl.keyCode) || 0;
        if (bJS == 13) {
            this.csc(this.dd.value)
        }
    };
    fm.bYD = function(bHl) {
        this.csc(this.dd.value)
    };
    fm.csG = function(bp) {
        bp = U.bA(bp);
        var crM;
        if (!!bp && bp.indexOf("http://music.163.com/#/m/song?") == 0) {
            crM = loft.x.wc(bp, "id", "?")
        }
        return crM
    };
    fm.csc = function(bp) {
        var crM = this.csG(bp);
        if (!crM)
            return;
        var Ei = "http://s.music.163.com/api/song/get?id=" + crM + "&callback=loft.w.g.cbGetCloudMusicData";
        this.eL.onerror = this.cso.A(this);
        J.Iv(Ei, this.eL)
    };
    fm.cso = function(bHm) {
        if (!!bHm && bHm.code == 200 && !!bHm.result && !!bHm.result.song) {
            var CG = [bHm.result.song];
            var bhb = this.csn(CG);
            if (!!bhb && !!bhb[0]) {
                this.dd.value = "";
                this.xp(bhb[0])
            }
        }
    };
    fm.bHg = function(bO, SO) {
        if (!!this.bIt[bO]) {
            this.bNt(bO)
        }
        SO = SO || Math.floor(this.bfG / 2);
        var bfB = [], sF = this.bHD.length;
        if (sF >= this.bfG) {
            for (var i = 0; i < sF; i++) {
                if (i + SO < sF) {
                    this.bIt[this.bHD[i]] = "";
                    this.bJG[this.bHD[i]] = ""
                } else {
                    bfB.push(this.bHD[i])
                }
            }
            this.bHD = bfB
        }
        if (!this.bIt[bO]) {
            this.bIt[bO] = bO;
            this.bHD.push(bO)
        }
    };
    fm.bNt = function(bO) {
        var sF = this.bHD.length;
        for (var i = 0; i < sF; i++) {
            if (this.bHD[i] === bO) {
                this.bHD.splice(i, 1);
                break
            }
        }
        this.bHD.push(bO)
    };
    fm.bYE = function() {
        var bRg = U.bA(this.dd.value);
        if (!bRg) {
            this.bYJ()
        }
    };
    fm.bpd = function() {
        if (!this.bpb()) {
            this.dd.focus()
        }
    };
    fm.mW = function(bHl) {
        var bK = bHl.keyCode;
        if (bK == 38 || bK == 40) {
            V.bb(bHl);
            if (this.KH.style.display == "none")
                return;
            this.pz(bK - 39)
        }
        if (bK == 13) {
            V.bb(bHl);
            this.bC = this.bgE();
            if (this.bC >= 0) {
                var bo = this.kZ[this.bC];
                if (!!bo)
                    bo.bpj()
            }
        }
    };
    fm.pz = function(fW) {
        if (!this.kZ || this.kZ.length <= 0)
            return;
        this.bC = this.bgE();
        if (this.bC >= 0) {
            var bo = this.kZ[this.bC];
            if (!!bo)
                bo.gg(false);
            this.bC = (this.bC + fW) % this.kZ.length;
            if (this.bC < 0)
                this.bC = this.kZ.length - 1
        } else {
            if (fW > 0) {
                this.bC = 0
            } else {
                this.bC = this.kZ.length - 1
            }
        }
        var bo = this.kZ[this.bC];
        if (!!bo)
            bo.gg(true)
    };
    fm.bgE = function() {
        if (!this.kZ)
            return -1;
        for (var i = 0; i < this.kZ.length; i++) {
            if (this.kZ[i].bpi()) {
                return i
            }
        }
        return -1
    };
    fm.EL = function(bHl) {
        V.bb(bHl);
        if (this.tB <= 1) {
            E.ba(this.JH, "disb")
        } else {
            this.KG(this.bRd, this.tB - 1)
        }
    };
    fm.bpe = function(bHl) {
        V.bb(bHl);
        if (this.tB >= this.KA) {
            E.ba(this.JI, "disb")
        } else {
            this.KG(this.bRd, this.tB + 1)
        }
    };
    fm.dB = function() {
        var bJ = P("loft.w.g");
        bJ.cbFuncSearchMusic = this.bYH.A(this);
        bJ.cbGetCloudMusicData = this.cso.A(this)
    };
    fm.bz = function(I) {
        I = I || O;
        bgd.bz.call(this);
        this.Ec = I.isNotInlandIp || false;
        this.wP = I.mode || "";
        this.bHp = I.data || null;
        if (!this.wP && !!this.bHp) {
            this.wP = "preview"
        }
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        } else {
            this.nG.style.display = ""
        }
        if (!!this.bHp) {
            this.xp(this.bHp)
        }
        this.Kz = I.limit || 8;
        this.bHn("onchoose", I.onchoose || F);
        this.bHn("onrechoose", I.onrechoose || F)
    };
    fm.bYI = function() {
        E.ba(this.JX, "js-showResultArea");
        var eT = this.boQ.clientHeight || 0;
        eT += 48;
        this.JX.style.height = eT + "px"
    };
    fm.bYJ = function() {
        this.JX.style.height = 0;
        E.bf(this.JX, "js-showResultArea")
    };
    fm.kF = function(bHl) {
        var bx = U.bA(this.dd.value);
        if (!bx) {
            if (!!this.cv)
                this.cv = window.clearTimeout(this.cv);
            this.bYJ();
            !!this.ckK && (this.ckK.style.display = "");
            return
        }
        !!this.ckK && (this.ckK.style.display = "none");
        if (!!this.cv)
            this.cv = window.clearTimeout(this.cv);
        this.cv = window.setTimeout(this.KG.A(this, bx, 1), 500)
    };
    fm.KG = function(bx, ja) {
        if (!bx || !ja || ja < 0) {
            return
        }
        bx = encodeURIComponent(bx);
        if (!!this.Ec) {
            this.boY(bx, ja)
        } else {
            this.Op(bx, ja)
        }
    };
    fm.boU = function(bx, ja) {
        var bO = ja + "_" + bx;
        if (!this.bJG[bO]) {
            this.bJG[bO] = "loading";
            var Ei = "http://kuang.xiami.com/app/nineteen/search/key/" + bx + "/logo/1/page/" + ja + "?callback=loft.w.g.cbFuncSearchMusic(" + ja + ")";
            this.eL.onerror = this.US.A(this, bx, ja);
            J.Iv(Ei, this.eL)
        } else if (this.bJG[bO] == "loading") {
            return
        } else {
            this.Ky(bx, ja, this.bJG[bO])
        }
    };
    fm.Op = function(bx, ja) {
        var bO = ja + "_" + bx;
        if (!this.bJG[bO]) {
            this.bJG[bO] = "loading";
            var ci = (ja - 1) * this.Kz;
            var Os = encodeURIComponent(bx);
            var Ei = "http://s.music.163.com/search/get/?src=lofter&type=1&s=" + bx + "&limit=" + this.Kz + "&offset=" + ci + "&callback=loft.w.g.cbFuncSearchMusic(" + ja + ',"' + Os + '")';
            this.eL.onerror = this.Ky.A(this, bx, ja);
            J.Iv(Ei, this.eL)
        } else if (this.bJG[bO] == "loading") {
            return
        } else {
            this.Ky(bx, ja, this.bJG[bO])
        }
    };
    fm.Xb = function(bx, ja, Ct) {
        Ct = Ct || {};
        if (Ct.code != 200 || !Ct.result) {
            Ct.result = {}
        }
        var eB = Ct.result.songCount || 0;
        var CG = Ct.result.songs || [];
        var bhb = this.csn(CG) || [];
        var bIc = {};
        bIc.key = bx;
        bIc.total = eB;
        bIc.results = bhb;
        this.Ky(bx, ja, bIc)
    };
    fm.csn = function(CG) {
        CG = CG || [];
        var bhb = [];
        for (var i = 0; i < this.Kz && i < CG.length && !!CG[i]; i++) {
            var bo = {type: "cloudmusic",song_id: CG[i].id,song_name: encodeURIComponent(CG[i].name)};
            var BF = CG[i].artists;
            var Hd = "";
            var GP = "";
            for (var k = 0; k < BF.length && !!BF[k] && !!BF[k].id; k++) {
                if (!Hd) {
                    Hd = BF[k].id
                } else {
                    Hd += "、" + BF[k].id
                }
                if (!!BF[k].name) {
                    if (!GP) {
                        GP = BF[k].name
                    } else {
                        GP += "、" + BF[k].name
                    }
                }
            }
            bo.artist_id = Hd;
            bo.artist_name = encodeURIComponent(GP);
            var IP = CG[i].album || O;
            bo.album_id = IP.id || "";
            bo.album_name = encodeURIComponent(IP.name || "");
            bo.album_logo = IP.picUrl || "";
            bo.listenUrl = CG[i].audio || "";
            bhb.push(bo)
        }
        return bhb
    };
    fm.US = function() {
        J.br(location.dwr, "OtherBean", "xiamiDisabledAlert", false, F)
    };
    fm.boY = function(bx, ja) {
        if (!!this.KJ[bx]) {
            this.Ku(bx, ja, this.KJ[bx])
        } else {
            var Ei = "http://mp3.163.com/s/musicSearch.s?n=" + bx + "&offset=0&limit=" + bpn + "&utf8=1";
            this.eL.onload = this.Ku.A(this, bx, ja);
            this.eL.onerror = this.Ku.A(this, bx, ja);
            J.Iv(Ei, this.eL)
        }
    };
    fm.Ku = function(bx, ja, uv) {
        var ci = (ja - 1) * this.Kz;
        if (!uv) {
            this.KJ[bx] = window["__o"];
            uv = window["__o"];
            window["__o"] = null
        }
        if (!!uv) {
            var eB = uv.length || 0;
            var bhb = [];
            for (var i = 0; i < this.Kz && ci + i < uv.length; i++) {
                var bo = {song_name: uv[ci + i].name,artist_name: uv[ci + i].author};
                bhb.push(bo)
            }
            var bIc = {};
            bIc.key = bx;
            bIc.total = eB;
            bIc.results = bhb;
            this.Ky(bx, ja, bIc)
        }
    };
    fm.bYH = function(ja, bx) {
        return this.bpa.A(this, ja, bx)
    };
    fm.bpa = function(ja, bx, bHm) {
        if (!bx && !!bHm.key) {
            bx = encodeURIComponent(bHm.key)
        }
        if (!!bHm && !!bx) {
            this.Xb(bx, ja, bHm)
        }
    };
    fm.Ky = function(bx, ja, bIc) {
        var bO = ja + "_" + bx;
        var bRg = encodeURIComponent(U.bA(this.dd.value));
        if (!bIc) {
            this.bJG[bO] = "";
            return
        } else if (!this.bJG[bO] || this.bJG[bO] == "loading") {
            this.bJG[bO] = bIc
        }
        if (!!bIc && bx == bRg) {
            bIc.total = bIc.total || 0;
            this.lx.innerText = bIc.total;
            this.bRd = decodeURIComponent(bx || "");
            this.tB = ja || 0;
            this.KA = Math.floor((bIc.total - 1) / this.Kz) + 1;
            if (this.tB <= 1) {
                E.ba(this.JH, "disb")
            } else {
                E.bf(this.JH, "disb")
            }
            if (this.tB >= this.KA) {
                E.ba(this.JI, "disb")
            } else {
                E.bf(this.JI, "disb")
            }
            if (!!this.kZ)
                this.kZ = p.qT.db(this.kZ);
            if (bIc.total > 0 && !!bIc.results && bIc.results.length > 0) {
                this.kZ = p.qT.bG(bIc.results, this.boQ, {onchoose: this.xp.A(this)})
            }
            this.bYI(this.kZ)
        }
        this.bHg(bO)
    };
    fm.xp = function(bHm) {
        bHm = bHm || {};
        this.bYJ();
        this.KH.style.display = "none";
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.A(this), 10);
        if (bHm.type === "music163") {
            this.uW.style.display = "none";
            this.boO(bHm)
        } else if (bHm.type == "cloudmusic") {
            this.XC(bHm)
        } else {
            this.uW.style.display = "";
            this.uW.src = bHm.album_logo || location.dirhost + "/rsc/img/video-thumb.png";
            this.bhi = '<embed height="33" width="257" wmode="transparent" type="application/x-shockwave-flash" src="http://www.xiami.com/widget/0_' + bHm.song_id + '/singlePlayer.swf">';
            this.Ks.innerHTML = this.bhi;
            bHm.song_name = (bHm.song_name || "").replace(Jz, "%20");
            bHm.artist_name = (bHm.artist_name || "").replace(Jz, "%20");
            this.lG = bHm;
            this.bh("onchoose", bHm)
        }
    };
    fm.XC = function(bHm) {
        this.uW.style.display = "";
        if (!!bHm.album_logo) {
            this.uW.src = bHm.album_logo + "?param=150x150x1"
        } else {
            this.uW.src = location.dirhost + "/rsc/img/video-thumb.png"
        }
        var dc = E.dG(Oo, {loop: 0,auto: "false",trackId: bHm.song_id || "",trackName: bHm.song_name || "",artistName: bHm.artist_name || "",listenUrl: bHm.listenUrl || "",playerSrc: Og});
        this.Ks.innerHTML = dc;
        bHm.song_name = (bHm.song_name || "").replace(Jz, "%20");
        bHm.artist_name = (bHm.artist_name || "").replace(Jz, "%20");
        this.lG = bHm;
        this.bh("onchoose", bHm)
    };
    fm.boO = function(bHm) {
        var Ei = "http://mp3.163.com/s/urlSearch.s?n=" + bHm.song_name + "&a=" + bHm.artist_name + "&legal=true&utf8=1";
        this.eL.onload = this.Uh.A(this, bHm);
        this.eL.onerror = this.Uh.A(this, bHm);
        J.Iv(Ei, this.eL)
    };
    fm.Uh = function(bHm) {
        if (!!window["__o"] && !!window["__o"][0]) {
            bHm.listenUrl = window["__o"][0];
            var Pk = oX + "blog_music_player.swf";
            bHm.type = "music163";
            var dc = E.dG(xr, {type: bHm.type,loop: 0,auto: "false",title: bHm.song_name || "",listenUrl: bHm.listenUrl || "",playerSrc: Pk});
            dc += '<a class="flashLink" href="' + loft.x.bM() + '">&nbsp;</a>';
            this.Ks.innerHTML = dc;
            window["__o"] = null;
            this.lG = bHm;
            this.bh("onchoose", bHm)
        } else {
            this.Ks.innerHTML = "";
            E.bd("音乐不存在！", true);
            window.setTimeout(this.kY.A(this), 500)
        }
    };
    fm.kY = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        E.bf(this.kw, "js-showMusicPreview");
        window.setTimeout(function() {
            this.uA()
        }.A(this), 200)
    };
    fm.uA = function() {
        this.dd.value = "";
        this.ckK.style.display = "block";
        this.kw.style.display = "none";
        this.KH.style.display = "block";
        this.bYJ();
        this.lG = null;
        this.bh("onrechoose")
    };
    fm.bpb = function() {
        if (this.kw.style.display == "block") {
            return true
        } else {
            return false
        }
    };
    fm.Ko = function() {
        return this.lG || null
    };
    fm.bGF = function() {
        return this.bhi || ""
    };
    fm.cU = function() {
        return cl + " xiamimusic"
    };
    fm.cM = function() {
        return '<div class="w-schdpw blk ztag"><div class="vsearch"><div class="vsearchwrap"><span class="icn">&nbsp;</span><input type="text" class="ztag"><label class="ztag">请用歌名、专辑、艺术家搜索</label></div></div><div class="list ztag"><div class="ztag" style="width:498px;"></div><div class="page f-cb"><a class="lnk disb ztag" href="#">上一页</a><a class="lnk ztag" href="#">下一页</a><span class="info">共有<span class="ztag">0</span>首相关歌曲（来自<a target="_blank" href="http://music.163.com">网易云音乐</a>）</span></div></div></div><div style="display:none;" class="m-rst blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg"><img class="ztag"/></div><div class="music ztag"><embed width="257" height="33" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" quality="high" wmode="transparent" menu="false" src="http://img.xiami.com/widget/2093281_1770321115_/singlePlayer.swf" /></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div>'
    };
    fm.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        this.KH = bHk[0];
        this.dd = bHk[1];
        this.ckK = bHk[2];
        this.JX = bHk[3];
        this.boQ = bHk[4];
        this.JH = bHk[5];
        this.JI = bHk[6];
        this.lx = bHk[7];
        this.kw = bHk[8];
        this.uW = bHk[9];
        this.Ks = bHk[10];
        this.nG = bHk[11]
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), gj, Um, cl = "ui-" + U.cA();
    var oX = location.dirhost + "/rsc/swf/";
    var xr = E.ft('<embed flashvars="type=${type|escape}&loop=${loop|escape}&autoPlay=${auto|escape}&url=${listenUrl|escape}&title=${title|escape}&namespace=loft.w.g" src="${playerSrc|escape}" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" wmode="transparent" quality="high" allowscriptaccess="always" allownetworking="all" width="258" height="33"></embed>');
    P(N.ui).fx('#<uispace>{position:relative;zoom:1;width:100%;}#<uispace> .pleft{float:left;}#<uispace> .pright{float:right;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:\'.\';display:block;visibility:hidden;height:0;}#<uispace> .addDiyMusic{position:relative;zoom:1;z-index:1;width:100%;height:30px;}#<uispace> .addDiyMusic .flashwrap{position:absolute;left:0;top:0;}#<uispace> .addDiyMusic .addMusicBtn{width:88px;height:30px;line-height:30px;text-decoration:none;background:url("http://l.bst.126.net/rsc/img/btn.png") no-repeat 0 -280px;}#<uispace> .addDiyMusic .js-hover-addMusicBtn{background-position:-98px -280px;}#<uispace> .addDiyMusic .addMusicBtn span{display:block;padding-left:28px;color:#fff;text-align:left;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 10px -339px;}#<uispace> .addDiyMusic .prompt{height:30px;line-height:30px;margin-left:10px;color:#777;}#<uispace> .js-hideflash{height:0;overflow:hidden;visibility:hidden;border:none;margin:0;}#<uispace> .js-hideflash .flashwrap{}#<uispace> .js-hideflash .addMusicBtn{display:none;}#<uispace> .js-hideflash .prompt{display:none;}#<uispace> .musicPreview{position:relative;zoom:1;left:0;top:1;z-index:10;min-height:33px;_height:33px;/*line-height:22px;padding:10px;background-color:#ebebeb;*/}#<uispace> .musicPreview .uploadingWrap{padding:12px 0 15px 0;}#<uispace> .musicPreview .uploading{height:15px;padding:1px 0 0 21px;white-space:normal;line-height:15px;color:#aaa;background:url("http://l.bst.126.net/rsc/img/loading.gif") no-repeat 0 -44px;}#<uispace> .rechoose{position:absolute;right:0;top:0;width:16px;height:16px;outline:none;cursor:pointer; overflow:hidden;text-indent:-20000px;background:url("http://l.bst.126.net/rsc/img/icon2-8.png") no-repeat 0 0;}#<uispace> .coverWrap{margin-right:-184px;}#<uispace> .coverImg{float:left;width:164px;height:164px;}#<uispace> .musicembed{margin-left:184px;}#<uispace> .musicPreview a{color:#5A8DCD;}#<uispace> .musicPreview a:hover{color:#7594b3;text-decoration:none;}#<uispace> .previewWithoutCover .uploadCover{margin:15px 0 0 15px;}#<uispace> .previewWithCover .embedWrap2{margin-bottom:10px;}#<uispace> .previewWithCover .reUploadCover{height:24px;overflow:hidden;}#<uispace> .previewWithCover .deleteCover{height:22px;line-height:22px;}#<uispace> .embedWrap1,#<uispace> .embedWrap2{position:relative;zoom:1;}#<uispace> .embedWrap1 .flashLink,#<uispace> .embedWrap2 .flashLink{position:absolute;left:0;top:0;width:32px;height:32px;}', cl);
    p.Kp = C();
    gj = p.Kp.bi(P(N.ui).ga, true);
    Um = p.Kp.bw;
    gj.bq = function(bl, I) {
        I = I || {};
        this.Kq = I.v || "";
        this.bHq(bl, I);
        this.dB();
        V.bHn(this.coe, "click", this.kY.A(this));
        V.bHn(this.cnk, "click", this.kY.A(this));
        V.bHn(this.nG, "click", this.kY.A(this));
        V.bHn(this.Kr, "click", this.boH.A(this))
    };
    gj.boH = function(bHl) {
        V.bb(bHl);
        this.lG.small_cover = "";
        this.lG.middle_cover = "";
        this.Kj(this.lG)
    };
    gj.dB = function() {
        var bJ = P("loft.w.g");
        bJ.getUploadUrl = this.zK.A(this);
        bJ.uploadStart = this.zg.A(this);
        bJ.uploadComplete = this.zf.A(this);
        bJ.showProgress = this.Kg.A(this);
        bJ.redirect = this.boF.A(this);
        bJ.cbUploadCover = this.boD.A(this);
        bJ.mouseOver = this.Kv.A(this);
        bJ.mouseOut = this.Kw.A(this)
    };
    gj.Kv = function(Kx) {
        E.ba(this.Uz, "js-hover-addMusicBtn")
    };
    gj.Kw = function(Kx) {
        E.bf(this.Uz, "js-hover-addMusicBtn")
    };
    gj.boD = function(bH) {
        if (!!this.Ej) {
            this.Ej.src = "about:blank";
            this.UB()
        }
        if (!!this.Ee) {
            this.Ee.src = "about:blank";
            this.UD()
        }
        bH = bH || {};
        if (bH.resultcode == 999) {
            var gz = {photoGarbageIds: bH.photoGarbageIds};
            this.Up.push(gz);
            if (!!this.lG) {
                this.lG.small_cover = bH.userDef1Url || "";
                this.lG.middle_cover = bH.userDef2Url || "";
                this.Kj(this.lG)
            }
        } else {
            alert("图片格式不正确")
        }
    };
    gj.boF = function() {
        window.open(loft.x.bM())
    };
    gj.zK = function() {
        var boC = "http://www.lofter.com/loft/musicupload/copyright?v=" + this.Kq;
        return boC
    };
    gj.zg = function(bt, boB) {
        E.ba(this.KC, "js-hideflash");
        this.KD.style.display = "none";
        this.KE.style.display = "none";
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.A(this), 10);
        this.UJ.style.display = "block";
        this.UK.innerHTML = "正在上传音频文件...0%";
        this.cnm.style.width = "0";
        this.clC = true;
        this.bh("onuploading")
    };
    gj.zf = function(bt, fk, xf) {
        if (!!fk)
            fk = U.fp(fk);
        if (!this.clC)
            return;
        this.clC = false;
        if (!!fk && fk.code == 0 && (fk.type == "diy" || fk.type == "copyright") && !!fk.listenUrl) {
            window.setTimeout(function() {
                E.bf(this.kw, "js-showMusicPreview");
                window.setTimeout(function() {
                    this.Kj(fk)
                }.A(this), 200)
            }.A(this), 500)
        } else if (!!fk && fk.code == 1) {
            E.bd(xf || "音乐文件大小超过100M！", true);
            this.kY()
        } else if (!!fk && fk.code == 4) {
            E.bd(xf || "文件大小异常！", true);
            this.kY()
        } else if (!!fk && fk.code == 6) {
            E.bd(xf || "文件格式错误！", true);
            this.kY()
        } else if (!!fk && fk.code == 7) {
            this.ep.innerHTML = '(上传容量已满 <a style="text-decoration:underline;" target="_blank" href="http://www.lofter.com/help#feedback&from=diymusic">申请容量</a>)';
            this.kY();
            window.setTimeout(function() {
                this.bor.style.visibility = "hidden"
            }.A(this), 1e3);
            this.cuW.style.zIndex = 10
        } else if (!!fk && fk.code == 8) {
            E.bd(xf || "非原创音乐！", true);
            this.kY()
        } else if (!!fk && fk.code == 2) {
            E.bd(xf || "服务器出现错误！", true);
            this.kY()
        } else {
            E.bd(xf || "上传失败，请重新添加音乐！", true);
            this.kY()
        }
    };
    gj.Kj = function(fk) {
        this.lG = fk;
        this.UJ.style.display = "none";
        E.ba(this.KC, "js-hideflash");
        this.kw.style.display = "block";
        window.setTimeout(function() {
            E.ba(this.kw, "js-showMusicPreview")
        }.A(this), 10);
        var Pk = oX + "blog_music_player.swf";
        var dc = E.dG(xr, {type: fk.type,loop: 0,auto: "false",title: fk.song_name || "",listenUrl: fk.listenUrl || "",playerSrc: Pk});
        dc += '<a class="flashLink" href="' + loft.x.bM() + '">&nbsp;</a>';
        if (fk.type != "music163" && (!!fk.small_cover || !!fk.middle_cover)) {
            this.KD.style.display = "none";
            this.KE.style.display = "block";
            this.boA.src = fk.small_cover || fk.middle_cover;
            this.boz.innerHTML = dc;
            if (this.bX != "REBLOG" && !this.gn) {
                this.Kr.style.display = "";
                this.UD()
            } else {
                this.Kr.style.display = "none";
                this.KL.style.display = "none";
                this.cod.style.display = "none"
            }
        } else {
            this.KE.style.display = "none";
            this.KD.style.display = "block";
            this.boy.innerHTML = dc;
            if (fk.type != "music163" && this.bX != "REBLOG" && !this.gn) {
                this.UB()
            } else {
            }
        }
        if (this.bX == "REBLOG" || !!this.gn) {
            this.nG.style.display = this.cnk.style.display = "none"
        }
        this.bh("onuploadmusic", fk)
    };
    gj.UB = function() {
        if (!this.Ej) {
            this.KN.innerHTML = '<iframe scrolling="no" height="24" frameborder="0" width="58" allowtransparency="true" border="0"></iframe>';
            this.Ej = this.KN.getElementsByTagName("iframe")[0];
            this.Ej.src = loft.x.bM() + "/html/uploadcover.html?type=upload&source=newpublish"
        } else {
            this.Ej.src = loft.x.bM() + "/html/uploadcover.html?type=upload&source=newpublish"
        }
    };
    gj.UD = function() {
        if (!this.Ee) {
            this.KL.innerHTML = '<iframe scrolling="no" height="24" frameborder="0" width="88" allowtransparency="true" border="0"></iframe>';
            this.Ee = this.KL.getElementsByTagName("iframe")[0];
            this.Ee.src = loft.x.bM() + "/html/uploadcover.html?type=reupload&source=newpublish"
        } else {
            this.Ee.src = loft.x.bM() + "/html/uploadcover.html?type=reupload&source=newpublish"
        }
    };
    gj.Kg = function(bt, gC) {
        gC = gC || 0;
        this.UK.innerHTML = "正在上传音频文件..." + gC + "%";
        this.cnm.style.width = gC + "%"
    };
    gj.bz = function(I) {
        I = I || O;
        Um.bz.call(this);
        this.wP = I.mode || "";
        this.bHp = I.data || null;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.Up = I.coverItems || [];
        if (!this.wP && !!this.bHp) {
            this.wP = "preview"
        }
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        } else {
            this.nG.style.display = ""
        }
        if (!!this.bHp) {
            this.Kj(this.bHp)
        }
        this.bHn("onuploading", I.onuploading || F);
        this.bHn("onrechoose", I.onrechoose || F);
        this.bHn("onuploadmusic", I.onuploadmusic || F)
    };
    gj.kY = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        this.clC = false;
        E.bf(this.kw, "js-showMusicPreview");
        window.setTimeout(function() {
            this.uA()
        }.A(this), 200)
    };
    gj.uA = function() {
        this.lG = null;
        this.kw.style.display = "none";
        E.bf(this.KC, "js-hideflash");
        this.bh("onrechoose")
    };
    gj.cU = function() {
        return cl + " diymusic"
    };
    gj.cM = function() {
        var bov = '<object height="49" width="498" type="application/x-shockwave-flash" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="flash_music_upload"><param name="movie" value="' + oX + 'flash_music_upload.swf?20120725"><param name="quality" value="Low"><param name="allowscriptaccess" value="always"><param name="wmode" value="transparent"><param name="flashvars" value="width=226&height=30&cbNameSpace=loft.w.g"><embed height="49" width="498" flashvars="width=226&height=30&cbNameSpace=loft.w.g" allowscriptaccess="always" wmode="transparent" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="Low" src="' + oX + 'flash_music_upload.swf?20120725" id="flash_music_upload"></object>';
        return '<div style="position:relative" class="m-upload blk ztag"><div class="ztag" style="position:absolute;top:0px;left:140px;z-index:-1;"><a class="btn ztag" href="#">上传原创音乐</a><span class="hint ztag">(仅支持mp3格式)</span></div><div class="flashwrap ztag">' + bov + '</div></div><div class="musicPreview ztag" style="display:none;"><div class="m-uploading blk ztag"><span class="hint ztag">上传中...</span><a class="w-close2 ztag" title="关闭">关闭</a><span class="probar ztag">&nbsp;</span></div><div class="m-rst blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg ztag"></div><div class="music ztag"></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div><div class="m-rst m-rst-oprt blk ztag"><div class="rst"><div class="rstwrap f-cb"><div class="w-mimg"><img class="ztag"/><span class="layer ztag">&nbsp;</span><div class="lnks"><a href="#" class="ztag">删除封面</a><a href="#" class="ztag">修改封面</a></div></div><div class="music ztag"></div><a class="w-close2 ztag" title="关闭">关闭</a></div></div></div></div>'
    };
    gj.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.KC = bHk[Q++];
        this.cuW = bHk[Q++];
        this.Uz = bHk[Q++];
        this.ep = bHk[Q++];
        this.bor = bHk[Q++];
        this.kw = bHk[Q++];
        this.UJ = bHk[Q++];
        this.UK = bHk[Q++];
        this.coe = bHk[Q++];
        this.cnm = bHk[Q++];
        this.KD = bHk[Q++];
        this.KN = bHk[Q++];
        this.boy = bHk[Q++];
        this.cnk = bHk[Q++];
        this.KE = bHk[Q++];
        this.boA = bHk[Q++];
        this.cod = bHk[Q++];
        this.Kr = bHk[Q++];
        this.KL = bHk[Q++];
        this.boz = bHk[Q++];
        this.nG = bHk[Q++]
    };
    gj.Ko = function() {
        return this.lG || null
    };
    gj.Jw = function() {
        if (this.KE.style.display != "none") {
            return this.Up || null
        } else {
            return null
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), iM, UY, cl = "ui-" + U.cA();
    P(N.ui).fx("#<uispace>{position:relative;zoom:1;z-index:22;width:100%;color:#444;font-size:12px;font-family:\"Hiragino Sans GB\",arial,Microsoft YaHei,微软雅黑,simsun,宋体;}#<uispace> .clearfix{zoom:1;}#<uispace> .clearfix:after{clear:both;content:'.';display:block;visibility:hidden;height:0;}", cl);
    p.Jt = C();
    iM = p.Jt.bi(P(N.ui).ga, true);
    UY = p.Jt.bw;
    iM.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I)
    };
    iM.bop = function(I) {
        I = I || {};
        this.KT = {isNotInlandIp: this.Ec,mode: I.mode,onchoose: this.boh.A(this),onrechoose: this.bog.A(this)};
        this.DE = {mode: I.mode,v: this.Kq,onuploading: this.bof.A(this),onrechoose: this.boe.A(this),onuploadmusic: this.bod.A(this)};
        if (!!this.bHp) {
            if (this.bHp.type == "diy" || this.bHp.type == "copyright" || this.bHp.type == "music163") {
                if (!!I.coverItems) {
                    this.DE.coverItems = I.coverItems
                }
            }
        }
        this.boa();
        this.bob();
        if (!!this.xA && !this.bHp) {
            this.xA.bpd()
        }
    };
    iM.bob = function() {
        if (this.cjh.style.display == "none")
            return;
        this.DE.data = this.bHp;
        this.DE.actionType = this.bX;
        this.DE.isCitePost = this.gn;
        if (!this.xD) {
            this.xD = p.Kp.bG(this.cjh, this.DE)
        } else {
            this.xD.bHu(this.cjh, this.DE)
        }
    };
    iM.boa = function() {
        if (this.wK.style.display == "none")
            return;
        this.KT.data = this.bHp;
        if (!this.xA) {
            this.xA = p.KK.bG(this.wK, this.KT)
        } else {
            this.xA.bHu(this.wK, this.KT)
        }
    };
    iM.bof = function() {
        this.wK.style.display = "none"
    };
    iM.boe = function() {
        this.wK.style.display = "block";
        this.bHp = null;
        this.bh("onclearmusic")
    };
    iM.bod = function() {
        this.bh("onchoosemusic")
    };
    iM.boh = function() {
        this.cjh.style.display = "none";
        this.bh("onchoosemusic")
    };
    iM.bog = function() {
        if (this.Lh)
            this.cjh.style.display = "block";
        this.bHp = null;
        this.bh("onclearmusic")
    };
    iM.bz = function(I) {
        I = I || O;
        UY.bz.call(this);
        this.Ec = I.isNotInlandIp || false;
        this.Kq = I.v || "";
        this.bHp = I.data || null;
        this.bX = I.actionType || "";
        this.gn = I.isCitePost || false;
        this.Lh = I.allowUploadDIYMusic || false;
        this.cjh.style.display = this.Lh ? "block" : "none";
        if (!!this.bHp) {
            if (this.bHp.type == "diy" || this.bHp.type == "copyright" || this.bHp.type == "music163") {
                this.cjh.style.display = "block";
                this.wK.style.display = "none"
            } else {
                this.cjh.style.display = "none";
                this.wK.style.display = "block"
            }
        }
        this.bHn("onchoosemusic", I.onchoosemusic || F);
        this.bHn("onclearmusic", I.onclearmusic || F);
        this.bop(I)
    };
    iM.cU = function() {
        return cl + " musicmanager"
    };
    iM.cM = function() {
        return '<div class="m-audioarea f-cb ztag"><div class="searchArea ztag"></div><div class="uploadArea ztag"></div></div>'
    };
    iM.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.Vn = bHk[Q++];
        this.wK = bHk[Q++];
        this.cjh = bHk[Q++]
    };
    iM.Iz = function() {
        var bHm = null;
        if (!!this.xA) {
            bHm = this.xA.Ko()
        }
        if (!bHm && !!this.xD) {
            bHm = this.xD.Ko()
        }
        return bHm
    };
    iM.Jw = function() {
        if (!!this.cjh && this.cjh.style.display == "block") {
            if (!!this.xD) {
                return this.xD.Jw()
            }
        } else {
            return null
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish"), dD, bMW;
    p.bci = C();
    dD = p.bci.bi(loft.m.newpublish.w.cks, true);
    bMW = p.bci.bw;
    p.bci.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    dD.bq = function(I) {
        I = I || {};
        this.bHq(I)
    };
    dD.xp = function(bF) {
        this.cjB("js-activating");
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.iD()
        }
    };
    dD.bqK = function() {
        if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
            this.iD()
        }
    };
    dD.bz = function(I) {
        I = I || {};
        this.bJQ = "new/music/";
        I.minFrameHeight = 150;
        I.maxFrameHeight = 150;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bYF = 400;
        I.maxFrameHeight = qx - 112 - 80 - bYF;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bMW.bz.call(this, I);
        this.Lh = !!I.allowUploadDIYMusic;
        this.coc = I.flashSessionCookie || "";
        var bN = this.bhw || {};
        this.yy = {isNotInlandIp: false,v: this.coc,data: bN.embed,actionType: this.bX,isCitePost: this.gn,allowUploadDIYMusic: this.Lh};
        if (this.bX == "NEW") {
            this.yy.onchoosemusic = this.xp.A(this);
            this.yy.onclearmusic = this.bqK.A(this)
        }
        this.cjN("js-postMusic");
        if (this.bX != "NEW") {
            this.cjB("js-activating")
        }
        this.ciQ()
    };
    dD.cnu = function() {
        if (!this.ciV) {
            this.ciV = document.cloneElement("div", "vmanagerwrap")
        }
        if (!this.kL) {
            this.kL = P("loft.m.newpublish.w").Jt.bG(this.ciV, this.yy)
        } else {
            this.kL.bz(this.yy)
        }
    };
    dD.ciQ = function() {
        if (!this.ciV) {
            this.clh(null);
            bMW.ciQ.call(this, this.ciV)
        }
    };
    dD.ciX = function() {
        if (!!this.Gl) {
            this.Gl.cK()
        }
        this.ciV = E.hE(this.ciV);
        bMW.ciX.call(this)
    };
    dD.cK = function() {
        bMW.cK.call(this)
    };
    dD.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var hd;
        var cO = "", gZ = "";
        if ((!!nw || this.bX != "REBLOG") && !!this.kL) {
            cO = P("loft.x").gW(this.kL.Iz());
            var Id = this.kL.Jw() || [];
            if (!!Id[Id.length - 1]) {
                gZ = [Id[Id.length - 1]]
            }
            if (!!gZ && gZ.length > 0) {
                gZ = U.ii(gZ)
            } else {
                gZ = ""
            }
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!iX) {
                E.bd("请添加音乐！", true, false, false, true);
                return
            }
        }
        hd = bMW.gU.call(this, I);
        var bF;
        if (!!hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!!iX) {
                if (!bF)
                    return
            }
        }
        if (!!hd) {
            hd.embed = cO;
            hd.photoInfo = gZ
        }
        return hd
    };
    dD.clh = function(cO, bWJ) {
        if (!!cO) {
            this.yy.data = cO;
            this.yy.mode = bWJ || "preview";
            this.cnu()
        } else {
            this.yy.data = "";
            this.yy.mode = "";
            this.cnu()
        }
    };
    dD.bNu = function(bN, ciH) {
        if (!!bN && bN.embed != "") {
            try {
                this.cookieMusicEmbed = U.fp(decodeURIComponent(bN.embed))
            } catch (e) {
                this.cookieMusicEmbed = null
            }
        } else {
            this.cookieMusicEmbed = null
        }
        if (!!this.gt || this.bX == "REBLOG" || this.gn) {
            this.clh(this.cookieMusicEmbed, "preview")
        } else {
            this.clh(this.cookieMusicEmbed, "editable");
            if (!!this.kL) {
                this.cqA = P("loft.x").gW(this.kL.Iz())
            }
        }
        bMW.bNu.call(this, bN, ciH)
    };
    dD.bKZ = function(kA) {
        bMW.bKZ.call(this, kA)
    };
    dD.ciZ = function(bHm, dR, bc) {
        bMW.ciZ.call(this, bHm, dR, bc);
        this.clh()
    };
    dD.jN = function() {
        if (this.bX == "NEW" || !this.bhw || this.bhw == "null") {
            var bF = this.bQV({noShowError: true});
            if (!!bF) {
                return true
            }
            var cO;
            if (!!this.kL) {
                cO = P("loft.x").gW(this.kL.Iz())
            }
            if (!cO || cO == "null") {
                return false
            }
        } else {
            var ge = this.bhw.caption;
            var bF = this.bQV({noShowError: true});
            if (!(!!this.gt || this.bX == "REBLOG" || this.gn)) {
                var cO;
                if (!!this.kL) {
                    cO = P("loft.x").gW(this.kL.Iz())
                }
                if (cO != this.cqA) {
                    return true
                }
            }
            if (this.cqm(ge)) {
                return false
            }
        }
        return true
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), gO, bfb, cl = "ui-" + U.cA();
    var La = /\.swf$/;
    var oj = [{r: /\.(?:swf|flv)(?=\?|$)/i,t: 'pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" quality="high" allowscriptaccess="never"'}, {r: /\.(?:rm|rmvb|rt|ra|rp|rv|mov|qt|aac|m4a|m4p|ssm|sdp|3gp|amr|awb|3g2|divx)(?=\?|$)/i,t: 'type="audio/x-pn-realaudio-plugin" controls="ImageWindow,ControlPanel,StatusBar"'}, {r: /\.(?:mp3|avi|asf|wmv|wma|mpg|mpeg|wax|asx|wm|wmx|wvx|wav|mpv|mps|m2v|m1v|mpe|mpa|mp4|m4e|mp2|mp1|au|aif|aiff|mid|midi|rmi)(?=\?|$)/i,t: 'type="application/x-mplayer2" showcontrols="1" showaudiocontrols="1" showstatusbar="1" enablecontextmenu="1"'}], Dm = [{r: /tudou\.com.*\/[a-z]\/[^\/]+?$/i}, {r: /56\.com.*\/([^\/]+?)\.html/i,s: "http://player.56.com/$1.swf"}, {r: /ku6\.com.*\/([^\/]+?)\.html/i,s: "http://player.ku6.com/refer/$1/v.swf"}, {r: /youku\.com.*id_(.*?)\.html$/i,s: "http://player.youku.com/player.php/sid/$1/v.swf"}, {r: /v\.163\.com.*\/([^\/]+?)\.html/i,s: "http://img1.cache.netease.com/flvplayer081128/~false~0085_$1~.swf"}];
    P(N.ui).fx("#<uispace>{}#<uispace> .iblock{display:-moz-inline-box;display:inline-block;*display:inline;zoom:1;}#<uispace> .videoarea{height:61px;overflow:hidden;}#<uispace> .videoarea .vsearch{padding:10px;background:#ededed;}#<uispace> .videoarea .vsearch .vsearchwrap{position:relative;border:1px solid #dfdfdf;}#<uispace> .videoarea .vsearch input{position:relative;z-index:10;width:458px;height:30px;line-height:30px;padding:4px 10px;margin:0;color:#333;font-size:14px;border:none;background:none;outline:none;}#<uispace> .videoarea .vsearch label{position:absolute;left:12px;top:0;z-index:5;line-height:40px;line-height:40px;color:#ccc;font-size:14px;}#<uispace> .videoarea .searchinfo{visiblility:hidden;position:relative;width:100%;height:0px;overflow:hidden;opacity:0;}#<uispace> .videoarea .searchinfo .infoicon{position:absolute;left:220px;top:10px;width:40px;height:40px;}#<uispace> .videoarea .searchinfo .infotext{height:26px;line-height:26px;padding:50px 20px 4px 0;color:#333;text-align:center;background:#ededed;opacity:0.5;}#<uispace> .videoarea .videoshow{position:relative;height:0px;overflow:hidden;visibility:hidden;opacity:0;}#<uispace> .videoarea .videoshow .videowrap{}#<uispace> .videoarea .videoshow .rechoose{position:absolute;right:0;top:0;z-index:10;width:30px;height:30px;background-position:-1px -208px;cursor:pointer;}#<uispace> .videoarea.js-searching,#<uispace> .videoarea.js-addrerror{height:141px;}#<uispace> .videoarea.js-searching .searchinfo{visibility:visible;height:80px;opacity:1;}#<uispace> .videoarea.js-searching .searchinfo .infoicon{background-position:0 -102px;}#<uispace> .videoarea.js-addrerror .searchinfo{visibility:visible;height:80px;opacity:1;}#<uispace> .videoarea.js-addrerror .searchinfo .infoicon{background-position:0 0;}#<uispace> .videoarea.js-showvideo{height:305px;}#<uispace> .videoarea.js-showvideo .searchinfo,#<uispace> .videoarea.js-showvideo .vsearch{display:none;}#<uispace> .videoarea.js-showvideo .videoshow{visibility:visible;height:305px;opacity:1;}", cl);
    var bsQ = E.ft('<object width="${width}" height="${height}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0"><param name="movie" value="${src}"><param name="wmode" value="transparent"><param name="quality" value="high"><param name="flashvars" value="${flashvars|escape}"><embed width="${width}" height="${height}" src="${src}" flashvars="${flashvars|escape}"  menu="false" wmode="transparent" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></object>');
    var KQ = function(bp) {
        var mN = {flash: false,url: bp};
        if (oj[0].r.test(bp)) {
            return mN
        }
        for (var i = 0, l = Dm.length, hn; i < l; i++) {
            hn = Dm[i];
            if (!!hn.r.test(bp)) {
                mN.flash = true;
                mN.url = !hn.s ? bp : hn.s.replace("$1", RegExp.$1);
                return mN
            }
        }
        return mN
    };
    var KS = function(bp, bXX) {
        if (!bp)
            return "";
        if (bXX)
            return oj[0].t;
        for (var i = 0, l = oj.length; i < l; i++) {
            if (oj[i].r.test(bp))
                return oj[i].t
        }
        return ""
    };
    p.KZ = C();
    gO = p.KZ.bi(P(N.ui).ga, true);
    bfb = p.KZ.bw;
    p.KZ.cob = function(bXV) {
        var mN = KQ(bXV) || {}, bp = mN.url || "", dz = 500, eT = 300;
        if (bp.indexOf("http://player.yinyuetai.com") == 0) {
            var coa = bp.substring(bp.length - 6);
            if (coa = "/a.swf") {
                bp = bp.substring(0, bp.length - 6) + "/v.swf"
            }
        }
        return E.dG(bsQ, {src: bp,width: dz,height: eT,flashvars: ""})
    };
    gO.bq = function(bl, I) {
        I = I || {};
        this.lZ = {};
        this.bHq(bl, I);
        V.bHn(this.pe, "input", this.kF.A(this));
        V.bHn(this.pe, "blur", this.KY.A(this));
        V.bHn(this.nG, "click", this.kY.A(this))
    };
    gO.kF = function(bHl) {
        this.KX();
        var bg = this.pe.value;
        if (!!bg) {
            this.bYK()
        } else {
            this.bTS()
        }
    };
    gO.bTS = function() {
        E.bf(this.cnx, "js-hidetips")
    };
    gO.bYK = function() {
        E.ba(this.cnx, "js-hidetips")
    };
    gO.bz = function(I) {
        I = I || O;
        bfb.bz.call(this, I);
        this.bHp = I.data || null;
        this.jb = I.caption || "";
        this.wP = I.mode || "editable";
        if (this.wP == "preview") {
            this.nG.style.display = "none"
        }
        this.bHn("onchoose", I.onchoose || F);
        this.bHn("onrechoose", I.onrechoose || F);
        if (!!this.bHp) {
            this.clB(this.bHp, this.jb)
        } else {
            window.setTimeout(function() {
                this.pe.focus()
            }.A(this), 800)
        }
    };
    gO.cU = function() {
        return cl + " videomanager"
    };
    gO.cM = function() {
        return '<div class="videoarea ztag"><div class="vsearch ztag"><div class="vsearchwrap"><input type="text" class="ztag"><label class="ztag">贴入视频地址，支持土豆、优酷、乐视等网站</label></div></div><div class="searchinfo ztag"><div class="infoicon f-pbicon ztag"></div><div class="infotext ztag"></div></div><div class="videoshow ztag"><div class="videowrap ztag"></div><div class="rechoose f-pbicon ztag"></div></div></div>'
    };
    gO.cc = function() {
        var bHk = E.bj(this.Y, "ztag");
        var Q = 0;
        this.cko = bHk[Q++];
        this.cqd = bHk[Q++];
        this.pe = bHk[Q++];
        this.cnx = bHk[Q++];
        this.cqe = bHk[Q++];
        this.cqf = bHk[Q++];
        this.cjV = bHk[Q++];
        this.cqg = bHk[Q++];
        this.cny = bHk[Q++];
        this.nG = bHk[Q++]
    };
    gO.kY = function(bHl) {
        V.bb(bHl);
        this.uA()
    };
    gO.uA = function() {
        this.oZ = null;
        this.pe.value = "";
        this.cnZ();
        this.bh("onrechoose")
    };
    gO.KY = function(bHl) {
        this.oZ = null;
        this.KX();
        var ks = U.bA(this.pe.value);
        if (!ks) {
            return false
        }
        this.cnY();
        if (La.test(ks)) {
        }
        J.br(location.dwr, "PostBean", "videoSearch", ks, this.KW.A(this), this.KV.A(this))
    };
    gO.KW = function(bHm) {
        window.setTimeout(function(bHm) {
            if (!!bHm) {
                if (bHm.code == 0) {
                    var bF = bHm.video_desc || bHm.video_name || "";
                    if (!!bF) {
                        bF = "<p>" + bF + "</p>"
                    }
                    this.clB(bHm, bF)
                } else {
                    this.qO(bHm.msg)
                }
            } else {
                this.qO()
            }
        }.A(this, bHm), 300)
    };
    gO.KV = function() {
        this.qO("不支持的视频地址!")
    };
    gO.clB = function(bHm, bF) {
        if (!!bHm && !!bHm.flashurl) {
            this.oZ = {flashurl: bHm.flashurl || "",video_img_url: bHm.video_img_url || "",originUrl: bHm.originUrl || ""};
            this.cny.innerHTML = p.KZ.cob(bHm.flashurl);
            E.dt(this.cko, "js-searching js-addrerror", "js-showvideo");
            this.bh("onchoose", bF || bHm.video_desc || bHm.video_name || "")
        } else {
            this.qO()
        }
    };
    gO.qO = function(fU) {
        E.dt(this.cko, "js-searching js-showvideo", "js-addrerror");
        this.cjV.innerText = fU || "不支持的视频地址"
    };
    gO.KX = function() {
        E.bf(this.cko, "js-addrerror");
        this.cjV.innerText = ""
    };
    gO.cnY = function(fU) {
        E.dt(this.cko, "js-addrerror js-showvideo", "js-searching");
        this.cjV.innerText = fU || "正在搜索视频"
    };
    gO.cqh = function() {
        E.bf(this.cko, "js-searching")
    };
    gO.cnZ = function() {
        E.bf(this.cko, "js-addrerror js-searching js-showvideo");
        if (this.pe.value == "") {
            this.bTS();
            this.cny.innerHTML = ""
        }
    };
    gO.bfX = function() {
        return this.oZ
    };
    gO.KR = function(bp) {
        return KQ(bp)
    };
    gO.bpo = function(ks) {
        if (!this.Jp(ks)) {
            this.qO("不支持的视频地址!");
            this.pe.focus();
            return false
        } else {
            var bHm = {flashurl: this.lZ.url || "",video_img_url: ""};
            this.clB(bHm);
            return true
        }
    };
    gO.Jp = function(ks) {
        var mN = this.KR(ks) || {}, bp = mN.url, xt = KS(bp, mN.flash);
        this.lZ.url = bp;
        this.lZ.plugin = xt;
        if (!bp || bp.search("'|\"") >= 0 || !xt) {
            return false
        }
        return true
    }
})();
(function() {
    var p = P("loft.m.newpublish"), cC, bNA;
    p.bdM = C();
    cC = p.bdM.bi(loft.m.newpublish.w.cks, true);
    bNA = p.bdM.bw;
    p.bdM.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    cC.bq = function(I) {
        I = I || {};
        this.Yz = {isCitePost: this.gn,onchoose: this.bmk.A(this),onrechoose: this.bmj.A(this)};
        this.bHq(I)
    };
    cC.bmk = function(bF) {
        this.cjB(this.ciT);
        var Z = this.bQV({noShowError: true});
        Z = loft.x.mP(Z);
        Z = loft.x.jo(Z);
        if (!Z) {
            this.ns(bF || "")
        }
        if (this.bX == "NEW") {
            if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
                this.iD()
            }
        }
    };
    cC.bmj = function() {
        if (this.bX == "NEW") {
            if (!this.bhw || this.bhw == "null" || !!this.cookiePostData) {
                this.iD()
            }
        }
    };
    cC.bz = function(I) {
        I = I || {};
        this.bJQ = "new/video/";
        I.minFrameHeight = 150;
        I.maxFrameHeight = 150;
        I.autoHeightEnabled = true;
        var dp = document.documentElement || document.body;
        var qx = dp.clientHeight || 0;
        var bYF = 581;
        I.maxFrameHeight = qx - 112 - 80 - bYF;
        if (I.maxFrameHeight < I.minFrameHeight) {
            I.maxFrameHeight = I.minFrameHeight
        }
        bNA.bz.call(this, I);
        this.cjN("js-postVideo");
        if (this.bX != "NEW") {
            this.cjB(this.ciT)
        }
        this.ciQ()
    };
    cC.cnA = function() {
        if (!this.ciV)
            return;
        if (!this.Yn) {
            this.Yn = P("loft.m.newpublish.w").KZ.bG(this.ciV, this.Yz)
        } else {
            this.Yn.bz(this.Yz)
        }
    };
    cC.ciQ = function() {
        if (!this.ciV) {
            this.ciV = document.cloneElement("div", "vmanagerwrap");
            bNA.ciQ.call(this, this.ciV)
        }
    };
    cC.ciX = function() {
        if (!!this.Yn) {
            this.Yn.cK()
        }
        this.ciV = E.hE(this.ciV);
        bNA.ciX.call(this)
    };
    cC.cK = function() {
        bNA.cK.call(this)
    };
    cC.gU = function(I) {
        I = I || O;
        var nw = I.isPreview || false;
        var iX = I.noShowError || false;
        var hd;
        var cO = "";
        if (!!this.Yn) {
            cO = P("loft.x").gW(this.Yn.bfX())
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!iX) {
                E.bd("请添加视频！", true, false, false, true);
                return
            }
        }
        hd = bNA.gU.call(this, I);
        var bF;
        if (!!hd) {
            hd.caption = hd.content;
            hd.content = "";
            bF = hd.caption
        }
        if (this.bX != "REBLOG" && (!cO || cO == "null")) {
            if (!!iX) {
                if (!bF)
                    return
            }
        }
        if (!!hd) {
            hd.embed = cO
        }
        return hd
    };
    cC.cnB = function(cO, bWJ) {
        if (!!cO) {
            this.Yz.data = cO;
            this.Yz.mode = bWJ || "preview";
            this.cnA()
        } else {
            this.Yz.data = "";
            this.Yz.mode = "";
            this.cnA()
        }
    };
    cC.bNu = function(bN, ciH) {
        if (!ciH) {
            if (!!bN && bN.embed != "") {
                try {
                    this.cookieVideoEmbed = U.fp(decodeURIComponent(bN.embed))
                } catch (e) {
                    this.cookieVideoEmbed = null
                }
            } else {
                this.cookieVideoEmbed = null
            }
            if (!!this.gt || this.bX == "REBLOG" || this.gn) {
                this.cnB(this.cookieVideoEmbed, "preview")
            } else {
                this.cnB(this.cookieVideoEmbed, "editable");
                if (!!this.Yn) {
                    this.cqB = P("loft.x").gW(this.Yn.bfX())
                }
            }
        }
        bNA.bNu.call(this, bN, ciH)
    };
    cC.bKZ = function(kA) {
        bNA.bKZ.call(this, kA)
    };
    cC.ciZ = function(bHm, dR, bc) {
        bNA.ciZ.call(this, bHm, dR, bc)
    };
    cC.jN = function() {
        if (this.bX == "NEW" || !this.bhw || this.bhw == "null") {
            var bF = this.bQV({noShowError: true});
            if (!!bF) {
                return true
            }
            var cO, cjG;
            if (!!this.Yn) {
                cjG = this.Yn.bfX()
            }
            if (this.bX != "REBLOG" && !!cjG) {
                cO = P("loft.x").gW(cjG)
            }
            if (!cO || cO == "null") {
                return false
            }
        } else {
            var ge = this.bhw.caption;
            var bF = this.bQV({noShowError: true});
            if (!(!!this.gt || this.bX == "REBLOG" || this.gn)) {
                var cO;
                if (!!this.Yn) {
                    cO = P("loft.x").gW(this.Yn.bfX())
                }
                if (cO != this.cqB) {
                    return true
                }
            }
            if (this.cqm(ge)) {
                return false
            }
        }
        return true
    }
})();
(function() {
    var p = P("loft.m.newpublish"), ckt, cnX;
    p.cjs = C();
    ckt = p.cjs.bi(P(N.ut).gY);
    cnX = p.cjs.bw;
    p.cjs.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    p.cjs.ckf = function(I, bHl) {
        this.eb = this.YV(I);
        if (!!this.eb) {
            this.eb.ckf(I, bHl)
        }
    };
    ckt.bq = function(I) {
        I = I || {};
        this.bHq(I);
        this.bz(I)
    };
    ckt.bz = function(I) {
        I = I || {};
        I.onpostovernum = this.cnW.A(this, I)
    };
    ckt.cnW = function(I) {
        if (!!I) {
            I.postOverNum = true
        }
    };
    ckt.cto = function(I, csw) {
        I = I || {};
        csw = csw || P("loft.c").crN;
        if (!csw)
            return;
        var csv = ["goPublishData", "allowUploadDIYMusic", "v", "isAdvancedBrowser", "targetBlogInfo", "lastCCType", "postOverNum", "blogList", "submiterBlogInfo", "ue_cfg_develop", "ue_js_version", "mydomains"];
        for (var i = 0; i < csv.length; i++) {
            if (I[csv[i]] === undefined || typeof I[csv[i]] === "undefined") {
                I[csv[i]] = csw[csv[i]]
            }
        }
    };
    ckt.ckf = function(I, bHl) {
        I = I || {};
        this.cto(I);
        if (!!I.post) {
            I.postType = I.post.type || 1;
            var cnV = {1: "text",2: "photo",3: "music",4: "video"};
            I.editorType = cnV[I.postType] || "text"
        }
        if (!!this.ckL && !this.ckL.coR()) {
            if (!!bHl)
                V.bb(bHl);
            return
        }
        if (I.editorType == "text") {
            I.defaultHeight = 470;
            this.ckL = new p.beh(I)
        } else if (I.editorType == "photo") {
            I.defaultHeight = 415;
            this.ckL = new p.bgL(I)
        } else if (I.editorType == "music") {
            if (!!I.allowUploadDIYMusic) {
                I.defaultHeight = 253
            } else {
                I.defaultHeight = 183
            }
            this.ckL = new p.bci(I)
        } else if (I.editorType == "video") {
            I.defaultHeight = 175;
            this.ckL = new p.bdM(I)
        }
        if (I.actionType == "REBLOG") {
            window.setTimeout(this.cqY.A(this, I), 900)
        }
        window.setTimeout(this.cqX.A(this, I), 1e3)
    };
    ckt.cqX = function(I) {
        var cqJ = -1, cqK = -1;
        if (I.actionType == "REBLOG" && !!I && !!I.post) {
            cqJ = I.post.blogId;
            cqK = I.post.id
        }
        J.br(location.dwr, "PostBean", "checkAuthority", cqJ, cqK, false, this.cqW.A(this))
    };
    ckt.cqW = function(bHm) {
        if (!!bHm && bHm > 0)
            return;
        if (bHm == -1) {
            E.bd("暂时无法发布文章，请检查网络或重新登录！", true, true, false, true)
        } else if (bHm == -2) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, true, false, true)
        } else if (bHm == -3) {
            E.bd("由于权限设置，您暂时无法进行该操作！", true, true, false, true)
        } else {
            E.bd("暂时无法发布文章，请检查网络或重新登录！", true, true, false, true)
        }
        window.setTimeout(function() {
            E.gI(true)
        }.A(this), 5e3)
    };
    ckt.cqY = function(I) {
        var bc, dR;
        if (!!I && !!I.post) {
            bc = I.post.blogId;
            dR = I.post.id
        }
        if (!!bc && !!dR) {
            J.br(location.dwr, "PostBean", "isCitedByUser", bc, dR, this.cqV.A(this))
        }
    };
    ckt.cqV = function(bHm) {
        if (!bHm)
            return;
        var cqL = bHm["cited"];
        var cgT = bHm["citedBlogNickname"];
        if (cgT.length > 20) {
            cgT = cgT.substring(0, 20) + "..."
        }
        if (cqL == "hasCited") {
            E.bd("已经转载该文章到：" + cgT, true)
        } else if (cqL == "hasQueueCited") {
            E.bd("该文章已在 " + cgT + " 中设为定时发布！", true)
        }
    }
})();
(function() {
    var p = P("loft.m.newpublish.w"), cqn;
    p.cqt = C();
    cqn = p.cqt.bi(P(N.ut).gY, true);
    p.cqt.YV = function(I) {
        if (!!this.eb) {
            this.eb.bz(I)
        } else {
            this.eb = new this(I)
        }
        return this.eb
    };
    cqn.bq = function(I) {
        this.bHq();
        this.csx = {"class": "w-pagelayer-publish",html: "",isNeedAnimation: true,opacity: 75,bgcolor: "#000",noDocClickDestroy: true};
        this.bz(I)
    };
    cqn.bz = function(I) {
        I = I || {};
        this.csy = I.editReblogFromPersonalPage;
        if (!!this.csy) {
            this.csz = E.be("preOpenCoverForPublish");
            if (!!this.csz && this.csz.style.display != "none") {
                this.csx.opacity = 0
            } else {
                this.csx.opacity = 75
            }
        } else {
            this.csx.opacity = 75
        }
        this.bJo = window.netease.lofter.widget.pageLayer.YV(document.body, this.csx);
        this.bXx = I.redirectToUrl;
        this.cix = I.publishOptions;
        this.ctn = I.needClearParamInUrl;
        this.bfZ = I.from || "";
        this.er = I.tag || "";
        this.bHn("onitemdelete", I.onitemdelete || F);
        this.bHn("onitemupdate", I.onitemupdate || F);
        this.bHn("onpublishlayerclose", I.onpublishlayerclose || F);
        var cqD = document.cloneElement("div", "layerContainer");
        this.bJo.setHtmlContent(cqD);
        this.cnU(cqD)
    };
    cqn.cnU = function(bl) {
        this.cix.parent = bl;
        this.cix.onclosepublishlayer = this.cnT.A(this);
        this.cix.onpostpublished = this.cnS.A(this);
        loft.m.newpublish.cjs.ckf(this.cix)
    };
    cqn.cnT = function(cst) {
        this.bh("onpublishlayerclose");
        if (!!this.bXx) {
            this.gE();
            if (!!cst) {
                try {
                    cst(true)
                } catch (e) {
                }
            }
            return
        } else {
            this.bJo.destroy();
            if (!!this.csy && !!this.csz) {
                this.csz.style.display = "none"
            }
            if (!!this.ctn) {
                P("loft.m.newpublish.w").cts()
            }
        }
    };
    cqn.cnS = function(bN, RR, cst) {
        this.bh("onpublishlayerclose", bN, RR);
        if (!!this.bXx) {
            this.gE();
            if (!!cst) {
                try {
                    cst(true)
                } catch (e) {
                }
            }
            return
        } else {
            this.bJo.destroy()
        }
        if (RR.actionType == "NEW" || RR.actionType == "REBLOG")
            return;
        if (!!RR.isAutoPublish) {
            location.reload();
            return
        }
        var cnR = this.cix.post.blogId;
        if (!!RR.isContribute || RR.isDraftPost && (!!bN.isPublished || bN.queuePostType == 15 || bN.queuePostType == 16) || cnR != bN.blogId && (this.bfZ == "bloglist" || this.bfZ == "draftlist") || this.cnQ(bN)) {
            this.bh("onitemdelete", this.cix.post)
        } else {
            this.cmz(bN.id, bN.blogId)
        }
    };
    cqn.gE = function() {
        if (!!this.bXx) {
            var bp = this.bXx;
            if (bp.indexOf("http://www.lofter.com/control") >= 0 || bp.indexOf("http://reg.www.lofter.com/crossdomain.jsp") >= 0 || bp === location.href) {
                bp = loft.x.bM()
            }
            location.href = bp
        } else {
        }
    };
    cqn.cnQ = function(bN) {
        if (this.bfZ == "tag" || this.bfZ == "hot") {
            if (bN.allowView == "100") {
                return true
            }
            if (!!this.er) {
                var cnP = bN.tag || "", cnO = cnP.split(","), Q = U.fO(cnO, this.er);
                return Q == -1
            }
        }
        return false
    };
    cqn.cmz = function(dR, bc) {
        if (!!dR && !!bc) {
            J.br(location.dwr, "TrackBean", "getTrackItem", dR, bc, this.ckx.A(this))
        } else {
            this.ckx(null)
        }
    };
    cqn.ckx = function(cnC) {
        if (!!cnC) {
            this.bh("onitemupdate", cnC)
        }
    }
})();
(function() {
    var u = P(N.ut);
    var p = P("loft.m.dashboard"), Iw = 400, Cw = 300, rS = 500, CE = 164, buZ = 60 * 60 * 24 * 7 * 1e3, bua = 225, btZ = 320, rj = {}, cI, eA, bIO, xO, uH, xN, hr, xM, bIE;
    var Jz = /\+/g;
    var bZY = function(bHm) {
        var Z = "";
        if (!bHm)
            return Z;
        if (bHm.type === 1) {
            Z = loft.x.bPD(bHm.content)
        } else if (bHm.type === 5) {
            Z = loft.x.bPD(bHm.answer)
        } else {
            Z = loft.x.bPD(bHm.caption)
        }
        return Z
    };
    p.iL = C();
    cI = p.iL.bi(u.fc, true);
    p.iL.btY = function(btX) {
        if (!!this.eO)
            return this.eO;
        this.eO = "js-" + U.cA(6);
        return E.gD(E.dG(btX, {xtag: this.eO}), this.eO)
    };
    cI.bq = function(Tz) {
        this.eO = this.constructor.btY(Tz);
        this.bHq(this.eO);
        this.constructor.hb = null
    };
    cI.ce = function(bHm) {
        p.iL.bw.ce.call(this, bHm);
        this.Of(false)
    };
    cI.hS = function(bHl, btW) {
        V.bb(bHl);
        var rP = E.cr(this.Y, "m-icnt-all");
        this.Zb = !rP;
        if (rP) {
            if (this.bHp.type == 2) {
                var iH = E.bj(this.Y, "exif");
                for (var l = iH.length; l--; E.bf(iH[l], "exif-open"), iH[l].style.display = "none")
                    ;
            }
            E.bf(this.Y, "m-icnt-all");
            if (!btW)
                this.bh("oncollapse")
        } else {
            E.ba(this.Y, "m-icnt-all");
            if (this.bHp.type == 2)
                this.IU(bHl, true, !!this.eU ? this.eU.orign : null, !!this.eU ? this.eU.ow : 0, !!this.eU ? this.eU.oh : 0)
        }
        this.Of(!rP);
        return !rP
    };
    cI.Of = function(fZ) {
        var Z;
        Z = bZY(this.bHp);
        if (!this.fN || !!this.rH && !(!!location.href.match(/http:\/\/www\.lofter\.com\/(hot|ad3)/ig) && this.bHp.type === 1))
            return;
        this.Cw = Z.replace(/<.*?>/gi, "").length;
        if (!!fZ) {
            if (this.bHp.type <= 3 && this.Cw <= Cw) {
                this.fN.parentNode.style.display = "none"
            } else {
                this.fN.parentNode.style.display = "";
                this.fN.innerText = "收起";
                E.dt(this.fN, "w-more-open", "w-more-close")
            }
        } else {
            if (this.Cw > Cw) {
                this.fN.parentNode.style.display = "";
                this.fN.innerText = "展开";
                E.dt(this.fN, "w-more-close", "w-more-open")
            } else {
                this.fN.parentNode.style.display = "none"
            }
        }
    };
    cI.bHu = function(I) {
        I = I || O;
        this.bHn("oncollapse", I.oncollapse || F);
        this.rH = !!I.expand;
        this.bIH = !!I.iself
    };
    cI.xK = function(fZ) {
        var tM = this.jS;
        var bF = bZY(this.bHp);
        if (!bF || !this.bHp.digest)
            return;
        if (!!fZ) {
            this.jS.style.display = "none";
            this.cws.style.display = "block"
        } else {
            this.cws.style.display = "none";
            this.jS.style.display = "block"
        }
    };
    cI.CK = function() {
    };
    cI.IU = function(bHl, gu, fV, py, Oe) {
        var X = V.be(bHl, function(CL) {
            return CL.className == "imgc"
        }), eJ, iH, Oa = 0, Jh = 0;
        py = py || 1;
        Oe = Oe || 1;
        if (!X)
            return;
        iH = E.dE(X, "exif");
        if (!iH || !iH.length) {
            if (!gu || !this.Zb)
                return;
            if (!fV) {
                eJ = X.getElementsByTagName("IMG")[0];
                if (!eJ)
                    return;
                fV = eJ.getAttribute("large");
                Oa = eJ.clientHeight || 0;
                Jh = eJ.clientWidth || 0
            } else {
                Jh = py > rS ? rS : py;
                Oa = Jh * Oe / py
            }
            if (Oa < bua || Jh < btZ)
                return;
            this.Om(fV, X)
        } else {
            if (E.cr(iH[0], "exif-open"))
                return;
            iH[0].style.display = !!gu && !!this.Zb ? "" : "none"
        }
    };
    cI.Om = function(fV, X) {
        if (!fV || !X)
            return;
        var bx = U.bcq(fV), bg = rj[bx];
        if (!bg) {
            if (!/\.(?:jpg|jpeg)$/.test(fV)) {
                rj[bx] = "none";
                return
            }
            rj[bx] = "loading";
            J.YK("http://photo.163.com/photo/dwr", "PhotoBean", "getImageExif", fV, this.Cu.A(this, X, bx))
        } else {
            if (U.co(bg, "string") && (bg === "loading" || bg === "none")) {
                return
            } else {
                this.Cu(X, bx, bg)
            }
        }
    };
    cI.Cu = function(bl, bx, iH) {
        rj[bx] = iH || "none";
        if (!iH)
            return;
        bl.insertAdjacentHTML("beforeEnd", E.dG("m-track-jst-exif", iH))
    };
    cI.lg = function(go) {
        var g = P("loft.m");
        if (!go) {
            if (!!g.playingItem && U.co(g.playingItem.lg, "function")) {
                g.playingItem.lg(true)
            }
            g.playingItem = this
        } else {
            if (g.playingItem === this)
                g.playingItem = null
        }
    };
    cI.cK = function() {
        var g = P("loft.m");
        if (g.playingItem === this)
            g.playingItem = null;
        p.iL.bw.cK.call(this)
    };
    cI.cwA = function(CL) {
        if (CL.nodeType == Node.ELEMENT_NODE) {
            var Ai = CL.getElementsByTagName("a"), i = 0, l = Ai.length;
            for (; i < l; i++) {
                if (!!Ai[i].getAttribute("loftermentionblogId")) {
                    V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], parseInt(Ai[i].getAttribute("loftermentionblogId"))));
                    V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], parseInt(Ai[i].getAttribute("loftermentionblogId"))));
                    continue
                }
                if (!!this.bHp.citeParentBlogInfo) {
                    if (Ai[i].innerText.indexOf(this.bHp.citeParentBlogInfo.blogNickName) === 0 && Ai[i].href === this.bHp.citeParentBlogInfo.homePageUrl + "/post/" + this.bHp.citeParentPermalink) {
                        V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], this.bHp.citeParentBlogId));
                        V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], this.bHp.citeParentBlogId));
                        continue
                    }
                }
                if (!!this.bHp.citeRootBlogInfo) {
                    if (Ai[i].href.replace(/\/$/i, "") === loft.x.GX(this.bHp.citeRootBlogInfo.blogName, this.bHp.citeRootPostId, this.bHp.citeRootBlogId)) {
                        V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], this.bHp.citeRootBlogId));
                        V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], this.bHp.citeRootBlogId));
                        continue
                    }
                }
                if (!!this.bHp.publisherMainBlogInfo) {
                    if (Ai[i].innerText === this.bHp.publisherMainBlogInfo.blogNickName && Ai[i].href.replace(/\/$/i, "") === this.bHp.publisherMainBlogInfo.homePageUrl.replace(/\/$/i, "")) {
                        V.bHn(Ai[i], "mouseover", this.cwq.A(this, true, Ai[i], this.bHp.publisherUserId));
                        V.bHn(Ai[i], "mouseout", this.cwq.A(this, false, Ai[i], this.bHp.publisherUserId));
                        continue
                    }
                }
            }
        }
    };
    cI.cwq = function(gu, CL, dA, bHl) {
        if (!loft.g.dousercard)
            return;
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    p.NZ = C();
    eA = p.NZ.bi(p.iL, true);
    eA.bq = function() {
        this.bHq("m-track-jst-0");
        var bHk = E.bj(this.Y, this.eO), Q = 0;
        this.Zy = bHk[Q++];
        this.Jq = bHk[Q++];
        this.CS = bHk[Q++];
        this.xG = bHk[Q++];
        this.vh = E.bj(this.xG, "sela");
        this.fN = bHk[Q++];
        this.ZF = bHk[Q++];
        this.fz = bHk[Q++];
        this.bKJ = bHk[Q++];
        this.ZG = bHk[Q++];
        this.Jx = bHk[Q++];
        this.bLz = bHk[Q++];
        this.btV = bHk[Q++];
        this.NY = bHk[Q++];
        this.bLx = bHk[Q++];
        this.ZL = bHk[Q++];
        this.CY = bHk[Q++];
        this.JC = bHk[Q++];
        this.nZ = bHk[Q++];
        this.JD = bHk[Q++];
        this.JO = bHk[Q++];
        this.JN = bHk[Q++];
        this.bJt = bHk[Q++];
        this.De = bHk[Q++];
        this.Dc = bHk[Q++];
        this.NX = bHk[Q++];
        this.dg = bHk[Q++];
        this.er = bHk[Q++];
        this.NV = bHk[Q++];
        this.NU = bHk[Q++];
        this.NT = bHk[Q++];
        this.vq = bHk[Q++];
        this.vr = bHk[Q++];
        this.sz = bHk[Q++];
        this.NS = bHk[Q++];
        this.lw = bHk[Q++];
        this.Df = bHk[Q++];
        this.btT = bHk[Q++];
        this.btS = bHk[Q++];
        if (B.dh) {
            V.bHn(this.fN.parentNode.parentNode, "mouseover", this.Du.A(this, true));
            V.bHn(this.fN.parentNode.parentNode, "mouseout", this.Du.A(this, false))
        }
        V.bHn(this.NX, "click", this.btR.A(this));
        V.bHn(this.De, "click", this.btQ.A(this));
        V.bHn(this.bJt, "click", this.bZX.A(this));
        V.bHn(this.JN, "click", this.btP.A(this));
        V.bHn(this.JO, "click", this.btO.A(this));
        V.bHn(this.lw, "click", this.btN.A(this));
        V.bHn(this.lw, "mouseover", this.baE.A(this, true));
        V.bHn(this.lw, "mouseout", this.baE.A(this, false));
        V.bHn(this.NT, "click", this.btM.A(this));
        V.bHn(this.Df, "click", this.baH.A(this));
        V.bHn(this.NS, "click", this.btL.A(this));
        V.bHn(this.sz, "click", this.btG.A(this));
        V.bHn(this.vr, "click", this.btF.A(this));
        V.bHn(this.vq, "click", this.btD.A(this));
        V.bHn(this.Zy, "mouseover", this.baY.A(this, true, this.Zy, null));
        V.bHn(this.Zy, "mouseout", this.baY.A(this, false, this.Zy, null));
        V.bHn(this.fz, "mouseover", this.baY.A(this, true, this.fz, null));
        V.bHn(this.fz, "mouseout", this.baY.A(this, false, this.fz, null));
        V.bHn(this.bKJ, "click", this.bPR.A(this, 0));
        V.bHn(this.bLz, "click", this.bPR.A(this, 1));
        V.bHn(this.bLx, "click", this.bPR.A(this, 2));
        V.bHn(this.NU, "click", this.cki.A(this));
        V.bHn(this.NV, "click", this.cki.A(this));
        this.dw = {oncollapse: this.btB.A(this),ondelask: this.bLl.A(this),onaddblack: this.bQf.A(this)};
        this.pg = {act: this.sz.parentNode,oncmtupdate: this.bbb.A(this)};
        this.czN = {}
    };
    eA.bLl = function(bJx, bc) {
        this.bh("ondelask", bJx, bc)
    };
    eA.bQf = function(bDB, xy) {
        this.bh("onblack", bDB, xy)
    };
    eA.btB = function() {
        var DJ = E.jO(this.Y), NN = document.documentElement.scrollTop || document.body.scrollTop;
        if (DJ < NN) {
            document.documentElement.scrollTop = document.body.scrollTop = DJ
        }
    };
    eA.Du = function(gu) {
        if (!!gu)
            E.ba(this.fN.parentNode.parentNode, "isay-open");
        else
            E.bf(this.fN.parentNode.parentNode, "isay-open")
    };
    eA.baE = function(gu, bHl) {
        if (!!gu) {
            if (!!this.xs) {
                this.lw.innerText = "取消推荐"
            }
        } else {
            if (!!this.xs) {
                this.lw.innerText = "已推荐"
            }
        }
        V.bb(bHl)
    };
    eA.baY = function(gu, CL, dA, bHl) {
        V.bb(bHl);
        if (!loft.g.dousercard)
            return;
        var JZ = {};
        if (this.bHp.post.type === 5) {
            dA = dA || this.bHp.post.blogInfo.blogId
        } else {
            dA = dA || this.bHp.post.blogId
        }
        if (this.czN[dA] === true) {
            this.czN[dA] = false;
            JZ.isRepostDWR = true
        }
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu, JZ)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
    };
    eA.btM = function(bHl) {
        V.bb(bHl);
        this.bh("ondelete", this.bHp.post.id || 0, this.bHp.post.blogId || 0)
    };
    eA.btR = function(bHl) {
        V.bb(bHl);
        this.bh("onrecommend", this.bHp.post.id, this.bHp.post.blogId, this.bHp.recommendState)
    };
    eA.btQ = function(bHl) {
        V.bb(bHl);
        this.bh("onrecommend", this.bHp.post.id, this.bHp.post.blogId, this.bHp.recommendState, true)
    };
    eA.bZX = function(bHl) {
        V.bb(bHl);
        if (!!E.cr(this.bJt, "j-nohover")) {
            return
        }
        this.bh("ondegradepost", this.bHp.post.id, this.bHp.post.blogId)
    };
    eA.btP = function(bHl) {
        V.bb(bHl);
        var NM = window.confirm("你确认过滤这篇文章？");
        if (!NM)
            return;
        this.bh("onfilterpost", this.bHp.post.id, this.bHp.post.blogId)
    };
    eA.btO = function(bHl) {
        V.bb(bHl);
        var NM = window.confirm("你确认屏蔽该用户？");
        if (!NM)
            return;
        this.bh("onforbidblog", this.bHp.post.blogId)
    };
    eA.bbl = function(di, df, sO, bZW) {
        this.bHp.recommendState = di || 0;
        this.JD.style.display = !!this.sP || this.bxf === true ? "" : "none";
        this.De.innerText = di === 2 ? "下墙" : "上墙";
        if (!!this.sP && this.bbp >= 0) {
            this.NX.innerText = !!di ? "去精" : "加精";
            this.Dc.parentNode.style.display = "none";
            if (!!di) {
                sO = sO || this.bHp.recommendTagPost;
                if (!!sO && !!sO.editorUserId) {
                    this.Dc.src = loft.x.eK(sO.editorAvaImg, 14);
                    this.Dc.parentNode.href = loft.x.bM(sO.editorName);
                    this.Dc.parentNode.title = sO.editorNickname + "（" + U.ws(sO.publishTime, "yyyy-MM-dd HH:mm") + "）";
                    this.Dc.parentNode.style.display = ""
                }
            }
            if (this.sP === 2 || this.sP === 1) {
                this.De.parentNode.style.display = "";
                if (di > 0 || !!this.bHp.recommendTagPost && !!this.bHp.recommendTagPost.autoPostData) {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = "none"
                } else {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                }
                if (!!df && di == 0 && this.bJt.parentNode.style.display == "none") {
                    this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                }
            }
            if (this.bUB <= 0)
                this.De.parentNode.style.display = "none";
            if (this.bHp.recommendTagPost && !!this.bHp.recommendTagPost.autoPostData) {
                var bKp = this.bHp.recommendTagPost.autoPostData;
                if (!df) {
                    if (bKp.autoPostType == 3 || bKp.autoPostType == 4) {
                        E.ba(this.bJt, "j-nohover")
                    }
                    this.bJt.innerHTML = bKp.kopValue.toFixed(2).replace(/(\.00|0)$/ig, "");
                    this.bJt.title = "( 谱" + bKp.kopValue.toFixed(2).replace(/(\.00|0)$/ig, "") + " | 精" + bKp.recommendCount + " | 降" + bKp.degradeCount + " | 滤" + bKp.filterCount + " )";
                    this.bJt.parentNode.style.display = ""
                } else if (!!df) {
                    if (!!bZW) {
                        this.bJt.parentNode.style.display = "none";
                        if (this.sP === 2) {
                            this.JN.parentNode.style.display = this.JO.parentNode.style.display = ""
                        }
                    } else {
                        di != 0 ? E.ba(this.bJt, "j-nohover") : E.bf(this.bJt, "j-nohover")
                    }
                }
            }
            if (!!this.bHp.misc && !df) {
                try {
                    var EA = U.fp(this.bHp.misc);
                    if (!!EA && !!EA["new"]) {
                        this.JD.insertAdjacentHTML("beforeBegin", '<span style="color:red;" title="来自新用户文章">　•</span>')
                    }
                    if (!!EA && !!EA["goodblog"]) {
                        this.JD.insertAdjacentHTML("beforeBegin", '<span style="color:blue;" title="来自推荐博客">　•</span>')
                    }
                } catch (e) {
                }
            }
        } else if ((this.sP == 2 || this.sP == 1) && this.bbp < 0 || this.bxf === true) {
            this.NX.parentNode.style.display = "none";
            if (this.bUB <= 0)
                this.De.parentNode.style.display = "none";
            this.JO.parentNode.style.display = this.JN.parentNode.style.display = ""
        } else {
            this.JD.style.display = "none"
        }
        if (!df)
            return;
        var bbt = this.er.getElementsByTagName("A"), X, Q = U.fO(bbt, function(CL) {
            return CL.innerText.toLowerCase() === df.toLowerCase()
        });
        if (Q != -1) {
            X = bbt[Q];
            if (this.bbp >= 0) {
                if (!!di) {
                    E.ba(X, "w-jing");
                    X.href = loft.x.bM() + "/tag/" + df + "?first=" + this.bHp.post.permalink;
                    X.title = "日志在该标签下列为精选";
                    E.hv(X.parentNode);
                    this.er.insertAdjacentElement("afterBegin", X.parentNode)
                } else {
                    E.bf(X, "w-jing");
                    X.href = loft.x.bM() + "/tag/" + df;
                    X.title = ""
                }
            }
        }
    };
    eA.DS = function(eF, bHl) {
        V.bb(bHl);
        if (!!this.bIH) {
            this.bh("onlogincb", this.bHp.post.blogPageUrl);
            return
        }
        var cG = loft.c.cm.visitorEmail;
        if (!!cG) {
            loft.w.EC.bE({parent: document.body,email: cG,target: eF})
        } else {
            loft.w.ED.bE({parent: document.body,target: eF})
        }
    };
    eA.btN = function(bHl) {
        V.bb(bHl);
        if (!loft.c.cm.userId) {
            this.DS(location.href);
            return
        }
        if (!!loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        if (!this.cfk || !!this.bbz)
            return;
        this.bbz = true;
        this.bh("onshare", this.bHp.post.id || 0, this.bHp.post.blogId || 0, !this.xs, this.btA.A(this));
        if (!this.xs) {
            this.bHL("qbselect_20121207_05")
        }
    };
    eA.btL = function(bHl) {
        var X = V.be(bHl);
        if (!loft.c.cm.userId) {
            V.bb(bHl);
            this.DS(X.href);
            return
        }
        this.cki(bHl, "REBLOG");
        this.bHL("qbselect_20121207_04")
    };
    eA.btA = function(bbB, bbC, btz) {
        this.bbz = false;
        if (!btz) {
            if (bbB) {
                if (!!bbC) {
                    this.JC.innerText = loft.c.cm.blogNickName || "";
                    this.JC.href = loft.x.bM(loft.c.cm.blogName);
                    this.CY.style.display = "";
                    this.CY.parentNode.style.display = ""
                }
                this.lw.parentNode.style.width = "36px";
                if (B.dh) {
                    this.lw.parentNode.style.width = "48px"
                }
                this.lw.innerText = "已推荐";
                this.xs = true;
                E.ba(this.nZ, "f-dn")
            } else {
                if (!!bbC) {
                    this.CY.style.display = "none"
                }
                this.xs = false;
                this.lw.parentNode.style.width = "";
                this.lw.innerText = "推荐";
                if (!!E.cr(this.nZ, "f-dn")) {
                    E.bf(this.nZ, "f-dn")
                }
            }
            this.NK(bbB ? 1 : -1)
        }
    };
    eA.baH = function(bHl) {
        V.bb(bHl);
        if (!loft.c.cm.userId) {
            this.DS(location.href);
            return
        }
        if (!!loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        if (!this.NL || !!this.bbG)
            return;
        this.bbG = true;
        var hM = this.bHp.liked;
        if (!!hM) {
            E.bf(this.Df, "w-icn-0b-do-anim");
            E.ba(this.Df, "w-icn-0b-anim")
        } else {
            E.bf(this.Df, "w-icn-0b-anim");
            E.ba(this.Df, "w-icn-0b-do-anim")
        }
        this.bbJ(!hM);
        this.bh("onlike", this.bHp.post.id || 0, this.bHp.post.blogId || 0, hM);
        if (!hM) {
            this.bHL("qbselect_20121207_03")
        }
    };
    eA.btD = function(bHl) {
        V.bb(bHl);
        this.bh("onblack", this.bHp.post.publisherMainBlogInfo.blogName || "", this.bHp.post.publisherMainBlogInfo.blogNickName || "")
    };
    eA.NJ = function(hM, bty) {
        this.bbG = false;
        this.bHp.liked = !!hM;
        this.bbJ(hM, !!bty)
    };
    eA.bHL = function(bZV) {
        if (!!window.isInDashboard && !this.bHp.sharerBlogInfo && !this.bHp.followed) {
            loft.x.bJH(bZV)
        }
    };
    eA.NK = function(on) {
        on = on || 0;
        this.mO.favoriteCount += on;
        var bbT = this.mO.favoriteCount + this.mO.reblogCount + this.mO.shareCount;
        this.vr.innerText = "热度(" + bbT + ")";
        if (!!bbT) {
            this.vr.parentNode.style.display = "";
            if (this.vr.parentNode.parentNode.offsetWidth > 240) {
                this.er.style.width = 500 - this.Df.parentNode.parentNode.offsetWidth + "px"
            }
        } else {
            this.vr.parentNode.style.display = "none"
        }
    };
    eA.bbb = function(on) {
        this.mO.responseCount += on;
        if (!!this.mO.responseCount) {
            this.sz.innerText = "评论(" + this.mO.responseCount + ")"
        } else {
            this.sz.innerText = "评论"
        }
        if (on > 0) {
            this.bHL("qbselect_20121207_06")
        }
    };
    eA.bbJ = function(hM) {
        if (!!hM) {
            E.ba(this.Df, "w-icn-0b-do")
        } else {
            E.bf(this.Df, "w-icn-0b-do")
        }
        this.Df.title = !!hM ? "取消喜欢" : "喜欢"
    };
    var bQX = false;
    eA.btG = function(bHl) {
        V.bb(bHl);
        if (!loft.c.cm.userId && !this.mO.responseCount) {
            this.DS(location.href);
            return
        }
        if (!!bQX)
            return;
        bQX = true;
        window.setTimeout(function() {
            bQX = false
        }, 350);
        if (!!this.fK && !!this.fK.lN) {
            this.fK = P("loft.w").lT.db(this.fK)
        } else {
            if (!!this.jl && !!this.jl.lN)
                this.jl = P("loft.w").mZ.db(this.jl);
            this.pg.isedit = this.lm;
            this.pg.pid = this.bHp.post.id;
            this.pg.bid = this.bHp.post.blogId;
            this.pg.followTime = this.bHp.followed;
            this.pg.commentRank = this.bHp.post.blogInfo.commentRank;
            this.pg.count = this.mO.responseCount || 0;
            this.pg.isReblog = this.bHp.post.citeRootPostId > 0;
            this.pg.isanonymous = !loft.c.cm.userId;
            this.pg.onanonymousclick = this.DS.Eo(this, location.href);
            this.fK = P("loft.w").lT.bG(this.btS, this.pg)
        }
    };
    eA.btF = function(bHl) {
        V.bb(bHl);
        if (!this.bbZ)
            this.bbZ = this.mO.favoriteCount + this.mO.reblogCount + this.mO.shareCount;
        if (!!this.jl && !!this.jl.lN) {
            this.jl = P("loft.w").mZ.db(this.jl)
        } else {
            if (!!this.fK && !!this.fK.lN) {
                this.fK = P("loft.w").lT.db(this.fK)
            }
            this.jl = P("loft.w").mZ.bG(this.btT, {act: this.vr.parentNode,pid: this.bHp.post.id,bid: this.bHp.post.blogId,type: this.bHp.post.type,count: this.bbZ})
        }
    };
    eA.bHu = function(I) {
        this.bHn("onshare", I.onshare || F);
        this.bHn("onlike", I.onlike || F);
        this.bHn("onfollow", I.onfollow || F);
        this.bHn("ondelete", I.ondelete || F);
        this.bHn("onupdate", I.onupdateitem || F);
        this.bHn("onblack", I.onblack || F);
        this.bHn("onrecommend", I.onrecommend || F);
        this.bHn("ondegradepost", I.ondegradepost || F);
        this.bHn("onfilterpost", I.onfilterpost || F);
        this.bHn("onforbidblog", I.onforbidblog || F);
        this.bHn("ondelask", I.ondelask || F);
        this.bHn("onlogincb", I.onlogincb || F);
        this.tO = I.targetBlogId || 0;
        this.sP = I.recommenderRole || 0;
        this.bbp = I.rtagRank || 0;
        this.bUB = I.wallPostNum || 0;
        this.rH = !!I.expand;
        this.bIH = !!I.iself;
        this.chq = !!I.expandPages;
        this.bxf = !!I.isActivityTagEditor;
        this.ciD = I.topconfig || P("loft.c").crN || {};
        this.cfy = I.tag || "";
        this.cix = {targetBlogInfo: this.ciD.targetBlogInfo,flashSessionCookie: this.ciD.v,lastCCType: this.ciD.lastCCType,postOverNum: this.ciD.postOverNum,blogList: this.ciD.blogList,ue_cfg_develop: this.ciD.ue_cfg_develop,ue_js_version: this.ciD.ue_js_version,allowUploadDIYMusic: !!this.ciD.allowUploadDIYMusic};
        this.cix.mydomains = this.ciD.mydomains || {};
        this.cmK = !!I.newpublish
    };
    eA.cK = function() {
        if (!!this.bHp.repeat) {
            E.bf(this.Y, "m-mlist-self")
        }
        this.NH = this.iG.db(this.NH);
        p.NZ.bw.cK.call(this)
    };
    eA.btx = function(bN) {
        var bcd, clz = this.iG;
        bN.type = bN.type || 1;
        switch (bN.type) {
            case 1:
                this.iG = p.DU;
                break;
            case 2:
                try {
                    bcd = U.fp(bN.photoLinks).length
                } catch (e) {
                }
                this.iG = bcd > 1 ? p.EV : p.NG;
                break;
            case 3:
                this.iG = p.qT;
                break;
            case 4:
                this.iG = p.bLR;
                break;
            case 5:
                this.iG = p.bMg;
                break;
            default:
                this.iG = null
        }
        try {
            if (!!this.iG) {
                this.dw.expand = !!this.rH;
                this.dw.iself = !!this.bIH;
                this.dw.expandPages = !!this.chq;
                if (!!this.NH) {
                    if (this.NH instanceof this.iG) {
                        this.NH.ce(bN)
                    } else {
                        clz.db(this.NH);
                        this.NH = this.iG.bG(bN, this.dg, this.dw)
                    }
                } else {
                    this.NH = this.iG.bG(bN, this.dg, this.dw)
                }
                if (!!this.rH && bN.type == 2)
                    this.NF()
            }
        } catch (e) {
            alert(e)
        }
    };
    eA.NF = function() {
        this.NH.hS(null, true)
    };
    eA.bct = function(bN, bp) {
        bN = bN || this.bHp.post;
        bp = bp || loft.x.bM(bN.blogInfo.blogName);
        if (!!this.bHp.repeat || !!this.bIH) {
            E.ba(this.Y, "m-mlist-self")
        } else {
            E.bf(this.Y, "m-mlist-self");
            if (!!bN && bN.type == 5 && !bN.answer && !!bN.anonymous) {
                this.Jq.src = loft.x.eK();
                this.Jq.parentNode.removeAttribute("href");
                this.Jq.parentNode.style.cursor = "default";
                this.xG.style.display = "none"
            } else {
                this.Jq.src = loft.x.eK(bN.blogInfo.bigAvaImg);
                this.Jq.parentNode.href = bp;
                this.Jq.parentNode.style.cursor = ""
            }
            if (!!bN.publisherMainBlogInfo && bN.publisherMainBlogInfo.blogId != bN.blogInfo.blogId && bN.blogInfo.blogName != "i") {
                this.CS.src = loft.x.eK(bN.publisherMainBlogInfo.bigAvaImg, 45);
                this.CS.parentNode.href = loft.x.bM(bN.publisherMainBlogInfo.blogName);
                V.bHn(this.CS, "mouseover", this.baY.A(this, true, this.CS, bN.publisherMainBlogInfo.blogId));
                V.bHn(this.CS, "mouseout", this.baY.A(this, false, this.CS, bN.publisherMainBlogInfo.blogId))
            } else {
                this.CS.parentNode.parentNode.style.display = "none"
            }
        }
    };
    eA.ce = function(bHm) {
        if (!bHm)
            retrun;
        this.bHp = bHm;
        var bN = bHm.post, bp = loft.x.bM(bN.blogInfo.blogName);
        if (!!bN && bN.type == 5) {
            bN.canAsk = bHm.canAsk
        }
        this.btx(bHm.post || {});
        this.NJ(!!bHm.liked, true);
        try {
            this.bHp.miscJSON = U.fp(this.bHp.misc)
        } catch (e) {
        }
        this.bct(bN, bp);
        this.bZU(bN, bp);
        var bcv = loft.x.bM() + "/reblog/" + bN.permalink || "";
        this.NS.href = !!loft.c.cm.userId ? bcv : loft.x.Ru(bcv);
        this.mO = bN.postCount || O;
        this.NK(0);
        this.bbb(0);
        this.btv(bN.tag, bN.recommendTags);
        this.btu(bN);
        if (!!bN.isPublished && bN.allowView == 0) {
            this.fN.href = bp + "/post/" + bN.permalink || "";
            this.fN.title = "查看全文 - " + loft.x.qB(bN.publishTime || 0);
            var btt = bN.blogInfo.commentRank == 10 || bN.blogInfo.commentRank == 11;
            this.sz.parentNode.style.display = btt ? "" : "none";
            this.fN.style.display = "";
            this.ZF.style.display = "none"
        } else {
            this.sz.parentNode.style.display = "none";
            this.fN.style.display = "";
            this.fN.style.cursor = "default";
            this.fN.title = loft.x.qB(bN.publishTime || 0);
            this.fN.onclick = function() {
                return false
            }
        }
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        this.ZL.style.display = bcC ? "" : "none";
        if (bcC) {
            this.ZL.parentNode.style.display = ""
        }
        this.bbl(!!bHm.recommendTagPost && bHm.recommendTagPost["status"] >= 0 ? bHm.recommendTagPost["status"] == 0 ? 2 : 1 : 0);
        if (this.Df.parentNode.parentNode.offsetWidth > 240) {
            this.er.style.width = 500 - this.Df.parentNode.parentNode.offsetWidth + "px"
        }
    };
    eA.bZU = function(bN, bp) {
        if (this.tO === bN.blogId) {
            this.fz.style.display = this.bKJ.style.display = "none"
        } else {
            this.fz.href = this.Jq.parentNode.href = bp;
            this.fz.innerText = bN.blogInfo.blogNickName || "";
            if (!this.bIH) {
                this.bKJ.title = "关注 " + bN.blogInfo.blogNickName || "";
                E.ba(this.bKJ, "icontag" + bN.blogInfo.blogId);
                this.bKJ.style.display = this.bHp.followed ? "none" : ""
            } else {
                this.bKJ.style.display = "none"
            }
        }
        this.btV.style.display = this.NY.style.display = this.bLx.style.display = "none";
        if (!!bN.citeParentBlogInfo) {
            this.ZG.style.display = this.Jx.style.display = "";
            if (!this.bIH) {
                var bUU = 1;
                try {
                    bUU = parseInt(this.bHp.miscJSON.parentFollowed)
                } catch (e) {
                }
                this.bLz.style.display = bUU === 1 ? "none" : "";
                this.bLz.title = "关注 " + bN.citeParentBlogInfo.blogNickName || "";
                E.ba(this.bLz, "icontag" + bN.citeParentBlogInfo.blogId)
            } else {
                this.bLz.style.display = "none"
            }
            this.Jx.href = loft.x.GX(bN.citeParentBlogInfo.blogName, bN.citeParentPostId, bN.citeParentBlogId);
            this.Jx.innerText = bN.citeParentBlogInfo.blogNickName || "";
            V.bHn(this.Jx, "mouseover", this.baY.A(this, true, this.Jx, bN.citeParentBlogId));
            V.bHn(this.Jx, "mouseout", this.baY.A(this, false, this.Jx, bN.citeParentBlogId));
            if (bN.citeRootBlogId != bN.citeParentBlogId && !!bN.citeRootBlogInfo) {
                this.btV.style.display = this.NY.style.display = "";
                if (!this.bIH) {
                    this.bLx.style.display = parseInt(this.bHp.miscJSON.rootFollowed) != 1 ? "" : "none";
                    this.bLx.title = "关注 " + bN.citeRootBlogInfo.blogNickName || "";
                    E.ba(this.bLx, "icontag" + bN.citeRootBlogInfo.blogId)
                } else {
                    this.bLx.style.display = "none"
                }
                this.NY.innerText = bN.citeRootBlogInfo.blogNickName || "";
                this.NY.href = loft.x.GX(bN.citeRootBlogInfo.blogName, bN.citeRootPostId, bN.citeRootBlogId);
                V.bHn(this.NY, "mouseover", this.baY.A(this, true, this.NY, bN.citeRootBlogId));
                V.bHn(this.NY, "mouseout", this.baY.A(this, false, this.NY, bN.citeRootBlogId))
            }
        } else {
            this.ZG.style.display = this.Jx.style.display = this.bLz.style.display = "none";
            if (this.tO === bN.blogId)
                this.fz.parentNode.style.display = "none"
        }
        this.xs = !!this.bHp.shared;
        if (!!this.bHp.sharerBlogInfo) {
            var bcu = this.bHp.sharerBlogInfo;
            this.JC.innerText = bcu.blogNickName || "";
            this.JC.href = loft.x.bM(bcu.blogName);
            this.CY.style.display = "";
            this.CY.parentNode.style.display = "";
            V.bHn(this.JC, "mouseover", this.baY.A(this, true, this.JC, bcu.blogId));
            V.bHn(this.JC, "mouseout", this.baY.A(this, false, this.JC, bcu.blogId))
        }
        if (this.xs) {
            this.lw.parentNode.style.width = "36px";
            if (B.dh) {
                this.lw.parentNode.style.width = "48px"
            }
            this.lw.innerText = "已推荐"
        }
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        var cnN = bN.citeParentBlogId || bN.citeRootBlogId;
        if (!!this.bHp.loftRecom && !bcC && !cnN && !!loft.c.cm.userId && this.bHp.followed == 0 && !this.bHp.sharerBlogInfo && !!location.href.match(/(www.lofter.com\/dashboard)|(www.lofter.com)[\/]?$/ig)) {
            this.nZ.style.display = ""
        } else {
            this.nZ.style.display = "none"
        }
    };
    eA.bcA = function() {
        var jw = !!this.bHp.followed, bDB = this.bHp.post.blogInfo.blogName || "", bc = this.bHp.post.blogInfo.blogId || 0;
        this.xj = jw;
        this.vh[0].href = loft.x.bM() + "/favblog?bn=" + bDB + "&act=dashboardlike_20130725";
        this.vh[1].href = loft.x.bM() + "/explore?type=follow&bid=" + bc + "&act=dashboardfollow_20130725";
        this.vh[2].href = loft.x.bM() + "/message/" + bDB + "/?target=dashboard";
        this.vh[3].innerText = jw ? "取消关注" : "关注";
        if (!!jw) {
            E.dt(this.vh[3], "sel3", "sel2")
        } else {
            E.dt(this.vh[3], "sel2", "sel3")
        }
        if (!!this.bHp.showLike) {
            this.vh[0].parentNode.style.display = ""
        } else {
            this.vh[0].parentNode.style.display = "none"
        }
        if (!!this.bHp.showFollow) {
            this.vh[1].parentNode.style.display = ""
        } else {
            this.vh[1].parentNode.style.display = "none"
        }
    };
    eA.kc = function(bHl) {
        V.bb(bHl);
        if (!!this.bKJ) {
            var bPe = "icontag" + this.bHp.post.blogInfo.blogId, bHk = E.bj(document.body, bPe);
            for (var i = 0; i < bHk.length; i++) {
                bHk[i].style.width = bHk[i].style.marginLeft = bHk[i].style.opacity = 0
            }
        }
        this.bh("onfollow", this.bHp.post.blogId, !!this.xj)
    };
    eA.bPR = function(by, bHl) {
        var bn = V.be(bHl).className.split(" "), bPe;
        for (var i = 0; i < bn.length; i++) {
            if (bn[i].indexOf("icontag") >= 0) {
                bPe = bn[i];
                break
            }
        }
        var Lt, X = V.be(bHl), bHk = E.bj(document.body, bPe);
        V.bb(bHl);
        if (!loft.c.cm.userId) {
            this.DS(location.href);
            return
        }
        if (!!loft.c.cm.isForbidUser) {
            loft.x.kX();
            return
        }
        for (var i = 0; i < bHk.length; i++) {
            bHk[i].style.width = bHk[i].style.marginLeft = bHk[i].style.opacity = 0
        }
        switch (by) {
            case 0:
                Lt = this.bHp.post.blogId;
                break;
            case 1:
                Lt = this.bHp.post.citeParentBlogId;
                break;
            case 2:
                Lt = this.bHp.post.citeRootBlogId;
                break
        }
        this.czN[Lt] = true;
        this.bh("onfollow", Lt, false)
    };
    eA.bts = function(bN, Fe) {
        if (!!Fe) {
            this.vq.parentNode.style.display = "";
            this.NV.parentNode.style.display = ""
        } else {
            this.vq.parentNode.style.display = "none";
            this.NV.parentNode.style.display = "none"
        }
    };
    eA.btu = function(bN) {
        var io = loft.c.jg, i = 0, l = io.length, ND = false;
        for (; i < l; i++) {
            if (io[i].blogId === bN.blogId) {
                if (io[i].role === 1 || io[i].role === 10 || bN.publisherUserId === loft.c.cm.userId || !!bN.isContribute) {
                    ND = true;
                    break
                }
            }
        }
        this.lm = ND;
        var Fe = !!bN.isContribute && !bN.isPublished;
        if (!!ND) {
            this.NU.parentNode.style.display = Fe ? "none" : "";
            this.NT.parentNode.style.display = ""
        } else {
            this.NU.parentNode.style.display = this.NT.parentNode.style.display = "none"
        }
        var bcO = !!bN.isPublished && bN.allowView == 0;
        this.bto = bcO && (loft.c.jg.length > 1 || bN.blogId != loft.c.cm.userId);
        if (!!bN && bN.type == 5) {
            this.bto = false
        }
        this.NL = bcO && (bN.publisherUserId != loft.c.cm.userId || !!bN.isContribute);
        this.cfk = bcO && bN.blogId != loft.c.cm.userId;
        this.NS.parentNode.style.display = this.bto ? "" : "none";
        this.Df.parentNode.style.display = this.NL ? "" : "none";
        this.lw.parentNode.style.display = this.cfk ? "" : "none";
        this.bts(bN, Fe);
        this.NU.href = this.NV.href = loft.x.bM() + "/edit/" + bN.permalink
    };
    eA.cki = function(bHl, clx) {
        if (!this.cmK || this.bHp.post.type == 5)
            return;
        clx = clx || "EDIT";
        V.bb(bHl);
        var X = V.be(bHl);
        var I = this.cix;
        I.actionType = clx;
        I.post = this.bHp.post;
        I.submitUrl = X.href;
        var crI = {};
        crI.publishOptions = I;
        crI.onitemdelete = this.clw.A(this);
        crI.onitemupdate = this.clv.A(this);
        crI.from = this.ciD.from || "";
        crI.tag = this.cfy || "";
        P("loft.m.newpublish.w").cqt.YV(crI)
    };
    eA.clw = function(bN) {
        this.bh("ondelete", bN.id || 0, bN.blogId || 0, true)
    };
    eA.clv = function(bHm) {
        this.bh("onupdate", this.bHp.post.id, bHm)
    };
    eA.btv = function(df, bcQ) {
        df = U.ew(df) || "";
        if (!df || !df.length) {
            this.er.style.display = "none";
            return
        }
        this.er.style.display = "";
        var ck = df.split(","), i = 0, l = ck.length, fv = [], Q, Fh = !!bcQ ? bcQ.slice(0) : null;
        for (; i < l; i++) {
            if (ck[i] == "我在LOFTER") {
                fv.push('<span class="opti w-liang"><a ' + (!!this.bIH ? 'target="_blank"' : "") + ' href="' + loft.x.bM() + "/tag/" + ck[i] + '"><span>' + ck[i] + "</span></a></span>");
                break
            }
            Q = -1;
            if (!!Fh && !!Fh.length) {
                Q = U.fO(Fh, ck[i].toLowerCase())
            }
            if (Q == -1) {
                var bZT = U.fO(loft.c.ccs, U.Ua(ck[i].toLowerCase()));
                if (bZT >= 0 && this.bHp.post.citeParentPostId <= 0) {
                    fv.unshift('<span class="opti"><a ' + (!!this.bIH ? 'target="_blank"' : "") + ' title="日志参与了该标签下的活动" class="w-liang" href="' + loft.x.bM() + "/tag/" + ck[i] + "?first=" + this.bHp.post.permalink + '"><span>' + ck[i] + "</span></a></span>")
                } else {
                    fv.push('<span class="opti"><a ' + (!!this.bIH ? 'target="_blank"' : "") + ' href="' + loft.x.bM() + "/tag/" + ck[i] + '"><span>' + ck[i] + "</span></a></span>")
                }
            } else {
                Fh.splice(Q, 1);
                fv.unshift('<span class="opti"><a ' + (!!this.bIH ? 'target="_blank"' : "") + ' title="日志在该标签下列为精选" class="w-jing" href="' + loft.x.bM() + "/tag/" + ck[i] + "?first=" + this.bHp.post.permalink + '"><span>' + ck[i] + "</span></a></span>")
            }
        }
        this.er.innerHTML = fv.join("");
        var cEC = this.er.children, bo, cEu;
        for (i = 0, l = cEC.length; i < l; i++) {
            bo = cEC[i], cEu = bo.children[0].innerText;
            V.bHn(bo, "mouseover", this.czi.A(this, true, bo, cEu));
            V.bHn(bo, "mouseout", this.czi.A(this, false, bo, cEu))
        }
    };
    eA.czi = function(gu, CL, df, bHl) {
        if (!!gu) {
            loft.g.dousercard(CL, 0, gu, {tag: df,jst: "m-usercard-jst-2",cardHeight: 205})
        } else {
            loft.g.dousercard(CL, 0, gu)
        }
        V.bb(bHl)
    };
    p.bRK = C();
    bIO = p.bRK.bi(p.iL, true);
    bIO.bq = function() {
        this.bHq("m-track-jst-1");
        var bHk = E.bj(this.Y, this.eO), Q = 0;
        this.ceD = bHk[Q++];
        this.bRL = bHk[Q++];
        this.fN = bHk[Q++];
        this.ZF = bHk[Q++];
        this.fz = bHk[Q++];
        this.ZG = bHk[Q++];
        this.Jx = bHk[Q++];
        this.btV = bHk[Q++];
        this.NY = bHk[Q++];
        this.ZL = bHk[Q++];
        this.CY = bHk[Q++];
        this.JC = bHk[Q++];
        this.dg = bHk[Q++];
        this.er = bHk[Q++];
        this.bUX = bHk[Q++];
        this.NU = bHk[Q++];
        this.NT = bHk[Q++];
        this.NV = bHk[Q++];
        V.bHn(this.NU, "click", eA.cki.A(this));
        V.bHn(this.NT, "click", this.btM.A(this));
        V.bHn(this.NV, "click", this.bZS.A(this));
        this.dw = {oncollapse: this.btB.A(this)}
    };
    bIO.clw = eA.clw;
    bIO.clv = eA.clv;
    bIO.btB = function() {
        var DJ = E.jO(this.Y), NN = document.documentElement.scrollTop || document.body.scrollTop;
        if (DJ < NN) {
            document.documentElement.scrollTop = document.body.scrollTop = DJ
        }
    };
    bIO.Du = function(gu) {
        if (!!gu)
            E.ba(this.fN.parentNode.parentNode, "isay-open");
        else
            E.bf(this.fN.parentNode.parentNode, "isay-open")
    };
    bIO.bHu = function(I) {
        this.bHn("ondelete", I.ondelete || F);
        this.bHn("onupdate", I.onitemupdate || F);
        this.bHn("oncontripass", I.oncontripass || F);
        this.tO = I.targetBlogId || 0;
        this.sP = I.recommenderRole || 0;
        this.bbp = I.rtagRank || 0;
        this.rH = !!I.expand;
        this.ciD = I.topconfig || P("loft.c").crN || {};
        this.cix = {targetBlogInfo: this.ciD.targetBlogInfo,flashSessionCookie: this.ciD.v,lastCCType: this.ciD.lastCCType,postOverNum: this.ciD.postOverNum,blogList: this.ciD.blogList,ue_cfg_develop: this.ciD.ue_cfg_develop,ue_js_version: this.ciD.ue_js_version,allowUploadDIYMusic: !!this.ciD.allowUploadDIYMusic};
        this.cix.mydomains = this.ciD.mydomains || {};
        this.cmK = !!I.newpublish
    };
    bIO.ce = function(bHm) {
        this.bHp = bHm;
        this.btx(bHm.post || {});
        var bN = bHm.post, bp = loft.x.bM(bN.blogInfo.blogName), io = loft.c.jg, i = 0, l = io.length, ND = false;
        if (!!bN.queuePost && !!bN.queuePost.publishTime) {
            var bHG = U.ws(bN.queuePost.publishTime, "MM/dd HH:mm").split(" ");
            this.bRL.innerHTML = "<strong>" + bHG[0] + "</strong>" + bHG[1]
        }
        for (; i < l; i++) {
            if (io[i].blogId === bN.blogId) {
                if (io[i].role === 1 || io[i].role === 10 || bN.publisherUserId === loft.c.cm.userId) {
                    ND = true;
                    break
                }
            }
        }
        if (!!ND) {
            if (bN.valid == 15) {
                E.hE(this.bUX)
            } else {
                E.ba(this.bRL, "time-1");
                this.Y.id = "qpostid" + bN.id;
                E.ba(this.Y, "canDragging")
            }
        } else {
            E.hE(this.bUX.parentNode);
            if (bN.valid == 16) {
                E.ba(this.bRL, "time-1");
                this.Y.id = "qpostid" + bN.id;
                E.ba(this.Y, "canDragging")
            }
        }
        if (this.tO === bN.blogId) {
            this.fz.style.display = "none"
        } else {
            this.fz.href = this.Jq.parentNode.href = bp;
            this.fz.innerText = bN.blogInfo.blogNickName || ""
        }
        if (!!bN.citeParentBlogId) {
            this.ZG.style.display = this.Jx.style.display = "";
            this.Jx.innerText = bN.citeParentBlogInfo.blogNickName || "";
            this.Jx.href = loft.x.GX(bN.citeParentBlogInfo.blogName, bN.citeParentPostId, bN.citeParentBlogId);
            if (bN.citeRootBlogId != bN.citeParentBlogId && !!bN.citeRootBlogInfo) {
                this.btV.style.display = this.NY.style.display = "";
                this.NY.innerText = bN.citeRootBlogInfo.blogNickName || "";
                this.NY.href = loft.x.GX(bN.citeRootBlogInfo.blogName, bN.citeRootPostId, bN.citeRootBlogId)
            }
        } else {
            this.ZG.style.display = this.Jx.style.display = "none";
            if (this.tO === bN.blogId)
                this.fz.parentNode.style.display = "none"
        }
        this.xs = !!this.bHp.shared;
        if (!!this.bHp.sharerBlogInfo) {
            var bcu = this.bHp.sharerBlogInfo;
            this.JC.innerText = bcu.blogNickName || "";
            this.JC.href = loft.x.bM(bcu.blogName);
            this.CY.style.display = "";
            this.CY.parentNode.style.display = ""
        }
        var bcv = loft.x.bM() + "/reblog/" + bN.permalink || "";
        this.mO = bN.postCount || O;
        this.btv(bN.tag, bN.recommendTags);
        this.NU.href = loft.x.bM() + "/edit/" + bN.permalink;
        this.fN.style.display = "none";
        this.ZF.style.display = "";
        var bcC = !!bN.isPublished && bN.allowView >= 100;
        this.ZL.style.display = bcC ? "" : "none";
        if (bcC) {
            this.ZL.parentNode.style.display = ""
        }
    };
    bIO.cK = function() {
        this.NH = this.iG.db(this.NH);
        p.bRK.bw.cK.call(this)
    };
    bIO.btx = function(bN) {
        var bcd, clz = this.iG;
        bN.type = bN.type || 1;
        switch (bN.type) {
            case 1:
                this.iG = p.DU;
                break;
            case 2:
                try {
                    bcd = U.fp(bN.photoLinks).length
                } catch (e) {
                }
                this.iG = bcd > 1 ? p.EV : p.NG;
                break;
            case 3:
                this.iG = p.qT;
                break;
            case 4:
                this.iG = p.bLR;
                break;
            default:
                this.iG = null
        }
        try {
            if (!!this.iG) {
                this.dw.expand = !!this.rH;
                if (!!this.NH) {
                    if (this.NH instanceof this.iG) {
                        this.NH.ce(bN)
                    } else {
                        clz.db(this.NH);
                        this.NH = this.iG.bG(bN, this.dg, this.dw)
                    }
                } else {
                    this.NH = this.iG.bG(bN, this.dg, this.dw)
                }
                if (!!this.rH && bN.type == 2)
                    this.NF()
            }
        } catch (e) {
            alert(e)
        }
    };
    bIO.NF = function() {
        this.NH.hS(null, true)
    };
    bIO.btM = function(bHl) {
        V.bb(bHl);
        this.bh("ondelete", this.bHp.post.id || 0, this.bHp.post.blogId || 0)
    };
    bIO.bZS = function(bHl) {
        V.bb(bHl);
        this.bh("oncontripass", this.bHp.post.id || 0, this.bHp.post.blogId || 0)
    };
    bIO.btv = function(df, bcQ) {
        df = U.ew(df) || "";
        if (!df || !df.length) {
            this.er.style.display = "none";
            return
        }
        this.er.style.display = "";
        var ck = df.split(","), i = 0, l = ck.length, fv = [], Q, Fh = !!bcQ ? bcQ.slice(0) : null;
        for (; i < l; i++) {
            Q = -1;
            if (!!Fh && !!Fh.length) {
                Q = U.fO(Fh, ck[i].toLowerCase())
            }
            if (Q == -1) {
                fv.push('<span class="opti"><a href="' + loft.x.bM() + "/tag/" + ck[i] + '"><span>' + ck[i] + "</span></a></span>")
            } else {
                Fh.splice(Q, 1);
                fv.unshift('<span class="opti"><a title="日志在该标签下列为精选" class="w-jing" href="' + loft.x.bM() + "/tag/" + ck[i] + "?first=" + this.bHp.post.permalink + '"><span>' + ck[i] + "</span></a></span>")
            }
        }
        this.er.innerHTML = fv.join("")
    };
    p.DU = C();
    xO = p.DU.bi(p.iL, true);
    xO.bq = function() {
        this.bHq("m-track-jst-text");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.hL = bHk[i++];
        this.bD = bHk[i++];
        this.jS = bHk[i++];
        this.cws = bHk[i++];
        this.fN = bHk[i++];
        this.Fj = this.hS.A(this);
        V.bHn(this.bD, "click", this.Fj);
        V.bHn(this.fN, "click", this.Fj)
    };
    xO.hS = function(bHl) {
        var fZ = p.DU.bw.hS.call(this, bHl);
        if (!!fZ) {
            this.NC(true);
            this.jS.style.display = "none";
            this.cws.style.display = "block"
        } else {
            this.NC(false);
            this.cws.style.display = "none";
            this.jS.style.display = "block"
        }
    };
    xO.NC = function(NB) {
        NB = NB || !this.bD.src;
        this.bD.parentNode.parentNode.style.display = !!NB ? "none" : ""
    };
    xO.bde = function() {
        this.jS.innerHTML = this.bHp.digest || ""
    };
    xO.ce = function(bHm) {
        p.DU.bw.ce.call(this, bHm);
        var qM = U.fp(bHm.firstImageUrl);
        if (!!qM && qM.length > 1 && !!qM[1]) {
            this.bD.parentNode.parentNode.style.maxHeight = "300px";
            E.oT(this.bD.parentNode.parentNode, "height", 300, false);
            this.bD.parentNode.parentNode.style.maxWidth = this.bD.style.maxWidth = "164px";
            this.bD.parentNode.parentNode.style.width = this.bD.style.width = "auto";
            E.oT(this.bD, "width", 164, false);
            E.oT(this.bD.parentNode.parentNode, "width", 164, false);
            this.bD.src = qM[1];
            this.CK();
            this.NC(false)
        } else {
            this.NC(true)
        }
        this.hL.innerText = bHm.title || "";
        this.hL.style.display = !!bHm.title ? "" : "none";
        this.bde();
        this.cws.innerHTML = bZY(this.bHp) || "";
        if (this.cws.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cws.getElementsByTagName("img"), i = 0, l = dN.length;
            for (; i < l; V.bHn(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++)
                ;
        }
        this.cwA(this.jS);
        this.cwA(this.cws)
    };
    p.NG = C();
    uH = p.NG.bi(p.iL, true);
    uH.bq = function() {
        this.bHq("m-track-jst-sphoto");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.bD = bHk[i++];
        this.oW = this.bD.parentNode.parentNode.parentNode;
        this.Fp = bHk[i++];
        this.NA = bHk[i++];
        this.jS = bHk[i++];
        this.cws = bHk[i++];
        this.fN = bHk[i++];
        var fZ = this.hS.A(this);
        V.bHn(this.bD, "click", fZ);
        V.bHn(this.Fp, "click", fZ);
        V.bHn(this.fN, "click", fZ);
        V.bHn(this.NA, "click", this.xi.A(this));
        V.bHn(this.oW, "mouseover", this.bdn.Eo(this, true));
        V.bHn(this.oW, "mouseout", this.bdn.Eo(this, false))
    };
    uH.bdn = function(bHl, gu) {
        this.IU(bHl, !!gu, this.eU.orign || "", this.eU.ow || 0, this.eU.oh || 0)
    };
    uH.hS = function(bHl, bti) {
        if (!!this.rH && !bti) {
            this.xi(bHl);
            return
        }
        var fZ = p.NG.bw.hS.call(this, bHl);
        this.xK(fZ);
        if (!!fZ) {
            if (this.eU.ow > rS) {
                this.NA.parentNode.style.display = "";
                this.bD.style.width = rS + "px"
            } else {
                this.bD.style.width = this.eU.ow + "px"
            }
            this.oW.style.width = "auto";
            this.Ny(true)
        } else {
            if (this.eU.ow <= 145) {
                this.oW.style.width = this.bD.style.width = this.eU.ow + "px"
            } else {
                this.oW.style.width = this.bD.style.width = CE + "px"
            }
            this.NA.parentNode.style.display = "none";
            this.Ny()
        }
    };
    uH.Ny = function(bth) {
        if (!!this.btg && !bth) {
            this.Fp.innerText = this.eU.ow < 164 ? "" : "查看完整图片";
            this.Fp.parentNode.style.display = "";
            this.oW.style.height = Iw + "px"
        } else {
            this.Fp.parentNode.style.display = "none";
            this.oW.style.height = "auto"
        }
    };
    uH.xi = function(bHl) {
        V.bb(bHl);
        if (this.eU.ow <= rS)
            return;
        P("loft.w").nX.bG(document.body, {singleton: true,photos: [this.eU],cctype: this.bHp.cctype || 0,contextValue: loft.x.Rh(this.bHp),authorId: this.bHp.blogId})
    };
    uH.ce = function(bHm) {
        p.DU.bw.ce.call(this, bHm);
        var qM = U.fp(bHm.firstImageUrl);
        this.eU = U.fp(bHm.photoLinks)[0];
        if (!this.eU) {
            return
        }
        if (!!qM && qM.length > 1 && !!qM[1]) {
            this.bD.src = qM[1];
            if (this.eU.ow <= 145) {
                this.oW.style.width = this.bD.style.width = this.eU.ow + "px"
            } else {
                this.oW.style.width = this.bD.style.width = CE + "px"
            }
            this.CK()
        } else {
            this.oW.style.display = "none"
        }
        this.jS.innerHTML = bHm.digest || "";
        this.cws.innerHTML = bZY(this.bHp) || "";
        if (this.cws.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cws.getElementsByTagName("img"), i = 0, l = dN.length;
            for (; i < l; V.bHn(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++)
                ;
        }
        this.cwA(this.jS);
        this.cwA(this.cws);
        this.btg = this.eU.oh > Iw * this.eU.ow / CE;
        this.Ny()
    };
    p.EV = C();
    xN = p.EV.bi(p.iL, true);
    xN.bq = function() {
        this.bHq("m-track-jst-mphoto");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.bLK = bHk[i++];
        this.jS = bHk[i++];
        this.cws = bHk[i++];
        this.fN = bHk[i++];
        V.bHn(this.bLK, "click", this.hS.A(this));
        V.bHn(this.fN, "click", this.hS.A(this));
        V.bHn(this.bLK, "mouseover", this.IU.Eo(this, true));
        V.bHn(this.bLK, "mouseout", this.IU.Eo(this, false))
    };
    xN.xi = function(Q) {
        P("loft.w").nX.bG(document.body, {singleton: true,index: Q || 0,photos: this.Nx,cctype: this.bHp.cctype || 0,contextValue: loft.x.Rh(this.bHp),authorId: this.bHp.blogId})
    };
    xN.ce = function(bHm) {
        var wp = U.fp(bHm.photoLinks) || O, bta = U.fp(bHm.photoCaptions) || O, i, l;
        this.Nx = wp || [];
        p.EV.bw.ce.call(this, bHm);
        this.bdz = U.cA(6);
        var g = P("loft.m.g.mp" + this.bdz);
        g.photoshow = this.xi.A(this);
        this.CK();
        this.jS.innerHTML = bHm.digest || "";
        this.cws.innerHTML = bZY(this.bHp) || "";
        if (this.cws.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cws.getElementsByTagName("img"), i = 0, l = dN.length;
            for (; i < l; V.bHn(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++)
                ;
        }
        this.cwA(this.jS);
        this.cwA(this.cws);
        for (i = 0, l = wp.length; i < l; i++) {
            wp[i].ow = wp[i].ow || 280;
            wp[i].oh = wp[i].oh || 500
        }
        this.bLK.innerHTML = E.dG("m-track-jst-mphoto-photo", {expand: !!this.rH,spescape: loft.x.bzz,photos: wp,captions: bta,gid: this.bdz,iself: this.bIH});
        this.DY = E.dE(this.bLK);
        if (!!this.DY && !!this.DY[1]) {
            if (!this.bIH) {
                loft.w.Ie.Qq(this.DY[1].getElementsByTagName("img"), E.jO(this.bLK), {diff: 100})
            }
        }
        this.bdC();
        if (!!this.chq) {
            this.rH = true
        }
    };
    xN.bHu = function(I) {
        p.EV.bw.bHu.call(this, I);
        this.bIH = I.iself;
        this.chq = I.expandPages;
        if (!!this.chq) {
            this.rH = false
        }
    };
    xN.hS = function(bHl, bti) {
        V.bb(bHl);
        if (!!this.rH && !bti) {
            this.xi();
            return
        }
        var X = V.be(bHl), fZ;
        if (!X || X.tagName == "IMG" || X.className == "totalnum" || X.parentNode.className == "more") {
            fZ = p.EV.bw.hS.call(this);
            this.xK(fZ);
            if (!!this.DY && !!this.DY[1]) {
                this.DY[0].style.display = !!fZ ? "none" : "";
                this.DY[1].style.display = !!fZ ? "" : "none"
            }
            this.bdC(!!fZ)
        }
    };
    xN.bdC = function(qF) {
        if (!this.DY || !this.DY[0])
            return;
        var bsY = this.Nx[0].oh > Iw * this.Nx[0].ow / CE;
        if (bsY && !qF) {
            this.DY[0].style.height = Iw + "px"
        } else {
            this.DY[0].style.height = "auto"
        }
    };
    p.qT = C();
    hr = p.qT.bi(p.iL, true);
    hr.bq = function() {
        this.bHq("m-track-jst-music");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.bD = bHk[i++];
        this.jS = bHk[i++];
        this.wr = bHk[i++];
        this.qG = bHk[i++];
        this.bxn = bHk[i++];
        this.beg = bHk[i++];
        this.cwR = bHk[i++];
        this.cwF = bHk[i++];
        this.fN = bHk[i++];
        var fZ = this.hS.A(this);
        V.bHn(this.fN, "click", fZ);
        V.bHn(this.bD.parentNode, "click", fZ);
        V.bHn(this.qG, "click", this.bsW.A(this));
        V.bHn(this.bD, "error", this.bsV.A(this))
    };
    hr.bsV = function(bHl) {
        var fV = this.bdK(2);
        if (!!fV && this.bD.src !== fV)
            this.bD.src = fV
    };
    hr.ce = function(bHm) {
        p.qT.bw.ce.call(this, bHm);
        this.lg(true);
        this.CK();
        var cO, bGm;
        try {
            cO = U.fp(bHm.embed)
        } catch (e) {
            cO = U.qr(bHm.embed)
        }
        if (!cO) {
            return
        }
        this.FF = cO;
        this.bsP = cO.album_logo || "";
        this.dJ = cO.type || "";
        var bdU = this.bdK(4);
        if (!!bdU)
            this.bD.src = bdU;
        this.bD.parentNode.parentNode.style.display = !!bdU ? "" : "none";
        this.cwR.innerHTML = bHm.digest || "";
        this.cwF.innerHTML = bZY(this.bHp) || "";
        if (this.cwF.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cwF.getElementsByTagName("img");
            for (var l = dN.length; l--; ) {
                E.oT(dN[l], "width", 500);
                V.bHn(dN[l], "click", this.hS.A(this))
            }
        }
        this.cwA(this.cwR);
        this.cwA(this.cwF);
        this.bxn.innerText = this.CJ(cO.song_name || "");
        if (!!cO.artist_name) {
            this.beg.innerText = " - " + this.CJ(cO.artist_name || "")
        }
        this.bsO = "http://img.xiami.com/widget/0_" + cO.song_id + "_/singlePlayer.swf";
        if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
            E.dt(this.qG, "w-player-2", "w-player-1")
        } else if (this.dJ == "cloudmusic") {
            E.dt(this.qG, "w-player-1", "w-player-2")
        } else {
            E.bf(this.qG, "w-player-1");
            E.bf(this.qG, "w-player-2")
        }
    };
    hr.CJ = function(tM) {
        try {
            var bAU = tM.replace(Jz, "%20");
            return decodeURIComponent(bAU)
        } catch (e) {
            return tM
        }
    };
    hr.bsW = function(bHl) {
        V.bb(bHl);
        this.lg()
    };
    hr.lg = function(go) {
        p.qT.bw.lg.call(this, !!go);
        var DZ, dc;
        if (!go) {
            if (!this.gi) {
                if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
                    DZ = "autoPlay=true&url=" + this.FF.listenUrl + "&title=" + this.CJ(this.FF.song_name || "");
                    dc = E.dG("m-track-jst-flash", {src: location.dirhost + "/rsc/swf/blog_music_player.swf",width: 257,height: 33,flashvars: DZ})
                } else if (this.dJ == "cloudmusic") {
                    DZ = "loop=false&autoPlay=true&url=" + this.FF.listenUrl + "&trackId=" + this.FF.song_id + "&trackName=" + (this.FF.song_name || "") + "&artistName=" + (this.FF.artist_name || "");
                    dc = E.dG("m-track-jst-flash", {src: location.cloudMusicFlashUrl,width: 257,height: 34,flashvars: DZ})
                } else {
                    dc = E.dG("m-track-jst-flash", {src: this.bsO,width: 257,height: 33,flashvars: ""})
                }
                this.gi = E.eY(dc)
            }
            this.wr.appendChild(this.gi);
            this.qG.style.display = "none"
        } else {
            E.hE(this.gi);
            delete this.gi;
            this.qG.style.display = ""
        }
    };
    hr.hS = function(bHl) {
        V.bb(bHl);
        var rP = E.cr(this.Y, "m-icnt-all");
        if (rP) {
            E.bf(this.Y, "m-icnt-all")
        } else {
            E.ba(this.Y, "m-icnt-all")
        }
        if (!rP) {
            this.bD.style.maxWidth = rS + "px";
            this.bD.style.width = "auto"
        } else {
            this.bD.style.width = CE + "px";
            this.bh("oncollapse")
        }
        this.xK(!rP);
        this.Of(!rP)
    };
    hr.xK = function(fZ) {
        var bF = bZY(this.bHp);
        if (!bF || !this.bHp.digest)
            return;
        if (!!fZ) {
            this.cwR.style.display = "none";
            this.cwF.style.display = "block"
        } else {
            this.cwF.style.display = "none";
            this.cwR.style.display = "block"
        }
    };
    hr.bdK = function(by) {
        if (this.dJ == "diy" || this.dJ == "copyright" || this.dJ == "music163") {
            if (by == 2)
                return this.FF.small_cover || "";
            else
                return this.FF.middle_cover || ""
        } else if (this.dJ == "cloudmusic") {
            if (by == 2) {
                return this.bsP
            } else {
                return this.bsP.replace(/\?.+$/, "")
            }
        } else {
            return this.bsP.replace(/^(.+)[\d]\.jpg$/, "$1" + by + ".jpg")
        }
    };
    p.bLR = C();
    xM = p.bLR.bi(p.iL, true);
    xM.bq = function() {
        this.bHq("m-track-jst-video");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.bD = bHk[i++];
        this.jS = bHk[i++];
        this.cws = bHk[i++];
        this.fN = bHk[i++];
        V.bHn(this.fN, "click", this.hS.A(this));
        V.bHn(this.bD.parentNode, "click", this.hS.A(this))
    };
    xM.ce = function(bHm) {
        p.bLR.bw.ce.call(this, bHm);
        if (!!this.gi) {
            this.lg(true)
        }
        this.CK();
        var cO;
        try {
            cO = U.fp(bHm.embed)
        } catch (e) {
            cO = U.qr(bHm.embed)
        }
        if (!cO) {
            return
        }
        this.jS.innerHTML = bHm.digest || "";
        this.cws.innerHTML = bZY(this.bHp) || "";
        if (this.cws.nodeType == Node.ELEMENT_NODE) {
            var dN = this.cws.getElementsByTagName("img"), i = 0, l = dN.length;
            for (; i < l; V.bHn(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++)
                ;
        }
        this.cwA(this.jS);
        this.cwA(this.cws);
        this.bD.src = cO.video_img_url || location.dirhost + "/rsc/img/video/blank.png";
        this.Nu = this.Nt(cO.flashurl)
    };
    xM.hS = function(bHl) {
        V.bb(bHl);
        this.lg()
    };
    xM.Nt = function(fV) {
        if (/^(http:\/\/www\.tudou\.com\/[^\/]+\/[^\/]+?\/)([^\/]+?\/)?(v\.swf)$/i.test(fV)) {
            if (!RegExp.$2) {
                return RegExp.$1 + "&autoPlay=true/" + RegExp.$3
            } else {
                return RegExp.$1 + "$autoPlay=true&" + RegExp.$2 + RegExp.$3
            }
        }
        return fV
    };
    xM.lg = function(go) {
        var fZ = p.bLR.bw.hS.call(this, null, !!go);
        this.xK(fZ);
        go = !fZ;
        p.bLR.bw.lg.call(this, go);
        if (!go) {
            if (!this.gi) {
                this.gi = E.eY(E.dG("m-track-jst-flash", {flashvars: "isAutoPlay=true",src: this.Nu,width: rS,height: 400}))
            }
            this.bD.parentNode.parentNode.appendChild(this.gi);
            this.bD.parentNode.style.display = "none"
        } else {
            E.hE(this.gi);
            delete this.gi;
            this.bD.parentNode.style.display = ""
        }
    };
    p.bMg = C();
    bIE = p.bMg.bi(p.iL, true);
    bIE.bq = function() {
        this.bHq("m-track-jst-askanswer");
        var bHk = E.bj(this.Y, this.eO), i = 0;
        this.bNV = bHk[i++];
        this.bVq = bHk[i++];
        this.bZR = bHk[i++];
        this.bVu = bHk[i++];
        this.bNZ = bHk[i++];
        this.bZQ = bHk[i++];
        this.bPF = bHk[i++];
        this.bD = bHk[i++];
        this.jS = bHk[i++];
        this.fN = bHk[i++];
        this.bMk = bHk[i++];
        this.bZP = bHk[i++];
        this.bZO = bHk[i++];
        this.bLF = bHk[i++];
        this.bZN = bHk[i++];
        this.bZM = bHk[i++];
        this.bZL = bHk[i++];
        this.bZK = bHk[i++];
        this.bZJ = bHk[i++];
        this.Fj = this.hS.A(this);
        V.bHn(this.bD, "click", this.Fj);
        V.bHn(this.fN, "click", this.Fj);
        V.bHn(this.bZO, "click", this.bLl.A(this));
        V.bHn(this.bZL, "click", this.bLl.A(this));
        V.bHn(this.bZM, "click", this.bQf.A(this))
    };
    bIE.bHu = function(I) {
        p.bMg.bw.bHu.call(this, I);
        this.bHn("ondelask", I.ondelask || F);
        this.bHn("onaddblack", I.onaddblack || F)
    };
    bIE.bLl = function(bHl) {
        V.bb(bHl);
        loft.w.eD.bE({parent: document.body,title: "删除问答",c1: "确定删除这个问答吗？",onok: function() {
            this.bZI(this.bHp.id || "", this.bHp.blogId || "")
        }.A(this)})
    };
    bIE.bZI = function(bJx, bc) {
        J.br(location.dwr, "PostBean", "deleteAsk", bJx, bc, this.bZH.A(this, bJx, bc))
    };
    bIE.bZH = function(bJx, bc, bZ) {
        if (!!bZ) {
            this.bh("ondelask", bJx, bc)
        } else {
        }
    };
    bIE.bQf = function(bHl) {
        V.bb(bHl);
        this.bh("onaddblack", this.bHp.publisherMainBlogInfo.blogName || "", this.bHp.publisherMainBlogInfo.blogNickName || "")
    };
    bIE.hS = function(bHl) {
        var fZ = p.bMg.bw.hS.call(this, bHl);
        if (!!fZ) {
            this.NC(true);
            this.jS.innerHTML = bZY(this.bHp);
            if (this.jS.nodeType == Node.ELEMENT_NODE) {
                var dN = this.jS.getElementsByTagName("img"), i = 0, l = dN.length;
                for (; i < l; V.bHn(dN[i], "click", this.Fj), E.oT(dN[i], "width", 500), i++)
                    ;
            }
        } else {
            if (this.jS.nodeType == Node.ELEMENT_NODE) {
                var dN = this.jS.getElementsByTagName("img"), i = 0, l = dN.length;
                for (; i < l; V.iJ(dN[i], "click", this.Fj), i++)
                    ;
            }
            this.NC(false);
            this.bde()
        }
    };
    bIE.NC = function(NB) {
        NB = NB || !this.bD.src;
        this.bD.parentNode.parentNode.style.display = !!NB ? "none" : ""
    };
    bIE.bde = function() {
        this.jS.innerHTML = this.bHp.digest || ""
    };
    bIE.ce = function(bHm) {
        if (!bHm)
            return;
        p.bMg.bw.ce.call(this, bHm);
        if (!!bHm.answer) {
            E.bf(this.Y, "js-askItem");
            this.bZG(bHm)
        } else {
            E.ba(this.Y, "js-askItem");
            this.bZF(bHm)
        }
        this.bde()
    };
    bIE.bZG = function(bHm) {
        if (!!bHm && !!bHm.isPublished && bHm.allowView == 0) {
            this.bVq.innerText = "回答并发布"
        } else {
            this.bVq.innerText = "仅回答"
        }
        var qM = U.fp(bHm.firstImageUrl);
        if (!!qM && qM.length > 1 && !!qM[1]) {
            this.bD.parentNode.parentNode.style.maxHeight = "300px";
            E.oT(this.bD.parentNode.parentNode, "height", 300, false);
            this.bD.parentNode.parentNode.style.maxWidth = this.bD.style.maxWidth = "164px";
            this.bD.parentNode.parentNode.style.width = this.bD.style.width = "auto";
            E.oT(this.bD, "width", 164, false);
            E.oT(this.bD.parentNode.parentNode, "width", 164, false);
            this.bD.src = qM[1];
            this.CK()
        } else {
            this.NC(true)
        }
        if (!!bHm.canAsk) {
            this.bMk.parentNode.style.display = ""
        } else {
            this.bMk.parentNode.style.display = "none"
        }
        if (!!bHm.blogInfo) {
            this.bNV.href = loft.x.bM(bHm.blogInfo.blogName);
            this.bNV.innerText = bHm.blogInfo.blogNickName || bHm.blogInfo.blogName || "";
            this.bMk.style.display = "";
            this.bMk.href = "http://www.lofter.com/ask/" + bHm.blogInfo.blogName + "/new/#from=dashboard";
            this.bZP.innerText = "向 " + (bHm.blogInfo.blogNickName || bHm.blogInfo.blogName || "") + " 提问";
            V.bHn(this.bNV, "mouseover", this.cwq.A(this, true, this.bNV, this.bHp.blogInfo.blogId));
            V.bHn(this.bNV, "mouseout", this.cwq.A(this, false, this.bNV, this.bHp.blogInfo.blogId))
        } else {
            this.bNV.href = "#";
            this.bNV.innerText = "";
            this.bMk.style.display = "none"
        }
        this.bZR.innerHTML = loft.x.bzz(bHm.question || "");
        if (!bHm.anonymous && !!bHm.questionerBlogInfo) {
            this.bPF.parentNode.style.display = "none";
            this.bNZ.parentNode.style.display = "block";
            this.bVu.src = loft.x.eK(bHm.questionerBlogInfo.bigAvaImg, 20);
            this.bNZ.innerText = bHm.questionerBlogInfo.blogNickName || bHm.questionerBlogInfo.blogName || "匿名";
            this.bNZ.href = this.bVu.parentNode.href = loft.x.bM(bHm.questionerBlogInfo.blogName)
        } else {
            this.bNZ.parentNode.style.display = "none";
            this.bPF.parentNode.style.display = "block";
            this.bZQ.src = "/rsc/img/ava/30.png";
            this.bPF.innerText = "匿名提问"
        }
    };
    bIE.bZF = function(bHm) {
        if (!bHm.anonymous && !!bHm.questionerBlogInfo) {
            E.bf(this.bLF.parentNode.parentNode, "js-anonyask");
            this.bLF.href = loft.x.bM(bHm.questionerBlogInfo.blogName);
            this.bLF.innerText = bHm.questionerBlogInfo.blogNickName || bHm.questionerBlogInfo.blogName || "匿名";
            V.bHn(this.bLF, "mouseover", this.cwq.A(this, true, this.bLF, bHm.questionerBlogInfo.blogId));
            V.bHn(this.bLF, "mouseout", this.cwq.A(this, false, this.bLF, bHm.questionerBlogInfo.blogId))
        } else {
            this.bLF.removeAttribute("href");
            this.bLF.innerText = "匿名";
            E.ba(this.bLF.parentNode.parentNode, "js-anonyask")
        }
        this.bZN.innerHTML = loft.x.bzz(bHm.question || "");
        this.bZK.href = "http://www.lofter.com/answer/" + bHm.blogId + "/" + bHm.id;
        this.bZJ.href = "http://www.lofter.com/answer/" + bHm.blogId + "/" + bHm.id + "#type=publish"
    }
})();
(function() {
    var p = P("loft.w"), zF, zB, zt;
    var JV = '<div class="m-layer3"><div class="layerc"><div class="layerbgt zflg"></div><div class="layerbgm"><div class="layert" style="cursor:default;"><a href="#" class="w-close2 zflg">关闭</a></div><div class="zflg"></div></div><div class="layerbgb"></div></div></div>';
    var cc = function() {
        var bHk = E.bj(this.Y, "zflg");
        this.yh = bHk[0];
        this.fP = bHk[1];
        this.nJ = bHk[2];
        E.DX(bHk[1].parentNode);
        V.bHn(this.fP, "click", this.rR.A(this));
        P(N.ui).fx("#<uispace>{border:none;}", this.cU())
    };
    p.zq = C();
    zt = p.zq.bi(p.nr, true);
    zt.cM = function() {
        return JV
    };
    zt.cU = function() {
        return "a-scale a-scale-layer"
    };
    zt.bE = function() {
        p.zq.bw.bE.call(this, arguments);
        E.ba(this.Y, "a-scale-do")
    };
    zt.rR = function(bHl) {
        if (!!bHl)
            V.bb(bHl);
        E.bf(this.Y, "a-scale-do");
        window.setTimeout(p.zq.bw.rR.A(this), 300)
    };
    p.ED = C();
    zF = p.ED.bi(p.fr, true);
    zF.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "";
        I.wclass = p.zq;
        this.bHq(bl, I);
        this.ccm(this.bXB.A(this))
    };
    zF.bXB = function() {
        if (!!this.cyZ) {
            try {
                this.cyZ()
            } catch (e) {
            }
        }
    };
    zF.bz = function(I) {
        if (!!I.title)
            this.ei.iI(I.title);
        this.bwL.href = "/regurs?target=" + encodeURIComponent(I.target);
        this.bwM.href = "/?target=" + encodeURIComponent(I.target);
        p.ED.bw.bz.call(this, I);
        this.cyZ = I.closeWinCallback
    };
    zF.cM = function() {
        return '<div class="layerm"><p class="f-fs2">登录LOFTER之后，你可以继续操作，还可以记录生活、<br>分享创作，找到志趣相投的朋友。</p><p class="f-fs2 s-fc1">网易通行证帐号可直接登录。</p></div><div class="layerb"><a href="/regurs" class="w-bbtn w-bbtn-0 wtag">注  册</a><a href="/" class="w-bbtn wtag">登  录</a></div>'
    };
    zF.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bwL = bHk[0];
        this.bwM = bHk[1]
    };
    p.EC = C();
    zB = p.EC.bi(p.fr, true);
    zB.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "";
        I.wclass = p.zq;
        this.bHq(bl, I);
        this.ccm(this.bXB.A(this))
    };
    zB.bXB = function() {
        if (!!this.cyZ) {
            try {
                this.cyZ()
            } catch (e) {
            }
        }
    };
    zB.bz = function(I) {
        if (!!I.title)
            this.ei.iI(I.title);
        this.bwN.innerText = "HI，" + I.email;
        this.Bx.href = "/reg?target=" + encodeURIComponent(I.target);
        p.EC.bw.bz.call(this, I);
        this.cyZ = I.closeWinCallback
    };
    zB.cM = function() {
        return '<div class="layerm"><p class="f-fs3 s-fc12 wtag">HI，dingding@163.com</p><p class="f-fs2">快速激活LOFTER，你可以继续操作，还可以记录生活、<br>分享创作，找到志趣相投的朋友。</p></div><div class="layerb"><a href="/reg" class="w-bbtn w-bbtn-4 wtag">开始LOFTER之旅</a><a href="/logout.do" class="link s-fc2 f-fs1">更换注册邮箱</a></div>'
    };
    zB.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bwN = bHk[0];
        this.Bx = bHk[1]
    }
})();
(function() {
    var p = P("loft.w"), g = P("loft.g"), cwt, cyp = false, cxa = null, cxb = null, cEB = null, cv = null;
    g.dousercard = function(CL, dA, gu, cAa) {
        if (!!gu) {
            if (!!cv)
                return;
            cv = window.setTimeout(function(CL, dA) {
                if (CL === cxa) {
                    return
                } else {
                    cxa = CL
                }
                var I = cAa || {};
                I.elem = CL || null;
                I.blogId = dA || 0;
                if (!!I.tag) {
                    if (!cEB) {
                        cEB = new loft.w.cEA(document.body, I)
                    } else {
                        cEB.bnH(I)
                    }
                } else {
                    if (!cxb) {
                        cxb = new loft.w.cxp(document.body, I)
                    } else {
                        cxb.bnH(I)
                    }
                }
                window.clearTimeout(cv);
                cv = null
            }.A(this, CL, dA), 200)
        } else {
            window.clearTimeout(cv);
            cv = null
        }
    };
    p.cxp = C();
    cwt = p.cxp.bi(P(N.ut).gY);
    cwt.bq = function(bl, I) {
        var I = I || {};
        this.gF = I;
        this.cwH = {};
        this.bqC = "";
        this.xL = {left: 0,right: 0,top: 0,bottom: 0};
        this.fM = 0;
        this.gh = 0;
        this.cxq = this.cyo();
        this.cxr = !(B.da && document.documentMode < 8);
        this.bnH(I);
        V.bHn(document.body, "click", this.czZ.A(this))
    };
    cwt.cyo = function() {
        var s = document.createElement("p").style;
        return supportsTransitions = "transition" in s || "WebkitTransition" in s || "MozTransition" in s || "msTransition" in s || "OTransition" in s
    };
    cwt.bnH = function(I) {
        this.cyn = I.elem || null;
        this.bI = I.blogId || 0;
        this.FP = I.jst || "m-usercard-jst-1";
        this.czQ = I.boxWidth || 0;
        this.czY = I.boxHeight || 0;
        this.czP = I.isRepostDWR || false;
        this.cED = I.cardHeight || 220;
        this.cxc = this.bqC;
        this.cym(this.cyn);
        if (!!E.bj(document.body, "usercard").length > 0) {
            this.cwx = E.bj(document.body, "usercard")[0];
            this.bHu()
        } else {
            this.ccg();
            V.bHn(document.body, "mousemove", this.cxs.A(this))
        }
    };
    cwt.cym = function(CL) {
        var czJ;
        if (!!this.czQ && CL.offsetWidth < this.czQ) {
            czJ = CL.offsetWidth
        } else {
            czJ = this.czQ || CL.offsetWidth
        }
        var box = CL.getBoundingClientRect(), doc = CL.ownerDocument, body = doc.body, docElem = doc.documentElement, docWidth = docElem.clientWidth || body.clientWidth || 0, dn = box.top + (self.pageYOffset || docElem.scrollTop), cN = box.left + (self.pageXOffset || docElem.scrollLeft), czR = this.czY || CL.offsetHeight, cxt = cN + czJ, jk = "";
        this.gh = box.top > 300 ? dn - this.cED : dn + czR + 10;
        this.fM = docWidth - box.left - czJ / 2 - 370 > 100 ? cN + czJ / 2 - 86 : cN + czJ / 2 - 366;
        this.xL.left = this.fM < cN ? this.fM : cN;
        this.xL.right = this.fM + 450 < cxt ? cxt : this.fM + 450;
        if (box.top > 300) {
            this.xL.top = this.gh;
            this.xL.bottom = dn + czR
        } else {
            this.xL.top = dn;
            this.xL.bottom = this.gh + this.cED - 10
        }
        if (box.top > 300) {
            this.bqC = "up-";
            this.gh -= 23
        } else {
            this.bqC = "down-";
            this.gh += 7
        }
        if (docWidth - box.left - czJ / 2 - 370 > 100) {
            this.bqC += "left"
        } else {
            this.bqC += "right"
        }
    };
    cwt.cyl = function() {
        if (!!this.KP) {
            window.clearTimeout(this.KP)
        }
        if (!!this.cwH[this.bI] && !this.czP) {
            return
        } else {
            J.br(location.dwr, "BlogBean", "getBlogStatNew", this.bI, this.cxu.A(this, this.bI))
        }
    };
    cwt.cxu = function(dA, bHm) {
        window["_gaq"].push(["_trackEvent", "个人名片", "弹出量"]);
        if (this.bI !== dA)
            return;
        if (!this.cwH[this.bI] || !!this.czP) {
            this.cwH[this.bI] = bHm
        }
        var bHm = bHm, bV = bHm.postList;
        for (var i = 0, l = bV.length; i < l; i++) {
            if (bV[i].type > 1) {
                if (!!bHm.postList[i].firstImageUrl && U.fp(bHm.postList[i].firstImageUrl).length > 0) {
                    var qS = U.fp(bHm.postList[i].firstImageUrl)[0];
                    if (!!qS) {
                        if (bV[i].type == 3 && qS.indexOf("xiami") >= 0) {
                            qS = qS.replace("_1.jpg", "_4.jpg")
                        }
                        bV[i].showimages = "http://imgsize.ph.126.net/?imgurl=" + qS + "_130x98x1.jpg";
                        if (qS.indexOf("http://imgsize.ph.126.net/?imgurl") >= 0) {
                            bV[i].showimages = qS
                        }
                    }
                }
            }
        }
        var cxv = false, bkd = !!loft.c.cm.userId, czX = location.href;
        if (!bHm.FavoritePostCount && bHm.FavoritePostCount !== 0) {
            cxv = true
        }
        var bk = E.eY(E.dG("m-usercard-jst", {data: bHm,blogid: this.bI,posts: bV,issubblog: cxv,arrow: this.bqC,isLogin: bkd,localHref: czX,rankNum: bHm.askSetting + bHm.msgRank}));
        this.cwx.innerHTML = bk.innerHTML;
        var bHk = E.bj(this.cwx, "ftag"), i = 0;
        this.czS = bHk[i++];
        this.czH = bHk[i++];
        this.cww = bHk[i++];
        this.cwB = bHk[i++];
        this.zZ = E.be("ucmsg");
        this.czK = E.be("ucask");
        if (!!loft.c.cm.userId && loft.c.cm.userId !== this.bI) {
            if (!!bHm.following) {
                this.cww.style.display = ""
            } else {
                this.cwB.style.display = ""
            }
            V.bHn(this.cww, "mouseover", this.cxw.A(this, true));
            V.bHn(this.cww, "mouseout", this.cxw.A(this, false));
            V.bHn(this.cww, "click", this.bEZ.A(this));
            V.bHn(this.cwB, "click", this.kc.A(this))
        } else if (!loft.c.cm.userId) {
            this.cwB.style.display = "";
            V.bHn(this.cwB, "click", this.Fq.A(this))
        } else {
            this.czS.style.display = "none"
        }
        V.bHn(this.czS, "click", this.czW.A(this));
        if (!!this.zZ) {
            V.bHn(this.zZ, "click", this.czT.A(this, this.zZ.href, "msg"))
        }
        if (!!this.czK) {
            V.bHn(this.czK, "click", this.czT.A(this, this.czK.href, "ask"))
        }
    };
    cwt.Fq = function(bHl) {
        V.bb(bHl);
        var cG = loft.c.cm.visitorEmail;
        if (!!cG) {
            loft.w.EC.bE({parent: document.body,email: cG,target: location.href})
        } else {
            loft.w.ED.bE({parent: document.body,target: location.href})
        }
    };
    cwt.cxw = function(fW) {
        if (!!fW) {
            this.cww.children[0].innerText = "取消关注";
            E.ba(this.cww, "u-btn2-dis")
        } else {
            this.cww.children[0].innerText = "已关注";
            E.bf(this.cww, "u-btn2-dis")
        }
    };
    cwt.bEZ = function(bHl) {
        V.bb(bHl);
        J.br(location.dwr, "UserBean", "unFollowBlog", this.bI, this.nn.A(this, false))
    };
    cwt.kc = function(bHl) {
        V.bb(bHl);
        J.br(location.dwr, "UserBean", "followBlog", this.bI, this.nn.A(this, true))
    };
    cwt.nn = function(fW, bK) {
        window["_gaq"].push(["_trackEvent", "个人名片", "关注按钮点击"]);
        if (!!bK && bK > 0) {
            if (!!fW) {
                window["_gaq"].push(["_trackEvent", "个人名片", "关注量"]);
                this.cwB.style.display = "none";
                this.cww.style.display = "";
                E.bY("关注成功", true);
                this.cwH[this.bI].following = true
            } else {
                this.cww.style.display = "none";
                this.cwB.style.display = "";
                E.bY("取消关注成功", true);
                this.cwH[this.bI].following = false
            }
        } else {
            loft.x.cqi(bK)
        }
    };
    cwt.cAb = function(bHl) {
        var czL = V.be(bHl), yk = czL.href || czL.parentNode.href;
        if (!yk || yk.indexOf("lofter.com/post") < 0) {
            V.bb(bHl)
        }
        this.czO(false)
    };
    cwt.czW = function(bHl) {
        V.bb(bHl);
        this.czO(null)
    };
    cwt.czO = function(fW) {
        if (this.czH.style.display !== "none" || fW === false) {
            if (!this.cxq) {
                this.czH.style.display = "none"
            } else {
                this.czH.style.top = "50px";
                this.czH.style.opacity = "0";
                this.czH.style.filter = "alpha(opacity=0)";
                this.KP = setTimeout(function() {
                    this.czH.style.display = "none"
                }.A(this), 300)
            }
        } else {
            this.czH.style.display = "";
            setTimeout(function() {
                this.czH.style.top = "40px";
                this.czH.style.opacity = "1"
            }.A(this), 10)
        }
    };
    cwt.czT = function(yk, czU, bHl) {
        V.bb(bHl);
        if (czU === "msg") {
            window["_gaq"].push(["_trackEvent", "个人名片", "点击私信"])
        } else if (czU === "ask") {
            window["_gaq"].push(["_trackEvent", "个人名片", "点击提问"])
        }
        window.open(yk)
    };
    cwt.czZ = function(bHl) {
        if (E.bj(document.body, "usercard").length > 0 && this.czH.style.display !== "none") {
            var czL = V.be(bHl), yk = czL.href || czL.parentNode.href;
            if (!yk || yk.indexOf("lofter.com/post") < 0) {
                V.bb(bHl)
            }
            this.czO(false)
        }
    };
    cwt.ccg = function() {
        if (!E.bj(document.body, "usercard").length > 0) {
            var bk = E.eY(E.dG(this.FP, {arrow: this.bqC,tag: this.er || ""}));
            bk.style.top = this.gh + "px";
            bk.style.left = this.fM + "px";
            this.cwx = bk;
            document.body.appendChild(bk)
        } else {
            var cyk = E.be("ucarrow");
            E.dt(cyk, "arrow-" + this.cxc, "arrow-" + this.bqC);
            this.cwx.style.top = this.gh + "px";
            this.cwx.style.left = this.fM + "px"
        }
        if (this.cxr) {
            document.body.style.height = "auto"
        }
        window.setTimeout(this.cyj.A(this), "10");
        this.cxx = false
    };
    cwt.cyj = function() {
        if (!!this.cwH[this.bI] && !this.czP) {
            this.cxu(this.bI, this.cwH[this.bI])
        }
        if (!this.cxq) {
            this.cwx.style.display = ""
        }
        E.ba(this.cwx, this.bqC);
        this.KP = window.setTimeout(function() {
            this.cyl()
        }.A(this), "250")
    };
    cwt.bNd = function(cyi) {
        this.cxx = true;
        if (!this.cxq) {
            this.cwx.style.display = "none"
        }
        E.bf(this.cwx, this.cxc || this.bqC);
        if (this.cxr) {
            document.body.style.height = "100%"
        }
        V.bLb(this.cwx);
        V.bLb(this.czS);
        V.bLb(this.cww);
        V.bLb(this.cwB);
        if (!!this.zZ) {
            V.bLb(this.zZ)
        }
        if (!!this.czK) {
            V.bLb(this.czK)
        }
        if (!!cyi) {
            this.cxy = window.setTimeout(this.oO.A(this), "200")
        }
    };
    cwt.bHu = function() {
        if (!!this.cxy) {
            window.clearTimeout(this.cxy)
        }
        V.bLb(document.body, "mousemove");
        this.bNd();
        this.cyu = window.setTimeout(function() {
            this.cwx.innerHTML = E.eY(E.dG(this.FP, {arrow: this.cxc,tag: this.er || ""})).innerHTML;
            E.bf(this.cwx, "usercard-1");
            this.ccg()
        }.A(this), "250");
        V.bHn(document.body, "mousemove", this.cxs.A(this))
    };
    cwt.oO = function() {
        V.bLb(document.body, "mousemove");
        E.hE(this.cwx);
        cyp = true;
        cxa = null
    };
    cwt.cxs = function(bHl) {
        if (!!this.czH && this.czH.style.display !== "none") {
            return
        }
        var cox = bHl.pageX || bHl.clientX, cow = bHl.pageY || bHl.clientY + document.documentElement.scrollTop;
        if (cox < this.xL.left || cox > this.xL.right || cow < this.xL.top || cow > this.xL.bottom) {
            if (!this.cxx) {
                this.bNd(true)
            }
        }
    };
    cwt.cEH = function(fW) {
        if (!!this.cwH[fW]) {
            this.cwH[fW] = null
        }
    };
    p.cEA = C();
    cEt = p.cEA.bi(p.cxp, true);
    cEt.bnH = function(I) {
        this.er = I.tag || "";
        p.cEA.bw.bnH.call(this, I)
    };
    cEt.cyj = function() {
        if (!!this.cwH[this.er]) {
            this.cEE(this.er, this.cwH[this.er])
        }
        if (!this.cxq) {
            this.cwx.style.display = ""
        }
        E.ba(this.cwx, this.bqC);
        this.KP = window.setTimeout(function() {
            this.cEG()
        }.A(this), "250")
    };
    cEt.cEG = function() {
        if (!!this.KP) {
            window.clearTimeout(this.KP)
        }
        if (!!this.cwH[this.er]) {
            return
        } else {
            J.br(location.dwr, "TagBean", "getTagCardStat", this.er, this.cEE.A(this, this.er))
        }
    };
    cEt.cEE = function(df, bHm) {
        window["_gaq"].push(["_trackEvent", "标签名片", "弹出"]);
        if (this.er !== df)
            return;
        if (!this.cwH[this.er]) {
            this.cwH[this.er] = bHm
        }
        var bHm = bHm, bV = bHm.postList;
        for (var i = 0, l = bV.length; i < l; i++) {
            if (bV[i].type > 1) {
                if (!!bHm.postList[i].firstImageUrl && U.fp(bHm.postList[i].firstImageUrl).length > 0) {
                    var qS = U.fp(bHm.postList[i].firstImageUrl)[0];
                    if (!!qS) {
                        if (bV[i].type == 3 && qS.indexOf("xiami") >= 0) {
                            qS = qS.replace("_1.jpg", "_4.jpg")
                        }
                        bV[i].showimages = "http://imgsize.ph.126.net/?imgurl=" + qS + "_130x98x1.jpg";
                        if (qS.indexOf("http://imgsize.ph.126.net/?imgurl") >= 0) {
                            bV[i].showimages = qS
                        }
                    }
                }
            }
            bV[i].tagUrl = "http://www.lofter.com/tag/" + this.er + "?first=" + bV[i].permalink
        }
        var bk = E.eY(E.dG("m-usercard-jst-3", {posts: bV,arrow: this.bqC})), bHk = E.bj(this.cwx, "ztag"), cbZ = bHk[0], byk = bHk[1], cEI = bHk[2];
        cbZ.style.display = "none";
        if (E.cr(bk, "tctag")) {
            byk.innerHTML = bk.outerHTML
        } else {
            byk.innerHTML = bk.innerHTML
        }
    };
    cwt.bNd = function(cyi) {
        this.cxx = true;
        if (!this.cxq) {
            this.cwx.style.display = "none"
        }
        E.bf(this.cwx, this.cxc || this.bqC);
        if (this.cxr) {
            document.body.style.height = "100%"
        }
        if (!!cyi) {
            this.cxy = window.setTimeout(this.oO.A(this), "200")
        }
    };
    cwt.czZ = function(bHl) {
        return
    };
    cwt.bHu = function() {
        if (!!this.cxy) {
            window.clearTimeout(this.cxy)
        }
        V.bLb(document.body, "mousemove");
        this.bNd();
        this.cyu = window.setTimeout(function() {
            this.cwx.innerHTML = E.eY(E.dG(this.FP, {arrow: this.cxc,tag: this.er || ""})).innerHTML;
            E.ba(this.cwx, "usercard-1");
            this.ccg()
        }.A(this), "250");
        V.bHn(document.body, "mousemove", this.cxs.A(this))
    }
})();
(function() {
    var p = P("loft.m.dashboard"), rS = 500, Ga, iK;
    p.beY = C();
    Ga = p.beY.bi(P(N.fw).lu);
    Ga.bq = function(bl, I) {
        I = I || {};
        this.rH = !!I.expand;
        this.er = I.tag;
        this.Y = bl;
        this.cc()
    };
    Ga.bsx = function() {
        return this.cZ
    };
    Ga.cc = function() {
        var i = 0, l, bo;
        this.PP = E.bj(this.Y, "m-mlist");
        this.PP.shift();
        if (this.er == "焦平面" || this.er == "城" || this.er == "雪" || this.er == "还乡" || this.er == "年夜饭" || this.er == "张国荣" || this.er == "画英雄" || this.er == "去过最远的地方") {
            this.PP.shift()
        }
        this.cZ = [];
        for (l = this.PP.length; i < l; i++) {
            var by = parseInt(this.PP[i].getAttribute("data-type")) || 0;
            var bwT = this.rH && by == 2;
            bo = new p.YN(this.PP[i], bwT);
            if (bwT)
                bo.FG();
            this.cZ.push(bo)
        }
    };
    p.YN = C();
    iK = p.YN.prototype;
    iK.bq = function(gl, bwT) {
        this.Y = gl;
        this.rH = !!bwT;
        this.bwU();
        var bHk = E.bj(this.Y, "ptag"), i = 0;
        this.cwu = bHk[i++];
        this.cwS = bHk[i++];
        this.btU = bHk[i++];
        this.dg = bHk[i++];
        this.oe = E.bj(this.Y, "acttag");
        this.bwW();
        var g = P("loft.g");
        if (!g.followFromIcon) {
            g.followFromIcon = this.Fq.A(this, location.href)
        }
        this.BP = E.bj(this.Y, "ctag");
        this.PR = this.BP[0];
        V.bHn(this.PR, "click", this.bwZ.A(this));
        this.YC = E.bj(this.Y, "holdertag");
        this.bxb = E.bj(this.Y, "isay")[0];
        E.fy(this.bxb, "isay-open");
        var YA = E.bj(this.Y, "isayc")[0], bxd = parseInt(YA.getAttribute("data-time"));
        YA.title = "查看全文 - " + loft.x.qB(bxd);
        this.bxe();
        V.bHn(this.cwu.children[0], "mouseover", this.cwq.A(this, true, this.cwu.children[0], this.bHp.blogId));
        V.bHn(this.cwu.children[0], "mouseout", this.cwq.A(this, false, this.cwu.children[0], this.bHp.blogId));
        V.bHn(this.cwS, "mouseover", this.cwq.A(this, true, this.cwS, this.bHp.authorBlogId));
        V.bHn(this.cwS, "mouseout", this.cwq.A(this, false, this.cwS, this.bHp.authorBlogId));
        if (!!this.cwu.children[1]) {
            V.bHn(this.cwu.children[1], "mouseover", this.cwq.A(this, true, this.cwu.children[1], this.bHp.authorBlogId));
            V.bHn(this.cwu.children[1], "mouseout", this.cwq.A(this, false, this.cwu.children[1], this.bHp.authorBlogId))
        }
    };
    iK.cwq = function(gu, CL, dA, bHl) {
        if (!loft.g.dousercard)
            return;
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    iK.bxe = function() {
        var dN = this.PR.getElementsByTagName("IMG");
        if (!!dN) {
            this.sG = [];
            for (var i = 0, l = dN.length; i < l; i++) {
                var Ys = dN[i].getAttribute("data-origin");
                if (!!Ys) {
                    var bH = {};
                    bH.orign = Ys;
                    bH.ow = parseInt(dN[i].getAttribute("data-ow"));
                    bH.oh = parseInt(dN[i].getAttribute("data-oh"));
                    this.sG.push(bH)
                }
            }
        }
    };
    iK.bwU = function() {
        this.bHp = {};
        this.bHp.blogId = this.Y.getAttribute("data-blogId");
        this.bHp.id = this.Y.getAttribute("data-postId");
        this.bHp.authorBlogId = this.Y.getAttribute("data-authorblogid");
        this.bHp.type = this.Y.getAttribute("data-type");
        this.bHp.hotcount = this.Y.getAttribute("data-hotcount");
        this.bHp.cmtcount = this.Y.getAttribute("data-cmtcount");
        this.bHp.cctype = this.Y.getAttribute("data-cctype");
        this.bHp.blogInfo = {};
        this.bHp.blogInfo.imageProtected = this.Y.getAttribute("data-imageProtected") == "true";
        this.bHp.blogInfo.blogNickName = this.Y.getAttribute("data-blogNickName");
        this.bHp.citeRootBlogId = parseInt(this.Y.getAttribute("data-citeRootBlogId"));
        if (this.bHp.citeRootBlogId > 0) {
            this.bHp.citeRootPostId = this.Y.getAttribute("data-citeRootPostId");
            this.bHp.citeRootBlogInfo = {};
            this.bHp.citeRootBlogInfo.blogName = this.Y.getAttribute("data-citeRootBlogName");
            this.bHp.citeRootBlogInfo.blogNickName = this.Y.getAttribute("data-citeRootBlogNickName")
        }
    };
    iK.bwW = function() {
        if (!this.oe || !this.oe.length)
            return;
        V.bHn(this.oe.pop(), "click", this.Fq.A(this, location.href));
        V.bHn(this.oe.pop(), "click", this.Fq.A(this, location.href));
        V.bHn(this.oe.pop(), "click", this.Fq.A(this, location.href));
        for (var i = 0, l = this.oe.length; i < l; i++) {
            var bxh = this.oe[i].innerText.substring(0, 2);
            if (bxh == "热度") {
                this.vr = this.oe[i];
                V.bHn(this.oe[i], "click", this.bxi.A(this))
            } else {
                this.sz = this.oe[i];
                V.bHn(this.oe[i], "click", this.bxj.A(this))
            }
        }
    };
    iK.Fq = function(eF, bHl) {
        V.bb(bHl);
        var X = V.be(bHl);
        if (!!X && X.innerText == "转载") {
            eF = X.href
        }
        var cG = loft.c.cm.visitorEmail;
        if (!!cG) {
            loft.w.EC.bE({parent: document.body,email: cG,target: eF})
        } else {
            loft.w.ED.bE({parent: document.body,target: eF})
        }
    };
    iK.bFT = function(bHl) {
        V.bb(bHl);
        location.href = loft.x.Ru(location.href)
    };
    iK.bxi = function(bHl) {
        V.bb(bHl);
        if (!!this.jl && !!this.jl.lN) {
            this.jl = P("loft.w").mZ.db(this.jl)
        } else {
            if (!!this.fK && !!this.fK.lN) {
                this.fK = P("loft.w").lT.db(this.fK)
            }
            this.jl = P("loft.w").mZ.bG(this.YC[0], {act: this.vr.parentNode,pid: this.bHp.id,bid: this.bHp.blogId,type: this.bHp.type,count: this.bHp.hotcount})
        }
    };
    iK.bxj = function(bHl) {
        V.bb(bHl);
        if (!!this.fK && !!this.fK.lN) {
            this.fK = P("loft.w").lT.db(this.fK)
        } else {
            if (!!this.jl && !!this.jl.lN) {
                this.jl = P("loft.w").mZ.db(this.jl)
            }
            this.fK = P("loft.w").lT.bG(this.YC[1], {act: this.sz.parentNode,pid: this.bHp.id,bid: this.bHp.blogId,type: this.bHp.type,count: this.bHp.cmtcount,isanonymous: true,onanonymousclick: this.Fq.A(this, location.href)})
        }
    };
    iK.FG = function(zu) {
        if (arguments.length == 0) {
            zu = E.cr(this.BP[0], "m-icnt-all")
        }
        zu = !!zu;
        if (!!zu) {
            E.bf(this.BP[0], "m-icnt-all")
        } else {
            if (E.cr(this.BP[0], "m-icnt-all"))
                return;
            E.ba(this.BP[0], "m-icnt-all")
        }
        if (this.bHp.type == 1)
            return;
        var dN = this.PR.getElementsByTagName("IMG");
        for (var i = 0, l = dN.length; i < l; i++) {
            var py = dN[i].getAttribute("data-ow") || 0;
            if (!!zu) {
                if (py < 164 && py > 0)
                    dN[i].style.width = py + "px";
                else
                    dN[i].style.width = "164px"
            } else {
                dN[i].style.width = py > 500 ? "500px" : "auto";
                dN[i].parentNode.parentNode.style.width = "auto"
            }
        }
    };
    iK.bwZ = function(bHl) {
        var eF = V.be(bHl, function(X) {
            return E.cr(X, "music")
        });
        if (!!eF) {
            var bHk = E.dE(eF);
            if (bHk.length == 2)
                return;
            this.wr = eF;
            this.qG = bHk[0];
            this.XS = this.wr.getAttribute("data-diy");
            this.bxn = this.wr.getAttribute("data-songName");
            this.GV = this.wr.getAttribute("data-flashUrl");
            this.bxo = this.wr.getAttribute("data-listenUrl");
            this.bea = this.wr.getAttribute("data-songId") || 0;
            this.beg = this.wr.getAttribute("data-artistName") || "";
            this.bek = this.wr.getAttribute("data-type") || "";
            this.lg(false);
            V.bb(bHl);
            return
        }
        eF = V.be(bHl, function(X) {
            return E.cr(X, "js-video")
        });
        if (!!eF) {
            this.PU = E.dE(eF)[0];
            this.Nu = this.Nt(eF.getAttribute("data-videourl"));
            this.lg(false);
            V.bb(bHl);
            return
        }
        eF = V.be(bHl, function(X) {
            return X.tagName == "IMG" || E.cr(X, "img") || E.cr(X, "js-expand")
        });
        if (!!eF) {
            if (this.bHp.type == 4)
                this.lg(true);
            else {
                if (!!this.rH) {
                    this.xi()
                } else {
                    this.FG()
                }
            }
            V.bb(bHl);
            return
        }
    };
    iK.xi = function() {
        if (!this.sG || !this.sG.length)
            return;
        P("loft.w").nX.bG(document.body, {singleton: true,photos: this.sG,cctype: this.bHp.cctype || 0,contextValue: loft.x.Rh(this.bHp)})
    };
    iK.lg = function(go) {
        if (arguments.length == 0) {
            go = window.playingItem === this
        }
        if (!go) {
            if (!!window.playingItem) {
                window.playingItem.lg(true)
            }
            window.playingItem = this
        } else {
            if (window.playingItem === this)
                window.playingItem = null
        }
        if (this.bHp.type == 3) {
            this.bxq(!!go)
        } else {
            this.bxr(!!go)
        }
    };
    iK.bxq = function(go) {
        var DZ, dc;
        if (!go) {
            if (!this.gi) {
                if (!!this.XS && this.XS == 1) {
                    DZ = "autoPlay=true&url=" + this.bxo + "&title=" + decodeURIComponent(this.bxn || "");
                    dc = E.dG("m-track-jst-flash", {src: location.dirhost + "/rsc/swf/blog_music_player.swf",width: 257,height: 33,flashvars: DZ});
                } else if (this.bek == "cloudmusic") {
                    DZ = "loop=false&autoPlay=true&url=" + this.bxo + "&trackId=" + this.bea + "&trackName=" + decodeURIComponent(this.bxn || "") + "&artistName=" + decodeURIComponent(this.beg || "");
                    dc = E.dG("m-track-jst-flash", {src: location.cloudMusicFlashUrl,width: 257,height: 34,flashvars: DZ})
                } else {
                    dc = E.dG("m-track-jst-flash", {src: this.GV,width: 257,height: 33,flashvars: ""})
                }
                this.gi = E.eY(dc)
            }
            this.wr.appendChild(this.gi);
            this.qG.style.display = "none"
        } else {
            E.hE(this.gi);
            delete this.gi;
            this.qG.style.display = ""
        }
    };
    iK.bxr = function(go) {
        if (!go) {
            if (!this.gi) {
                this.gi = E.eY(E.dG("m-track-jst-flash", {flashvars: "isAutoPlay=true",src: this.Nu,width: 500,height: 400}))
            }
            this.PU.parentNode.appendChild(this.gi);
            this.PU.style.display = "none"
        } else {
            E.hE(this.gi);
            delete this.gi;
            this.PU.style.display = ""
        }
        this.FG(go)
    };
    iK.Nt = function(fV) {
        if (/^(http:\/\/www\.tudou\.com\/[^\/]+\/[^\/]+?\/)([^\/]+?\/)?(v\.swf)$/i.test(fV)) {
            if (!RegExp.$2) {
                return RegExp.$1 + "&autoPlay=true/" + RegExp.$3
            } else {
                return RegExp.$1 + "$autoPlay=true&" + RegExp.$2 + RegExp.$3
            }
        }
        return fV
    };
    iK.NF = function() {
        if (this.bHp.type == 4) {
            this.lg()
        } else {
            this.FG()
        }
    }
})();
(function() {
    var p = P("loft.m.dashboard"), fF;
    p.qy = C();
    fF = p.qy.bi(P(N.fw).lu);
    fF.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I);
        this.bsJ = !!I.dashboard;
        this.Y = bl;
        this.bfZ = I.from || "";
        this.xc = (I.page || 0) + 1;
        this.ql = I.empty || "";
        this.Ns = I.guide || null;
        this.bZq = I.pageNewMode || false;
        this.bes = this.uD.A(this);
        this.bI = I.targetBlogId || 0;
        this.beu = loft.c.cm.mainBlogId || 0;
        this.dl = I.tcache || new (P("loft.d").bfJ);
        this.dl.bHn("ontracklistload", this.bsI.A(this));
        this.dl.bHn("onrecommend", this.bsG.A(this));
        this.dl.bHn("ondegradepost", this.bZp.A(this));
        this.dl.bHn("onfilterpost", this.bsF.A(this));
        this.dl.bHn("onforbidblog", this.bsE.A(this));
        this.nm = new (P("loft.d").up);
        this.nm.bHn("onlike", this.Nq.A(this));
        this.nm.bHn("ondelete", this.bsD.A(this));
        this.nm.bHn("onshare", this.bsC.A(this));
        this.nm.bHn("oncontripass", this.bZo.A(this));
        this.tK = new (P("loft.d").AS)({followFrom: "followfrom" + this.bfZ});
        this.tK.bHn("onfollow", this.nn.A(this));
        this.tK.bHn("unfollow", this.nn.A(this));
        this.bOD = false;
        if (!!I.istime) {
            this.bOD = true
        }
        if (!!I.cbdashloaded) {
            this.bZn = true
        }
        this.rp = new loft.d.vz({onaddblacklist: this.nV.A(this)});
        this.cP = {targetBlogId: I.targetBlogId || 0,recommenderRole: I.recommenderRole || 0,rtagRank: I.rtagRank || 0,wallPostNum: I.wallPostNum || 0,expand: !!I.expand,iself: !!I.iself,expandPages: !!I.expandPages,isActivityTagEditor: !!I.isActivityTagEditor,topconfig: I.pageconfig || I || {},tag: I.tag || "",newpublish: P("loft.m.newpublish.w").ciU(),onlike: this.Np.A(this),ondelete: this.pV.A(this),onfollow: this.kc.A(this),onblack: this.rz.A(this),onrecommend: this.bsB.A(this),ondegradepost: this.bZm.A(this),onfilterpost: this.bsA.A(this),onforbidblog: this.bsz.A(this),onshare: this.bsy.A(this),oncontripass: this.bZl.A(this),ondelask: this.bLl.A(this),onlogincb: this.bON.A(this),onupdateitem: this.bAk.A(this)};
        this.iG = !!I.istime ? p.bRK : p.NZ;
        V.bHn(document, "keydown", this.Cf.A(this));
        if (this.xc == 1)
            this.beT();
        else {
            this.beU.style.display = "none";
            this.cZ = (new p.beY(bl, I)).bsx()
        }
    };
    var Oq = [66, 72, 74, 75, 76, 84, 98, 104, 106, 107, 108, 116];
    fF.Cf = function(bHl) {
        var rB = bHl && (bHl.which || bHl.keyCode), Q = U.fO(Oq, rB);
        if (Q == -1)
            return;
        var X = V.be(bHl);
        if (X.tagName == "INPUT" || X.tagName == "TEXTAREA" || bHl.ctrlKey || bHl.altKey || bHl.shiftKey || !!E.cr(X, "noshortkey"))
            return;
        Q = Q % 6;
        switch (Q) {
            case 0:
                break;
            case 1:
                this.Gc(0, "open");
                break;
            case 2:
                this.Gc(1);
                break;
            case 3:
                this.Gc(-1);
                break;
            case 4:
                this.Gc(0, "fav");
                break;
            case 5:
                break
        }
    };
    fF.Gc = function(ig, Gd) {
        var NN = document.documentElement.scrollTop || document.body.scrollTop, ci = 5, qx = document.documentElement.clientHeight, DJ, i = 0, l = this.cZ.length, bo, bfd = 0, wJ;
        for (; i < l; i++) {
            bo = this.cZ[i];
            DJ = E.jO(bo.Y);
            if (DJ > NN + ci) {
                bfd = i - 1;
                break
            }
        }
        if (ig == 1 && bfd == 0 && NN + ci >= E.jO(this.cZ[l - 1].Y)) {
            bfd = l - 1
        }
        wJ = bfd + ig;
        if (wJ < 0) {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            return
        }
        if (wJ >= l)
            wJ = l - 1;
        var kj = document.documentElement.scrollTop = document.body.scrollTop = E.jO(this.cZ[wJ].Y) - ci;
        if (ig === 0) {
            Gd = Gd || "";
            if ("fav" === Gd) {
                this.cZ[wJ].baH()
            } else if ("open" === Gd) {
                this.cZ[wJ].NF()
            }
        }
        var Nl = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        if (ig == 1 && wJ == l - 1 && kj + qx <= Nl - 10) {
            this.beT()
        }
    };
    fF.Np = function(bt, bc, hM) {
        if (!hM) {
            this.nm.bfg(bt, bc)
        } else {
            this.nm.bfi(bt, bc)
        }
    };
    fF.Nq = function(hM, bHm) {
        if (!!bHm) {
            if (bHm.id == -100 || bHm.id == -10) {
                if (bHm.id == -100)
                    E.bd("您喜欢得太快了，请休息一下。");
                else if (bHm.id == -10)
                    E.bd("由于用户权限设置，你无法喜欢该文章！");
                hM = false;
                var Ef = bHm.favoritedPostIdCitedFrom || 0, em = bHm.favoritedPostId || 0, i = 0, l = this.cZ.length, bN;
                for (; i < l; i++) {
                    bN = this.cZ[i].hY().post || {};
                    if (!!bN.citeRootPostId && (bN.citeRootPostId == Ef || bN.citeRootPostId === em) || bN.id == em || bN.id === Ef) {
                        this.cZ[i].NJ(hM)
                    }
                }
            } else {
                var Ef = bHm.favoritedPostIdCitedFrom || 0, em = bHm.favoritedPostId || 0, i = 0, l = this.cZ.length, bN;
                for (; i < l; i++) {
                    bN = this.cZ[i].hY().post || {};
                    if (!!bN.citeRootPostId && (bN.citeRootPostId == Ef || bN.citeRootPostId === em) || bN.id == em || bN.id === Ef) {
                        this.cZ[i].NJ(hM);
                        this.cZ[i].NK(hM ? 1 : -1)
                    }
                }
                var No = E.be("gsdfavcount");
                if (!!No)
                    No.innerText = parseInt(No.innerText) + (hM ? 1 : -1);
                if (this.bfZ == "tag") {
                    try {
                        window["_gaq"].push(["_trackEvent", "动态流标签页", "喜欢量"])
                    } catch (e) {
                    }
                }
            }
        }
    };
    fF.bsy = function(dR, bc, bsw, ld) {
        !!bsw ? this.nm.bvE(dR, bc, ld) : this.nm.bvA(dR, bc, ld)
    };
    fF.bsC = function(bfl, ld, bHm) {
        if (bHm > 0) {
            if (!!bfl) {
                E.bY("推荐成功", true)
            } else {
                E.bY("取消推荐成功", true)
            }
        } else if (bHm == 0) {
            E.bd("操作失败", true)
        } else if (bHm == -1) {
            E.bd("由于用户权限设置，你无法推荐该文章！", true)
        } else if (bHm == -2) {
            E.bd("您今天已经推荐了100篇，请明天再推荐。", true)
        }
        ld(bfl, this.bsJ, bHm <= 0)
    };
    fF.kc = function(bc, jw) {
        !!jw ? this.tK.OP(bc) : this.tK.OS(bc)
    };
    fF.nn = function(bc, jw, bK) {
        var bHm;
        if (!!bK && bK > 0) {
            if (!!jw) {
                E.bY("关注成功", true);
                if (this.bfZ == "tag") {
                    try {
                        window["_gaq"].push(["_trackEvent", "动态流标签页", "关注量"])
                    } catch (e) {
                    }
                }
            } else {
                E.bY("取消关注成功", true)
            }
            for (var i = 0, l = this.cZ.length; i < l; i++) {
                bHm = this.cZ[i].hY();
                if (bHm.post.blogId == bc) {
                    bHm.followed = !!jw;
                    this.cZ[i].bcA()
                }
            }
        } else {
            loft.x.cqi(bK)
        }
    };
    fF.rz = function(Bs, gR) {
        loft.w.eD.bE({parent: document.body,title: "加入黑名单",c1: "确定将 " + (gR || "") + " 加入黑名单吗？",c2: "加入黑名单后，你还可以去帐号设置管理黑名单",onok: function() {
            this.rp.yY(Bs)
        }.A(this)})
    };
    fF.nV = function(bHm) {
        if (!!bHm) {
            if (bHm.id == -1e3) {
                alert("你尚未登录");
                return
            }
            if (bHm.id == -999) {
                return
            }
            if (bHm.id > 0) {
                E.bY("加入黑名单成功！", true)
            } else if (bHm.id == -2) {
                E.bd("黑名单已经存在")
            } else if (bHm.id == -10) {
                E.bd("您输入的博客地址不是用户的默认博客地址,无法加入黑名单")
            } else if (bHm.id == -11) {
                E.bd("不允许加自己帐号为黑名单")
            } else if (bHm.id == -997) {
                E.bd("您输入的博客地址有误")
            }
        }
    };
    fF.pV = function(bt, bc, cnL) {
        if (!cnL) {
            loft.w.eD.bE({parent: document.body,title: "删除文章",c1: "确定删除这篇文章吗？",onok: function() {
                this.nm.bvN(bt, bc)
            }.A(this)})
        } else {
            this.bsD(bt)
        }
    };
    fF.bsD = function(bHm) {
        if (!!bHm && bHm > 0) {
            this.uQ(bHm)
        } else {
        }
        if (!this.cZ || !this.cZ.length)
            this.bfn()
    };
    fF.bZl = function(bt, bc) {
        this.nm.bZs(bt, bc)
    };
    fF.bZo = function(bHm) {
        if (!!bHm && bHm == 1) {
            location.href = "http://www.lofter.com/"
        } else if (bHm < 0) {
            E.bd("发布失败！", true)
        }
    };
    fF.uQ = function(dR) {
        var Q = U.fO(this.cZ, function(bo) {
            return bo.hY().post.id === dR
        }), is, Nn, En, Nm;
        if (Q >= 0) {
            is = this.cZ[Q + 1];
            Nn = this.cZ[Q - 1];
            if (!!is) {
                En = is.hY().post;
                if (!!Nn) {
                    Nm = Nn.hY().post;
                    if (Nm.blogInfo.blogId === En.blogInfo.blogId && Nm.publisherMainBlogInfo.blogId === En.publisherMainBlogInfo.blogId) {
                        if (!!Nm && Nm.type == 5 && !Nm.answer && !!Nm.anonymous || !!En && En.type == 5 && !En.answer && !!En.anonymous) {
                            is.hY().repeat = false
                        } else {
                            is.hY().repeat = true
                        }
                    } else {
                        is.hY().repeat = false
                    }
                } else {
                    is.hY().repeat = this.cP.targetBlogId === En.blogInfo.blogId && loft.c.cm.mainBlogId === En.publisherMainBlogInfo.blogId
                }
                if (!this.bOD) {
                    is.bct()
                }
            }
            this.iG.db(this.cZ.splice(Q, 1))
        }
    };
    fF.bAk = function(dR, ckj) {
        var Q = U.fO(this.cZ, function(bo) {
            return bo.hY().post.id === dR
        }), cng, is, Nn, ciN, En, Nm;
        if (Q >= 0) {
            cng = this.cZ[Q];
            Nn = this.cZ[Q - 1];
            is = this.cZ[Q + 1];
            ciN = ckj.post;
            if (!!Nn) {
                Nm = Nn.hY().post;
                if (Nm.blogInfo.blogId === ciN.blogInfo.blogId && Nm.publisherMainBlogInfo.blogId === ciN.publisherMainBlogInfo.blogId) {
                    if (!!Nm && Nm.type == 5 && !Nm.answer && !!Nm.anonymous || !!ciN && ciN.type == 5 && !ciN.answer && !!ciN.anonymous) {
                        ckj.repeat = false
                    } else {
                        ckj.repeat = true
                    }
                } else {
                    ckj.repeat = false
                }
            } else {
                ckj.repeat = this.cP.targetBlogId === ciN.blogInfo.blogId && loft.c.cm.mainBlogId === ciN.publisherMainBlogInfo.blogId
            }
            cng.ce(ckj);
            if (!!is) {
                En = is.hY().post;
                if (ciN.blogInfo.blogId === En.blogInfo.blogId && ciN.publisherMainBlogInfo.blogId === En.publisherMainBlogInfo.blogId) {
                    if (!!ciN && ciN.type == 5 && !ciN.answer && !!ciN.anonymous || !!En && En.type == 5 && !En.answer && !!En.anonymous) {
                        is.hY().repeat = false
                    } else {
                        is.hY().repeat = true
                    }
                } else {
                    is.hY().repeat = false
                }
                is.bct()
            }
        }
    };
    fF.bsB = function(dR, bc, di, wY) {
        if (!!this.bfw)
            return;
        this.bfw = true;
        if (!wY) {
            if (!di) {
                this.dl.bgW(dR, bc)
            } else {
                this.dl.bhl(dR, bc)
            }
        } else {
            if (di === 2) {
                this.dl.bhl(dR, bc, true)
            } else {
                this.dl.bgW(dR, bc, true)
            }
        }
    };
    fF.bsG = function(di, dR, df, wY, bHm) {
        this.bfw = false;
        if (!!bHm) {
            if (bHm.id == -3) {
                E.bd("已被机器推荐，不能被加精！", true);
                return
            }
            if (bHm.id == -103 && !!wY) {
                E.bd("该标签下的文章不允许上墙！", true);
                return
            }
            var Gp = !!di ? !!wY ? "上墙" : "加精" : !!wY ? "下墙" : "去精";
            E.bY("文章" + Gp + "成功!", true);
            var Q = U.fO(this.cZ, function(bo) {
                return bo.hY().post.id === dR
            });
            if (Q >= 0) {
                this.cZ[Q].bbl((!!di ? 1 : 0) + (!!wY ? 1 : 0), df, U.co(bHm, "object") ? bHm : null)
            }
        }
    };
    fF.bZm = function(dR, bc) {
        this.dl.bZy(dR, bc)
    };
    fF.bZp = function(dR, df, bHm) {
        if (!!bHm) {
            if (bHm == 1) {
                E.bY("文章降级成功！", true)
            } else if (bHm == -2) {
                E.bY("文章已经降级！", true)
            }
            if (!!location.href.match(/www\.lofter\.com\/tag\/[^\/]+\/excellent$/ig)) {
                this.uQ(dR)
            } else {
                var Q = U.fO(this.cZ, function(bo) {
                    return bo.hY().post.id === dR
                });
                if (Q >= 0) {
                    this.cZ[Q].bbl(0, df, U.co(bHm, "object") ? bHm : null, true)
                }
            }
        } else {
            E.bd("文章降级失败！", true)
        }
    };
    fF.bsA = function(dR, bc) {
        this.dl.bvk(dR, bc)
    };
    fF.bsF = function(dR, bHm) {
        if (!!bHm) {
            this.uQ(dR);
            E.bY("文章过滤成功！", true)
        } else {
            E.bd("文章过滤失败！", true)
        }
    };
    fF.bsz = function(bc) {
        this.dl.bvi(bc)
    };
    fF.bsE = function(bc, bHm) {
        if (!!bHm) {
            E.bY("屏蔽博客成功！", true)
        } else {
            E.bd("屏蔽博客失败！", true)
        }
    };
    fF.bsI = function(bHm, Pa) {
        this.cQ = false;
        this.yB.style.display = "none";
        this.beU.style.display = "none";
        if (!!bHm && !!bHm.length) {
            if (!!this.Ns && !!this.Ns.style)
                this.Ns.style.display = "";
            this.bfD = bHm.length < this.dl.Et() && !Pa;
            this.xc += 1;
            var i = 0, l = bHm.length, tQ, bn;
            for (; i < l; i++) {
                tQ = bHm[i];
                if (!tQ || tQ.post.valid == 32) {
                    bHm.splice(i, 1);
                    l = bHm.length;
                    i--;
                    continue
                }
                if (!!this.bOD && tQ.post.valid != 15 && tQ.post.valid != 16) {
                    if (l == 1) {
                        this.bfD = true;
                        if (!this.cZ) {
                            this.bfn()
                        }
                        return
                    }
                    bHm.splice(i, 1);
                    l = bHm.length;
                    i--;
                    continue
                }
                if (tQ.post.blogInfo.blogId == this.bI && tQ.post.publisherMainBlogInfo.blogId == this.beu) {
                    if (!!tQ.post && tQ.post.type == 5 && !tQ.post.answer && !!tQ.post.anonymous) {
                        tQ.repeat = false;
                        this.bI = -1;
                        this.beu = -1
                    } else {
                        tQ.repeat = true
                    }
                } else {
                    if (!!tQ.post && tQ.post.type == 5 && !tQ.post.answer && !!tQ.post.anonymous) {
                        this.bI = -1;
                        this.beu = -1
                    } else {
                        this.bI = tQ.post.blogInfo.blogId;
                        this.beu = tQ.post.publisherMainBlogInfo.blogId
                    }
                    tQ.repeat = false
                }
                if (this.bfZ === "userlikepage" && !!tQ.post.isPublished && tQ.post.allowView >= 100) {
                    bHm.splice(i, 1);
                    l = bHm.length;
                    i--;
                    continue
                }
            }
            try {
                bn = this.iG.bG(bHm, this.Y, this.cP)
            } catch (e) {
            }
            if (!!this.cZ) {
                this.cZ = this.cZ.concat(bn)
            } else {
                this.cZ = bn
            }
            if (!!this.bOD || !!this.bZn) {
                this.bh("cbloaded")
            }
        } else if (!bHm) {
            this.bfD = true;
            this.cgO(!Pa)
        } else {
            this.bfD = true;
            if (!this.cZ) {
                this.bfn()
            }
        }
    };
    fF.bfn = function() {
        if (!this.ql)
            return;
        this.Y.appendChild(E.eY('<div id="listEmptyItem" class="m-mlist"><div class="mlistcnt"><div class="isay"><div class="isayt3"></div><div class="isaym3"><div class="m-end m-end-2"><h2>' + this.ql + '</h2></div></div><div class="isayb"></div></div></div></div>'))
    };
    fF.cgO = function(cqk) {
        this.Y.appendChild(E.eY('<div class="m-mlist"><div class="mlistcnt"><div class="isay"><div class="isayt3"></div><div class="isaym3"><div class="m-end m-end-2"><h2>' + (cqk ? "系统繁忙，请稍后再试 " : "暂无内容") + '</h2></div></div><div class="isayb"></div></div></div></div>'))
    };
    fF.beT = function() {
        if (!!this.cQ || !!this.bfD)
            return;
        this.cQ = true;
        if (!!this.cZ)
            this.yB.style.display = "";
        this.dl.uP(this.xc)
    };
    fF.bE = function() {
        p.qy.bw.bE.call(this);
        if (this.bZq == false)
            V.bHn(window, "scroll", this.bes)
    };
    fF.cy = function() {
        p.qy.bw.cy.call(this);
        V.iJ(window, "scroll", this.bes)
    };
    fF.ke = function() {
        this.yB = E.be("loadmore");
        this.beU = E.be("loadfirst")
    };
    fF.uD = function(bHl) {
        var Nl = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), kj = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, qx = document.documentElement.clientHeight;
        if (kj + qx >= Nl - 10) {
            this.beT()
        }
    };
    fF.bLl = function(bJx, bc) {
        if (!!bJx && bJx > 0) {
            this.uQ(bJx)
        } else {
        }
        if (!this.cZ || !this.cZ.length)
            this.bfn()
    };
    fF.bON = F;
    fF.cjc = function(bHm, bl, pa) {
        if (!bHm || !bHm.post)
            return;
        var I = loft.x.GD(this.cP);
        I.before = pa;
        var bo = this.iG.bG(bHm, bl, I);
        this.cZ = this.cZ || [];
        this.cZ.unshift(bo);
        var cnj = E.be("listEmptyItem");
        if (!!cnj) {
            E.hE(cnj)
        }
        this.bAk(bHm.post.id, bHm)
    }
})();
(function() {
    var p = P("loft.m.blog"), bfj = 10, np;
    p.SG = C();
    np = p.SG.bi(P(N.fw).lu);
    np.bq = function(bl, I) {
        I = I || {};
        this.qU = I.callback || function() {
        };
        this.AB = I.rtagId || 0;
        this.bbp = I.rtagRank || 0;
        this.sP = I.recommenderRole || 0;
        this.bxf = I.isActivityTagEditor || false;
        this.bHq(bl, I);
        this.dl = I.tcache || O;
        this.dl.bHn("onLoadEditors", this.biu.A(this));
        this.dl.bHn("onrecommendpermalink", this.bit.A(this));
        this.tK = new loft.d.AS({onfollow: this.nn.A(this)});
        this.bMY = this.dl.er || "";
        this.cP = {onfollow: this.kc.A(this),rtagId: this.AB,rtagRank: this.bbp,tagname: this.bMY};
        var g = P("m");
        g.loadAllMembers2 = this.QQ.A(this);
        this.bio()
    };
    np.bio = function() {
        var bHk = E.bj(this.gs, "seotag");
        for (var i = 0; i < bHk.length; i++)
            E.hv(bHk[i]);
        this.Y.style.display = "none";
        this.dl.bvl(10)
    };
    np.biu = function(dU) {
        if (!!dU) {
            this.Y.style.display = "";
            var bS = dU.blogInfoList || [], gd, bin = dU.superBlogIds || [], bil = dU.followingList || [], xU = dU.excellentBlogInfoList || [];
            this.cP.followingList = bil;
            this.cP.superList = bin;
            this.cZ = [];
            if (!!bS.length) {
                bS[0].first = true;
                bS.reverse();
                this.cZ = p.eG.bG(bS, this.bfs, this.cP)
            }
            this.bfs.parentNode.parentNode.parentNode.style.display = !!bS.length ? "" : "none";
            this.gs.parentNode.parentNode.parentNode.style.display = !!xU.length ? "" : "none";
            if (!!xU.length) {
                xU[0].first = true;
                xU.reverse();
                this.cP.excellent = true;
                gd = p.eG.bG(xU, this.gs, this.cP);
                this.cZ = this.cZ.concat(gd);
                this.cP.excellent = false;
                var Cp = xU.length - bfj, i = 0;
                if (Cp > 0) {
                    for (; i < Cp; i++) {
                        E.hv(gd[i].Y)
                    }
                    this.bik.parentNode.style.display = ""
                }
                this.gs.style.height = this.gs.clientHeight + "px";
                this.bfv = gd
            }
            this.qU()
        }
    };
    np.QQ = function(bHl) {
        var l = this.bfv.length, Cp = l - bfj;
        if (Cp > 0) {
            for (l = Cp - 1; l >= 0; l--) {
                this.gs.appendChild(this.bfv[l].Y)
            }
        }
        window.m.loadAllMembers(bHl)
    };
    np.kc = function(bc) {
        this.tK.OS(bc)
    };
    np.nn = function(bc, nC, bK) {
        if (!!bK && bK > 0) {
            var Q = U.fO(this.cZ, function(bo) {
                return bo.hY().blogId == bc
            });
            if (Q != -1) {
                E.bY("添加关注成功", true);
                this.cZ[Q].CF(true)
            }
        } else {
            loft.x.cqi(bK)
        }
    };
    np.ke = function() {
        var bk = E.mF("m-tageditor-ntp-0"), bHk = E.bj(bk, "mtag"), i = 0;
        this.gs = bHk[i++];
        this.bik = bHk[i++];
        this.cqj = E.be("tagManager");
        var Gu = E.bj(this.cqj, "mtag"), j = 0;
        this.bfs = Gu[j++];
        this.bfx = Gu[j++];
        this.bij = Gu[j++];
        if (!!this.sP) {
            V.bHn(this.bfx, "click", this.bif.A(this))
        } else {
            E.hE(this.bfx.parentNode)
        }
        return bk
    };
    np.bif = function(bHl) {
        V.bb(bHl);
        if (this.bbp < 0) {
            loft.w.bfA.bE({parent: document.body,onok: this.bic.A(this),title: "对无标签的文章加入该标签："})
        } else {
            loft.w.bfA.bE({parent: document.body,onok: this.bic.A(this)})
        }
    };
    np.bic = function(yz) {
        this.dl.bvm(yz)
    };
    np.bit = function(bHm) {
        if (!!bHm && bHm > 0) {
            if (this.bbp < 0) {
                E.bY("文章已加该标签！", true)
            } else {
                E.bY("文章加精成功！", true)
            }
        } else {
            if (this.bbp < 0) {
                if (bHm == -101) {
                    E.bd("加标签失败，文章不存在！", true)
                } else if (bHm == -3) {
                    E.bd("已被机器推荐，不能被加标签！", true)
                } else if (bHm == -2) {
                    E.bd("加标签失败，该文章为转载文章，不允许加标签，请输入原文地址！", true)
                } else if (bHm == -1) {
                    E.bd("重复加标签，该文章已有该标签！", true)
                } else {
                    E.bd("文章加标签失败！", true)
                }
            } else {
                if (bHm == -101) {
                    E.bd("加精失败，文章不存在！", true)
                } else if (bHm == -3) {
                    E.bd("已被机器推荐，不能被加精！", true)
                } else if (bHm == -2) {
                    E.bd("加精失败，该文章为转载文章，不允许加精，请输入原文地址！", true)
                } else if (bHm == -1) {
                    E.bd("重复加精，该文章已是精选！", true)
                } else {
                    E.bd("文章加精失败！", true)
                }
            }
        }
    };
    p.eG = C();
    eI = p.eG.bi(P(N.ut).fc, true);
    eI.bq = function() {
        this.bHq("m-tageditor-ntp-1");
        var bHk = E.bj(this.Y, "itag"), i = 0;
        this.Bx = bHk[i++];
        this.bD = bHk[i++];
        this.bib = bHk[i++];
        this.bhZ = bHk[i++];
        this.hH = bHk[i++];
        E.fy(this.Y, "j-hover");
        V.bHn(this.hH, "click", this.kc.A(this));
        V.bHn(this.Y, "mouseover", this.cwq.A(this, true, this.Y));
        V.bHn(this.Y, "mouseout", this.cwq.A(this, false, this.Y))
    };
    eI.cwq = function(gu, CL, bHl) {
        var dA = this.bHp.blogId || 0;
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    eI.fs = function(bl) {
        p.eG.bw.fs.call(this, bl, true)
    };
    eI.cK = function() {
        p.eG.bw.cK.call(this);
        if (!!this.bHp.first) {
            E.bf(this.Y, "first")
        }
    };
    eI.bHu = function(I) {
        this.bhX = I.followingList || [];
        this.bhW = !!I.excellent;
        this.bhV = I.superList || [];
        this.AB = I.rtagId || 0;
        this.bbp = I.rtagRank || 0;
        this.bMY = I.tagname || "";
        this.bHn("onfollow", I.onfollow || F)
    };
    eI.ce = function(bHm) {
        p.eG.bw.ce.call(this, bHm);
        if (!!bHm.first) {
            E.ba(this.Y, "first")
        }
        this.bD.src = loft.x.eK(bHm.bigAvaImg);
        this.bD.alt = bHm.blogNickName || "";
        this.bib.innerText = bHm.blogNickName || "";
        if (!this.bhW) {
            this.Bx.href = loft.x.bM(bHm.blogName);
            this.Bx.target = "_blank"
        } else {
            this.Bx.href = this.bMY == "systemhotrecompost" ? "http://www.lofter.com/explore/?type=hot&fbid=" + bHm.blogId : "http://www.lofter.com/explore/?type=tag&tag=" + this.bMY + "&fbid=" + bHm.blogId
        }
        var Q = U.fO(this.bhV, bHm.blogId);
        var bUH = this.AB > 0 && this.bbp >= 0 ? "资深博客" : "活跃博客";
        if (this.bMY == "systemhotrecompost")
            bUH = "资深博客";
        this.bhZ.innerText = !!this.bhW ? bUH : Q != -1 ? "首席小编" : "小编";
        var Q = U.fO(this.bhX, function(bc) {
            return bHm.blogId == bc
        });
        this.hH.style.display = Q == -1 && !!loft.c.cm.userId && bHm.blogId != loft.c.cm.userId ? "" : "none"
    };
    eI.cy = function() {
        this.Y.style.display = "none"
    };
    eI.kc = function(bHl) {
        V.bb(bHl);
        this.bh("onfollow", this.bHp.blogId || 0)
    };
    eI.CF = function(di) {
        this.hH.style.display = !!di ? "none" : ""
    }
})();
(function() {
    var p = P("loft.w"), bhU = /^(?:http:\/\/)?[0-9a-zA-Z\-]+(.*)\/post\/([0-9a-zA-Z_]+)$/i, bKC;
    p.bfA = C();
    bKC = p.bfA.bi(p.fr, true);
    bKC.bq = function(bl, I) {
        I = I || {};
        I.title = I.title || "对无该标签的文章加精：";
        this.bHq(bl, I)
    };
    bKC.bz = function(I) {
        if (!!I.title)
            this.ei.iI(I.title);
        this.bHn("onok", I.onok || F);
        this.bHn("oncc", I.oncc || F);
        this.cg.value = "";
        p.eD.bw.bz.call(this, I)
    };
    bKC.cM = function() {
        return '<div class="layerm"><form class="f-tac"><input type="text" class="w-inputxt w-inputxt-1 f-fs2 s-fc2 wtag" placeholder="请输入文章链接地址" style="width:424px;"></form></div><div class="layerb"><a class="w-sbtn w-sbtn-0 wtag" href="#" hidefocus="true">确 定</a><a class="w-sbtn w-sbtn-3 wtag" href="#" hidefocus="true">取 消</a></div>'
    };
    bKC.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.cg = bHk[0];
        this.zY = bHk[1];
        this.yU = bHk[2];
        V.bHn(this.zY, "click", this.ry.A(this));
        V.bHn(this.yU, "click", this.gL.A(this));
        V.bHn(this.cg.parentNode, "submit", this.ry.A(this));
        loft.x.Ws(this.cg, "s-fc0")
    };
    bKC.ry = function(bHl) {
        V.bb(bHl);
        var bg = U.bA(this.cg.value), bu;
        if (!bg)
            return;
        bu = bhU.exec(bg);
        if (!!bu && !!bu[2]) {
            this.cy();
            this.bh("onok", bu[2])
        } else {
            E.bd("请输入正确的文章地址!", true, true);
            window.setTimeout(E.JQ, 3e3)
        }
    };
    bKC.gL = function(bHl) {
        V.bb(bHl);
        this.cy();
        this.bh("oncc")
    }
})();
(function() {
    var p = P("loft.m.dashboard"), EP, zy;
    p.WW = C();
    EP = p.WW.bi(P(N.fw).lu);
    EP.bq = function(bl, I) {
        I = I || {};
        this.bHq(bl, I);
        this.er = I.tag || "";
        this.wj(this.er)
    };
    EP.wj = function() {
        J.br(location.dwr, "TagBean", "getRelativeTagPost", this.er, function(bHm) {
            if (!!bHm && !!bHm.length) {
                this.dL.style.display = "";
                if (bHm.length == 1) {
                    E.dt(this.gs.parentNode.parentNode, " m-goodcnt-1", "m-goodcnt-2")
                }
                p.Qd.bG(bHm, this.gs, {big: bHm.length == 1})
            } else {
                E.hv(this.Y)
            }
        }.A(this))
    };
    EP.ke = function() {
        var bk = E.mF("m-relative-ntp-0"), bHk = E.bj(bk, "xtag"), i = 0;
        this.gs = bHk[0];
        return bk
    };
    p.Qd = C();
    zy = p.Qd.bi(P(N.ut).fc, true);
    zy.bq = function() {
        this.bHq("m-relative-ntp-1");
        var bHk = E.bj(this.Y, "itag"), i = 0;
        this.bD = bHk[i++];
        this.er = bHk[i++]
    };
    zy.bHu = function(I) {
        I = I || O;
        this.Wx = !!I.big
    };
    zy.ce = function(bHm) {
        p.Qd.bw.ce.call(this, bHm);
        this.er.innerText = bHm.tagName || "";
        this.bD.src = this.bxx();
        this.bD.parentNode.href = loft.x.bM() + "/tag/" + (bHm.tagName || "") + "?first=" + (bHm.permalink || "")
    };
    zy.bxx = function() {
        var VN = this.bHp.imageUrl2 || "", bp = this.bHp.imageUrl || "";
        if (!bp || !VN)
            return "";
        if (bp.indexOf("xiami.com") == -1) {
            return !!this.Wx ? VN : bp
        }
        if (!!this.Wx) {
            return bp.replace(/^(.+)[\d]\.jpg$/, "$1" + "4.jpg")
        }
        return bp
    }
})();
(function() {
    var p = P("loft.w"), bIZ;
    p.bTk = C();
    bIZ = p.bTk.bi(p.fr, true);
    bIZ.bq = function(bl, I) {
        I = I || {};
        this.Ma = I.tags || "";
        I.title = I.title || "发布“城”的:";
        this.bHq(bl, I)
    };
    bIZ.cU = function() {
        return "m-citypop"
    };
    bIZ.cM = function() {
        return '<ul class="type-list"><li class="type-txt"><a href="#" class="n1 wtag" target="_blank">文字</a></li><li class="type-img"><a href="#" class="n2 wtag" target="_blank">图片</a></li></ul>'
    };
    bIZ.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bbK = bHk[0];
        this.bwb = bHk[1];
        var Bs = loft.c.cm.blogName || "";
        var tags = encodeURIComponent(this.Ma);
        if (!!Bs) {
            this.bbK.href = "http://www.lofter.com/blog/" + Bs + "/new/text?extraTags=" + tags;
            this.bwb.href = "http://www.lofter.com/blog/" + Bs + "/new/photo?extraTags=" + tags
        } else {
            this.bbK.href = this.bwb.href = "http://www.lofter.com/login?target=" + encodeURIComponent(location.href)
        }
    }
})();
(function() {
    var p = P("loft.w"), bIZ;
    p.bSY = C();
    bIZ = p.bSY.bi(p.fr, true);
    bIZ.bq = function(bl, I) {
        I = I || {};
        this.Ma = I.tags || "";
        I.title = I.title || "发布“城”的:";
        this.bHq(bl, I)
    };
    bIZ.cU = function() {
        return "m-citypop"
    };
    bIZ.cM = function() {
        return '<ul class="type-list type-list-all"><li class="type-txt"><a href="#" class="n1 wtag" target="_blank">文字</a></li><li class="type-img"><a href="#" class="n2 wtag" target="_blank">图片</a></li><li class="type-music"><a href="#" class="n3 wtag" target="_blank">音乐</a></li><li class="type-video"><a href="#" class="n4 wtag" target="_blank">视频</a></li></ul>'
    };
    bIZ.cc = function() {
        var bHk = E.bj(this.Y, "wtag");
        this.bbK = bHk[0];
        this.bwb = bHk[1];
        this.bSV = bHk[2];
        this.bWi = bHk[3];
        var Bs = loft.c.cm.blogName || "";
        var tags = encodeURIComponent(this.Ma);
        E.ba(this.ei.nJ.parentNode, "m-layer-all");
        if (!!Bs) {
            this.bbK.href = "http://www.lofter.com/blog/" + Bs + "/new/text?extraTags=" + tags;
            this.bwb.href = "http://www.lofter.com/blog/" + Bs + "/new/photo?extraTags=" + tags;
            this.bSV.href = "http://www.lofter.com/blog/" + Bs + "/new/music?extraTags=" + tags;
            this.bWi.href = "http://www.lofter.com/blog/" + Bs + "/new/video?extraTags=" + tags
        } else {
            this.bbK.href = this.bwb.href = this.bSV.href = this.bWi.href = "http://www.lofter.com/login?target=" + encodeURIComponent(location.href)
        }
    }
})();
(function() {
    var p = P("loft.m.search"), px;
    var mA = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
    p.Vs = C();
    px = p.Vs.bi(P("loft.w").cV, true);
    px.bq = function() {
        this.bHq();
        this.bHo = this.bHo || P("loft.c").crN || {};
        this.dK();
        this.er = this.bHo.tag || "";
        this.IQ = this.bHo.favTagId || 0;
        if (!!this.bHo.isgooglead3) {
            this.dl = new (P("loft.d").bgc)(this.bHo.g3blogIds, this.bHo.g3postIds)
        } else {
            this.dl = new (P("loft.d").qe)({type: this.bHo.type,first: this.bHo.first || "",tag: this.bHo.tag || "",recommType: this.bHo.recommType || "",isrecommender: !!this.bHo.recommenderRole,rtagId: this.bHo.rtagId || 0,rtagRank: this.bHo.rtagRank || 0});
            this.dl.bHn("onfavtag", this.Vo.A(this, true));
            this.dl.bHn("unfavtag", this.Vo.A(this, false))
        }
        this.bHo.offset = this.bHo.offset || 0;
        var cq = this.bHo.offset > 0 ? 1 : 0;
        if (this.bHo.currentPage > 1)
            cq = 1;
        this.bHo.from = this.bHo.ishotrecompost ? "hot" : "tag";
        var cbM = {tag: this.er,from: this.bHo.from,page: cq || 0,pageNewMode: this.bHo.pageNewMode,expand: this.bHo.isgooglead3 || this.bHo.ishotrecompost,tcache: this.dl,empty: "该标签下暂时没有内容",recommenderRole: this.bHo.recommenderRole,rtagRank: this.bHo.rtagRank || 0,wallPostNum: this.bHo.wallPostNum || 0,isActivityTagEditor: this.bHo.isActivityTagEditor || false};
        cbM.pageconfig = this.bHo;
        this.tU = new (P("loft.m.dashboard").qy)(this.wU, cbM);
        this.tU.bE();
        if (this.bHo.isgooglead3 && loft.c.cm.userId <= 0) {
            new (P("loft.m.dashboard").Zz);
            return
        }
        this.dV = new loft.m.blog.SG("tageditor", {tcache: this.dl,rtagId: this.bHo.rtagId,rtagRank: this.bHo.rtagRank,recommenderRole: this.bHo.recommenderRole || 0,isActivityTagEditor: this.bHo.isActivityTagEditor || false,callback: this.cbN.A(this)});
        this.bFR = new loft.m.dashboard.WW(this.bxE, {tag: this.er});
        this.bxF();
        this.bMj();
        this.cbP();
        this.cbQ();
        V.bHn(window, "scroll", this.bVV.A(this))
    };
    px.cbQ = function() {
        if (!this.bVU)
            return;
        this.cix = {targetBlogInfo: this.bHo.targetBlogInfo,flashSessionCookie: this.bHo.v,lastCCType: this.bHo.lastCCType,postOverNum: this.bHo.postOverNum,blogList: this.bHo.blogList,ue_cfg_develop: this.bHo.ue_cfg_develop,ue_js_version: this.bHo.ue_js_version,allowUploadDIYMusic: !!this.bHo.allowUploadDIYMusic};
        this.cix.mydomains = this.bHo.mydomains || {};
        var bHk = E.bj(this.bVU, "ztag"), bVL = bHk[0], bVJ = bHk[1], cbR = bHk[2], bRn = bHk[3], bVw = bHk[4];
        var nw = !!this.bHo.activityTagPrev;
        this.bRn = bRn;
        V.bHn(cbR, "click", function(bHl) {
            V.bb(bHl);
            if (nw)
                return;
            if (!!this.bVo) {
                E.ba(bVw, "layer-hover")
            } else {
                E.bf(bVw, "layer-hover")
            }
            this.bVo = !this.bVo
        }.A(this));
        V.bHn(bRn, "click", this.cgR.A(this));
        var g = P("loft.g");
        g.expandActivityTag = function(bHl) {
            V.bb(bHl);
            if (nw)
                return;
            if (!!this.bVm) {
                E.bf(bVL, "m-icnt-all");
                bVJ.style.width = "164px"
            } else {
                E.ba(bVL, "m-icnt-all");
                bVJ.style.width = "auto"
            }
            this.bVm = !this.bVm
        };
        var cnE = bVw.getElementsByTagName("A");
        for (var i = 0, l = cnE.length; i < l; i++) {
            V.bHn(cnE[i], "click", this.cki.A(this, i))
        }
        if (location.href.split("?")[1] === "openpublishlayer") {
            E.bf(bVw, "layer-hover")
        }
        var bVb = document.getElementById("activityinfo").getElementsByTagName("A"), i = 0, l = bVb.length, aitem;
        for (; i < l; i++) {
            cDX = bVb[i];
            if (!!cDX.getAttribute("onmouseover")) {
                continue
            }
            if (!!cDX.getAttribute("loftermentionblogId")) {
                var cEe = parseInt(cDX.getAttribute("loftermentionblogId"));
                V.bHn(cDX, "mouseover", this.cwq.A(this, true, cDX, cEe));
                V.bHn(cDX, "mouseout", this.cwq.A(this, false, cDX, cEe));
                continue
            }
            var cEb = cDX.href, cEd = cEb.split("="), cEc = parseInt(cEd[cEd.length - 1]);
            if (!!cEb && cEb.indexOf("lofter.com") > 0 && !!cEc) {
                V.bHn(cDX, "mouseover", this.cwq.A(this, true, cDX, cEc));
                V.bHn(cDX, "mouseout", this.cwq.A(this, false, cDX, cEc));
                continue
            }
        }
    };
    px.cwq = function(gu, CL, dA, bHl) {
        if (!!gu) {
            loft.g.dousercard(CL, dA, gu)
        } else {
            loft.g.dousercard(CL, dA, gu)
        }
        V.bb(bHl)
    };
    px.cki = function(Q, bHl) {
        var cly = P("loft.m.newpublish.w").ciU();
        if (!cly || loft.c.cm.userId <= 0)
            return;
        V.bb(bHl);
        var X = V.be(bHl);
        var I = this.cix;
        I.postType = Q + 1;
        I.editorType = this.cpS(Q + 1);
        I.actionType = "NEW";
        I.submitUrl = X.href;
        var crI = {};
        crI.publishOptions = I;
        P("loft.m.newpublish.w").cqt.YV(crI)
    };
    px.cpS = function(by) {
        switch (by) {
            case 4:
                return "video";
            case 3:
                return "music";
            case 2:
                return "photo";
            case 1:
                return "text"
        }
    };
    px.cgR = function(bHl) {
        V.bb(bHl);
        if (!loft.c.cm.userId) {
            loft.w.ED.bE({parent: document.body,target: location.href});
            return
        }
        if (E.cr(this.bRn, "recommend-1")) {
            J.br(location.dwr, "TagBean", "recommendActivityTag", this.bHo.activityTagId || 0, this.bsG.A(this))
        }
    };
    px.bsG = function(bHm) {
        if (!!bHm) {
            E.bY("推荐成功");
            E.bf(this.bRn, "recommend-1");
            this.bRn.innerHTML = "已推荐"
        }
    };
    px.cbP = function() {
        var activeAPI = P("loft.g.active");
        activeAPI.postDialog = function(bHl, ck, eM, fW) {
            if (fW == 1) {
                if (!!loft.c.cm.blogName) {
                    var bp = "http://www.lofter.com/blog/" + loft.c.cm.blogName + "/new/photo?extraTags=" + encodeURIComponent(ck);
                    window.open(bp)
                } else {
                    location.href = "http://www.lofter.com/login?target=" + encodeURIComponent(location.href)
                }
                return
            }
            ck = ck || "城,城市画报";
            eM = eM || "发布“城”的:";
            if (!!loft.c.cm.blogName) {
                fW == 2 ? loft.w.bSY.bE({parent: document.body,tags: ck,title: eM}) : loft.w.bTk.bE({parent: document.body,tags: ck,title: eM})
            } else {
                location.href = "http://www.lofter.com/login?target=" + encodeURIComponent(location.href)
            }
        }
    };
    px.bMj = function() {
        var bJi = E.be("urs_logined_email_provider"), bHU = E.be("urs_logined_email_name");
        if (!!bJi && !!bHU) {
            var bKl = bJi.clientWidth || bJi.offsetWidth, bMi = bHU.clientWidth || bHU.offsetWidth;
            if (bKl + bMi > 192) {
                bHU.style.width = 192 - bKl + "px"
            }
            bHU.parentNode.style.visibility = "visible"
        }
        if (B.dh) {
            var KI = E.be("urs_logined_sd_cnt");
            if (!!KI) {
                KI.firstChild.style.zoom = 1
            }
        }
    };
    px.dK = function() {
        var bHk = E.be("main", "radarbox", "searchbox", "favtag", "favtagc", "unfavtag", "rside", "grelativetag", "m-activity-module");
        this.wU = bHk[0];
        this.BL = bHk[1];
        this.CN = bHk[2];
        this.zQ = bHk[3];
        this.bxH = bHk[4];
        this.Vl = bHk[5];
        this.xE = bHk[6];
        this.bxE = bHk[7];
        this.bVU = bHk[8];
        this.UT = this.bxK.A(this);
        P("m");
        window.m.unfav = this.UT;
        V.bHn(this.zQ, "click", this.bxL.A(this));
        V.bHn(this.Vl, "click", this.UT)
    };
    px.cbN = function() {
        this.bVV();
        window.setTimeout(this.bxQ.A(this), 310)
    };
    px.bVV = function(bHl) {
        var KI = E.be("urs_logined_sd_cnt");
        if (!!KI) {
            V.bb(bHl);
            var kj = mA();
            var AF = this.xE.clientHeight || this.xE.offsetHeight || 300;
            if (kj > AF + 35) {
                E.ba(KI, "f-ps")
            } else {
                E.bf(KI, "f-ps")
            }
        }
    };
    px.bxL = function(bHl) {
        V.bb(bHl);
        if (E.cr(this.zQ, "w-vsbtn-3")) {
            this.dl.bvr(this.er)
        } else if (E.cr(this.zQ, "w-vsbtn-4")) {
            this.dl.bvq(this.IQ)
        }
    };
    px.bxK = function(bHl) {
        V.bb(bHl);
        this.dl.bvq(this.IQ)
    };
    px.Vo = function(bxM, bu) {
        var nR;
        if (!!bu) {
            if (!!bxM) {
                this.IQ = bu;
                nR = "订阅标签成功";
                E.ba(this.zQ, "itagfav-hide");
                window.setTimeout(function() {
                    this.zQ.innerHTML = " ";
                    E.dt(this.zQ, "w-vsbtn-3", "w-vsbtn-4");
                    E.bf(this.zQ, "itagfav-hide")
                }.A(this), 400);
                var CL = E.eY('<h2 style="position:absolute;left:30px;top:22px;width:100%;height:31px;overflow:hidden;background-position:-9999px -9999px;">' + this.er + "</h2>");
                this.zQ.parentNode.parentNode.insertAdjacentElement("afterBegin", CL);
                this.cv = window.setInterval(this.cbV.A(this, CL), 10);
                window.setTimeout(function() {
                    E.be("favtagcnew").insertAdjacentElement("afterBegin", this.GJ())
                }.A(this), 1200)
            } else {
                var cbW = E.be("ftagid" + this.IQ);
                this.IQ = 0;
                nR = "取消订阅成功";
                E.ba(this.zQ, "itagfav-hide");
                window.setTimeout(function() {
                    this.zQ.innerHTML = "订阅";
                    E.dt(this.zQ, "w-vsbtn-4", "w-vsbtn-3");
                    E.bf(this.zQ, "itagfav-hide")
                }.A(this), 400);
                window.setTimeout(function() {
                    E.hv(cbW)
                }.A(this), 300)
            }
            window.setTimeout(function() {
                window.m.n.refreshFavTagList()
            }.A(this), 1300);
            window.m.refreshRadar && window.m.refreshRadar()
        }
    };
    px.cbV = function(CL) {
        var cbX = -.15, Pw = 17.5, bRo = parseInt(E.oS(CL, "left").replace("px", ""));
        CL.style.left = bRo + 20 + "px";
        CL.style.top = cbX * (bRo + 5) + Pw + "px";
        if (bRo >= 630) {
            window.clearInterval(this.cv);
            var bNH = E.be("nav2flnew");
            if (bNH.style.display == "none") {
                bNH.style.display = "";
                E.bf(bNH.parentNode, "f-op0")
            } else {
                E.ba(bNH.parentNode, "f-op0")
            }
            E.hv(CL);
            window.setTimeout(this.cbY, 300)
        }
    };
    px.cbY = function() {
        var CL = E.be("nav2flnew");
        if (E.cr(CL.parentNode, "f-op0")) {
            E.bf(CL.parentNode, "f-op0")
        } else {
            E.ba(CL.parentNode, "f-op0");
            CL.style.display = "none"
        }
        E.bf(E.be("nav2flnew").parentNode, "f-op0")
    };
    px.GJ = function() {
        if (!this.lX) {
            this.lX = E.eY('<div class="seli first"><a href="/tag/1"><div class="name nonew ttag">1</div></a></div>')
        }
        this.lX.id = "ftagid" + (this.IQ || 0);
        var bHk = E.bj(this.lX, "ttag");
        bHk[0].innerText = this.er || "";
        bHk[0].parentNode.href = "/tag/" + (this.er || "");
        return this.lX
    };
    px.bxF = function() {
        this.zS = E.be("g-tagSearchLofterEntry");
        if (!!this.zS) {
            if (!B.dh) {
                window.setTimeout(function() {
                    V.bHn(window, "scroll", this.bxQ.A(this))
                }.A(this), 1e3)
            }
            this.xE.appendChild(this.zS)
        }
    };
    px.bxP = function() {
        window.setTimeout(this.bxQ.A(this), 20)
    };
    var bRt = false;
    px.bxQ = function() {
        if (B.dh || !this.zS)
            return;
        var kj = mA();
        var UP = "f-ps12";
        var AF = this.xE.clientHeight || this.xE.offsetHeight || 300;
        var cca = !!bRt ? 0 : 285;
        if (kj > AF - cca + 35) {
            E.ba(this.zS, UP);
            bRt = true
        } else {
            E.bf(this.zS, UP);
            bRt = false
        }
    };
    px.cjc = function(bHm, pa) {
        if (!this.ciS) {
            var cjy = E.be("loadfirst");
            if (!cjy)
                return;
            this.ciS = document.cloneElement("div", "appendPostParent");
            cjy.insertAdjacentElement("afterEnd", this.ciS)
        }
        if (!!this.tU && !!this.ciS) {
            this.tU.cjc(bHm, this.ciS, pa)
        }
    };
    p.Vs.cmJ = new p.Vs
})()
