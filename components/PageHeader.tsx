type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark py-12 text-white">
      <div className="container-page">
        <h1 className="text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
