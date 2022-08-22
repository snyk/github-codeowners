import {percentageToFixed} from "./stats"

describe("stats.ts", () => {
    test("percentageToFixed should default to 2 fixed decimals", () => {
        const actual = percentageToFixed(22, 66)
        const expected = 33.33

        expect(actual).toEqual(expected)
    })

    test("percentageToFixed should have 4 fixed decimals", () => {
        const actual = percentageToFixed(22, 66, 4)
        const expected = 33.3333
    
        expect(actual).toEqual(expected)
    })

    test("percentageToFixed should have 0 fixed decimals", () => {
        const actual = percentageToFixed(22, 66, 0)
        const expected = 33
    
        expect(actual).toEqual(expected)
    })
})