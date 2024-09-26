import React from 'react'
import styles from '@/components/footer/footer.module.scss'
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section>
                <p>&copy; 2023 Toca do Dragão</p>
                <p>Vítor Johansen Guerra</p>
            </section>

            <ul className={styles.socialMedias}>
                <li>
                    <a href="https://www.instagram.com/vitorjguerra/" target="_blank">
                        <Image className={styles.socialMediasImage} src="/images/logo-instagram.svg" alt="Instagram" height={30} width={30} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/6kGCnpXrd6" target="_blank">
                        <Image className={styles.socialMediasImage} src="/images/logo-discord.svg" alt="Discord" height={30} width={30} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

