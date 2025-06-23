import BookImage from '@/components/BookImage';
import IMAGES from '@/uploads';


export default function Home() {
  return (
    <div>
      <BookImage
        imagePath={IMAGES.soloLeveling}
        alt="Solo Leveling image" 
      />
    </div>
  );
}
