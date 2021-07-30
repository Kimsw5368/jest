# puppeteer
- https://github.com/puppeteer/puppeteer

# puppeteer recorder
- https://github.com/checkly/headless-recorder
- guide
  - https://www.checklyhq.com/docs/headless-recorder/basic-usage
- install from the crhome webstore
  - https://chrome.google.com/webstore/detail/puppeteer-recorder/djeegiggegleadkkbgopoonhjimgehda

# jest
- https://jestjs.io/docs/en/getting-started

# jest-puppeteer
- https://github.com/smooth-code/jest-puppeteer


---


# prerequisite
node version ">=10.18.1"

# install
$ `yarn install`

$ `npm install -g jest@26.1.0`

# ubuntu
- https://github.com/puppeteer/puppeteer/issues/3443#issuecomment-489502908
$ `sudo apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils`

# apple m1
- issue: https://github.com/puppeteer/puppeteer/issues/6622
- install chromium
  * `brew install chromium`
  * add `~/.zshrc`
    ```bash
    export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
    export PUPPETEER_EXECUTABLE_PATH=`which chromium`
    ```
  * 실행시 security warnning 창이 보일 경우
    - `System Preferences > Security & Privacy > General` and click Open anyway
~
# puppeteer test
$ `node puppeteer-test.js`

# jest-puppeteer run
## target - https://stating.gitple.io
$ `yarn test`
## target- https://workspace.gitple.io
$ `TEST_TARGET=workspace.gitple.io yarn test`
## environment - HEADLESS, TEST_TARGET
$ `HEADLESS=false TEST_TARGET=testyg.gitple.io jest`
