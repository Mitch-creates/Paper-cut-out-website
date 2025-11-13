export interface Person {
  id: string;
  name: string;
  distance: string;
  imageSrc: string;
  motivation: string;
  backgroundColor: string;
  imageLoaded?: boolean;
}
export const people: Person[] = [
  {
    id: "runner1",
    name: "Gauthier",
    distance: "40",
    imageSrc: "images/Gauthier40.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
    imageLoaded: false,
  },
  {
    id: "runner2",
    name: "Caroline",
    distance: "30",
    imageSrc: "images/Caroline30.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-lightblue",
    imageLoaded: false,
  },
  {
    id: "runner3",
    name: "Sven",
    distance: "20",
    imageSrc: "images/Sven20.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
    imageLoaded: false,
  },
  {
    id: "runner4",
    name: "Granit",
    distance: "10",
    imageSrc: "images/Granit10.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-red",
    imageLoaded: false,
  },

  {
    id: "runner5",
    name: "Vincent",
    distance: "40",
    imageSrc: "images/Vincent40.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
    imageLoaded: false,
  },
  {
    id: "runner6",
    name: "Lara",
    distance: "30",
    imageSrc: "images/Lara30.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-lightblue",
    imageLoaded: false,
  },
  {
    id: "runner7",
    name: "Annelies",
    distance: "20",
    imageSrc: "images/Annelies20.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-wine",
    imageLoaded: false,
  },
  {
    id: "runner8",
    name: "Juan",
    distance: "10",
    imageSrc: "images/Juan10.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-red",
    imageLoaded: false,
  },
];

const peopleMap: Map<string, Person> = new Map(
  people.map((person) => [person.id, person])
);

export const getPeopleById = (id: string): Person | null => {
  return peopleMap.get(id) || null;
};
