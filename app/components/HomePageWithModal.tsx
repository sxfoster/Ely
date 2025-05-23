"use client"
import { useState } from 'react'
import Modal from './Modal'
import HomePageClient from './HomePageClient'

interface HomePageWithModalProps {
  services: any[]
}

export default function HomePageWithModal({ services }: HomePageWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

}
