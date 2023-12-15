'use client'
import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import * as RadioGroup from '@radix-ui/react-radio-group';

type ExerciseFilterProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

function ExerciseFilter({ selectedCategory, setSelectedCategory }: ExerciseFilterProps) {
  const [categories, setCategories] = useState([
    'cardio',
    'olympic weightlifting',
    'stretching',
    'strength',
    'powerlifting',
    'strongman',
    'plyometrics'
  ]);

  const handleCategoryChange = (newCategory: string) => {
    console.log("Category changed to:", newCategory);
    setSelectedCategory(newCategory);
  };

  return (
    <RadioGroup.Root defaultValue={selectedCategory} onValueChange={handleCategoryChange} aria-label="Exercise Categories">
      {categories.map((category, index) => (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroup.Item value={category} id={category}>
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label htmlFor={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</Label>
        </div>
      ))}
    </RadioGroup.Root>
  );
}

export default ExerciseFilter;
