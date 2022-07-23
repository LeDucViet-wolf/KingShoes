package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tblCustomer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "entity_id")
	public Integer entityId;
	@Column(name = "first_name")
	public Integer firstName;
	@Column(name = "last_name")
	public String lastName;
	@Column(name = "birthday")
	public String birthday;
	@Column(name = "gender")
	public Integer gender;
	@Column(name = "email")
	public String email;
	@Column(name = "phone")
	public String phone;
	@Column(name = "password")
	public String password;
	@Column(name = "address")
	public String address;
	@Column(name = "status")
	public Integer status;
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Customer(Integer entityId, Integer firstName, String lastName, String birthday, Integer gender, String email,
			String phone, String password, String address, Integer status) {
		super();
		this.entityId = entityId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = birthday;
		this.gender = gender;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.address = address;
		this.status = status;
	}
	public Integer getEntityId() {
		return entityId;
	}
	public void setEntityId(Integer entityId) {
		this.entityId = entityId;
	}
	public Integer getFirstName() {
		return firstName;
	}
	public void setFirstName(Integer firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public Integer getGender() {
		return gender;
	}
	public void setGender(Integer gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
}
