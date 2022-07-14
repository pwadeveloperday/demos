import { LitElement } from 'lit';
export declare class SampleN extends LitElement {
    _randomIntFromInterval(min: number, max: number): number;
    _n(): void;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
