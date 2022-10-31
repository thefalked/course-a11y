import Image from "next/image";

import LogoGithubImg from '../assets/logo-github.svg';
import LogoRocketseatImg from '../assets/logo-rocketseat.svg';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Image src={LogoRocketseatImg} width={286 / 2} />

        <div className={styles.nav}>
          <a href="https://www.github.com/thefalked">
            <Image src={LogoGithubImg} />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <h2>
          Desenvolvendo uma web acessível
        </h2>

        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, minima.
        </h4>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ipsum sunt doloribus voluptas atque consequuntur, quas reiciendis error commodi quidem maxime eligendi porro recusandae, sint fugiat ipsa corporis est voluptatum.</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet dolor at magni itaque quasi fugit maiores nesciunt laboriosam alias accusamus.</p>

        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
    </div>
  )
}