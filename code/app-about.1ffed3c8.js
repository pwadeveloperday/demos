import{s as t,r as d,$ as u,n as i}from"./index.208603bb.js";var c=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=(s,r,e,p)=>{for(var a=p>1?void 0:p?m(r,e):r,l=s.length-1,o;l>=0;l--)(o=s[l])&&(a=(p?o(r,e,a):o(a))||a);return p&&a&&c(r,e,a),a};let n=class extends t{static get styles(){return d`
    .about {
      padding: 0 16px;
      margin: 1rem 0 0rem 0;
      color: #3d3d3d;
    }

    h2 {
      margin: 0;
      padding: 16px 0;
      color: rgba(0, 113, 197, 0.9);
    }

    fluent-card {
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 0px;
      box-shadow: none;
      background: rgba(255, 255, 255, 0.4);
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
    `}constructor(){super()}render(){return u`
      <app-header ?enableBack="${!0}"></app-header>
      <div class="about">
        <h2>关于中国 PWA 开发者日</h2>
        <fluent-card>
          <h3>为什么要参加？</h3>
          <p>中国 PWA 开发者日的使命是助您使用渐进式 Web 应用（PWA）取得成功。</p>
          <p>创建此活动是为了分享国内和国际厂商的 PWA 的成功案例，传播有关 PWA 的技术及实践，包括如何成功构建 PWA 以及将 PWA 技术集成到您现有的 Web 应用中。我们不专注于推销特定的 Web 框架或技术栈。</p>
          <p>该活动免费。</p>
        </fluent-card>
        <fluent-card>
          <h3>主办方</h3>
          <p>中国 PWA 开发者日由参与创建 PWA 技术的几家公司的人员合作举办。</p>
          <p>主办方：
            <ul>
              <li>2021 年：英特尔 鼎道智联</li>
              <li>2022 年：英特尔 微软</li>
            </ul>  
          </p>
          <p>2022 年主办方成员：
            <ul>
              <li>张敏 英特尔软件技术经理</li>
              <li>宋青见 微软首席产品经理</li>
            </ul>  
          </p>
          <p>联系我们: 
          <ul>
              <li>pwadeveloperday<span class="spam">spam</span>@<span class="spam">spam</span>outlook<span class="spam">spam</span>.com</li>
            </ul>  
          </p>
          </fluent-card>
      </div>
      <app-footer></app-footer>
    `}};n=b([i("app-about")],n);export{n as AppAbout};
//# sourceMappingURL=app-about.1ffed3c8.js.map