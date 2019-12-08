import { ButtonController } from './button-controller';
import { KeyboardModel } from "../Model/keyboard-model";
import { KeyboardView } from "../View/keyboard-view";
import { InputController } from './input-controller';
import {  ButtonType } from '../interfaces/button';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ButtonModel } from '../Model/button-model';


export class KeyboardController {
    private _model: KeyboardModel;
    public get model(): KeyboardModel {
        return this._model;
    }

    private _view: KeyboardView;
    public get view(): KeyboardView {
        return this._view;
    }

    private _buttonsControllers: ButtonController[];

    private _inputController: InputController;

    constructor(model: KeyboardModel, view: KeyboardView, buttonsControllers: ButtonController[], inputController: InputController) {
        this._model = model;
        this._view = view;

        this._buttonsControllers = buttonsControllers;
        this._inputController = inputController;

        this.addMouseDownEventListener();
    }

    public addMouseDownEventListener(): void {
        fromEvent(this._view.keyboard, 'mousedown')
            .pipe(tap((event: MouseEvent) => this.mousedownHandler(event)))
            .subscribe();
    }

    public toggleCapslock(): void {
        this._model.toggleCapslock();
    }

    public toggleLanguage(): void {
        this._model.toggleLanguage();
    }

    public switchOnShift(): void {
        this._model.switchOnShift();
    }

    public switchOffShift(): void {
        this._model.switchOffShift();
    }

    public unpressAllButtons(): void {
        this._model.buttons.forEach((button) => button.unpressButton());
    }

    public findButton(key: string): ButtonModel {
        return this._model.findButton(key);
    }
    
    private mousedownHandler(event: MouseEvent): void {                
        const targetButton = this._model.buttons.find(button => button.key === event.target['id']);
        if (!targetButton) { return; }

        const targetButtonController = this._buttonsControllers.find(ctrl => ctrl.model === targetButton);
        targetButtonController.pressButton();
        
        const pressedButtons = this._buttonsControllers.filter(ctrl => ctrl.model.isPressed$.value);        

        switch (targetButton.type) {
            case ButtonType.Print:
                return this._inputController.print(targetButton.printValue);

            case ButtonType.Backspace:
                return this._inputController.delete();

            case ButtonType.CapsLk:
                this.toggleCapslock();

                return this._model.isCapsLock$.value
                    ? targetButtonController.markCapsLockOn()
                    : targetButtonController.markCapsLockOff();

            case ButtonType.Shift:
                this.switchOnShift();

                if (pressedButtons.find(button => button.model.type === ButtonType.Alt)) {
                    this.toggleLanguage();
                }
                return;

            case ButtonType.Alt:
                if (pressedButtons.find(button => button.model.type === ButtonType.Shift)) {
                    this.toggleLanguage();
                }
            return;
        }  
    }
}