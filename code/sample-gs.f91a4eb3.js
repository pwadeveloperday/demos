import{s as u,r as l,$ as p,n as g}from"./index.f9c4bfbf.js";import{i as o}from"./query.0830c8af.js";var v=Object.defineProperty,b=Object.getOwnPropertyDescriptor,a=(e,r,s,i)=>{for(var t=i>1?void 0:i?b(r,s):r,c=e.length-1,d;c>=0;c--)(d=e[c])&&(t=(i?d(r,s,t):d(t))||t);return i&&t&&v(r,s,t),t};let n=class extends u{constructor(){super()}_accelerometer(){let e=null;try{e=new Accelerometer({frequency:60}),e.onerror=r=>{r.error.name==="NotAllowedError"?this._a.innerHTML="Permission to access sensor was denied.":r.error.name==="NotReadableError"&&(this._a.innerHTML="Cannot connect to the sensor.")},e.onreading=r=>{this._a.innerHTML=r},e.addEventListener("reading",()=>{this._a.innerHTML=`
          X \u8F74 ${e.x} <br>
          Y \u8F74 ${e.y} <br>
          Z \u8F74 ${e.z} <br>
        `}),e.start()}catch(r){if(r.name==="SecurityError")this._a.innerHTML="\u52A0\u901F\u5EA6\u8BA1\u88AB\u6743\u9650\u7B56\u7565\u9650\u5236";else if(r.name==="ReferenceError")this._a.innerHTML="\u4E0D\u652F\u6301\u52A0\u901F\u5EA6\u8BA1";else throw r}}_linearaccelerationsensor(){if("LinearAccelerationSensor"in window){this._as.innerHTML="\u652F\u6301\u7EBF\u6027\u52A0\u901F\u5EA6\u4F20\u611F\u5668";let e=new LinearAccelerationSensor({frequency:60});e.addEventListener("reading",r=>{this._as.innerHTML=`
          X \u8F74\u7EBF\u6027\u52A0\u901F\u5EA6: ${e.x} <br>
          Y \u8F74\u7EBF\u6027\u52A0\u901F\u5EA6: ${e.y} <br>
          Z \u8F74\u7EBF\u6027\u52A0\u901F\u5EA6: ${e.z} <br>
        `}),e.start()}}_ambientlightsensor(){if("AmbientLightSensor"in window){this._als.innerHTML="\u652F\u6301\u73AF\u5883\u5149\u4F20\u611F\u5668";const e=new AmbientLightSensor;e.addEventListener("reading",r=>{this._als.innerHTML="\u73AF\u5883\u5149\u7167\u5F3A\u5EA6: "+e.illuminance,e.illuminance<=50?document.body.setAttribute("style","filter: invert(1);"):document.body.removeAttribute("style")}),e.addEventListener("error",r=>{this._als.innerHTML=r.error.name+" "+r.error.message}),e.start()}}_gyroscope(){if("Gyroscope"in window){this._g.innerHTML="\u652F\u6301\u9640\u87BA\u4EEA";let e=new Gyroscope({frequency:60});e.addEventListener("reading",()=>{this._g.innerHTML=`
          X \u8F74\u89D2\u901F\u5EA6: ${e.x} <br>
          Y \u8F74\u89D2\u901F\u5EA6: ${e.y} <br>
          Z \u8F74\u89D2\u901F\u5EA6: ${e.z}
        `}),e.start()}}_absoluteorientationsensor(){if("AbsoluteOrientationSensor"in window){this._os.innerHTML="\u652F\u6301\u7EDD\u5BF9\u65B9\u5411\u4F20\u611F\u5668";const e={frequency:60,referenceFrame:"device"},r=new AbsoluteOrientationSensor(e);r.addEventListener("reading",s=>{let i=s.target.quaternion,t=Math.atan2(2*i[0]*i[1]+2*i[2]*i[3],1-2*i[1]*i[1]-2*i[2]*i[2])*(180/Math.PI),c="\u7F57\u822A\u5411: "+t,d=0+t;console.log("adjusted heading Before: "+d),console.log("adjusted heading After: "+d),this._os.innerHTML=c,this._c.style.display="block",this._c.style.transform="rotate("+d+"deg)"}),r.start()}}_relativeorientationsensor(){if("RelativeOrientationSensor"in window){this._osr.innerHTML="\u652F\u6301\u76F8\u5BF9\u65B9\u5411\u4F20\u611F\u5668";const e={frequency:60,referenceFrame:"device"},r=new RelativeOrientationSensor(e);r.addEventListener("reading",()=>{this._osr.innerHTML=r.quaternion.toString()}),r.addEventListener("error",s=>{s.name=="NotReadableError"&&console.log("Sensor is not available.")}),r.start()}}_gravity(){if("GravitySensor"in window){this._gs.innerHTML="\u652F\u6301\u91CD\u529B\u611F\u5E94\u5668";let e=new GravitySensor({frequency:60});e.addEventListener("reading",()=>{this._gs.innerHTML=`
          X \u8F74\u91CD\u529B: ${e.x} <br>
          Y \u8F74\u91CD\u529B: ${e.y} <br>
          Z \u8F74\u91CD\u529B: ${e.z}
        `}),e.start()}}_magnetometer(){if("Magnetometer"in window){this._m.innerHTML="\u652F\u6301\u78C1\u529B\u8BA1";let e=new Magnetometer({frequency:60});e.addEventListener("reading",()=>{this._m.innerHTML=`
          X \u8F74\u78C1\u573A: ${e.x} <br>
          Y \u8F74\u78C1\u573A: ${e.y} <br>
          Z \u8F74\u78C1\u573A: ${e.z}
        `}),e.addEventListener("error",r=>{this._m.innerHTML=r.error.name+" "+r.error.message}),e.start()}}async connectedCallback(){super.connectedCallback()}static get styles(){return l`
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
      text-align: left;
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

    .act div div {
      background-color: rgba(0, 0, 0, 0.02);
      padding: 8px 16px;
    }

    .act div span {
      font-size: 0.8rem;
    }

    #compass {
      width:100%;
      max-width:400px;
    }

    `}render(){return p`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <fluent-breadcrumb>
          <fluent-breadcrumb-item href="/">首页</fluent-breadcrumb-item>
        </fluent-breadcrumb>
        <h2>通用传感器 (Generic Sensor) API</h2>
        <fluent-card class="act">
          <div id="a">
            加速度计 (Accelerometer)
            <a @click="${this._accelerometer}">启用</a><br>
            <span>测量设备沿 X, Y, Z 轴的加速度</span>
            <div></div>
          </div>
          <div id="g">
            陀螺仪 (Gyroscope)
            <a @click="${this._gyroscope}">启用</a><br>
            <span>测量设备在偏转、倾斜时相对于X，Y 和 Z 轴的角速度 (rad/s)</span>
            <div></div>
          </div>
          <div id="as">
            线性加速度传感器 (Linear Acceleration Sensor)
            <a @click="${this._linearaccelerationsensor}">启用</a><br>
            <span>测量设备的加速度（不含重力）</span>
            <div></div>
          </div>
          <div id="os">
            <img src="https://purepng.com/public/uploads/large/purepng.com-compasscompassinstrumentnavigationcardinal-directionspointsdiagram-1701527842316onq7x.png" id="compass" hidden/>
            绝对方向传感器 (Absolute Orientation Sensor) <a @click="${this._absoluteorientationsensor}">启用</a><br>
            <span>测量设备相对于相对于地球参考坐标系的物理方向</span>
            <div></div>
          </div>
          <div id="osr">
            相对方向传感器 (Relative Orientation Sensor) <a @click="${this._relativeorientationsensor}">启用</a><br>
            <span>测量设备相对于固定的参考坐标系统的旋转数据</span><br>
            <div></div>
          </div>
          <div id="gs">
            重力感应器 (Gravity Sensor) <a @click="${this._gravity}">启用</a><br>
            <span>提供沿所有三个轴应用于设备的重力</span>
            <div></div>
          </div>
          <div id="als">
            环境光传感器 (Ambient Light Sensor) <a @click="${this._ambientlightsensor}">启用</a><br>
            <span>设备周围环境光的光照水平或光照强度</span>
            <div></div>
          </div>
          <div id="m">
            磁力计 (Magnetometer) <a @click="${this._magnetometer}">启用</a><br>
            <span>提供设备主磁力计检测到的磁场的信息</span>
            <div></div>
          </div>
        </fluent-card>

        <fluent-card>
          环境光传感器及磁力计需启用 chrome://flags#enable-generic-sensor-extra-classes
        </fluent-card> 

        <fluent-card id="st">
          <div class="tut">
            <icon-webdev></icon-webdev> 
            <a href="https://web.dev/generic-sensor/" title="Sensors for the web">
              教程：Web 传感器
            </a>
          </div>
          <div class="w3c">
            <icon-w3c class="w3clogo"></icon-w3c> <a href="https://www.w3.org/TR/generic-sensor/" title="Generic Sensor">Generic Sensor</a><br>
            <icon-w3c class="w3clogo"></icon-w3c> <a href="https://w3c.github.io/ambient-light/" title="Ambient Light Sensor">Ambient Light Sensor</a><br>
          </div>
          <div class="imp">
            <div class="des">
              <a href="https://chromestatus.com/feature/5298357018820608" title="在 Chromium 63 版本支持">🐡 M63</a>
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
    `}};a([o("#a div")],n.prototype,"_a",2);a([o("#g div")],n.prototype,"_g",2);a([o("#as div")],n.prototype,"_as",2);a([o("#os div")],n.prototype,"_os",2);a([o("#osr div")],n.prototype,"_osr",2);a([o("#gs div")],n.prototype,"_gs",2);a([o("#als div")],n.prototype,"_als",2);a([o("#m div")],n.prototype,"_m",2);a([o("#compass")],n.prototype,"_c",2);n=a([g("sample-gs")],n);export{n as SampleGS};
//# sourceMappingURL=sample-gs.f91a4eb3.js.map
