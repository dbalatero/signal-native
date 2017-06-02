# signal-native

![Signal](https://github.com/dbalatero/signal-native/raw/master/assets/icon_256.png "Signal")

This repository allows you to build a native Mac client for Signal, with some 
extra fixes and features that following 
[this guide](https://timtaubert.de/blog/2016/01/build-your-own-signal-desktop/) 
won't give you (thanks for the initial guide though!).

## Features

* Uses the Signal icon in task switcher
* External links will open correctly in your configured external browser
* Extra keyboard shortcuts
  * `cmd+shift+[` and `cmd+shift+]` switch to previous/next chats in your list
  * `cmd+f`, `cmd+/` and `/` focus the Search box

## Build + install

Before you build, you'll need to have:

* yarn
* possibly nvm

```
# This is the version I happened to use, it might work with any old version?
# You might be able to skip these nvm steps and move on to cloning the repo
nvm install 8.0.0
nvm use

git clone https://github.com/dbalatero/signal-native.git
cd signal-native

yarn install
./bin/package

cp -r 'dist/Signal Private Messenger.app' /Applications
```

## Open questions

1. How does the security model of nwjs affect the build of this client?
Currently we are passing `{ nodejs: true }` as an option to the client build,
which enables us to access the `nw` variables from the browser. It doesn't
seem to add access to things like `process` or `fs`, but more audit would be
good.

2. Can we isolate the code that relies on `nodejs: true` in a better way?
nwjs documentation is a little spotty on this. It's really only needed for
this [external link fix](https://github.com/dbalatero/signal-native/blob/master/src/fix_external_links.js).

3. I should probably just contribute the keyboard shortcuts back to the
Signal Desktop repo.

## Develop new features

To start developing, you can run `brunch watch` in the background to 
auto-build the project as you develop.

To start a dev copy of the Signal app, just run `npm run dev`.

Once the app is open, you can right-click on the app and select Reload app to
refresh your changes. `brunch watch` will take care of rebuilding the source
as you save files.
