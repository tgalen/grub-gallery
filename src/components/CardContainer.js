import { Link } from "react-router-dom";
import Card from "./Card";
import { TailSpin } from "react-loader-spinner";

const UL_STYLE = {
  display: "flex",
  flexWrap: "wrap",
  width: "60%",
  textAlign: "center",
  marginLeft: "20%",
};

const loadingStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const CardContainer = ({ currentLanguage, filteredFoodList }) => {
  return filteredFoodList ? (
    <ul style={UL_STYLE}>
      {filteredFoodList.map((item) => {
        const linkItemInfo = { ...item, language: currentLanguage };
        return (
          <Link
            key={item.name.english}
            to={`${item.name.english}`}
            state={linkItemInfo}
          >
            <Card item={item} currentLanguage={currentLanguage} />
          </Link>
        );
      })}
    </ul>
  ) : (
    <div style={loadingStyle}>
      <TailSpin color="Red" height={80} width={80} />
    </div>
  );
};

export default CardContainer;

/*

Frontend <---> Server <---> DB (Server + DB = backend)

DB: [f1,f2,f3]

Backend/Server (Node.js app)

Frontend (React App)

Frontend ---> POST request to Server to get [f1,f2,f3]
  Header (searchTerm: '', filter: [])
Frontend <---- [f1,f2,f3] <--- Server <--- DB

Frontend performs Search, Filter on [f1,f2,f3]

Frontend -Search/Filter` --> POST request to Server to get most updated food list
  fetch(url) + params (searchTerm or filters)
    Header
      searchTerm: 'chicken'


GET -> get all list of students from DB
POST -> add a student to list to DB
PUT -> update a student in the DB
DELETE -> delete a student in DB


www.example.com/

GET: www.example.com/students

POST: www.example.com/student
  param = {
    name: 'Jack',
    age: 12
  }

URL: {apiUrl}

Status code: 
  200 -> OK
  403 -> Unauthorized (need key, token)
  404 -> Notfound
  500 -> Internal error (from server)
  ...

*/
