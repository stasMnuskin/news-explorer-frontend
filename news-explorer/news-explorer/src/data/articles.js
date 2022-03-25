import dogImg from "../images/image_066.png"
import lakeImg from "../images/image_011.png"
import smokeImg from "../images/image_05.png"
import forestImg from "../images/image_06.png"
import skyImg from "../images/image_01.png"

const searchedArticles = [
  {
    _id: 1,
    topic: "Nature",
    image: dogImg,
    isSaved: false,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "TREEHUGGER",
  },
  {
    _id: 2,
    topic: "Nature",
    image: lakeImg,
    isSaved: true,
    date: "February 19, 2019",
    title: "Nature makes you better",
    text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
    source: "NATIONAL GEOGRAPHIC",
  },
  {
    _id: 3,
    topic: "Yellowstone",
    image: forestImg,
    isSaved: false,
    date: "October 19, 2020",
    title: "Grand Teton Renews Historic Crest Trail",
    text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
    source: "National PARKS TRAVELER",
  },
  {
    _id: 4,
    topic: "Parks",
    image: smokeImg,
    isSaved: false,
    date: "October 19, 2020",
    title: "Nostalgic Photos of Tourists in U.S. National Parks",
    text: "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
    source: "NATIONAL GEOGRAPHIC",
  },
  {
    _id: 5,
    topic: "Photography",
    image: skyImg,
    isSaved: false,
    date: "March 16, 2020",
    title: "Scientists Don't Know Why Polaris Is So Weird ",
    text: "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
    source: "TREEHUGGER",
  },
];

export default searchedArticles;
