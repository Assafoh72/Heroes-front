export interface Hero {
  name: string;
  ability: 'attacker' | 'defender';
  id: string;
  startDate: Date;
  suitColors: string[];
  startingPower: number;
  currentPower: number;
  addedToMyHeroes: boolean;
}
