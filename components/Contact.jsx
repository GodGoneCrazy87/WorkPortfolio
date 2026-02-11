'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Github,
  Linkedin,
  Mail,
  Figma,
  ArrowUpRight,
  Check,
} from 'lucide-react'

const EMAIL = 'Vishnurat87@email.com'

const links = [
  {
    label: 'Email',
    description: 'Direct, reliable communication',
    icon: Mail,
    isEmail: true,
  },
  {
    label: 'LinkedIn',
    description: 'Professional background & experience',
    href: 'https://www.linkedin.com/in/Vishnurat-Kadagadakai',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    description: 'Production-ready frontend & system work',
    href: 'https://github.com/GodGoneCrazy87',
    icon: Github,
  },
  {
    label: 'Figma',
    description: 'Design systems, UX flows, and interface work',
    href: 'https://www.figma.com/design/J6gz8Y8xIaYhdusjDG03qS',
    icon: Figma,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [shortcut, setShortcut] = useState('Ctrl+C')

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      setShortcut(/Mac|iPhone|iPad/.test(navigator.platform) ? '⌘C' : 'Ctrl+C')
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <section
      id="contact"
      className="relative bg-[#0F1115] overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/8 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 pt-28 pb-32">

        {/* HEADER */}
        <div className="max-w-4xl mb-16">
          <p className="text-sm font-medium text-purple-400 mb-3">
            Contact
          </p>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Let’s build systems that scale in the real world
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            I collaborate with engineering teams, founders, and product leaders
            who value clarity, maintainability, and production-grade frontend
            systems.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="relative">

            {/* Vertical Rail */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="
                absolute left-0 top-0
                w-[2px] h-full
                bg-gradient-to-b
                from-purple-500/70
                via-purple-500/30
                to-transparent
                rounded-full
              "
            />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-10">

              {links.map((item, i) => {
                const Wrapper = item.isEmail ? 'button' : 'a'

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.05,
                    }}
                    className="h-full"
                  >
                    <Wrapper
                      {...(!item.isEmail && {
                        href: item.href,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                      {...(item.isEmail && {
                        type: 'button',
                        onClick: copyEmail,
                      })}
                      className="
                        group w-full h-full text-left
                        relative rounded-xl
                        border border-gray-800
                        bg-[#121018]
                        p-6
                        min-h-[120px]
                        flex items-start gap-4
                        transition-all
                        hover:border-purple-500/40
                        hover:shadow-[0_0_24px_rgba(168,85,247,0.12)]
                      "
                    >
                      <item.icon className="w-5 h-5 text-purple-400 mt-1" />

                      <div className="flex-1">
                        <p className="text-white font-medium mb-1">
                          {item.label}
                        </p>

                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>

                        {item.isEmail && (
                          <p
                            className={`
                              mt-2 text-xs flex items-center gap-1
                              transition-all
                              ${
                                copied
                                  ? 'text-purple-400 opacity-100'
                                  : 'text-purple-400/80 opacity-0 group-hover:opacity-100'
                              }
                            `}
                          >
                            {copied ? (
                              <>
                                <Check className="w-3 h-3" />
                                Copied
                              </>
                            ) : (
                              <>Click to copy · {shortcut}</>
                            )}
                          </p>
                        )}
                      </div>

                      {!item.isEmail && (
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                      )}
                    </Wrapper>
                  </motion.div>
                )
              })}

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden lg:block">

            <div className="rounded-2xl border border-gray-800 bg-[#121018] p-8 space-y-6">

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  What you get when you hire me
                </h3>

                <p className="text-sm text-gray-400">
                  Production-ready engineering, not portfolio code.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <li>• Writes maintainable, documented systems</li>
                <li>• Understands product and business context</li>
                <li>• Ships features that survive scale</li>
                <li>• Communicates risks early</li>
                <li>• Improves existing codebases</li>
              </ul>

              <div className="pt-5 border-t border-gray-800 space-y-2">

                <p className="text-sm text-gray-400">
                  Current focus
                </p>

                <p className="text-purple-400 font-medium">
                  Open to full-time roles · High-impact teams
                </p>

                <p className="text-xs text-gray-500">
                  Contract & consulting available selectively
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* FINAL CTA */}
        <div className="mt-20 max-w-3xl">

          <div className="relative pl-6">

            <span
              className="
                absolute left-0 top-1
                h-full w-[2px]
                bg-gradient-to-b
                from-purple-500/70
                via-purple-500/40
                to-transparent
                rounded-full
              "
            />

            <p className="text-gray-300 leading-relaxed">
              If you’re building something that needs to scale — technically
              and structurally — let’s talk.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}
