import React from 'react'
import { cn } from '../../utils/cn'

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, ...props }, ref) => {
    const Tag = `h${level}` as const
    return (
      <Tag
        ref={ref}
        className={cn('pl-heading', `pl-heading-${level}`, className)}
        {...props}
      />
    )
  }
)
Heading.displayName = 'Heading'

export { Heading }

