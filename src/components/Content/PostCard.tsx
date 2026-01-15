import React from 'react'
import { cn } from '../../utils/cn'

export interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>(
  ({ className, ...props }, ref) => (
    <article
      ref={ref}
      className={cn('card', 'pl-card', 'pl-post-card', className)}
      {...props}
    />
  )
)
PostCard.displayName = 'PostCard'

export { PostCard }
