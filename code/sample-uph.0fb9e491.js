import{s as g,r as u,$ as b,n as h}from"./index.35101019.js";import{i as s}from"./query.0830c8af.js";var m=Object.defineProperty,v=Object.getOwnPropertyDescriptor,l=(o,e,n,t)=>{for(var a=t>1?void 0:t?v(e,n):e,r=o.length-1,c;r>=0;r--)(c=o[r])&&(a=(t?c(e,n,a):c(a))||a);return t&&a&&m(e,n,a),a};let i=class extends g{constructor(){super()}async _showUrlParameters(){const o=location.search;if(console.log(o),o.trim()){this._msg.innerHTML=`
        search: ${o}, \u6210\u529F\u8C03\u7528
      `;let e=o.replace("?pwadev=web%2Bpwadev%3A%2F%2F","");e=e.slice(0,-3),e=decodeURI(e),console.log(e),console.log(`https://restapi.amap.com/v3/geocode/geo?address=${e}&output=JSON&key=39a5a5f5239a28b739e6a79381afb97e`);const t=await(await fetch(`https://restapi.amap.com/v3/geocode/geo?address=${e}&output=JSON&key=39a5a5f5239a28b739e6a79381afb97e`)).json();console.log(t);let a=t.geocodes;console.log(a);let r=a[0].location;this._geolocation.innerHTML="\u7ECF\u7EAC\u5EA6\uFF1A"+r;let d=await(await fetch(`https://restapi.amap.com/v3/staticmap?location=${r}&zoom=10&size=375*250&markers=mid,,A:${r}&key=39a5a5f5239a28b739e6a79381afb97e`)).blob();const p=URL.createObjectURL(d);this._map.innerHTML=`<img src="${p}">`}else this._msg.innerHTML="\u65E0 web+pwadev://* \u8C03\u7528"}_updateUph(){let o=`web+pwadev://${this._iuph.value}`;this._uph.innerHTML=o,this._uph.href=o}async connectedCallback(){super.connectedCallback(),setTimeout(()=>{this._showUrlParameters()},3e3)}static get styles(){return u`
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

    fluent-card h3 {
      font-weight: 400;
    }

    `}render(){return b`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>URL 协议处理 (URL Protocol Handler)</h2>
        使用特定协议的链接调用已安装的 PWA，获得更集成的体验。<br><br>
        <fluent-card class="act">
          <ul>
            <li>访问 <a href="https://pwadev.io">https://pwadev.io</a></li>
            <li>安装为本地 PWA 应用</li>
            <li>重启浏览器，访问 <a href="https://pwadev.io/sample/url-protocol-handler">https://pwadev.io/sample/url-protocol-handler</a> </li>
            <li>点击 <a href="web+pwadev://北京市西城区景山西街44号" id="uph">web+pwadev://北京市西城区景山西街44号</a></li>
            <li>自动启动 "中国 PWA 开发者日"</li>
            <li>显示浏览器中查询的地址经纬度及地图</li>
          </ul>
          <h3>经纬度及地图查询</h3>
          <input id="iuph" value="上海市浦东新区迎宾大道6000号" size="20"> <input type="button" value="更新URL" @click="${this._updateUph}">

          <div id="msg"></div>
          <div id="geolocation"></div>
          <div id="map"></div>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/url-protocol-handler/" title="URL protocol handler registration for PWAs">
              教程：注册 PWA 的 URL 协议
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://pr-preview.s3.amazonaws.com/w3c/manifest/pull/972.html#protocol_handlers-member" title="Web Application Manifest: URL Protocol Handler">Web Application Manifest: URL Protocol Handler</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5151703944921088" title="在 Chromium 96 版本支持">🐡 M96</a>
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
                <icon-and class="no" title="Android"></icon-and> <icon-ios class="no" title="iOS"></icon-ios>
              </div>
            </div>   
          </div>
        </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};l([s("#msg")],i.prototype,"_msg",2);l([s("#uph")],i.prototype,"_uph",2);l([s("#iuph")],i.prototype,"_iuph",2);l([s("#geolocation")],i.prototype,"_geolocation",2);l([s("#map")],i.prototype,"_map",2);i=l([h("sample-uph")],i);export{i as SampleUPH};
//# sourceMappingURL=sample-uph.0fb9e491.js.map
