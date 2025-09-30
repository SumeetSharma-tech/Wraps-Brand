"use client"

import React, { useState } from 'react'
import { DropdownButton } from '@/components/ui/dropdown-button'
import { SimpleDropdown } from '@/components/ui/simple-dropdown'

export default function DropdownExamples() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [selectedSize, setSelectedSize] = useState<string>("")

  // Example data for phone wrap categories
  const categories = [
    { value: "gaming", label: "Gaming Wraps" },
    { value: "nature", label: "Nature Themes" },
    { value: "abstract", label: "Abstract Designs" },
    { value: "minimalist", label: "Minimalist" },
    { value: "vintage", label: "Vintage Style" }
  ]

  const colors = ["Red", "Blue", "Green", "Black", "White", "Purple", "Gold"]
  const sizes = ["iPhone 14", "iPhone 15", "Samsung S23", "Samsung S24", "Google Pixel 8"]

  return (
    <div className="container mx-auto p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dropdown Button Examples</h1>
        <p className="text-gray-600">Choose from different dropdown button styles and configurations</p>
      </div>

      {/* Advanced Dropdown Buttons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Dropdown Buttons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Category</label>
            <DropdownButton
              options={categories}
              placeholder="Select Category"
              onSelect={(option) => setSelectedCategory(option.value)}
              variant="outline"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Style</label>
            <DropdownButton
              options={[
                { value: "modern", label: "Modern" },
                { value: "classic", label: "Classic" },
                { value: "premium", label: "Premium" }
              ]}
              placeholder="Choose Style"
              variant="default"
              size="sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Material</label>
            <DropdownButton
              options={[
                { value: "vinyl", label: "Vinyl" },
                { value: "leather", label: "Leather" },
                { value: "carbon", label: "Carbon Fiber" }
              ]}
              defaultOption="vinyl"
              variant="secondary"
              size="lg"
            />
          </div>
        </div>

        {selectedCategory && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">Selected category: <strong>{selectedCategory}</strong></p>
          </div>
        )}
      </div>

      {/* Simple Dropdown Buttons */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Simple Dropdown Buttons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Color</label>
            <SimpleDropdown
              options={colors}
              defaultText="Choose Color"
              onSelect={setSelectedColor}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Device</label>
            <SimpleDropdown
              options={sizes}
              defaultText="Select Device"
              onSelect={setSelectedSize}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Quantity</label>
            <SimpleDropdown
              options={["1", "2", "3", "4", "5+"]}
              defaultText="Qty"
            />
          </div>
        </div>

        {(selectedColor || selectedSize) && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-blue-800">
              {selectedColor && `Color: ${selectedColor}`}
              {selectedColor && selectedSize && " | "}
              {selectedSize && `Device: ${selectedSize}`}
            </p>
          </div>
        )}
      </div>

      {/* Component Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">More Examples</h2>
     
      </div>

      {/* Usage Instructions */}
      <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold">How to Use</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Advanced Dropdown:</strong> Use <code>DropdownButton</code> for more features like variants, sizes, and object-based options.</p>
          <p><strong>Simple Dropdown:</strong> Use <code>SimpleDropdown</code> for basic functionality with string arrays.</p>
          <p><strong>Props:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><code>options</code> - Array of options (strings for simple, objects for advanced)</li>
            <li><code>onSelect</code> - Callback function when option is selected</li>
            <li><code>defaultOption/defaultText</code> - Initial selected value or placeholder</li>
            <li><code>variant</code> - Button style (default, outline, secondary, ghost)</li>
            <li><code>size</code> - Button size (sm, default, lg)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}