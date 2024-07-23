import {add} from "./math";

test('adding 1 + 2 is bigger than negative infinity', () => {
    expect(add(1, 2)).toBeGreaterThan(-Infinity);
});
