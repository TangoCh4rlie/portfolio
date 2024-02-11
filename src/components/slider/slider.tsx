import Image from "next/image"
// image from public img import
import image1 from '/public/img/50408224.png';
import image2 from '/public/img/Serrata.png';
import './style.css'

export const ProjectSlider = () => {
    const list = [
        {
            number: "01",
            title: "Projet",
            type: "Site web",
            href: "https://www.google.com",
            img: image1
        },
        {
            number: "02",
            title: "Projet",
            type: "portfolio",
            href: "https://www.google.com",
            img: image2
        },

    ]
    return (
        <div className="global">
            <div className="warpp">
                <section className="work">
                    <div className="work_left">
                        {list.map(({ number, title, type, href }) => (
                            <div className="work_text" key={number}>
                                <div className="work_info">
                                    <div className="work_letf-bl">
                                        <span className="work_num">{number}</span>
                                        <h2 className="title">
                                            {title}
                                            <span className="storke">{type}</span>
                                        </h2>
                                        <a href={href} className="work_link">view more</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="work_right">
                        <div className="work_right-bl">
                            <div className="work_photo">
                                {list.map(({ number, img }) => (
                                    <div className="work_photo-item" title={number} key={number}>
                                        <Image src={img} width={200} height={200} alt={number} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ProjectSlider;