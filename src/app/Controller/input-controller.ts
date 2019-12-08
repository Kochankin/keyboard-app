import { InputModel } from "../Model/input-model";
import { InputView } from "../View/input-view";

export class InputController {
    private _model: InputModel;
    public get model(): InputModel {
        return this._model;
    }

    private _view: InputView;
    public get view(): InputView {
        return this._view;
    }
    
    constructor(model: InputModel, view: InputView) {
        this._model = model;
        this._view = view;
    }

    public print(char: string): void {
        this._model.print(char);
        this._view.setValue(this._model.inputValue);
    }

    public delete(): void {
        this._model.deleteChar();
        this._view.setValue(this._model.inputValue);
    }

    public onRealKeyboardPrint(): void {
        this._model.inputValue = this._view.getValue();
    }
}