import React from 'react'
import { cn } from '../../utils/cn'

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  withContainer?: boolean
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, withContainer = true, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn('pl-navbar', className)}
      {...props}
    >
      {withContainer ? (
        <div className="pl-container pl-navbar-inner">
          {children}
        </div>
      ) : (
        <div className="pl-navbar-inner">{children}</div>
      )}
    </nav>
  )
)
Navbar.displayName = 'Navbar'

export { Navbar }

