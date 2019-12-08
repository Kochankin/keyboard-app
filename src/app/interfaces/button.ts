export enum ButtonType {
    Print,
    Tab,
    CapsLk,
    Shift,
    Ctrl,
    Fn,
    Win,
    Alt,
    Backspace,
    Enter,
    Up,
    Down,
    Left,
    Right
}

export interface IButtonProto {
    key: string;
    name: {
        en: string;
        ru: string;
    };
    type: ButtonType;
    printValue?: {
        en: string;
        ru: string;
        shiftEn: string;
        shiftRu: string;
    };
    size: number;
}

export type Language = 'en' | 'ru';