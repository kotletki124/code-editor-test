export const solutions = [
  {
    id: 1,
    problemId: 1,
    languageId: 1,
    code: `
// Two Sum in JavaScript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
    `,
  },
  {
    id: 2,
    problemId: 1,
    languageId: 2,
    code: `
# Two Sum in Python
def two_sum(nums, target):
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []
    `,
  },
  {
    id: 3,
    problemId: 2,
    languageId: 1,
    code: `
// Reverse String in JavaScript
function reverseString(str) {
  return str.split('').reverse().join('');
}
    `,
  },
  {
    id: 4,
    problemId: 2,
    languageId: 3,
    code: `
// Reverse String in C++
#include <string>
#include <algorithm>
std::string reverseString(const std::string &str) {
    std::string reversed = str;
    std::reverse(reversed.begin(), reversed.end());
    return reversed;
}
    `,
  },
  {
    id: 5,
    problemId: 3,
    languageId: 2,
    code: `
# Palindrome Number in Python
def is_palindrome_number(x):
    s = str(x)
    return s == s[::-1]
    `,
  },
  {
    id: 6,
    problemId: 3,
    languageId: 4,
    code: `
// Palindrome Number in Java
public boolean isPalindromeNumber(int x) {
    String s = Integer.toString(x);
    return new StringBuilder(s).reverse().toString().equals(s);
}
    `,
  },
  {
    id: 7,
    problemId: 4,
    languageId: 2,
    code: `
# Fizz Buzz in Python
def fizz_buzz(n):
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)
    `,
  },
  {
    id: 8,
    problemId: 5,
    languageId: 1,
    code: `
// Merge Two Sorted Lists in JavaScript
function mergeTwoLists(l1, l2) {
  const merged = [];
  while (l1.length && l2.length) {
    if (l1[0] < l2[0]) {
      merged.push(l1.shift());
    } else {
      merged.push(l2.shift());
    }
  }
  return [...merged, ...l1, ...l2];
}
    `,
  },
  {
    id: 9,
    problemId: 5,
    languageId: 2,
    code: `
# Merge Two Sorted Lists in Python
def merge_two_lists(l1, l2):
    merged = []
    while l1 and l2:
        if l1[0] < l2[0]:
            merged.append(l1.pop(0))
        else:
            merged.append(l2.pop(0))
    return merged + l1 + l2
    `,
  },
  {
    id: 10,
    problemId: 5,
    languageId: 4,
    code: `
// Merge Two Sorted Lists in Java
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(-1);
    ListNode current = dummy;
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 != null ? l1 : l2;
    return dummy.next;
}
    `,
  },
]
