import { LitElement } from 'lit';
export declare class SampleED extends LitElement {
    _msg: HTMLDivElement;
    abortController: AbortController;
    _sampleColorFromScreen(): Promise<void>;
    _abort(): void;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
