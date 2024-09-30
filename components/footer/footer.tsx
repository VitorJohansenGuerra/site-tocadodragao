import React from 'react'
import styles from '@/components/footer/footer.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <section>
                <p>&copy; 2023 Toca do Dragão</p>
                <p>Vítor Johansen Guerra</p>
            </section>

            <ul className={styles.socialMedias}>
                <li>
                    <Link href="https://www.instagram.com/vitorjguerra/" target="_blank">
                        <Image className={styles.socialMediasImage} src="/images/logo-instagram.svg" alt="Instagram" height={30} width={30} />
                    </Link>
                </li>
                <li>
                    <Link href="https://discord.gg/vxwBY8E" target="_blank">
                        <Image className={styles.socialMediasImage} src="/images/logo-discord.svg" alt="Discord" height={30} width={30} />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.twitch.tv/lemaostream" target="_blank">
                        <Image className={styles.socialMediasImage} src="/images/logo-twitch.svg" alt="Twitch" height={30} width={30} />
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

