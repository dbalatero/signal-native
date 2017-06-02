# signal-native

This repository allows you to build a native Mac client for Signal, with some 
extra fixes and features that following 
[this guide](https://timtaubert.de/blog/2016/01/build-your-own-signal-desktop/) 
won't give you (thanks for the initial guide though!).

## Features

* External links will open correctly in your configured external browser
* Extra keyboard shortcuts
  * `cmd+shift+[` and `cmd+shift+]` switch to previous/next chats in your list
  * `cmd+f`, `cmd+/` and `/` focus the Search box

## Build + install

```
git clone https://github.com/dbalatero/signal-native.git
cd signal-native

yarn
./bin/package

cp -r 'dist/Signal Private Messenger.app' /Applications
```

## Develop new features

To start developing, you can run `brunch watch` in the background to 
auto-build the project as you develop.

To start a dev copy of the Signal app, just run `npm run dev`.

Once the app is open, you can right-click on the app and select Reload app to
refresh your changes. `brunch watch` will take care of rebuilding the source
as you save files.
