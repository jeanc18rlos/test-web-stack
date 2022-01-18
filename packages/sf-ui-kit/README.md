[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://storybook.js.org/)
# Superformula UI Kit

UI react component library distributed using Yarn.

## Features

- [Typescript](https://www.typescriptlang.org)
- Components generators
- Development Environment: [Storybook](https://storybook.js.org/)
- Styles: [Styled Components](https://www.styled-components.com/) with theming configuration
- Lint: [ESLint](https://eslint.org/)
- Tests: [Jest](https://jestjs.io/)

## Quick start

Make sure that you have Node v8 or above installed.

1. Clone this repo using `git clone  https://github.com/jeanc18rlos/test-web-stack`
2. Move to the appropriate directory: `cd packages/sf-ui-kit`.
3. Run `yarn` in order to install dependencies.
4. At this point you can run `yarn storybook` to see the example Storybook at [http://localhost:6006](http://localhost:6006).

## Creating new components

To add a new component, just run `yarn generate`. This command will generate all the component (Stateless or not) files for you.

## Testing

To test your components run `yarn test`.
By default we run tests and lint before any push.

## ENV

In order to test this UI kit you need to create an `.env` file at the root of this repo with your mapbox accessToken

``
STORYBOOK_MAPBOX_API_KEY=YOURMAPBOXAPIKEY
``
## License

MIT
