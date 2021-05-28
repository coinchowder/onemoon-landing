/** @format */

import React from "react";
import { FaUsers, FaFireAlt, FaWater } from "react-icons/fa";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                         moon3D Component
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Moon3D = () => {
  return (
    <>
      <section className='moon'>
        <div className='container text-center'>
          <div className='row'>
            <div className='col-sm-4'>
              <p>
                <FaUsers style={{ fontSize: 54, color: "#fb6340" }} />
              </p>
              <h2 className='text-light'>2,250,345</h2>
              <p>Holders</p>
            </div>
            <div className='col-sm-4'>
              <p>
                <FaFireAlt style={{ fontSize: 54, color: "#fb6340" }} />
              </p>
              <h2 className='text-light'>2,250,345</h2>
              <p>Holders</p>
            </div>
            <div className='col-sm-4'>
              <p>
                <FaWater style={{ fontSize: 54, color: "#fb6340" }} />
              </p>
              <h2 className='text-light'>2,250,345</h2>
              <p>Holders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moon3D;
