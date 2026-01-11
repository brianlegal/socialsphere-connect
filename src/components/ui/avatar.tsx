import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Root&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Root&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  /&gt;
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Image&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Image&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  /&gt;
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef&lt;
  React.ElementRef&lt;typeof AvatarPrimitive.Fallback&gt;,
  React.ComponentPropsWithoutRef&lt;typeof AvatarPrimitive.Fallback&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  /&gt;
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }