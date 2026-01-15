import React from 'react'
import { cn } from '../../utils/cn'

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <img ref={ref} className={cn('pl-avatar', className)} {...props} />
  )
)
Avatar.displayName = 'Avatar'

export { Avatar }
