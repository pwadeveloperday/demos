import { LitElement } from 'lit';
export declare class SampleLFA extends LitElement {
    enabled: boolean;
    elemStatus: HTMLDivElement;
    elemResult: HTMLDivElement;
    elemFontsSelect: HTMLSelectElement;
    elemErrorMessage: HTMLDivElement;
    elemFontInfo: HTMLDivElement;
    elemFontInfoPostscriptName: HTMLDivElement;
    elemFontInfoFullName: HTMLDivElement;
    elemFontInfoStyle: HTMLDivElement;
    elemFontInfoFamily: HTMLDivElement;
    elemFontInfoOutlineFormat: HTMLDivElement;
    fontMap: Map<any, any>;
    private _showStatus;
    private _loadFonts;
    private _reset;
    private _onFontSelected;
    private _getFormat;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
