package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblCustomerAddress")
public class CustomerAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "first_name")
	public String firstName;
	@Column(name = "last_name")
	public String lastName;
	@Column(name = "address")
	public String address;
	@Column(name = "city")
	public String city;
	@Column(name = "region")
	public String region;
	@Column(name = "country")
	public String country;
	@Column(name = "phone")
	public String phone;
	@Column(name = "type")
	public String type;
	@Column(name = "customer_id")
	public int customerId;
	
	public CustomerAddress() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CustomerAddress(Integer entityId, String firstName, String lastName, String address, String city,
			String region, String country, String phone, String type, int customerId) {
		super();
		this.entityId = entityId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.city = city;
		this.region = region;
		this.country = country;
		this.phone = phone;
		this.type = type;
		this.customerId = customerId;
	}

	public Integer getEntityId() {
		return entityId;
	}

	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	
	
}
