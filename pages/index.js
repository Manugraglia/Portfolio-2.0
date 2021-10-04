import Card from "../components/Card";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Skill from "../components/Skill";
import SubMain from "../components/SubMain";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Skill />
      <Card />
      <SubMain />
      <Formulario />
    </Layout>
  );
}
