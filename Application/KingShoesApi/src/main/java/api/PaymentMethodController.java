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

import dao.impl.PaymentMethodDAOImpl;
import entities.PaymentMethod;

@Path(value = "/payment-method")
public class PaymentMethodController {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<PaymentMethod> list = new PaymentMethodDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}
	
	@GET
	@Path("/get-list-enabled")
	@Produces(MediaType.APPLICATION_JSON)
	public String getListEnabled() {
		List<PaymentMethod> list = new PaymentMethodDAOImpl().getListEnabled();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		PaymentMethod paymentMethod = new PaymentMethodDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(paymentMethod);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		PaymentMethod paymentMethod = son.fromJson(dataJson, PaymentMethod.class);
		int result = new PaymentMethodDAOImpl().insert(paymentMethod);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		PaymentMethod paymentMethod = son.fromJson(dataJson, PaymentMethod.class);
		int result = new PaymentMethodDAOImpl().update(paymentMethod);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new PaymentMethodDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
