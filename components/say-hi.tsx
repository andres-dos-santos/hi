'use client'

import { useRouter } from 'next/navigation'

export function SayHi() {
  const { push } = useRouter()

  function handleEmailClick() {
    window.location.href =
      'mailto:andres.dosantosbritoamaral@gmail.com?subject=Assunto&body=Escreva%20sua%20mensagem%20aqui'
  }

  function handleWhatsAppClick() {
    const phoneNumber = '5524993154394'
    const message = 'Olá, gostaria de saber mais sobre seus serviços!'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`

    window.open(url, '_blank')
  }

  return (
    <nav className="flex items-center mb-8">
      <span className="text-[13px] font-medium">
        👋 Say hi on{' '}
        <button
          className="border-b text-sm font-semibold font-mono -tracking-wider"
          onClick={handleWhatsAppClick}
        >
          WhatsApp
        </button>
        ,{' '}
        <button className="border-b font-semibold" onClick={handleEmailClick}>
          Gmail
        </button>{' '}
        or follow me on{' '}
        <button
          className="border-b font-semibold"
          onClick={() =>
            push('http://linkedin.com/in/andres-dosantos/', '__blank')
          }
        >
          LinkedIn
        </button>
        ,{' '}
        <button
          className="border-b font-semibold"
          onClick={() =>
            push('http://github.com/andres-dos-santos/', '__blank')
          }
        >
          Github
        </button>
        .
      </span>
    </nav>
  )
}
