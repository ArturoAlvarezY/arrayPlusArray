import { describe, expect, it, should } from "vitest";
import { arraysAdition } from "./app.js";

describe('arraysAdition', () => {
    
it('should return 21 if first array is [1,2,3] and the second [4,5,6]', () => {

const firstAray= [1,2,3];
const secondArray= [4,5,6];
const result= arraysAdition(firstAray, secondArray);

expect(result).toBe(21);
expect(result).toBeTypeOf("number");

})



})