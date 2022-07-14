import { LitElement } from 'lit';
export declare class SampleSD extends LitElement {
    _video: HTMLVideoElement;
    _msg: HTMLDivElement;
    interval: any;
    stream: any;
    _bc(): Promise<void>;
    _pausec(): Promise<void>;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
