// public/sj-snippet.js
(function () {
  // run once
  if (window.__SJ_MOUNTED__) return;
  window.__SJ_MOUNTED__ = true;

  // ===== CONFIGURATION =====
  var STEPHEN_IMAGE_URL = "https://slides.neverleavetheplayground.com/assets/img/watch-26-66.jpg";
  var CHATBOT_URL = "https://stephenjepson-chatbot.netlify.app/";

  var VIDEO1_LINK = "https://payhip.com/b/MbNq8"; // Never Leave The Playground Active Video
  var VIDEO2_LINK = "https://payhip.com/b/Bd7MQ"; // The 5 in One Video

  var SHARE_MESSAGE =
    "🎉 I just got Stephen Jepson’s best videos for $1 each!\n\n" +
    "Use these links (coupon auto-applied at checkout):\n" +
    "👉 Never Leave The Playground Active Video: " + VIDEO1_LINK + "\n" +
    "👉 The 5 in One Play Active Video: " + VIDEO2_LINK + "\n\n" +
    "You should check it out too!";

  // ===== Helpers =====
  function ready(fn){
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }
  function make(el, props, styles) {
    var node = document.createElement(el);
    if (props) Object.keys(props).forEach(function (k) { node[k] = props[k]; });
    if (styles) Object.keys(styles).forEach(function (k) { node.style[k] = styles[k]; });
    return node;
  }
  function copyText(text) { try { navigator.clipboard.writeText(text); } catch (e) {} }
  function openWin(url) { window.open(url, "_blank", "noopener,noreferrer"); }
  function buttonBase(bg, color) {
    return {
      position: "fixed", bottom: "30px", zIndex: "99999",
      background: bg, color: color, border: "none", borderRadius: "17px",
      padding: "13px 22px", fontWeight: "bold", fontSize: "16px",
      boxShadow: "0 3px 14px rgba(0,0,0,0.11)", cursor: "pointer"
    };
  }
  function esc(u){ return String(u).replace(/"/g, "&quot;"); }

  ready(function init() {
    if (document.getElementById("sj-chat-btn")) return; // already mounted

    // Chat button
    var chatBtn = make("button",
      { id: "sj-chat-btn", innerHTML: '<img src="'+esc(STEPHEN_IMAGE_URL)+'" style="width:30px;height:30px;border-radius:50%;vertical-align:middle;margin-right:9px;"> Chat with Stephen', ariaLabel: "Open chat" },
      Object.assign(buttonBase("#2a8bdb","#fff"), { right: "30px", borderRadius: "20px", padding: "13px 22px", fontSize: "17px", display: "flex", alignItems: "center", gap: "9px", boxShadow: "0 4px 18px rgba(0,0,0,0.13)" })
    );
    document.body.appendChild(chatBtn);

    // Chat iframe
    var iframe = make("iframe", { id: "sj-chat-iframe", src: CHATBOT_URL, title: "Stephen Jepson Chatbot" }, {
      position: "fixed", bottom: "90px", right: "30px", width: "390px", height: "540px",
      border: "none", borderRadius: "18px", boxShadow: "0 12px 36px rgba(0,0,0,0.23)",
      display: "none", background: "rgba(255,255,255,0.97)", zIndex: "100000"
    });
    document.body.appendChild(iframe);

    // Close X
    var closeBtn = make("button", { id: "sj-chat-close", innerHTML: "×", title: "Close chat", ariaLabel: "Close chat" }, {
      position: "fixed", bottom: "600px", right: "54px", zIndex: "100001",
      width: "40px", height: "40px", fontSize: "27px", background: "#2a8bdb",
      color: "#fff", border: "none", borderRadius: "50%", boxShadow: "0 2px 8px rgba(0,0,0,0.16)", display: "none", cursor: "pointer"
    });
    document.body.appendChild(closeBtn);

    chatBtn.onclick = function () {
      var show = (iframe.style.display === "none");
      iframe.style.display = show ? "block" : "none";
      closeBtn.style.display = show ? "block" : "none";
    };
    closeBtn.onclick = function () {
      iframe.style.display = "none";
      closeBtn.style.display = "none";
    };

    // Share button (toggle panel)
    var shareBtn = make("button", { id: "sj-share-btn", innerHTML: "🎉 Share $1 Deal", ariaLabel: "Share the $1 deal" },
      Object.assign(buttonBase("#f7b801","#111"), { right: "210px" })
    );
    document.body.appendChild(shareBtn);

    // Panel
    var panel = make("div", { id: "sj-share-panel", role: "dialog", ariaLabel: "Share and quick links" }, {
      position: "fixed", bottom: "90px", right: "30px", zIndex: "100002",
      width: "360px", maxWidth: "calc(100vw - 40px)", background: "#fff", color: "#111",
      borderRadius: "16px", boxShadow: "0 14px 38px rgba(0,0,0,0.22)", padding: "14px", display: "none",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial"
    });

    var title = make("div", { innerHTML: "Share & Quick Links" }, { fontWeight: "700", fontSize: "17px", marginBottom: "8px" });
    panel.appendChild(title);

    // Payhip CTAs
    var ctas = make("div", null, { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" });
    var v1Link = make("a", { href: VIDEO1_LINK, target: "_blank", rel: "noopener noreferrer", innerText: "Get Play Video " }, {
      textAlign: "center", padding: "10px 12px", borderRadius: "12px", background: "#2a8bdb", color: "#fff", textDecoration: "none", fontWeight: "600"
    });
    var v2Link = make("a", { href: VIDEO2_LINK, target: "_blank", rel: "noopener noreferrer", innerText: "Get 5 In 1 Video " }, {
      textAlign: "center", padding: "10px 12px", borderRadius: "12px", background: "#16a34a", color: "#fff", textDecoration: "none", fontWeight: "600"
    });
    ctas.appendChild(v1Link); ctas.appendChild(v2Link); panel.appendChild(ctas);

    // Quick share row
    var row = make("div", null, { display: "flex", gap: "8px", marginBottom: "10px" });
    var quick = make("button", { innerText: "Share to Apps", title: "Use your phone’s share sheet" }, {
      flex: "1", padding: "10px 12px", borderRadius: "12px", border: "none",
      background: "#111", color: "#fff", fontWeight: "700", cursor: "pointer"
    });
    quick.onclick = function () {
      if (navigator.share) {
        navigator.share({ title: "Stephen Jepson $1 Playground Videos", text: SHARE_MESSAGE }).catch(function(){});
      } else { copyText(SHARE_MESSAGE); flash("Copied! Paste into your app."); }
    };
    var copyBtn = make("button", { innerText: "Copy Message", title: "Copy share text" }, {
      padding: "10px 12px", borderRadius: "12px", border: "1px solid #ddd",
      background: "#fff", color: "#111", fontWeight: "700", cursor: "pointer"
    });
    copyBtn.onclick = function(){ copyText(SHARE_MESSAGE); flash("Copied to clipboard!"); };
    row.appendChild(quick); row.appendChild(copyBtn); panel.appendChild(row);

    // Social buttons
    var socials = make("div", null, { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" });
    function soc(label, onClick) {
      var b = make("button", { innerText: label, title: "Share to " + label }, {
        padding: "9px 8px", borderRadius: "12px", border: "1px solid #e6e6e6",
        background: "#fafafa", color: "#111", fontWeight: "600", cursor: "pointer", fontSize: "13px"
      });
      b.onclick = onClick; return b;
    }
    function shareOrCopyThenOpen(name, url) {
      if (navigator.share) {
        navigator.share({ title: "Stephen Jepson $1 Playground Videos", text: SHARE_MESSAGE }).catch(function(){});
      } else { copyText(SHARE_MESSAGE); flash("Copied! Paste into " + name + "."); openWin(url); }
    }
    function fbShare(link) {
      var u = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link || VIDEO1_LINK);
      openWin(u);
    }
    socials.appendChild(soc("IG", function(){ shareOrCopyThenOpen("Instagram", "https://www.instagram.com/"); }));
    socials.appendChild(soc("Facebook", function(){ fbShare(VIDEO1_LINK); }));
    socials.appendChild(soc("TikTok", function(){ shareOrCopyThenOpen("TikTok", "https://www.tiktok.com/"); }));
    socials.appendChild(soc("Snap", function(){ shareOrCopyThenOpen("Snapchat", "https://www.snapchat.com/"); }));
    panel.appendChild(socials);

    var fbAlt = make("div", null, { marginTop: "8px", fontSize: "12px", color: "#555" });
    fbAlt.innerHTML = 'Want Facebook for Video 2 instead? <a href="#" id="sj-fb-v2">Click here</a>.';
    panel.appendChild(fbAlt);
    fbAlt.querySelector("#sj-fb-v2").addEventListener("click", function(e){ e.preventDefault(); fbShare(VIDEO2_LINK); });

    var note = make("div", { id: "sj-note" }, { marginTop: "8px", fontSize: "12px", color: "#0a7a2a", minHeight: "16px" });
    function flash(msg){ note.textContent = msg; setTimeout(function(){ note.textContent = ""; }, 1800); }
    panel.appendChild(note);

    document.body.appendChild(panel);
    document.getElementById("sj-share-btn").onclick = function(){ panel.style.display = (panel.style.display === "none" ? "block" : "none"); };
  });

  // simple log so you can verify load
  try { console.log("[SJ] snippet loaded"); } catch(e){}
})();
