export interface Person {
  id: string;
  name: string;
  distance: string;
  imageSrc: string;
  motivation: string;
  backgroundColor: string;
}
export const people: Person[] = [
  {
    id: "runner1",
    name: "Granit",
    distance: "10 km",
    imageSrc: "images/granit10.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner2",
    name: "Sven",
    distance: "20 km",
    imageSrc: "images/Sven20.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
  },
  {
    id: "runner3",
    name: "Caroline",
    distance: "30 km",
    imageSrc: "images/Caroline30.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
  },
  {
    id: "runner4",
    name: "Gauthier",
    distance: "40 km",
    imageSrc: "images/Gauthier40.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-red",
  },

  {
    id: "runner5",
    name: "Juan",
    distance: "10 km",
    imageSrc: "images/Juan10.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner6",
    name: "Annelies",
    distance: "20 km",
    imageSrc: "images/Annelies20.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
  },
  {
    id: "runner7",
    name: "Lara",
    distance: "30 km",
    imageSrc: "images/Lara30.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
  },
  {
    id: "runner8",
    name: "Vincent",
    distance: "40 km",
    imageSrc: "images/Vincent40.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-red",
  },
];

const peopleMap: Map<string, Person> = new Map(
  people.map((person) => [person.id, person])
);

export const getPeopleById = (id: string): Person | null => {
  return peopleMap.get(id) || null;
};
