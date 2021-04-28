import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { oneHosting } from "../../store/hostings";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function HostingPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.hosting[id]);
    const reviews = useSelector((state) => state.hosting.reviews);

    useEffect(() => {
        dispatch(oneHosting(id));
    }, [id]);

    if (!post) return null;

    return (
        <div>
            <div>{post.name}</div>
            <div>{post.description}</div>
            <div>{post.locationDetails}</div>
            <div>
                {reviews.map((review) => (
                    <div>
                        <div>{review.title}</div>
                        <div>{review.review}</div>
                        <div>{review.recommended ? '💜' : '🤚🏼'}</div>
                        <div>{review.User.username}</div>
                    </div>
                ))}
            </div>
            {/* {console.log('post[id]', reviews)} */}
            {/* <Calendar /> */}
        </div>
    )
}

export default HostingPage;
