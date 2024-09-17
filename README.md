# vue.js

This template should help get you started developing with Vue 3 in Vite.

## Project Description

This project is a simple Vue.js application that demonstrates the basic features and functionality of Vue 3. The application includes a main App component and a HelloWorld component, which displays a greeting message. The project is built using Vite, a fast and modern build tool for web development.

## Features

- Vue 3 single-file components
- Reactive data binding
- Event handling
- Component communication
- Vite for fast development and build

## Project Components

### `src/App.vue`

The main App component is the root component of the application. It imports and uses the HelloWorld and TheWelcome components. The App component includes a header with the Vue logo and a main section with the TheWelcome component.

### `src/components/HelloWorld.vue`

The HelloWorld component is a simple component that displays a greeting message. It receives a `msg` prop, which is used to display the message. The component includes a template with a heading and a paragraph, and scoped styles for the component.

### `src/components/TheWelcome.vue`

The TheWelcome component is a component that displays a welcome message and links to various resources related to Vue.js. It imports and uses several icon components, such as IconDocumentation, IconTooling, IconEcosystem, IconCommunity, and IconSupport. The component includes a template with multiple WelcomeItem components, each displaying a different resource.

## Screenshots

![App Screenshot](./screenshots/app.png)
![HelloWorld Screenshot](./screenshots/helloworld.png)

## Dependencies

The project has the following dependencies:

- `bootstrap`: ^5.3.2
- `typescript`: ^4.3.5
- `vue`: ^3.2.25

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
