import React from 'react'
import { cn } from '../../utils/cn'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items?: BreadcrumbItem[]
}

const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, items, children, ...props }, ref) => (
    <nav
      ref={ref}
      className={className}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="pl-breadcrumbs">
        {items
          ? items.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                {item.href ? (
                  <a className="pl-link" href={item.href}>
                    {item.label}
                  </a>
                ) : (
                  <span>{item.label}</span>
                )}
                {index < items.length - 1 && (
                  <span className="pl-breadcrumbs-sep">/</span>
                )}
              </li>
            ))
          : children}
      </ol>
    </nav>
  )
)
Breadcrumbs.displayName = 'Breadcrumbs'

export interface BreadcrumbsItemProps
  extends React.HTMLAttributes<HTMLLIElement> {}

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn(className)} {...props} />
  )
)
BreadcrumbsItem.displayName = 'BreadcrumbsItem'

export { Breadcrumbs, BreadcrumbsItem }

