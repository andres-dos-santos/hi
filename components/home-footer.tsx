'use client'

import { HomeLink } from './home-link'

import { useRouter } from 'next/navigation'

export function HomeFooter() {
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
    <footer className="flex items-center gap-5 mb-10 ml-10">
      <HomeLink onClick={handleWhatsAppClick}>Whatsapp</HomeLink>

      <HomeLink onClick={handleEmailClick}>Gmail</HomeLink>

      <HomeLink onClick={() => push('http://linkedin.com/in/andres-dosantos/')}>
        LinkedIn
      </HomeLink>

      <HomeLink onClick={() => push('http://github.com/andres-dos-santos/')}>
        Github
      </HomeLink>
    </footer>
  )
}
