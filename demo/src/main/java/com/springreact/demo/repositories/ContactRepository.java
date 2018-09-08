package com.springreact.demo.repositories;

import com.springreact.demo.models.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> {
    @Override
    void delete(Contact deleted);
}