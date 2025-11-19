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
      "Ik loop niet alleen voor de sport maar voor iedereen die vecht of gemist wordt. Dit goede doel ligt me nauw aan het hart.",
    backgroundColor: "t-lightblue",
    imageLoaded: false,
  },
  {
    id: "runner3",
    name: "Sven",
    distance: "20",
    imageSrc: "images/Sven20.png",
    motivation: "Annelies heeft mij gedwongen om mee te doen.",
    backgroundColor: "t-wine",
    imageLoaded: false,
  },
  {
    id: "runner4",
    name: "Lara",
    distance: "10",
    imageSrc: "images/Lara10.png",
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
    motivation: "Ik hou van lopen, het maakt mijn hoofd leeg",
    backgroundColor: "t-pink",
    imageLoaded: false,
  },
  {
    id: "runner6",
    name: "Granit",
    distance: "30",
    imageSrc: "images/Granit30.png",
    motivation:
      "elke donatie, hoe klein ook, is een enorme motivatie voor mij tijdens de tocht en een directe bijdrage aan een kankervrije(re) toekomst voor iedereen. « samen trappen we kanker de wereld uit, stap voor stap »",
    backgroundColor: "t-lightblue",
    imageLoaded: false,
  },
  {
    id: "runner7",
    name: "Annelies",
    distance: "20",
    imageSrc: "images/Annelies20.png",
    motivation:
      "Lopen voor een goed doel zoals KOTK maakt van deze run een heel andere beleving dan zomaar een halve marathon!",
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
