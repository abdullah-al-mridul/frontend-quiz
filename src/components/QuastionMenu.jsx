import { ProgressBar } from "primereact/progressbar";
import { IoLogoJavascript } from "react-icons/io";
import { LuPaintbrush2 } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { TbCookieMan } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";
import { Button } from "primereact/button";
import { SlBadge } from "react-icons/sl";
import { SubjectContext } from "../context/SubjectProvider";
const QuastionMenu = ({ variant }) => {
  const Context = useContext(SubjectContext);
  const { setSubject } = Context;
  const quizes = {
    acc: [
      {
        q: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        ans: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
      },
      {
        q: "Which of these elements needs a descriptive alt attribute?",
        ans: [
          "Decorative images",
          "Informative images",
          "Background images",
          "Image captions",
        ],
      },
      {
        q: "Which of these is a WCAG guideline for keyboard accessibility?",
        ans: ["Visible focus", "Hidden elements", "Mouse only", "Fixed layout"],
      },
      {
        q: "Which ARIA role is used for main content regions?",
        ans: ["Button", "Dialog", "Main", "Region"],
      },
      {
        q: "Which of these tools checks website accessibility?",
        ans: ["WebAIM", "Google Analytics", "Visual Studio Code", "Notepad"],
      },
      {
        q: "Which of these is essential for screen readers?",
        ans: ["Color contrast", "Alt text", "Font size", "Padding"],
      },
      {
        q: "Which of these is a valid landmark role?",
        ans: ["Header", "Footer", "Main", "All of the above"],
      },
      {
        q: "Which HTML attribute improves form accessibility?",
        ans: ["Title", "Id", "Aria-label", "Href"],
      },
      {
        q: "Which of these affects accessibility in videos?",
        ans: ["Captions", "Brightness", "Contrast", "Volume"],
      },
      {
        q: "Which of these is a WCAG principle?",
        ans: ["Usable", "Perceivable", "Maintainable", "Scalable"],
      },
    ],
    html: [
      {
        q: "What does HTML stand for?",
        ans: [
          "Home Tool Markup Language",
          "Hyper Text Markup Language",
          "Hyperlinks and Text Markup Language",
          "Hyperlinking Text Marking Language",
        ],
      },
      {
        q: "Which tag is used for the largest heading?",
        ans: ["<h1>", "<heading>", "<h6>", "<head>"],
      },
      {
        q: "Which tag defines a hyperlink?",
        ans: ["<link>", "<a>", "<href>", "<hyperlink>"],
      },
      {
        q: "Which tag is used for a line break?",
        ans: ["<lb>", "<br>", "<break>", "<line>"],
      },
      {
        q: "Which attribute is used for an image source?",
        ans: ["href", "src", "link", "alt"],
      },
      {
        q: "Which element contains metadata?",
        ans: ["<footer>", "<meta>", "<header>", "<head>"],
      },
      {
        q: "Which tag creates a paragraph?",
        ans: ["<para>", "<p>", "<pg>", "<paragraph>"],
      },
      {
        q: "Which element defines a list item?",
        ans: ["<ul>", "<li>", "<list>", "<ol>"],
      },
      {
        q: "Which tag is used to create a table row?",
        ans: ["<table>", "<tr>", "<row>", "<td>"],
      },
      {
        q: "Which attribute specifies an image's text description?",
        ans: ["src", "alt", "desc", "title"],
      },
    ],
    css: [
      {
        q: "What does CSS stand for?",
        ans: [
          "Colorful Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets",
        ],
      },
      {
        q: "Which property changes text color?",
        ans: ["font-color", "color", "text-color", "background-color"],
      },
      {
        q: "How do you add a background color?",
        ans: ["color", "background-color", "bgcolor", "background"],
      },
      {
        q: "How do you make text bold?",
        ans: ["text-weight", "font-weight", "font-style", "bold"],
      },
      {
        q: "Which property controls text size?",
        ans: ["text-size", "font-style", "font-size", "size"],
      },
      {
        q: "How do you center text?",
        ans: [
          "text-align: center",
          "align-text: center",
          "center-text",
          "text-center",
        ],
      },
      {
        q: "Which property changes the font?",
        ans: ["font-weight", "font-family", "font-style", "font"],
      },
      {
        q: "Which property adds padding?",
        ans: ["padding", "margin", "border", "spacing"],
      },
      {
        q: "Which property changes the width of an element?",
        ans: ["height", "length", "width", "size"],
      },
      {
        q: "Which property changes the background image?",
        ans: ["background-image", "image-background", "bg-image", "image"],
      },
    ],
    js: [
      {
        q: "What does JS stand for?",
        ans: ["Java System", "JavaScript", "Just Script", "Jolly Script"],
      },
      {
        q: "Which keyword is used to define a variable?",
        ans: ["var", "define", "let", "new"],
      },
      {
        q: "Which method is used to write on the browser console?",
        ans: ["console.log", "console.write", "print", "echo"],
      },
      {
        q: "Which symbol is used for comments in JavaScript?",
        ans: ["//", "/*", "<!--", "#"],
      },
      {
        q: "Which method converts a JSON string to a JavaScript object?",
        ans: [
          "JSON.toString",
          "JSON.stringify",
          "JSON.parse",
          "JSON.objectify",
        ],
      },
      {
        q: "Which method adds an element at the end of an array?",
        ans: ["push", "pop", "add", "insert"],
      },
      {
        q: "Which method removes the last element from an array?",
        ans: ["remove", "pop", "push", "delete"],
      },
      {
        q: "Which keyword declares a constant?",
        ans: ["const", "constant", "var", "let"],
      },
      {
        q: "Which method calls a function once after a specific time?",
        ans: ["setTimeout", "setInterval", "call", "wait"],
      },
      {
        q: "Which operator is used for strict equality?",
        ans: ["==", "===", "=", "!"],
      },
    ],
  };

  const answers = {
    acc: ["a", "b", "a", "c", "a", "b", "d", "c", "a", "b"],
    html: ["b", "a", "b", "b", "b", "d", "b", "b", "b", "b"],
    css: ["b", "b", "b", "b", "c", "a", "b", "a", "c", "a"],
    js: ["b", "a", "a", "a", "c", "a", "b", "a", "a", "b"],
  };

  const [qCount, setQCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(
    new Array(quizes[variant].length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);
  const handleChoice = (mc) => {
    const newSelected = [...selected];
    newSelected[qCount] = mc;
    setSelected(newSelected);
  };

  const valueTemplate = (value) => (
    <>
      {value}/<b>100</b>
    </>
  );

  const dispatch = (action) => {
    switch (action.index) {
      case 0:
      case 1:
      case 2:
      case 3:
        return action.index;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log("selected array", selected);
  }, [selected]);

  let headerText;
  switch (variant) {
    case "html":
      headerText = "HTML";
      break;
    case "css":
      headerText = "CSS";
      break;
    case "js":
      headerText = "Javascript";
      break;
    case "acc":
      headerText = "Accessibility";
      break;
    default:
      variant;
  }
  const checkCorrectAns = () => {
    let correct = 0;
    selected.map((ans, idx) => {
      if (ans === answers[variant][idx]) {
        correct++;
      }
    });
    setCorrectAns(correct);
  };
  const [homeLoading, setHomeLoading] = useState(false);
  return (
    <>
      {!showResult && (
        <div className="flex flex-row max-[900px]:flex-col gap-[20px] w-full">
          <div className="text-[white] w-full">
            <p className="flex text-[20px] items-center mb-[20px]">
              <div className="bg-[white] p-[10px] rounded-lg mr-[10px]">
                <Icon variant={variant} />
              </div>
              <div>{headerText}</div>
            </p>
            <div>
              <p className="text-[#ACBCD5] text-[17px] mb-[10px]">
                Question {qCount + 1} of 10
              </p>
              <p className="text-[26px] mb-[20px]">
                {quizes[variant][qCount].q}
              </p>
              <ProgressBar
                value={(qCount + 1) * 10}
                displayValueTemplate={valueTemplate}
              ></ProgressBar>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center gap-[10px]">
              {quizes[variant][qCount].ans.map((answer, index) => (
                <SelectItems
                  key={index}
                  index={index}
                  dispatch={dispatch}
                  selectedAnswer={selected[qCount]}
                  text={answer}
                  click={handleChoice}
                  mc={String.fromCharCode(97 + index)}
                />
              ))}
            </div>
            <div
              onClick={() => {
                if (qCount < 9) {
                  setLoading(true);
                  setTimeout(() => {
                    setQCount((prev) => prev + 1);
                    setLoading(false);
                  }, 1000);
                } else {
                  setLoading(true);
                  setTimeout(() => {
                    checkCorrectAns();
                    setShowResult(true);
                    setLoading(false);
                  }, 1000);
                }
              }}
              className="bg-[#A62AF4] cursor-pointer rounded-lg text-[#fff] p-[15px] flex justify-center text-[20px] w-full mt-[20px]"
            >
              <Button
                style={{
                  boxShadow: "none",
                }}
                label={qCount < 9 ? "Next" : "Result"}
                loading={loading}
                className="gap-[10px]"
              />
            </div>
          </div>
        </div>
      )}
      {showResult && (
        <div className="text-[white] font-[600] w-full py-[20px] text-[24px] text-center">
          <div className="w-full flex justify-center text-[60px] mb-[20px]">
            <SlBadge />
          </div>
          You got {correctAns} out of 10 correct!
          <br />
          <div className="flex w-full justify-center cursor-pointer">
            <div className="mt-[20px] text-[18px] py-[12px] px-[18px] rounded-lg bg-[#A829F5] w-[max-content]">
              <Button
                style={{
                  boxShadow: "none",
                }}
                label="Go to Home"
                loading={homeLoading}
                onClick={() => {
                  setHomeLoading(true);
                  setTimeout(() => {
                    setSubject(null);
                    setHomeLoading(false);
                  }, 2000);
                }}
                className="gap-[10px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SelectItems = ({ index, dispatch, selectedAnswer, text, click, mc }) => {
  const isSelected =
    index === (selectedAnswer ? selectedAnswer.charCodeAt(0) - 97 : -1);
  const borderWidth = isSelected ? "4px" : "";
  const bgColor = isSelected ? "rgb(74 222 128)" : "#fff";

  return (
    <div
      style={{
        borderColor: "rgb(74 222 128)",
        borderWidth: borderWidth,
        boxSizing: "border-box",
      }}
      onClick={() => {
        dispatch({ index });
        click(mc);
      }}
      className="flex  hover:scale-105 cursor-pointer transition-transform duration-300 p-[20px] rounded-lg w-[90%] md:w-[350px] items-center bg-[#3C4D67]"
    >
      <div
        style={{
          background: bgColor,
        }}
        className={`text-[24px] p-[12px] mr-[20px] rounded-lg`}
      ></div>
      <div
        className={`text-[white] max-[700px]:text-[17px] font-[700] text-[19px]`}
      >
        {text}
      </div>
    </div>
  );
};

const Icon = ({ variant }) => {
  let color;
  switch (variant) {
    case "html":
      color = "#F9925A";
      return <IoCodeSlash style={{ color }} />;
    case "css":
      color = "#4BC690";
      return <LuPaintbrush2 style={{ color }} />;
    case "js":
      color = "#426EC9";
      return <IoLogoJavascript style={{ color }} />;
    case "acc":
      color = "#A927EB";
      return <TbCookieMan style={{ color }} />;
    default:
      return null;
  }
};

export default QuastionMenu;
