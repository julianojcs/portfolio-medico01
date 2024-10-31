import Image from 'next/image';
import styles from './about.module.css'
import photo from '@/assets/images/medico.png';
import { profile } from "@/utils/constants";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          className={styles.photo}
          src={photo}
          alt={`${profile.prefix} ${profile.name}`}
          width={365}
          height={365}
          // sizes="(max-width: 365px) 150px, (max-width: 1200px) 20vw, 365px"
        />
      </div>
      <div className={styles.curriculum}>
        <div className={styles.intro}>
          <p className={styles.name}>{`${profile.prefix} ${profile.name}`}</p>
          <p className={styles.degrees}>{profile.degrees.join(', ')}</p>
        </div>
        <div className={styles.docs}>
          <p className={styles.specialty}>{profile.specialty}</p>
          <p className={styles.crm}>{`CRM ${profile.crm}/${profile.crmState}`}</p>
          <p className={styles.rqe}>{`RQE - ${profile.rqe}`}</p>
        </div>

        <div className={styles.description}>
          <p><strong>Médica, graduada em Medicina pela Universidade Federal de Minas Gerais (UFMG), com residência médica em Radiologia e Diagnóstico por Imagem no Hospital das Clínicas, Mestrado e Doutorado pela UFMG.</strong></p>
          <p><strong>Radiologista com ênfase nas áreas de Oncorradiologia e Medicina Interna</strong>, atuando nas áreas de Ressonância Magnética, Tomografia Computadorizada e PET/CT</p>
          <p>Foi <strong>Foi Professora Adjunta do Departamento de Anatomia e Imagem da Faculdade de Medicina da UFMG</strong> e <strong>Membro de várias comissões do Colégio Brasileiro de Radiologia e Diagnóstico por Imagem (CBR)</strong>, onde atuou, na <strong>gestão 2021-2022</strong>, como <strong>Diretora Científica</strong>. No momento, atua como <strong>Diretora Científica da Sociedade de Radiologia de Minas Gerais (SRMG)</strong>.</p>
        </div>

        <p className={styles.fellows}>Foi <strong>Fellow visitante</strong> de várias instituições, destacando-se:</p>
        <ul className={styles.fellow}>
          {profile.fellow.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;