# How to start project

> Minimum Node.js v18
> Please see the `package.json` file for the actual version

### Nuxt 3

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)

##### Installation

```bash
$ npx nuxi init dashboard-starter
$ cd dashboard-starter

$ npm install

$ npm run dev
$ npm run build
$ npm run preview
```

##### Development

```bash
$ git clone [url-repo]

$ cd [repo-name]

$ npm ci
$ npm run dev
$ npm run build
$ npm run preview
```

##### Deployment

[Nuxt 3 deployment](https://nuxt.com/docs/getting-started/deployment)

```bash
# run production
$ npm ci
$ npm run build

# run with start or run on pm2 service
$ npm run start
```

### Eslint & Vite plugin

[Eslint reference](https://localazy.com/blog/nuxt-3-tailwind-i18n-eslint-starter)

```bash
# install eslint
$ npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-nuxt eslint-plugin-vue

# install vite-plugin-eslint
$ npm install --save-dev vite-plugin-eslint
```

- create `.eslintrc.js` and `vite.config.ts`
- add `vite-plugin-eslint` configuration on `nuxt.config.ts`

### Volar plugin

[Docs Volar plugin](https://www.npmjs.com/package/@volar-plugins/vetur)

```bash
# install volar-plugins/vetur
$ npm install --save-dev @volar-plugins/vetur
```

- create `volar.config.js`

### Tailwind

[Docs Tailwind CSS with Nuxt.js](https://tailwindcss.com/docs/guides/nuxtjs#3)

```bash
# install tailwindcss and more config on documentation
$ npm install --save-dev tailwindcss postcss autoprefixer
```

### Create Nuxt Pages & Layouts

`./app.vue`

```vue
<template>
  <NuxtPage />
</template>
```

`./layouts/default.vue`

```vue
<template>
  <slot />
</template>
```

`/pages/index.vue`

```vue
<template>
  <NuxtLayout name="default">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </NuxtLayout>
</template>
```

### Element Plus

[Docs Nuxt Module - Element Plus](https://nuxt.com/modules/element-plus)

```bash
$ npm install --save-dev @element-plus/nuxt
```

### I18n

[Docs Nuxt Module - I18n](https://nuxt.com/modules/color-mode)

```bash
$ npm install --save-dev @nuxtjs/i18n@8.0.0-beta.9
```

### Icon

[Docs Nuxt Module - Icon](https://nuxt.com/modules/icon)

```bash
$ npm install --save-dev nuxt-icon
```

### Auth

[Docs Nuxt Module - Nuxt auth](https://nuxt.com/modules/nuxt-auth)

```bash
$ npm install --save-dev @sidebase/nuxt-auth
```

### Image

[Docs Nuxt Module - @nuxt/image-edge](https://nuxt.com/modules/image)

```bash
$ npm install --save-dev @nuxt/image-edge
```

### Pinia

[Docs Nuxt Module - @pinia/nuxt](https://www.npmjs.com/package/@pinia/nuxt)
[Docs Pinia Library](https://nuxt.com/modules/pinia)

```bash
$ npm install @pinia/nuxt
$ npm install pinia --force
```

### Proxy

[Docs Proxy Library](https://www.npmjs.com/package/nuxt-proxy-request)

```bash
$ npm install --save-dev nuxt-proxy-request
```

# Start Website Poject

### Init website basic parts

- `./components/`
- `./composables/`
- `./layouts/`
- `./locales/`
- `./middleware/`
- `./pages/`
- `./public/`
- `./server/`
- `./stores/`
- `./utils/`
- `./app.vue/`
- `./error.vue/`
