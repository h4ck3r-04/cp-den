import "@/styles/mdx.css"
import { DocsContent } from "./_components/docs-content"

const sampleData = {
  title: "Binary Search",
  description: "Binary Search is an efficient algorithm for finding an item from a sorted list of items.",
  relatedTopics: ["algorithms", "search", "divide and conquer"],
  explanation: [
    {
      type: "heading",
      level: 2,
      content: "What is Binary Search?"
    },
    {
      type: "paragraph",
      content: "Binary search works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed the possible locations to just one."
    },
    {
      type: "image",
      src: "/background.png",
      alt: "Binary search illustration",
      caption: "Illustration of binary search on a sorted array."
    },
    {
      type: "heading",
      level: 3,
      content: "Why use Binary Search?"
    },
    {
      type: "paragraph",
      content: "Binary search is much faster than linear search for large lists, reducing the time complexity from O(n) to O(log n)."
    }
  ],
  useCases: [
    {
      type: "heading",
      level: 2,
      content: "Use Cases"
    },
    {
      type: "paragraph",
      content: "Used in databases, libraries, and system-level operations where fast lookups in sorted data are necessary."
    }
  ],
  codeSnippets: {
    javascript: {
      language: "javascript",
      code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`
    },
    python: {
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
    return -1`
    }
  },
  timeComplexity: {
    best: "O(1)",
    average: "O(log n)",
    worst: "O(log n)"
  },
  spaceComplexity: "O(1)"
}


export default async function DocPage() {
  return (
    <>
      <DocsContent {...sampleData} />
    </>
  )
}