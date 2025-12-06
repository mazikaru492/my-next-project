import style from "./not-found.module.css";
export default function NotFound() {
  return (
    <div className={style.container}>
      <dl>
        <dt className={style.title}>ページが見つかりません</dt>
        <dd className={style.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLをご確認ください。
        </dd>
      </dl>
    </div>
  );
}
