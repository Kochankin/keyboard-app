# Keyboard App

Keyboard App is an app simulating a real keyboard on the user's screen.

## Installation

Download the project or clone it using **git clone** command.

Please use **npm start** to run the project.

## Notes

- Keyboard **doesn't** define your initial state of language and CapsLock => *Eng* and *CapsLock=false* are default for screen-keyboard.

- You **can** switch language from Eng to Ru and back merely using usual keyboard or clicking on Shift/Alt on the screen with printing Alt/Shift accordingly from the real keyboard. The text on buttons is updated.

-  CapsLock is switched on and off both from the real and simulated keyboards. However screen CapsLock is only responsible for the current language for screen keaboard. When it's on the button **CapsLk** is highlighted.

- While printing the according button on the simulated keyboard is higlighted.

- *Tab, Fn, Win, Enter* and *arrows* buttons are **not working** for the simulated keyboard.

- You can press Shift on the real keyboard and print on the simulated one => it works similar to the printing on usual keyboard. But it's not applicable to printing on the real keyboard clicking on Shift on the screen sinc the focus at this moment is at the button, not the Input field.