"use client"

import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface SimpleDropdownProps {
  options: string[]
  defaultText?: string
  onSelect?: (option: string) => void
  className?: string
  dropupMode?: boolean // Force dropdown to appear upwards
}

export function SimpleDropdown({ 
  options, 
  defaultText = "Select Option", 
  onSelect,
  className = "",
  dropupMode = false
}: SimpleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedText, setSelectedText] = useState(defaultText)
  const [dropdownPosition, setDropdownPosition] = useState<'up' | 'down'>('down')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Calculate dropdown position based on available space
  useEffect(() => {
    if (isOpen && buttonRef.current && !dropupMode) {
      const buttonRect = buttonRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const dropdownHeight = options.length * 40 + 8 // Approximate height
      
      const spaceBelow = viewportHeight - buttonRect.bottom
      const spaceAbove = buttonRect.top
      
      // Show dropdown upwards if there's more space above or not enough space below
      if (spaceAbove > spaceBelow && spaceBelow < dropdownHeight) {
        setDropdownPosition('up')
      } else {
        setDropdownPosition('down')
      }
    } else if (dropupMode) {
      setDropdownPosition('up')
    }
  }, [isOpen, options.length, dropupMode])

  const handleSelect = (option: string) => {
    setSelectedText(option)
    setIsOpen(false)
    onSelect?.(option)
  }

  const getDropdownClasses = () => {
    const baseClasses = "absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg z-50"
    
    if (dropdownPosition === 'up') {
      return `${baseClasses} bottom-full mb-1`
    } else {
      return `${baseClasses} top-full mt-1`
    }
  }

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[150px]"
      >
        <span>{selectedText}</span>
        <ChevronDown 
          className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={getDropdownClasses()}>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-md last:rounded-b-md"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}