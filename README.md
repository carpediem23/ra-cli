# ra-cli

A CLI tool for React and TypeScript developers to quickly generate components, types, interfaces, and hooks.

## Need Contirbutors 📢📢📢

## Installation

```bash
npm install -g @carpediem23/ra-cli
```

## Usage

### Generate a React Component

```bash
npx ra create --component --name ComponentSample
```

This will create:
- A file `ComponentSample.tsx` with a default exported component

### Generate a TypeScript Type

```bash
npx ra create --type --name TTypeSample
```

This will create a type definition in `TTypeSample.ts` that is exported as a named export.

### Generate a TypeScript Interface

```bash
npx ra create --interface --name TInterfaceSample
```

This will create an interface definition in `TInterfaceSample.ts` that is exported as the default export.

### Generate a React Hook

```bash
npx ra create --hook --name HookSample
```

This will create a React hook in `HookSample.ts` that is exported as the default export.

### Generate a React Context

```bash
npx ra create --context --name ContextSample
```

This will create a React context in `ContextSample.tsx` that includes a context component named `ContextSample` and a custom hook named `useContextSample` to use the context.