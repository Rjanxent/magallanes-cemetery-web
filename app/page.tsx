import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* Container to control the image width */}
      <div className="w-full max-w-1200px px-4">
        <Image
          src="/6273618417164161007.jpg" // Change this to your actual filename
          alt="Magallanes Civil Cemetery Map"
          width={1920}   // Original aspect ratio width
          height={1080}  // Original aspect ratio height
          className="w-full h-auto rounded-lg shadow-lg"
          priority       // Tells Next.js to load this quickly
        />
      </div>
      </main>
  );
}