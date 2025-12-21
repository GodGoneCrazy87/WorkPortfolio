'use client'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { caseStudies } from '@/lib/caseStudies'
import { X } from 'lucide-react'

export default function CaseStudyPage({ params }) {
  const router = useRouter()
  const study = caseStudies.find(c => c.slug === params.slug)
  if (!study) notFound()

  const index = caseStudies.findIndex(c => c.slug === study.slug)
  const nextStudy = caseStudies[(index + 1) % caseStudies.length]

  /* ---------------- SCROLL PROGRESS ---------------- */
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  /* ---------------- CLOSE HANDLER ---------------- */
  const closeToWork = () => {
    router.push('/#work')
  }

  return (
    <section className="relative bg-[#0b0f13] text-gray-200">

      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#4F7DFF] to-purple-500 z-50"
      />

      {/* CLOSE BUTTON */}
      <button
        onClick={closeToWork}
        aria-label="Close case study"
        className="
          fixed top-6 right-6 z-40
          w-10 h-10 rounded-full
          bg-[#0f141a] border border-gray-800
          flex items-center justify-center
          text-gray-300 hover:text-white
          hover:border-purple-500/40
          transition
        "
      >
        <X size={18} />
      </button>

      <div className="max-w-[1100px] mx-auto px-6 pt-24 pb-32 space-y-28">

        {/* BREADCRUMB */}
        <nav className="text-sm text-gray-500">
          <span className="hover:text-white transition">Work</span>
          <span className="mx-2">→</span>
          <span className="text-gray-300">{study.title}</span>
        </nav>

        {/* HERO (SHARED IMAGE) */}
        <motion.div
          layoutId={`case-image-${study.slug}`}
          className="
            rounded-3xl overflow-hidden
            border border-gray-800
            bg-gradient-to-br from-purple-900/40 to-[#0b0f13]
          "
        >
          <Image
            src={study.heroImage}
            alt={study.title}
            width={1600}
            height={800}
            priority
            className="w-full h-[420px] object-cover"
          />
        </motion.div>

        {/* META */}
        <div className="rounded-2xl border border-gray-800 bg-[#0f141a] p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-white">
              {study.title}
            </h1>
            <p className="text-gray-400 mt-1">
              {study.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <Meta label="Services" value={study.services} />
            <Meta label="Tools" value={study.tools.join(' · ')} />
            <Meta label="Deliverables" value={study.deliverables} />
            <Meta label="Year" value={study.year} />
          </div>

          {/* OUTCOME */}
          <p className="text-sm text-purple-400 pt-2">
            Outcome: {study.result}
          </p>
        </div>

        {/* ABOUT */}
        <TextSection title={`About ${study.title}`}>
          {study.about}
        </TextSection>

        {/* CHALLENGE / SOLUTION */}
        <div className="grid md:grid-cols-2 gap-16">
          <TextSection title="Challenge">{study.challenge}</TextSection>
          <TextSection title="Solution">{study.solution}</TextSection>
        </div>

        {/* DESIGN & DEVELOPMENT */}
        <div className="space-y-20">
          <h2 className="text-center text-xs uppercase tracking-[0.25em] text-gray-500">
            Design & Development
          </h2>

          {study.sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-14 items-center ${
                i % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <Image
                src={study.heroImage}
                alt={s.title}
                width={800}
                height={500}
                loading="lazy"
                className="rounded-2xl border border-gray-800"
              />

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESULT */}
        <TextSection title="The Result">
          {study.result}
        </TextSection>

        {/* NEXT (CIRCULAR) */}
        <div className="pt-24">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-gray-500 mb-8">
            Next Case Study
          </p>

          <a
            href={`/case-studies/${nextStudy.slug}`}
            className="
              group block rounded-2xl border border-gray-800
              bg-[#0f141a] p-6 transition
              hover:border-purple-500/40
            "
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.div
                layoutId={`case-image-${nextStudy.slug}`}
                className="rounded-xl overflow-hidden"
              >
                <Image
                  src={nextStudy.heroImage}
                  alt={nextStudy.title}
                  width={320}
                  height={220}
                  loading="lazy"
                />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {nextStudy.title}
                </h3>
                <p className="text-gray-400 mb-2">
                  {nextStudy.subtitle}
                </p>
                <p className="text-sm text-purple-400">
                  Explore System →
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------------- HELPERS ---------------- */

function TextSection({ title, children }) {
  return (
    <div className="max-w-3xl">
      <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
        {title}
      </h2>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <p className="text-sm text-gray-200">{value}</p>
    </div>
  )
}
