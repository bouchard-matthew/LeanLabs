import Image from "next/image";
import { getProducts } from "../../Hooks/getProducts";
import { APIProductDoc } from "../../Types/types";
import wheyPhoto from "../../../Photos/proteinContainer.png";
import Landing from "../../Components/Landing/Landing";

const page = async () => {
  const response = await getProducts();

  console.log(response);

  return (
    <div style={{ height: "100%", margin: "200px" }}>
      <h1>Server Page</h1>
      <br></br>
      {response.map((product: APIProductDoc) => (
        <div key={product.name}>{product.fields.title.stringValue}</div>
      ))}

      <div
        style={{
          width: "80%",
          height: "500px",
          overflow: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {response.map((product: APIProductDoc) => (
          <div
            style={{ textAlign: "center", width: "200px" }}
            key={product.name}
          >
            <Image
              style={{
                objectFit: "contain",
              }}
              width={200}
              height={200}
              src={wheyPhoto}
              alt={"Photo"}
            />
            <p>{product.fields.title.stringValue}</p>
            <p>{product.fields.description.stringValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
