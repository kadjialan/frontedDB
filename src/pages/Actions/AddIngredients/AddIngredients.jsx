/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { findIngredients } from '../../../api/auth';
import { httpClient } from '../../../api/axios';
import './Addingredients.css';

function AddIngredients() {
  const [ingredient, setIngredient] = useState();
  const [data1, setData1] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [limit, setLimit] = useState(1);

  function handlePageClick(e) {
    console.log(e);
    httpClient
      .get(`ingredients/${currentPage}&${limit}`)
      .then(({ data }) => setData1(data));
    console.log(data1);
  }

  // `http://localhost:3000/ingredients/${currentPage}&${limit}`

  useEffect(() => {
    findIngredients().then(setIngredient);
  }, []);
  return (
    <div className="addIngredients">
      <table className="ingredient-table">
        <caption>ingredients</caption>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>description</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {/*  {ingredient?.map((rum, index) => (
            <tr key={rum?.id}>
              <td> {index + 1} </td>
              <td> {rum?.name} </td>
              <td> {rum?.description} </td>
              <td className="table__buttons">
                <i className="fa-solid fa-pen-to-square" />

                <i className="fa-solid fa-trash-can" />
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={8}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default AddIngredients;
