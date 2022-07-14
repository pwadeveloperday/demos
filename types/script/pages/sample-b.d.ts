import { LitElement } from 'lit';
export declare class SampleB extends LitElement {
    _msg: HTMLDivElement;
    _randomIntFromInterval(min: number, max: number): number;
    _unreadCountChanged(newUnreadCount: number): void;
    _b(): void;
    _bc(): void;
    connectedCallback(): Promise<void>;
    static get styles(): import("lit").CSSResult;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
