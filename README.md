# @sitemachine/puck-utils

Utility helpers for teams building on the Puck editor. The package ships TypeScript-first APIs that make it easier to wire up custom components and author richer editing experiences. It currently focuses on stronger type inference for component definitions, with additional utilities planned.

## Install

Install alongside `@measured/puck` using your preferred package manager:

```bash
npm install @sitemachine/puck-utils @measured/puck
```

## Usage

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

## InferFieldValue

The `InferFieldValue` type utility allows you to extract the TypeScript type for any Puck field configuration. This is useful when you need to work with field values outside of `defineComponent`:

```typescript
import { InferFieldValue } from "@sitemachine/puck-utils";

// Infer type from a field definition
type TitleField = { type: "text" };
type TitleValue = InferFieldValue<TitleField>; // string

type SelectField = {
  type: "select";
  options: [
    { label: "Option 1", value: "one" },
    { label: "Option 2", value: 2 }
  ];
};
type SelectValue = InferFieldValue<SelectField>; // "one" | 2
```

`InferFieldValue` supports all Puck field types including `text`, `textarea`, `number`, `select`, `radio`, `array`, `object`, `custom`, `slot`, and `external`.
