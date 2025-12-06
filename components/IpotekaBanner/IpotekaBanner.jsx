import Link from "next/link";
import styles from "./HomePromo.module.scss";

export default function HomePromo() {
  return (
    <section className={styles.promoSection}>
      <div className={styles.container}>
        <div className={styles.promoContent}>
          <div className={styles.textContent}>
            <h2>
              Собственный дом по <b>сельской ипотеке</b> под 3%
            </h2>
            <p className={styles.description}>
              Постройте дом мечты с государственной поддержкой. Ставка 3%
              годовых, сумма до 6 млн рублей. Для работников АПК, учителей,
              врачей и участников СВО.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Ставка 3% годовых
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                До 6 млн рублей
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Срок до 25 лет
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>✓</span>
                Первоначальный взнос от 30%
              </div>
            </div>
            <Link href="/selskaya-ipoteka" className={styles.button}>
              Узнать условия
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
