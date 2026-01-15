import React from 'react'
import { cn } from '../../utils/cn'

export interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn('pl-blockquote', className)}
      {...props}
    />
  )
)
Blockquote.displayName = 'Blockquote'

export { Blockquote }

