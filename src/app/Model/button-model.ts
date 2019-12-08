import { ButtonType, IButtonProto, Language } from "../interfaces/button";
import { BehaviorSubject } from "rxjs";

export class ButtonModel {
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

  private _isPressed$: BehaviorSubject<boolean>;
  public get isPressed$(): BehaviorSubject<boolean> {
    return this._isPressed$;
  }

  private _type: ButtonType;
  public get type(): ButtonType {
    return this._type;
  }

  private _size: number;
  public get size(): number {
    return this._size;
  }

  private _key: string;
  public get key(): string {
    return this._key;
  }

  public get name(): string {
    return this._namesList[this._currentLang$.value];
  }

  public get printValue(): string {
    return this.getPrintValue();
  }

  private _namesList: {
    en: string;
    ru: string;
  };

  private _printValuesList: {
    en: {
      plain: string;
      shift: string;
    };
    ru: {
      plain: string;
      shift: string;
    };
  };

  //#regionend

  constructor(
    proto: IButtonProto,
    currentLang$: BehaviorSubject<Language>,
    isCapsLock$: BehaviorSubject<boolean>,
    isShift$: BehaviorSubject<boolean>
  ) {
    this._namesList = proto.name;

    this._printValuesList = proto.printValue && {
      en: { plain: proto.printValue.en, shift: proto.printValue.shiftEn },
      ru: { plain: proto.printValue.ru, shift: proto.printValue.shiftRu }
    };

    this._type = proto.type;
    this._size = proto.size;
    this._key = proto.key;

    this._currentLang$ = currentLang$;
    this._isCapsLock$ = isCapsLock$;
    this._isShift$ = isShift$;

    this._isPressed$ = new BehaviorSubject(false);
  }

  public pressButton(): void {
    this._isPressed$.next(true);
  }

  public unpressButton(): void {
    this._isPressed$.next(false);
  }

  private getPrintValue(): string {
    if (this.type === ButtonType.Print) {
      const printValue = this._printValuesList[this._currentLang$.value][
        this._isShift$.value ? "shift" : "plain"
      ];

      return this._isCapsLock$.value
        ? printValue.toUpperCase()
        : printValue.toLowerCase();
    } else {
      return null;
    }
  }
}
