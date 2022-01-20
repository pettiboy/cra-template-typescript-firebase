# CRA TypeScript Firebase Template

## ⚙️ Usage

```bash
npx create-react-app your-project-name --template typescript-firebase
```

Or

```bash
yarn create react-app your-project-name --template typescript-firebase
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## ✨ Featues

### 1. Routing

Routing setup using `react-router-dom`.

- With easily implementable private routes (routes only authenticated users can use).

- Easily add new screens.

### 2. Authentication

Authentication implemented implemented

SignIn with Google implemented using `firebase` and `react-firebase-hooks`.

### 3. Firebase Configured

Firebase configured with `GoogleAuthProvider` implemented.

### 4. Material UI

Login Screen UI built using `@mui/material`.

## 🔧 File Structure

```
├── src
│   ├── components
│   │   ├── auth
│   │   |   ├── AuthChecker.tsx
│   │   |   ├── AuthContainer.tsx
│   │   |   ├── Logout.tsx
│   │   ├── utils
│   │   |   ├── Center.tsx
│   ├── config
│   │   ├── firebase.config.ts
│   │   ├── firebase.ts
│   │   ├── routes.ts
│   ├── screens
│   │   ├── Login.tsx
│   │   ├── Home.tsx
```

### To create a new screen

1. Create a new component in `src/screens`

2. In your `src/config/routes.ts`

```tsx
{
    path: "/your-route",
    component: YourScreenComponentName,
    name: "Screen Name For Reference",
    protected: false, // if user needs to be authenticated to access this screen
}
```
