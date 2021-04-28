import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateHostings } from "../../store/hostings";

function StateHostings() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const states = useSelector((state) => Object.values(state.hosting?.hostings?.state));

    useEffect(() => {
        dispatch(stateHostings(id));
    }, [dispatch, id]);

    if (!states) return null;

    return (
        <div>
            state hosting page
            {states.map((state) => (
                <div>
                    <div>{state.name}</div>
                    <div>{state.description}</div>
                    <div>{state.locationDetails}</div>
                </div>
            ))}
            {/* <div>{state.locationDetails}</div> */}
            {/* {console.log('test', state)} */}
        </div>
    )
}

export default StateHostings;
