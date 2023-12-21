import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// type ClickEvent = unknown;

/**
 * Answer
 */
type ClickEvent = Extract<Event, { type: "click" }>;

// Or
type ClickEvent1 = Extract<Event, { event: MouseEvent }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
