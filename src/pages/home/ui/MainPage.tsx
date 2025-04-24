import Gallery from '@widgets/gallery/ui/Gallery';
import { Hero } from '@widgets/hero/ui/Hero';
import { requestPersons } from '../api/persons';
import { Persons } from '@widgets/persons/ui/Persons';
import { Steps } from '@widgets/steps/ui/Steps';
import ErrorBoundary from '@shared/ui/ErrorBoundary';

export default async function MainPage() {
  try {
    const persons = await requestPersons();
    return (
      <>
        <Hero persons={persons} />
        <Gallery />
        {!!persons.length && <Persons persons={persons} />}
        <Steps />
      </>
    );
  } catch (e) {
    <ErrorBoundary error={e} />;
  }
}
