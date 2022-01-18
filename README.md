
# Superformula Challenge

Microfrontend solution for superformula challenge

## Features

- Typescript
- Lerna & Yarn workspaces
- Components generators
- Husky & Precommit hooks
- Conventional commit tools

## Quick start

Make sure that you have Node v8 or above installed.

1. run `yarn` to install deps and navigate to packages/sf-ui-kit

## Architecture
I planned to create a microfront end approach, I wanted to create a UI kit that contains all components and UI related stuff (like material-ui,reactstrap, etc... ), for that I choose yarn workspaces and lerna.

My main idea was to create a Gatsby website that implements this UI kit and a Testcafe script that tests that site

## Known Issues

I never worked with Mapbox before, but I choose the dependency since looks to be easy to implement, but after all the work I found that has a lot of issues, I was not able to make unit tests work for it, so I spend a lot of time debugging that problem just to find out that is also messing up webpack configuration.

I should use a different library, but actually I dont have more time to take care about it.

Regarding the Test site, and Website, I didnt made them since they are failing when I try to import the library.

But I left some example files of my approach for those

MIT
