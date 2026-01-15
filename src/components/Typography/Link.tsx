import React from 'react'
import { cn } from '../../utils/cn'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('pl-link', className)}
      {...props}
    />
  )
)
Link.displayName = 'Link'

export { Link }

