package dao.impl;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import dao.ContactDAO;

import entities.Contact;
import utils.HibernateUtil;

public class ContactDAOImpl implements ContactDAO{

	@Override
	public List<Contact> getAll() {
		SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			List<Contact> list = session.createQuery("from Contact", Contact.class).list();
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
	public Contact getById(int entityId) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		try {
			Contact contact = session.get(Contact.class, entityId);
			return contact;
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			session.close();
		}
		return null;
	}

	@Override
	public Integer insert(Contact entity) {
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
	public Integer update(Contact entity) {
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