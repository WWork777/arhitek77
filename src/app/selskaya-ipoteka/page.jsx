import { seoData } from "../utils/SeoData";
import Hero from "../../../components/Home/Hero/Hero";
import styles from "./styles.module.scss";
import Consultation from "../../../components/Consultation/Consultation";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoData.construction.theme_color,
};

export const metadata = {
  title: seoData.ipoteka.title,
  description: seoData.ipoteka.description,
  keywords: seoData.ipoteka.keywords,
  alternates: {
    canonical: seoData.ipoteka.canonical,
  },
  openGraph: {
    title: seoData.ipoteka.og_title,
    description: seoData.ipoteka.og_description,
    locale: seoData.ipoteka.og_locale,
    type: seoData.ipoteka.og_type,
    url: seoData.ipoteka.og_url,
    siteName: seoData.ipoteka.og_site_name,
    images: [
      {
        url: seoData.ipoteka.og_img_url,
        width: seoData.ipoteka.og_img_width,
        height: seoData.ipoteka.og_img_height,
        alt: seoData.ipoteka.og_img_alt,
      },
    ],
  },
  article: {
    publishedTime: seoData.ipoteka.article_modified_time,
    modifiedTime: seoData.ipoteka.article_modified_time,
    authors: [seoData.ipoteka.article_publisher],
  },
  twitter: {
    card: seoData.ipoteka.twitter_card,
    site: seoData.ipoteka.twitter_site,
    creator: seoData.ipoteka.twitter_site,
  },
  other: {
    SKYPE_TOOLBAR: seoData.ipoteka.SKYPE_TOOLBAR,
  },
};

export default function Construction() {
  return (
    <div className="calculate-page">
      <Hero
        title="СЕЛЬСКАЯ ИПОТЕКА В МОСКВЕ"
        description="Постройте собственный дом по льготной программе для жителей села."
        buttonName="Оформить ипотеку"
        backgroundSrc={`/Catalog/RockNRoll284/RockNRoll284.webp`}
      />

      {/* Блок ключевых преимуществ */}
      <section className={styles.advantages}>
        <div className={styles.container}>
          <h2 className={styles.advantagesTitle}>
            Ключевые преимущества{" "}
            <span className={styles.accentText}>сельской ипотеки</span>
          </h2>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>%</div>
              <h3 className={styles.advantageTitle}>Ставка 3% годовых</h3>
              <p className={styles.advantageText}>
                Одна из самых низких ставок на рынке ипотечного кредитования
              </p>
            </div>

            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>📅</div>
              <h3 className={styles.advantageTitle}>Срок до 25 лет</h3>
              <p className={styles.advantageText}>
                Длительный срок кредита для комфортного ежемесячного платежа
              </p>
            </div>

            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>💰</div>
              <h3 className={styles.advantageTitle}>Сумма до 6 млн рублей</h3>
              <p className={styles.advantageText}>
                Достаточно для строительства современного загородного дома
              </p>
            </div>

            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>🏠</div>
              <h3 className={styles.advantageTitle}>На строительство дома</h3>
              <p className={styles.advantageText}>
                Идеально подходит для реализации вашего проекта с нашей помощью
              </p>
            </div>

            <div className={styles.advantageItem}>
              <div className={styles.advantageIcon}>⚡</div>
              <h3 className={styles.advantageTitle}>
                Первоначальный взнос от 30%
              </h3>
              <p className={styles.advantageText}>
                Понятные и доступные условия для старта строительства
              </p>
            </div>
          </div>
          <div className={styles.ctr_button}>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className={styles.button}
            >
              Оформить ипотеку
            </button>
          </div>
        </div>
      </section>

      {/* Блок подробного описания программы */}
      <section className={styles.programDetails}>
        <div className={styles.container}>
          <div className={styles.programContent}>
            {/* Что такое сельская ипотека */}
            <div className={styles.programSection}>
              <h2 className={styles.sectionTitle}>
                Что такое сельская ипотека?
              </h2>
              <p className={styles.sectionText}>
                Это государственная программа льготного кредитования, которая
                позволяет приобрести или построить жилье в сельской местности по
                сниженной процентной ставке.
              </p>
            </div>

            {/* Кто может получить - выделенный блок */}
            <div className={styles.eligibleSection}>
              <h2 className={styles.sectionTitle}>
                Кто может получить сельскую ипотеку?
              </h2>
              <p className={styles.sectionSubtitle}>
                Программа доступна для следующих категорий граждан:
              </p>
              <div className={styles.eligibleGrid}>
                <div className={styles.eligibleItem}>
                  <div className={styles.eligibleIcon}>🌾</div>
                  <div className={styles.eligibleContent}>
                    <h3 className={styles.eligibleTitle}>
                      Сотрудники АПК и ИП
                    </h3>
                    <p className={styles.eligibleText}>
                      Работники агропромышленного комплекса, индивидуальные
                      предприниматели в АПК, а также сотрудники организаций,
                      подведомственных Минсельхозу России
                    </p>
                  </div>
                </div>

                <div className={styles.eligibleItem}>
                  <div className={styles.eligibleIcon}>👨‍⚕️</div>
                  <div className={styles.eligibleContent}>
                    <h3 className={styles.eligibleTitle}>
                      Работники социальной сферы
                    </h3>
                    <p className={styles.eligibleText}>
                      Специалисты в области здравоохранения, образования, науки,
                      социальной защиты, культуры, спорта, работающие в сельской
                      местности
                    </p>
                  </div>
                </div>

                <div className={styles.eligibleItem}>
                  <div className={styles.eligibleIcon}>🏛️</div>
                  <div className={styles.eligibleContent}>
                    <h3 className={styles.eligibleTitle}>
                      Сотрудники органов местного самоуправления
                    </h3>
                    <p className={styles.eligibleText}>
                      Работники муниципальных учреждений и органов власти на
                      селе
                    </p>
                  </div>
                </div>

                <div className={styles.eligibleItem}>
                  <div className={styles.eligibleIcon}>🎖️</div>
                  <div className={styles.eligibleContent}>
                    <h3 className={styles.eligibleTitle}>
                      Участники СВО и их супруги
                    </h3>
                    <p className={styles.eligibleText}>
                      Участники специальной военной операции и члены их семей
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* На что можно потратить */}
            <div className={styles.usageSection}>
              <h2 className={styles.sectionTitle}>
                На что можно использовать средства?
              </h2>
              <div className={styles.usageGrid}>
                <div className={styles.usageItem}>
                  <div className={styles.usageHeader}>
                    <div className={styles.usageIcon}>🏗️</div>
                    <h3 className={styles.usageTitle}>
                      Строительство индивидуального жилого дома
                    </h3>
                  </div>
                  <p className={styles.usageText}>
                    <strong>Идеально для наших услуг!</strong> Вы можете
                    построить дом своей мечты с привлечением нашей строительной
                    компании как аккредитованной подрядной организации
                  </p>
                </div>

                <div className={styles.usageItem}>
                  <div className={styles.usageHeader}>
                    <div className={styles.usageIcon}>📍</div>
                    <h3 className={styles.usageTitle}>
                      Покупка земельного участка для ИЖС
                    </h3>
                  </div>
                  <p className={styles.usageText}>
                    <strong>Это тоже про нас!</strong> Приобретите участок и
                    сразу начните строительство с привлечением нашей компании в
                    качестве подрядчика
                  </p>
                </div>

                <div className={styles.usageItem}>
                  <div className={styles.usageHeader}>
                    <div className={styles.usageIcon}>🏡</div>
                    <h3 className={styles.usageTitle}>
                      Покупка готового жилого дома
                    </h3>
                  </div>
                  <p className={styles.usageText}>
                    Приобретение готового дома на сельской территории для
                    немедленного заселения
                  </p>
                </div>

                <div className={styles.usageItem}>
                  <div className={styles.usageHeader}>
                    <div className={styles.usageIcon}>🏢</div>
                    <h3 className={styles.usageTitle}>
                      Покупка квартиры в новостройке
                    </h3>
                  </div>
                  <p className={styles.usageText}>
                    Приобретение квартиры в малоэтажных домах (до 5 этажей) в
                    опорных населенных пунктах
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctr_button}>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className={styles.button}
          >
            Оформить ипотеку
          </button>
        </div>
      </section>
      <div className="calculate-page-consultation">
        <Consultation />
      </div>
    </div>
  );
}
