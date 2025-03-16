import Gallery from '@widgets/gallery/ui/Gallery';
import { Hero } from '@widgets/hero/ui/Hero';
import { requestPersons } from '../api/persons';
import { Persons } from '@widgets/persons/ui/Persons';

export default async function MainPage() {
  const { details } = await requestPersons();
  return (
    <>
      <Hero persons={details} />
      <Gallery />
      <Persons persons={details} />
    </>
  );
}
