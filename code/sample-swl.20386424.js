import{s as d,r as u,$ as p,e as g,n as b}from"./index.1d9cd92e.js";import{i as l}from"./query.0830c8af.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,r=(e,t,n,o)=>{for(var a=o>1?void 0:o?h(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(a=(o?c(t,n,a):c(a))||a);return o&&a&&m(t,n,a),a};let i=class extends d{constructor(){super(),this._log=""}_logMsg(e){this._msg.innerHTML+=`${new Date().toUTCString()} ${e}<br>`}async _visibility(){if("wakeLock"in navigator){let e;if(e){this._logMsg('Release "Screen" button pressed.'),e.release();return}try{this._logMsg("\u5DF2\u70B9\u51FB\u83B7\u53D6\u5C4F\u5E55\u5524\u9192\u9501\u6309\u94AE"),e=await navigator.wakeLock.request("screen"),this.screen_status.textContent="\u5DF2\u83B7\u53D6",this._logMsg("\u5C4F\u5E55\u5524\u9192\u9501\u5DF2\u83B7\u53D6"),e.addEventListener("release",()=>{this.screen_status.textContent="\u5DF2\u91CA\u653E",this._logMsg("\u5C4F\u5E55\u5524\u9192\u9501\u5DF2\u83B7\u53D6"),e=null})}catch(t){this.screen_status.textContent=`${t.name}: ${t.message}`,this._logMsg(`Caught ${t.name} acquiring "Screen" lock: ${t.message}`)}}document.addEventListener("visibilitychange",()=>{this._logMsg(`\u6587\u6863\u53EF\u89C1\u6027\uFF08document visibility\uFF09\u53D8\u4E3A "${document.visibilityState}"`)})}async connectedCallback(){super.connectedCallback()}static get styles(){return u`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
    }

    h2 {
      font-size: 1.2rem;
      color: rgba(0, 113, 197, 0.9);
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.5);
    }

    fluent-card:hover {
      background: rgba(255, 255, 255, 0.95);
      color: #000;
    }

    fluent-card h3 {
      margin: 10px auto;
    }

    fluent-card p {
      margin: 10px auto;
    }

    @media(prefers-color-scheme: light) {
    }

    @media(prefers-color-scheme: dark) {
    }

    @media (min-width: 1024px) {
    }

    .spam {
      display: none;
    }

    #status {
      display: inline;
    }

    #result {
      display: none;
    }

    .previewv {
      margin: 16px auto;
      text-align: left;
      writing-mode:vertical-rl;
      letter-spacing: 4px;
      font-size: 1.8rem;
    }

    .previewv h3, .previewv h4 {
      margin: 0 auto;
    }

    .previewv h4 {
      margin-left: 16px;
    }

    a {
      color: rgba(255, 255, 255, 0.9);

      text-decoration: none;
      border-bottom: 0px dashed rgba(255, 255, 255, 0.6);;
    }

    a:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
      border-bottom: 1px dashed rgba(255, 255, 255, 1);
    }

    #st {
      padding: 0;
    }

    #st {
      color: rgba(255, 255, 255, 0.9);
    }

    #st:hover {
      color: rgba(255, 255, 255, 1.0);
    }

    .tut {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
    }

    .tut a {
      color: rgba(0, 113, 197, 0.9);
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .tut a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    .w3c {
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 199, 253, 0.9);
    }
    .w3c:hover {
      background-color: rgba(0, 199, 253, 1.0);
    }
    
    .imp {
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 16px;
      margin: 0 auto;
      text-align: center;
      background-color: rgba(0, 113, 197, 0.9);
      align-items: center;
      justify-content: space-around;
    }
    .imp:hover {
      background-color: rgba(0, 113, 197, 1.0);
    }

    .imp .yes {
      fill: rgba(255, 255, 255, 0.9);
    }

    .imp:hover .yes {
      fill: rgba(255, 255, 255, 1.0);
    }

    .imp .no {
      fill: rgba(255, 255, 255, 0.1);
    }

    .imp:hover .no {
      fill: rgba(0, 0, 0, 0.4);
    }

    .des {
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 2px 8px;
    }

    .cate, .det {
      display: inline-block;
    }
    .cate .yes, .det .yes, .cate .no, .det .no{
      display: inline-block;
      width: 16px;
      padding: 0 4px;
    }

    .cate {
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      display: none;
    }

    .q {
      margin: 16px auto;
    }

    .w3clogo {
      margin-right: 6px;
    }

    .act div {
      margin-top: 16px;
    }

    .act a {
      color: rgba(0, 113, 197, 0.9);
      cursor: pointer;
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .act a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    #show {
      display: none;
    }

    .act div {
      background-color: rgba(0, 0, 0, 0.02);
      padding: 8px 16px;
    }

    #paste img {
      display: inline-block;
      width: 360px;
      margin: 0 auto;
    }

    #msg {
      font-size: 12px;
    }
    `}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>屏幕唤醒锁定 (Screen Wake Lock) API</h2>
        某些应用需要保持屏幕唤醒才能完成它们的工作，例如扫码健康码<br><br>
        <fluent-card class="act">
          <button id="screen" @click="${this._visibility}">屏幕唤醒锁</button> <span id="screen_status"></span>
          <div id="msg"></div>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/wake-lock/" title="Stay awake with the Screen Wake Lock API">
              教程：使用 Screen Wake Lock API
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://w3c.github.io/screen-wake-lock/" title="Screen Wake Lock API">Screen Wake Lock API</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/4636879949398016" title="在 Chromium 84 版本支持">🐡 M84</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome 浏览器"></icon-chr>
              <icon-edg class="yes" title="微软 Edge 浏览器"></icon-edg> <icon-ope class="yes" title="Opera 浏览器"></icon-ope> <icon-viv class="yes" title="Vivaldi 浏览器"></icon-viv>
              <icon-saf class="no" title="Apple Safari 浏览器"></icon-saf> <icon-fir class="no" title="Mozilla Firefox 浏览器"></icon-fir>
              </div>
            </div>
            <div class="des">
              <div class="det">
                <icon-mac class="yes" title="Mac"></icon-mac> <icon-win class="yes" title="Windows"></icon-win> <icon-lin class="yes" title="Linux"></icon-lin> 
              </div>
              <div class="det">
                <icon-and class="yes" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};r([l("#msg")],i.prototype,"_msg",2);r([l("#screen")],i.prototype,"screen",2);r([l("#screen_status")],i.prototype,"screen_status",2);r([g({type:String})],i.prototype,"_log",2);i=r([b("sample-swl")],i);export{i as SampleSWL};
//# sourceMappingURL=sample-swl.20386424.js.map
