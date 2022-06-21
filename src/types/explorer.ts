export enum Explorer {
  missions = 'missions',
  dragons = 'dragons',
  capsules = 'capsules',
}
export type Mission = {
  id: string;
  name: string;
  description: string;
  website: string;
  wikipedia: string;
};
export type Dragon = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  type: string;
  wikipedia: string;
};
export type Capsule = {
  id: string;
  status: string;
  type: string;
  dragon: {
    id: string;
    name: string;
  };
};

export type Item = Capsule | Dragon | Mission;
