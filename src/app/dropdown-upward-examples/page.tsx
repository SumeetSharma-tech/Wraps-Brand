"use client"

import React, { useState } from 'react'
import { DropdownButton } from '@/components/ui/dropdown-button-upward'
import { SimpleDropdown } from '@/components/ui/simple-dropdown'

export default function DropdownUpwardExamples() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")

  // Example data for phone wrap categories
  const categories = [
    { value: "gaming", label: "Gaming Wraps" },
    { value: "nature", label: "Nature Themes" },
    { value: "abstract", label: "Abstract Designs" },
    { value: "minimalist", label: "Minimalist" },
    { value: "vintage", label: "Vintage Style" }
  ]

  const colors = ["Red", "Blue", "Green", "Black", "White", "Purple", "Gold"]

  return (
    <div className="container mx-auto p-8 space-y-8 min-h-screen">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Dropdown Button - Upward Examples</h1>
        <p className="text-gray-600">Dropdown buttons that can appear upwards or downwards based on available space</p>
      </div>

      {/* Auto-positioning Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Auto-positioning (Smart Direction)</h2>
        <p className="text-sm text-gray-600">
          These dropdowns automatically detect available space and position themselves upward or downward accordingly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Category (Auto)</label>
            <DropdownButton
              options={categories}
              placeholder="Select Category"
              onSelect={(option) => setSelectedCategory(option.value)}
              variant="outline"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Style (Auto)</label>
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
            <label className="block text-sm font-medium">Simple Auto</label>
            <SimpleDropdown
              options={colors}
              defaultText="Choose Color"
              onSelect={setSelectedColor}
            />
          </div>
        </div>
      </div>

      {/* Force Upward Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Force Upward Direction</h2>
        <p className="text-sm text-gray-600">
          These dropdowns are forced to always appear upward using the <code>dropupMode</code> prop.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Always Up - Outline</label>
            <DropdownButton
              options={categories}
              placeholder="Select Category"
              variant="outline"
              dropupMode={true}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Always Up - Default</label>
            <DropdownButton
              options={[
                { value: "s", label: "Small" },
                { value: "m", label: "Medium" },
                { value: "l", label: "Large" },
                { value: "xl", label: "Extra Large" }
              ]}
              placeholder="Choose Size"
              variant="default"
              dropupMode={true}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Simple Always Up</label>
            <SimpleDropdown
              options={["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]}
              defaultText="Force Upward"
              dropupMode={true}
            />
          </div>
        </div>
      </div>

      {/* Different Variants */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Different Variants with Upward Direction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <DropdownButton
            options={categories}
            placeholder="Outline Upward"
            variant="outline"
            dropupMode={true}
          />
          
          <DropdownButton
            options={categories}
            placeholder="Default Upward"
            variant="default"
            dropupMode={true}
          />
          
          <DropdownButton
            options={categories}
            placeholder="Secondary Upward"
            variant="secondary"
            dropupMode={true}
          />
          
          <DropdownButton
            options={categories}
            placeholder="Ghost Upward"
            variant="ghost"
            dropupMode={true}
          />
        </div>
      </div>

      {/* Bottom section to test auto-positioning */}
      <div className="pt-32 space-y-6">
        <h2 className="text-2xl font-semibold">Test Auto-positioning at Bottom</h2>
        <p className="text-sm text-gray-600">
          These dropdowns should automatically appear upward since they&apos;re near the bottom of the viewport.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Should Go Up</label>
            <DropdownButton
              options={categories}
              placeholder="Auto Direction"
              variant="outline"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Should Go Up</label>
            <SimpleDropdown
              options={colors}
              defaultText="Auto Direction"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Forced Down</label>
            <DropdownButton
              options={categories}
              placeholder="Forced Downward"
              variant="secondary"
              dropupMode={false}
            />
          </div>
        </div>

        {(selectedCategory || selectedColor) && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
            <p className="text-green-800">
              {selectedCategory && `Category: ${selectedCategory}`}
              {selectedCategory && selectedColor && " | "}
              {selectedColor && `Color: ${selectedColor}`}
            </p>
          </div>
        )}
      </div>

      {/* Usage Instructions */}
      <div className="space-y-4 p-6 bg-gray-50 rounded-lg mt-16">
        <h3 className="text-lg font-semibold">How to Control Dropdown Direction</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Auto-positioning (Default):</strong> Don&apos;t set <code>dropupMode</code> - the dropdown will automatically choose the best direction based on available space.</p>
          <p><strong>Force Upward:</strong> Set <code>dropupMode={`{true}`}</code> to always show the dropdown above the button.</p>
          <p><strong>Force Downward:</strong> Set <code>dropupMode={`{false}`}</code> to always show the dropdown below the button.</p>
          
          <div className="mt-4">
            <p><strong>Example Usage:</strong></p>
            <pre className="bg-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
{`<DropdownButton
  options={options}
  placeholder="Select option"
  dropupMode={true}  // Always show upward
  variant="outline"
/>`}
            </pre>
          </div>
        </div>
      </div>

      <div className="h-32"></div> {/* Extra space for testing */}
    </div>
  )
}