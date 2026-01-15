import React from 'react'
import { cn } from '../../utils/cn'

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {}

const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(
  ({ className, children, ...props }, ref) => (
    <pre
      ref={ref}
      className={cn('pl-code-block', className)}
      {...props}
    >
      <code>{children}</code>
    </pre>
  )
)
CodeBlock.displayName = 'CodeBlock'

export { CodeBlock }

