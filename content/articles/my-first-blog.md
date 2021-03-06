---
title: Windows Terminal Context Menu
description: Terminals are one tool most programmers use to automatically generate something or build something. So having this kind of terminal is awesome.
img: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.guidingtech.com%2Fmedia%2Fassets%2FWindowsTerminal_Cover.png&f=1&nofb=1
category: Terminal
tags: ['terminal']
createdAtDate: 2021-04-03T00:00:00.000Z
---

When I heard about The new [Windows Terminal](https://www.microsoft.com/en-ph/p/windows-terminal/9n0dx20hk701) I was mind Blown because of how beautiful it is to customize your own terminal window.

<img src="https://github.com/MisterJ936/Explorer-Context-Menu-Integration-for-windows-terminal/blob/master/images/yzavvq4we0ao5akst1d2.jpg?raw=true" alt="random image" />

Terminals are one tool most programmers use to automatically generate something or build something. So having this kind of terminal is awesome.

After Downloading the terminal there is something missing. And that is opening the Windows Terminal in the context menu.

What A context menu is when you right-click on a directory and an option will show up. Something like this image. This is really a good feature to have because you can just easily open your project by doing it.

<img src="https://github.com/MisterJ936/Explorer-Context-Menu-Integration-for-windows-terminal/blob/master/images/1.png?raw=true" alt="windows explorer"/>

And so because of that, I created a simple [PROJECT](https://github.com/MisterJ936/Explorer-Context-Menu-Integration-for-windows-terminal) that is easy and simple to setup.

So, to set up this,

## Important
You should have installed the Windows Terminal on your system. If you haven't installed yet, you can go to these options to download the app:
- [Microsoft Store](https://aka.ms/terminal) - you directly download it on the Microsoft Store.
- [Terminal GitHub](https://github.com/microsoft/terminal#other-install-methods) - you can read more here Other install methods


> 👉 Note: Windows Terminal requires Windows 10 1903 (build 18362) or later


## Download the latest release [HERE](https://github.com/MisterJ936/Explorer-Context-Menu-Integration-for-windows-terminal/files/5212523/Source_0.0.1.zip)

Follow This Steps After Downloading, and will configure everything for you.

## HOW TO INSTALL THE CONTEXT MENU

### Install

#### for ZIP File - [Download](https://github.com/BroJenuel/Explorer-Context-Menu-Integration-for-windows-terminal/files/5693471/WTerminalCM_0.2.3.zip)
Extract the Zip File Run the `Install.bat` to automatically configure the context menu for you. 

#### for EXE File - [Download](https://github.com/BroJenuel/Explorer-Context-Menu-Integration-for-windows-terminal/files/5693472/WTContextMenu.zip)
Just Extract and run the exe file to automatically configure the context menu for you. 

#### After Insalling(Optional)  
You can edit The settings, so that when ever you click new tab it will always open in the same directory.

To open settings, open Windows Terminal and go to settings and add this just inside the default:

```lang-js
{
...
  "profiles": {
          "defaults": {
              ...
              "startingDirectory": "."
              ...
          },
          ...
    }
}
```

### Have a Nise Day! 😄👍👊

[Give me Coffee ☕](https://www.buymeacoffee.com/BroJenuel) hehe 😁😘👌