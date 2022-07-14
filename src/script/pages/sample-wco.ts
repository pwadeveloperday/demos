import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('sample-wco')
export class SampleWCO extends LitElement {

  @query('#weather') _weather: HTMLDivElement;

  _randomNotification() {
    const notiftitle = '中国 PWA 开发者日';
    const notifbody = `为加速推动渐进式 Web 应用 (PWA) 在中国的发展，微软与英特尔携手举办“第二届中国 PWA 开发者日”。`;
    const notifimg = `assets/icons/icon_96.png`;
    const options = {
      body: notifbody,
      icon: notifimg,
    };
    new Notification(notiftitle, options);
  }

  _n() {
    Notification.requestPermission().then((result) => {
      if (result === 'granted') {
        this._randomNotification();
      }
    });
  }

  async _showWeather() {
    const res = await fetch('https://restapi.amap.com/v3/weather/weatherInfo?city=110105&key=39a5a5f5239a28b739e6a79381afb97e');
    const beijing = await res.json();
    let lives = beijing.lives;
    let city = lives[0].city;
    city = city.replace('区', '');
    const cy = `${lives[0].province}${city} ${lives[0].weather} ${lives[0].temperature}℃`;

    const response = await fetch('https://restapi.amap.com/v3/weather/weatherInfo?city=310112&key=39a5a5f5239a28b739e6a79381afb97e');
    const shanghai = await response.json();
    lives = shanghai.lives;
    city = lives[0].city;
    city = city.replace('区', '');
    const mh = `${lives[0].province}${city} ${lives[0].weather} ${lives[0].temperature}℃`

    this._weather.innerHTML = `${cy} ${mh}`;
  }

  async connectedCallback() {
    super.connectedCallback();
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

    #titleBarContainer {
      position: absolute;
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, var(--fallback-title-bar-height));
      width: 100%;
      background-color:rgba(61, 20, 136, .9);
    }
    
    #titleBar {
      position: absolute;
      top: 0;
      display: flex;
      user-select: none;
      height: 100%;
      color: #fff;
      left: env(titlebar-area-x, 0);
      width: env(titlebar-area-width, 100%);
      text-align: center;
    }
    
    #titleBar > span {
      margin: auto;
      padding: 0px 16px 0px 16px;
    }
    
    #titleBar > div {
      flex: 1;
      margin-top: 3px;
      border: none;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="titleBarContainer">
        <div id="titleBar" class=" draggable">
          <span class="draggable">今日天气</span>
          <div class="nonDraggable" id="weather">北京 27℃</div>
        </div>
      </div>
      <app-header ?enableBack="${true}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>窗口控件叠加 (Window Controls Overlay)</h2>
        标题栏区域是指窗口控件（即最小化、最大化、关闭等）左侧或右侧的空间，通常包含应用的标题。Window Controls Overlay 允许开发人员将自定义内容放置在由浏览器控制的标题栏区域。<br><br>
        <fluent-card class="act">
          <ul>
             <li>访问 <a href="https://pwadev.io">https://pwadev.io</a></li>
             <li>安装为本地 PWA 应用</li>
             <li>在 PWA 应用中进入该页面查看标题栏效果</li>
           </ul>
           <button @click="${this._showWeather}">
             天气预报
           </button>
        </fluent-card>
        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/window-controls-overlay/" title="Customize the window controls overlay of your PWA's title bar">
              教程：自定义 PWA 标题栏的窗口控件叠加
            </a>
          </div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5741247866077184" title="在 Chromium 102 版本支持">🐡 M102</a>
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
    `;
  }
}
