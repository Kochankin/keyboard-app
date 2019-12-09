import { ButtonModel } from "./button-model";
import { Language } from "../interfaces/button";
import { InputModel } from "./input-model";
import { BehaviorSubject } from "rxjs";

export class KeyboardModel {
    //#region properties
     private _currentLang$: BehaviorSubject<Language>;
     public get currentLang$(): BehaviorSubject<Language> {
         return this._currentLang$;
     }
 
     private _isShift$: BehaviorSubject<boolean>;
     public get isShift$(): BehaviorSubject<boolean> {
         return this._isShift$;
     }
 
     private _isCapsLock$: BehaviorSubject<boolean>;
     public get isCapsLock$(): BehaviorSubject<boolean> {
         return this._isCapsLock$;
     }

    private _buttons: ButtonModel[];
    public get buttons(): ButtonModel[] {
        return this._buttons;
    }

    private _input: InputModel;
    public get input(): InputModel {
        return this._input;
    }
    //#endregion 

    constructor(
        buttons: ButtonModel[], 
        input: InputModel, 
        currentLang$: BehaviorSubject<Language>, 
        isCapsLock$: BehaviorSubject<boolean>, 
        isShift$: BehaviorSubject<boolean>
    ) {
        this._buttons = buttons;
        this._input = input;

        this._currentLang$ = currentLang$;
        this._isCapsLock$ = isCapsLock$;
        this._isShift$ = isShift$;
    }

    public findButton(key: string): ButtonModel {
        return this._buttons.find(button => button.key === key);
    }

    public toggleCapslock(): void {
        this._isCapsLock$.next(!this._isCapsLock$.value);
    }

    public toggleLanguage(): void {
        const lang = this._currentLang$.value === 'en'
            ? 'ru'
            : 'en';
        this._currentLang$.next(lang);
    }

    public switchOnShift(): void {
        this._isShift$.next(true);
    }

    public switchOffShift(): void {
        this._isShift$.next(false);
    }
}