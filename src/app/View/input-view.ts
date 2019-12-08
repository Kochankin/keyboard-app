export class InputView {
    private _input: HTMLElement;
    public get input(): HTMLElement {
        return this._input;
    }

    constructor(container: Element) {
        this._input = this.createElement('section');
        this.insertInput(container);
    }

    public setValue(value: string): void {
        this._input.textContent = value;
    }

    public getValue(): string {
        return this._input.textContent;
    }

    private createElement(tag: string): HTMLElement {
        const input = document.createElement(tag);
        input.classList.add('input');
        input.setAttribute('contenteditable', 'true');
        return input;
    }

    private insertInput(container: Element): void {
        container.appendChild(this._input);
    }
}