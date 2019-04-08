import React, { Component } from "react";
import Gallery from "./Gallery";
import "./App.scss";
import Portfolio from "./Portfolio";
import pic1 from "./images/1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";
import pic5 from "./images/5.jpg";
import pic6 from "./images/6.jpg";

const DEFAULT_IMAGES = [
  {
    id: "1470619549108-b85c56fe5be8",
    caption: "Photo by Alan Emery",
    orientation: "square",
    useForDemo: true
  }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
  {
    id: "1471079502516-250c19af6928",
    caption: "Photo by Jeremy Bishop",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
  {
    id: "1454023492550-5696f8ff10e1",
    caption: "Photo by Jessica Weiller",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
  {
    id: "1470854989922-5be2f7456d78",
    caption: "Photo by Piotr Łaskawski",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
  {
    id: "1470317596697-cbdeda56f999",
    caption: "Photo by Michel Bosma",
    orientation: "landscape",
    useForDemo: true
  } // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
];
const THEMED_IMAGES = [
  {
    id: "1471101173712-b9884175254e",
    caption: "Photo by Pedro Lastra",
    orientation: "square",
    useForDemo: true
  }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
  {
    id: "1471127432458-65206be149c9",
    caption: "Photo by Ernesto Velázquez",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
  {
    id: "1470777639313-60af88918203",
    caption: "Photo by Cris Saur",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
  {
    id: "1453550486481-aa4175b013ea",
    caption: "Photo by Benjamin Pley",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
  {
    id: "1415904663467-dfdc16cae794",
    caption: "Photo by Levi Saunders",
    orientation: "landscape",
    useForDemo: true
  } // https://unsplash.com/photos/NUMlxTPsznM (Coyote)
];
const THUMBNAIL_IMAGES = [
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    orientation: "square",
    useForDemo: true
  }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
  {
    id: "1455717974081-0436a066bb96",
    caption: "Photo by Teddy Kelley",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
  {
    id: "1460899960812-f6ee1ecaf117",
    caption: "Photo by Jay Ruzesky",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
  {
    id: "1456926631375-92c8ce872def",
    caption: "Photo by Gwen Weustink",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
  {
    id: "1452274381522-521513015433",
    caption: "Photo by Adam Willoughby-Knox",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
  {
    id: "1471145653077-54c6f0aae511",
    caption: "Photo by Boris Smokrovic",
    orientation: "landscape"
  }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
  {
    id: "1471005197911-88e9d4a7834d",
    caption: "Photo by Gaetano Cessati",
    orientation: "landscape"
  }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
  {
    id: "1470583190240-bd6bbde8a569",
    caption: "Photo by Alan Emery",
    orientation: "landscape"
  }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
  {
    id: "1470688090067-6d429c0b2600",
    caption: "Photo by Ján Jakub Naništa",
    orientation: "landscape"
  }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
  {
    id: "1470742292565-de43c4b02b57",
    caption: "Photo by Eric Knoll",
    orientation: "landscape"
  }, // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
  // https://unsplash.com/photos/NUMlxTPsznM coyote? -----------------
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    orientation: "square",
    useForDemo: true
  }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
  {
    id: "1455717974081-0436a066bb96",
    caption: "Photo by Teddy Kelley",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
  {
    id: "1460899960812-f6ee1ecaf117",
    caption: "Photo by Jay Ruzesky",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
  {
    id: "1456926631375-92c8ce872def",
    caption: "Photo by Gwen Weustink",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
  {
    id: "1452274381522-521513015433",
    caption: "Photo by Adam Willoughby-Knox",
    orientation: "landscape",
    useForDemo: true
  }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
  {
    id: "1471145653077-54c6f0aae511",
    caption: "Photo by Boris Smokrovic",
    orientation: "landscape"
  }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
  {
    id: "1471005197911-88e9d4a7834d",
    caption: "Photo by Gaetano Cessati",
    orientation: "landscape"
  }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
  {
    id: "1470583190240-bd6bbde8a569",
    caption: "Photo by Alan Emery",
    orientation: "landscape"
  }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
  {
    id: "1470688090067-6d429c0b2600",
    caption: "Photo by Ján Jakub Naništa",
    orientation: "landscape"
  }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
  {
    id: "1470742292565-de43c4b02b57",
    caption: "Photo by Eric Knoll",
    orientation: "landscape"
  } // https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
  // https://unsplash.com/photos/NUMlxTPsznM coyote?
];

function makeUnsplashSrc(id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet(id, size) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail(id, orientation = "landscape") {
  const dimensions = orientation === "square" ? "w=300&h=300" : "w=240&h=159";

  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const DEMO_IMAGES = [
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic1,
    thumbnail: pic1
  },
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic2,
    thumbnail: pic2
  },
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic3,
    thumbnail: pic3
  },
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic4,
    thumbnail: pic4
  },
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic5,
    thumbnail: pic5
  },
  {
    id: "1454991727061-be514eae86f7",
    caption: "Photo by Thomas Kelley",
    src: pic6,
    thumbnail: pic6
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true,
      gotoPrevLightboxImage: null,
      gotoNextLightboxImage: null,
      closeLightbox: () => {
        console.log("closing the lightbox");
      }
    };
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <div class="sidebar">
          <div class="logo">Dominic &amp; Wesley</div>
          {/* <nav>
            <a href="#" class="nav-item">
              Home
            </a>
            <a href="#" class="nav-item">
              About
            </a>
            <a href="#" class="nav-item active">
              Portfolio
            </a>
            <a href="#" class="nav-item">
              Contact
            </a>
          </nav> */}
        </div>

        <div class="main-content">
          <Portfolio
            images={DEMO_IMAGES.map(({ caption, id, src, thumbnail }) => ({
              src,
              thumbnail,
              // srcSet: [
              //   makeUnsplashSrcSet(id, 1024),
              //   makeUnsplashSrcSet(id, 800),
              //   makeUnsplashSrcSet(id, 500),
              //   makeUnsplashSrcSet(id, 320)
              // ],
              caption
            }))}
            showThumbnails
          />
          {/* <h3>With Thumbnails</h3> */}
          {/* <Gallery
            images={THUMBNAIL_IMAGES.map(
              ({ caption, id, orientation, useForDemo }) => ({
                src: makeUnsplashSrc(id),
                thumbnail: makeUnsplashThumbnail(id, orientation),
                srcSet: [
                  makeUnsplashSrcSet(id, 1024),
                  makeUnsplashSrcSet(id, 800),
                  makeUnsplashSrcSet(id, 500),
                  makeUnsplashSrcSet(id, 320)
                ],
                caption,
                orientation,
                useForDemo
              })
            )}
            showThumbnails
          /> */}
          {/* <div class="portfolio">
            <div class="portfolio-item medium">one</div>
            <div class="portfolio-item large two">two</div>
            <div class="portfolio-item medium">three</div>
            <div class="portfolio-item small">four</div>
            <div class="portfolio-item tall">
              five
            </div>
            <div class="portfolio-item wide">six</div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
