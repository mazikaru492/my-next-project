import styles from "./page.module.css";
import HubSpotForm from "@/app/components/HubSpotForm";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業以内にご連絡いたします。
      </p>

      <p className={styles.email}>
        メール：{" "}
        <a
          className={styles.emailLink}
          href="mailto:ktc25a31e0014@deu.kyoto-tech.ac.jp"
        >
          ktc25a31e0014@deu.kyoto-tech.ac.jp
        </a>
      </p>

      <HubSpotForm
        portalId="244676217"
        formId="f8ec7adb-b284-4076-93ac-188f9fd44fe1"
        region="na2"
      />
    </div>
  );
}
