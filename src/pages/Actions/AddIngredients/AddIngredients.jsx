/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { findIngredients } from '../../../api/auth';
import './Addingredients.css';

function AddIngredients() {
  const [ingredient, setIngredient] = useState();

  function handlePageClick(e) {
    console.log(e);
  }

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
          {ingredient?.map((rum, index) => (
            <tr key={rum?.id}>
              <td> {index + 1} </td>
              <td> {rum?.name} </td>
              <td> {rum?.description} </td>
              <td className="table__buttons">
                <i className="fa-solid fa-pen-to-square" />

                <i className="fa-solid fa-trash-can" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default AddIngredients;
