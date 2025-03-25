import { requestPhotos } from '../api/photos';
import GalleryList from '@widgets/galleryList/ui/GalleryList';

export default async function GalleryPage() {
  const { details } = await requestPhotos();
  return (
    <section className="py-[60px]">
      <div className="container">
        <h1 className="text-[40px] font-lora mb-[32px]">Галерея</h1>
        <GalleryList photos={details} />
      </div>
    </section>
  );
}
