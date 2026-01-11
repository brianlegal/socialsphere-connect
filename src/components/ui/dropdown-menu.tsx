import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuSubTrigger = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.SubTrigger&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.SubTrigger&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, children, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  &gt;
    {children}
    &lt;ChevronRight className="ml-auto h-4 w-4" /&gt;
  &lt;/DropdownMenuPrimitive.SubTrigger&gt;
))
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.SubContent&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.SubContent&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=prefix=bottom]:slide-in-from-top-2 data-[state=prefix=left]:slide-in-from-right-2 data-[state=prefix=right]:slide-in-from-left-2 data-[state=prefix=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName

const DropdownMenuContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Content&gt;
&gt;(({ className, sideOffset = 4, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.Portal&gt;
    &lt;DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=prefix=bottom]:slide-in-from-top-2 data-[state=prefix=left]:slide-in-from-right-2 data-[state=prefix=right]:slide-in-from-left-2 data-[state=prefix=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    /&gt;
  &lt;/DropdownMenuPrimitive.Portal&gt;
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Item&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Item&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.CheckboxItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.CheckboxItem&gt;
&gt;(({ className, children, checked, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;DropdownMenuPrimitive.ItemIndicator&gt;
        &lt;Check className="h-4 w-4" /&gt;
      &lt;/DropdownMenuPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/DropdownMenuPrimitive.CheckboxItem&gt;
))
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.RadioItem&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.RadioItem&gt;
&gt;(({ className, children, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  &gt;
    &lt;span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"&gt;
      &lt;DropdownMenuPrimitive.ItemIndicator&gt;
        &lt;Circle className="h-2 w-2 fill-current" /&gt;
      &lt;/DropdownMenuPrimitive.ItemIndicator&gt;
    &lt;/span&gt;
    {children}
  &lt;/DropdownMenuPrimitive.RadioItem&gt;
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Label&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Label&gt; &amp; {
    inset?: boolean
  }
&gt;(({ className, inset, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset &amp;&amp; "pl-8",
      className
    )}
    {...props}
  /&gt;
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef&lt;
  React.ElementRef&lt;typeof DropdownMenuPrimitive.Separator&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DropdownMenuPrimitive.Separator&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  /&gt;
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLSpanElement&gt;) =&gt; {
  return (
    &lt;span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    /&gt;
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}