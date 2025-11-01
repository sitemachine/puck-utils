import type { CustomField } from "@measured/puck";
import { defineComponent } from "../src";

defineComponent({
  fields: {
    number: { type: "number" },
    text: { type: "text" },
    textarea: { type: "textarea" },
    slot: { type: "slot" },
    array: { type: "array", arrayFields: { a: { type: "text" }, b: { type: "number" } } },
    object: { type: "object", objectFields: { name: { type: "text" }, height: { type: "number" } } },
    select: { type: "select", options: [{ label: "Option 1", value: "One" }, { label: "Option 2", value: 2 }] },
    radio: { type: "radio", options: [{ label: "Option 1", value: "One" }, { label: "Option 2", value: 2 }] },
    custom: { type: "custom", render: () => null, } satisfies CustomField<string>
  },
  render({
    number,
    text,
    textarea,
    slot,
    array,
    object,
    select,
    radio,
    custom
  }) {
    // prop types are inferred
  }
});