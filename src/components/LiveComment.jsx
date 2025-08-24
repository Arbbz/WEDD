import React, { useState, useEffect, useRef } from 'react';
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const getRandomProfileImage = (name) => {
  const encodedName = encodeURIComponent(name); 
  return `https://robohash.org/${encodedName}.png`;
};

const LiveCommentCard = () => {
  const [comments, setComments] = useState([]);
  const commentsSectionRef = useRef(null);

  useEffect(() => {
    // Initialize Firebase
    const db = getDatabase();
    const commentsRef = ref(db, 'rsvp/');

    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentList = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setComments(commentList);
      } else {
        setComments([]);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  // Intersection Observer setup for animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slideIn");
        }
      });
    }, { threshold: 0.5 });

    if (commentsSectionRef.current) {
      observer.observe(commentsSectionRef.current);
    }

    // Cleanup observer
    return () => {
      if (commentsSectionRef.current) {
        observer.unobserve(commentsSectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={commentsSectionRef} className="comments-section mt-8 mb-4 rounded-2xl shadow-xl p-4">
      <h3 className="text-2xl font-bold text-center text-maroon-500 mb-6">Ucapan</h3>

      {comments.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada komentar</p>
      ) : (
        <div className="space-y-4 border-[3px]">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4 p-4 bg-white shadow-lg rounded-xl">
              <img 
                src={getRandomProfileImage(comment.name)} 
                alt="profile" 
                className="w-12 h-12 rounded-full border-2 border-gray-300" 
              />
              
              <div className="flex-1">
                <p className="font-semibold text-lg text-maroon-600">{comment.name}</p>
                <p className="text-sm text-gray-600">{comment.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveCommentCard;
