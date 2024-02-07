import Image from 'next/image';
import image from '/public/img/50408224.png';
export default function Home() {
    
    return (
        <div>
            <Image src={image} width={500} height={500} alt='test' />
        </div>
    );
}
