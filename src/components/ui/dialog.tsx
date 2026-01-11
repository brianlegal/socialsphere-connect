import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Overlay&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Overlay&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  /&gt;
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Content&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Content&gt;
&gt;(({ className, children, ...props }, ref) =&gt; (
  &lt;DialogPortal&gt;
    &lt;DialogOverlay /&gt;
    &lt;DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    &gt;
      {children}
      &lt;DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"&gt;
        &lt;X className="h-4 w-4" /&gt;
        &lt;span className="sr-only"&gt;Close&lt;/span&gt;
      &lt;/DialogPrimitive.Close&gt;
    &lt;/DialogPrimitive.Content&gt;
  &lt;/DialogPortal&gt;
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) =&gt; (
  &lt;div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  /&gt;
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes&lt;HTMLDivElement&gt;) =&gt; (
  &lt;div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  /&gt;
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Title&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Title&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  /&gt;
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef&lt;
  React.ElementRef&lt;typeof DialogPrimitive.Description&gt;,
  React.ComponentPropsWithoutRef&lt;typeof DialogPrimitive.Description&gt;
&gt;(({ className, ...props }, ref) =&gt; (
  &lt;DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  /&gt;
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}