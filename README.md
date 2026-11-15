# JustFlip

A small, dependency-free color flipper. Generate a random RGB color, read its hex value and copy it for use elsewhere.

- Responsive layout, including 320px screens.
- Keyboard-accessible buttons and polite color announcements.
- Black or white text selected for contrast against the current background.
- Clipboard success feedback and manual-copy guidance when access is denied.
- No runtime network dependencies, accounts or stored user data.

## Run locally

Serve this directory over HTTP, for example:

```sh
python3 -m http.server 4178 --bind 127.0.0.1
```

Open http://127.0.0.1:4178. No build is required. Clipboard access needs a secure context (HTTPS or localhost) and browser permission. If copying fails, select the displayed hex value and copy manually.

## Checks

Node.js 24 and Python 3 are used in CI.

```sh
npm ci
npx playwright install chromium
npm run check
CI=1 npm test
```

Local tests use installed Chrome by default. Set `CI=1` to use Playwright Chromium.
The browser suite covers keyboard activation, mobile overflow, contrast at dark/light/midpoint colors, hex/RGB consistency, actual clipboard success and denied-permission recovery.
There is no bundler, TypeScript compiler or separate linter; `check` validates JavaScript syntax.

## Release

Existing free GitHub Pages URL: https://atishayjain005.github.io/JustColorFlip/

Pages is configured for the `main` branch and repository root. An open PR does not update this site. After review and merge, wait for the Pages build, then verify the deployed page title, mobile layout, keyboard flip, hex readout and clipboard behavior on HTTPS. Do not treat a successful PR test run or HTTP 200 alone as proof of deployment.

See [improvement register](docs/improvement-log.md) for scope and remaining release work.
