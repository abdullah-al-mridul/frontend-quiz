import { InputSwitch } from "primereact/inputswitch";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

export default function DarkModeToggler() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <CiLight
        style={{
          color: "white",
          fontSize: "24px",
        }}
      />
      <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
      <CiDark
        style={{
          color: "white",
          fontSize: "24px",
        }}
      />
    </div>
  );
}
