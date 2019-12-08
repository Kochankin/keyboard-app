import { ButtonModel } from './../Model/button-model';

export class ButtonView {
    private _button: HTMLElement;
    public get button(): HTMLElement {
        return this._button;
    }

    constructor(buttonModel: ButtonModel) {
        this._button = this.createElement(
            'button', 
            buttonModel.name, 
            buttonModel.key, 
            buttonModel.size
        );
    }

    public createElement(tag: string, name: string, key: string, size: number): HTMLElement {
        const button = document.createElement(tag);
        button.textContent = name;
        button.setAttribute("id", key);

        button.classList.add(...this.getClass(size));
        return button;
    }
    
    public setName(name: string): void {
        this._button.textContent = name;
    }

    public markPressed(): void {
        this._button.classList.add('pressed');
    }

    public markUnpressed(): void {
        setTimeout(() => this._button.classList.remove('pressed'), 100);
    }

    public markCapsLockOn(): void {
        this._button.classList.add('caps-lk-on');
    }

    public markCapsLockOff(): void {
        this._button.classList.remove('caps-lk-on');
    }

    private getClass(size: number): string[] {
        switch (size){
            case 1.5:
            return ['button', 'button--one-and-half-width'];

            case 2:
            return ['button', 'button--double-width'];

            case 2.5:
            return ['button', 'button--double-and-half-width'];

            case 3:
            return ['button', 'button--triple-width'];
            
            case 4:
            return ['button', 'button--quartile-width'];

            default:
            return ['button'];
        }
    }
}