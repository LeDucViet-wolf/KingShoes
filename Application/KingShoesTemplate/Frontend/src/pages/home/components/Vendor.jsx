import React, { useEffect, useRef } from 'react';


// const runVendor = () => {
//     check();
// }

// function check()
// {
//     debugger
//     if(document.getElementsByClassName("hahaha").length >0)
//     {
//         debugger
//         Vendor.call();
//         return;
//     }else
//     {
//         debugger
//         setTimeout(()=>{check();},1000);
//     }
// }

function Vendor() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true;

        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (mounted.current) {
            $('.vendor-carousel').owlCarousel({
                loop: true,
                margin: 29,
                nav: false,
                autoplay: true,
                smartSpeed: 1000,
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 3
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            });
        }
    }, [mounted])


    return (
        <div className="container-fluid py-5" ref={mounted}>
            <div className="row px-xl-5">
                <div className="col">
                    <div className="owl-carousel vendor-carousel">
                        <div className="bg-light p-4">
                            <img src="img/vendor-1.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-2.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-3.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-4.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-5.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-6.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-7.jpg" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="img/vendor-8.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vendor