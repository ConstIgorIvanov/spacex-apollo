import { Capsule } from './capsules';
import { Dragon } from './dragons';
import { Mission } from './missions';

export enum Explorer {
  missions = 'missions',
  dragons = 'dragons',
  capsules = 'capsules',
}

export type Item = Capsule | Dragon | Mission;
