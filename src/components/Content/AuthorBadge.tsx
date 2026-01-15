import React from 'react'
import { cn } from '../../utils/cn'

export interface AuthorBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthorBadge = React.forwardRef<HTMLDivElement, AuthorBadgeProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pl-author-badge', className)} {...props} />
  )
)
AuthorBadge.displayName = 'AuthorBadge'

export { AuthorBadge }
