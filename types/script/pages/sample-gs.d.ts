import { LitElement } from 'lit';
export declare class SampleGS extends LitElement {
    _a: HTMLDivElement;
    _g: HTMLDivElement;
    _as: HTMLDivElement;
    _os: HTMLDivElement;
    _osr: HTMLDivElement;
    _gs: HTMLDivElement;
    _als: HTMLDivElement;
    _m: HTMLDivElement;
    _c: HTMLImageElement;
    _accelerometer(): void;
    _linearaccelerationsensor(): void;
    _ambientlightsensor(): void;
    _gyroscope(): void;
    _absoluteorientationsensor(): void;
    _relativeorientationsensor(): void;
    _gravity(): void;
    _magnetometer(): void;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
