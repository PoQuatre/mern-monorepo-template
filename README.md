# MERN Monorepo Template

This is a monorepo template for MERN websites. It uses a suite of useful tools for js & web development, a list of said tools can be found [here](#tools).

> This template comes with Server Side Rendering enabled by default !

## Project Structure

```
.
├── .husky/                         # This contains all git hooks.
├── packages/                       # This contains every packages needed for your app.
│   ├── client/                     # This contains the frontend for your app.
│   │   ├── src/
│   │   │   ├── App.tsx             # This is the core of the frontend app.
│   │   │   ├── entry-client.tsx    # This is the entrypoint for the client.
│   │   │   │                       #    (what you will serve to your users).
│   │   │   ├── entry-server.tsx    # This is the entrypoint for SSR.
│   │   │   └── vite-env.d.ts       # This is used to declare vite types.
│   │   ├── .eslintrc.json          # This contains ESLint configs specific
│   │   │                           #    to the client.
│   │   ├── index.html              # This is your HTML root (you can customize it).
│   │   ├── package.json
│   │   ├── tsconfig.json           # This contains TypeScript configs specific
│   │   │                           #    to the client.
│   │   ├── tsconfig.vite.json
│   │   └── vite.config.ts          # This is the config file for Vite.
│   │                               #    (see the `Tools` section for more info).
│   └── server/                     # This contains the backend for your app.
│       ├── src/
│       │   ├── client.d.ts         # This contains type definitions for the client.
│       │   ├── index.ts            # This is the entrypoint for the Express server.
│       │   └── registerClient.ts   # This is used to register client the ssr logic
│       │                           #    for the client.
│       ├── .eslintrc.json          # This contains ESLint configs specific
│       │                           #    to the server.
│       ├── package.json
│       └── tsconfig.json           # This contains TypeScript configs specific
│                                   #    to the server.
├── .commitizenrc.json              # This is the config file for Commitizen.
│                                   #    (see the `Tools` section for more info).
├── .commitlintrc.js                # This is the config file for Commitlint.
│                                   #    (see the `Tools` section for more info).
├── .eslintrc.cli.json              # This is the config file for ESLint specific
│                                   #    to the CLI. (see the `Tools` section
│                                   #    for more info).
├── .eslintrc.json                  # This is the config file for ESLint.
│                                   #    (see the `Tools` section for more info).
├── .gitignore
├── .prettierrc.json                # This is the config file for Prettier.
│                                   #    (see the `Tools` section for more info).
├── .stylelint.json                 # This is the config file for Stylelint.
│                                   #    (see the `Tools` section for more info).
├── LICENSE
├── package.json
├── README.md                       # <--- You are here !
├── tsconfig.base.json              # This contains shared TypeScript configs
└── yarn.lock
```

## Available commands

In the project root directory, you can run the following commands:

### `yarn dev`

This will start the development servers.

The app will be available on http://localhost:3000 (you can change the port used by setting the `PORT` environment variable).

> As this template uses SSR, your server routes and the client will be served on a single address / port.

### `yarn build`

This will build the app for production.

> This is equal to running `yarn build:client` & `yarn build:server`.

### `yarn start`

This will start the production build (the project need to be built before executing this command).

The app will be available on http://localhost:3000 (you can change the port used by setting the `PORT` environment variable).

> As this template uses SSR, your server routes and the client will be served on a single address / port.

### `yarn clean`

This will remove all build outputs.

> This is equal to running `yarn clean:client` & `yarn clean:server`.

### `yarn lint`

This will lint all source files using the configured linters (namely [ESLint](https://eslint.org/) & [Stylelint](https://stylelint.io/)).

> This is equal to running `yarn lint:client` & `yarn lint:server`.

### `yarn lint:fix`

This will lint and try to fix all source files using the configured linters (namely [ESLint](https://eslint.org/) & [Stylelint](https://stylelint.io/)).

> This is equal to running `yarn lint:fix:client` & `yarn lint:fix:server`.

### `yarn format`

This will check the formatting of all source files using [Prettier](https://prettier.io/).

> This is equal to running `yarn format:client` & `yarn format:server`.

### `yarn format:fix`

This will format all source files using [Prettier](https://prettier.io/).

> This is equal to running `yarn format:fix:client` & `yarn format:fix:server`.

### `yarn typecheck`

This will run the [TypeScript](https://www.typescriptlang.org/) compiler to check for typing errors.

> This is equal to running `yarn typecheck:client` & `yarn typecheck:server`.

### `yarn commit` or `git cz`

This will start the [Commitizen CLI](https://github.com/commitizen/cz-cli).

This is a helper for authoring commits following the conventions set by commitlint.

## Tools

- [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/): for splitting the backend and the frontend, while being able to share code between them (e.g. interfaces for the API).
- [TypeScript](https://www.typescriptlang.org/): for strong typing, and by extension, safer code at scale.
- [Husky](https://typicode.github.io/husky/): this is used for linting files before commit and enforcing commitlint conventions
- [Prettier](https://prettier.io/): for consistent formatting of every source files.
- [ESLint](https://eslint.org/): for applying linting rules to TS source files.
- [Stylelint](https://stylelint.io/): for applying linting rules and conventions to CSS files.
- [Commitlint](https://commitlint.js.org/): for enforcing commit conventions.
- [Commitizen CLI](https://github.com/commitizen/cz-cli): for authoring commits following the conventions set by commitlint.
