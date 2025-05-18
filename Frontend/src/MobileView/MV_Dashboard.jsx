import "../../src/css/Mobile_view.css"
import React, { useEffect, useState } from 'react';
import MV_Createorder from "./MV_Createorder";

export default function MV_Dahsboard () {
          const [showNextpage, setShowNextpage] = useState(false);

     const handleNextpage = () => {
                setShowNextpage(true);
            };

    return(
        <div className="cls_width100">
                                {showNextpage ? (<MV_Createorder/>) : (
                                    <div className="cls_mobile_content">
            <h2 onClick={handleNextpage}>Welcome to Dahsboard</h2>

                                    </div>
            
            )}
        </div>
    )
}