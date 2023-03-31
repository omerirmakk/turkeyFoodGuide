import MainTitle from "@/components/MainTitle";
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import City from "@/data.json";

const istanbul = () => {
  return (
    <Layout title={"İstanbul"}>
      <div className="flex flex-row gap-10 flex-wrap">
        {City.istanbul.map((sehir) => (
          <Card
            id={sehir.id}
            source={sehir.sehirPhoto}
            cardTitle={sehir.sehirAd}
            cardP={sehir.sehirDesc}
          ></Card>
        ))}
      </div>
    </Layout>
  );
};

export default istanbul;
