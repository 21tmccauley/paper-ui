import React from 'react'
import { cn } from '../../utils/cn'

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={className}
      aria-label="Pagination"
      {...props}
    >
      <ul className="pl-pagination">{children}</ul>
    </nav>
  )
)
Pagination.displayName = 'Pagination'

export interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {}

const PaginationItem = React.forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn(className)} {...props} />
  )
)
PaginationItem.displayName = 'PaginationItem'

export interface PaginationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const PaginationLink = React.forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, active = false, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('pl-link', active && 'pl-nav-active', className)}
      {...props}
    />
  )
)
PaginationLink.displayName = 'PaginationLink'

export { Pagination, PaginationItem, PaginationLink }

