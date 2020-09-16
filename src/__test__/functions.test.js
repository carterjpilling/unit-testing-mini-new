import { add } from '../utils/functions'

test('Add two numbers', () => {
  expect(add(1, 2)).toBe(3)
});

test('add handles string inputs tthat are numbers', () => {
  expect(add('3', '5')).toBe(8)
})

test('add returns Nan if non numbers are passed', () => {
  expect(add('wassup', 'weirdo')).toBeNaN();
})