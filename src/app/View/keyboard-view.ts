export class KeyboardView {
    private _keyboard: HTMLElement;
    public get keyboard(): HTMLElement {
        return this._keyboard;
    }

    constructor(buttons: HTMLElement[], container: Element) {
        this._keyboard = this.createElement('section', buttons);
        this.insertKeyboard(container);
    }

    private createElement(tag: string, buttons: HTMLElement[]): HTMLElement {
        const keyboard = document.createElement(tag);
        keyboard.classList.add('keyboard');
        buttons.forEach((button) => keyboard.appendChild(button));
        return keyboard;
    }

    private insertKeyboard(container:Element): void {
        container.appendChild(this._keyboard);
    }
}