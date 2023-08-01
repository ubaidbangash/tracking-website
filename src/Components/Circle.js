// import React from "react";
// import "./Circle.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// import ChangingProgressProvider from "./ChangingProgressProvider";
// const circleData=[
//   {

//   }
// ]
// const percentage = 66;
// const Circle = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4 round">
//           <div className="circle-round">
//             <ChangingProgressProvider values={[0, 20, 40, 90]}>
//               {(percentage) => (
//                 <CircularProgressbar
//                   value={percentage}
//                   text={`${percentage}%`}
//                 />
//               )}
//             </ChangingProgressProvider>
//             <div className="progress-text">REVIEW</div>
//           </div>
//         </div>
//         <div className="col-4 round">
//           <div className="circle-round">
//             <ChangingProgressProvider values={[0, 20, 40, 60]}>
//               {(percentage) => (
//                 <CircularProgressbar
//                   value={percentage}
//                   text={`${percentage}%`}
//                 />
//               )}
//             </ChangingProgressProvider>
//             <div className="progress-text">PROJECTS</div>
//           </div>
//         </div>
//         <div className="col-4 round">
//           <div className="circle-round">
//             <ChangingProgressProvider values={[0, 20, 40, 40]}>
//               {(percentage) => (
//                 <CircularProgressbar
//                   value={percentage}
//                   text={`${percentage}%`}
//                 />
//               )}
//             </ChangingProgressProvider>
//             <div className="progress-text">CLIENTS</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Circle;

import React from "react";
import "./Circle.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Row, Col } from "antd";
import ChangingProgressProvider from "./ChangingProgressProvider";
const circleData = [{}];
const percentage = 66;
const Circle = () => {
  return (
    <div className="container">
      <Row>
        {circleData.map((item) => {
          return (
            <>
              <Col>
                <div className="circle-round">
                  <ChangingProgressProvider values={[0, 20, 40, 90]}>
                    {(percentage) => (
                      <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                      />
                    )}
                  </ChangingProgressProvider>
                  <div className="progress-text">REVIEW</div>
                </div>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
export default Circle;
