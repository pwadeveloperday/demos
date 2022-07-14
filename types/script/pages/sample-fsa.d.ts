import { LitElement } from 'lit';
import 'lit-video/lit-video.js';
export declare class SampleFSA extends LitElement {
    video: HTMLVideoElement;
    private _playLocalVideo;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
