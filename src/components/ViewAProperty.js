
import React, { useState} from "react";
import { Link } from "react-router-dom";
import ModalConfirmDeletion from "./ModalConfirmDeletion";

const ViewAProperty = ({
  id,
  title,
  description,
  type,
  price,
  image,
  address,
  bestSeller,
  pool,
  wifi,
  parking,
  bathtub,
  restaurant,
  breakfast,
  bar,
  spa,
  gym,
  rules,
  star,
}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{type}</td>
        <td>{address}</td>
        <td>{price}</td>
        <td>{bestSeller ? "true" : "false"}</td>
        <td>{star}</td>
        <td> 
           <Link to={`/update/property/${id}`} className="move-right-link">
           <button type="button" className="btn btn-warning">Update</button>
          </Link> 
        </td>
        <td>
        <button type="button" className="btn btn-danger"  onClick={() => {
                  setModalShow(true);
              }}>Delete</button>
          <ModalConfirmDeletion
              key={Math.random()}
              id={id}
              title={title}
              address={address}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </td>
      </tr>
    </>
  );
};

export default ViewAProperty;
