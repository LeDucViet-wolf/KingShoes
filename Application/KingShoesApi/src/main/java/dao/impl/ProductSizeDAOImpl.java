package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.ProductSizeDAO;
import entities.ProductSize;
import utils.HibernateUtil;

public class ProductSizeDAOImpl implements ProductSizeDAO {
	@Override
	public List<ProductSize> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<ProductSize> list = session.createQuery("from ProductSize", ProductSize.class).list();
			session.getTransaction().commit();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return null;
	}

	public List<ProductSize> getByProductId(int productId) {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<ProductSize> list = session
					.createQuery("from ProductSize where productId = :productId", ProductSize.class)
					.setParameter("productId", productId).list();
			session.getTransaction().commit();
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return null;
	}

	@Override
	public ProductSize getById(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			ProductSize productSize = session.get(ProductSize.class, entityId);
			return productSize;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.close();
		}
		return null;
	}

	@Override
	public Integer insert(ProductSize entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			Integer entityId = (Integer) session.save(entity);
			session.getTransaction().commit();
			return entityId;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}

	@Override
	public Integer update(ProductSize entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.update(entity);
			session.getTransaction().commit();
			return entity.getEntityId();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}

	@Override
	public Integer delete(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.delete(getById(entityId));
			session.getTransaction().commit();
			return 1;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		} finally {
			session.close();
		}
		return 0;
	}
}
