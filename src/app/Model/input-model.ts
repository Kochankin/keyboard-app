export class InputModel {
    private _inputValue: string;

    public get inputValue(): string {
        return this._inputValue;
    }
    
    public set inputValue(value: string) {
        this._inputValue = value;
    }

    constructor() { 
        this._inputValue = '';
    }

    public print(char: string): void {
        if (char === ' ' && this._inputValue.split('').pop() === ' '){
            return;
        }
        
        this._inputValue += char; 
    }

    public deleteChar(): void {
        this._inputValue = this._inputValue && this._inputValue.slice(0, -1);
    }
}