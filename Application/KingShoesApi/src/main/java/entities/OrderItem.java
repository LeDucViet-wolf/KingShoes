package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblOrderItem")
public class OrderItem {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "order_id")
	public int orderId;
	@Column(name = "product_id")
	public String productId;
	@Column(name = "quantity")
	public String quantity;
	@Column(name = "row_total")
	public String rowTotal;

	public OrderItem() {
		super();
		// TODO Auto-generated constructor stub
	}

	public OrderItem(Integer entityId, int orderId, String productId, String quantity, String rowTotal) {
		super();
		this.entityId = entityId;
		this.orderId = orderId;
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

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getRowTotal() {
		return rowTotal;
	}

	public void setRowTotal(String rowTotal) {
		this.rowTotal = rowTotal;
	}

}
