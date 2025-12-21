'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-3 text-sm text-gray-500">
        <p>
          © {year} Vishnurat Kadagadakai.
        </p>
        <p>
          Designed and engineered as a production-focused frontend system.
        </p>
      </div>
    </footer>
  )
}
