import{s as p,r as f,$ as u,e as d,n as m}from"./index.5ef48c72.js";import{i as a}from"./query.0830c8af.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,n=(e,t,s,o)=>{for(var l=o>1?void 0:o?b(t,s):t,r=e.length-1,c;r>=0;r--)(c=e[r])&&(l=(o?c(t,s,l):c(l))||l);return o&&l&&h(t,s,l),l};let i=class extends p{constructor(){super(),this.enabled=!1,this.fontMap=new Map}async _showStatus(){if(window.queryLocalFonts)this.enabled=!0,console.log("queryLocalFonts() \u53EF\u7528");else{console.log("queryLocalFonts() \u4E0D\u5B58\u5728"),this.enabled=!1;return}const e=await navigator.permissions.query({name:"local-fonts"});let t;e.state==="granted"?t="\u5DF2\u6388\u4E88\u6743\u9650 \u{1F44D}":e.state==="prompt"?t="\u5C06\u8981\u8BF7\u6C42\u6743\u9650":t="\u6743\u9650\u88AB\u62D2\u7EDD \u{1F44E}",console.log(t),this.elemStatus.innerHTML=t}async _loadFonts(){if(!!this.enabled)try{this._reset();let e;if(e=await window.queryLocalFonts(),e.length===0){this.elemErrorMessage.innerText="\u65E0\u5B57\u4F53\u8FD4\u56DE.";return}this.elemResult.style.display="block",this.elemFontsSelect[0]=new Option("-- \u9009\u62E9\u5B57\u4F53 --",""),e.forEach((t,s)=>{this.fontMap.set(t.postscriptName,t),this.elemFontsSelect[s+1]=new Option(t.fullName,t.postscriptName)})}catch(e){this.elemErrorMessage.innerText=`\u65E0\u6CD5\u679A\u4E3E\u5B57\u4F53: ${e.message}`}finally{this._showStatus()}}_reset(){for(this.fontMap.clear();this.elemFontsSelect.options.length>0;)this.elemFontsSelect.remove(0);this.elemFontInfo.style.display="none",this.elemFontInfoPostscriptName.innerText="",this.elemFontInfoFullName.innerText="",this.elemFontInfoStyle.innerText="",this.elemFontInfoFamily.innerText="",this.elemErrorMessage.innerText=""}async _onFontSelected(){if(this.elemFontsSelect.value==="")return;const e=this.fontMap.get(this.elemFontsSelect.value);if(console.log(e),e){console.log(e.postscriptName),this.elemFontInfoPostscriptName.innerText=`Postscript Name: ${e.postscriptName}`,this.elemFontInfoFullName.innerText=`Full Name: ${e.fullName}`,this.elemFontInfoStyle.innerText=`Style: ${e.style}`,this.elemFontInfoFamily.innerText=`Family: ${e.family}`,this.elemFontInfoOutlineFormat.innerText=`Outline Format: ${await this._getFormat(e)}`,this.elemFontInfo.style.fontFamily="dynamic-font",this.elemFontInfo.style.display="block";let t=document.querySelector("#df");t&&t.remove();let s=`
      @font-face {
        font-family: "dynamic-font";
        src: local("${e.postscriptName}");
      }`,o=document.createElement("style");o.id="df",o.type="text/css",o.styleSheet?o.styleSheet.cssText=s:o.appendChild(document.createTextNode(s)),document.querySelectorAll("head")[0].appendChild(o)}else this.elemErrorMessage.innerText="Unable to load font data"}async _getFormat(e){const t=await e.blob(),s=new TextDecoder().decode(await t.slice(0,4).arrayBuffer());let o="UNKNOWN";switch(s){case"\0\0\0":case"true":case"typ1":o="truetype";break;case"OTTO":o="cff";break}return o}async connectedCallback(){super.connectedCallback(),await this._showStatus()}static get styles(){return f`
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

    fluent-card button.btn {
      border: 1px solid rgba(rgba(0, 113, 197, 0.9);
      background: rgba(255, 255, 255, 0.9);
      color: #3D3D3D;
    }
    `}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>本地字体访问 (Local Font Access) API</h2>
        访问和使用设计师及其他用户在本地安装的各种专业开发的字体<br><br>
        <fluent-card>
          <div class="content">
            <div>
              <div class="status">
                状态: <div id="status"></div>
              </div>
              <div class="q">
              <button @click="${this._loadFonts}">
                枚举本地字体
              </button>
              <select class="select" id="fonts-select" @change="${this._onFontSelected}">
              </select>
              <!--
              <span>with optional filter</span>
              <input class="input" type="text" id="filter-input" placeholder="Type in font names separated by comma(s)...">
              -->
              </div>     
            </div>
            <div id="error-message" class="error"></div>
            <div id="result" class="result">
              <div id="font-info" class="font-info">
                <div class="previewv" contenteditable="true">
                  <h3>滕王阁序</h3>
                  <h4>王勃</h4>
                  <div>
                    落霞与孤鹜齐飞，<br>秋水共长天一色。<br>
                    渔舟唱晚，<br>响穷彭蠡之滨；<br>雁阵惊寒，<br>声断衡阳之浦。<br><br>
                  </div>
                  <h3>滕王閣序</h3>
                  <h4>王勃</h4>
                  <div>
                    落霞與孤鶩齊飛，<br>秋水共長天一色。<br>
                    漁舟唱晚，<br>響窮彭蠡之濱，<br>雁陣驚寒，<br>聲斷衡陽之浦。
                  </div>
                </div>
                <div id="font-info-postscript-name" class="font-info-item"></div>
                <div id="font-info-full-name" class="font-info-item"></div>
                <div id="font-info-style" class="font-info-item"></div>
                <div id="font-info-family" class="font-info-item"></div>
                <div id="font-info-outline-format" class="font-info-item"></div>
              </div>
            </div>
          </div>
        </fluent-card>
        <fluent-card>
          启用 chrome://flags/#font-access
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/local-fonts/" title="Use advanced typography with local fonts">
              教程：本地字体的高级排版
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://wicg.github.io/local-font-access/" title="Local Font Access API">Local Font Access API</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/6234451761692672" title="在 Chromium 103 版本支持">🐡 M103</a>
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
    `}};n([d({type:Boolean})],i.prototype,"enabled",2);n([a("#status")],i.prototype,"elemStatus",2);n([a("#result")],i.prototype,"elemResult",2);n([a("#fonts-select")],i.prototype,"elemFontsSelect",2);n([a("#error-message")],i.prototype,"elemErrorMessage",2);n([a("#font-info")],i.prototype,"elemFontInfo",2);n([a("#font-info-postscript-name")],i.prototype,"elemFontInfoPostscriptName",2);n([a("#font-info-full-name")],i.prototype,"elemFontInfoFullName",2);n([a("#font-info-style")],i.prototype,"elemFontInfoStyle",2);n([a("#font-info-family")],i.prototype,"elemFontInfoFamily",2);n([a("#font-info-outline-format")],i.prototype,"elemFontInfoOutlineFormat",2);n([d({type:Map})],i.prototype,"fontMap",2);i=n([m("sample-lfa")],i);export{i as SampleLFA};
//# sourceMappingURL=sample-lfa.d12c7cdc.js.map
