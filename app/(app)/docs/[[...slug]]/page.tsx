import { Content } from "@/types/content";
import { DocsContent } from "./_components/docs-content";

const sampleData: Content = {
  id: "binary-search",
  title: "Binary Search",
  description:
    "A logarithmic-time algorithm for finding an element in a sorted array.",
  relatedTopics: ["search algorithms", "divide and conquer", "sorted arrays"],
  explanation: [
    {
      type: "heading",
      level: 2,
      content: "Introduction",
    },
    {
      type: "paragraph",
      content:
        "Binary search is an efficient algorithm for finding a target value within a sorted array. It works by repeatedly dividing the search interval in half.",
    },
    {
      type: "image",
      src: "/background.png",
      alt: "Binary search visualization",
      caption: "Illustration of binary search dividing the array.",
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
        "Binary search is used in databases for indexed searches, in libraries for fast lookups, and in applications requiring efficient searching in sorted data.",
    },
  ],
  codeSnippets: [
    {
      language: "python",
      code: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`,
    },
    {
      language: "cpp",
      code: `#include <vector>
int binarySearch(std::vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
    },
  ],
  timeComplexity: {
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)",
  },
  spaceComplexity: "O(1)",
};

export default async function DocPage() {
  return (
    <>
      <DocsContent {...sampleData} />
    </>
  );
}