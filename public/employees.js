import EmployeeList from "./EmployeeList.js";
const initialEmployees = [{
  id: 1,
  name: 'Zak Ruvalcaba',
  ext: 1124,
  email: 'zak@vectacorp.com',
  title: 'Chief Executive Officer',
  dateHired: new Date('2018-08-15'),
  isEmployed: true
}, {
  id: 2,
  name: 'Sally Smith',
  ext: 1125,
  email: 'sally@vectacorp.com',
  title: 'Director of Sales',
  dateHired: new Date('2015-01-03'),
  isEmployed: true
}];
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), document.getElementById('content'));