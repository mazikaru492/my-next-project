import Image from "next/image";
import { getMembers } from "@/app/lids/microcms";
import style from "./page.module.css";
import Hero from "@/app/components/Hero";

// Revalidate CMS data periodically so updates show on the web
export const revalidate = 10; // seconds

export default async function MembersPage() {
  const data = await getMembers();
  return (
    <div>
      <Hero title="メンバー" sub="チーム紹介" />
      <div className={style.container}>
        {data.contents.length === 0 ? (
          <p className={style.empty}>メンバーが登録されてません</p>
        ) : (
          <ul>
            {data.contents.map((member) => (
              <li key={member.id} className={style.list}>
                <Image
                  src={member.image.url}
                  alt={member.name}
                  width={member.image.width}
                  height={member.image.height}
                  className={style.item}
                />
                <dl>
                  <dt className={style.name}>{member.name}</dt>
                  <dd className={style.position}>{member.position}</dd>
                  <dd className={style.profile}>{member.profile}</dd>
                </dl>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
