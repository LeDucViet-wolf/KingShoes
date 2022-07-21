package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;


import dao.CategoryDAO;
import entities.Category;
import utils.HibernateUtil;

public class CategoryDAOImpl implements CategoryDAO{

	@Override
	public List<Category> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        Session session = sessionFactory.openSession();
        try {
            session.beginTransaction();
            List list = session.createQuery("from Category").list();
            session.getTransaction().commit();
            return list;
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            session.getTransaction().rollback();
        }finally {
            session.close();
        }
        return null;
	}
}
