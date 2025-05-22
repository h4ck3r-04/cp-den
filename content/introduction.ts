import { Content } from "@/types/content";

const data: Content = {
  id: "algorithms",
  title: "Welcome to CP-DEN",
  description:
    "Explore fundamental and advanced algorithms with CP-Den — your trusted resource for learning and referencing Data Structures and Algorithms.",
  relatedTopics: ["data structures", "search", "sort", "greedy", "dynamic programming", "graph algorithms"],
  explanation: [
    {
      type: "heading",
      level: 2,
      content: "Welcome to CP-Den's Algorithm Hub",
    },
    {
      type: "paragraph",
      content:
        "CP-Den is a dedicated platform for developers and students to learn, revise, and reference Data Structures and Algorithms (DSA). Whether you're preparing for coding interviews, competitive programming, or academic exams — you're in the right place.",
    },
    {
      type: "paragraph",
      content:
        "In this section, you'll find step-by-step explanations, real-world use cases, and code examples in multiple programming languages. Each algorithm is structured to be easily understood, even for beginners, while still providing depth for advanced users.",
    },
    {
      type: "heading",
      level: 2,
      content: "What Are Algorithms?",
    },
    {
      type: "paragraph",
      content:
        "An algorithm is a well-defined set of instructions to perform a specific task or solve a problem. Algorithms are the backbone of all computer programs, enabling software to handle everything from simple calculations to complex decision-making.",
    },
    {
      type: "heading",
      level: 2,
      content: "How to Use This Section",
    },
    {
      type: "paragraph",
      content:
        "Each algorithm page includes a clear explanation, use cases, time and space complexity analysis, and code snippets in languages like C++, Python, Java, and more. Browse the topics or search directly to jump into a specific algorithm like Binary Search, Merge Sort, or Dijkstra’s Algorithm.",
    },
    {
      type: "image",
      src: "/algo-intro.png",
      alt: "Overview of CP-Den Algorithms",
      caption: "A visual guide to how algorithms are categorized and presented in CP-Den.",
    },
  ],
  useCases: [
    {
      type: "heading",
      level: 2,
      content: "Why Learn Algorithms?",
    },
    {
      type: "paragraph",
      content:
        "Algorithms improve your problem-solving ability, enhance your coding skills, and prepare you for competitive exams and technical interviews. They’re essential in building efficient software and understanding how things work under the hood.",
    },
    {
      type: "heading",
      level: 2,
      content: "Where Algorithms Are Used",
    },
    {
      type: "paragraph",
      content:
        "From search engines and recommendation systems to banking software and game development — algorithms are everywhere. Mastering them gives you a huge edge in any tech-related career.",
    },
  ],
  codeSnippets: [],
  timeComplexity: {
    best: "-",
    average: "-",
    worst: "-",
  },
  spaceComplexity: "-",
};

export default data;
