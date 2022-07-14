import { LitElement } from 'lit';
export declare class SampleAC extends LitElement {
    _msg: HTMLDivElement;
    _p: HTMLDivElement;
    _loadBlob(fileName: RequestInfo | URL): Promise<Blob>;
    _copy(): Promise<void>;
    _paste(): Promise<void>;
    _listener(): Promise<void>;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
