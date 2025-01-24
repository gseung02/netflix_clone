import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const movies = [
  {id:1,title:'첫번째',image:'./image/img01.jpeg',tag:'최신등록'},
  {id:2,title:'두번째',image:'./image/img02.jpeg',tag:'최신등록'},
  {id:3,title:'세번째',image:'./image/img03.jpeg',tag:'최신등록'},
  {id:4,title:'네번째',image:'./image/img04.jpeg',tag:'최신등록'},
  {id:5,title:'다섯번째',image:'./image/img05.jpeg',tag:'최신등록'},
  {id:6,title:'여섯번째',image:'./image/img06.jpeg',tag:'최신등록'},
  {id:7,title:'일곱번째',image:'./image/img07.jpeg',tag:'최신등록'},
  {id:8,title:'여덟번째',image:'./image/img08.jpeg',tag:'최신등록'},
  {id:9,title:'아홉번째',image:'./image/img09.jpeg',tag:'최신등록'},
  {id:10,title:'열번째',image:'./image/img10.jpeg',tag:'최신등록'},
]

const MoveSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
      <div
      className="slick_prev"
      onClick={onClick}
      >◀</div>
    );
  }

  function SampleNextArrow(props) {
    const {onClick} = props;
    return (
      <div
      className="slick_next"
      onClick={onClick}
      >▶</div>
    );
  }
  
  return (
    <div className="move-slider">
      <h2>지금 뜨는 콘텐츠</h2>
      <select>
        <option>대한민국</option>
        <option>글로벌</option>
      </select>
      <select>
        <option>영화</option>
        <option>시리즈</option>
      </select>
      <Slider {...settings}>
        {
          movies.map((list)=>{
            return <div className="move-card" key={list.id}>
              <span>{list.id}</span>
              <img src={list.image} alt={list.title}/>
            </div>
          })
        }
        </Slider>
    </div>
  );
};

export default MoveSlider;