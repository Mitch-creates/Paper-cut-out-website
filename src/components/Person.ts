export interface Person {
  name: string;
  distance: string;
  imageSrc: string;
  group: number;
  motivation: string;
  role: string;
}

export interface PersonCardProps {
  person: Person;
  isLeft: boolean; // true for left-aligned, false for right-aligned
}

export function PersonCard({ person, isLeft }: PersonCardProps): string {
  return `
    <section >
      <div>
        
      </div>
    </section>
  `;
}
