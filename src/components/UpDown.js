import React, { useState, useEffect } from "react";
import { db } from "../firebase";

function UpDown() {
  const [submissions, setSubmissions] = useState([]);
  const fetchSubmissions = async () => {
    const response = db.collection("submissions");
    const data = await response.get();
    data.docs.forEach((item) => {
      setSubmissions([...submissions, item.data()]);
    });
  };
  useEffect(() => {
    fetchSubmissions();
  }, []);
  return (
    <div className="App">
      {submissions &&
        submissions.map((submission) => {
          return (
            <div className="blog-container">
              <h4>{submission.category}</h4>
              <p>{submission.link}</p>
            </div>
          );
        })}
    </div>
  );
}

export default UpDown;

// class UpDown extends React.Component {
//   state = {
//     submissions: null,
//   };

//   componentDidMount() {
//     db.collection("submissions")
//       .get()
//       .then((snapshot) => {
//         const submissions = [];
//         snapshot.forEach((doc) => {
//           const data = doc.data();
//           submissions.push(data);
//         });
//         this.setState({ submissions: submissions });
//       })
//       .catch((error) => console.log(error));
//   }

//   render() {
//     return (
//       <div className="upDown">
//         {this.state.submissions &&
//           this.state.submisssions.map((submission) => {
//             return (
//               <div>
//                 <p>{submission.id}</p>
//               </div>
//             );
//           })}
//       </div>
//     );
//   }
// }

// export default UpDown;

// this.state.submissions &&
