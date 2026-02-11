'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 py-10">
      <div className="max-w-[1400px] mx-auto px-6 text-center text-sm text-gray-500">

        <p>
          © {year} Vishnurat Kadagadakai · Designed and built with long-term systems in mind
        </p>

      </div>
    </footer>
  )
}
