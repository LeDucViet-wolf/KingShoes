package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblCustomerPoint")
public class CustomerPoint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "customer_id")
	public String customerId;
	@Column(name = "value")
	public String value;

	public CustomerPoint() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomerPoint(Integer entityId, String customerId, String value) {
		super();
		this.entityId = entityId;
		this.customerId = customerId;
		this.value = value;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public String getCustomerId() {
		return customerId;
	}

	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
}
