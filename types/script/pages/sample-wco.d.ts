import { LitElement } from 'lit';
export declare class SampleWCO extends LitElement {
    _weather: HTMLDivElement;
    _randomNotification(): void;
    _n(): void;
    _showWeather(): Promise<void>;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
