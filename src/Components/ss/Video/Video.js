import React from "react";

function Video() {
  return (
    <div className="bg-ytube-darker max-w-[23%] min-w-[20%] my-5 shadoow-black drop-shadow-xl hover:my-2 cursor-pointer duration-200 ">
      <fig>
        <img
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/youtube-thumbnail-design-template-f41731052ef38859a77214e2be972d69_screen.jpg?ts=1630950507"
          alt=""
        />
        <figcaption className="flex my-1">
          <div className="w-11 m-2">
            <img
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
              className="w-100%"
              alt=""
            />
          </div>
          <div className="text-left m-2 my-3 ">
            <h1 className="font-medium">My Title is this video</h1>
            <p className="font-extralight text-ytube-grey">Channel Name</p>
            <p className="font-extralight text-ytube-grey">Views</p>
          </div>
        </figcaption>
      </fig>
    </div>
  );
}

export default Video;
