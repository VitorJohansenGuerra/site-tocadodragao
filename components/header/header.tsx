import React from 'react'
import styles from '@/components/header/header.module.scss'
import Image from 'next/image';

export default function Header() {
    return (
        <header >
            <nav className={styles.header}>
                <Image className={styles.mainlogo} src="/images/logo.png" alt="Logo da Toca do Drag" width={100} height={91} />
                <ul className={styles.headerMenu}>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#guides">Participe</a></li>
                </ul>
            </nav>
        </header>

    )
}


