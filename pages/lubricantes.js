import CardLubricante from "../components/Lubricantes/CardLubricante";
import "bootstrap/dist/css/bootstrap.min.css";

("reactstrap");
export default function Lubricantes() {
  let lubricantes = [
    {
      id: 1,
      name: "AGUA 1 LTS",
      precio: 2190,
      uVendidas: 0,
      stock: 10,
      url: "/vercel.svg",
    },
    {
      id: 2,
      name: "AGUA 5 LTS",
      precio: 5490,
      uVendidas: 0,
      stock: 6,
      url: "/vercel.svg",
    },
    {
      id: 3,
      name: "AGUA VERDE 1 LTS",
      precio: 2990,
      uVendidas: 0,
      stock: 5,
      url: "/vercel.svg",
    },
    {
      id: 4,
      name: "AGUA VERDE 5 LTS",
      precio: 5990,
      uVendidas: 0,
      stock: 0,
      url: "/vercel.svg",
    },
    {
      id: 5,
      name: "EX.TURBO 15W40 1LTS",
      precio: 8990,
      uVendidas: 0,
      stock: 5,
      url: "/vercel.svg",
    },
    {
      id: 6,
      name: "EX.TURBO 15W40 4LTS",
      precio: 29990,
      uVendidas: 0,
      stock: 0,
      url: "/vercel.svg",
    },
    {
      id: 7,
      name: "20W50 1LTS",
      precio: 9990,
      uVendidas: 0,
      stock: 0,
      url: "/vercel.svg",
    },
    {
      id: 8,
      name: "20W50 4LTS",
      precio: 32990,
      uVendidas: 0,
      stock: 3,
      url: "/vercel.svg",
    },
    {
      id: 9,
      name: "10W40 1LTS",
      precio: 12490,
      uVendidas: 0,
      stock: 4,
      url: "/vercel.svg",
    },
    {
      id: 10,
      name: "10W40 4LTS",
      precio: 32990,
      uVendidas: 0,
      stock: 1,
      url: "/vercel.svg",
    },
    {
      id: 11,
      name: "5W30 1LTS",
      precio: 16490,
      uVendidas: 0,
      stock: 3,
      url: "/vercel.svg",
    },
    {
      id: 12,
      name: "5W30 4LTS",
      precio: 50990,
      uVendidas: 0,
      stock: 4,
      url: "/vercel.svg",
    },
    {
      id: 13,
      name: "GL 80W90 1LTS",
      precio: 6990,
      uVendidas: 0,
      stock: 6,
      url: "/vercel.svg",
    },
    {
      id: 14,
      name: "GL 80W90 4LTS",
      precio: 21990,
      uVendidas: 0,
      stock: 3,
      url: "/vercel.svg",
    },
    {
      id: 15,
      name: "LUBRAX ATF 1LTS",
      precio: 7990,
      uVendidas: 0,
      stock: 3,
      url: "/vercel.svg",
    },
    {
      id: 16,
      name: "LUBRAX ATF 4LTS",
      precio: 14990,
      uVendidas: 0,
      stock: 0,
      url: "/vercel.svg",
    },
    {
      id: 17,
      name: "LUBRAX 2T DE 0,5",
      precio: 3990,
      uVendidas: 0,
      stock: 7,
      url: "/vercel.svg",
    },
    {
      id: 18,
      name: "LUBRAX HD-2",
      precio: 6490,
      uVendidas: 0,
      stock: 9,
      url: "/vercel.svg",
    },
    {
      id: 19,
      name: "LUBRAX PC-2",
      precio: 5490,
      uVendidas: 0,
      stock: 0,
      url: "/vercel.svg",
    },
    {
      id: 20,
      name: "LIMPIA PARABRISA",
      precio: 1390,
      uVendidas: 0,
      stock: 8,
      url: "/vercel.svg",
    },
    {
      id: 21,
      name: "LÍQUIDO DE FRRENO",
      precio: 3590,
      uVendidas: 0,
      stock: 8,
      url: "/vercel.svg",
    },
    {
      id: 22,
      name: "BIDON",
      precio: 3590,
      uVendidas: 0,
      stock: 1,
      url: "/vercel.svg",
    },
  ];
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-around align-items-center text-center">
          <label>Buscar Lubricante</label>
          <input type="search" className="form-control" placeholder="Buscar" />
          <button className="btn btn-primary">Buscar</button>
        </div>
      </div>
      <div className="container p-4">
        <article className="grid ">
          <section className="row m-2">
            {lubricantes.map((lubricante) => (
              <CardLubricante key={lubricante.id} lubricante={lubricante} />
            ))}
          </section>
        </article>
      </div>
    </>
  );
}
