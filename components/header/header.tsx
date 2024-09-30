import React from 'react'
import styles from '@/components/header/header.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <header >
            <nav className={styles.header}>
                <Image className={styles.mainlogo} src="/images/logo.png" alt="Logo da Toca do Drag" width={100} height={91} />
                <ul className={styles.headerMenu}>
                    <li><Link href="#home">Inicio</Link></li>
                    <li><Link href="#about">Sobre</Link></li>
                    <li><Link href="#join">Participe</Link></li>
                    <li><Link href="https://discord.gg/vxwBY8E" target="_blank">Discord</Link></li>
                </ul>
            </nav>
        </header>

    )
}


