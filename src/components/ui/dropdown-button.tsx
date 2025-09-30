"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DropdownOption {
  value: string
  label: string
}

interface DropdownButtonProps {
  options: DropdownOption[]
  defaultOption?: string
  placeholder?: string
  onSelect?: (option: DropdownOption) => void
  className?: string
  buttonClassName?: string
  dropdownClassName?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
}

export function DropdownButton({
  options,
  defaultOption,
  placeholder = "Select an option",
  onSelect,
  className,
  buttonClassName,
  dropdownClassName,
  variant = 'outline',
  size = 'default'
}: DropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    defaultOption ? options.find(opt => opt.value === defaultOption) || null : null
  )
  const [dropdownPosition, setDropdownPosition] = useState<'up' | 'down'>('down')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const dropdownHeight = options.length * 40 + 16

      const spaceBelow = viewportHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top

      if (spaceAbove > spaceBelow && spaceBelow < dropdownHeight) {
        setDropdownPosition('up')
      } else {
        setDropdownPosition('down')
      }
    }
  }, [isOpen, options.length])

  const handleOptionSelect = (option: DropdownOption) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect?.(option)
  }

  const getButtonVariantClasses = () => {
    const baseClasses = "inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50"

    const variantClasses = {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50"
    }

    const sizeClasses = {
      sm: "h-8 px-3 text-xs",
      default: "h-9 px-4 py-2",
      lg: "h-10 px-6"
    }

    return cn(baseClasses, variantClasses[variant], sizeClasses[size])
  }

  return (
    <div className={cn("relative inline-block text-left", className)} ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        className={cn(getButtonVariantClasses(), "w-full min-w-[150px]", buttonClassName)}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 mt-1 w-full min-w-[150px] rounded-md border bg-popover p-1 shadow-md z-50",
            "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2",
            dropdownClassName
          )}
          role="listbox"
          data-side={dropdownPosition}
        >
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                "transition-colors duration-150",
                selectedOption?.value === option.value && "bg-accent text-accent-foreground"
              )}
              onClick={() => handleOptionSelect(option)}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
