import Navbar from "./navbar";
import React from "react";
const postes = [
  {
    id: 1,
    titre: "Le Cercle des neiges (2023)",
    descr:
      "On October 13, 1972, Uruguayan Air Force Flight 571, which was carrying a rugby team to Chile, crashed in the Andes. Among the 45 passengers, only 29 survived the accident.",
    img: "https://media.senscritique.com/media/000021762682/300/le_cercle_des_neiges.png",
  },
  {
    id: 2,
    titre: "Une vie (2024)",
    descr:
      "Prague, 1938. As the city is on the verge of falling into the hands of the Nazis, a London banker will do everything possible to save hundreds of children facing certain death in concentration camps. At the risk of his life, Nicholas Winton will organize convoys to England, where 669 Jewish children will find refuge. This true story, which remained unknown for decades, was revealed to the whole world when, in 1988, a British program invited Nicholas to testify. ",
    img: "https://media.senscritique.com/media/000021932813/300/une_vie.png",
  },
  {
    id: 3,
    titre: "Civil War (2024)",
    descr:
      "Set in a near future where the United States is on the brink of collapse and embedded journalists are racing to tell the biggest story of their lives: The end of America as we know it.",
    img: "https://media.senscritique.com/media/000021964299/300/civil_war.png",
  },
  {
    id: 4,
    titre: "Kung Fu Panda 4 (2024)",
    descr:
      "After three adventures in which the dragon warrior Po fought the most formidable masters of evil thanks to unparalleled courage and martial arts skills, destiny will once again knock at his door to... invite him to finally rest.",
    img: "https://media.senscritique.com/media/000021979331/300/kung_fu_panda_4.png",
  },
];
function Home() {
  const [posts, setPostes] = React.useState(postes);
  return (
    <div className="Posts">
      <Navbar></Navbar>
      {posts.map((post) => (
        <div className="post">
          <div className="image">
            <img src={post.img} />
          </div>
          <div className="titre">
            <h1>{post.titre}</h1>
            <h5>{post.descr}</h5>
            
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
