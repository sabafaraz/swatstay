function SectionContainer({ children, className = "" }) {
  return (
    <section
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 ${className}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;