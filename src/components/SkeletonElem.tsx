import React from "react";
import { Skeleton } from "antd";
import '../styles/skeleton.css';

function SkeletonElem() {
    return (
        <div className="skeleton">
            <Skeleton active 
                      avatar={{size: 64}} 
                      paragraph={{ rows: 1 , width: '150px'}} 
                      title={{width: '100px'}}/>
        </div>
    )
}

export {SkeletonElem}