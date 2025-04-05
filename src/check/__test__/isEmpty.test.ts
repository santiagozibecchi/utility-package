import { isEmpty } from "../isEmpty";

describe("isEmpty", () => {

  it('should return true if param is ""', () => {
    expect(isEmpty('')).toBe(true);
  })

  it.each([
    { tested: [], expected: true, label: '[]' },
    { tested: {}, expected: true, label: '{}' },
    { tested: [1, 2, 3], expected: false, label: '[1,2,3]' },
    { tested: undefined, expected: true, label: 'undefined' },
    { tested: null, expected: true, label: 'null' },
  ])('isEmpty($label) should be $expected', ({ tested, expected }) => {
    expect(isEmpty(tested)).toBe(expected);
  })

})