import styles from './clinic.module.css'
import { clinicImages } from "@/utils/constants";
import Carousel from "../../components/Carousel/Carousel";

const Clinic = () => {
  console.log(clinicImages);
  return (
    <>
    <h1 className={`${styles.title}`}>Clínica Hermes Pardini</h1>
    <section className={styles.container}>
      <div className={styles.images}>
        <Carousel img={clinicImages} />
      </div>
      <div className={styles.info}>
        <p>
          Bem-vindo(a) à Clínica Hermes Pardini, um centro de referência em radiologia, localizado em uma das áreas mais nobres de Belo Horizonte, na Rua Aimorés, 66, bairro Funcionários. Nossa clínica combina tradição com tecnologia de ponta, oferecendo diagnósticos precisos e atendimento de qualidade, com uma equipe de especialistas experientes e dedicados. Nosso compromisso é proporcionar um ambiente acolhedor e seguro, onde o paciente recebe atenção integral, desde o agendamento até a entrega dos resultados.
        </p>
        <p>
          A Clínica Hermes Pardini é equipada com os mais avançados aparelhos de imagem disponíveis no mercado. Utilizamos tecnologias de última geração que garantem exames rápidos, confortáveis e com altíssima precisão. Nossos equipamentos são periodicamente calibrados e seguem rigorosos padrões de qualidade, possibilitando a obtenção de imagens detalhadas que auxiliam na elaboração de laudos precisos e confiáveis. Esse investimento contínuo em tecnologia permite que nossos radiologistas possam detectar e avaliar diversas condições com máxima eficácia, o que contribui diretamente para a escolha dos melhores tratamentos para nossos pacientes.
        </p>
        <p>
          Além de nosso compromisso com a tecnologia e inovação, na Hermes Pardini priorizamos a excelência na qualidade dos laudos e no atendimento. Cada exame é analisado por médicos radiologistas altamente qualificados e especializados, que se dedicam a fornecer um diagnóstico detalhado e embasado. Valorizamos a relação de confiança com nossos pacientes e trabalhamos para que cada pessoa atendida sinta-se respeitada e bem informada. Na Hermes Pardini, você encontra precisão, tecnologia e cuidado humano, sempre com o objetivo de oferecer um atendimento excepcional e contribuir para a sua saúde e bem-estar.
        </p>
      </div>
    </section>
    </>
  );
};

export default Clinic;