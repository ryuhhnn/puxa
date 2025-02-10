export enum Difficulty {
  BEGINNER = "BEGINNER",
  BASIC = "BASIC",
  INTERMEDIATE = "INTERMEDIATE",
  NATIVE = "NATIVE",
}

export interface DictionaryEntry {
  word: string;
  frequency: number;
}
