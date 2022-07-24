package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblUser")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "status")
	public Integer status;
	@Column(name = "shipping_id")
	public Integer shippingId;
	@Column(name = "payment_id")
	public Integer paymentId;
	@Column(name = "grand_total")
	public Float grandTotal;
	@Column(name = "note")
	public String note;

	public Order() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Order(Integer entityId, Integer status, Integer shippingId, Integer paymentId, Float grandTotal,
			String note) {
		super();
		this.entityId = entityId;
		this.status = status;
		this.shippingId = shippingId;
		this.paymentId = paymentId;
		this.grandTotal = grandTotal;
		this.note = note;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getShippingId() {
		return shippingId;
	}

	public void setShippingId(Integer shippingId) {
		this.shippingId = shippingId;
	}

	public Integer getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Integer paymentId) {
		this.paymentId = paymentId;
	}

	public Float getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(Float grandTotal) {
		this.grandTotal = grandTotal;
	}

	public String getNote() {
		
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

}
