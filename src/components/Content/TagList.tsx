import React from 'react'
import { cn } from '../../utils/cn'

export interface TagListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TagList = React.forwardRef<HTMLDivElement, TagListProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pl-tag-list', className)} {...props} />
  )
)
TagList.displayName = 'TagList'

export { TagList }
