import React, { Component, useState } from "react";
import Lightbox from "react-images";

const Portfolio = ({ images, showThumbnails }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };
  const gotoImage = index => {
    setCurrentImage(index);
  };
  const handleClickImage = () => {
    if (currentImage === images.length - 1) return;
    gotoNext();
  };
  const openLightbox = (index, event) => {
    event.preventDefault();
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };

  const renderLightboxLink = index => {
    return (
      <a
        href="#"
        // className={css(classes.thumbnail, classes[obj.orientation])}
        key={index}
        onClick={e => {
          e.preventDefault();
          openLightbox(index, e);
          return false;
        }}
      />
    );
  };

  const renderBackgroundStyle = src => {
    return {
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    };
  };
  const renderPortfolio = images => {
    return (
      <div class="portfolio">
        <div
          class="portfolio-item medium"
          style={renderBackgroundStyle(images[0].src)}
        >
          {renderLightboxLink(0)}
        </div>

        <div
          class="portfolio-item large"
          style={renderBackgroundStyle(images[1].src)}
        >
          {renderLightboxLink(1)}
        </div>
        <div
          class="portfolio-item medium"
          style={renderBackgroundStyle(images[2].src)}
        >
          {renderLightboxLink(2)}
        </div>
        <div
          class="portfolio-item small"
          style={renderBackgroundStyle(images[3].src)}
        >
          {renderLightboxLink(3)}
        </div>
        <div
          class="portfolio-item tall"
          style={renderBackgroundStyle(images[4].src)}
        >
          {renderLightboxLink(4)}
        </div>
        <div
          class="portfolio-item wide"
          style={renderBackgroundStyle(images[5].src)}
        >
          {renderLightboxLink(5)}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {renderPortfolio(images)}
      <Lightbox
        currentImage={currentImage}
        images={images}
        isOpen={lightboxIsOpen}
        onClickImage={handleClickImage}
        onClickNext={gotoNext}
        onClickPrev={gotoPrevious}
        onClickThumbnail={gotoImage}
        onClose={closeLightbox}
        // preventScroll={preventScroll}
        showThumbnails={showThumbnails}
        // spinner={spinner}
        // spinnerColor={spinnerColor}
        // spinnerSize={spinnerSize}
        // theme={theme}
      />
    </React.Fragment>
  );
};
export default Portfolio;

// class Portfolio extends Component {
//   constructor() {
//     super();

//     this.state = {
//       lightboxIsOpen: false,
//       currentImage: 0
//     };

//     this.closeLightbox = this.closeLightbox.bind(this);
//     this.gotoNext = this.gotoNext.bind(this);
//     this.gotoPrevious = this.gotoPrevious.bind(this);
//     this.gotoImage = this.gotoImage.bind(this);
//     this.handleClickImage = this.handleClickImage.bind(this);
//     this.openLightbox = this.openLightbox.bind(this);
//   }
//   openLightbox(index, event) {
//     event.preventDefault();
//     this.setState({
//       currentImage: index,
//       lightboxIsOpen: true
//     });
//   }
//   closeLightbox() {
//     this.setState({
//       currentImage: 0,
//       lightboxIsOpen: false
//     });
//   }
//   gotoPrevious() {
//     this.setState({
//       currentImage: this.state.currentImage - 1
//     });
//   }
//   gotoNext() {
//     this.setState({
//       currentImage: this.state.currentImage + 1
//     });
//   }
//   gotoImage(index) {
//     this.setState({
//       currentImage: index
//     });
//   }
//   handleClickImage() {
//     if (this.state.currentImage === this.props.images.length - 1) return;

//     this.gotoNext();
//   }
//   renderGallery() {
//     const { images } = this.props;

//     if (!images) return;

//     const gallery = images
//       //.filter(i => i.useForDemo)
//       .map((obj, i) => {
//         return (
//           <a
//             href={obj.src}
//             // className={css(classes.thumbnail, classes[obj.orientation])}
//             key={i}
//             onClick={e => this.openLightbox(i, e)}
//           >
//             <img src={obj.thumbnail} /*className={css(classes.source)}*/ />
//           </a>
//         );
//       });

//     return <div /*className={css(classes.gallery)}*/>{gallery}</div>;
//   }
//   render() {
//     return (
//       <div className="section">
//         {this.props.heading && <h2>{this.props.heading}</h2>}
//         {this.props.subheading && <p>{this.props.subheading}</p>}
//         {this.renderGallery()}
//         <Lightbox
//           currentImage={this.state.currentImage}
//           images={this.props.images}
//           isOpen={this.state.lightboxIsOpen}
//           onClickImage={this.handleClickImage}
//           onClickNext={this.gotoNext}
//           onClickPrev={this.gotoPrevious}
//           onClickThumbnail={this.gotoImage}
//           onClose={this.closeLightbox}
//           preventScroll={this.props.preventScroll}
//           showThumbnails={this.props.showThumbnails}
//           spinner={this.props.spinner}
//           spinnerColor={this.props.spinnerColor}
//           spinnerSize={this.props.spinnerSize}
//           theme={this.props.theme}
//         />
//       </div>
//     );
//   }
// }

// export default Portfolio;
