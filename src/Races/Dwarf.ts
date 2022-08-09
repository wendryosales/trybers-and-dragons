import Race from './Race';

class Dwarf extends Race {
  public _maxLifePoints: number;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
    this._maxLifePoints = 80;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;
