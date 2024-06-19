import { createContext, useState } from "react";
export const SubjectContext = createContext();
export default function SubjectProvider({ children }) {
  const [subject, setSubject] = useState(null);
  const data = {
    subject: subject,
    setSubject: setSubject,
  };
  return (
    <SubjectContext.Provider value={data}>{children}</SubjectContext.Provider>
  );
}
