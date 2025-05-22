import { Content } from "@/types/content";

const data: Content = {
  id: "stack",
  title: "Stack",
  description: "A linear data structure that follows the Last-In-First-Out (LIFO) principle.",
  relatedTopics: ["data structures", "LIFO", "push", "pop", "recursion"],
  explanation: [
    {
      type: "heading",
      level: 2,
      content: "Introduction",
    },
    {
      type: "paragraph",
      content:
        "A stack is a linear data structure that allows insertion (push) and deletion (pop) operations only from one end, called the top of the stack. It follows the Last-In-First-Out (LIFO) principle, meaning the last element added is the first one to be removed.",
    },
    {
      type: "image",
      src: "/stack-diagram.png",
      alt: "Stack visualization",
      caption: "Stack operations: push and pop.",
    },
  ],
  useCases: [
    {
      type: "heading",
      level: 2,
      content: "Use Cases",
    },
    {
      type: "paragraph",
      content:
        "Stacks are widely used in function call management (call stacks), undo mechanisms in editors, syntax parsing, expression evaluation, and backtracking algorithms.",
    },
  ],
  codeSnippets: [
    {
      language: "python",
      code: `class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0`,
    },
    {
      language: "cpp",
      code: `#include <stack>
#include <iostream>

int main() {
    std::stack<int> s;
    s.push(10);
    s.push(20);
    s.push(30);
    std::cout << "Top element: " << s.top() << std::endl;
    s.pop();
    std::cout << "Top after pop: " << s.top() << std::endl;
    return 0;
}`,
    },
  ],
  timeComplexity: {
    best: "O(1)",
    average: "O(1)",
    worst: "O(1)",
  },
  spaceComplexity: "O(n)",
};

export default data;
