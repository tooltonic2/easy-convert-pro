
import { Unit, UnitCategory } from "@/types/converter";

// Base conversion functions
// All conversions first convert to the base unit of the category, then to the target unit

// Length conversions (base: meter)
const lengthToBase = (value: number, fromUnit: string): number => {
  switch (fromUnit) {
    case 'meter': return value;
    case 'kilometer': return value * 1000;
    case 'centimeter': return value * 0.01;
    case 'millimeter': return value * 0.001;
    case 'inch': return value * 0.0254;
    case 'foot': return value * 0.3048;
    case 'yard': return value * 0.9144;
    case 'mile': return value * 1609.344;
    default: return value;
  }
};

const baseToLength = (value: number, toUnit: string): number => {
  switch (toUnit) {
    case 'meter': return value;
    case 'kilometer': return value / 1000;
    case 'centimeter': return value / 0.01;
    case 'millimeter': return value / 0.001;
    case 'inch': return value / 0.0254;
    case 'foot': return value / 0.3048;
    case 'yard': return value / 0.9144;
    case 'mile': return value / 1609.344;
    default: return value;
  }
};

// Weight conversions (base: kilogram)
const weightToBase = (value: number, fromUnit: string): number => {
  switch (fromUnit) {
    case 'kilogram': return value;
    case 'gram': return value * 0.001;
    case 'milligram': return value * 0.000001;
    case 'pound': return value * 0.45359237;
    case 'ounce': return value * 0.0283495231;
    default: return value;
  }
};

const baseToWeight = (value: number, toUnit: string): number => {
  switch (toUnit) {
    case 'kilogram': return value;
    case 'gram': return value / 0.001;
    case 'milligram': return value / 0.000001;
    case 'pound': return value / 0.45359237;
    case 'ounce': return value / 0.0283495231;
    default: return value;
  }
};

// Temperature conversions (special case: formulas instead of simple multiplication)
const temperatureToBase = (value: number, fromUnit: string): number => {
  switch (fromUnit) {
    case 'celsius': return value;
    case 'fahrenheit': return (value - 32) * (5/9);
    case 'kelvin': return value - 273.15;
    default: return value;
  }
};

const baseToTemperature = (value: number, toUnit: string): number => {
  switch (toUnit) {
    case 'celsius': return value;
    case 'fahrenheit': return (value * (9/5)) + 32;
    case 'kelvin': return value + 273.15;
    default: return value;
  }
};

// Area conversions (base: square meter)
const areaToBase = (value: number, fromUnit: string): number => {
  switch (fromUnit) {
    case 'square_meter': return value;
    case 'square_kilometer': return value * 1000000;
    case 'square_centimeter': return value * 0.0001;
    case 'square_foot': return value * 0.092903;
    case 'acre': return value * 4046.8564224;
    case 'hectare': return value * 10000;
    default: return value;
  }
};

const baseToArea = (value: number, toUnit: string): number => {
  switch (toUnit) {
    case 'square_meter': return value;
    case 'square_kilometer': return value / 1000000;
    case 'square_centimeter': return value / 0.0001;
    case 'square_foot': return value / 0.092903;
    case 'acre': return value / 4046.8564224;
    case 'hectare': return value / 10000;
    default: return value;
  }
};

// Volume conversions (base: liter)
const volumeToBase = (value: number, fromUnit: string): number => {
  switch (fromUnit) {
    case 'liter': return value;
    case 'milliliter': return value * 0.001;
    case 'cubic_meter': return value * 1000;
    case 'gallon': return value * 3.78541;
    case 'quart': return value * 0.946353;
    case 'pint': return value * 0.473176;
    case 'cup': return value * 0.24;
    case 'fluid_ounce': return value * 0.0295735;
    default: return value;
  }
};

const baseToVolume = (value: number, toUnit: string): number => {
  switch (toUnit) {
    case 'liter': return value;
    case 'milliliter': return value / 0.001;
    case 'cubic_meter': return value / 1000;
    case 'gallon': return value / 3.78541;
    case 'quart': return value / 0.946353;
    case 'pint': return value / 0.473176;
    case 'cup': return value / 0.24;
    case 'fluid_ounce': return value / 0.0295735;
    default: return value;
  }
};

// Main conversion function
export const convertValue = (value: number, fromUnit: Unit, toUnit: Unit): number => {
  if (fromUnit.category !== toUnit.category) {
    throw new Error(`Cannot convert between different categories: ${fromUnit.category} and ${toUnit.category}`);
  }
  
  if (fromUnit.id === toUnit.id) {
    return value;
  }
  
  let baseValue: number = 0;
  let result: number = 0;
  
  switch (fromUnit.category) {
    case 'length':
      baseValue = lengthToBase(value, fromUnit.id);
      result = baseToLength(baseValue, toUnit.id);
      break;
    case 'weight':
      baseValue = weightToBase(value, fromUnit.id);
      result = baseToWeight(baseValue, toUnit.id);
      break;
    case 'temperature':
      baseValue = temperatureToBase(value, fromUnit.id);
      result = baseToTemperature(baseValue, toUnit.id);
      break;
    case 'area':
      baseValue = areaToBase(value, fromUnit.id);
      result = baseToArea(baseValue, toUnit.id);
      break;
    case 'volume':
      baseValue = volumeToBase(value, fromUnit.id);
      result = baseToVolume(baseValue, toUnit.id);
      break;
    default:
      result = value;
  }
  
  return Number(result.toFixed(8));
};

// Format the result for display with appropriate precision
export const formatResult = (value: number): string => {
  if (Math.abs(value) < 0.000001 && value !== 0) {
    return value.toExponential(6);
  }
  
  // Show more decimal places for very small numbers
  if (Math.abs(value) < 0.01 && value !== 0) {
    return value.toFixed(6);
  }
  
  // Show fewer decimal places for larger numbers
  if (Math.abs(value) >= 1000) {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  
  return value.toLocaleString(undefined, { maximumFractionDigits: 4 });
};

// Generate a UUID for our history items
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};
