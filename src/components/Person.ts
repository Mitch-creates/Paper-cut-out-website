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
}

export function PersonCard({ person }: PersonCardProps): string {
  return `
    <section >
      <div>
        
      </div>
    </section>
  `;
}
