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
    name: "Annelies",
    distance: "10 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner2",
    name: "Annelies",
    distance: "10 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner3",
    name: "Annelies",
    distance: "20 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner4",
    name: "Annelies",
    distance: "20 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },

  {
    id: "runner5",
    name: "Annelies",
    distance: "30 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner6",
    name: "Annelies",
    distance: "30 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner7",
    name: "Annelies",
    distance: "40 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
  {
    id: "runner8",
    name: "Annelies",
    distance: "40 km",
    imageSrc: "images/granit.png",
    motivation:
      "Ik loop heel graag, ik heb speciaal voor deze loop nieuwe loopschoenen aangeschaft, let's get it on!",
    backgroundColor: "t-pink",
  },
];

export const getPeopleById = (id: string): Person | null => {
  return people.find((person) => person.id === id) || null;
};
