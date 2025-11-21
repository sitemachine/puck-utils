import type {
  ArrayField,
  ComponentConfig,
  CustomField,
  Field,
  ObjectField,
  PuckComponent,
  Slot
} from "@measured/puck";

type Overwrite<T, U> = Omit<T, keyof U> & U;

export function defineComponent<
  const F extends NonNullable<ComponentConfig["fields"]>
>(
  config: Overwrite<ComponentConfig & { fields: F }, {
    defaultProps?: {
      [K in keyof F]?: InferFieldValue<F[K]> | (() => InferFieldValue<F[K]>)
    },
    render: PuckComponent<{
      [K in keyof F]: InferFieldValue<F[K]>
    }>
  }>
) {
  return config;
}

export type InferFieldValue<T extends Field> = (
  T["type"] extends "text" ? string :
  T["type"] extends "textarea" ? string :
  T["type"] extends "number" ? number :
  T["type"] extends "slot" ? Slot :
  T["type"] extends "external" ? any :
  T["type"] extends "array" ? InferArrayFieldValue<T> :
  T["type"] extends "object" ? InferObjectFieldValue<T> :
  T["type"] extends "select" ? InferSelectFieldValue<T> :
  T["type"] extends "radio" ? InferRadioFieldValue<T> :
  T["type"] extends "custom" ? InferCustomFieldValue<T> :
  any
);

type InferArrayFieldValue<T> = T extends ArrayField ? Array<{ [K in keyof T["arrayFields"]]: InferFieldValue<T["arrayFields"][K]> }> : never;

type InferObjectFieldValue<T> = T extends ObjectField ? { [K in keyof T["objectFields"]]: InferFieldValue<T["objectFields"][K]> } : never;

type InferSelectFieldValue<T> = T extends { options: readonly (infer R)[] }
  ? R extends { value: infer V } ? V : never
  : never;

type InferRadioFieldValue<T> = T extends { options: readonly (infer R)[] }
  ? R extends { value: infer V } ? V : never
  : never;

type InferCustomFieldValue<T> = T extends CustomField<infer V> ? V : never;