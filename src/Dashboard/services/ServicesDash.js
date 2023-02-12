import { useState, useEffect } from "react";
import "./ServicesDash.css";
import Axios from "axios";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

function ServicesDash() {
  const [Service, setService] = useState([]);
  const [openDivPost,setdivPost]=useState(false);
  const [Title,setTitle]=useState('');
  const [Description,setDescription]=useState('');

  const Request = async () => {
    try {
      const response = await Axios.get("http://localhost:5000/api/services");
      const res = await response.data;
      console.log(res);
      setService(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    Request();
  }, []);

  const PostService =async ()=>{
    const form = new FormData();
    form.append("title",Title);
    form.append("description",Description)
    try{
    const res = await Axios.post(`http://localhost:5000/api/services`,form, 
    {
        content : "application/json",
        headers: {
            "Authorization" : 'Bearer ' + localStorage.getItem('token')
        }
    }
    )
    const response =await res.data;
    console.log(response);
    Request();

}catch(err){
    console.log(err);
}
  }

  const DeleteService =async (id)=>{
    try{
    const res = await Axios.delete(`http://localhost:5000/api/services/${id}`,
    {
        content : "application/json",
        headers: {
            "Authorization" : 'Bearer ' + localStorage.getItem('token')
        }
    }
    )
    const response =await res.data;
    console.log(response);
    Request();
    setdivPost(false);

}catch(err){
    console.log(err);
}
  }
  
  return (
    <>
      <div className="Service-main-dash">
        <h1 className="Service-h1-dash">Services</h1>
        <button className="Create-service-button" onClick={()=>setdivPost(true)}>Create new Service</button>
        {openDivPost &&
    <div>
      <label htmlFor='Service-title'>Please provide Service title
      <br />
        <input className="Service-title-input" type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
        </label>
        <br />
        <label  htmlFor='Service-description'>Please provide Service description
        <br />
        <input className="Service-description-input" type="text" onChange={(e)=>{setDescription(e.target.value)}}/>
        </label>
        <br />
        <button className="Service-submit-button" onClick={()=>PostService()}>Submit</button>
    </div>
}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="ServiceSwiper-dash">
          {Service?.map((obj) => {
            return (
              <SwiperSlide key={obj._id} className="ServiceSlide-dash">
                <h2 className="Service-h2-dash">{obj.title}</h2>
                <p className="Service-p-dash">{obj.description}</p>
                <button className="Delete-service-button"  onClick={()=>DeleteService(obj._id)}>Delete</button>
              </SwiperSlide>
            );
          })}
           
        </Swiper>
      </div>
    </>
  );
}

export default ServicesDash;
