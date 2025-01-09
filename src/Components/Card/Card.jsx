import styles from "./Card.module.css";

import heroImgMobile from "../../assets/image-header-mobile.jpg";

function Card() {
  return (
    <article className={styles.container}>
      <img
        className={styles.img}
        src={heroImgMobile}
        alt="Three women in an office desk, two of them areworking and the other is smiling at looking at her right side"
      />

      <div className={styles.textBox}>
        <h1 className={styles.heading}>
          <span className={styles.blockSpan}>
            Get <span className={styles.coloredSpan}>insights</span> that
          </span>{" "}
          help your business <span className={styles.blockSpan}>grow.</span>
        </h1>
        <p className={styles.info}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <ul className={styles.lists}>
          <li className={styles.liElements}>
            <p>
              <span>10k+</span>
              companies
            </p>
          </li>
          <li className={styles.liElements}>
            <p>
              <span>314</span>
              templates
            </p>
          </li>
          <li className={styles.liElements}>
            <p>
              <span>12m+</span>
              queries
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
}

export default Card;

//
//
