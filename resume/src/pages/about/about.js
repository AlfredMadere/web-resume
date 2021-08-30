import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import "../../index.js";
import RaisedTextContainer from "../../components/raisedTextContainer/raisedTextContainer.js";
import ImageTileGallary from "../../components/imageTileGallary/imageTileGallary.js";

const aboutMeParagraph =
  "Hey there, my name is Alfred, I'm a developer and student from Austin Texas focused on getting shit done. I love the outdoors so in my free time You'll likely find me on the river or in the mountains. I also  ferform and teach jazz saxophone. Playing spike ball, bolly ball, going mountain bikine or climbing are some of my favorite activiets to do with friends.";
const data = [
  {
    id: 1,
    name: "Island",
    image:
      "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
  },
  {
    id: 2,
    name: "Forest",
    image:
      "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
  },
  {
    id: 3,
    name: "Whale",
    image:
      "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
  },
  {
    id: 4,
    name: "Mountain",
    image:
      "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
  },
  {
    id: 5,
    name: "Boat",
    image:
      "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
  },
  {
    id: 6,
    name: "Flowers",
    image:
      "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
  },
  {
    id: 7,
    name: "Fire",
    image:
      "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf",
  },
  {
    id: 8,
    name: "Garden",
    image:
      "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe",
  },
];

export default function AboutPage() {
  return (
    <div>
      <div className="top-bar corner-blob-1">
        <Navigation mode="dropdown-mode" />
        <h1 className="page-title">About</h1>
      </div>
      <div className="main-content">
        <div className="columb-container">
          <RaisedTextContainer paragraph={aboutMeParagraph} />
          <ImageTileGallary data={data} />
        </div>
        
      </div>
    </div>
  );
}
