import CustomersTable from "../CustomersTable";
import "./CustomersT.css";

function CustomersT() {
  return (
    <div
      className="container"
      style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}
    >
      <h1 className="font-bold text-[24px]">المستخدمون</h1>

      <CustomersTable />
    </div>
  );
}

export default CustomersT;
