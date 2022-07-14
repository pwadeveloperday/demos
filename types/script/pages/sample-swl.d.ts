import { LitElement } from 'lit';
export declare class SampleSWL extends LitElement {
    _msg: HTMLDivElement;
    screen: HTMLInputElement;
    screen_status: HTMLSpanElement;
    _log: string;
    _logMsg(msg: any): void;
    _visibility(): Promise<void>;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
