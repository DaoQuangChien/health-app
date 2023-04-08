# HEALTH APP

This project template is created by [Vite](https://vitejs.dev/), to develop a small Health App using:

- [ReactJS](https://react.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [React router dom](https://reactrouter.com/en/main)
- [momentjs](https://momentjs.com/)
- [Recharts](https://recharts.org/en-US/):
**Note**: The chart component in this project is just a dummy component, only for showing, there're no function or interaction with other elements of the web app.

---

### What's it about

A simple web app that displays information about health matters: meals, records, and recommendations.
There're 3 pages:

- **Home**: `/`
  Can be navigated to by pretty much any links in the page, except for 2 links
- **My Record**: `/my-record`
  Can be navigated to by clicking `自分の記録` in the burger menu
- **Column**: `/column`
  Can be navigated to by clicking `コラム一覧` in the burger menu

### Setting up

Run the following commands

- With `npm`

```
npm i           // install the dependencies
npm run dev     // run the source locally
```

- Or with `yarn`

```
yarn         // install the dependencies
yarn dev     // run the source locally
```

### Structure

This project contains:

- [assets](./src/assets): Store all the assets like fonts, images, etc...
- [components](./src/components): Store all the reusable components of the web app.
- [hooks](./src/hooks): Store all the custom hooks of the web app.
- [pages](./src/pages): Store all the pages of the web app. Each page has a path to navigate to.
  - `components`: Each page also has its own component folder which stores the components only used in that page
- [services](./src/services): Store the mock data, the function to get them, and also the data interfaces. In the real project, this folder stores all the requests to get the data.
- Some other miscellaneous:
  - [constants](./src/constants.ts): Store the constants
  - [tailwind.config](./tailwind.config.js): Configuration for Tailwindcss
  - [vite.config](./vite.config.ts): Configuration for Vite
  - [tsconfig](./tsconfig.json): Configuration for typescript
