import Navigation from '../components/Navigation/Navigation';

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex w-full">
      <Navigation />
      <div className="p-8 max-md:px-4 pb-8 w-full h-full flex justify-center overflow-y-scroll">
        <div className="max-w-[800px] w-full">{children}</div>
      </div>
    </section>
  );
}
