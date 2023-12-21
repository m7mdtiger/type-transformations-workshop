import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;

// type AppleOrBanana = unknown;
// type Fruit = unknown;

/**
 * Answer
 */
type FruitsType = typeof fruits;
type AppleOrBanana = FruitsType[0 | 1];
type Fruit = FruitsType[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
