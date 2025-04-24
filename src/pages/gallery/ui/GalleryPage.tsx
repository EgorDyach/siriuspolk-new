import ErrorBoundary from '@shared/ui/ErrorBoundary';
import { requestPhotos } from '../api/photos';
import GalleryList from '@widgets/galleryList/ui/GalleryList';

export default async function GalleryPage() {
  try {
    const details = (await requestPhotos()) || [];

    return (
      <section className="py-[60px] sm:py-20">
        <div className="container">
          <h1 className="text-[40px] font-lora mb-[32px] sm:text-5xl">
            Галерея
          </h1>
          <GalleryList photos={details} />
        </div>
      </section>
    );
  } catch (e) {
    <ErrorBoundary error={e} />;
  }
}
