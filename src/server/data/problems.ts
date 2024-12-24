import { languages } from "./languages";

export const problems = [
  {
    id: 1,
    title: "Two Sum",
    description: `
Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

##### Example
\`\`\`python
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
\`\`\`

##### Constraints:
- You may assume that each input would have exactly one solution.
- You can return the answer in any order.
`,
    supportedLanguages: [languages[0], languages[1]], // JavaScript, Python
  },
  {
    id: 2,
    title: "Reverse String",
    description: `
Write a function that reverses a string. The input string is given as an array of characters \`s\`.

##### Example
\`\`\`python
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
\`\`\`

##### Constraints:
- Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
`,
    supportedLanguages: [languages[0], languages[2]], // JavaScript, C++
  },
  {
    id: 3,
    title: "Palindrome Number",
    description: `
Given an integer \`x\`, return \`true\` if \`x\` is a palindrome integer.

##### Example
\`\`\`python
Input: x = 121
Output: true
\`\`\`

##### Constraints:
- -2³¹ <= x <= 2³¹ - 1
- Follow up: Could you solve it without converting the integer to a string?
`,
    supportedLanguages: [languages[1], languages[3]], // Python, Java
  },
  {
    id: 4,
    title: "Fizz Buzz",
    description: `
Write a program that outputs the string representation of numbers from 1 to \`n\`. But for multiples of three, output \`"Fizz"\` instead of the number, and for the multiples of five output \`"Buzz"\`. For numbers that are multiples of both three and five, output \`"FizzBuzz"\`.

##### Example
\`\`\`python
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
\`\`\`

##### Constraints:
- 1 <= n <= 10⁴
`,
    supportedLanguages: [languages[1]], // Python
  },
  {
    id: 5,
    title: "Merge Two Sorted Lists",
    description: `
You are given the heads of two sorted linked lists. Merge the two lists into one sorted list.

##### Example
\`\`\`python
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
\`\`\`

##### Constraints:
- The number of nodes in both lists is in the range \[0, 50\].
- -100 <= Node.val <= 100
- Both \`list1\` and \`list2\` are sorted in non-decreasing order.
`,
    supportedLanguages: [languages[0], languages[1], languages[3]], // JavaScript, Python, Java
  },
];
