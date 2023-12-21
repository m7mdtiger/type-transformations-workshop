import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

// export type StringType = unknown;
// export type IntType = unknown;
// export type FloatType = unknown;
// export type BooleanType = unknown;
// export type IDType = unknown;

/**
 * Answer
 */
type FakeDataTypes = typeof fakeDataDefaults;
export type StringType = FakeDataTypes["String"];
export type IntType = FakeDataTypes["Int"];
export type FloatType = FakeDataTypes["Float"];
export type BooleanType = FakeDataTypes["Boolean"];
export type IDType = FakeDataTypes["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
