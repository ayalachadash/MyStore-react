import React from "react";
import { shallow } from 'enzyme';
import { add } from "../services/DataProducts.service";
describe("tests", () => {
    it('See Product Details testing', () => {
        const result = add(4, 5);
        expect(result).toEqual(9);
    })
})