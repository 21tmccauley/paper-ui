import React from 'react'
import { cn } from '../../utils/cn'

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn('pl-image', className)} {...props} />
  )
)
Image.displayName = 'Image'

export { Image }
