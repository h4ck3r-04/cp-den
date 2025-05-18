export type Language = "cpp" | "c" | "python" | "java" | "rust";

export type RichTextBlock =
  | {
    type: "paragraph";
    content: string;
  }
  | {
    type: "heading";
    level: 2 | 3 | 4;
    content: string;
  }
  | {
    type: "image";
    src: string;
    alt?: string;
    caption?: string;
  };

export type CodeBlock = {
  code: string;
  language: Language;
};

export interface Content {
  id: string;
  title: string;
  description: string;
  relatedTopics?: string[];
  explanation: RichTextBlock[];
  useCases: RichTextBlock[];
  codeSnippets: CodeBlock[];
  timeComplexity?: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity?: string;
}