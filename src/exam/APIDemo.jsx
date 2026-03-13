import { useState, useEffect } from "react";

export default function APIDemo() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    fetch("https://dummy-json.mock.beeceptor.com/companies")
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.log(error));

  }, []);

  return (
    <div>

      <h3>Company List (API Demo)</h3>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Industry</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>

          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>{company.industry}</td>
              <td>{company.country}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}