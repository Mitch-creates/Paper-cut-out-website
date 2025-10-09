export interface Person {
  name: string;
  distance: string;
  imageSrc: string;
  motivation: string;
  backgroundColor: string;
}
export const people: Person[] = [
  // Group 1 - The Adventurers
  {
    name: "Sarah Chen",
    distance: "10 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "I joined this adventure because I believe that stepping out of our comfort zones leads to the most meaningful discoveries. Every journey teaches us something new about ourselves and the world around us.",
    backgroundColor: "t-pink",
  },
  {
    name: "Marcus Rodriguez",
    distance: "20 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "For me, it's all about the connections we make along the way. Travel isn't just about places - it's about the people you meet and the stories you collect together.",
    backgroundColor: "t-pink",
  },
  {
    name: "Emma Thompson",
    distance: "30 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "I'm passionate about sustainable travel and showing that we can explore the world responsibly. Every step we take should leave a positive impact on the communities we visit.",
    backgroundColor: "t-pink",
  },
  {
    name: "David Kim",
    distance: "40 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "Photography has always been my way of capturing moments that words can't describe. This journey gives me the chance to document not just beautiful places, but genuine human experiences.",
    backgroundColor: "t-pink",
  },

  {
    name: "Luna Andersson",
    distance: "10 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "Technology should bring people together, not drive them apart. I'm here to explore how digital innovation can create more meaningful human connections across cultures.",
    backgroundColor: "t-pink",
  },
  {
    name: "Aiden O'Connor",
    distance: "20 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "Design thinking isn't just about making things look good - it's about solving real problems for real people. This experience helps me understand diverse perspectives and needs.",
    backgroundColor: "t-pink",
  },
  {
    name: "Zara Okafor",
    distance: "30 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "Every great innovation starts with asking 'what if?' I'm excited to discover new approaches to old challenges and bring fresh ideas back to our communities.",
    backgroundColor: "t-pink",
  },
  {
    name: "Theo Müller",
    distance: "40 km",
    imageSrc: "/images/Dummy_Person.jpg",
    motivation:
      "Building things that matter requires understanding the people who will use them. This journey gives me insights that no textbook or classroom ever could.",
    backgroundColor: "t-pink",
  },
];

export const getPeopleById = (id: number): Person | null => {
  return people[id] || null;
};
