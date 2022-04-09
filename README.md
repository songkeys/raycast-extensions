# raycast-extensions

Songkeys's [Raycast](https://www.raycast.com/) extension collection.

## How To Use

1. Clone this repo.

2. For scripts, go to <kbd>Raycast Preference</kbd> -> <kbd>Extensions</kbd> -> <kbd>Add Script Directory</kbd> -> (Add `./scripts` directory).

   ![installation](https://user-images.githubusercontent.com/22665058/162558227-123b137d-52de-4288-bb99-3ecbb65fc127.png)

3. For extensions, go to an extension's folder and run `npm i && npm run dev`, then exit the process once it completes building. For example:

   ```bash
   $ cd ./translateer
   $ npm i && npm run dev
   ❯ npm run dev

   > dev
   > ray develop

   🧬 Building entry points [src/index.tsx]
   Filtering the log data using "subsystem CONTAINS "com.raycast.extensions.translateer""
   ✅ Build complete # ^C to exit when it's done

   ✋ Stopped development mode
   ```

   Now open Raycast and type the extension's name, you will see it.

## Scripts

- [Brew Update](./scripts/brew-update.sh): Update homebrew itself and all services and casks then cleanup
- [Is It Down or Just Me?](./scripts/is-it-down-or-just-me.sh): Check if a website is down or just me

## [Translateer](./translateer)

Translate text with [Google Translate](https://translate.google.com/) using a Puppeteer API ([Translateer](https://t.song.work)).

![translateer-1](https://user-images.githubusercontent.com/22665058/142718320-871b0c71-7e30-422a-889d-51d0bc6dcf88.png)

![translateer-2](https://user-images.githubusercontent.com/22665058/142718352-8742a67b-b058-406f-8fee-a465bfd3cba3.png)

```

```
