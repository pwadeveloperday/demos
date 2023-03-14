import{s as c,r as p,$ as u,n as b}from"./index.aa424184.js";import{i as o}from"./query.0830c8af.js";var h=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(e,r,n,l)=>{for(var t=l>1?void 0:l?g(r,n):r,s=e.length-1,d;s>=0;s--)(d=e[s])&&(t=(l?d(r,n,t):d(t))||t);return l&&t&&h(r,n,t),t};let a=class extends c{constructor(){super()}async connectedCallback(){super.connectedCallback()}_checkBasicFileShare(){const e=new Blob(["Hello, world!"],{type:"text/plain"}),r=new File([e],"test.txt");return navigator.canShare({files:[r]})}async _share(){this._checkBasicFileShare()&&(this._output.innerHTML="\u60A8\u7684\u6D4F\u89C8\u5668\u652F\u6301\u6587\u4EF6\u5206\u4EAB");let e=this._files.files;(e==null?void 0:e.length)===0?(this._output.innerHTML="\u6CA1\u6709\u9009\u62E9\u6587\u4EF6, \u5206\u4EAB\u7F51\u5740",navigator.share&&await navigator.share({title:this._title.value,text:this._text.value,url:this._url.value})):(this._output.innerHTML="\u6587\u4EF6\u5DF2\u9009, \u5206\u4EAB\u6587\u4EF6",navigator.share&&await navigator.share({files:e,title:this._title.value,text:this._text.value}))}static get styles(){return p`
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
      text-decoration: none;
      border-bottom: 1px dashed rgba(0, 113, 197, 0.6);
    }

    .act a:hover {
      color: rgba(0, 113, 197, 1);
      border-bottom: 1px dashed rgba(0, 113, 197, 0.9);
    }

    `}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>Web 共享 (Web Share) API</h2>
        <fluent-card class="act">
        <table>
          <tr>
            <td>
              标题:
            </td>
            <td>
              <input id="title" value="中国 PWA 开发者日" size="34">
            </td>
          </tr>
          <tr>
            <td>
              内容:
            </td>
            <td>
              <textarea id="text" name="text" cols="33" rows="3">欢迎参加 2022 第二届中国 PWA 开发者日，了解最新 PWA 技术。</textarea>
            </td>
          </tr>
          <tr>
            <td>
              URL:
            </td>
            <td>
              <input id="url" value="https://pwadev.io" size="34">
            </td>
          </tr>
          <tr>
            <td>
              文件:
            </td>
            <td>
              <input id="files" type="file" multiple>
            </td>
          </tr>
        </table>
        <p style="text-align: center">
          <input id="share" type="button" value="分享" @click="${this._share}">
        </p>
        <div id="output"></div>
 
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/web-share/" title="Integrate with the OS sharing UI with the Web Share API">
              教程：通过 Web Share API 与系统共享集成
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://w3c.github.io/web-share/" title="Web Share">Web Share</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5668769141620736" title="在 Chromium 89 版本支持">🐡 M89</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome 浏览器"></icon-chr>
              <icon-edg class="yes" title="微软 Edge 浏览器"></icon-edg> <icon-ope class="yes" title="Opera 浏览器"></icon-ope> <icon-viv class="yes" title="Vivaldi 浏览器"></icon-viv>
              <icon-saf class="yes" title="Apple Safari 浏览器"></icon-saf> <icon-fir class="no" title="Mozilla Firefox 浏览器"></icon-fir>
              </div>
            </div>
            <div class="des">
              <div class="det">
                <icon-mac class="yes" title="Mac"></icon-mac> <icon-win class="yes" title="Windows"></icon-win> <icon-lin class="yes" title="Linux"></icon-lin> 
              </div>
              <div class="det">
                <icon-and class="yes" title="Android"></icon-and> <icon-ios class="yes" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};i([o("#title")],a.prototype,"_title",2);i([o("#text")],a.prototype,"_text",2);i([o("#url")],a.prototype,"_url",2);i([o("#files")],a.prototype,"_files",2);i([o("#output")],a.prototype,"_output",2);a=i([b("sample-ws")],a);export{a as SampleWS};
//# sourceMappingURL=sample-ws.f4df8268.js.map
