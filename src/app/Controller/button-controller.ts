import { ButtonModel } from "../Model/button-model";
import { ButtonView } from "../View/button-view";

export class ButtonController {
    private _model: ButtonModel;
    public get model(): ButtonModel {
        return this._model;
    }

    private _view: ButtonView;
    public get view(): ButtonView {
        return this._view;
    }
    
    constructor(model: ButtonModel, view: ButtonView) {
        this._model = model;
        this._view = view;

        this._model.isPressed$.subscribe((isPressed) => {
            return isPressed 
                ? this._view.markPressed()
                : this._view.markUnpressed();
        });

        this._model.currentLang$.subscribe(() => {
            this._view.setName(this._model.name)
        });
    }

    public pressButton(): void {        
        this._model.pressButton();
    }

    public unpressButton(): void {
        this._model.unpressButton();
    }

    public markCapsLockOn(): void {
        this._view.markCapsLockOn();
    }

    public markCapsLockOff(): void {
        this._view.markCapsLockOff();
    }
}