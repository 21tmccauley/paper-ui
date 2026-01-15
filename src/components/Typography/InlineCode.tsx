import React from 'react'
import { cn } from '../../utils/cn'

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {}

const InlineCode = React.forwardRef<HTMLElement, InlineCodeProps>(
  ({ className, ...props }, ref) => (
    <code
      ref={ref}
      className={cn('pl-inline-code', className)}
      {...props}
    />
  )
)
InlineCode.displayName = 'InlineCode'

export { InlineCode }

