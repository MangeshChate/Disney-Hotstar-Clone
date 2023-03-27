import React from 'react'
import '../App.css';
const coursolData =
    [
        {
            name:" Teri Meri Doriyaan",
            category: "Starplus . Hindi . Drama",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi odio libero accusantium fugiat nobis deleniti vero aperiam. Accusamus ut dignissimos nihil fugiat necessitatibus optio ipsam sit nam voluptas, repellendus quos assumenda",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3568/1443568-h-486ea9769e0d",


        },
        {
            name:" Teri Meri Doriyaan",
            category: "Starplus . Hindi . Drama",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi odio libero accusantium fugiat nobis deleniti vero aperiam. Accusamus ut dignissimos nihil fugiat necessitatibus optio ipsam sit nam voluptas, repellendus quos assumenda",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4513/1494513-h-f494119e4a48",


        },
        {
            name:" Teri Meri Doriyaan",
            category: "Starplus . Hindi . Drama",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi odio libero accusantium fugiat nobis deleniti vero aperiam. Accusamus ut dignissimos nihil fugiat necessitatibus optio ipsam sit nam voluptas, repellendus quos assumenda",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",


        },

    ]



export default function Coursal() {


    return (
        <>
            <div id="carouselExampleControls" className="carousel slide text-light p-3 " data-bs-ride="carousel">
                <div className="carousel-inner d-flex p-3 ">
                {coursolData.map((item)=>(

                

                    <div className="carousel-item active ">
                        <div className="container-fluid row rounded-2 d-flex corsor-col">
                            <div className="col container p-5 m-4">
                                <h2 className='pt-5 '>{item.name}</h2> <span className='opacity-25'>{item.category}</span>
                                <p className='opacity-25 mt-3'>{item.description}</p>
                            </div>
                            <div className="position-relative col"> <img
                                src={item.imglink}
                                className=" c-img " alt="your image description" style={{width:"65rem"}} />
                                <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay"> </div>
                            </div>
                        </div>
                    </div>
                ))
                }
               

                </div>


                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon " aria-hidden="true" style={{ marginLeft: "-10rem" }}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{ marginRight: "-10rem" }}></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        </>
    )
}
