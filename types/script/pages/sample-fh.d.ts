import { LitElement } from 'lit';
export declare class SampleFH extends LitElement {
    video: HTMLVideoElement;
    msg: HTMLDivElement;
    show: HTMLDivElement;
    private _playFileHandler;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
