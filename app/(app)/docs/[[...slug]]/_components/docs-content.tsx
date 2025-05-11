import { RichTextBlock, Language, CodeBlock } from "@/types/content"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

interface DocsProps {
  title: string
  description: string
  relatedTopics?: string[]
  explanation: RichTextBlock[]
  useCases: RichTextBlock[]
  codeSnippets: Partial<Record<Language, CodeBlock>>
  timeComplexity?: {
    best: string
    average: string
    worst: string
  }
  spaceComplexity?: string
}

export function DocsContent({ title, description, relatedTopics, explanation, useCases, codeSnippets, timeComplexity, spaceComplexity }: DocsProps) {
  const renderBlock = (block: RichTextBlock, index: number) => {
    switch (block.type) {
      case "paragraph":
        return <p key={index} className="text-balance text-base font-light text-foreground sm:text-lg">{block.content}</p>
      case "heading":
        if (block.level === 2) {
          return (
            <h2 key={index} className="mt-6 mb-2 text-2xl text-foreground border-grid border-b py-1">
              {block.content}
            </h2>
          )
        }
        if (block.level === 3) {
          return (
            <h3 key={index} className="mt-5 mb-2 text-xl text-foreground border-grid border-b py-1">
              {block.content}
            </h3>
          )
        }
        if (block.level === 4) {
          return (
            <h4 key={index} className="mt-4 mb-2 text-lg text-foreground border-grid border-b py-1">
              {block.content}
            </h4>
          )
        }
        return null
      case "image":
        return (
          <div key={index} className="my-6 flex flex-col items-center">
            <Image
              src={block.src}
              alt={block.alt || ""}
              width={800}
              height={450}
              className="rounded shadow-md max-w-full h-auto"
            />
            {block.caption && (
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {block.caption}
              </figcaption>
            )}
          </div>
        )
      default:
        return null
    }
  }
  return (
    <>
      <section>
        <div>
          <div className="container flex flex-col items-start gap-1 py-8 md:py-10 lg:py-12">
            <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:leading-[1.1]">{title}</h1>
            <p className="text-balance text-base font-light text-foreground sm:text-lg">{description}</p>
            {relatedTopics && relatedTopics.length > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {relatedTopics.map((topic) => (
                  <p className="border-accent-foreground bg-muted px-2 py-1 text-sm rounded-full" key={topic}>#{topic}</p>
                ))}
              </div>
            )}
            <div className="flex flex-col gap-4">
              {explanation.map((block, index) => renderBlock(block, index))}
            </div>
            <div className="flex flex-col gap-4">
              {useCases.map((block, index) => renderBlock(block, index))}
            </div>
            {Object.entries(codeSnippets).length > 0 && (
              <div className="w-full mt-8">
                <h2 className="text-2xl mb-4 text-foreground border-grid border-b py-1">Code Examples</h2>
                <Tabs defaultValue={Object.keys(codeSnippets)[0]} className="w-full">
                  <TabsList className="mb-4 flex-wrap">
                    {Object.entries(codeSnippets).map(([lang]) => (
                      <TabsTrigger key={lang} value={lang}>
                        {lang}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {Object.entries(codeSnippets).map(([lang, snippet]) =>
                    snippet ? (
                      <TabsContent key={lang} value={lang}>
                        <pre className="bg-muted text-sm p-4 rounded-md overflow-auto shadow-inner border border-border">
                          <code className={`language-${lang}`}>{snippet.code}</code>
                        </pre>
                      </TabsContent>
                    ) : null
                  )}
                </Tabs>
              </div>
            )}
            {(timeComplexity || spaceComplexity) && (
              <div className="w-full mt-8">
                <h2 className="text-2xl font-semibold mb-4 text-foreground border-grid border-b py-1">Complexity Analysis</h2>

                {timeComplexity && (
                  <>
                    <span className="font-semibold">Time Complexity</span>
                    <Table className="mb-6">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Case</TableHead>
                          <TableHead>Complexity</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Best</TableCell>
                          <TableCell>{timeComplexity.best}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Average</TableCell>
                          <TableCell>{timeComplexity.average}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Worst</TableCell>
                          <TableCell>{timeComplexity.worst}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </>
                )}

                {spaceComplexity && (
                  <p className="text-base font-light text-foreground">
                    <span className="font-semibold">Space Complexity:</span> {spaceComplexity}
                  </p>
                )}
              </div>
            )}
          </div>
        </div >
      </section >
    </>
  )
}