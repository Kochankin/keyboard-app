import { BehaviorSubject } from "rxjs";
import { Language } from "../interfaces/button";

export class AppModel {
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

     constructor(
        currentLang: Language, 
        isCapsLock: boolean, 
        isShift: boolean
    ) {
        this._currentLang$ = new BehaviorSubject(currentLang);
        this._isCapsLock$ = new BehaviorSubject(isCapsLock);
        this._isShift$ = new BehaviorSubject(isShift);
    }
}