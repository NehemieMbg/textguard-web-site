import Navigation from '../components/Navigation/Navigation';

export default function layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex">
      <Navigation></Navigation>
      <div className="p-8">{children}</div>
    </section>
  );
}
