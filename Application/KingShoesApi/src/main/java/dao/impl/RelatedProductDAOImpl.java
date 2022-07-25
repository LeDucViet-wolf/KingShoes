package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.RelatedProductDAO;
import entities.RelatedProduct;
import utils.HibernateUtil;

public class RelatedProductDAOImpl implements RelatedProductDAO {

	@Override
	public List<RelatedProduct> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<RelatedProduct> list = session.createQuery("from RelatedProduct", RelatedProduct.class).list();
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
	public RelatedProduct getById(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			RelatedProduct relatedProduct = session.get(RelatedProduct.class, entityId);
			return relatedProduct;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}

	@Override
	public Integer insert(RelatedProduct entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			Integer entityId = (Integer) session.save(entity);
			session.getTransaction().commit();
			return entityId;
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		}finally {
			session.close();
		}
		return 0;
	}

	@Override
	public Integer update(RelatedProduct entity) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			session.beginTransaction();
			session.update(entity);
			session.getTransaction().commit();
			return entity.getEntityId();
		} catch (Exception e) {
			e.printStackTrace();
			session.getTransaction().rollback();
		}finally {
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
		}finally {
			session.close();
		}
		return 0;
	}

}
