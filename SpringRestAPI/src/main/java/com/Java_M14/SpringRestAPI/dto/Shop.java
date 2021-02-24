package com.Java_M14.SpringRestAPI.dto;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="shop")
public class Shop {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name= "name")
	private String name;
	
	@OneToMany(mappedBy="shop")
	private List<Picture> pictures;
	
	

	// Constructors
	public Shop() {

	}

	public Shop(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	//Getters & Setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
//	public List<Picture> getPictures() {
//		return pictures;
//	}
//
//	public void setPictures(List<Picture> pictures) {
//		this.pictures = pictures;
//	}

	
}
