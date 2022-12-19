package api;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import dao.impl.CustomerAddressDAOImpl;
import entities.CustomerAddress;

@Path(value = "/customer-address")
public class CustomerAddressController {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<CustomerAddress> list = new CustomerAddressDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}
	
	@GET
	@Path("/get-all-billing/{customerId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllBilling(@PathParam("customerId") int customerId) {
		List<CustomerAddress> list = new CustomerAddressDAOImpl().getAllBilling(customerId);
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}
	
	@GET
	@Path("/get-all-shipping/{customerId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAllShipping(@PathParam("customerId") int customerId) {
		List<CustomerAddress> list = new CustomerAddressDAOImpl().getAllShipping(customerId);
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		CustomerAddress orderAddress = new CustomerAddressDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(orderAddress);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		CustomerAddress customerAddress = son.fromJson(dataJson, CustomerAddress.class);
		int result = new CustomerAddressDAOImpl().insert(customerAddress);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		CustomerAddress customerAddress = son.fromJson(dataJson, CustomerAddress.class);
		int result = new CustomerAddressDAOImpl().update(customerAddress);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new CustomerAddressDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
