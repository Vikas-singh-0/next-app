import Image from "next/image";

export const getStaticProps = async () => {
        const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/1`)
        const data = await res.json();
        return {props:{data: data}}
}
const About = ({data: {photo}}) => {
    return (data && <>
    <h2>{photo.title}</h2>
    <p>{photo.description}</p>
    <Image 
        alt="image"
        src={photo.url}
        width={400}
        height={300}
        priority
    />
    </>)
}

export default About;