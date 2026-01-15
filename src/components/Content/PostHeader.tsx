import React from 'react'
import { cn } from '../../utils/cn'

export interface PostHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const PostHeader = React.forwardRef<HTMLDivElement, PostHeaderProps>(
  ({ className, ...props }, ref) => (
    <header ref={ref} className={cn('pl-post-header', className)} {...props} />
  )
)
PostHeader.displayName = 'PostHeader'

export { PostHeader }
