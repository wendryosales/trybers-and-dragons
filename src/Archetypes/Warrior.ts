import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _instances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;