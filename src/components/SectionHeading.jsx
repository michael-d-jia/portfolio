export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-text whitespace-nowrap">
        <span className="text-accent-soft font-mono text-lg mr-3">{number}.</span>
        {title}
      </h2>
      <span className="h-px w-full bg-border" />
    </div>
  )
}
