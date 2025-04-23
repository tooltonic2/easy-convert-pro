
export type UnitCategory = 
  | 'length' 
  | 'weight' 
  | 'temperature' 
  | 'area' 
  | 'volume';

export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
  category: UnitCategory;
}

export interface ConversionRecord {
  id: string;
  fromValue: number;
  fromUnit: Unit;
  toUnit: Unit;
  toValue: number;
  timestamp: Date;
}
