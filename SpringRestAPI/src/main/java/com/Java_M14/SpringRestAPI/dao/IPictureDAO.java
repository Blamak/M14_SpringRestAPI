package com.Java_M14.SpringRestAPI.dao;

import java.util.List;
import java.util.Optional;

//import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.Java_M14.SpringRestAPI.dto.Picture;
import com.Java_M14.SpringRestAPI.dto.Shop;

public interface IPictureDAO extends JpaRepository<Picture, Long> {
	
	List<Picture> findByShop(Optional<Shop> shop);

}
