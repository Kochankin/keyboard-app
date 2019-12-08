import { IButtonProto, ButtonType } from "./interfaces/button";

export const BUTTONS: IButtonProto[] = [
    {
        name: {
           en: '`',
           ru: 'ё'
        },
        type: ButtonType.Print,
        printValue: {
            en: '`',
            ru: 'ё',
            shiftEn: '~',
            shiftRu: 'Ё'
         },
        size: 1,
        key: 'Backquote'
    },
    {
        name: {
            en: '1',
            ru: '1'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '1',
            ru: '1',
            shiftEn: '!',
            shiftRu: '!'
         },
        size: 1,
        key: 'Digit1'
    },
    {
        name: {
            en: '2',
            ru: '2'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '2',
            ru: '2',
            shiftEn: '@',
            shiftRu: '"'
         },
        size: 1,
        key: 'Digit2'
    },
    {
        name: {
            en: '3',
            ru: '3'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '3',
            ru: '3',
            shiftEn: '#',
            shiftRu: '№'
         },
        size: 1,
        key: 'Digit3'
    },
    {
        name: {
            en: '4',
            ru: '4'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '4',
            ru: '4',
            shiftEn: '$',
            shiftRu: ';'
         },
        size: 1,
        key: 'Digit4'
    },
    {
        name: {
            en: '5',
            ru: '5'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '5',
            ru: '5',
            shiftEn: '%',
            shiftRu: '%'
         },
        size: 1,
        key: 'Digit5'
    },
    {
        name: {
            en: '6',
            ru: '6'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '6',
            ru: '6',
            shiftEn: '^',
            shiftRu: ':'
         },
        size: 1,
        key: 'Digit6'
    },
    {
        name: {
            en: '7',
            ru: '7'
        },
        type: ButtonType.Print,
        printValue:  {
            en: '7',
            ru: '7',
            shiftEn: '&',
            shiftRu: '?'
         },
        size: 1,
        key: 'Digit7'
    },
    {
        name: {
            en: '8',
            ru: '8'
        },
        type: ButtonType.Print,
        printValue: {
            en: '8',
            ru: '8',
            shiftEn: '*',
            shiftRu: '*'
         },
        size: 1,
        key: 'Digit8'
    },
    {
        name: {
            en: '9',
            ru: '9'
        },
        type: ButtonType.Print,
        printValue: {
            en: '9',
            ru: '9',
            shiftEn: '(',
            shiftRu: '('
         },
        size: 1,
        key: 'Digit9'
    },
    {
        name: {
            en: '0',
            ru: '0'
        },
        type: ButtonType.Print,
        printValue: {
            en: '0',
            ru: '0',
            shiftEn: ')',
            shiftRu: ')'
         },
        size: 1,
        key: 'Digit0'
    },
    {
        name: {
            en: '-',
            ru: '-'
        },
        type: ButtonType.Print,
        printValue: {
            en: '-',
            ru: '-',
            shiftEn: '_',
            shiftRu: '_'
         },
        size: 1,
        key: 'Minus'
    },
    {
        name: {
            en: '=',
            ru: '='
        },
        type: ButtonType.Print,
        printValue: {
            en: '=',
            ru: '=',
            shiftEn: '+',
            shiftRu: '+'
         },
        size: 1,
        key: 'Equal'
    },
    {
        name: {
            en: 'Backspace',
            ru: 'Backspace'
        },
        type: ButtonType.Backspace,
        size: 2,
        key: 'Backspace'
    },

    
    {
        name: {
            en: 'Tab',
            ru: 'Tab'
        },
        type: ButtonType.Tab,
        size: 2,
        key: 'Tab'
    },
    {
        name: {
            en: 'Q',
            ru: 'Й'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'q',
            ru: 'й',
            shiftEn: 'Q',
            shiftRu: 'Й'
         },
        size: 1,
        key: 'KeyQ'
    },
    {
        name: {
            en: 'W',
            ru: 'Ц'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'w',
            ru: 'ц',
            shiftEn: 'W',
            shiftRu: 'Ц'
         },
        size: 1,
        key: 'KeyW'
    },
    {
        name: {
            en: 'E',
            ru: 'У'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'e',
            ru: 'У',
            shiftEn: 'E',
            shiftRu: 'У'
         },
        size: 1,
        key: 'KeyE'
    },
    {
        name: {
            en: 'R',
            ru: 'К'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'r',
            ru: 'к',
            shiftEn: 'R',
            shiftRu: 'К'
         },
        size: 1,
        key: 'KeyR'
    },
    {
        name: {
            en: 'T',
            ru: 'Е'
        },
        type: ButtonType.Print,
        printValue: {
            en: 't',
            ru: 'е',
            shiftEn: 'T',
            shiftRu: 'Е'
         },
        size: 1,
        key: 'KeyT'
    },
    {
        name: {
            en: 'Y',
            ru: 'Н'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'y',
            ru: 'н',
            shiftEn: 'Y',
            shiftRu: 'Н'
         },
        size: 1,
        key: 'KeyY'
    },
    {
        name: {
            en: 'U',
            ru: 'Г'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'u',
            ru: 'г',
            shiftEn: 'U',
            shiftRu: 'Г'
         },
        size: 1,
        key: 'KeyU'
    },
    {
        name: {
            en: 'I',
            ru: 'Ш'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'i',
            ru: 'ш',
            shiftEn: 'I',
            shiftRu: 'Ш'
         },
        size: 1,
        key: 'KeyI'
    },
    {
        name: {
            en: 'O',
            ru: 'Щ'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'o',
            ru: 'щ',
            shiftEn: 'O',
            shiftRu: 'Щ'
         },
        size: 1,
        key: 'KeyO'
    },
    {
        name: {
            en: 'P',
            ru: 'З'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'p',
            ru: 'з',
            shiftEn: 'P',
            shiftRu: 'З'
         },
        size: 1,
        key: 'KeyP'
    },
    {
        name: {
            en: '[',
            ru: 'Х'
        },
        type: ButtonType.Print,
        printValue: {
            en: '[',
            ru: 'х',
            shiftEn: '{',
            shiftRu: 'Х'
         },
        size: 1,
        key: 'BracketLeft'
    },
    {
        name: {
            en: ']',
            ru: 'Ъ'
        },
        type: ButtonType.Print,
        printValue: {
            en: ']',
            ru: 'ъ',
            shiftEn: '}',
            shiftRu: 'Ъ'
         },
        size: 1,
        key: 'BracketRight'
    },
    {
        name: {
            en: `\\`,
            ru: '\\'
        },
        type: ButtonType.Print,
        printValue: {
            en: `\\`,
            ru: '\\',
            shiftEn: '|',
            shiftRu: '/'
         },
        size: 1,
        key: 'Backslash'
    },


    {
        name:  {
            en: 'CapsLk',
            ru: 'CapsLk'
        },
        type: ButtonType.CapsLk,
        size: 2,
        key: 'CapsLock'
    },
    {
        name:  {
            en: 'A',
            ru: 'Ф'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'a',
            ru: 'ф',
            shiftEn: 'A',
            shiftRu: 'Ф'
         },
        size: 1,
        key: 'KeyA'
    },
    {
        name:  {
            en: 'S',
            ru: 'Ы'
        },
        type: ButtonType.Print,
        printValue: {
            en: 's',
            ru: 'ы',
            shiftEn: 'S',
            shiftRu: 'Ы'
         },
        size: 1,
        key: 'KeyS'
    },
    {
        name:  {
            en: 'D',
            ru: 'В'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'd',
            ru: 'в',
            shiftEn: 'D',
            shiftRu: 'В'
         },
        size: 1,
        key: 'KeyD'
    },
    {
        name:  {
            en: 'F',
            ru: 'А'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'f',
            ru: 'а',
            shiftEn: 'F',
            shiftRu: 'А'
         },
        size: 1,
        key: 'KeyF'
    },
    {
        name:  {
            en: 'G',
            ru: 'П'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'g',
            ru: 'п',
            shiftEn: 'G',
            shiftRu: 'П'
         },
        size: 1,
        key: 'KeyG'
    },
    {
        name:  {
            en: 'H',
            ru: 'Р'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'h',
            ru: 'р',
            shiftEn: 'H',
            shiftRu: 'Р'
         },
        size: 1,
        key: 'KeyH'
    },
    {
        name:  {
            en: 'J',
            ru: 'О'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'j',
            ru: 'о',
            shiftEn: 'J',
            shiftRu: 'О'
         },
        size: 1,
        key: 'KeyJ'
    },
    {
        name:  {
            en: 'K',
            ru: 'Л'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'k',
            ru: 'л',
            shiftEn: 'K',
            shiftRu: 'Л'
         },
        size: 1,
        key: 'KeyK'
    },
    {
        name:  {
            en: 'L',
            ru: 'Д'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'l',
            ru: 'д',
            shiftEn: 'L',
            shiftRu: 'Д'
         },
        size: 1,
        key: 'KeyL'
    },
    {
        name:  {
            en: ';',
            ru: 'Ж'
        },
        type: ButtonType.Print,
        printValue: {
            en: ';',
            ru: 'ж',
            shiftEn: ':',
            shiftRu: 'Ж'
         },
        size: 1,
        key: 'Semicolon'
    },
    {
        name: {
            en:"'",
            ru: 'Э'
        },
        type: ButtonType.Print,
        printValue: {
            en: "'",
            ru: 'э',
            shiftEn: '"',
            shiftRu: 'Э'
         },
        size: 1,
        key: 'Quote'
    },
    {
        name:  {
            en: 'Enter',
            ru: 'Enter'
        },
        type: ButtonType.Enter,
        size: 2,
        key: 'Enter'
    },


    {
        name:  {
            en: 'Shift',
            ru: 'Shift'
        },
        type: ButtonType.Shift,
        size: 2.5,
        key: 'ShiftLeft'
    },
    {
        name:  {
            en: 'Z',
            ru: 'Я'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'z',
            ru: 'я',
            shiftEn: 'Z',
            shiftRu: 'Я'
         },
        size: 1,
        key: 'KeyZ'
    },
    {
        name:  {
            en: 'X',
            ru: 'Ч'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'x',
            ru: 'ч',
            shiftEn: 'X',
            shiftRu: 'Ч'
         },
        size: 1,
        key: 'KeyX'
    },
    {
        name:  {
            en: 'C',
            ru: 'С'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'c',
            ru: 'с',
            shiftEn: 'C',
            shiftRu: 'С'
         },
        size: 1,
        key: 'KeyC'
    },
    {
        name:  {
            en: 'V',
            ru: 'М'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'v',
            ru: 'м',
            shiftEn: 'V',
            shiftRu: 'М'
         },
        size: 1,
        key: 'KeyV'
    },
    {
        name:  {
            en: 'B',
            ru: 'И'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'b',
            ru: 'и',
            shiftEn: 'B',
            shiftRu: 'И'
         },
        size: 1,
        key: 'KeyB'
    },
    {
        name:  {
            en: 'N',
            ru: 'Т'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'n',
            ru: 'т',
            shiftEn: 'N',
            shiftRu: 'Т'
         },
        size: 1,
        key: 'KeyN'
    },
    {
        name:  {
            en: 'M',
            ru: 'Ь'
        },
        type: ButtonType.Print,
        printValue: {
            en: 'm',
            ru: 'ь',
            shiftEn: 'M',
            shiftRu: 'Ь'
         },
        size: 1,
        key: 'KeyM'
    },
    {
        name:  {
            en: ',',
            ru: 'Б'
        },
        type: ButtonType.Print,
        printValue: {
            en: ',',
            ru: 'б',
            shiftEn: '<',
            shiftRu: 'Б'
         },
        size: 1,
        key: 'Comma'
    },
    {
        name:  {
            en: '.',
            ru: 'Ю'
        },
        type: ButtonType.Print,
        printValue: {
            en: '.',
            ru: 'ю',
            shiftEn: '>',
            shiftRu: 'Ю'
         },
        size: 1,
        key: 'Period'
    },
    {
        name:  {
            en: '/',
            ru: '.'
        },
        type: ButtonType.Print,
        printValue: {
            en: '/',
            ru: '.',
            shiftEn: '?',
            shiftRu: ','
         },
        size: 1,
        key: 'Slash'
    },
    {
        name:  {
            en: 'Shift',
            ru: 'Shift'
        },
        type: ButtonType.Shift,
        size: 1.5,
        key: 'ShiftRight'
    },
    {
        name:  {
            en: 'Up',
            ru: 'Up'
        },
        type: ButtonType.Up,
        size: 1,
        key: 'ArrowUp'
    },


    {
        name:  {
            en: 'Ctrl',
            ru: 'Ctrl'
        },
        type: ButtonType.Ctrl,
        size: 1.5,
        key: 'ControlLeft'
    },
    {
        name:  {
            en: 'Fn',
            ru: 'Fn'
        },
        type: ButtonType.Fn,
        size: 1,
        key: null
    },
    {
        name:  {
            en: 'Win',
            ru: 'Win'
        },
        type: ButtonType.Win,
        size: 1,
        key: 'MetaLeft'
    },
    {
        name:  {
            en: 'Alt',
            ru: 'Alt'
        },
        type: ButtonType.Alt,
        size: 1,
        key: 'AltLeft'
    },
    {
        name:  {
            en: '',
            ru: ''
        },
        type: ButtonType.Print,
        printValue: {
            en: ' ',
            ru: ' ',
            shiftEn: ' ',
            shiftRu: ' '
         },
        size: 4,
        key: 'Space'
    },
    {
        name:  {
            en: 'Alt',
            ru: 'Alt'
        },
        type: ButtonType.Alt,
        size: 1,
        key: 'AltRight'
    },
    {
        name:  {
            en: 'Menu',
            ru: 'Menu'
        },
        type: ButtonType.Fn,
        size: 1,
        key: 'ContextMenu'
    },
    {
        name:  {
            en: 'Ctrl',
            ru: 'Ctrl'
        },
        type: ButtonType.Ctrl,
        size: 1.5,
        key: 'ControlRight'
    },
    {
        name:  {
            en: 'Left',
            ru: 'Left'
        },
        type: ButtonType.Left,
        size: 1,
        key: 'ArrowLeft'
    },
    {
        name:  {
            en: 'Down',
            ru: 'Down'
        },
        type: ButtonType.Down,
        size: 1,
        key: 'ArrowDown'
    },
    {
        name:  {
            en: 'Right',
            ru: 'Right'
        },
        type: ButtonType.Right,
        size: 1,
        key: 'ArrowRight'
    }
];