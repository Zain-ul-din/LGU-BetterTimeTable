import { Flex, useMediaQuery  } from "@chakra-ui/react";

export default function BgGlow () {

    const [isUnder100] = useMediaQuery("(max-width: 100px");

    if (isUnder100) return <></>

    return <>
    
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gradient-left-dark.svg" alt="gradient_img_left" 
            style={{
                position: 'fixed',
                top: "0%",
                left: "-10%",
                right: "-50%",
                bottom: '0%',
                zIndex: -10,
                opacity: '80%'
            }}
        />
        
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/gradient-right-dark.svg" alt="gradient_img_right" 
            style={{
                position: 'fixed',
                top: "-50%",
                right: "-50%",
                zIndex: -10,
                opacity: '60%'
            }}
        />
    </>
}

