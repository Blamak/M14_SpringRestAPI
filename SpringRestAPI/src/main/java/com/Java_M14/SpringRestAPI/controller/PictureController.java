package com.Java_M14.SpringRestAPI.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Java_M14.SpringRestAPI.dto.Picture;
import com.Java_M14.SpringRestAPI.service.PictureServiceImpl;

@RestController
@RequestMapping("/shops")
public class PictureController {
	
	@Autowired
	PictureServiceImpl pictureServiceImpl;
	
	@GetMapping("/{id}/pictures")
	public List<Picture> listPictures(@PathVariable Long id) {
		return pictureServiceImpl.listPictures(id);
	}
	
	@PostMapping("/{id}/pictures")
	public Picture addPicture(@PathVariable Long id, @RequestBody Map<String, String> pictureInfo) {
		return pictureServiceImpl.addPicture(id, pictureInfo);		
	}
	
	@DeleteMapping("/{id}/pictures") 
	public ResponseEntity<String> deleteAllPictures(@PathVariable Long id) {
		return pictureServiceImpl.deleteAllPictures(id);
	}

}
