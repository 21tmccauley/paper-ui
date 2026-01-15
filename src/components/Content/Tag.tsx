import React from 'react'
import { cn } from '../../utils/cn'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={cn('pl-tag', className)} {...props} />
  )
)
Tag.displayName = 'Tag'

export { Tag }
