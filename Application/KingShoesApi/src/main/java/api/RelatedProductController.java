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

import dao.impl.RelatedProductDAOImpl;
import entities.RelatedProduct;

@Path(value = "/related-products")
public class RelatedProductController {
	@GET
	@Path("/get-all")
	@Produces(MediaType.APPLICATION_JSON)
	public String getAll() {
		List<RelatedProduct> list = new RelatedProductDAOImpl().getAll();
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@GET
	@Path("/get-by-id/{entityId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getById(@PathParam("entityId") int entityId) {
		RelatedProduct relatedProduct = new RelatedProductDAOImpl().getById(entityId);
		Gson son = new Gson();
		String data = son.toJson(relatedProduct);
		return data;
	}
	
	@GET
	@Path("/get-by-product-id/{productId}")
	@Produces(MediaType.APPLICATION_JSON)
	public String getByProductId(@PathParam("productId") int productId) {
		List<RelatedProduct> list = new RelatedProductDAOImpl().getByProductId(productId);
		Gson son = new Gson();
		String data = son.toJson(list);
		return data;
	}

	@POST
	@Path("/insert")
	@Consumes(MediaType.APPLICATION_JSON)
	public String insert(String dataJson) {
		Gson son = new Gson();
		RelatedProduct relatedProduct = son.fromJson(dataJson, RelatedProduct.class);
		int result = new RelatedProductDAOImpl().insert(relatedProduct);
		String data = son.toJson(result);
		return data;
	}

	@PUT
	@Path("/update")
	@Consumes(MediaType.APPLICATION_JSON)
	public String update(String dataJson) {
		Gson son = new Gson();
		RelatedProduct relatedProduct = son.fromJson(dataJson, RelatedProduct.class);
		int result = new RelatedProductDAOImpl().update(relatedProduct);
		String data = son.toJson(result);
		return data;
	}

	@DELETE
	@Path("/delete/{entityId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public String delete(@PathParam("entityId") int entityId) {
		int result = new RelatedProductDAOImpl().delete(entityId);
		Gson son = new Gson();
		String data = son.toJson(result);
		return data;
	}
}