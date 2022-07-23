package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblQuoteItem")
public class QuoteItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "quote_id")
	public Integer quoteId;
	@Column(name = "product_id")
	public Integer productId;
	@Column(name = "quantity")
	public Integer quantity;
	@Column(name = "row_total")
	public Float rowTotal;

	public QuoteItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public QuoteItem(Integer entityId, Integer quoteId, Integer productId, Integer quantity, Float rowTotal) {
		super();
		this.entityId = entityId;
		this.quoteId = quoteId;
		this.productId = productId;
		this.quantity = quantity;
		this.rowTotal = rowTotal;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public Integer getQuoteId() {
		return quoteId;
	}

	public void setQuoteId(Integer quoteId) {
		this.quoteId = quoteId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Float getRowTotal() {
		return rowTotal;
	}

	public void setRowTotal(Float rowTotal) {
		this.rowTotal = rowTotal;
	}
}
