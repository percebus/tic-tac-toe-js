# `react-tic-tac-toe-jsx-app` History

## `create-react-app`

Following the [tutorial](https://reactjs.org/tutorial/tutorial.html#setup-option-2-local-development-environment), this project was created using

```bash
$> npx create-react-app .
$> rm -rf src/*
```

Which is why you'll find many left-overs & unused assets


## `chrome-extension`

### `manifest.json`

Since there was already a `manifest.json` there, this later was renamed as `manifest.react.json`. Moreover, there were attempts of merging the 2 of them, but the `chrome-extension` spec (`"manifest_version": 3`) seems to differ from the one react uses (`v2` perhaps?)

### React Routing

Since we were not able to use [`react-router(-dom)`](https://github.com/remix-run/react-router), React's defacto's routing library; we had to resort to [`react-chrome-extension-router`](https://github.com/kelsonpw/react-chrome-extension-router).


## `electron`

1. `$> npm install electron --save-dev`

### `forge`

1. `$> npm install --save-dev @electron-forge/cli`
1. `$> npx electron-forge import`
