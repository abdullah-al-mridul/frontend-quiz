import { useContext } from "react";
import DarkModeToggler from "./components/DarkModeToggler";
import StarterMenu from "./components/StarterMenu";
import { SubjectContext } from "./context/SubjectProvider";
import QuastionMenu from "./components/QuastionMenu";
export default function App() {
  const context = useContext(SubjectContext);
  const { subject } = context;
  return (
    <>
      <main className="bg-[#313E51] max-[900px]:h-[auto] h-[100vh]">
        <section className="h-full min-h-[100vh]">
          <div className="max-w-[1000px] h-full mx-auto">
            <div className="flex h-full items-center">
              <div className="w-full p-[20px]">
                <div className="flex justify-end mb-[50px]">
                  <DarkModeToggler />
                </div>
                <div className="flex justify-between">
                  {!subject && <StarterMenu />}
                  {subject && <QuastionMenu variant={subject} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
