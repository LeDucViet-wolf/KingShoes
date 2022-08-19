import React from 'react'

const Sidebar = ({ ...props }) => {
    const { priceFilter, sizeFilter, handleFilterByPrice, handleFilterBySize } = props

    return (
        <>
            {/* Shop Sidebar */}
            <div className="col-lg-3 col-md-4">
                <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Filter by price</span>
                </h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: (priceFilter == 'price-all') ? true : false }}
                                id="price-all" />
                            <label className="custom-control-label" htmlFor="price-all">All Price</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-1' ? true : false }}
                                id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">0 - 1,000,000 (VND)</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-2' ? true : false }}
                                id="price-2" />
                            <label className="custom-control-label" htmlFor="price-2">1,000,000 - 3,000,000 (VND)</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-3' ? true : false }}
                                id="price-3" />
                            <label className="custom-control-label" htmlFor="price-3">3,000,000 - 5,000,000 (VND)</label>
                        </div>
                    </form>
                </div>

                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-all' ? true : false }}
                                id="size-all" />
                            <label className="custom-control-label" htmlFor="size-all">All Size</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-1' ? true : false }}
                                id="size-1" />
                            <label className="custom-control-label" htmlFor="size-1">30 - 35</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-2' ? true : false }}
                                id="size-2" />
                            <label className="custom-control-label" htmlFor="size-2">35 - 40</label>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-3' ? true : false }}
                                id="size-3" />
                            <label className="custom-control-label" htmlFor="size-3">40 - 45</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar