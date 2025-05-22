import { Content } from "@/types/content";

const data: Content = {
  id: "bubble-sort",
  title: "Bubble Sort",
  description:
    "A simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order.",
  relatedTopics: ["sorting algorithms", "comparison sort", "brute force"],
  explanation: [
    {
      type: "heading",
      level: 2,
      content: "Introduction",
    },
    {
      type: "paragraph",
      content:
        "Bubble sort is a basic sorting algorithm that works by repeatedly stepping through the list, comparing adjacent pairs of elements, and swapping them if they are in the wrong order. This process continues until the list is sorted.",
    },
    {
      type: "image",
      src: "/bubble-sort.png",
      alt: "Bubble sort visualization",
      caption: "Animation of Bubble Sort comparing and swapping elements.",
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
        "Although inefficient for large datasets, bubble sort is useful in educational settings to illustrate sorting concepts. It's also suitable for small or nearly sorted datasets where simplicity is preferred over performance.",
    },
  ],
  codeSnippets: [
    {
      language: "python",
      code: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]`,
    },
    {
      language: "cpp",
      code: `#include <vector>
void bubbleSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,
    },
  ],
  timeComplexity: {
    best: "O(n)",
    average: "O(n²)",
    worst: "O(n²)",
  },
  spaceComplexity: "O(1)",
};

export default data;
