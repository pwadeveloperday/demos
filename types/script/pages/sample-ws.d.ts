import { LitElement } from 'lit';
export declare class SampleWS extends LitElement {
    _title: HTMLInputElement;
    _text: HTMLTextAreaElement;
    _url: HTMLInputElement;
    _files: HTMLInputElement;
    _output: HTMLDivElement;
    connectedCallback(): Promise<void>;
    _checkBasicFileShare(): boolean;
    _share(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
