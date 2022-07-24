package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblShippingMethod")
public class ShippingMethod {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "name")
	public String name;
	@Column(name = "price")
	public Float price;
	@Column(name = "code")
	public String code;
	@Column(name = "status")
	public Integer status;

	public ShippingMethod() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ShippingMethod(Integer entityId, String name, Float price, String code, Integer status) {
		super();
		this.entityId = entityId;
		this.name = name;
		this.price = price;
		this.code = code;
		this.status = status;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

}
