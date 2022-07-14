import { LitElement } from 'lit';
import 'lit-video/lit-video.js';
export declare class SampleMP extends LitElement {
    video: HTMLVideoElement;
    msg: HTMLDivElement;
    private _playLocalVideo;
    private _playFileHandlerVideo;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
