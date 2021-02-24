package com.Java_M14.SpringRestAPI.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Java_M14.SpringRestAPI.dto.Shop;

public interface IShopDAO extends JpaRepository<Shop, Long> {

}
