import React from 'react'
import '../App2.css';

const data =
    [
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6677/1476677-v-afe46e2c17e2",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/948/1090948-v-5d7d08b8d6ce",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8727/1448727-v-984e086fc891",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2213/1042213-v-1416e8e25397",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/928/1360928-v-b808273e5b54",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2733/1122733-v-5df3bdae2d7a",


        },
        {
            name:" Mahabharat",
            category: "metholgy . animation . cartoon",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            imglink: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9833/1119833-v-fcf7e530dcd6",


        },
       

    ]


export default function SmCoursol(props) {
    return (
        <div className='p-4'>
            <h2 className='text-light mb-4'>{props.heading}</h2>
            <div className=" d-flex  dodo container-fluid " style={{overflowX:"scroll" ,overscrollBehavior:"auto" , scrollBehavior:"smooth"}}>
            {

            data.map((item) => (

                <div className="">
                    <div className="ggg card rounded-5 m-3 shadow border-dark">
                        <div className="position-relative">
                            <img
                                src={item.imglink}
                                className="img-fluid rounded-3"
                                alt="your image description"
                            />
                            <div className="image position-absolute top-0 start-0 w-100 h-100 gradient-overlay"></div>
                        </div>
                        <div className="card-img-overlay row d-flex flex-column justify-content-end p-4" style={{ fontSize: '0.8rem', marginBottom: '-30px' }}>
                            <p className="text-light fw-bolder" style={{ fontSize: '1rem' }}>{item.name}</p>
                            <p className="text-light fw-bold" style={{ marginTop: '-15px' }}>{item.category}</p>
                            <p className="text-light" style={{ marginTop: '-10px' }}>{item.description}</p>
                        </div>
                    </div>
                </div>

            ))
            }

            </div>
        </div>
    )
}
