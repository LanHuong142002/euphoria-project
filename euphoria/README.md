# Next.js and Shadcn practice

## Overview

- [This document](https://docs.google.com/document/d/1W0Rh3RCwajFvk4HJ8gNMaVm7YTojM2xe/edit) provides information about Next.js and Shadcn practice
- Design:
  - [figma](https://www.figma.com/design/bQ0ACHurwoYaLt3YrSAZXB/Euphoria---Ecommerce-Website-Template?node-id=0-1&p=f&t=pAA9melPpKykubqt-0)

## App Bio

- Euphoria is a modern and responsive e-commerce website template for showcasing and selling products online.

## Techniques Stack

- [Next.js](https://nextjs.org/) v15
- [React](https://react.dev/) v19
- [TypeScript](https://www.typescriptlang.org/) v5
- [Tailwind CSS](https://tailwindcss.com/) v3
- [Shadcn](https://ui.shadcn.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)/ [Jest](https://jestjs.io/)
- [React Hook Form](https://react-hook-form.com/)
- [zod](https://zod.dev/)
- [Strapi](https://strapi.io/)

## Development Tools

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Vercel](https://vercel.com)
- [Commitlint](https://commitlint.js.org/#/)
- [Storybook](https://storybook.js.org/)

## Targets

- Use core components from Shadcn UI effectively in a project
- Customize and extend Shadcn UI components to match design needs
- Understand and apply Radix Themes and Tailwind CSS tokens for consistent styling and
  theming
- Build fully responsive interfaces Shadcn UI
- Try out v0 dev to generate component with AI
- Deploy on Vercel

## Features

### Authentication

- User can log in with username and password
- User can log out by clicking on the pop-up in user header icon

### Products

- User can search the product by name
- User can filter products by price and category
- User can see the product detail page
- User can select the size/ color
- User can see different product’s images when clicking the image
- User can add a product to the cart

### CART

1. Guest
   - When the user clicks “Add to cart”/cart icon, it will redirect to the Login page

2. User
   - User will be redirected to the Cart page when clicking on “Add to cart”/ icon cart.
   - User can see the total number of cart items in the cart icon
   - User can check out the cart
   - User can see the confirmation order page
   - User can see the empty cart page

## How to run

### Prerequisites

Make sure you install packages with correct version below:

- [node v20.18.0](https://nodejs.org/en/download/package-manager)
- [pnpm 9.15.9](https://pnpm.io/installation)

- **Note:**
  - Please add `.env` into root of project source code, refer `.env.sample`.

### Build and Run app

| Command            | Action                                     | Port                  |
| :----------------- | :----------------------------------------- | :-------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                   |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                   |
| `$ pnpm start`     | Starts the application in production mode. | http://localhost:3000 |
| `$ pnpm dev`       | Run the app in development mode            | http://localhost:3000 |
| `$ pnpm storybook` | Run Storybook.                             | http://localhost:6006 |
| `$ pnpm test`      | Run Unit Test                              | N/A                   |
| `$ pnpm coverage`  | Generate code coverage                     | N/A                   |

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── public                          # Public assets folder
├── src
│   ├── actions                     # Next.js actions
│   ├── app                         # Next.js App (App Router)
│   ├── config                      # Contain app configuration
│   ├── constants                   # App constants
│   ├── contexts                    # App contexts
│   ├── hooks                       # Custom hooks
│   ├── schema                      # Contain schema validation
│   ├── services                    # Handle data with API: GET, POST, PUT, DELETE
│   ├── types                       # Type definitions
│   ├── ui                          # Folder contain ui of app
│       ├── components              # React components
│       ├── icons                   # Icons of the app
│       ├── shared                  # React components shared
│   ├── utils                       # Utilities folder
│   ├── middlewares.ts              # Next.js middleware
├── .eslintrc.json                  # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── jest.config.ts                  # Jest configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # Post CSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```
