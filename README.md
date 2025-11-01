# @sitemachine/puck-utils

Utility helpers for teams building on the Puck editor. The package ships TypeScript-first APIs that make it easier to wire up custom components and author richer editing experiences. It currently focuses on stronger type inference for component definitions, with additional utilities planned.

### Install

Install alongside `@measured/puck` using your preferred package manager:

```bash
npm install @sitemachine/puck-utils @measured/puck
```

### Usage

```typescript
import { defineComponent } from "@sitemachine/puck-utils";

const MyComponent = defineComponent({
  fields: {
    title: { type: "text" },
    count: { type: "number" }
  },
  // default props typing is inferred
  defaultProps: {
    title: "Hello, Puck!"
  },
  render({ title, count }) {
    // title is inferred as string, count as number
    // return whatever your Puck runtime expects (this example returns null)
    return null;
  }
});

export default MyComponent;
```

### Current features

- `defineComponent` provides full type inference for `ComponentConfig` fields and render props.
- Designed to compose with existing Puck editor workflows; more utilities will be added over time.

### Notes

- This repository ships type-safe helpers only — runtime behavior still depends on your Puck editor setup.

