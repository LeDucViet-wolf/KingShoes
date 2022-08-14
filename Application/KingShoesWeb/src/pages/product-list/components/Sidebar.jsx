import React from 'react'

const Sidebar = ({ ...props }) => {
    const { setSearchParams } = props
    
    return (
        <>
            {/* Shop Sidebar */}
            <div className="col-lg-3 col-md-4">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by price</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" defaultChecked={true} id="price-all" />
                            <label className="custom-control-label" htmlFor="price-all">All Price</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">0 - 1,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2" />
                            <label className="custom-control-label" htmlFor="price-2">1,000,000 - 3,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-2" />
                            <label className="custom-control-label" htmlFor="price-2">3,000,000 - 5,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">295</span>
                        </div>
                    </form>
                </div>

                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Filter by size</span></h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" defaultChecked={true} id="price-all" />
                            <label className="custom-control-label" htmlFor="price-all">All Size</label>
                            <span className="badge border font-weight-normal">1000</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">30-35</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">35-40</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input type="checkbox" className="custom-control-input" id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">40-45</label>
                            <span className="badge border font-weight-normal">150</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar