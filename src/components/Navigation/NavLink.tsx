import React from 'react'
import { cn } from '../../utils/cn'

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active = false, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('pl-link', active && 'pl-nav-active', className)}
      {...props}
    />
  )
)
NavLink.displayName = 'NavLink'

export { NavLink }

