import Image from "next/image";

const CardLubricante = ({ lubricante }) => {
  let { name, precio, stock, url = "/vercel.svg" } = lubricante;

  let handleChange = (e) => {
    console.log(e);
  };
  return (
    <section className="card col-3 m-2">
      <div className="card-header text-center">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="card-body d-flex column justify-content-center align-items-center">
        <Image width="60" height="60" src={url} alt="image-producto" />
      </div>
      <div className="card-footer">
        <div className="d-flex gap-4 align-items-center justify-content-center text-center">
          <p>
            <strong>${precio}</strong>
          </p>
          <p className="d-flex gap-1 align-items-center justify-content-">
            <input
              type="number"
              name="uniVendidas"
              min={0}
              max={stock}
              onChange={handleChange}
            />
            <button className="btn">✅</button>
            <button className="btn">🗑️</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardLubricante;
