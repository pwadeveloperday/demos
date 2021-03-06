import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('sample-ac')
export class SampleAC extends LitElement {
  @query('#msg') _msg: HTMLDivElement;
  @query('#paste') _p: HTMLDivElement;

  async _loadBlob(fileName: RequestInfo | URL) {
    const fetched = await fetch(fileName);
    return await fetched.blob();
  }

  async _copy() {
    try {
      const url = 'https://demos.pwadev.io/assets/sample/pwa-fugu.png';
      const blobInput = await this._loadBlob(url);
      const clipboardItemInput = new ClipboardItem({'image/png' : blobInput});
      await navigator.clipboard.write([clipboardItemInput]);
      this._msg.innerHTML = '图片已复制';
    } catch(e) {
      this._msg.innerHTML = e.message;
    }
  }

  async _paste() {
    try {
      const clipboardItems = await navigator.clipboard.read();
      console.log(clipboardItems);
      const blobOutput = await clipboardItems[0].getType('image/png');
      this._p.innerHTML = `
        <image src='${window.URL.createObjectURL(blobOutput)}'>
      `;
      this._msg.innerHTML = '图片异步粘贴成功';
    } catch(e) {
      this._msg.innerHTML = e.message + ' Failed to read clipboard';
    }
  }
 
  async _listener() {
    navigator.clipboard.addEventListener('clipboardchange', async e => {
      const text = await navigator.clipboard.getText();
      this._msg.innerHTML = '剪切板更新: ' + text;
    });
  }

  async connectedCallback() {
    super.connectedCallback();
    await this._listener();
  }

  static get styles() {
    return css`
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
      width: 320px;
      margin: 0 auto;
    }

    fluent-card img {
      margin: 8px 8px;
    }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>异步剪贴板 (Async Clipboard) API</h2>
        提供了响应剪贴板命令（剪切、复制和粘贴）与异步读写系统剪贴板的能力，并取代使用 document.execCommand() 的剪贴板访问方式<br><br>
        <fluent-card class="act">
          <button @click="${this._copy}">复制</button> 写入到剪贴板<br><br>
          <button @click="${this._paste}">粘贴</button> 从剪贴板读出
          <div>
            也可以复制这些图片后，点击粘贴按钮<br><br>
            <image src="/assets/logo/chromium.png" width="50" height="50"></image>
            <image src="/assets/logo/chrome.png" width="50" height="50"></image>
            <image src="/assets/logo/edge.png" width="50" height="50"></image>
            <image src="/assets/logo/safari.png" width="50" height="50"></image>
            <image src="/assets/logo/firefox.png" width="50" height="50"></image>
            <image src="/assets/logo/opera.png" width="50" height="50"></image>
            <image src="/assets/logo/vivaldi.png" width="50" height="50"></image>
          </div>
          <div id="paste"></div>
          <div id="msg"></div>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/async-clipboard/" title="Unblocking clipboard access ">
              教程：解锁剪贴板访问
            </a>
          </div>
          <div class="w3c"><icon-w3c class="w3clogo"></icon-w3c> <a href="https://www.w3.org/TR/clipboard-apis/#async-clipboard-api" title="Asynchronous Clipboard API">Asynchronous Clipboard API</a></div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5074658793619456" title="在 Chromium 76 版本支持">🐡 M76</a>
            </div>
            <div class="des">
              <div class="det">
              <icon-chr class="yes" title="Google Chrome 浏览器"></icon-chr>
              <icon-edg class="yes" title="微软 Edge 浏览器"></icon-edg> <icon-ope class="yes" title="Opera 浏览器"></icon-ope> <icon-viv class="yes" title="Vivaldi 浏览器"></icon-viv>
              <icon-saf class="yes" title="Apple Safari 浏览器"></icon-saf> <icon-fir class="yes" title="Mozilla Firefox 浏览器"></icon-fir>
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
    `;
  }
}
