import { LitElement } from 'lit';
export declare class SampleUPH extends LitElement {
    _msg: HTMLDivElement;
    _uph: HTMLAnchorElement;
    _iuph: HTMLInputElement;
    _geolocation: HTMLDivElement;
    _map: HTMLDivElement;
    _showUrlParameters(): Promise<void>;
    _updateUph(): void;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
