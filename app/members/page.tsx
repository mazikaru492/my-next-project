import Image from "next/image";
import { getMembers } from "@/app/lids/microcms";
import style from "./page.module.css";

export default async function MembersPage() {
  const data = await getMembers();
  return (
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
                className={style.image}
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
  );
}
