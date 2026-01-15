import React from 'react'
import { cn } from '../../utils/cn'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('pl-section', className)}
      {...props}
    />
  )
)
Section.displayName = 'Section'

export { Section }

