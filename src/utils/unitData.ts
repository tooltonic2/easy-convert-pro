
import { Unit, UnitCategory } from "@/types/converter";

export const units: Unit[] = [
  // Length Units
  {
    id: 'meter',
    name: 'Meter',
    abbreviation: 'm',
    category: 'length'
  },
  {
    id: 'kilometer',
    name: 'Kilometer',
    abbreviation: 'km',
    category: 'length'
  },
  {
    id: 'centimeter',
    name: 'Centimeter',
    abbreviation: 'cm',
    category: 'length'
  },
  {
    id: 'millimeter',
    name: 'Millimeter',
    abbreviation: 'mm',
    category: 'length'
  },
  {
    id: 'inch',
    name: 'Inch',
    abbreviation: 'in',
    category: 'length'
  },
  {
    id: 'foot',
    name: 'Foot',
    abbreviation: 'ft',
    category: 'length'
  },
  {
    id: 'yard',
    name: 'Yard',
    abbreviation: 'yd',
    category: 'length'
  },
  {
    id: 'mile',
    name: 'Mile',
    abbreviation: 'mi',
    category: 'length'
  },
  
  // Weight Units
  {
    id: 'kilogram',
    name: 'Kilogram',
    abbreviation: 'kg',
    category: 'weight'
  },
  {
    id: 'gram',
    name: 'Gram',
    abbreviation: 'g',
    category: 'weight'
  },
  {
    id: 'milligram',
    name: 'Milligram',
    abbreviation: 'mg',
    category: 'weight'
  },
  {
    id: 'pound',
    name: 'Pound',
    abbreviation: 'lb',
    category: 'weight'
  },
  {
    id: 'ounce',
    name: 'Ounce',
    abbreviation: 'oz',
    category: 'weight'
  },
  
  // Temperature Units
  {
    id: 'celsius',
    name: 'Celsius',
    abbreviation: '°C',
    category: 'temperature'
  },
  {
    id: 'fahrenheit',
    name: 'Fahrenheit',
    abbreviation: '°F',
    category: 'temperature'
  },
  {
    id: 'kelvin',
    name: 'Kelvin',
    abbreviation: 'K',
    category: 'temperature'
  },
  
  // Area Units
  {
    id: 'square_meter',
    name: 'Square Meter',
    abbreviation: 'm²',
    category: 'area'
  },
  {
    id: 'square_kilometer',
    name: 'Square Kilometer',
    abbreviation: 'km²',
    category: 'area'
  },
  {
    id: 'square_centimeter',
    name: 'Square Centimeter',
    abbreviation: 'cm²',
    category: 'area'
  },
  {
    id: 'square_foot',
    name: 'Square Foot',
    abbreviation: 'ft²',
    category: 'area'
  },
  {
    id: 'acre',
    name: 'Acre',
    abbreviation: 'ac',
    category: 'area'
  },
  {
    id: 'hectare',
    name: 'Hectare',
    abbreviation: 'ha',
    category: 'area'
  },
  
  // Volume Units
  {
    id: 'liter',
    name: 'Liter',
    abbreviation: 'L',
    category: 'volume'
  },
  {
    id: 'milliliter',
    name: 'Milliliter',
    abbreviation: 'mL',
    category: 'volume'
  },
  {
    id: 'cubic_meter',
    name: 'Cubic Meter',
    abbreviation: 'm³',
    category: 'volume'
  },
  {
    id: 'gallon',
    name: 'Gallon',
    abbreviation: 'gal',
    category: 'volume'
  },
  {
    id: 'quart',
    name: 'Quart',
    abbreviation: 'qt',
    category: 'volume'
  },
  {
    id: 'pint',
    name: 'Pint',
    abbreviation: 'pt',
    category: 'volume'
  },
  {
    id: 'cup',
    name: 'Cup',
    abbreviation: 'c',
    category: 'volume'
  },
  {
    id: 'fluid_ounce',
    name: 'Fluid Ounce',
    abbreviation: 'fl oz',
    category: 'volume'
  }
];

export const unitCategories: { id: UnitCategory, name: string }[] = [
  { id: 'length', name: 'Length' },
  { id: 'weight', name: 'Weight' },
  { id: 'temperature', name: 'Temperature' },
  { id: 'area', name: 'Area' },
  { id: 'volume', name: 'Volume' }
];

export const getUnitsByCategory = (category: UnitCategory): Unit[] => {
  return units.filter(unit => unit.category === category);
};
