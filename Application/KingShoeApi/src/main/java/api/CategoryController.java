package api;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.google.gson.Gson;

import dao.impl.CategoryDAOImpl;
import entities.Category;

@Path(value = "/categories")
public class CategoryController {
	@GET
    @Path("/getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        List<Category> list = new CategoryDAOImpl().getAll();
        Gson son = new Gson();
        String data = son.toJson(list);
        return data;
    }

}
