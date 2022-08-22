import React from 'react'

const Sidebar = ({ ...props }) => {
    const {
        products,
        productLength,
        productPriceLength01,
        productPriceLength13,
        productPriceLength35,
        productSizeLength3035,
        productSizeLength3540,
        productSizeLength4045,
        categories,
        categoryFilter,
        priceFilter,
        sizeFilter,
        handleFilterByCategory,
        handleFilterByPrice,
        handleFilterBySize } = props

    const convertCategory = []

    categories.forEach((c) => {
        convertCategory.push({
            ...c,
            productCount: products.filter((p) => p.categoryId == c.entityId).length,
        })
    })

    return (
        <>
            {/* Shop Sidebar */}
            <div className="col-lg-3 col-md-4">
                <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Filter by category</span>
                </h5>
                <div className="bg-light p-4 mb-30">
                    <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByCategory}
                                className="custom-control-input"
                                {...{ defaultChecked: (categoryFilter == 0) ? true : false }}
                                id={0} />
                            <label className="custom-control-label" htmlFor={0}>All Category</label>
                            <span className="badge border font-weight-normal">{`${productLength} shoes`}</span>
                        </div>
                        {
                            convertCategory
                                ? convertCategory.map(item => (
                                    <div key={item.entityId} className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                        <input
                                            type="checkbox"
                                            onClick={handleFilterByCategory}
                                            className="custom-control-input"
                                            {...{ defaultChecked: categoryFilter == item.entityId ? true : false }}
                                            id={item.entityId} />
                                        <label className="custom-control-label" htmlFor={item.entityId}>{item.name}</label>
                                        <span className="badge border font-weight-normal">{`${item.productCount} shoes`}</span>
                                    </div>))
                                : ""
                        }
                    </form>
                </div>

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
                            <span className="badge border font-weight-normal">{`${productLength} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-1' ? true : false }}
                                id="price-1" />
                            <label className="custom-control-label" htmlFor="price-1">0 - 1,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">{`${productPriceLength01} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-2' ? true : false }}
                                id="price-2" />
                            <label className="custom-control-label" htmlFor="price-2">1,000,000 - 3,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">{`${productPriceLength13} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterByPrice}
                                className="custom-control-input"
                                {...{ defaultChecked: priceFilter == 'price-3' ? true : false }}
                                id="price-3" />
                            <label className="custom-control-label" htmlFor="price-3">3,000,000 - 5,000,000 (VND)</label>
                            <span className="badge border font-weight-normal">{`${productPriceLength35} shoes`}</span>
                        </div>
                    </form>
                </div>

                <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3">Filter by size</span>
                </h5>
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
                            <span className="badge border font-weight-normal">{`${productLength} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-1' ? true : false }}
                                id="size-1" />
                            <label className="custom-control-label" htmlFor="size-1">30 - 35</label>
                            <span className="badge border font-weight-normal">{`${productSizeLength3035} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-2' ? true : false }}
                                id="size-2" />
                            <label className="custom-control-label" htmlFor="size-2">35 - 40</label>
                            <span className="badge border font-weight-normal">{`${productSizeLength3540} shoes`}</span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                            <input
                                type="checkbox"
                                onClick={handleFilterBySize}
                                className="custom-control-input"
                                {...{ defaultChecked: sizeFilter == 'size-3' ? true : false }}
                                id="size-3" />
                            <label className="custom-control-label" htmlFor="size-3">40 - 45</label>
                            <span className="badge border font-weight-normal">{`${productSizeLength4045} shoes`}</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sidebar