import TiltedCard from './TiltedCard'

type EditorialItem = {
  id: string | number
  name: string
  description?: string
  viewHref?: string
  downloadHref?: string
}

type Props = {
  items?: EditorialItem[]
}

export default function EditorialsSimple({ items = [] }: Props) {
  // If no items provided, show a small placeholder list so the UI is visible.
  const placeholder: EditorialItem[] = [
    { id: 1, name: 'Editorial — October 2025', description: 'Highlights from the month: events, projects and wins.', viewHref: '#', downloadHref: '#' },
    { id: 2, name: 'Club Newsletter — Sept 2025', description: 'Summary of workshops and member spotlights.', viewHref: '#', downloadHref: '#' },
    { id: 3, name: 'Spotlight: Project X', description: 'An overview of Project X and outcomes achieved.', viewHref: '#', downloadHref: '#' },
  ]

  const list = items.length ? items : placeholder

  // small data-uri placeholder (light SVG)
  const placeholderSvg = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="100%" height="100%" fill="#ecfeff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#075985">No image</text></svg>')}`

  

  return (
    <section id="editorials-simple" className="relative py-20 bg-gradient-to-br from-[#f0f9ff] via-[#f0fdf4] to-[#ecfdf5]">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <h3 className="text-5xl md:text-6xl font-bold mb-20 text-center bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent">
          Editorials
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((it) => (
            <article key={it.id} className="bg-white rounded-2xl p-0 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* TiltedCard as visual hero for each editorial */}
              <div className="block w-full">
                {/* use dynamic import of TiltedCard to avoid circular issues */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <TiltedCard
                  imageSrc={placeholderSvg}
                  altText={it.name}
                  imageHeight="180px"
                  imageWidth="100%"
                  containerHeight="180px"
                  displayOverlayContent={true}
                  viewHref={it.viewHref}
                  downloadHref={it.downloadHref}
                />
              </div>

              <div className="p-6">
                <h4 className="text-lg md:text-xl font-bold text-[#0f172a] mb-2 line-clamp-2" title={it.name}>
                  {it.name}
                </h4>
                <p className="text-sm text-[#475569] mb-4 line-clamp-3">
                  {it.description ?? 'No description provided.'}
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href={it.viewHref ?? '#'}
                    className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white text-sm rounded-md"
                    onClick={(e) => { if (!it.viewHref || it.viewHref === '#') e.preventDefault() }}
                  >
                    View
                  </a>

                  <a
                    href={it.downloadHref ?? '#'}
                    className="inline-flex items-center px-3 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-md"
                    onClick={(e) => { if (!it.downloadHref || it.downloadHref === '#') e.preventDefault() }}
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
