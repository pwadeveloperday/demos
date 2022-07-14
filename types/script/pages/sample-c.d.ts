import { LitElement } from 'lit';
export declare class SampleC extends LitElement {
    _msg: HTMLDivElement;
    _c(): Promise<void>;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
