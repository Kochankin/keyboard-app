import { fromEvent } from "rxjs";
import { tap } from "rxjs/operators";
import { AppModel } from "../Model/app-model";
import { AppView } from "../View/app-view";
import { IButtonProto, ButtonType } from "../interfaces/button";
import { KeyboardController } from "./keyboard-controller";
import { KeyboardModel } from "../Model/keyboard-model";
import { KeyboardView } from "../View/keyboard-view";
import { ButtonController } from "./button-controller";
import { ButtonModel } from "../Model/button-model";
import { ButtonView } from "../View/button-view";
import { InputController } from "./input-controller";
import { InputModel } from "../Model/input-model";
import { InputView } from "../View/input-view";


export class AppController {
    private _model: AppModel;
    private _view: AppView;

    private _inputController: InputController;
    private _buttonsControllers: ButtonController[];
    private _keyboardController: KeyboardController;

    constructor(model: AppModel, view: AppView, buttonsProto: IButtonProto[]) {
        this._model = model;
        this._view = view;

        this._inputController = this.getInputController();
        this._buttonsControllers = this.getButtonsControllers(buttonsProto);
        this._keyboardController = this.getKeyboardController();

        this.addRealKeyboardEventListeners();
        this.addMouseUpEventListener();
    }

    public addRealKeyboardEventListeners(): void {
        fromEvent(document, 'keydown')
            .pipe(tap((event: KeyboardEvent) => this.keydownHandler(event)))
            .subscribe();

        fromEvent(document, 'keyup')
            .pipe(tap((event: KeyboardEvent) => this.keyupHandler(event)))
            .subscribe()
    }

    public addMouseUpEventListener(): void {
        fromEvent(document, 'mouseup')
            .pipe(tap((event: MouseEvent) => this.mouseupHandler(event)))
            .subscribe();
    }

    public keydownHandler(event: KeyboardEvent): void {
        const targetButton = this._keyboardController.findButton(event.code);
        if (!targetButton) { return; }        

        const targetButtonController = this._buttonsControllers.find(ctrl => ctrl.model === targetButton);
        targetButtonController.pressButton();
        this._inputController.onRealKeyboardPrint();

        const pressedButtons = this._buttonsControllers.filter(ctrl => ctrl.model.isPressed$.value);

        switch (targetButton.type) {
            case ButtonType.CapsLk:
                this._keyboardController.toggleCapslock();

                return this._model.isCapsLock$.value
                    ? targetButtonController.markCapsLockOn()
                    : targetButtonController.markCapsLockOff();

            case ButtonType.Shift:
                this._keyboardController.switchOnShift();
                
                if (pressedButtons.find(button => button.model.type === ButtonType.Alt)) {
                    this._keyboardController.toggleLanguage();
                }
                return;
            
            case ButtonType.Alt:
                if (pressedButtons.find(button => button.model.type === ButtonType.Shift)) {
                    this._keyboardController.toggleLanguage();
                }
                return;
        }  
    }

    public keyupHandler(event: KeyboardEvent): void {
        const targetButton = this._keyboardController.findButton(event.code);
        if (!targetButton) { return; }

        const targetButtonController = this._buttonsControllers.find(ctrl => ctrl.model === targetButton);
        targetButtonController.unpressButton();

        if (targetButton.type === ButtonType.Shift) {
            this._keyboardController.switchOffShift();
        }
    }

    private mouseupHandler(event: MouseEvent): void {
        this._keyboardController.unpressAllButtons();

        const targetButton = this._keyboardController.findButton(event.target['id']);        
        if (targetButton && targetButton.type === ButtonType.Shift) {
            this._keyboardController.switchOffShift();
        }
    }

    private getInputController(): InputController {
        const model = new InputModel();
        const view = new InputView(this._view.container);
        return new InputController(model, view);
    }


    private getButtonsControllers(buttonsProto: IButtonProto[]): ButtonController[] {
        return buttonsProto.map((buttonProto) => {
            const model = new ButtonModel(
                buttonProto,
                this._model.currentLang$,
                this._model.isCapsLock$,
                this._model.isShift$
            );
            const view = new ButtonView(model);
            return new ButtonController(model, view);
        });
    }

    private getKeyboardController(): KeyboardController {
        const buttonsModels = this._buttonsControllers.map(controller => controller.model);
        const buttonsEls = this._buttonsControllers.map(controller => controller.view.button);

        const keyboardModel = new KeyboardModel(
            buttonsModels, 
            this._inputController.model,
            this._model.currentLang$,
            this._model.isCapsLock$,
            this._model.isShift$
        );
        const keyboardView = new KeyboardView(buttonsEls, this._view.container);
        return new KeyboardController(
            keyboardModel, 
            keyboardView, 
            this._buttonsControllers, 
            this._inputController
        );
    }
}