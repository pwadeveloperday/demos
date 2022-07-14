import { LitElement, css, html } from 'lit';
import 'lit-video/lit-video.js';
import { customElement, query } from 'lit/decorators.js';

@customElement('sample-mp')
export class SampleMP extends LitElement {
  @query('#first-video') video: HTMLVideoElement;
  @query('#msg') msg: HTMLDivElement;

  private async _playLocalVideo() {
    let fileHandle;
    [fileHandle] = await showOpenFilePicker();
    const file = await fileHandle.getFile(); 
    this.video.src = URL.createObjectURL(file)
  }

  private async _playFileHandlerVideo() {
    if ('launchQueue' in window && 'files' in LaunchParams.prototype) {
      console.log('您的浏览器支持文件处理 API');
      
      launchQueue.setConsumer(async (launchParams) => {
        if (!launchParams.files.length) {
          this.msg.innerHTML = '没有从视频文件右键菜单打开本页面'
          return;
        }
        for (let fileHandle of launchParams.files) {
          console.log(fileHandle);
          const file = await fileHandle.getFile();
          console.log(file);
          this.video.src = URL.createObjectURL(file);
        }
      });
    }
  }

  async connectedCallback() {
    super.connectedCallback();
    this._playFileHandlerVideo();
  }

  static get styles() {
    return css`
      .act {
        display: flex;
        align-items: center;
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: black;
        color: #FFFFFF;
        flex-direction: column;
      }
      lit-video {
        width: 100%;
        height: auto;
        max-height: 100%;
        margin: auto;
        outline: none;
      }

      #open {
        position: absolute;
        bottom: 48px;
        cursor: pointer;
      }

      #open svg {
        width: 32px;
        height: 24px;
      }

      #open svg path {
        fill: rgba(255, 255, 255, 0.8);
      }

      #open:hover svg path {
        fill: rgba(255, 255, 255, 1.0);
      }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <fluent-card class="act">
        <lit-video 
          id="first-video"
          option="simple" 
          src="" 
          type="video/mp4">
        </lit-video>
        <a id="open" @click="${this._playLocalVideo}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/>
          </svg>
        </a>
      </fluent-card>
    `;
  }
}
