'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative flex items-center justify-center min-h-screen text-center px-6">
        <div className="absolute inset-0 bg-black opacity-70" />

        <div className="relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-yellow-400"
          >
            FITPRIME
          </motion.h1>

          <p className="mt-6 text-2xl text-zinc-300">
            Sua plataforma fitness premium.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <Link
              href="/login"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
            >
              Entrar
            </Link>

            <Link
              href="/professor"
              className="border border-yellow-400 px-8 py-4 rounded-xl"
            >
              Área Professor
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
