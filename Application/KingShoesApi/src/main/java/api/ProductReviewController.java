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

import dao.impl.ProductReviewDAOImpl;
import entities.ProductReview;

@Path(value = "/product-reviews")
public class ProductReviewController {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<ProductReview> list = new ProductReviewDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-product-id/{productId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getByProductId(@PathParam("productId") int productId) {
		List<ProductReview> list = new ProductReviewDAOImpl().getByProductId(productId);
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		ProductReview productReview = new ProductReviewDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(productReview);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		ProductReview productReview = son.fromJson(dataJson, ProductReview.class);
		int result = new ProductReviewDAOImpl().insert(productReview);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		ProductReview productReview = son.fromJson(dataJson, ProductReview.class);
		int result = new ProductReviewDAOImpl().update(productReview);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new ProductReviewDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}
