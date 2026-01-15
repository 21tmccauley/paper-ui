import React from 'react'
import { cn } from '../../utils/cn'

export interface PostMetaProps extends React.HTMLAttributes<HTMLDivElement> {}

const PostMeta = React.forwardRef<HTMLDivElement, PostMetaProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pl-post-meta', className)} {...props} />
  )
)
PostMeta.displayName = 'PostMeta'

export { PostMeta }
